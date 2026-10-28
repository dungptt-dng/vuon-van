/* VƯỜN VĂN – trang giáo viên */
window.VV = window.VV || {};

VV.teacher = (function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = VV.esc, ui = function () { return VV.ui; };
  var state = { classCode: null, tab: 't-overview', filter: { student: '', genre: '', status: '', q: '' }, lastReport: null };
  var DEFAULT_PIN = '1234';

  function genreName(id) { return (VV.genreById(id) || { name: id }).name; }

  /* ---------- Đăng nhập giáo viên ---------- */
  function askLogin() {
    Promise.all([VV.db.getKV('teacherPin', DEFAULT_PIN), VV.db.getKV('teacherClass', '')]).then(function (r) {
      var d = ui().dialog('Đăng nhập giáo viên',
        '<label class="field-label" for="t-class">Mã lớp</label><input id="t-class" type="text" maxlength="24" value="' + esc(r[1]) + '" placeholder="Ví dụ: 4A-HOAMAI" autocapitalize="characters">' +
        '<p class="small muted">Học sinh nhập đúng mã lớp này khi đăng nhập để bài làm được ghép vào lớp của thầy cô.</p>' +
        '<label class="field-label" for="t-pin">Mã PIN giáo viên</label><input id="t-pin" type="password" inputmode="numeric" maxlength="12" autocomplete="off">' +
        (r[0] === DEFAULT_PIN ? '<p class="small muted">Lần đầu dùng, mã PIN là <b>1234</b>. Thầy cô nhớ đổi PIN trong mục Cài đặt.</p>' : '') +
        '<p id="t-err" class="form-error" role="alert"></p>',
        [{ label: 'Huỷ' }, {
          label: 'Vào trang giáo viên', cls: 'btn-primary', onClick: function (close) {
            var cls = $('#t-class').value.replace(/\s+/g, '').toUpperCase();
            if (!cls) { $('#t-err').textContent = 'Thầy cô nhập mã lớp nhé.'; return false; }
            if ($('#t-pin').value !== r[0]) { $('#t-err').textContent = 'Mã PIN chưa đúng.'; return false; }
            VV.db.setKV('teacherClass', cls);
            close();
            enter(cls);
          }
        }]);
      setTimeout(function () { (r[1] ? $('#t-pin', d.el) : $('#t-class', d.el)).focus(); }, 50);
    });
  }

  function enter(classCode) {
    state.classCode = classCode;
    VV.state.role = 'teacher';
    VV.state.classCode = classCode;
    VV.state.student = null;
    VV.db.setKV('session', { role: 'teacher', classCode: classCode });
    $('#s-login').hidden = true;
    $('#app-shell').hidden = false;
    $('#nav-student').hidden = true;
    $('#nav-teacher').hidden = false;
    $('#t-class-label').textContent = classCode;
    $('#who').textContent = '👩‍🏫 Giáo viên';
    bindTabs();
    ui().show('s-teacher');
    showTab(state.tab);
    VV.backup.auto({ role: 'teacher' });
    VV.report.autoPeriodic(classCode).then(function (rec) {
      if (rec) VV.notify.show('Đã tạo báo cáo định kỳ', rec.data.label + ' – ' + rec.data.totalEssays + ' bài', 'auto-report');
    });
    VV.notify.startLoop(function () { VV.notify.checkTeacher(classCode); });
  }

  var tabsBound = false;
  function bindTabs() {
    if (tabsBound) return;
    tabsBound = true;
    $$('.tab').forEach(function (t) { t.addEventListener('click', function () { showTab(t.getAttribute('data-tab')); }); });
  }

  function showTab(id) {
    state.tab = id;
    $$('.tab').forEach(function (t) { var on = t.getAttribute('data-tab') === id; t.classList.toggle('active', on); t.setAttribute('aria-selected', on); });
    $$('.tabpanel').forEach(function (p) { p.hidden = p.id !== id; });
    ({ 't-overview': renderOverview, 't-essays': renderEssays, 't-students': renderStudents, 't-assign': renderAssign, 't-report': renderReport, 't-settings': renderSettings })[id]();
  }

  // Chỉ tự vẽ lại các mục chỉ-xem, tránh xoá chữ thầy cô đang gõ ở các mục có ô nhập
  function refresh() {
    if (VV.state.role !== 'teacher') return;
    if ((state.tab === 't-overview' || state.tab === 't-essays') && document.activeElement !== $('#f-q')) showTab(state.tab);
  }

  function data() {
    return Promise.all([VV.db.all('essays'), VV.db.all('students'), VV.db.all('assignments')]).then(function (r) {
      var cc = state.classCode;
      return {
        essays: r[0].filter(function (e) { return e.classCode === cc; }),
        students: r[1].filter(function (s) { return s.classCode === cc; }).sort(function (a, b) { return a.name.localeCompare(b.name, 'vi'); }),
        assignments: r[2].filter(function (a) { return a.classCode === cc; })
      };
    });
  }

  function statusTag(e) {
    if (e.status === 'writing') return '<span class="tag write">Đang viết</span>';
    if (e.teacherReviewed) return '<span class="tag ok">Đã nhận xét</span>';
    return '<span class="tag wait">Chờ xem</span>';
  }

  /* ---------- Tổng quan ---------- */
  function renderOverview() {
    data().then(function (d) {
      var weekAgo = Date.now() - 7 * 86400000;
      var submitted = d.essays.filter(function (e) { return e.status !== 'writing'; });
      var week = submitted.filter(function (e) { return (e.submittedAt || 0) >= weekAgo; });
      var scores = week.map(VV.report.finalScore).filter(function (x) { return x != null; });
      var waiting = submitted.filter(function (e) { return !e.teacherReviewed; });
      var html = '<div class="stat-grid">' +
        '<div class="stat"><b>' + d.students.length + '</b><span>học sinh</span></div>' +
        '<div class="stat"><b>' + week.length + '</b><span>bài nộp 7 ngày qua</span></div>' +
        '<div class="stat"><b>' + VV.fmt.score(scores.length ? scores.reduce(function (a, b) { return a + b; }, 0) / scores.length : null) + '</b><span>điểm TB 7 ngày</span></div>' +
        '<div class="stat"><b>' + waiting.length + '</b><span>bài chờ thầy cô xem</span></div></div>';
      html += '<div class="card"><h3>📮 Trao đổi bài với học sinh</h3>' +
        '<p class="small muted">Học sinh làm bài ngay trên máy này thì bài tự hiện ở đây. Học sinh làm ở máy khác (ở nhà, máy tính bảng…) thì bấm <b>📤 Gửi bài cho thầy cô</b> trong mục "Bài của em" để lưu ra tệp và gửi thầy cô qua Zalo, email hoặc USB.</p>' +
        '<div class="row-end" style="justify-content:flex-start">' +
        '<label class="btn btn-primary" for="ov-import">📥 Nhận bài của học sinh (mở tệp)</label><input id="ov-import" type="file" accept=".json,application/json" multiple hidden>' +
        '<button class="btn" id="ov-export">📤 Gửi bài tập & nhận xét cho cả lớp</button></div></div>';
      var recent = submitted.sort(function (a, b) { return (b.submittedAt || 0) - (a.submittedAt || 0); }).slice(0, 10);
      html += '<div class="card"><h3>🆕 Bài nộp gần đây</h3>' +
        (recent.length ? essayTable(recent) : '<p class="empty">Chưa có bài nộp nào.</p>') + '</div>';
      $('#t-overview').innerHTML = html;
      bindEssayRows($('#t-overview'), d.essays);
      $('#ov-import').addEventListener('change', importStudentFiles);
      $('#ov-export').addEventListener('click', exportClassFile);
    });
  }

  /* Nhận một hoặc nhiều tệp bài làm học sinh gửi */
  function importStudentFiles(ev) {
    var files = Array.prototype.slice.call(ev.target.files || []);
    ev.target.value = '';
    if (!files.length) return;
    var total = 0, failed = [];
    files.reduce(function (p, f) {
      return p.then(function () {
        return VV.backup.importFile(f, { role: 'teacher' }).then(function (c) { total += c.essays; }, function () { failed.push(f.name); });
      });
    }, Promise.resolve()).then(function () {
      ui().toast(total ? 'Đã nhận ' + total + ' bài mới/cập nhật 📬' : 'Không có bài mới trong tệp.', total ? 'ok' : 'warn', 5000);
      if (failed.length) ui().toast('Không đọc được: ' + failed.join(', '), 'err', 7000);
      refresh();
    });
  }

  function exportClassFile() {
    VV.backup.exportClass(state.classCode).then(function (n) {
      ui().dialog('Gửi bài tập & nhận xét',
        '<p>Vườn Văn đã lưu tệp gồm <b>' + n.assignments + ' bài tập</b> và <b>' + n.essays + ' bài đã nhận xét</b> của lớp ' + esc(state.classCode) + ' vào thư mục <b>Tải xuống</b> (Downloads).</p>' +
        '<p>Thầy cô gửi tệp này cho cả lớp (nhóm Zalo, email…). Học sinh vào mục <b>Bài tập → 📥 Nhận bài tập từ tệp</b> để nhận bài tập mới, điểm và lời nhận xét của mình (mỗi em chỉ thấy bài của mình).</p>',
        [{ label: 'Đã hiểu', cls: 'btn-primary' }]);
    });
  }

  function essayTable(list) {
    return '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Ngày</th><th>Học sinh</th><th>Dạng văn</th><th>Đề bài</th><th>Số chữ</th><th>Điểm tự chấm</th><th>Điểm GV</th><th>Trạng thái</th></tr></thead><tbody>' +
      list.map(function (e) {
        return '<tr class="click" data-essay="' + e.id + '" tabindex="0"><td>' + esc(VV.fmt.dateTime(e.submittedAt || e.updatedAt)) + '</td><td><b>' + esc(e.studentName) + '</b></td><td>' + esc(genreName(e.genreId)) +
          '</td><td>' + esc(e.topic.length > 60 ? e.topic.slice(0, 58) + '…' : e.topic) + '</td><td>' + (e.wordCount || 0) + '</td><td>' + (e.grade ? VV.fmt.score(e.grade.total) : '–') +
          '</td><td>' + (e.teacherScore != null && e.teacherScore !== '' ? VV.fmt.score(e.teacherScore) : '–') + '</td><td>' + statusTag(e) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function bindEssayRows(root, essays) {
    $$('[data-essay]', root).forEach(function (row) {
      var open = function () { openEssay(essays.find(function (e) { return e.id === row.getAttribute('data-essay'); })); };
      row.addEventListener('click', open);
      row.addEventListener('keydown', function (ev) { if (ev.key === 'Enter') open(); });
    });
  }

  /* ---------- Xem & nhận xét một bài ---------- */
  function openEssay(e) {
    if (!e) return;
    var body = '<p class="muted">' + esc(e.studentName) + ' · ' + esc(genreName(e.genreId)) + ' · ' + esc(VV.fmt.dateTime(e.submittedAt || e.updatedAt)) + ' · ' + (e.wordCount || 0) + ' chữ</p>' +
      '<p><b>Đề:</b> ' + esc(e.topic) + (e.request ? '<br><b>Yêu cầu riêng của em:</b> ' + esc(e.request) : '') + '</p>' +
      '<div class="essay-view">' + esc(e.content || '(chưa có nội dung)') + '</div>' +
      (e.grade ? '<details style="margin-top:.8rem"><summary><b>Kết quả chấm tự động: ' + VV.fmt.score(e.grade.total) + ' điểm</b></summary>' + VV.renderGrade(Object.assign({}, e, { teacherScore: null, teacherComment: '' })) + '</details>' : '') +
      (e.history && e.history.length ? '<p class="small muted">Lịch sử nộp: ' + e.history.map(function (h) { return VV.fmt.score(h.total) + 'đ (' + VV.fmt.date(h.at) + ')'; }).join(' → ') + ' → ' + VV.fmt.score(e.grade && e.grade.total) + 'đ</p>' : '') +
      '<div class="form-grid"><div><label class="field-label" for="tv-score">Điểm của thầy cô (để trống = dùng điểm tự chấm)</label>' +
      '<input id="tv-score" type="number" min="0" max="10" step="0.25" value="' + (e.teacherScore != null ? esc(e.teacherScore) : '') + '"></div></div>' +
      '<label class="field-label" for="tv-comment">Lời nhận xét gửi em</label><textarea id="tv-comment" rows="3" placeholder="Ví dụ: Bài tả chú mèo rất sinh động! Em chú ý viết hoa đầu câu nhé.">' + esc(e.teacherComment || '') + '</textarea>';
    ui().dialog('Bài của ' + e.studentName, body, [
      { label: '🗑 Xoá bài', cls: 'btn-danger', onClick: function (close) {
        ui().confirm('Xoá bài làm', 'Xoá bài "' + esc(e.topic) + '" của ' + esc(e.studentName) + '?', 'Xoá').then(function (ok) {
          if (ok) VV.db.remove('essays', e.id).then(function () { ui().toast('Đã xoá bài.', 'ok'); refresh(); });
        });
        return false;
      } },
      { label: '💾 Lưu nhận xét', cls: 'btn-primary', onClick: function () {
        var s = $('#tv-score').value.trim();
        if (s !== '' && (isNaN(+s) || +s < 0 || +s > 10)) { ui().toast('Điểm phải từ 0 đến 10.', 'warn'); return false; }
        e.teacherScore = s === '' ? null : Math.round(+s * 4) / 4;
        e.teacherComment = $('#tv-comment').value.trim();
        e.teacherReviewed = true;
        e.reviewedAt = Date.now();
        VV.db.put('essays', e).then(function () { ui().toast('Đã lưu nhận xét 💌', 'ok'); refresh(); });
      } }
    ]);
  }

  /* ---------- Bài làm ---------- */
  function renderEssays() {
    data().then(function (d) {
      var f = state.filter;
      var html = '<div class="toolbar">' +
        '<div><label class="field-label" for="f-student">Học sinh</label><select id="f-student"><option value="">Tất cả</option>' +
        d.students.map(function (s) { return '<option value="' + s.id + '"' + (f.student === s.id ? ' selected' : '') + '>' + esc(s.name) + '</option>'; }).join('') + '</select></div>' +
        '<div><label class="field-label" for="f-genre">Dạng văn</label><select id="f-genre"><option value="">Tất cả</option>' +
        VV.GENRES.map(function (g) { return '<option value="' + g.id + '"' + (f.genre === g.id ? ' selected' : '') + '>' + esc(g.name) + '</option>'; }).join('') + '</select></div>' +
        '<div><label class="field-label" for="f-status">Trạng thái</label><select id="f-status">' +
        [['', 'Đã nộp (tất cả)'], ['wait', 'Chờ thầy cô xem'], ['done', 'Đã nhận xét'], ['writing', 'Đang viết'], ['all', 'Mọi bài kể cả đang viết']]
          .map(function (o) { return '<option value="' + o[0] + '"' + (f.status === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') + '</select></div>' +
        '<div><label class="field-label" for="f-q">Tìm</label><input id="f-q" type="text" value="' + esc(f.q) + '" placeholder="Từ khoá trong đề/bài"></div></div>';
      var list = d.essays.filter(function (e) {
        if (f.student && e.studentId !== f.student) return false;
        if (f.genre && e.genreId !== f.genre) return false;
        if (f.status === '' && e.status === 'writing') return false;
        if (f.status === 'wait' && (e.status === 'writing' || e.teacherReviewed)) return false;
        if (f.status === 'done' && !e.teacherReviewed) return false;
        if (f.status === 'writing' && e.status !== 'writing') return false;
        if (f.q && (e.topic + ' ' + e.content + ' ' + e.studentName).toLowerCase().indexOf(f.q.toLowerCase()) < 0) return false;
        return true;
      }).sort(function (a, b) { return (b.submittedAt || b.updatedAt) - (a.submittedAt || a.updatedAt); });
      html += '<p class="muted">' + list.length + ' bài</p>' + (list.length ? essayTable(list) : '<p class="empty">Không có bài phù hợp.</p>');
      $('#t-essays').innerHTML = html;
      ['student', 'genre', 'status'].forEach(function (k) {
        $('#f-' + k).addEventListener('change', function (ev) { state.filter[k] = ev.target.value; renderEssays(); });
      });
      var qt;
      $('#f-q').addEventListener('input', function (ev) { clearTimeout(qt); qt = setTimeout(function () { state.filter.q = ev.target.value; renderEssays(); setTimeout(function () { var q = $('#f-q'); q.focus(); q.selectionStart = q.value.length; }, 0); }, 400); });
      bindEssayRows($('#t-essays'), d.essays);
    });
  }

  /* ---------- Học sinh ---------- */
  function renderStudents() {
    data().then(function (d) {
      var html = '<div class="card"><h3>➕ Thêm danh sách học sinh</h3><p class="small muted">Mỗi dòng một họ tên. Học sinh đăng nhập đúng họ tên và mã lớp <b>' + esc(state.classCode) + '</b> sẽ được ghép vào đây (báo cáo cũng hiện cả học sinh chưa nộp bài).</p>' +
        '<textarea id="st-add" rows="3" placeholder="Nguyễn Minh An&#10;Trần Bảo Ngọc"></textarea><div class="row-end"><button class="btn btn-primary" id="st-add-btn">Thêm</button></div></div>';
      html += '<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Học sinh</th><th>Số bài nộp</th><th>Điểm TB</th><th>Bài gần nhất</th><th>Hoạt động</th><th></th></tr></thead><tbody>' +
        d.students.map(function (s) {
          var es = d.essays.filter(function (e) { return e.studentId === s.id && e.status !== 'writing'; });
          var sc = es.map(VV.report.finalScore).filter(function (x) { return x != null; });
          var last = es.sort(function (a, b) { return b.submittedAt - a.submittedAt; })[0];
          return '<tr><td><b>' + esc(s.name) + '</b></td><td>' + es.length + '</td><td>' + VV.fmt.score(sc.length ? sc.reduce(function (a, b) { return a + b; }, 0) / sc.length : null) +
            '</td><td>' + (last ? esc(VV.fmt.date(last.submittedAt)) : '–') + '</td><td>' + (s.lastActive ? esc(VV.fmt.ago(s.lastActive)) : 'chưa đăng nhập') +
            '</td><td><button class="btn btn-small" data-see="' + s.id + '">Xem bài</button></td></tr>';
        }).join('') + '</tbody></table></div>';
      if (!d.students.length) html += '<p class="empty">Chưa có học sinh. Học sinh đăng nhập với mã lớp <b>' + esc(state.classCode) + '</b> sẽ tự xuất hiện.</p>';
      $('#t-students').innerHTML = html;
      $('#st-add-btn').addEventListener('click', function () {
        var names = $('#st-add').value.split('\n').map(function (n) { return n.replace(/\s+/g, ' ').trim(); }).filter(function (n) { return n.length >= 2; });
        Promise.all(names.map(function (n) {
          var id = 'st_' + VV.slug(state.classCode) + '_' + VV.slug(n);
          return VV.db.get('students', id).then(function (ex) { if (!ex || ex.deleted) return VV.db.put('students', { id: id, name: n, classCode: state.classCode, createdAt: Date.now() }); });
        })).then(function () { ui().toast('Đã thêm ' + names.length + ' học sinh.', 'ok'); renderStudents(); });
      });
      $$('[data-see]').forEach(function (b) {
        b.addEventListener('click', function () { state.filter = { student: b.getAttribute('data-see'), genre: '', status: 'all', q: '' }; showTab('t-essays'); });
      });
    });
  }

  /* ---------- Giao bài ---------- */
  function renderAssign() {
    data().then(function (d) {
      var due = new Date(Date.now() + 3 * 86400000); due.setHours(20, 0, 0, 0);
      var local = due.getFullYear() + '-' + VV.fmt.pad(due.getMonth() + 1) + '-' + VV.fmt.pad(due.getDate()) + 'T20:00';
      var html = '<div class="card"><h3>📮 Giao bài tập mới</h3><p class="small muted">Học sinh dùng chung máy này sẽ thấy bài tập ngay. Với máy khác, thầy cô bấm <b>📤 Gửi bài tập & nhận xét cho cả lớp</b> ở mục Tổng quan rồi gửi tệp cho học sinh.</p><div class="form-grid">' +
        '<div><label class="field-label" for="as-genre">Dạng văn</label><select id="as-genre">' + VV.GENRES.map(function (g) { return '<option value="' + g.id + '">' + g.icon + ' ' + esc(g.name) + '</option>'; }).join('') + '</select></div>' +
        '<div><label class="field-label" for="as-due">Hạn nộp</label><input id="as-due" type="datetime-local" value="' + local + '"></div></div>' +
        '<label class="field-label" for="as-topic">Đề bài</label><select id="as-topic"></select>' +
        '<input id="as-topic-custom" type="text" maxlength="200" placeholder="…hoặc nhập đề bài khác" style="margin-top:.4rem">' +
        '<label class="field-label" for="as-note">Lời dặn (không bắt buộc)</label><input id="as-note" type="text" maxlength="200" placeholder="Ví dụ: Nhớ dùng ít nhất 2 hình ảnh so sánh">' +
        '<div class="row-end"><button class="btn btn-primary" id="as-create">📮 Giao bài</button></div></div>';
      var list = d.assignments.sort(function (a, b) { return b.createdAt - a.createdAt; });
      html += '<h3>Bài đã giao</h3>' + (list.length ? '<div class="list">' + list.map(function (a) {
        var done = d.essays.filter(function (e) { return e.assignmentId === a.id && e.status !== 'writing'; });
        var names = {}; done.forEach(function (e) { names[e.studentId] = 1; });
        return '<div class="item"><span class="ic">' + VV.genreById(a.genreId).icon + '</span><div class="grow"><div class="t">' + esc(a.title) + '</div>' +
          '<div class="small muted">Hạn: ' + esc(VV.fmt.dateTime(a.dueAt)) + (a.dueAt < Date.now() ? ' (đã hết hạn)' : '') + ' · Đã nộp: <b>' + Object.keys(names).length + '/' + d.students.length + '</b></div>' +
          (a.note ? '<div class="small">📝 ' + esc(a.note) + '</div>' : '') + '</div>' +
          '<button class="btn btn-small" data-asee="' + a.id + '">Xem bài nộp</button><button class="btn btn-small btn-danger" data-adel="' + a.id + '">Xoá</button></div>';
      }).join('') + '</div>' : '<p class="empty">Chưa giao bài nào.</p>');
      $('#t-assign').innerHTML = html;
      var fillTopics = function () {
        var g = VV.genreById($('#as-genre').value);
        var t = VV.coach.topicsFor(g.id);
        $('#as-topic').innerHTML = t.sgk.concat(t.kb).map(function (x) { return '<option>' + esc(x) + '</option>'; }).join('');
      };
      fillTopics();
      $('#as-genre').addEventListener('change', fillTopics);
      $('#as-create').addEventListener('click', function () {
        var dueAt = new Date($('#as-due').value).getTime();
        var topic = $('#as-topic-custom').value.trim() || $('#as-topic').value;
        if (!dueAt || isNaN(dueAt)) { ui().toast('Thầy cô chọn hạn nộp nhé.', 'warn'); return; }
        var a = { id: VV.db.uid('as'), classCode: state.classCode, genreId: $('#as-genre').value, topic: topic, title: topic, note: $('#as-note').value.trim(), dueAt: dueAt, createdAt: Date.now() };
        VV.db.put('assignments', a).then(function () {
          ui().toast('Đã giao bài 🔔 Học sinh ở máy khác nhận qua tệp "Gửi bài tập & nhận xét".', 'ok', 6000);
          renderAssign();
        });
      });
      $$('[data-adel]').forEach(function (b) {
        b.addEventListener('click', function () {
          ui().confirm('Xoá bài tập', 'Xoá bài tập này? Bài học sinh đã nộp vẫn được giữ.', 'Xoá').then(function (ok) {
            if (ok) VV.db.remove('assignments', b.getAttribute('data-adel')).then(renderAssign);
          });
        });
      });
      $$('[data-asee]').forEach(function (b) {
        b.addEventListener('click', function () {
          var a = list.find(function (x) { return x.id === b.getAttribute('data-asee'); });
          var es = d.essays.filter(function (e) { return e.assignmentId === a.id && e.status !== 'writing'; });
          var missing = d.students.filter(function (s) { return !es.some(function (e) { return e.studentId === s.id; }); });
          var dlg = ui().dialog('Bài nộp: ' + a.title, (es.length ? essayTable(es) : '<p class="empty">Chưa có bài nộp.</p>') +
            (missing.length ? '<p><b>Chưa nộp (' + missing.length + '):</b> ' + missing.map(function (s) { return esc(s.name); }).join(', ') + '</p>' : ''), [{ label: 'Đóng' }]);
          bindEssayRows(dlg.el, es);
        });
      });
    });
  }

  /* ---------- Báo cáo ---------- */
  function renderReport() {
    Promise.all([VV.db.getKV('reportPeriod', 'week'), VV.db.all('reports')]).then(function (r) {
      var saved = r[1].filter(function (x) { return x.classCode === state.classCode; }).sort(function (a, b) { return b.createdAt - a.createdAt; });
      var html = '<div class="card no-print"><h3>📈 Tạo báo cáo tiến độ</h3><div class="toolbar">' +
        '<div><label class="field-label" for="rp-period">Khoảng thời gian</label><select id="rp-period">' +
        [['week', '7 ngày qua'], ['month', '30 ngày qua'], ['thisMonth', 'Tháng này'], ['semester', 'Học kì hiện tại'], ['all', 'Toàn bộ'], ['custom', 'Tự chọn ngày…']]
          .map(function (o) { return '<option value="' + o[0] + '">' + o[1] + '</option>'; }).join('') + '</select></div>' +
        '<div class="rp-custom" hidden><label class="field-label" for="rp-from">Từ ngày</label><input id="rp-from" type="date"></div>' +
        '<div class="rp-custom" hidden><label class="field-label" for="rp-to">Đến ngày</label><input id="rp-to" type="date"></div>' +
        '<button class="btn btn-primary" id="rp-make">Tạo báo cáo</button></div>' +
        '<div class="toolbar"><div><label class="field-label" for="rp-auto">Báo cáo định kỳ tự động</label><select id="rp-auto">' +
        [['week', 'Hằng tuần'], ['month', 'Hằng tháng'], ['off', 'Tắt']].map(function (o) { return '<option value="' + o[0] + '"' + (r[0] === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
        '</select></div><p class="small muted" style="flex:3">Khi đến kỳ, Vườn Văn tự lập báo cáo lúc thầy cô mở trang giáo viên, lưu vào danh sách bên dưới và gửi thông báo.</p></div></div>' +
        '<div id="rp-out"></div>' +
        '<div class="card no-print"><h3>🗂 Báo cáo đã lưu</h3>' + (saved.length ? '<div class="list">' + saved.map(function (s) {
          return '<div class="item"><span class="ic">' + (s.auto ? '⏰' : '📄') + '</span><div class="grow"><div class="t">' + esc(s.data.label) + '</div><div class="small muted">Lập lúc ' + esc(VV.fmt.dateTime(s.createdAt)) + ' · ' + s.data.totalEssays + ' bài · điểm TB ' + VV.fmt.score(s.data.avg) + '</div></div>' +
            '<button class="btn btn-small" data-rview="' + s.id + '">Xem</button></div>';
        }).join('') + '</div>' : '<p class="muted">Chưa có báo cáo nào được lưu.</p>') + '</div>';
      $('#t-report').innerHTML = html;
      $('#rp-period').addEventListener('change', function (e) { $$('.rp-custom').forEach(function (x) { x.hidden = e.target.value !== 'custom'; }); });
      $('#rp-auto').addEventListener('change', function (e) { VV.db.setKV('reportPeriod', e.target.value); ui().toast('Đã lưu cài đặt báo cáo định kỳ.', 'ok'); });
      $('#rp-make').addEventListener('click', makeReport);
      $$('[data-rview]').forEach(function (b) {
        b.addEventListener('click', function () { showReport(saved.find(function (s) { return s.id === b.getAttribute('data-rview'); }).data, true); });
      });
    });
  }

  function makeReport() {
    var p = $('#rp-period').value, range;
    if (p === 'custom') {
      var f = $('#rp-from').value, t = $('#rp-to').value;
      if (!f || !t) { ui().toast('Thầy cô chọn ngày bắt đầu và kết thúc.', 'warn'); return; }
      range = { from: new Date(f + 'T00:00').getTime(), to: new Date(t + 'T23:59:59').getTime(), label: 'Từ ' + f.split('-').reverse().join('/') + ' đến ' + t.split('-').reverse().join('/') };
    } else range = VV.report.periodRange(p);
    Promise.all([VV.db.all('essays'), VV.db.all('students')]).then(function (d) {
      showReport(VV.report.build({ essays: d[0], students: d[1], from: range.from, to: range.to, label: range.label, classCode: state.classCode }), false);
    });
  }

  function showReport(rep, isSaved) {
    state.lastReport = rep;
    var out = $('#rp-out');
    out.innerHTML = '<div class="card print-area">' + VV.report.render(rep) + '</div>' +
      '<div class="row-end no-print"><button class="btn" id="rp-csv">⬇️ Tải Excel (CSV)</button><button class="btn" id="rp-print">🖨️ In / Lưu PDF</button>' +
      (isSaved ? '' : '<button class="btn btn-primary" id="rp-save">💾 Lưu báo cáo</button>') + '</div>';
    $('#rp-csv').addEventListener('click', function () { VV.download('bao-cao-' + VV.slug(rep.classCode) + '-' + VV.fmt.dayKey(rep.createdAt) + '.csv', VV.report.toCSV(rep), 'text/csv;charset=utf-8'); });
    $('#rp-print').addEventListener('click', function () { window.print(); });
    var sv = $('#rp-save');
    if (sv) sv.addEventListener('click', function () {
      VV.db.put('reports', { id: VV.db.uid('rp'), classCode: state.classCode, auto: false, createdAt: Date.now(), data: rep }).then(function () { ui().toast('Đã lưu báo cáo.', 'ok'); renderReport(); });
    });
    out.scrollIntoView({ behavior: 'smooth' });
  }

  /* ---------- Cài đặt ---------- */
  function renderSettings() {
    Promise.all([VV.db.getKV('lastBackupAt', null), VV.db.allRaw('backups')]).then(function (r) {
      var backups = (r[1] || []).sort(function (a, b) { return b.createdAt - a.createdAt; });
      var html =
        '<section class="card settings-sec"><h3>💾 Sao lưu dữ liệu</h3>' +
        '<p>Mọi dữ liệu được lưu ngay trong trình duyệt của máy này. Vườn Văn tự sao lưu mỗi ngày (giữ 7 bản gần nhất). Lần gần nhất: <b>' + (r[0] ? esc(VV.fmt.dateTime(r[0])) : 'chưa có') + '</b></p>' +
        '<p class="small muted">Nên tải tệp sao lưu về máy (hoặc chép vào USB) định kỳ: nếu xoá dữ liệu duyệt web hay đổi máy, thầy cô mở lại tệp này để khôi phục.</p>' +
        '<div class="row-end" style="justify-content:flex-start"><button class="btn" id="se-backup">💾 Sao lưu ngay</button><button class="btn" id="se-export">⬇️ Tải tệp sao lưu (.json)</button>' +
        '<label class="btn" for="se-import">⬆️ Khôi phục từ tệp</label><input id="se-import" type="file" accept=".json,application/json" hidden></div>' +
        (backups.length ? '<p class="field-label">Bản sao lưu trên máy</p><div class="list">' + backups.map(function (b) {
          return '<div class="item"><div class="grow">' + esc(VV.fmt.dateTime(b.createdAt)) + ' · ' + ((b.data && b.data.essays) || []).length + ' bài</div><button class="btn btn-small" data-restore="' + b.id + '">Khôi phục</button></div>';
        }).join('') + '</div>' : '') + '</section>' +

        '<section class="card settings-sec"><h3>🔔 Thông báo</h3><p class="small muted">Nhận thông báo khi có bài chờ xem và khi đến kỳ báo cáo. Học sinh bật thông báo ở mục "Bài tập".</p>' +
        '<button class="btn" id="se-notify">Bật thông báo trên máy này</button> <span class="muted small">Hiện tại: ' + (VV.notify.granted() ? 'đã bật' : 'chưa bật') + '</span></section>' +

        '<section class="card settings-sec"><h3>🔐 Bảo mật</h3><div class="form-grid"><div><label class="field-label" for="se-pin">Mã PIN mới</label><input id="se-pin" type="password" inputmode="numeric" maxlength="12" autocomplete="new-password"></div></div>' +
        '<div class="row-end" style="justify-content:flex-start"><button class="btn" id="se-save-pin">Đổi PIN</button></div></section>' +

        '<section class="card settings-sec"><h3>ℹ️ Về Vườn Văn</h3><p class="small">Các dạng văn, cấu trúc bài và đề gợi ý được xây dựng theo SGK Tiếng Việt 4 (bộ Kết nối tri thức với cuộc sống), tập một và tập hai. Mã lớp hiện tại: <b>' + esc(state.classCode) + '</b>.</p></section>';
      $('#t-settings').innerHTML = html;

      $('#se-backup').addEventListener('click', function () {
        VV.backup.local(null).then(function () { ui().toast('Đã sao lưu trên máy 💾', 'ok'); renderSettings(); });
      });
      $('#se-export').addEventListener('click', function () { VV.backup.exportFull(); });
      $('#se-import').addEventListener('change', function (ev) {
        var file = ev.target.files[0];
        ev.target.value = '';
        if (!file) return;
        VV.backup.importFile(file, { role: 'teacher' })
          .then(function () { ui().toast('Đã khôi phục dữ liệu (giữ bản mới hơn nếu trùng).', 'ok'); renderSettings(); })
          .catch(function (e) { ui().toast('Không khôi phục được: ' + e.message, 'err'); });
      });
      $$('[data-restore]').forEach(function (b) {
        b.addEventListener('click', function () {
          var bk = backups.find(function (x) { return x.id === b.getAttribute('data-restore'); });
          ui().confirm('Khôi phục', 'Khôi phục bản sao lưu ngày ' + VV.fmt.dateTime(bk.createdAt) + '? Bài hiện có mới hơn sẽ được giữ nguyên.', 'Khôi phục').then(function (ok) {
            if (ok) VV.db.importAll(bk.data).then(function () { ui().toast('Đã khôi phục.', 'ok'); });
          });
        });
      });
      $('#se-notify').addEventListener('click', function () { VV.notify.request().then(function () { renderSettings(); }); });
      $('#se-save-pin').addEventListener('click', function () {
        var p = $('#se-pin').value.trim();
        if (p.length < 4) { ui().toast('PIN cần ít nhất 4 kí tự.', 'warn'); return; }
        VV.db.setKV('teacherPin', p).then(function () { ui().toast('Đã đổi PIN.', 'ok'); $('#se-pin').value = ''; });
      });
    });
  }

  return { askLogin: askLogin, enter: enter, refresh: refresh };
})();

/* VƯỜN VĂN – điều khiển giao diện (phần học sinh + khung chung) */
window.VV = window.VV || {};

(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = VV.esc;

  var state = VV.state = {
    role: null, student: null, classCode: null, deviceId: null,
    current: { genreId: null, themeId: 'tu-do', topic: '', topicCustom: '', hintTypes: ['vocab', 'paragraph'], request: '', assignmentId: null },
    draft: null, essay: null, bookFilter: 'all', ignored: {}
  };

  /* ================= TIỆN ÍCH GIAO DIỆN ================= */
  var ui = VV.ui = {
    toast: function (msg, kind, ms) {
      var t = document.createElement('div');
      t.className = 'toast ' + (kind || '');
      t.textContent = msg;
      $('#toasts').appendChild(t);
      setTimeout(function () { t.remove(); }, ms || 3500);
    },
    loading: function (on, text) {
      $('#loading').hidden = !on;
      if (text) $('#loading-text').textContent = text;
    },
    /* Hộp thoại: buttons = [{label, cls, onClick(close) → false để giữ mở}] */
    dialog: function (title, bodyHtml, buttons) {
      var dlg = $('#dlg');
      $('#dlg-title').textContent = title;
      $('#dlg-body').innerHTML = bodyHtml;
      var foot = $('#dlg-foot');
      foot.innerHTML = '';
      var close = function () { if (dlg.open) dlg.close(); };
      (buttons || []).forEach(function (b) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn ' + (b.cls || '');
        btn.textContent = b.label;
        btn.addEventListener('click', function () {
          var r = b.onClick ? b.onClick(close) : undefined;
          if (r !== false && !(r && r.then)) close();
        });
        foot.appendChild(btn);
      });
      if (!dlg.open) dlg.showModal();
      return { el: $('#dlg-body'), close: close };
    },
    confirm: function (title, msg, okLabel) {
      return new Promise(function (resolve) {
        var done = false;
        ui.dialog(title, '<p>' + msg + '</p>', [
          { label: 'Không', onClick: function () { done = true; resolve(false); } },
          { label: okLabel || 'Đồng ý', cls: 'btn-primary', onClick: function () { done = true; resolve(true); } }
        ]);
        $('#dlg').addEventListener('close', function h() { $('#dlg').removeEventListener('close', h); if (!done) resolve(false); });
      });
    },
    show: function (id) {
      $$('main .screen').forEach(function (s) { s.hidden = s.id !== id; });
      $$('[data-go]').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-go') === id && b.classList.contains('nav-btn')); });
      state.screen = id;
      window.scrollTo(0, 0);
      $('#main').focus({ preventScroll: true });
      var renderers = { 's-mine': renderMine, 's-tasks': renderTasks, 's-choose': renderChoose };
      if (renderers[id]) renderers[id]();
    }
  };

  function genreOf(id) { return VV.genreById(id) || VV.GENRES[0]; }

  /* ================= KHỞI ĐỘNG ================= */
  function init() {
    if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) {
      navigator.serviceWorker.register('sw.js').catch(function (e) { console.warn('SW', e); });
    }
    VV.db.getKV('deviceId', null).then(function (id) {
      if (!id) { id = VV.db.uid('dev'); VV.db.setKV('deviceId', id); }
      state.deviceId = id;
    });
    loadPrefs();
    updateNet();
    window.addEventListener('online', function () { updateNet(); ui.toast('Đã có mạng trở lại 🌤️ Đang đồng bộ…', 'ok'); processPending(); });
    window.addEventListener('offline', function () { updateNet(); ui.toast('Mất mạng – em vẫn viết bình thường, bài được lưu trên máy.', 'warn', 5000); });
    document.addEventListener('vv:sync', updateNet);
    document.addEventListener('vv:remote', onRemote);

    $('#login-class').value = (VV.CONFIG && VV.CONFIG.defaultClassCode) || '';
    renderRecentLogins();
    bindLogin();
    bindShell();
    bindChoose();
    bindDraft();
    bindWrite();

    // Tự vào lại phiên trước (ví dụ khi tải lại trang)
    VV.db.getKV('session', null).then(function (s) {
      if (!s) return;
      if (s.role === 'teacher' && VV.teacher) VV.teacher.enter(s.classCode);
      else if (s.role === 'student') VV.db.get('students', s.studentId).then(function (st) { if (st) enterStudent(st); });
    });
  }

  function loadPrefs() {
    Promise.all([VV.db.getKV('fontSize', 17), VV.db.getKV('highContrast', false)]).then(function (r) {
      document.documentElement.style.setProperty('--fs', r[0] + 'px');
      document.body.classList.toggle('hc', !!r[1]);
    });
  }

  function updateNet() {
    var chip = $('#net-chip');
    if (!chip) return;
    var st = VV.sync.status();
    var on = navigator.onLine;
    var txt, cls;
    if (!on) { txt = '🟠 Ngoại tuyến'; cls = 'off'; }
    else if (st.state === 'synced' || st.state === 'syncing') { txt = st.state === 'syncing' ? '🔄 Đang đồng bộ' : '🟢 Đã đồng bộ'; cls = 'on'; }
    else if (st.state === 'error') { txt = '⚠️ Lỗi đồng bộ'; cls = 'err'; }
    else if (st.state === 'connecting') { txt = '🔄 Đang kết nối'; cls = ''; }
    else { txt = '🟢 Trực tuyến'; cls = 'on'; }
    chip.textContent = txt;
    chip.className = 'chip ' + cls;
    chip.title = st.message + (st.lastSync ? ' · lần cuối ' + VV.fmt.ago(st.lastSync) : '');
  }

  /* ================= ĐĂNG NHẬP ================= */
  function renderRecentLogins() {
    VV.db.getKV('recentLogins', []).then(function (list) {
      var box = $('#login-recent');
      box.innerHTML = list.slice(0, 4).map(function (r, i) {
        return '<button type="button" class="chip-btn" data-recent="' + i + '">↩ ' + esc(r.name) + (r.classCode !== 'LOCAL' ? ' · ' + esc(r.classCode) : '') + '</button>';
      }).join('');
      $$('[data-recent]', box).forEach(function (b) {
        b.addEventListener('click', function () {
          var r = list[+b.getAttribute('data-recent')];
          $('#login-name').value = r.name;
          $('#login-class').value = r.classCode === 'LOCAL' ? '' : r.classCode;
          $('#login-form').requestSubmit();
        });
      });
    });
  }

  function bindLogin() {
    $('#login-form').addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = $('#login-name').value.replace(/\s+/g, ' ').trim();
      var cls = $('#login-class').value.replace(/\s+/g, '').toUpperCase() || 'LOCAL';
      if (name.length < 2 || !/\p{L}/u.test(name)) { $('#login-error').textContent = 'Em hãy nhập họ và tên của mình nhé (ít nhất 2 chữ cái).'; $('#login-name').focus(); return; }
      $('#login-error').textContent = '';
      var id = 'st_' + VV.slug(cls) + '_' + VV.slug(name);
      VV.db.get('students', id).then(function (st) {
        st = st || { id: id, name: name, classCode: cls, createdAt: Date.now() };
        st.name = name;
        st.lastActive = Date.now();
        return VV.db.put('students', st);
      }).then(function (st) {
        VV.db.getKV('recentLogins', []).then(function (list) {
          list = list.filter(function (r) { return !(r.name === name && r.classCode === cls); });
          list.unshift({ name: name, classCode: cls });
          VV.db.setKV('recentLogins', list.slice(0, 6));
        });
        enterStudent(st);
      });
    });
    $('#btn-teacher-login').addEventListener('click', function () { VV.teacher.askLogin(); });
  }

  function enterStudent(st) {
    state.role = 'student';
    state.student = st;
    state.classCode = st.classCode;
    VV.db.setKV('session', { role: 'student', studentId: st.id, classCode: st.classCode });
    $('#s-login').hidden = true;
    $('#app-shell').hidden = false;
    $('#nav-student').hidden = false;
    $('#nav-teacher').hidden = true;
    $('#who').textContent = '🌱 ' + st.name;
    ui.show('s-choose');
    VV.sync.start({ classCode: st.classCode, role: 'student', studentId: st.id }).then(function () {
      VV.sync.autoBackup({ role: 'student', studentId: st.id, deviceId: state.deviceId });
      processPending();
    });
    VV.notify.startLoop(function () { VV.notify.checkStudent(state.student); updateTaskBadge(); });
  }

  VV.logout = function () {
    VV.sync.stop();
    VV.notify.stop();
    VV.db.setKV('session', null);
    state.role = null; state.student = null; state.essay = null; state.draft = null;
    $('#app-shell').hidden = true;
    $('#s-login').hidden = false;
    $('#login-name').value = '';
    renderRecentLogins();
  };

  function bindShell() {
    document.addEventListener('click', function (ev) {
      var go = ev.target.closest('[data-go]');
      if (go) { ev.preventDefault(); ui.show(go.getAttribute('data-go')); }
    });
    $('#brand-home').addEventListener('click', function () { ui.show(state.role === 'teacher' ? 's-teacher' : 's-choose'); });
    $('#btn-logout').addEventListener('click', function () {
      ui.confirm('Đăng xuất', 'Em có muốn thoát ra màn hình đăng nhập không? Bài làm đã được lưu.', 'Thoát').then(function (ok) { if (ok) VV.logout(); });
    });
    $('#btn-a11y').addEventListener('click', openA11y);
    $('#btn-enable-notify').addEventListener('click', function () {
      VV.notify.request().then(function (p) {
        ui.toast(p === 'granted' ? 'Đã bật thông báo nhắc bài 🔔' : p === 'unsupported' ? 'Trình duyệt này chưa hỗ trợ thông báo.' : 'Em chưa cho phép thông báo.', p === 'granted' ? 'ok' : 'warn');
      });
    });
  }

  function openA11y() {
    Promise.all([VV.db.getKV('fontSize', 17), VV.db.getKV('highContrast', false), VV.db.getKV('reminderTime', '19:00')]).then(function (r) {
      var sizes = [[15, 'Nhỏ'], [17, 'Vừa'], [19, 'Lớn'], [22, 'Rất lớn']];
      var d = ui.dialog('Hiển thị và nhắc nhở',
        '<p class="field-label">Cỡ chữ</p><div class="chip-row">' +
        sizes.map(function (s) { return '<button type="button" class="chip-btn ' + (s[0] === r[0] ? 'active' : '') + '" data-fs="' + s[0] + '">' + s[1] + '</button>'; }).join('') + '</div>' +
        '<label class="hint-card"><input type="checkbox" id="opt-hc" ' + (r[1] ? 'checked' : '') + '><b>Tương phản cao</b><small>Chữ đen đậm, viền rõ – dễ nhìn hơn</small></label>' +
        (state.role === 'student' ? '<label class="field-label" for="opt-rt">Giờ nhắc luyện viết mỗi ngày</label><input type="time" id="opt-rt" value="' + esc(r[2]) + '">' : '') +
        '<p class="muted small">Mẹo: bấm nút 🔊 cạnh các gợi ý để nghe đọc to.</p>',
        [{ label: 'Xong', cls: 'btn-primary' }]);
      $$('[data-fs]', d.el).forEach(function (b) {
        b.addEventListener('click', function () {
          var v = +b.getAttribute('data-fs');
          document.documentElement.style.setProperty('--fs', v + 'px');
          VV.db.setKV('fontSize', v);
          $$('[data-fs]', d.el).forEach(function (x) { x.classList.toggle('active', x === b); });
        });
      });
      $('#opt-hc', d.el).addEventListener('change', function (e) { document.body.classList.toggle('hc', e.target.checked); VV.db.setKV('highContrast', e.target.checked); });
      var rt = $('#opt-rt', d.el);
      if (rt) rt.addEventListener('change', function () { VV.db.setKV('reminderTime', rt.value); });
    });
  }

  /* ================= CHỌN BÀI ================= */
  function bindChoose() {
    $$('[data-book]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.bookFilter = b.getAttribute('data-book');
        $$('[data-book]').forEach(function (x) { x.classList.toggle('active', x === b); });
        renderGenres();
      });
    });
    $('#topic-custom').addEventListener('input', function (e) {
      state.current.topicCustom = e.target.value;
      if (e.target.value.trim()) { state.current.topic = ''; $$('.topic-opt').forEach(function (o) { o.setAttribute('aria-checked', 'false'); }); }
    });
    $('#req').addEventListener('input', function (e) { state.current.request = e.target.value; });
    $('#btn-make-draft').addEventListener('click', makeDraft);
  }

  function renderChoose() {
    renderGenres();
    renderThemes();
    renderTopics();
    renderHints();
    $('#topic-custom').value = state.current.topicCustom || '';
    $('#req').value = state.current.request || '';
    var banner = $('#assignment-banner');
    if (state.current.assignmentId) {
      VV.db.get('assignments', state.current.assignmentId).then(function (a) {
        if (!a) { banner.hidden = true; return; }
        banner.hidden = false;
        banner.innerHTML = '🔔 Em đang làm bài tập: <b>' + esc(a.title) + '</b> · Hạn nộp ' + esc(VV.fmt.dateTime(a.dueAt)) +
          (a.note ? '<br><span class="muted">Thầy cô dặn: ' + esc(a.note) + '</span>' : '') +
          ' <button class="link-btn" id="btn-cancel-assign">Bỏ chọn</button>';
        $('#btn-cancel-assign').addEventListener('click', function () { state.current.assignmentId = null; renderChoose(); });
      });
    } else banner.hidden = true;
  }

  function renderGenres() {
    var grid = $('#genre-grid');
    var list = VV.GENRES.filter(function (g) { return state.bookFilter === 'all' || g.sgk.indexOf(state.bookFilter) >= 0; });
    grid.innerHTML = list.map(function (g) {
      return '<button type="button" role="radio" class="genre-card" aria-checked="' + (state.current.genreId === g.id) + '" data-genre="' + g.id + '" style="--c:' + g.color + '">' +
        '<span class="gi" aria-hidden="true">' + g.icon + '</span><b>' + esc(g.name) + '</b><small>' + esc(g.sgk) + '</small></button>';
    }).join('');
    $$('[data-genre]', grid).forEach(function (b) {
      b.addEventListener('click', function () {
        state.current.genreId = b.getAttribute('data-genre');
        state.current.topic = '';
        renderGenres();
        renderTopics();
        $('#step-topic').scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderThemes() {
    var row = $('#theme-row');
    row.innerHTML = VV.THEMES.map(function (t) {
      return '<button type="button" role="radio" class="chip-btn" aria-checked="' + (state.current.themeId === t.id) + '" data-theme="' + t.id + '">' + t.icon + ' ' + esc(t.name) + '</button>';
    }).join('');
    $$('[data-theme]', row).forEach(function (b) {
      b.addEventListener('click', function () { state.current.themeId = b.getAttribute('data-theme'); renderThemes(); });
    });
  }

  function renderTopics() {
    var box = $('#topic-list');
    if (!state.current.genreId) { box.innerHTML = '<p class="muted">Em chọn dạng văn ở bước 1 trước nhé.</p>'; return; }
    var g = genreOf(state.current.genreId);
    box.innerHTML = g.topics.map(function (t, i) {
      return '<button type="button" role="radio" class="topic-opt" aria-checked="' + (state.current.topic === t) + '" data-topic="' + i + '">📌 ' + esc(t) + '</button>';
    }).join('');
    $$('[data-topic]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        state.current.topic = g.topics[+b.getAttribute('data-topic')];
        state.current.topicCustom = '';
        $('#topic-custom').value = '';
        renderTopics();
      });
    });
  }

  function renderHints() {
    var grid = $('#hint-grid');
    grid.innerHTML = VV.HINT_TYPES.map(function (h) {
      return '<label class="hint-card"><input type="checkbox" value="' + h.id + '" ' + (state.current.hintTypes.indexOf(h.id) >= 0 ? 'checked' : '') + '>' +
        '<b>' + h.icon + ' ' + esc(h.name) + '</b><small>' + esc(h.desc) + '</small></label>';
    }).join('');
    $$('input', grid).forEach(function (c) {
      c.addEventListener('change', function () {
        state.current.hintTypes = $$('input:checked', grid).map(function (x) { return x.value; });
      });
    });
  }

  function currentTopic() { return (state.current.topicCustom || '').trim() || state.current.topic; }

  function makeDraft() {
    var c = state.current;
    var err = !c.genreId ? 'Em chọn dạng văn ở bước 1 nhé.' : !currentTopic() ? 'Em chọn hoặc nhập đề bài ở bước 2 nhé.' : !c.hintTypes.length ? 'Em chọn ít nhất một cách gợi ý ở bước 3 nhé.' : '';
    $('#choose-error').textContent = err;
    if (err) return;
    VV.ai.isAvailable().then(function (online) {
      ui.loading(true, online ? 'Cô AI đang gieo hạt gợi ý cho em… 🌱' : 'Đang lấy gợi ý từ túi hạt giống (ngoại tuyến)…');
      return VV.ai.generateDraft({
        genreId: c.genreId, topic: currentTopic(), themeName: (VV.themeById(c.themeId) || {}).name,
        hintTypes: c.hintTypes, request: c.request, studentName: state.student && state.student.name
      });
    }).then(function (d) {
      ui.loading(false);
      state.draft = d;
      // Tạo lại bản thảo cho bài đang viết dở cùng đề thì cập nhật luôn
      if (state.essay && state.essay.status === 'writing' && state.essay.topic === currentTopic() && state.essay.genreId === c.genreId) {
        state.essay.draft = d;
        VV.db.put('essays', state.essay);
      } else state.essay = null;
      renderDraft();
      ui.show('s-draft');
    }).catch(function (e) {
      ui.loading(false);
      console.error(e);
      ui.toast('Có lỗi khi tạo gợi ý. Em thử lại nhé.', 'err');
    });
  }

  /* ================= BẢN THẢO GỢI Ý ================= */
  function bindDraft() {
    $('#btn-redraft').addEventListener('click', makeDraft);
    $('#btn-read-draft').addEventListener('click', function () { VV.speak(draftText(state.draft)); });
    $('#btn-start-write').addEventListener('click', startWriting);
    $('#draft-body').addEventListener('click', function (ev) {
      var sp = ev.target.closest('[data-speak]');
      if (sp) VV.speak(sp.closest('.card').innerText.replace(/🔊/g, ''));
    });
  }

  function draftText(d) {
    if (!d) return '';
    return [d.intro]
      .concat(d.ideas || [])
      .concat((d.paragraphs || []).map(function (p) { return p.part + '. ' + p.hints.join('. ') + '. ' + p.starter; }))
      .concat((d.outline || []).map(function (p) { return p.part + '. ' + p.points.join('. '); }))
      .concat(d.sample ? [d.sample] : []).join('. ');
  }

  function section(icon, title, inner) {
    return '<section class="card draft-sec"><h3><span>' + icon + ' ' + esc(title) + '</span><button type="button" class="speak-btn" data-speak aria-label="Đọc to mục ' + esc(title) + '">🔊</button></h3>' + inner + '</section>';
  }

  function vocabHtml(vocab, clickable) {
    return (vocab || []).map(function (v) {
      return '<div class="group-name">' + esc(v.group) + '</div><div class="word-chips">' +
        v.words.map(function (w) { return clickable ? '<button type="button" class="word-chip" data-insert="' + esc(w) + '" title="Bấm để chèn vào bài">' + esc(w) + '</button>' : '<span class="word-chip">' + esc(w) + '</span>'; }).join('') + '</div>';
    }).join('');
  }

  function paragraphsHtml(ps) {
    return (ps || []).map(function (p) {
      return '<div class="para-hint"><b>' + esc(p.part) + '</b><ul class="clean">' + p.hints.map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('') + '</ul>' +
        (p.starter ? '<div class="starter">✍️ Câu mở đầu gợi ý: “' + esc(p.starter) + '”</div>' : '') + '</div>';
    }).join('');
  }

  function outlineHtml(ol) {
    return (ol || []).map(function (p) {
      return '<div class="outline-part"><b>' + esc(p.part) + '</b><ul class="clean">' + p.points.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>';
    }).join('');
  }

  function wrapText(t, max) {
    var words = String(t).split(/\s+/), lines = [], cur = '';
    words.forEach(function (w) {
      if ((cur + ' ' + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
    });
    if (cur) lines.push(cur);
    return lines.slice(0, 3);
  }

  VV.renderMindmap = function (mm) {
    if (!mm || !mm.branches || !mm.branches.length) return '';
    var W = 1200, H = 600, cx = 600, cy = 300, rx = 250, ry = 190;
    var colors = ['#2fa84f', '#4fb3f6', '#ff4f86', '#f59e0b', '#8b5cf6', '#14b8a6', '#ef4444'];
    var n = mm.branches.length;
    var svg = '<svg class="mindmap" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Sơ đồ tư duy: ' + esc(mm.center) + '" font-family="Nunito, sans-serif">';
    var nodes = '';
    mm.branches.forEach(function (b, i) {
      var a = -Math.PI / 2 + (2 * Math.PI * i) / n + (n % 2 === 0 ? Math.PI / n : 0);
      var bx = cx + rx * Math.cos(a), by = cy + ry * Math.sin(a);
      var col = colors[i % colors.length];
      var side = Math.cos(a) >= -0.01 ? 1 : -1;
      svg += '<path d="M' + cx + ' ' + cy + ' Q ' + (cx + (bx - cx) * 0.5) + ' ' + (cy + (by - cy) * 0.9) + ' ' + bx + ' ' + by + '" stroke="' + col + '" stroke-width="7" fill="none" stroke-linecap="round" opacity=".85"/>';
      var kids = (b.children || []).slice(0, 4);
      kids.forEach(function (k, j) {
        var kx = bx + side * 140, ky = by + (j - (kids.length - 1) / 2) * 50;
        var kl = wrapText(k, 22).slice(0, 2);
        if (kl.length === 2 && kl.join(' ').length < k.length) kl[1] = kl[1].slice(0, 20) + '…';
        svg += '<path d="M' + bx + ' ' + by + ' C ' + (bx + side * 70) + ' ' + by + ' ' + (bx + side * 70) + ' ' + ky + ' ' + kx + ' ' + ky + '" stroke="' + col + '" stroke-width="3" fill="none" opacity=".7"/>';
        nodes += '<circle cx="' + kx + '" cy="' + ky + '" r="5" fill="' + col + '"/><text font-size="18" text-anchor="' + (side > 0 ? 'start' : 'end') + '" fill="#1e293b">' +
          kl.map(function (l, li) { return '<tspan x="' + (kx + side * 10) + '" y="' + (ky + 6 + (li - (kl.length - 1) / 2) * 20) + '">' + esc(l) + '</tspan>'; }).join('') + '</text>';
      });
      var lines = wrapText(b.label, 14);
      var bw = 168, bh = 22 + lines.length * 22;
      nodes += '<rect x="' + (bx - bw / 2) + '" y="' + (by - bh / 2) + '" width="' + bw + '" height="' + bh + '" rx="18" fill="' + col + '"/>';
      lines.forEach(function (l, li) {
        nodes += '<text x="' + bx + '" y="' + (by - bh / 2 + 28 + li * 22) + '" font-size="18" font-weight="800" text-anchor="middle" fill="#fff">' + esc(l) + '</text>';
      });
    });
    var cl = wrapText(mm.center, 16);
    var ch = 40 + cl.length * 26;
    svg += nodes + '<ellipse cx="' + cx + '" cy="' + cy + '" rx="125" ry="' + (ch / 2 + 6) + '" fill="#fff8d6" stroke="#f2c94c" stroke-width="5"/>';
    cl.forEach(function (l, li) {
      svg += '<text x="' + cx + '" y="' + (cy - ch / 2 + 38 + li * 26) + '" font-size="21" font-weight="800" text-anchor="middle" fill="#1f7a39">' + esc(l) + '</text>';
    });
    return svg + '</svg>';
  };

  function renderDraft() {
    var d = state.draft, g = genreOf(state.current.genreId);
    $('#draft-title').textContent = d.title || 'Bản thảo gợi ý';
    $('#draft-meta').innerHTML = '<span class="src-badge ' + (d.source === 'offline' ? 'offline' : '') + '">' + (d.source === 'ai' ? '✨ Gợi ý từ AI' : '🌱 Gợi ý ngoại tuyến') + '</span> · ' +
      esc(g.name) + ' · Đề: ' + esc(currentTopic());
    var html = '';
    if (d.aiError) html += '<div class="note warn">⚠️ ' + esc(d.aiError) + ' Vườn Văn đang dùng gợi ý có sẵn theo SGK.</div>';
    if (d.intro) html += '<div class="bubble">👩‍🏫 ' + esc(d.intro) + '</div>';
    html += '<div class="draft-grid">';
    if (d.vocabulary && d.vocabulary.length) html += section('📚', 'Vốn từ', vocabHtml(d.vocabulary));
    if (d.ideas && d.ideas.length) html += section('💡', 'Ý để viết', '<ul class="clean">' + d.ideas.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
    if (d.paragraphs && d.paragraphs.length) html += section('🧩', 'Gợi ý từng đoạn', paragraphsHtml(d.paragraphs));
    if (d.outline && d.outline.length) html += section('📝', 'Dàn ý', outlineHtml(d.outline));
    html += '</div>';
    if (d.mindmap && d.mindmap.branches && d.mindmap.branches.length) html += section('🗺️', 'Sơ đồ tư duy', '<div class="mindmap-wrap">' + VV.renderMindmap(d.mindmap) + '</div>');
    if (d.sample) html += section('📖', 'Bài tham khảo', '<p class="note info">Em đọc để học cách viết, rồi tự viết bằng lời của mình nhé – không chép lại!</p><div class="sample">' + esc(d.sample) + '</div>');
    else if (d.sampleNote) html += section('📖', 'Bài tham khảo', '<p class="muted">' + esc(d.sampleNote) + '</p>');
    if (d.tips && d.tips.length) html += section('⭐', 'Lưu ý', '<ul class="clean">' + d.tips.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
    $('#draft-body').innerHTML = html;
  }

  /* ================= VIẾT BÀI ================= */
  var saveTimer = null;

  function startWriting() {
    var c = state.current;
    if (!state.essay) {
      state.essay = {
        id: VV.db.uid('es'), studentId: state.student.id, studentName: state.student.name, classCode: state.classCode,
        genreId: c.genreId, themeId: c.themeId, topic: currentTopic(), request: c.request, hintTypes: c.hintTypes.slice(),
        draft: state.draft, content: '', status: 'writing', assignmentId: c.assignmentId || null, createdAt: Date.now(), history: []
      };
      VV.db.put('essays', state.essay);
    }
    openWrite(state.essay);
  }

  function openWrite(essay) {
    state.essay = essay;
    state.draft = essay.draft || state.draft;
    state.ignored = {};
    var g = genreOf(essay.genreId);
    $('#write-topic').textContent = g.icon + ' ' + g.name + ' · ' + essay.topic;
    $('#editor').value = essay.content || '';
    $('#check-panel').hidden = true;
    $('#save-state').textContent = essay.updatedAt ? 'Đã lưu ' + VV.fmt.ago(essay.updatedAt) : '';
    $('#btn-back-draft').hidden = !essay.draft;
    renderPocket(essay);
    updateCount();
    ui.show('s-write');
    $('#editor').focus();
  }

  function renderPocket(essay) {
    var d = essay.draft, g = genreOf(essay.genreId), html = '';
    if (d && d.paragraphs && d.paragraphs.length) html += '<h4>🧩 Gợi ý từng đoạn</h4>' + paragraphsHtml(d.paragraphs);
    else if (d && d.outline && d.outline.length) html += '<h4>📝 Dàn ý</h4>' + outlineHtml(d.outline);
    else html += '<h4>📝 Cấu trúc bài (SGK)</h4>' + outlineHtml(g.structure.map(function (p) { return { part: p.part, points: [p.guide] }; }));
    var vocab = (d && d.vocabulary && d.vocabulary.length) ? d.vocabulary : g.vocab;
    html += '<h4>📚 Vốn từ <small class="muted">(bấm để chèn)</small></h4>' + vocabHtml(vocab, true);
    if (d && d.ideas && d.ideas.length) html += '<h4>💡 Ý để viết</h4><ul class="clean">' + d.ideas.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    if (d && d.mindmap && d.mindmap.branches && d.mindmap.branches.length) html += '<h4>🗺️ Sơ đồ tư duy</h4><div class="mindmap-wrap">' + VV.renderMindmap(d.mindmap) + '</div>';
    $('#hint-pocket').innerHTML = html;
  }

  function bindWrite() {
    var ed = $('#editor');
    ed.addEventListener('input', function () {
      updateCount();
      $('#save-state').textContent = '✏️ Đang viết…';
      clearTimeout(saveTimer);
      saveTimer = setTimeout(saveEssay, 1500);
    });
    $('#hint-pocket').addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-insert]');
      if (!b) return;
      var w = b.getAttribute('data-insert').replace(/…/g, '').trim();
      var s = ed.selectionStart, e = ed.selectionEnd, v = ed.value;
      var pre = v.slice(0, s), sep = pre && !/\s$/.test(pre) ? ' ' : '';
      ed.value = pre + sep + w + ' ' + v.slice(e);
      ed.selectionStart = ed.selectionEnd = s + sep.length + w.length + 1;
      ed.focus();
      ed.dispatchEvent(new Event('input'));
    });
    $('#btn-back-draft').addEventListener('click', function () {
      if (state.essay && state.essay.draft) { state.draft = state.essay.draft; state.current.genreId = state.essay.genreId; renderDraft(); ui.show('s-draft'); }
    });
    $('#btn-save').addEventListener('click', function () { saveEssay().then(function () { ui.toast('Đã lưu nháp 💾', 'ok'); }); });
    $('#btn-check').addEventListener('click', runCheck);
    $('#btn-check-ai').addEventListener('click', runDeepCheck);
    $('#btn-read-essay').addEventListener('click', function () { VV.speak(ed.value || 'Em chưa viết gì.'); });
    $('#btn-submit').addEventListener('click', submitEssay);
    $('#btn-revise').addEventListener('click', function () {
      if (!state.essay) return;
      state.essay.status = 'writing';
      VV.db.put('essays', state.essay).then(function () { openWrite(state.essay); });
    });
    $('#check-panel').addEventListener('click', onCheckPanelClick);
  }

  function updateCount() {
    if (!state.essay) return;
    var g = genreOf(state.essay.genreId);
    var st = VV.spell.stats($('#editor').value);
    $('#word-count').textContent = st.words + ' chữ · ' + st.paragraphs + ' đoạn · mục tiêu ' + g.minWords + ' – ' + g.maxWords + ' chữ';
    $('#word-bar').style.width = Math.min(100, Math.round(st.words / g.minWords * 100)) + '%';
  }

  function saveEssay() {
    if (!state.essay) return Promise.resolve();
    clearTimeout(saveTimer);
    var text = $('#editor').value;
    state.essay.content = text;
    state.essay.wordCount = VV.spell.stats(text).words;
    return VV.db.put('essays', state.essay).then(function () {
      $('#save-state').textContent = '💾 Đã lưu lúc ' + VV.fmt.dateTime(Date.now()).slice(0, 5) + (VV.sync.isConnected() ? ' · đồng bộ đám mây' : ' · trên máy');
    });
  }

  /* ----- Kiểm tra chính tả ----- */
  var lastIssues = [], aiIssues = [];

  function runCheck() {
    var g = genreOf(state.essay.genreId);
    var text = $('#editor').value.normalize('NFC');
    if ($('#editor').value !== text) $('#editor').value = text;
    lastIssues = VV.spell.check(text, { kind: g.kind }).filter(function (i) { return !state.ignored[i.original + '|' + i.start]; });
    aiIssues = [];
    renderCheck(VV.spell.style(text));
  }

  function renderCheck(styleNotes, aiNote) {
    var p = $('#check-panel');
    p.hidden = false;
    var text = $('#editor').value;
    var html = '<h4>🔍 Kết quả kiểm tra</h4>';
    if (!lastIssues.length && !aiIssues.length) html += '<p class="note info">🎉 Không tìm thấy lỗi chính tả, dấu câu. Em giỏi lắm!</p>';
    if (lastIssues.length) {
      html += '<div class="row-end" style="justify-content:space-between"><b>' + lastIssues.length + ' chỗ cần xem lại</b><button type="button" class="btn btn-small btn-primary" data-fixall>✔ Sửa tất cả</button></div>';
      // Lỗi dấu cách: hiện dấu cách thành "␣" để em nhìn thấy
      var vis = function (s, type) { return type === 'punctuation' ? s.replace(/ /g, '␣') : s.trim(); };
      html += lastIssues.map(function (is, i) {
        return '<div class="issue"><div><span class="from">' + esc(vis(is.original, is.type) || '·') + '</span> → <span class="to">' + esc(vis(is.suggestion, is.type) || '(bỏ)') + '</span></div>' +
          '<div class="acts"><button type="button" class="btn btn-small" data-fix="' + i + '">Sửa</button><button type="button" class="btn btn-small btn-ghost" data-ignore="' + i + '">Bỏ qua</button></div>' +
          '<div class="why">' + esc(is.message) + '</div></div>';
      }).join('');
      // Bản xem trước có đánh dấu lỗi
      var marked = '', pos = 0;
      lastIssues.forEach(function (is) {
        if (is.start < pos) return;
        marked += esc(text.slice(pos, is.start)) + (is.end > is.start ? '<mark>' + esc(text.slice(is.start, is.end)) + '</mark>' : '<mark class="ins">␣</mark>');
        pos = is.end;
      });
      marked += esc(text.slice(pos));
      html += '<details><summary>Xem lỗi được tô màu trong bài</summary><div class="marked">' + marked + '</div></details>';
    }
    if (aiIssues.length) {
      html += '<h4>🤖 AI góp ý thêm</h4>' + aiIssues.map(function (is, i) {
        return '<div class="issue"><div><span class="from">' + esc(is.original) + '</span> → <span class="to">' + esc(is.suggestion) + '</span></div>' +
          '<div class="acts"><button type="button" class="btn btn-small" data-aifix="' + i + '">Sửa</button></div><div class="why">' + esc(is.explanation) + '</div></div>';
      }).join('');
    }
    if (aiNote) html += '<p class="note warn">' + esc(aiNote) + '</p>';
    if (styleNotes && styleNotes.length) html += '<h4>✨ Gợi ý diễn đạt</h4><ul class="clean">' + styleNotes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>';
    p.innerHTML = html;
  }

  function onCheckPanelClick(ev) {
    var ed = $('#editor'), b;
    if ((b = ev.target.closest('[data-fix]'))) {
      ed.value = VV.spell.applyFix(ed.value, lastIssues[+b.getAttribute('data-fix')]);
      afterFix();
    } else if ((b = ev.target.closest('[data-ignore]'))) {
      var is = lastIssues[+b.getAttribute('data-ignore')];
      state.ignored[is.original + '|' + is.start] = 1;
      runCheck();
    } else if (ev.target.closest('[data-fixall]')) {
      ed.value = VV.spell.applyAll(ed.value, lastIssues);
      afterFix();
    } else if ((b = ev.target.closest('[data-aifix]'))) {
      var ai = aiIssues[+b.getAttribute('data-aifix')];
      var idx = ed.value.indexOf(ai.original);
      if (idx >= 0) {
        ed.value = ed.value.slice(0, idx) + ai.suggestion + ed.value.slice(idx + ai.original.length);
        aiIssues.splice(+b.getAttribute('data-aifix'), 1);
        ed.dispatchEvent(new Event('input'));
        var keep = aiIssues;
        runCheck(); aiIssues = keep; renderCheck(VV.spell.style(ed.value));
      } else ui.toast('Không tìm thấy đoạn này nữa – có lẽ em đã sửa rồi.', 'warn');
    }
  }

  function afterFix() {
    $('#editor').dispatchEvent(new Event('input'));
    runCheck();
    ui.toast('Đã sửa ✔', 'ok', 1500);
  }

  function runDeepCheck() {
    var text = $('#editor').value.trim();
    if (text.split(/\s+/).length < 5) { ui.toast('Em viết thêm vài câu rồi hãy kiểm tra nhé.', 'warn'); return; }
    VV.ai.isAvailable().then(function (ok) {
      if (!ok) {
        runCheck();
        renderCheck(VV.spell.style(text), navigator.onLine ? 'Chưa có khoá AI nên chỉ kiểm tra bằng bộ luật có sẵn.' : 'Đang ngoại tuyến nên chỉ kiểm tra bằng bộ luật có sẵn. Khi có mạng, em bấm lại nhé.');
        return;
      }
      ui.loading(true, 'Cô AI đang đọc bài của em… 🔎');
      VV.ai.deepCheck($('#editor').value, state.essay.genreId).then(function (issues) {
        ui.loading(false);
        runCheck();
        // bỏ các lỗi AI trùng với bộ luật
        aiIssues = issues.filter(function (a) {
          return a.original && a.original !== a.suggestion && !lastIssues.some(function (l) { return l.original === a.original; });
        });
        renderCheck(VV.spell.style($('#editor').value));
      }).catch(function (e) {
        ui.loading(false);
        runCheck();
        renderCheck(VV.spell.style(text), VV.ai.friendlyError(e) + ' Đã kiểm tra bằng bộ luật có sẵn.');
      });
    });
  }

  /* ----- Nộp bài & chấm ----- */
  function submitEssay() {
    var text = $('#editor').value.trim();
    var g = genreOf(state.essay.genreId);
    var words = VV.spell.stats(text).words;
    if (words < 15) { ui.toast('Bài còn ngắn quá, em viết thêm nhé!', 'warn'); return; }
    var go = function () {
      saveEssay().then(function () {
        return VV.ai.isAvailable();
      }).then(function (online) {
        ui.loading(true, online ? 'Cô AI đang chấm bài cho em… ⭐' : 'Đang chấm tạm (ngoại tuyến)…');
        return VV.ai.grade({ genreId: g.id, topic: state.essay.topic, request: state.essay.request, content: text });
      }).then(function (grade) {
        ui.loading(false);
        var e = state.essay;
        if (e.grade) e.history = (e.history || []).concat([{ at: e.submittedAt, total: e.grade.total, words: e.wordCount }]);
        e.grade = grade;
        e.content = text;
        e.spellCount = VV.spell.check(text, { kind: g.kind }).length;
        e.status = grade.source === 'ai' ? 'graded' : 'submitted';
        e.pendingAI = grade.source !== 'ai';
        e.submittedAt = Date.now();
        e.teacherReviewed = false;
        return VV.db.put('essays', e);
      }).then(function (e) {
        VV.sync.pushNow();
        state.current.assignmentId = null;
        renderResult(e);
        ui.show('s-result');
      }).catch(function (err) {
        ui.loading(false);
        console.error(err);
        ui.toast('Có lỗi khi nộp bài, bài vẫn được lưu nháp. Em thử lại nhé.', 'err');
      });
    };
    if (words < g.minWords * 0.6) {
      ui.confirm('Nộp bài?', 'Bài của em mới có ' + words + ' chữ (gợi ý ít nhất ' + g.minWords + ' chữ). Em vẫn muốn nộp chứ?', 'Vẫn nộp').then(function (ok) { if (ok) go(); });
    } else go();
  }

  VV.renderGrade = function (e) {
    var r = e.grade, g = genreOf(e.genreId);
    if (!r) return '<p class="muted">Bài chưa được chấm.</p>';
    var total = VV.report.finalScore(e);
    var html = '<div class="card"><div class="result-top">' +
      '<div class="score-ring" style="--p:' + (total * 10) + '"><div><div><b>' + VV.fmt.score(total) + '</b><br><small>/ 10 điểm</small></div></div></div>' +
      '<div><span class="level">' + esc(r.level) + '</span>' +
      (e.teacherScore != null && e.teacherScore !== '' ? ' <span class="tag ok">Điểm của thầy cô</span>' : ' <span class="tag">' + (r.source === 'ai' ? '✨ AI chấm' : '🌱 Điểm tạm (ngoại tuyến)') + '</span>') +
      '<h3 style="margin-top:.5rem">' + esc(g.icon + ' ' + g.name) + '</h3><p class="muted">' + esc(e.topic) + ' · ' + (e.wordCount || 0) + ' chữ · nộp ' + esc(VV.fmt.dateTime(e.submittedAt)) + '</p></div></div>';
    html += VV.RUBRIC.map(function (c) {
      var v = r.scores[c.id];
      return '<div class="crit"><span title="' + esc(c.desc) + '">' + esc(c.name) + '</span><div class="bar"><div style="width:' + (v / c.max * 100) + '%"></div></div><b>' + VV.fmt.score(v) + '/' + VV.fmt.score(c.max) + '</b></div>';
    }).join('') + '</div>';
    if (r.source !== 'ai') html += '<div class="note warn">🌱 ' + esc(r.comment) + (r.aiError ? ' (' + esc(r.aiError) + ')' : '') + '</div>';
    if (r.onTopic === false) html += '<div class="note warn">⚠️ Bài viết có vẻ chưa đúng đề. Em đọc lại đề bài nhé.</div>';
    if (e.teacherComment || (e.teacherScore != null && e.teacherScore !== '')) {
      html += '<div class="teacher-note"><b>👩‍🏫 Thầy cô nhận xét:</b> ' + esc(e.teacherComment || '') + (e.teacherScore != null && e.teacherScore !== '' ? ' <b>(Điểm: ' + VV.fmt.score(e.teacherScore) + ')</b>' : '') + '</div>';
    }
    html += '<div class="draft-grid" style="margin-top:1rem">';
    if (r.source === 'ai' && r.comment) html += '<section class="card"><h3>💬 Lời nhận xét</h3><p>' + esc(r.comment) + '</p></section>';
    if (r.strengths && r.strengths.length) html += '<section class="card"><h3>🌟 Em đã làm tốt</h3><ul class="clean">' + r.strengths.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>';
    if (r.improvements && r.improvements.length) html += '<section class="card"><h3>🌱 Em cần cố gắng</h3><ul class="clean">' + r.improvements.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>';
    if (r.corrections && r.corrections.length) html += '<section class="card"><h3>✏️ Sửa lỗi</h3>' + r.corrections.map(function (c) {
      return '<div class="issue"><div><span class="from">' + esc(c.original) + '</span> → <span class="to">' + esc(c.suggestion) + '</span></div><div class="why">' + esc(c.explanation) + '</div></div>';
    }).join('') + '</section>';
    if (r.betterSentences && r.betterSentences.length) html += '<section class="card"><h3>💎 Viết hay hơn</h3>' + r.betterSentences.map(function (b) {
      return '<p><span class="muted">Câu của em:</span> ' + esc(b.original) + '<br><span class="muted">Gợi ý:</span> <b>' + esc(b.improved) + '</b></p>';
    }).join('') + '</section>';
    html += '</div>';
    return html;
  };

  function renderResult(e) {
    state.essay = e;
    $('#result-body').innerHTML = VV.renderGrade(e) +
      '<details class="card"><summary><b>📄 Bài viết của em</b></summary><div class="essay-view">' + esc(e.content) + '</div></details>';
  }

  /* ================= BÀI CỦA EM ================= */
  function myEssays() {
    return VV.db.all('essays').then(function (rows) {
      return rows.filter(function (e) { return state.student && e.studentId === state.student.id; })
        .sort(function (a, b) { return (b.updatedAt || 0) - (a.updatedAt || 0); });
    });
  }

  function statusTag(e) {
    if (e.status === 'writing') return '<span class="tag write">Đang viết</span>';
    if (e.teacherReviewed) return '<span class="tag ok">Thầy cô đã xem</span>';
    if (e.pendingAI) return '<span class="tag wait">Chờ AI chấm lại</span>';
    return '<span class="tag ok">Đã chấm</span>';
  }

  function renderMine() {
    myEssays().then(function (list) {
      var done = list.filter(function (e) { return e.status !== 'writing'; });
      var scores = done.map(VV.report.finalScore).filter(function (x) { return x != null; });
      var days = {};
      list.forEach(function (e) { days[VV.fmt.dayKey(e.updatedAt)] = 1; });
      $('#mine-stats').innerHTML =
        '<div class="stat"><b>' + done.length + '</b><span>bài đã nộp 🌸</span></div>' +
        '<div class="stat"><b>' + VV.fmt.score(scores.length ? scores.reduce(function (a, b) { return a + b; }, 0) / scores.length : null) + '</b><span>điểm trung bình</span></div>' +
        '<div class="stat"><b>' + VV.fmt.score(scores.length ? Math.max.apply(null, scores) : null) + '</b><span>điểm cao nhất 🏆</span></div>' +
        '<div class="stat"><b>' + Object.keys(days).length + '</b><span>ngày luyện viết</span></div>';
      var box = $('#mine-list');
      if (!list.length) { box.innerHTML = '<div class="empty"><div class="e">🌱</div><p>Khu vườn còn trống. Em gieo bài văn đầu tiên nhé!</p><button class="btn btn-primary" data-go="s-choose">✏️ Viết bài mới</button></div>'; return; }
      box.innerHTML = list.map(function (e) {
        var g = genreOf(e.genreId);
        return '<div class="item"><span class="ic" aria-hidden="true">' + g.icon + '</span><div class="grow"><div class="t">' + esc(e.topic) + '</div>' +
          '<div class="small muted">' + esc(g.name) + ' · ' + esc(VV.fmt.dateTime(e.updatedAt)) + ' · ' + (e.wordCount || 0) + ' chữ</div>' + statusTag(e) + '</div>' +
          '<span class="big-score">' + (e.status === 'writing' ? '…' : VV.fmt.score(VV.report.finalScore(e))) + '</span>' +
          '<button class="btn btn-small" data-open="' + e.id + '">' + (e.status === 'writing' ? '✏️ Viết tiếp' : '👀 Xem') + '</button></div>';
      }).join('');
      $$('[data-open]', box).forEach(function (b) {
        b.addEventListener('click', function () {
          var e = list.find(function (x) { return x.id === b.getAttribute('data-open'); });
          state.current.genreId = e.genreId;
          if (e.status === 'writing') openWrite(e);
          else { renderResult(e); ui.show('s-result'); }
        });
      });
    });
  }

  /* ================= BÀI TẬP ================= */
  function renderTasks() {
    Promise.all([VV.db.all('assignments'), myEssays()]).then(function (r) {
      var list = r[0].filter(function (a) { return a.classCode === state.classCode; }).sort(function (a, b) { return a.dueAt - b.dueAt; });
      var essays = r[1];
      var box = $('#tasks-list');
      if (state.classCode === 'LOCAL') { box.innerHTML = '<div class="empty"><div class="e">🏫</div><p>Em đăng nhập kèm <b>mã lớp</b> để nhận bài tập thầy cô giao nhé.</p></div>'; return; }
      if (!list.length) { box.innerHTML = '<div class="empty"><div class="e">🎈</div><p>Chưa có bài tập nào. Em có thể tự luyện viết nhé!</p></div>'; return; }
      box.innerHTML = list.map(function (a) {
        var g = genreOf(a.genreId);
        var mine = essays.filter(function (e) { return e.assignmentId === a.id; });
        var sub = mine.find(function (e) { return e.status !== 'writing'; });
        var writing = mine.find(function (e) { return e.status === 'writing'; });
        var late = !sub && a.dueAt < Date.now();
        var tag = sub ? '<span class="tag ok">Đã nộp</span>' : late ? '<span class="tag late">Quá hạn</span>' : writing ? '<span class="tag write">Đang viết</span>' : '<span class="tag wait">Chưa làm</span>';
        return '<div class="item"><span class="ic" aria-hidden="true">' + g.icon + '</span><div class="grow"><div class="t">' + esc(a.title) + '</div>' +
          '<div class="small muted">' + esc(g.name) + ' · Hạn nộp: <b>' + esc(VV.fmt.dateTime(a.dueAt)) + '</b></div>' +
          (a.note ? '<div class="small">📝 ' + esc(a.note) + '</div>' : '') + tag + '</div>' +
          (sub ? '<button class="btn btn-small" data-view="' + sub.id + '">👀 Xem kết quả</button>' :
            writing ? '<button class="btn btn-small btn-primary" data-cont="' + writing.id + '">✏️ Viết tiếp</button>' :
              '<button class="btn btn-small btn-primary" data-do="' + a.id + '">✏️ Làm bài</button>') + '</div>';
      }).join('');
      $$('[data-do]', box).forEach(function (b) {
        b.addEventListener('click', function () {
          var a = list.find(function (x) { return x.id === b.getAttribute('data-do'); });
          state.essay = null;
          state.current.genreId = a.genreId;
          state.current.topic = '';
          state.current.topicCustom = a.topic;
          state.current.assignmentId = a.id;
          ui.show('s-choose');
        });
      });
      $$('[data-cont]', box).forEach(function (b) {
        b.addEventListener('click', function () { var e = essays.find(function (x) { return x.id === b.getAttribute('data-cont'); }); openWrite(e); });
      });
      $$('[data-view]', box).forEach(function (b) {
        b.addEventListener('click', function () { var e = essays.find(function (x) { return x.id === b.getAttribute('data-view'); }); renderResult(e); ui.show('s-result'); });
      });
    });
  }

  function updateTaskBadge() {
    if (!state.student) return;
    Promise.all([VV.db.all('assignments'), myEssays()]).then(function (r) {
      var n = r[0].filter(function (a) {
        return a.classCode === state.classCode && a.dueAt > Date.now() && !r[1].some(function (e) { return e.assignmentId === a.id && e.status !== 'writing'; });
      }).length;
      var b = $('#task-badge');
      b.hidden = !n;
      b.textContent = n;
    });
  }

  /* ================= ĐỒNG BỘ, HÀNG ĐỢI AI ================= */
  function onRemote(ev) {
    var d = ev.detail;
    if (state.role === 'student') {
      updateTaskBadge();
      if (d.store === 'assignments') VV.notify.checkStudent(state.student);
      if (d.store === 'essays') {
        d.changes.forEach(function (c) {
          if (c.row.teacherReviewed && c.row.studentId === state.student.id) ui.toast('👩‍🏫 Thầy cô vừa nhận xét bài "' + c.row.topic + '"', 'ok', 6000);
          if (state.essay && state.essay.id === c.row.id && state.screen === 's-result') renderResult(c.row);
        });
      }
      if (state.screen === 's-mine') renderMine();
      if (state.screen === 's-tasks') renderTasks();
    }
    if (state.role === 'teacher' && VV.teacher) { VV.teacher.onRemote(d); processPending(); }
  }

  var pendingRunning = false;
  /* Chấm lại bằng AI các bài đã chấm tạm khi ngoại tuyến (máy nào có khoá AI cũng làm được, kể cả máy giáo viên) */
  function processPending() {
    if (pendingRunning) return;
    VV.ai.isAvailable().then(function (ok) {
      if (!ok) return;
      pendingRunning = true;
      return VV.db.all('essays').then(function (rows) {
        var list = rows.filter(function (e) {
          return e.pendingAI && e.status !== 'writing' && (state.role === 'teacher' ? e.classCode === state.classCode : state.student && e.studentId === state.student.id);
        });
        return list.reduce(function (p, e) {
          return p.then(function () {
            return VV.ai.gradeAIOnly({ genreId: e.genreId, topic: e.topic, request: e.request, content: e.content }).then(function (grade) {
              e.grade = grade; e.pendingAI = false; e.status = 'graded';
              return VV.db.put('essays', e).then(function () {
                if (state.role === 'student') ui.toast('✨ AI đã chấm lại bài "' + e.topic + '": ' + VV.fmt.score(grade.total) + ' điểm', 'ok', 5000);
              });
            }).catch(function (err) { console.warn('pending grade', err); });
          });
        }, Promise.resolve());
      });
    }).then(function () { pendingRunning = false; }, function () { pendingRunning = false; });
  }
  VV.processPending = processPending;
  VV.openEssayResult = function (e) { renderResult(e); ui.show('s-result'); };

  document.addEventListener('DOMContentLoaded', init);
})();

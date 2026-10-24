/* Báo cáo tiến độ cho giáo viên: tạo theo khoảng thời gian, xuất CSV (Excel) / in PDF,
   và tự tạo báo cáo định kỳ (hằng tuần / hằng tháng). */
window.VV = window.VV || {};

VV.report = (function () {
  var DAY = 86400000;

  function finalScore(e) {
    if (e.teacherScore != null && e.teacherScore !== '') return Number(e.teacherScore);
    return e.grade ? e.grade.total : null;
  }

  function periodRange(kind, now) {
    now = now || Date.now();
    var d = new Date(now);
    if (kind === 'week') return { from: now - 7 * DAY, to: now, label: '7 ngày qua' };
    if (kind === 'month') return { from: now - 30 * DAY, to: now, label: '30 ngày qua' };
    if (kind === 'thisMonth') return { from: new Date(d.getFullYear(), d.getMonth(), 1).getTime(), to: now, label: 'Tháng ' + (d.getMonth() + 1) + '/' + d.getFullYear() };
    if (kind === 'semester') {
      // HK I: tháng 9 → tháng 1; HK II: tháng 1 → tháng 5
      var m = d.getMonth();
      var start = m >= 8 ? new Date(d.getFullYear(), 8, 1) : (m === 0 ? new Date(d.getFullYear() - 1, 8, 1) : new Date(d.getFullYear(), 0, 15));
      return { from: start.getTime(), to: now, label: 'Học kì hiện tại' };
    }
    return { from: 0, to: now, label: 'Toàn bộ' };
  }

  function build(opts) {
    // opts: { essays, students, from, to, label, classCode }
    var essays = opts.essays.filter(function (e) {
      var t = e.submittedAt || e.updatedAt;
      return e.classCode === opts.classCode && e.status !== 'writing' && t >= opts.from && t <= opts.to;
    });
    var studentsMap = {};
    opts.students.filter(function (s) { return s.classCode === opts.classCode; }).forEach(function (s) {
      studentsMap[s.id] = { id: s.id, name: s.name, essays: [] };
    });
    essays.forEach(function (e) {
      if (!studentsMap[e.studentId]) studentsMap[e.studentId] = { id: e.studentId, name: e.studentName, essays: [] };
      studentsMap[e.studentId].essays.push(e);
    });

    var rows = Object.keys(studentsMap).map(function (id) {
      var s = studentsMap[id];
      s.essays.sort(function (a, b) { return (a.submittedAt || 0) - (b.submittedAt || 0); });
      var scores = s.essays.map(finalScore).filter(function (x) { return x != null; });
      var avg = scores.length ? scores.reduce(function (a, b) { return a + b; }, 0) / scores.length : null;
      var genres = {};
      s.essays.forEach(function (e) { genres[e.genreId] = (genres[e.genreId] || 0) + 1; });
      var crit = {};
      VV.RUBRIC.forEach(function (c) {
        var vals = s.essays.filter(function (e) { return e.grade && e.grade.scores; }).map(function (e) { return e.grade.scores[c.id] / c.max; });
        crit[c.id] = vals.length ? vals.reduce(function (a, b) { return a + b; }, 0) / vals.length : null;
      });
      var weakest = VV.RUBRIC.filter(function (c) { return crit[c.id] != null; })
        .sort(function (a, b) { return crit[a.id] - crit[b.id]; })[0];
      return {
        id: id, name: s.name, count: s.essays.length, avg: avg,
        best: scores.length ? Math.max.apply(null, scores) : null,
        trend: scores.length >= 2 ? scores[scores.length - 1] - scores[0] : null,
        words: s.essays.length ? Math.round(s.essays.reduce(function (a, e) { return a + (e.wordCount || 0); }, 0) / s.essays.length) : 0,
        errors: s.essays.length ? s.essays.reduce(function (a, e) { return a + (e.spellCount || 0); }, 0) / s.essays.length : 0,
        genres: Object.keys(genres).map(function (g) { return (VV.genreById(g) || { name: g }).name; }),
        weakest: weakest ? weakest.name : '',
        scores: scores,
        pending: s.essays.filter(function (e) { return !e.teacherReviewed; }).length
      };
    }).sort(function (a, b) { return a.name.localeCompare(b.name, 'vi'); });

    var allScores = essays.map(finalScore).filter(function (x) { return x != null; });
    var levels = { 'Hoàn thành tốt': 0, 'Hoàn thành': 0, 'Đạt yêu cầu': 0, 'Cần cố gắng': 0 };
    allScores.forEach(function (x) {
      levels[x >= 9 ? 'Hoàn thành tốt' : x >= 7 ? 'Hoàn thành' : x >= 5 ? 'Đạt yêu cầu' : 'Cần cố gắng']++;
    });
    var byGenre = {};
    essays.forEach(function (e) {
      var n = (VV.genreById(e.genreId) || { name: e.genreId }).name;
      byGenre[n] = byGenre[n] || { count: 0, sum: 0, n: 0 };
      byGenre[n].count++;
      var sc = finalScore(e);
      if (sc != null) { byGenre[n].sum += sc; byGenre[n].n++; }
    });
    // Điểm TB theo tuần
    var weekly = {};
    essays.forEach(function (e) {
      var sc = finalScore(e); if (sc == null) return;
      var t = new Date(e.submittedAt || e.updatedAt);
      var monday = new Date(t.getFullYear(), t.getMonth(), t.getDate() - ((t.getDay() + 6) % 7));
      var k = VV.fmt.dayKey(monday.getTime());
      weekly[k] = weekly[k] || { sum: 0, n: 0 };
      weekly[k].sum += sc; weekly[k].n++;
    });

    return {
      classCode: opts.classCode, label: opts.label, from: opts.from, to: opts.to, createdAt: Date.now(),
      totalEssays: essays.length,
      activeStudents: rows.filter(function (r) { return r.count > 0; }).length,
      totalStudents: rows.length,
      avg: allScores.length ? allScores.reduce(function (a, b) { return a + b; }, 0) / allScores.length : null,
      levels: levels,
      byGenre: Object.keys(byGenre).map(function (k) { return { name: k, count: byGenre[k].count, avg: byGenre[k].n ? byGenre[k].sum / byGenre[k].n : null }; }),
      weekly: Object.keys(weekly).sort().map(function (k) { return { week: k, avg: weekly[k].sum / weekly[k].n }; }),
      rows: rows
    };
  }

  /* ---------- Vẽ biểu đồ SVG ---------- */
  function barChart(rows) {
    var data = rows.filter(function (r) { return r.avg != null; });
    if (!data.length) return '<p class="muted">Chưa có điểm trong khoảng thời gian này.</p>';
    var bh = 26, gap = 8, left = 150, w = 640, h = data.length * (bh + gap) + 30;
    var svg = '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Điểm trung bình từng học sinh">';
    [0, 5, 10].forEach(function (v) {
      var x = left + (w - left - 40) * v / 10;
      svg += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + (h - 20) + '" stroke="#dbe7f3"/><text x="' + x + '" y="' + (h - 4) + '" font-size="12" text-anchor="middle" fill="#64748b">' + v + '</text>';
    });
    data.forEach(function (r, i) {
      var y = i * (bh + gap) + 4;
      var bw = (w - left - 40) * r.avg / 10;
      var color = r.avg >= 9 ? '#22c55e' : r.avg >= 7 ? '#4f9cf9' : r.avg >= 5 ? '#f59e0b' : '#ef4444';
      svg += '<text x="' + (left - 8) + '" y="' + (y + 18) + '" font-size="13" text-anchor="end" fill="#1e293b">' + VV.esc(r.name.length > 20 ? r.name.slice(0, 19) + '…' : r.name) + '</text>';
      svg += '<rect x="' + left + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="6" fill="' + color + '"/>';
      svg += '<text x="' + (left + bw + 6) + '" y="' + (y + 18) + '" font-size="13" font-weight="700" fill="#1e293b">' + VV.fmt.score(r.avg) + '</text>';
    });
    return svg + '</svg>';
  }

  function lineChart(points) {
    if (points.length < 2) return '<p class="muted">Cần ít nhất 2 tuần có bài để vẽ xu hướng.</p>';
    var w = 640, h = 220, pl = 36, pr = 16, pt = 16, pb = 36;
    var x = function (i) { return pl + (w - pl - pr) * i / (points.length - 1); };
    var y = function (v) { return pt + (h - pt - pb) * (1 - v / 10); };
    var svg = '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Điểm trung bình của lớp theo tuần">';
    [0, 5, 10].forEach(function (v) {
      svg += '<line x1="' + pl + '" x2="' + (w - pr) + '" y1="' + y(v) + '" y2="' + y(v) + '" stroke="#dbe7f3"/><text x="' + (pl - 6) + '" y="' + (y(v) + 4) + '" font-size="12" text-anchor="end" fill="#64748b">' + v + '</text>';
    });
    var d = points.map(function (p, i) { return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(p.avg).toFixed(1); }).join(' ');
    svg += '<path d="' + d + '" fill="none" stroke="#22a06b" stroke-width="3" stroke-linejoin="round"/>';
    points.forEach(function (p, i) {
      svg += '<circle cx="' + x(i) + '" cy="' + y(p.avg) + '" r="5" fill="#fff" stroke="#22a06b" stroke-width="3"><title>Tuần ' + VV.fmt.date(new Date(p.week).getTime()) + ': ' + VV.fmt.score(p.avg) + '</title></circle>';
      svg += '<text x="' + x(i) + '" y="' + (h - 12) + '" font-size="11" text-anchor="middle" fill="#64748b">' + p.week.slice(8, 10) + '/' + p.week.slice(5, 7) + '</text>';
    });
    return svg + '</svg>';
  }

  function render(r) {
    var trend = function (t) { return t == null ? '–' : t > 0 ? '<span class="up">▲ ' + VV.fmt.score(t) + '</span>' : t < 0 ? '<span class="down">▼ ' + VV.fmt.score(-t) + '</span>' : '＝'; };
    var html = '<div class="report">' +
      '<div class="report-head"><h3>BÁO CÁO TIẾN ĐỘ VIẾT VĂN – LỚP ' + VV.esc(r.classCode) + '</h3>' +
      '<p>' + VV.esc(r.label) + ' (từ ' + VV.fmt.date(r.from || r.createdAt) + ' đến ' + VV.fmt.date(r.to) + ') · Lập lúc ' + VV.fmt.dateTime(r.createdAt) + '</p></div>' +
      '<div class="stat-grid">' +
      '<div class="stat"><b>' + r.totalEssays + '</b><span>bài đã nộp</span></div>' +
      '<div class="stat"><b>' + r.activeStudents + '/' + r.totalStudents + '</b><span>học sinh tham gia</span></div>' +
      '<div class="stat"><b>' + VV.fmt.score(r.avg) + '</b><span>điểm trung bình</span></div>' +
      '<div class="stat"><b>' + r.levels['Hoàn thành tốt'] + '</b><span>bài hoàn thành tốt</span></div></div>' +
      '<h4>Mức độ hoàn thành</h4><div class="levels">' +
      Object.keys(r.levels).map(function (k) { return '<span class="lv lv-' + VV.slug(k) + '">' + k + ': <b>' + r.levels[k] + '</b></span>'; }).join('') + '</div>' +
      '<h4>Xu hướng điểm của lớp theo tuần</h4>' + lineChart(r.weekly) +
      '<h4>Điểm trung bình từng học sinh</h4>' + barChart(r.rows) +
      '<h4>Theo dạng văn</h4><table class="tbl"><thead><tr><th>Dạng văn</th><th>Số bài</th><th>Điểm TB</th></tr></thead><tbody>' +
      (r.byGenre.length ? r.byGenre.map(function (g) { return '<tr><td>' + VV.esc(g.name) + '</td><td>' + g.count + '</td><td>' + VV.fmt.score(g.avg) + '</td></tr>'; }).join('') : '<tr><td colspan="3" class="muted">Chưa có dữ liệu</td></tr>') +
      '</tbody></table>' +
      '<h4>Chi tiết từng học sinh</h4><div class="tbl-wrap"><table class="tbl"><thead><tr><th>Học sinh</th><th>Số bài</th><th>Điểm TB</th><th>Cao nhất</th><th>Tiến bộ</th><th>Số chữ TB</th><th>Lỗi CT TB</th><th>Cần rèn thêm</th><th>Dạng đã viết</th></tr></thead><tbody>' +
      r.rows.map(function (s) {
        return '<tr><td>' + VV.esc(s.name) + '</td><td>' + s.count + '</td><td>' + VV.fmt.score(s.avg) + '</td><td>' + VV.fmt.score(s.best) + '</td><td>' + trend(s.trend) +
          '</td><td>' + s.words + '</td><td>' + VV.fmt.score(s.errors) + '</td><td>' + VV.esc(s.weakest) + '</td><td class="small">' + VV.esc(s.genres.join(', ')) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
    return html;
  }

  function toCSV(r) {
    var q = function (v) { v = v == null ? '' : String(v); return /[",\n;]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
    var lines = [
      ['BÁO CÁO TIẾN ĐỘ VIẾT VĂN', 'Lớp ' + r.classCode, r.label, 'Từ ' + VV.fmt.date(r.from) + ' đến ' + VV.fmt.date(r.to)],
      ['Tổng số bài', r.totalEssays, 'Điểm TB lớp', VV.fmt.score(r.avg)],
      [],
      ['Học sinh', 'Số bài', 'Điểm TB', 'Cao nhất', 'Tiến bộ', 'Số chữ TB', 'Lỗi chính tả TB', 'Cần rèn thêm', 'Dạng đã viết', 'Các điểm']
    ];
    r.rows.forEach(function (s) {
      lines.push([s.name, s.count, VV.fmt.score(s.avg), VV.fmt.score(s.best), s.trend == null ? '' : VV.fmt.score(s.trend), s.words, VV.fmt.score(s.errors), s.weakest, s.genres.join(' | '), s.scores.map(VV.fmt.score).join(' ')]);
    });
    return '﻿' + lines.map(function (l) { return l.map(q).join(','); }).join('\r\n');
  }

  /* Tự tạo báo cáo định kỳ khi đến hạn */
  function autoPeriodic(classCode) {
    return Promise.all([VV.db.getKV('reportPeriod', 'week'), VV.db.getKV('lastAutoReport', 0)]).then(function (s) {
      var period = s[0], last = s[1] || 0;
      if (period === 'off') return null;
      var span = period === 'month' ? 30 * DAY : 7 * DAY;
      if (Date.now() - last < span) return null;
      return Promise.all([VV.db.all('essays'), VV.db.all('students')]).then(function (d) {
        var range = periodRange(period === 'month' ? 'month' : 'week');
        var rep = build({ essays: d[0], students: d[1], from: range.from, to: range.to, label: 'Báo cáo định kỳ ' + (period === 'month' ? 'hằng tháng' : 'hằng tuần'), classCode: classCode });
        var rec = { id: VV.db.uid('rp'), classCode: classCode, auto: true, createdAt: Date.now(), data: rep };
        return VV.db.put('reports', rec).then(function () { return VV.db.setKV('lastAutoReport', Date.now()); }).then(function () { return rec; });
      });
    });
  }

  return { build: build, render: render, toCSV: toCSV, periodRange: periodRange, autoPeriodic: autoPeriodic, finalScore: finalScore };
})();

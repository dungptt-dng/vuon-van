/* Sao lưu tự động trên máy + trao đổi dữ liệu giữa các máy bằng TỆP (không cần mạng, không cần tài khoản).
   - Học sinh: "Gửi bài cho thầy cô" → tải tệp .json chứa bài của em; thầy cô mở tệp đó trên máy mình.
   - Giáo viên: "Gửi bài tập & nhận xét" → tải tệp cho cả lớp; học sinh mở tệp đó để nhận bài tập, điểm, lời nhận xét.
   Chép tệp bằng USB, Zalo, email… tuỳ thầy cô. */
window.VV = window.VV || {};

VV.backup = (function () {
  var STORES = ['students', 'essays', 'assignments', 'reports'];

  function snapshot(filterStudentId) {
    return VV.db.exportAll().then(function (data) {
      if (filterStudentId) {
        data.essays = data.essays.filter(function (e) { return e.studentId === filterStudentId; });
        data.students = data.students.filter(function (s) { return s.id === filterStudentId; });
        data.reports = [];
      }
      return data;
    });
  }

  /* Bản sao lưu trong máy, giữ 7 bản gần nhất */
  function local(filterStudentId) {
    return snapshot(filterStudentId).then(function (data) {
      var id = 'bk_' + VV.fmt.dayKey(Date.now());
      return VV.db.putRaw('backups', { id: id, createdAt: Date.now(), data: data }).then(function () {
        return VV.db.allRaw('backups').then(function (rows) {
          rows.sort(function (a, b) { return b.createdAt - a.createdAt; });
          return Promise.all(rows.slice(7).map(function (r) { return VV.db.hardDelete('backups', r.id); }));
        });
      }).then(function () { return VV.db.setKV('lastBackupAt', Date.now()); });
    });
  }

  /* Mỗi ngày tự sao lưu một lần khi mở app */
  function auto(opts) {
    return VV.db.getKV('lastBackupDay', '').then(function (last) {
      var today = VV.fmt.dayKey(Date.now());
      if (last === today) return false;
      return local(opts.role === 'teacher' ? null : opts.studentId)
        .then(function () { return VV.db.setKV('lastBackupDay', today); })
        .then(function () { return true; });
    }).catch(function (e) { console.warn('[backup]', e); return false; });
  }

  function save(name, data) {
    VV.download(name, JSON.stringify(data), 'application/json');
  }

  /* Tệp học sinh gửi thầy cô: bài làm của em */
  function exportStudent(student) {
    return snapshot(student.id).then(function (d) {
      d.kind = 'student';
      d.classCode = student.classCode;
      d.assignments = [];
      save('bai-lam-' + VV.slug(student.name) + '-' + VV.fmt.dayKey(Date.now()) + '.json', d);
      return d.essays.filter(function (e) { return !e.deleted && e.status !== 'writing'; }).length;
    });
  }

  /* Tệp thầy cô gửi cả lớp: bài tập + bài đã nhận xét */
  function exportClass(classCode) {
    return VV.db.exportAll().then(function (d) {
      var out = { app: 'vuon-van', version: 1, kind: 'class', classCode: classCode, exportedAt: d.exportedAt };
      out.assignments = d.assignments.filter(function (a) { return a.classCode === classCode; });
      out.essays = d.essays.filter(function (e) { return e.classCode === classCode && (e.teacherReviewed || e.deleted); });
      out.students = []; out.reports = [];
      save('bai-tap-lop-' + VV.slug(classCode) + '-' + VV.fmt.dayKey(Date.now()) + '.json', out);
      return { assignments: out.assignments.filter(function (a) { return !a.deleted; }).length, essays: out.essays.filter(function (e) { return !e.deleted; }).length };
    });
  }

  function exportFull() {
    return VV.db.exportAll().then(function (d) {
      d.kind = 'backup';
      save('vuon-van-sao-luu-' + VV.fmt.dayKey(Date.now()) + '.json', d);
    });
  }

  function readFile(file) {
    return file.text().then(function (t) {
      var json;
      try { json = JSON.parse(t); } catch (e) { throw new Error('Tệp bị hỏng hoặc không đúng định dạng'); }
      if (!json || json.app !== 'vuon-van') throw new Error('Đây không phải tệp của Vườn Văn');
      return json;
    });
  }

  /* Nhập tệp. Học sinh chỉ nhận bài tập của lớp mình và bài của chính mình. Trả về số bản ghi mới/cập nhật theo loại. */
  function importFile(file, who) {
    return readFile(file).then(function (json) {
      var keep = null;
      if (who && who.role === 'student') {
        keep = function (store, row) {
          if (store === 'assignments') return row.classCode === who.classCode;
          if (store === 'essays') return row.studentId === who.studentId;
          return false;
        };
      }
      return VV.db.importAll(json, keep).then(function (counts) { counts.kind = json.kind || 'backup'; return counts; });
    });
  }

  return { local: local, auto: auto, exportStudent: exportStudent, exportClass: exportClass, exportFull: exportFull, importFile: importFile, STORES: STORES };
})();

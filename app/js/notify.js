/* Thông báo nhắc bài tập.
   - Bài tập mới (thầy cô giao trên máy này hoặc nhận qua tệp) → thông báo ngay.
   - Bài sắp đến hạn (trong 24 giờ) mà chưa nộp → nhắc.
   - Nhắc luyện viết hằng ngày theo giờ thầy cô/phụ huynh đặt.
   - Khi cài app (PWA) trên Chrome/Edge: service worker kiểm tra định kì cả khi app đóng (Periodic Background Sync). */
window.VV = window.VV || {};

VV.notify = (function () {
  var timer = null;

  function supported() { return 'Notification' in window; }
  function granted() { return supported() && Notification.permission === 'granted'; }

  function request() {
    if (!supported()) return Promise.resolve('unsupported');
    return Notification.requestPermission().then(function (p) {
      if (p === 'granted') registerPeriodic();
      return p;
    });
  }

  function show(title, body, tag) {
    if (VV.ui && VV.ui.toast) VV.ui.toast('🔔 ' + title + (body ? ' – ' + body : ''), 'info', 6000);
    if (!granted()) return;
    var opts = { body: body, tag: tag || 'vv', icon: 'assets/icon-192.png', badge: 'assets/icon-192.png', lang: 'vi' };
    if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      navigator.serviceWorker.ready.then(function (reg) { reg.showNotification(title, opts); });
    } else {
      try { new Notification(title, opts); } catch (e) { /* một số trình duyệt di động chỉ cho phép qua service worker */ }
    }
  }

  function registerPeriodic() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.ready.then(function (reg) {
      if (reg.periodicSync) {
        reg.periodicSync.register('vv-reminders', { minInterval: 6 * 60 * 60 * 1000 }).catch(function () {});
      }
    });
  }

  function todayKey() { return VV.fmt.dayKey(Date.now()); }

  /* Kiểm tra nhắc nhở cho học sinh đang đăng nhập */
  function checkStudent(student) {
    if (!student) return Promise.resolve();
    return Promise.all([
      VV.db.all('assignments'), VV.db.all('essays'), VV.db.getKV('notified', {}), VV.db.getKV('reminderTime', '19:00')
    ]).then(function (r) {
      var assignments = r[0].filter(function (a) { return a.classCode === student.classCode; });
      var essays = r[1].filter(function (e) { return e.studentId === student.id; });
      var notified = r[2] || {};
      var now = Date.now(), today = todayKey();

      assignments.forEach(function (a) {
        var done = essays.some(function (e) { return e.assignmentId === a.id && e.status !== 'writing'; });
        if (done) return;
        if (!notified['new_' + a.id]) {
          show('Bài tập mới: ' + a.title, 'Hạn nộp: ' + VV.fmt.dateTime(a.dueAt), 'new_' + a.id);
          notified['new_' + a.id] = now;
        }
        var left = a.dueAt - now;
        if (left > 0 && left < 24 * 3600 * 1000 && notified['due_' + a.id] !== today) {
          show('Sắp đến hạn nộp bài!', a.title + ' – còn khoảng ' + Math.ceil(left / 3600000) + ' giờ', 'due_' + a.id);
          notified['due_' + a.id] = today;
        }
      });

      // Nhắc luyện viết mỗi ngày
      var rt = (r[3] || '').split(':');
      if (rt.length === 2) {
        var at = new Date(); at.setHours(+rt[0], +rt[1], 0, 0);
        var wroteToday = essays.some(function (e) { return VV.fmt.dayKey(e.updatedAt) === today; });
        if (now >= at.getTime() && !wroteToday && notified.daily !== today) {
          show('Vườn Văn nhớ em!', 'Hôm nay em chưa luyện viết. Cùng gieo một bài văn nhé 🌱', 'daily');
          notified.daily = today;
        }
      }
      return VV.db.setKV('notified', notified);
    });
  }

  /* Nhắc giáo viên: bài chờ xem, đến kỳ báo cáo */
  function checkTeacher(classCode) {
    return Promise.all([VV.db.all('essays'), VV.db.getKV('notified', {})]).then(function (r) {
      var notified = r[1] || {}, today = todayKey();
      var waiting = r[0].filter(function (e) { return e.classCode === classCode && e.status !== 'writing' && !e.teacherReviewed; }).length;
      if (waiting && notified.teacherWaiting !== today) {
        show('Có ' + waiting + ' bài chờ thầy cô xem', 'Vào mục Bài làm để nhận xét.', 'teacher-waiting');
        notified.teacherWaiting = today;
      }
      return VV.db.setKV('notified', notified);
    });
  }

  function startLoop(fn) {
    clearInterval(timer);
    fn();
    timer = setInterval(fn, 60 * 1000);
  }

  return {
    supported: supported, granted: granted, request: request, show: show,
    checkStudent: checkStudent, checkTeacher: checkTeacher, startLoop: startLoop, registerPeriodic: registerPeriodic,
    stop: function () { clearInterval(timer); }
  };
})();

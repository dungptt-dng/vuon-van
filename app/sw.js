/* Service worker của Vườn Văn: chạy ngoại tuyến + nhắc bài tập định kỳ */
var CACHE = 'vuon-van-v3';
var SHELL = [
  './', 'index.html', 'manifest.webmanifest', 'css/fonts.css', 'css/style.css',
  'js/utils.js', 'js/data.js', 'js/kb.js', 'js/kb-stories.js', 'js/kb-nature.js', 'js/kb-life.js', 'js/kb-tasks.js', 'js/db.js', 'js/spell.js', 'js/samples.js', 'js/coach.js', 'js/backup.js',
  'js/notify.js', 'js/report.js', 'js/app.js', 'js/teacher.js',
  'assets/bg-login.jpg', 'assets/icon-192.png', 'assets/icon-512.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;
  // Ưu tiên bản mới nhất (khi thầy cô cập nhật app), không có mạng thì dùng bản đã lưu
  e.respondWith(caches.open(CACHE).then(function (cache) {
    return fetch(req).then(function (res) {
      if (res && res.ok) cache.put(req, res.clone());
      return res;
    }).catch(function () {
      return cache.match(req, { ignoreSearch: true }).then(function (hit) { return hit || cache.match('index.html'); });
    });
  }));
});

/* ---------- Nhắc bài khi app đang đóng (Periodic Background Sync – Chrome/Edge khi đã cài app) ---------- */
function idb() {
  return new Promise(function (resolve, reject) {
    var r = indexedDB.open('vuon-van', 1);
    r.onsuccess = function () { resolve(r.result); };
    r.onerror = function () { reject(r.error); };
    r.onupgradeneeded = function () { r.transaction.abort(); };
  });
}
function getAll(db, store) {
  return new Promise(function (resolve) {
    var q = db.transaction(store).objectStore(store).getAll();
    q.onsuccess = function () { resolve(q.result || []); };
    q.onerror = function () { resolve([]); };
  });
}
function getKV(db, key) {
  return new Promise(function (resolve) {
    var q = db.transaction('kv').objectStore('kv').get(key);
    q.onsuccess = function () { resolve(q.result ? q.result.value : null); };
    q.onerror = function () { resolve(null); };
  });
}
function setKV(db, key, value) {
  return new Promise(function (resolve) {
    var t = db.transaction('kv', 'readwrite');
    t.objectStore('kv').put({ key: key, value: value });
    t.oncomplete = resolve; t.onerror = resolve;
  });
}
function dayKey(ts) { var d = new Date(ts); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }

function checkReminders() {
  return idb().then(function (db) {
    return Promise.all([getKV(db, 'session'), getAll(db, 'assignments'), getAll(db, 'essays'), getKV(db, 'notified')]).then(function (r) {
      var s = r[0];
      if (!s || s.role !== 'student') return;
      var notified = r[3] || {}, now = Date.now(), today = dayKey(now), jobs = [];
      r[1].filter(function (a) { return !a.deleted && a.classCode === s.classCode; }).forEach(function (a) {
        var done = r[2].some(function (e) { return !e.deleted && e.studentId === s.studentId && e.assignmentId === a.id && e.status !== 'writing'; });
        var left = a.dueAt - now;
        if (!done && left > 0 && left < 24 * 3600 * 1000 && notified['due_' + a.id] !== today) {
          jobs.push(self.registration.showNotification('Sắp đến hạn nộp bài!', { body: a.title, tag: 'due_' + a.id, icon: 'assets/icon-192.png', lang: 'vi' }));
          notified['due_' + a.id] = today;
        }
      });
      return Promise.all(jobs).then(function () { return setKV(db, 'notified', notified); });
    });
  }).catch(function () {});
}

self.addEventListener('periodicsync', function (e) {
  if (e.tag === 'vv-reminders') e.waitUntil(checkReminders());
});

self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) { if ('focus' in list[i]) return list[i].focus(); }
    return self.clients.openWindow('./');
  }));
});

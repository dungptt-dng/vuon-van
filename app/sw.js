/* Service worker của Vườn Văn: chạy ngoại tuyến + nhắc bài tập định kỳ */
var CACHE = 'vuon-van-v1';
var SHELL = [
  './', 'index.html', 'manifest.webmanifest', 'css/style.css',
  'js/config.js', 'js/utils.js', 'js/data.js', 'js/db.js', 'js/spell.js', 'js/ai.js', 'js/sync.js',
  'js/notify.js', 'js/report.js', 'js/app.js', 'js/teacher.js',
  'assets/bg-login.jpg', 'assets/icon-192.png', 'assets/icon-512.png'
];
// Thư viện/phông chữ từ CDN: lưu lại để lần sau dùng được khi mất mạng
var CDN = /^https:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com|www\.gstatic\.com\/firebasejs|cdn\.jsdelivr\.net)\//;

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
  var url = new URL(req.url);
  var same = url.origin === self.location.origin;
  if (!same && !CDN.test(req.url)) return; // API (Anthropic, Firestore…) luôn đi thẳng ra mạng
  e.respondWith(caches.open(CACHE).then(function (cache) {
    var fromNet = function () {
      return fetch(req).then(function (res) {
        if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
        return res;
      });
    };
    if (same) {
      // Tệp của app: ưu tiên bản mới nhất từ mạng, mất mạng thì dùng bản đã lưu
      return fromNet().catch(function () {
        return cache.match(req, { ignoreSearch: true }).then(function (hit) { return hit || cache.match('index.html'); });
      });
    }
    // Thư viện CDN (đã ghim phiên bản): dùng bản đã lưu cho nhanh
    return cache.match(req).then(function (hit) { return hit || fromNet(); });
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

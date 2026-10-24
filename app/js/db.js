/* Lưu trữ cục bộ bằng IndexedDB (chạy cả khi mất mạng).
   Mọi bản ghi có: id, updatedAt (dùng để biết bản nào mới hơn khi gộp dữ liệu từ tệp). */
window.VV = window.VV || {};

VV.db = (function () {
  var DB_NAME = 'vuon-van';
  var DB_VERSION = 1;
  var STORES = ['students', 'essays', 'assignments', 'reports', 'backups', 'kv'];
  var dbPromise = null;

  function open() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolve, reject) {
      var req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = function () {
        var db = req.result;
        STORES.forEach(function (name) {
          if (!db.objectStoreNames.contains(name)) {
            db.createObjectStore(name, { keyPath: name === 'kv' ? 'key' : 'id' });
          }
        });
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error); };
    });
    return dbPromise;
  }

  function tx(store, mode, fn) {
    return open().then(function (db) {
      return new Promise(function (resolve, reject) {
        var t = db.transaction(store, mode);
        var s = t.objectStore(store);
        var result = fn(s);
        t.oncomplete = function () { resolve(result instanceof IDBRequest ? result.result : result); };
        t.onerror = function () { reject(t.error); };
      });
    });
  }

  function uid(prefix) {
    return (prefix || 'id') + '_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 8);
  }

  return {
    uid: uid,
    get: function (store, id) { return tx(store, 'readonly', function (s) { return s.get(id); }); },
    all: function (store) {
      return tx(store, 'readonly', function (s) { return s.getAll(); }).then(function (rows) {
        return (rows || []).filter(function (r) { return !r.deleted; });
      });
    },
    allRaw: function (store) { return tx(store, 'readonly', function (s) { return s.getAll(); }); },
    put: function (store, obj) {
      obj.updatedAt = Date.now();
      return tx(store, 'readwrite', function (s) { s.put(obj); }).then(function () {
        document.dispatchEvent(new CustomEvent('vv:data', { detail: { store: store, id: obj.id } }));
        return obj;
      });
    },
    /* Lưu nguyên bản ghi, không đổi updatedAt (dùng cho bản sao lưu) */
    putRaw: function (store, obj) {
      return tx(store, 'readwrite', function (s) { s.put(obj); });
    },
    remove: function (store, id) {
      // Xoá mềm để thao tác xoá cũng được chuyển sang máy khác qua tệp
      var self = this;
      return self.get(store, id).then(function (obj) {
        if (!obj) return;
        obj.deleted = true;
        return self.put(store, obj);
      });
    },
    hardDelete: function (store, id) { return tx(store, 'readwrite', function (s) { s.delete(id); }); },
    clear: function (store) { return tx(store, 'readwrite', function (s) { s.clear(); }); },
    getKV: function (key, fallback) {
      return tx('kv', 'readonly', function (s) { return s.get(key); }).then(function (r) {
        return r ? r.value : fallback;
      });
    },
    setKV: function (key, value) { return tx('kv', 'readwrite', function (s) { s.put({ key: key, value: value }); }); },
    exportAll: function () {
      var out = { app: 'vuon-van', version: 1, exportedAt: new Date().toISOString() };
      var data = ['students', 'essays', 'assignments', 'reports'];
      return Promise.all(data.map(function (n) { return tx(n, 'readonly', function (s) { return s.getAll(); }); }))
        .then(function (res) { data.forEach(function (n, i) { out[n] = res[i] || []; }); return out; });
    },
    /* Gộp dữ liệu từ tệp: bản ghi nào mới hơn thì giữ. keep(store, row) để lọc (tuỳ chọn).
       Trả về số bản ghi được thêm/cập nhật theo từng loại. */
    importAll: function (json, keep) {
      var data = ['students', 'essays', 'assignments', 'reports'];
      var counts = { students: 0, essays: 0, assignments: 0, reports: 0 };
      var ops = [];
      data.forEach(function (n) {
        (json[n] || []).forEach(function (row) {
          if (!row || !row.id || (keep && !keep(n, row))) return;
          delete row._dirty;
          ops.push(tx(n, 'readwrite', function (s) {
            var r = s.get(row.id);
            r.onsuccess = function () {
              if (!r.result || (row.updatedAt || 0) > (r.result.updatedAt || 0)) { s.put(row); counts[n]++; }
            };
          }));
        });
      });
      return Promise.all(ops).then(function () {
        document.dispatchEvent(new CustomEvent('vv:data', { detail: { store: 'import', counts: counts } }));
        return counts;
      });
    }
  };
})();

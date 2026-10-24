/* Lưu trữ cục bộ bằng IndexedDB (chạy cả khi mất mạng).
   Mọi bản ghi có: id, updatedAt; bản ghi chưa đồng bộ lên đám mây có _dirty = 1. */
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
    /* Lưu bản ghi do người dùng thay đổi → đánh dấu cần đồng bộ */
    put: function (store, obj) {
      obj.updatedAt = Date.now();
      obj._dirty = 1;
      return tx(store, 'readwrite', function (s) { s.put(obj); }).then(function () {
        document.dispatchEvent(new CustomEvent('vv:data', { detail: { store: store, id: obj.id } }));
        return obj;
      });
    },
    /* Lưu bản ghi nhận về từ đám mây (không đánh dấu dirty) */
    putRemote: function (store, obj) {
      obj._dirty = 0;
      return tx(store, 'readwrite', function (s) { s.put(obj); });
    },
    markClean: function (store, id, updatedAt) {
      return tx(store, 'readwrite', function (s) {
        var r = s.get(id);
        r.onsuccess = function () {
          if (r.result && r.result.updatedAt === updatedAt) { r.result._dirty = 0; s.put(r.result); }
        };
      });
    },
    remove: function (store, id) {
      // Xoá mềm để thiết bị khác cũng nhận được thao tác xoá khi đồng bộ
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
    dirty: function (store) {
      return tx(store, 'readonly', function (s) { return s.getAll(); }).then(function (rows) {
        return (rows || []).filter(function (r) { return r._dirty; });
      });
    },
    exportAll: function () {
      var out = { app: 'vuon-van', version: 1, exportedAt: new Date().toISOString() };
      var data = ['students', 'essays', 'assignments', 'reports'];
      return Promise.all(data.map(function (n) { return tx(n, 'readonly', function (s) { return s.getAll(); }); }))
        .then(function (res) { data.forEach(function (n, i) { out[n] = res[i] || []; }); return out; });
    },
    importAll: function (json) {
      var data = ['students', 'essays', 'assignments', 'reports'];
      var ops = [];
      data.forEach(function (n) {
        (json[n] || []).forEach(function (row) {
          ops.push(tx(n, 'readwrite', function (s) {
            var r = s.get(row.id);
            r.onsuccess = function () {
              // Giữ bản mới hơn
              if (!r.result || (row.updatedAt || 0) >= (r.result.updatedAt || 0)) { row._dirty = 1; s.put(row); }
            };
          }));
        });
      });
      return Promise.all(ops);
    }
  };
})();

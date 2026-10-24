/* Đồng bộ thời gian thực giữa các thiết bị + sao lưu tự động lên đám mây (Firebase Firestore).
   App vẫn chạy bình thường nếu chưa cấu hình Firebase hoặc đang mất mạng:
   dữ liệu lưu ở máy, khi có mạng sẽ tự đẩy lên. */
window.VV = window.VV || {};

VV.sync = (function () {
  var FB_VERSION = '12.19.0';
  var STORES = ['students', 'essays', 'assignments', 'reports'];
  var fs = null, classCode = null, unsubs = [], pushTimer = null, started = false;
  var status = { state: 'off', lastSync: 0, message: 'Chưa bật đồng bộ' };

  function setStatus(state, message) {
    status.state = state;
    if (message) status.message = message;
    if (state === 'synced') status.lastSync = Date.now();
    document.dispatchEvent(new CustomEvent('vv:sync', { detail: status }));
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (document.querySelector('script[src="' + src + '"]')) return resolve();
      var s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = function () { reject(new Error('Không tải được ' + src)); };
      document.head.appendChild(s);
    });
  }

  function getConfig() {
    return VV.db.getKV('firebaseConfig', null).then(function (local) {
      if (local) { try { return typeof local === 'string' ? JSON.parse(local) : local; } catch (e) { return null; } }
      return VV.CONFIG && VV.CONFIG.firebase;
    });
  }

  function clean(row) {
    var o = JSON.parse(JSON.stringify(row));
    delete o._dirty;
    return o;
  }

  function col(store) { return fs.collection('classes').doc(classCode).collection(store); }

  function pushDirty() {
    if (!fs || !navigator.onLine) return Promise.resolve();
    setStatus('syncing', 'Đang đồng bộ…');
    return Promise.all(STORES.map(function (store) {
      return VV.db.dirty(store).then(function (rows) {
        rows = rows.filter(function (r) { return !r.classCode || r.classCode === classCode; });
        return Promise.all(rows.map(function (row) {
          return col(store).doc(row.id).set(clean(row)).then(function () {
            return VV.db.markClean(store, row.id, row.updatedAt);
          });
        }));
      });
    })).then(function () {
      setStatus('synced', 'Đã đồng bộ');
    }).catch(function (err) {
      console.warn('[sync] push', err);
      setStatus('error', 'Lỗi đồng bộ: ' + (err.code || err.message));
    });
  }

  function schedulePush() {
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushDirty, 8000); // gom nhiều lần lưu nháp thành một lần ghi để tiết kiệm hạn mức Firestore
  }

  function onRemote(store, snap) {
    var changed = [];
    var tasks = snap.docChanges().map(function (ch) {
      var remote = ch.doc.data();
      if (ch.type === 'removed') return Promise.resolve();
      return VV.db.get(store, remote.id).then(function (local) {
        if (!local || (remote.updatedAt || 0) > (local.updatedAt || 0)) {
          changed.push({ isNew: !local, row: remote });
          return VV.db.putRemote(store, remote);
        }
      });
    });
    Promise.all(tasks).then(function () {
      if (changed.length) {
        setStatus('synced', 'Đã nhận dữ liệu mới');
        document.dispatchEvent(new CustomEvent('vv:remote', { detail: { store: store, changes: changed } }));
      }
    });
  }

  function listen(role, studentId) {
    unsubs.forEach(function (u) { u(); });
    unsubs = [];
    var err = function (e) { console.warn('[sync] listen', e); setStatus('error', 'Lỗi nhận dữ liệu: ' + (e.code || e.message)); };
    if (role === 'teacher') {
      STORES.forEach(function (store) {
        unsubs.push(col(store).onSnapshot(function (s) { onRemote(store, s); }, err));
      });
    } else {
      unsubs.push(col('essays').where('studentId', '==', studentId).onSnapshot(function (s) { onRemote('essays', s); }, err));
      unsubs.push(col('assignments').onSnapshot(function (s) { onRemote('assignments', s); }, err));
    }
    // Cài đặt dùng chung của lớp (khoá AI nếu thầy cô cho phép chia sẻ)
    unsubs.push(col('config').doc('shared').onSnapshot(function (d) {
      var data = d.exists ? d.data() : null;
      if (!data || role === 'teacher') return;
      VV.db.getKV('aiKeySource', '').then(function (src) {
        if (src === 'manual') return; // máy này đã có khoá riêng do thầy cô nhập tay
        VV.db.setKV('aiKey', data.aiKey || '');
        VV.db.setKV('aiKeySource', data.aiKey ? 'class' : '');
        if (data.aiModel) VV.db.setKV('aiModel', data.aiModel);
      });
    }, function () {}));
  }

  function start(opts) {
    // opts: { classCode, role, studentId }
    stop();
    if (!opts.classCode || opts.classCode === 'LOCAL') { setStatus('off', 'Chưa có mã lớp – chỉ lưu trên máy này'); return Promise.resolve(false); }
    return getConfig().then(function (cfg) {
      if (!cfg || !cfg.projectId) { setStatus('off', 'Chưa cấu hình đám mây – chỉ lưu trên máy này'); return false; }
      setStatus('connecting', 'Đang kết nối đám mây…');
      var base = 'https://www.gstatic.com/firebasejs/' + FB_VERSION + '/';
      return loadScript(base + 'firebase-app-compat.js')
        .then(function () { return Promise.all([loadScript(base + 'firebase-auth-compat.js'), loadScript(base + 'firebase-firestore-compat.js')]); })
        .then(function () {
          var app = firebase.apps.length ? firebase.app() : firebase.initializeApp(cfg);
          return app.auth().signInAnonymously().catch(function (e) { console.warn('[sync] auth', e); }).then(function () { return app; });
        })
        .then(function (app) {
          fs = app.firestore();
          classCode = opts.classCode;
          started = true;
          listen(opts.role, opts.studentId);
          return pushDirty().then(function () { return true; });
        })
        .catch(function (e) {
          console.warn('[sync] start', e);
          setStatus(navigator.onLine ? 'error' : 'offline', navigator.onLine ? 'Không kết nối được đám mây' : 'Ngoại tuyến – sẽ đồng bộ khi có mạng');
          return false;
        });
    });
  }

  function stop() {
    unsubs.forEach(function (u) { u(); });
    unsubs = []; started = false; fs = null;
  }

  /* ---------- Sao lưu ---------- */
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

  function localBackup(filterStudentId) {
    return snapshot(filterStudentId).then(function (data) {
      var id = 'bk_' + VV.fmt.dayKey(Date.now());
      return VV.db.putRemote('backups', { id: id, createdAt: Date.now(), data: data }).then(function () {
        return VV.db.allRaw('backups').then(function (rows) {
          rows.sort(function (a, b) { return b.createdAt - a.createdAt; });
          return Promise.all(rows.slice(7).map(function (r) { return VV.db.hardDelete('backups', r.id); }));
        });
      });
    });
  }

  function cloudBackup(filterStudentId, deviceId) {
    if (!fs || !navigator.onLine) return Promise.resolve(false);
    return snapshot(filterStudentId).then(function (data) {
      var json = JSON.stringify(data);
      var CHUNK = 700000, parts = [];
      for (var i = 0; i < json.length; i += CHUNK) parts.push(json.slice(i, i + CHUNK));
      var day = VV.fmt.dayKey(Date.now());
      var ref = col('backups');
      return Promise.all(parts.map(function (p, n) {
        return ref.doc(day + '_' + deviceId + '_' + n).set({ day: day, deviceId: deviceId, part: n, parts: parts.length, createdAt: Date.now(), json: p });
      })).then(function () { return true; });
    });
  }

  /* Sao lưu tự động mỗi ngày một lần (máy + đám mây) */
  function autoBackup(opts) {
    return VV.db.getKV('lastBackupDay', '').then(function (last) {
      var today = VV.fmt.dayKey(Date.now());
      if (last === today) return false;
      var sid = opts.role === 'teacher' ? null : opts.studentId;
      return localBackup(sid)
        .then(function () { return cloudBackup(sid, opts.deviceId); })
        .then(function (cloudOk) {
          return VV.db.setKV('lastBackupDay', today).then(function () {
            return VV.db.setKV('lastBackupInfo', { at: Date.now(), cloud: !!cloudOk });
          }).then(function () { return true; });
        });
    }).catch(function (e) { console.warn('[backup]', e); return false; });
  }

  function shareConfig(data) {
    if (!fs) return Promise.reject(new Error('Chưa kết nối đám mây'));
    return col('config').doc('shared').set(data, { merge: true });
  }

  document.addEventListener('vv:data', function () { if (started) schedulePush(); });
  window.addEventListener('online', function () { if (started) pushDirty(); else setStatus(status.state === 'off' ? 'off' : 'connecting'); });
  window.addEventListener('offline', function () { if (started) setStatus('offline', 'Ngoại tuyến – bài vẫn được lưu trên máy'); });
  setInterval(function () { if (started && navigator.onLine) pushDirty(); }, 60000);

  return {
    start: start, stop: stop, pushNow: pushDirty, autoBackup: autoBackup, localBackup: localBackup,
    cloudBackup: cloudBackup, shareConfig: shareConfig, getConfig: getConfig,
    status: function () { return status; },
    isConnected: function () { return started; }
  };
})();

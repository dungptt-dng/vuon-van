/* Nhạc nền Vườn Văn: một bài nhạc vui tươi tự soạn, phát bằng Web Audio (không cần tệp nhạc, chạy ngoại tuyến) */
window.VV = window.VV || {};

(function () {
  var BPM = 100;
  var EIGHTH = 60 / BPM / 2;

  // Hợp âm theo từng nửa ô nhịp: [bass, 3 nốt đệm] (số MIDI)
  var CH = {
    C: [48, 60, 64, 67], G: [43, 59, 62, 67], Am: [45, 60, 64, 69], F: [41, 60, 65, 69], Em: [40, 59, 64, 67]
  };
  // Giai điệu: [nốt, độ dài tính bằng móc đơn]; null = lặng
  var PHRASE_A = {
    chords: ['C', 'C', 'G', 'G', 'Am', 'Am', 'F', 'F', 'C', 'C', 'G', 'G', 'F', 'G', 'C', 'C'],
    melody: [
      [64, 2], [67, 2], [72, 2], [67, 2],
      [74, 2], [71, 1], [69, 1], [67, 4],
      [69, 2], [72, 2], [76, 2], [74, 1], [72, 1],
      [69, 4], [65, 2], [67, 2],
      [67, 1], [64, 1], [67, 1], [72, 1], [76, 2], [74, 2],
      [74, 2], [71, 2], [67, 2], [71, 2],
      [69, 2], [72, 2], [71, 2], [74, 2],
      [72, 6], [null, 2]
    ]
  };
  var PHRASE_B = {
    chords: ['F', 'F', 'G', 'G', 'Em', 'Em', 'Am', 'Am', 'F', 'F', 'G', 'G', 'C', 'C', 'G', 'G'],
    melody: [
      [69, 1], [72, 1], [77, 2], [76, 2], [72, 2],
      [74, 1], [76, 1], [74, 2], [71, 4],
      [67, 2], [71, 2], [76, 2], [74, 2],
      [72, 4], [69, 4],
      [65, 2], [69, 2], [72, 2], [77, 2],
      [76, 2], [74, 2], [71, 2], [67, 2],
      [76, 1], [74, 1], [72, 2], [67, 2], [64, 2],
      [67, 4], [71, 2], [74, 2]
    ]
  };
  // Thứ tự đoạn: A, A (thêm chuông), B, A (thêm chuông)
  var SONG = [[PHRASE_A, false], [PHRASE_A, true], [PHRASE_B, true], [PHRASE_A, true]];

  var ctx = null, master = null, musicBus = null, echo = null, noiseBuf = null;
  var timer = null, playing = false, wanted = true, volume = 0.5, ducked = false, duckTimer = null;
  var pos = { part: 0, step: 0, note: 0, noteStep: 0, t: 0 };

  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  function setupAudio() {
    if (ctx) return true;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    var comp = ctx.createDynamicsCompressor();
    master.connect(comp); comp.connect(ctx.destination);
    musicBus = ctx.createGain();
    musicBus.gain.value = 0;
    musicBus.connect(master);
    // Tiếng vang nhẹ cho giai điệu
    echo = ctx.createDelay(1);
    echo.delayTime.value = EIGHTH * 3;
    var fb = ctx.createGain(); fb.gain.value = 0.25;
    var wet = ctx.createGain(); wet.gain.value = 0.22;
    echo.connect(fb); fb.connect(echo); echo.connect(wet); wet.connect(musicBus);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    applyGain();
    return true;
  }

  function applyGain() {
    if (!ctx) return;
    var target = playing ? volume * 0.32 * (ducked ? 0.25 : 1) : 0;
    musicBus.gain.cancelScheduledValues(ctx.currentTime);
    musicBus.gain.setTargetAtTime(target, ctx.currentTime, 0.25);
  }

  function env(g, t, peak, attack, decay) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }

  function tone(type, freq, t, peak, decay, dest, filterHz) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    env(g, t, peak, 0.008, decay);
    var out = g;
    if (filterHz) { var f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = filterHz; g.connect(f); out = f; }
    o.connect(g);
    out.connect(dest);
    o.start(t); o.stop(t + decay + 0.05);
    return out;
  }

  // Tiếng mộc cầm (marimba) cho giai điệu
  function marimba(m, t, len, dest) {
    var d = Math.min(1.2, 0.35 + len * EIGHTH * 0.6);
    var a = tone('sine', hz(m), t, 0.5, d, dest);
    tone('sine', hz(m) * 4, t, 0.08, 0.12, dest);
    return a;
  }
  function bell(m, t) { tone('triangle', hz(m + 12), t, 0.12, 0.6, musicBus); }
  function pluck(m, t) { tone('triangle', hz(m), t, 0.12, 0.28, musicBus, 1800); }
  function bass(m, t) { tone('triangle', hz(m), t, 0.38, EIGHTH * 1.8, musicBus, 600); }
  function shaker(t, peak) {
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; f.type = 'highpass'; f.frequency.value = 7000;
    env(g, t, peak, 0.004, 0.05);
    s.connect(f); f.connect(g); g.connect(musicBus);
    s.start(t); s.stop(t + 0.1);
  }

  // Lên lịch từng móc đơn (lookahead scheduler)
  function scheduleStep() {
    var part = SONG[pos.part], ph = part[0], t = pos.t;
    var halfBar = Math.floor(pos.step / 4), inHalf = pos.step % 4;
    var ch = CH[ph.chords[halfBar]];
    if (inHalf === 0) bass(ch[0], t);
    else pluck(ch[inHalf], t);
    shaker(t, pos.step % 2 ? 0.05 : 0.02);
    if (pos.step === pos.noteStep) {
      var n = ph.melody[pos.note];
      if (n[0] != null) {
        var out = marimba(n[0], t, n[1], musicBus);
        out.connect(echo);
        if (part[1]) bell(n[0], t);
      }
      pos.noteStep += n[1];
      pos.note++;
    }
    pos.t += EIGHTH;
    pos.step++;
    if (pos.step >= 64) {
      pos.step = 0; pos.note = 0; pos.noteStep = 0;
      pos.part = (pos.part + 1) % SONG.length;
    }
  }

  function tick() {
    while (pos.t < ctx.currentTime + 0.2) scheduleStep();
  }

  function start() {
    if (!setupAudio()) return;
    if (ctx.state === 'suspended') ctx.resume();
    if (playing) return;
    playing = true;
    pos = { part: 0, step: 0, note: 0, noteStep: 0, t: ctx.currentTime + 0.1 };
    timer = setInterval(tick, 50);
    tick();
    applyGain();
    updateButtons();
  }

  function stop() {
    if (!playing) return;
    playing = false;
    applyGain();
    clearInterval(timer); timer = null;
    updateButtons();
  }

  function updateButtons() {
    Array.prototype.forEach.call(document.querySelectorAll('.music-btn'), function (b) {
      b.classList.toggle('on', playing);
      b.setAttribute('aria-pressed', playing ? 'true' : 'false');
      b.title = playing ? 'Tắt nhạc nền' : 'Bật nhạc nền';
      b.setAttribute('aria-label', b.title);
    });
  }

  function bind(b) {
    b.addEventListener('click', function (e) { e.stopPropagation(); VV.music.toggle(); });
    updateButtons();
  }

  VV.music = {
    bind: bind,
    isOn: function () { return wanted; },
    getVolume: function () { return volume; },
    toggle: function () {
      wanted = !playing;
      if (wanted) start(); else stop();
      VV.db.setKV('music', wanted);
    },
    setVolume: function (v) {
      volume = Math.max(0, Math.min(1, v));
      applyGain();
      VV.db.setKV('musicVolume', volume);
    },
    // Nhỏ nhạc lại khi app đang đọc to, tự to lại khi đọc xong
    duck: function () {
      if (!ctx) return;
      ducked = true; applyGain();
      clearInterval(duckTimer);
      duckTimer = setInterval(function () {
        if (window.speechSynthesis && speechSynthesis.speaking) return;
        clearInterval(duckTimer); ducked = false; applyGain();
      }, 400);
    },
    // Tiếng "tinh tinh" chúc mừng khi nộp bài
    cheer: function () {
      if (!wanted || !setupAudio()) return;
      if (ctx.state === 'suspended') ctx.resume();
      var t = ctx.currentTime + 0.05;
      [72, 76, 79, 84, 88].forEach(function (m, i) {
        tone('triangle', hz(m), t + i * 0.09, 0.22 * volume + 0.05, 0.5, master);
        tone('sine', hz(m) * 2, t + i * 0.09, 0.06, 0.3, master);
      });
    }
  };

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll('.music-btn'), bind);
    Promise.all([VV.db.getKV('music', true), VV.db.getKV('musicVolume', 0.5)]).then(function (r) {
      wanted = r[0] !== false;
      volume = r[1];
      if (!wanted) return;
      // Trình duyệt chỉ cho phát nhạc sau lần chạm/bấm đầu tiên của người dùng
      var kick = function (e) {
        if (e.target.closest && e.target.closest('.music-btn')) return; // để nút nhạc tự xử lí
        document.removeEventListener('pointerdown', kick, true);
        document.removeEventListener('keydown', kick, true);
        if (wanted) start();
      };
      document.addEventListener('pointerdown', kick, true);
      document.addEventListener('keydown', kick, true);
    });
    document.addEventListener('visibilitychange', function () {
      if (!ctx || !playing) return;
      if (document.hidden) ctx.suspend(); else ctx.resume();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();

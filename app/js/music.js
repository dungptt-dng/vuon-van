/* Nhạc nền Vườn Văn: nhạc vui tươi tự soạn, phát bằng Web Audio (không cần tệp nhạc, chạy ngoại tuyến).
   Trang đăng nhập có bài riêng "Buổi sáng ở Vườn Văn": ukulele, hộp nhạc, huýt sáo, chuông và tiếng chim hót. */
window.VV = window.VV || {};

(function () {
  /* ================= BÀI TRONG APP ================= */
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

  /* ================= BÀI Ở TRANG ĐĂNG NHẬP ================= */
  var L_EIGHTH = 60 / 108 / 2;
  // Thế bấm ukulele (dây G-C-E-A) và nốt bass cho từng hợp âm
  var UKE = { C: [67, 60, 64, 72], F: [69, 60, 65, 69], G: [67, 62, 67, 71], Am: [69, 60, 64, 69], Em: [67, 64, 67, 71] };
  var ROOT = { C: 48, F: 41, G: 43, Am: 45, Em: 40 };
  // Kiểu quạt "đảo nhỏ" trong mỗi ô nhịp 8 móc đơn: 1 = quạt xuống, -1 = quạt lên, 0 = nghỉ
  var STRUM = [1, 0, 1, -1, 0, -1, 1, -1];
  // Mỗi ô nhịp một hợp âm; giai điệu tính bằng móc đơn (mỗi ô = 8)
  var L_HEAD = [
    [76, 1], [76, 1], [79, 2], [76, 2], [72, 2],
    [77, 2], [81, 2], [79, 1], [77, 1], [76, 2],
    [74, 2], [79, 2], [77, 1], [76, 1], [74, 2],
    [76, 4], [72, 2], [null, 2],
    [72, 2], [76, 2], [81, 2], [79, 2],
    [77, 2], [81, 2], [84, 2], [81, 2]
  ];
  var L_INTRO = {
    intro: true, lead: 'box', chords: ['C', 'G'],
    melody: [[72, 1], [76, 1], [79, 1], [84, 1], [79, 1], [76, 1], [72, 2], [71, 1], [74, 1], [79, 1], [83, 1], [86, 2], [null, 2]]
  };
  var L_A_OPEN = {
    lead: 'box', chords: ['C', 'F', 'G', 'C', 'Am', 'F', 'G', 'G'],
    melody: L_HEAD.concat([[79, 1], [79, 1], [77, 2], [76, 2], [77, 2], [74, 6], [null, 2]])
  };
  var L_A_CLOSE = {
    lead: 'box', glock: true, chords: ['C', 'F', 'G', 'C', 'Am', 'F', 'G', 'C'],
    melody: L_HEAD.concat([[79, 1], [79, 1], [77, 2], [76, 2], [74, 2], [72, 6], [null, 2]])
  };
  var L_B = {
    lead: 'whistle', chords: ['F', 'C', 'F', 'G', 'Am', 'Em', 'F', 'G'],
    melody: [
      [81, 2], [81, 2], [81, 1], [79, 1], [77, 2],
      [79, 2], [76, 2], [72, 4],
      [81, 2], [81, 2], [84, 2], [81, 2],
      [79, 6], [null, 2],
      [76, 2], [81, 2], [84, 2], [83, 1], [81, 1],
      [79, 2], [83, 2], [79, 2], [76, 2],
      [77, 2], [76, 2], [74, 2], [72, 2],
      [74, 4], [71, 2], [74, 2]
    ]
  };
  // Dạo đầu một lần, sau đó lặp A – A – B – A
  var LOGIN_SONG = [L_INTRO, L_A_OPEN, L_A_CLOSE, L_B, L_A_CLOSE];
  var LOGIN_LOOP = 1;
  var LOGIN_LEVEL = 1.25;

  var ctx = null, master = null, musicBus = null, echo = null, reverbIn = null, noiseBuf = null, lines = null;
  var timer = null, playing = false, wanted = true, volume = 0.5, ducked = false, duckTimer = null;
  var scene = 'login', pos = newPos(0), ukeBufs = {}, ukeVoices = [];

  function hz(m) { return 440 * Math.pow(2, (m - 69) / 12); }
  function newPos(t) { return { part: 0, step: 0, note: 0, noteStep: 0, t: t }; }

  // Kênh riêng cho từng nhạc cụ: chỉnh trái/phải và lượng tiếng vang
  function strip(pan, rev) {
    var g = ctx.createGain(), node = g;
    if (pan && ctx.createStereoPanner) { var p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); node = p; }
    node.connect(musicBus);
    if (rev) { var s = ctx.createGain(); s.gain.value = rev; g.connect(s); s.connect(reverbIn); }
    return g;
  }

  // Tiếng vang như trong phòng nhạc (đáp ứng xung tự tạo)
  function makeReverb(secs) {
    var sr = ctx.sampleRate, len = Math.floor(sr * secs), ir = ctx.createBuffer(2, len, sr);
    for (var c = 0; c < 2; c++) {
      var d = ir.getChannelData(c);
      for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.5);
    }
    var conv = ctx.createConvolver();
    conv.buffer = ir;
    return conv;
  }

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
    reverbIn = ctx.createGain();
    var conv = makeReverb(2.2), warm = ctx.createBiquadFilter();
    warm.type = 'lowpass'; warm.frequency.value = 4500;
    reverbIn.connect(conv); conv.connect(warm); warm.connect(musicBus);
    lines = {
      box: strip(-0.15, 0.3), whistle: strip(0.1, 0.35), glock: strip(0.3, 0.4), uke: strip(0.25, 0.12),
      bass: strip(0, 0), drum: strip(0, 0.05), shaker: strip(-0.3, 0.05), birds: [strip(-0.65, 0.5), strip(0.65, 0.5)]
    };
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    applyGain();
    return true;
  }

  function targetGain() {
    return playing ? volume * 0.32 * (ducked ? 0.25 : 1) * (scene === 'login' ? LOGIN_LEVEL : 1) : 0;
  }

  function applyGain() {
    if (!ctx) return;
    musicBus.gain.cancelScheduledValues(ctx.currentTime);
    musicBus.gain.setTargetAtTime(targetGain(), ctx.currentTime, 0.25);
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

  function noise(t, type, freq, peak, decay, dest) {
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; f.type = type; f.frequency.value = freq;
    env(g, t, peak, 0.004, decay);
    s.connect(f); f.connect(g); g.connect(dest);
    s.start(t); s.stop(t + decay + 0.05);
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
  function shaker(t, peak) { noise(t, 'highpass', 7000, peak, 0.05, musicBus); }

  /* ----- Nhạc cụ của bài trang đăng nhập ----- */

  // Hộp nhạc: trong veo, ngân dài
  function musicBox(m, t, len) {
    var f = hz(m), d = Math.min(1.6, 0.5 + len * L_EIGHTH * 0.5);
    tone('sine', f, t, 0.3, d, lines.box);
    tone('sine', f * 2, t, 0.06, d * 0.5, lines.box);
    tone('sine', f * 4.17, t, 0.02, 0.12, lines.box);
  }

  // Huýt sáo: luyến nhẹ lên nốt, rung dần ở cuối
  function whistle(m, t, len) {
    var f = hz(m), dur = len * L_EIGHTH * 0.92;
    var o = ctx.createOscillator(), g = ctx.createGain(), lfo = ctx.createOscillator(), depth = ctx.createGain();
    o.frequency.setValueAtTime(f * 0.97, t);
    o.frequency.exponentialRampToValueAtTime(f, t + 0.06);
    lfo.frequency.value = 5.5;
    depth.gain.setValueAtTime(0, t);
    depth.gain.linearRampToValueAtTime(f * 0.012, t + Math.min(0.35, dur));
    lfo.connect(depth); depth.connect(o.frequency);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.14, t + 0.04);
    g.gain.linearRampToValueAtTime(0.11, t + dur - 0.05);
    g.gain.linearRampToValueAtTime(0, t + dur);
    o.connect(g); g.connect(lines.whistle);
    o.start(t); lfo.start(t); o.stop(t + dur + 0.05); lfo.stop(t + dur + 0.05);
  }

  // Chuông (glockenspiel) nhân đôi giai điệu ở quãng tám trên
  function glock(m, t) {
    var f = hz(m + 12);
    tone('sine', f, t, 0.08, 0.9, lines.glock);
    tone('sine', f * 2.76, t, 0.02, 0.25, lines.glock);
  }

  // Dây ukulele gảy bằng thuật toán Karplus–Strong (tính sẵn một lần cho mỗi nốt)
  function ukeBuf(m) {
    if (ukeBufs[m]) return ukeBufs[m];
    var sr = ctx.sampleRate, len = Math.floor(sr * 1.6), buf = ctx.createBuffer(1, len, sr), out = buf.getChannelData(0);
    var p = sr / hz(m), N = Math.floor(p - 0.5), frac = p - 0.5 - N;
    if (frac < 0.2) { N--; frac += 1; }
    var C = (1 - frac) / (1 + frac); // bộ lọc thông tất để lên dây cho chuẩn
    var line = new Float32Array(N), i, idx = 0, prev = 0, apX = 0, apY = 0, lp = 0, mean = 0, peak = 0;
    for (i = 0; i < N; i++) { lp += 0.5 * (Math.random() * 2 - 1 - lp); line[i] = lp; mean += lp; }
    for (i = 0; i < N; i++) line[i] -= mean / N;
    for (i = 0; i < len; i++) {
      var x = line[idx], avg = 0.5 * (x + prev), y = C * avg + apX - C * apY;
      out[i] = x; prev = x; apX = avg; apY = y;
      line[idx] = y * 0.996;
      idx = (idx + 1) % N;
      if (Math.abs(x) > peak) peak = Math.abs(x);
    }
    for (i = 0; i < len; i++) out[i] /= peak || 1;
    return (ukeBufs[m] = buf);
  }

  function strum(notes, t, down) {
    var order = down ? [0, 1, 2, 3] : [3, 2, 1, 0], vel = down ? 0.15 : 0.08;
    order.forEach(function (si, k) {
      var at = t + k * (down ? 0.014 : 0.01), old = ukeVoices[si];
      if (old) old.gain.setTargetAtTime(0, at, 0.015); // chặn tiếng dây cũ khi quạt tiếp
      var src = ctx.createBufferSource(), g = ctx.createGain();
      src.buffer = ukeBuf(notes[si]); g.gain.value = vel;
      src.connect(g); g.connect(lines.uke);
      src.start(at); src.stop(at + 1.6);
      ukeVoices[si] = g;
    });
  }

  function softBass(m, t) {
    tone('sine', hz(m), t, 0.38, L_EIGHTH * 3, lines.bass);
    tone('triangle', hz(m), t, 0.1, L_EIGHTH * 1.5, lines.bass, 700);
  }

  function kickDrum(t) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.frequency.setValueAtTime(130, t);
    o.frequency.exponentialRampToValueAtTime(48, t + 0.12);
    env(g, t, 0.32, 0.004, 0.18);
    o.connect(g); g.connect(lines.drum);
    o.start(t); o.stop(t + 0.25);
  }

  // Tiếng chim hót líu lo, lúc bên trái lúc bên phải
  function birds(t) {
    var line = lines.birds[Math.random() < 0.5 ? 0 : 1], base = 2300 + Math.random() * 1200, n = 2 + Math.floor(Math.random() * 3);
    for (var i = 0; i < n; i++) {
      var at = t + i * (0.11 + Math.random() * 0.04), o = ctx.createOscillator(), g = ctx.createGain();
      o.frequency.setValueAtTime(base, at);
      o.frequency.exponentialRampToValueAtTime(base * 1.45, at + 0.05);
      o.frequency.exponentialRampToValueAtTime(base * 1.1, at + 0.08);
      env(g, at, 0.035, 0.01, 0.07);
      o.connect(g); g.connect(line);
      o.start(at); o.stop(at + 0.12);
    }
  }

  /* ----- Lên lịch từng móc đơn (lookahead scheduler) ----- */
  function appStep() {
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

  function loginStep() {
    var sec = LOGIN_SONG[pos.part], t = pos.t, s = pos.step % 8, ch = sec.chords[Math.floor(pos.step / 8)];
    if (STRUM[s]) strum(UKE[ch], t, STRUM[s] > 0);
    if (!sec.intro) {
      if (s === 0) softBass(ROOT[ch], t);
      if (s === 4) softBass(ROOT[ch] + 7, t);
      if (s === 0 || s === 4) kickDrum(t);
      if (s === 2 || s === 6) noise(t, 'bandpass', 2200, 0.12, 0.06, lines.drum); // tiếng búng tay
    }
    noise(t, 'highpass', 7000, s % 2 ? 0.035 : 0.015, 0.05, lines.shaker);
    if (s === 0 && Math.random() < (sec.intro ? 0.7 : 0.15)) birds(t + Math.random() * L_EIGHTH * 6);
    if (pos.step === pos.noteStep) {
      var n = sec.melody[pos.note];
      if (n[0] != null) {
        if (sec.lead === 'whistle') whistle(n[0], t, n[1]); else musicBox(n[0], t, n[1]);
        if (sec.glock) glock(n[0], t);
      }
      pos.noteStep += n[1];
      pos.note++;
    }
    pos.t += L_EIGHTH;
    pos.step++;
    if (pos.step >= sec.chords.length * 8) {
      pos.step = 0; pos.note = 0; pos.noteStep = 0;
      pos.part = pos.part + 1 < LOGIN_SONG.length ? pos.part + 1 : LOGIN_LOOP;
    }
  }

  function tick() {
    while (pos.t < ctx.currentTime + 0.2) {
      if (scene === 'login') loginStep(); else appStep();
    }
  }

  function start() {
    if (!setupAudio()) return;
    if (ctx.state === 'suspended') ctx.resume();
    if (playing) return;
    playing = true;
    pos = newPos(ctx.currentTime + 0.1);
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

  // Đổi bài khi chuyển giữa trang đăng nhập và trong app: nhỏ dần rồi vào bài mới từ đầu
  function setScene(s) {
    if (s === scene) return;
    scene = s;
    if (!playing) return;
    var now = ctx.currentTime;
    musicBus.gain.cancelScheduledValues(now);
    musicBus.gain.setTargetAtTime(0, now, 0.08);
    pos = newPos(Math.max(pos.t, now + 0.45));
    musicBus.gain.setTargetAtTime(targetGain(), now + 0.4, 0.3);
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
    // Trang đăng nhập đang hiện thì phát bài riêng của trang đăng nhập
    var login = document.getElementById('s-login');
    if (login) {
      var sync = function () { setScene(login.hidden ? 'app' : 'login'); };
      sync();
      new MutationObserver(sync).observe(login, { attributes: true, attributeFilter: ['hidden'] });
    }
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

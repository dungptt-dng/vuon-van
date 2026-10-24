/* Tiện ích dùng chung */
window.VV = window.VV || {};

VV.esc = function (s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};

VV.fmt = {
  pad: function (n) { return (n < 10 ? '0' : '') + n; },
  dayKey: function (ts) {
    var d = new Date(ts);
    return d.getFullYear() + '-' + VV.fmt.pad(d.getMonth() + 1) + '-' + VV.fmt.pad(d.getDate());
  },
  date: function (ts) {
    if (!ts) return '';
    var d = new Date(ts);
    return VV.fmt.pad(d.getDate()) + '/' + VV.fmt.pad(d.getMonth() + 1) + '/' + d.getFullYear();
  },
  dateTime: function (ts) {
    if (!ts) return '';
    var d = new Date(ts);
    return VV.fmt.pad(d.getHours()) + ':' + VV.fmt.pad(d.getMinutes()) + ' ' + VV.fmt.date(ts);
  },
  ago: function (ts) {
    var s = Math.round((Date.now() - ts) / 1000);
    if (s < 60) return 'vừa xong';
    if (s < 3600) return Math.floor(s / 60) + ' phút trước';
    if (s < 86400) return Math.floor(s / 3600) + ' giờ trước';
    return VV.fmt.date(ts);
  },
  score: function (x) { return x == null || isNaN(x) ? '–' : (Math.round(x * 100) / 100).toString().replace('.', ','); }
};

/* Bỏ dấu tiếng Việt (dùng để tạo mã học sinh) */
VV.slug = function (s) {
  return (s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

VV.download = function (filename, content, mime) {
  var blob = content instanceof Blob ? content : new Blob([content], { type: mime || 'text/plain;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
};

/* Đọc to bằng giọng tiếng Việt của trình duyệt (hỗ trợ học sinh đọc chậm) */
VV.speak = function (text) {
  if (!('speechSynthesis' in window)) { VV.ui.toast('Trình duyệt này chưa hỗ trợ đọc to.', 'warn'); return; }
  speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.lang = 'vi-VN';
  u.rate = 0.9;
  var vi = speechSynthesis.getVoices().find(function (v) { return /^vi/i.test(v.lang); });
  if (vi) u.voice = vi;
  speechSynthesis.speak(u);
};

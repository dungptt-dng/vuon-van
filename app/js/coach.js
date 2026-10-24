/* "Cô giáo" của VƯỜN VĂN – tạo bản thảo gợi ý và chấm điểm tự động.
   Chạy hoàn toàn trên máy, không cần mạng, không cần tài khoản: dựa trên dữ liệu SGK (data.js),
   bài tham khảo (samples.js) và bộ kiểm tra chính tả (spell.js). */
window.VV = window.VV || {};

VV.coach = (function () {
  function subjectWords(text) {
    var t = (text || '').toLowerCase();
    var groups = [];
    VV.SUBJECT_WORDS.forEach(function (s) {
      var key = s.keys.find(function (k) { return new RegExp('(^|[^\\p{L}])' + k + '([^\\p{L}]|$)', 'u').test(t); });
      if (key && groups.length < 2) groups.push({ group: 'Từ ngữ về "' + key + '"', words: s.words.slice() });
    });
    return groups;
  }

  var STARTERS = {
    essay: ['Trong gia đình em (ở trường em)…', 'Nhìn từ xa,…', 'Em nhớ nhất là…', 'Em rất yêu…'],
    paragraph: ['Em rất…', 'Điều làm em nhớ nhất là…', 'Vì vậy,…'],
    letter: ['…, ngày … tháng … năm …', 'Dạo này … có khoẻ không?', 'Chúc … luôn mạnh khoẻ…'],
    form: ['CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM…', 'Kính gửi:…', '…'],
    guide: ['Các bạn ơi,…', 'Đầu tiên,…', 'Thế là xong!…']
  };

  function shortTopic(topic) {
    var t = (topic || '').replace(/^(Viết (bài văn|đoạn văn)?|Nêu|Kể lại|Tả|Thuật lại|Hướng dẫn|Viết)\s*/i, '');
    return t.length > 40 ? t.slice(0, 38) + '…' : t;
  }

  function draft(o) {
    var g = VV.genreById(o.genreId);
    var want = function (id) { return o.hintTypes.indexOf(id) >= 0; };
    var subj = subjectWords(o.topic + ' ' + (o.request || ''));
    var starters = STARTERS[g.kind] || STARTERS.essay;
    var sample = want('sample') ? VV.SAMPLES[g.id] : null;
    return {
      title: g.name + ': ' + shortTopic(o.topic),
      intro: 'Chào ' + (o.studentName || 'em') + '! Đây là những hạt giống ý tưởng Vườn Văn gieo cho em. Em hãy đọc kĩ rồi tự viết bằng lời của mình nhé!',
      vocabulary: want('vocab') ? subj.concat(g.vocab) : [],
      ideas: want('ideas') ? g.structure.reduce(function (acc, p) {
        return acc.concat(p.questions.slice(0, 2).map(function (q) { return p.part + ': ' + q; }));
      }, []) : [],
      paragraphs: want('paragraph') ? g.structure.map(function (p, i) {
        return { part: p.part, hints: [p.guide].concat(p.questions.slice(0, 2)), starter: starters[Math.min(i, starters.length - 1)] };
      }) : [],
      mindmap: want('mindmap') ? {
        center: shortTopic(o.topic),
        branches: g.structure.map(function (p) {
          return { label: p.part, children: p.questions.slice(0, 3).map(function (q) { return q.replace(/\?$/, ''); }) };
        })
      } : { center: '', branches: [] },
      outline: want('outline') ? g.structure.map(function (p) { return { part: p.part, points: [p.guide].concat(p.questions) }; }) : [],
      sample: sample ? sample.text : '',
      sampleTopic: sample ? sample.topic : '',
      tips: g.tips.slice()
    };
  }

  function round25(x) { return Math.round(x * 4) / 4; }
  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }

  var COMMENTS = {
    'Hoàn thành tốt': 'Bài viết của em rất tốt! Em đã viết đúng dạng bài, ý rõ ràng và dùng từ hay. Em giữ vững phong độ nhé!',
    'Hoàn thành': 'Em đã hoàn thành bài viết khá tốt. Em đọc lại phần "Em cần cố gắng" để bài sau hay hơn nữa nhé!',
    'Đạt yêu cầu': 'Bài của em đạt yêu cầu. Em thêm chi tiết, hình ảnh và soát lại chính tả thì bài sẽ hay hơn nhiều đấy!',
    'Cần cố gắng': 'Em đã cố gắng viết bài. Em đọc lại gợi ý, viết đủ các phần và thêm ý cho bài nhé. Cô tin em sẽ tiến bộ!'
  };

  function grade(o) {
    var g = VV.genreById(o.genreId);
    var text = o.content || '';
    var st = VV.spell.stats(text);
    var errors = VV.spell.check(text, { kind: g.kind });
    var lower = text.toLowerCase();
    var s = {};

    // Bố cục
    if (g.kind === 'essay') s.structure = st.paragraphs >= 3 ? 2 : st.paragraphs === 2 ? 1.25 : 0.75;
    else if (g.kind === 'paragraph') s.structure = st.sentences >= 4 ? 2 : st.sentences >= 2 ? 1.25 : 0.75;
    else {
      var markers = {
        'bao-cao': ['cộng hoà', 'báo cáo', 'kính gửi', 'nhóm'], 'don': ['cộng hoà', 'đơn', 'kính gửi', 'em xin'],
        'giay-moi': ['giấy mời', 'mời', 'thời gian', 'địa điểm'], 'thu': ['ngày', 'thân', 'chúc', 'bạn'],
        'huong-dan-cv': ['chuẩn bị', 'bước', 'đầu tiên', 'cuối cùng'], 'huong-dan-sp': ['sử dụng', 'bước', 'lưu ý', 'bảo quản']
      }[g.id] || [];
      var hit = markers.filter(function (k) { return lower.indexOf(k) >= 0; }).length;
      s.structure = markers.length ? 0.5 + 1.5 * hit / markers.length : 1.25;
    }
    // Nội dung
    var lenRatio = clamp(st.words / g.minWords, 0, 1.2);
    var topicWords = (o.topic || '').toLowerCase().split(/[^\p{L}]+/u).filter(function (w) { return w.length > 2; });
    var overlap = topicWords.filter(function (w) { return lower.indexOf(w) >= 0; }).length / Math.max(1, topicWords.length);
    s.content = clamp(2.2 * Math.min(lenRatio, 1) + 0.8 * overlap, 0, 3);
    // Dùng từ, đặt câu
    var words = lower.split(/[^\p{L}]+/u).filter(Boolean);
    var variety = words.length ? new Set(words).size / words.length : 0;
    var bank = g.vocab.reduce(function (a, v) { return a.concat(v.words); }, []);
    var used = bank.filter(function (w) { return w.length > 3 && lower.indexOf(w.toLowerCase().replace(/…/g, '').trim()) >= 0; }).length;
    s.language = clamp(0.3 + variety * 1.0 + Math.min(used, 4) * 0.15, 0, 2) * Math.min(1, 0.5 + lenRatio / 2);
    // Chính tả
    s.spelling = clamp(1.5 - errors.length * 0.25, 0, 1.5);
    // Sáng tạo, cảm xúc
    var creative = ['như', 'tựa', 'giống như', 'em yêu', 'em thích', 'em cảm thấy', 'thì thầm', 'mỉm cười', 'vui sướng', 'xúc động', 'tự hào', '!']
      .filter(function (k) { return lower.indexOf(k) >= 0; }).length;
    s.creativity = clamp(0.5 + creative * 0.2, 0, 1.5);

    var r = {
      scores: s, onTopic: overlap > 0.2 || topicWords.length === 0,
      strengths: [], improvements: [], corrections: errors.slice(0, 10).map(function (e) {
        return { original: e.original || '(cuối câu)', suggestion: e.suggestion, explanation: e.message };
      })
    };
    if (st.words >= g.minWords) r.strengths.push('Bài viết đủ độ dài (' + st.words + ' chữ).');
    else r.improvements.push('Bài còn ngắn (' + st.words + '/' + g.minWords + ' chữ). Em thêm chi tiết nhé.');
    if (s.structure >= 1.75) r.strengths.push('Bố cục rõ ràng, đúng dạng ' + g.name.toLowerCase() + '.');
    else r.improvements.push('Em xem lại bố cục: ' + g.structure.map(function (p) { return p.part; }).join(' → ') + '.');
    if (errors.length === 0) r.strengths.push('Không phát hiện lỗi chính tả. Giỏi lắm!');
    else r.improvements.push('Có ' + errors.length + ' chỗ cần sửa chính tả/dấu câu.');
    if (creative >= 3) r.strengths.push('Có hình ảnh so sánh và cảm xúc riêng.');
    else r.improvements.push('Thêm hình ảnh so sánh (… như …) và cảm xúc của em.');
    if (used >= 2) r.strengths.push('Biết dùng những từ ngữ hay trong vốn từ của bài.');

    VV.RUBRIC.forEach(function (c) { s[c.id] = round25(clamp(Number(s[c.id]) || 0, 0, c.max)); });
    r.total = round25(VV.RUBRIC.reduce(function (a, c) { return a + s[c.id]; }, 0));
    r.level = r.total >= 9 ? 'Hoàn thành tốt' : r.total >= 7 ? 'Hoàn thành' : r.total >= 5 ? 'Đạt yêu cầu' : 'Cần cố gắng';
    r.comment = COMMENTS[r.level];
    r.gradedAt = Date.now();
    return r;
  }

  return { draft: draft, grade: grade };
})();

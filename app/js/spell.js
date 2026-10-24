/* Kiểm tra chính tả – ngữ pháp tiếng Việt chạy hoàn toàn trên máy (dựa trên luật). */
window.VV = window.VV || {};

VV.spell = (function () {
  // Lỗi hay gặp của học sinh tiểu học: [viết sai, viết đúng, giải thích]
  var COMMON = [
    // s / x
    ['xinh sắn', 'xinh xắn', 's/x'], ['sinh xắn', 'xinh xắn', 's/x'], ['xắp xếp', 'sắp xếp', 's/x'], ['sắp sếp', 'sắp xếp', 's/x'],
    ['xâu sắc', 'sâu sắc', 's/x'], ['sâu xắc', 'sâu sắc', 's/x'], ['xản xuất', 'sản xuất', 's/x'], ['sản suất', 'sản xuất', 's/x'],
    ['sử lí', 'xử lí', 's/x'], ['sử lý', 'xử lý', 's/x'], ['xung xướng', 'sung sướng', 's/x'], ['xinh nhật', 'sinh nhật', 's/x'],
    ['xinh hoạt', 'sinh hoạt', 's/x'], ['suất sắc', 'xuất sắc', 's/x'], ['xuất xắc', 'xuất sắc', 's/x'], ['sung quanh', 'xung quanh', 's/x'],
    ['sôn sao', 'xôn xao', 's/x'], ['xừng xững', 'sừng sững', 's/x'], ['xan xẻ', 'san sẻ', 's/x'], ['chia xẻ', 'chia sẻ', 's/x'],
    ['sum xuê', 'sum suê', 's/x'], ['xum xuê', 'sum suê', 's/x'], ['sắc xảo', 'sắc sảo', 's/x'], ['xạch sẽ', 'sạch sẽ', 's/x'],
    ['sa xôi', 'xa xôi', 's/x'], ['xa sôi', 'xa xôi', 's/x'], ['xáng sủa', 'sáng sủa', 's/x'], ['sương xớm', 'sương sớm', 's/x'],
    // tr / ch
    ['trân thành', 'chân thành', 'tr/ch'], ['chân trọng', 'trân trọng', 'tr/ch'], ['trăm chỉ', 'chăm chỉ', 'tr/ch'], ['trăm sóc', 'chăm sóc', 'tr/ch'],
    ['chở thành', 'trở thành', 'tr/ch'], ['chở nên', 'trở nên', 'tr/ch'], ['trú ý', 'chú ý', 'tr/ch'], ['chong sáng', 'trong sáng', 'tr/ch'],
    ['trăm chú', 'chăm chú', 'tr/ch'], ['chung thực', 'trung thực', 'tr/ch'], ['chung thành', 'trung thành', 'tr/ch'], ['câu truyện', 'câu chuyện', 'tr/ch'],
    ['kể truyện', 'kể chuyện', 'tr/ch'], ['trò truyện', 'trò chuyện', 'tr/ch'], ['chò chuyện', 'trò chuyện', 'tr/ch'], ['chường học', 'trường học', 'tr/ch'],
    ['chí nhớ', 'trí nhớ', 'tr/ch'], ['chí tưởng tượng', 'trí tưởng tượng', 'tr/ch'], ['tròng chành', 'chòng chành', 'tr/ch'],
    // r / d / gi
    ['dản dị', 'giản dị', 'r/d/gi'], ['giạy dỗ', 'dạy dỗ', 'r/d/gi'], ['dực dỡ', 'rực rỡ', 'r/d/gi'], ['dộn dàng', 'rộn ràng', 'r/d/gi'],
    ['dòn dã', 'giòn giã', 'r/d/gi'], ['dung dinh', 'rung rinh', 'r/d/gi'], ['da đình', 'gia đình', 'r/d/gi'], ['dáo viên', 'giáo viên', 'r/d/gi'],
    ['dúp đỡ', 'giúp đỡ', 'r/d/gi'], ['rúp đỡ', 'giúp đỡ', 'r/d/gi'], ['rõ dàng', 'rõ ràng', 'r/d/gi'], ['dõ ràng', 'rõ ràng', 'r/d/gi'],
    ['rữ gìn', 'giữ gìn', 'r/d/gi'], ['dữ gìn', 'giữ gìn', 'r/d/gi'], ['rạy dỗ', 'dạy dỗ', 'r/d/gi'], ['ríu dít', 'ríu rít', 'r/d/gi'],
    ['dì rào', 'rì rào', 'r/d/gi'], ['rịu dàng', 'dịu dàng', 'r/d/gi'], ['giịu dàng', 'dịu dàng', 'r/d/gi'], ['dực rỡ', 'rực rỡ', 'r/d/gi'],
    ['rũng cảm', 'dũng cảm', 'r/d/gi'], ['gióng nói', 'giọng nói', 'r/d/gi'], ['dọng nói', 'giọng nói', 'r/d/gi'],
    // l / n
    ['lăng nổ', 'năng nổ', 'l/n'], ['no nắng', 'lo lắng', 'l/n'], ['lo nắng', 'lo lắng', 'l/n'], ['nong nanh', 'long lanh', 'l/n'],
    ['nấp nánh', 'lấp lánh', 'l/n'], ['nắng nghe', 'lắng nghe', 'l/n'], ['nặng lẽ', 'lặng lẽ', 'l/n'], ['nàng quê', 'làng quê', 'l/n'],
    ['náo lức', 'náo nức', 'l/n'], ['lô lức', 'nô nức', 'l/n'], ['nung linh', 'lung linh', 'l/n'], ['lóng lực', 'nóng nực', 'l/n'],
    ['lóng nực', 'nóng nực', 'l/n'], ['nàm việc', 'làm việc', 'l/n'], ['lăm học', 'năm học', 'l/n'], ['nớp học', 'lớp học', 'l/n'],
    // dấu hỏi / ngã
    ['sạch sẻ', 'sạch sẽ', 'hỏi/ngã'], ['giử gìn', 'giữ gìn', 'hỏi/ngã'], ['dử dội', 'dữ dội', 'hỏi/ngã'], ['sửa chửa', 'sửa chữa', 'hỏi/ngã'],
    ['suy nghỉ', 'suy nghĩ', 'hỏi/ngã'], ['nghĩ ngơi', 'nghỉ ngơi', 'hỏi/ngã'], ['nghĩ học', 'nghỉ học', 'hỏi/ngã'], ['nghĩ hè', 'nghỉ hè', 'hỏi/ngã'],
    ['ngày nghĩ', 'ngày nghỉ', 'hỏi/ngã'], ['nghỉ rằng', 'nghĩ rằng', 'hỏi/ngã'], ['rực rở', 'rực rỡ', 'hỏi/ngã'], ['lặng lẻ', 'lặng lẽ', 'hỏi/ngã'],
    ['mải mải', 'mãi mãi', 'hỏi/ngã'], ['mãi mê', 'mải mê', 'hỏi/ngã'], ['mạnh mẻ', 'mạnh mẽ', 'hỏi/ngã'], ['vui vẽ', 'vui vẻ', 'hỏi/ngã'],
    ['vẽ mặt', 'vẻ mặt', 'hỏi/ngã'], ['vẽ đẹp của', 'vẻ đẹp của', 'hỏi/ngã'], ['dủng cảm', 'dũng cảm', 'hỏi/ngã'], ['sẳn sàng', 'sẵn sàng', 'hỏi/ngã'],
    ['bở ngỡ', 'bỡ ngỡ', 'hỏi/ngã'], ['ngở ngàng', 'ngỡ ngàng', 'hỏi/ngã'], ['ngẩm nghĩ', 'ngẫm nghĩ', 'hỏi/ngã'], ['lẽ loi', 'lẻ loi', 'hỏi/ngã'],
    ['kỹ lưởng', 'kĩ lưỡng', 'hỏi/ngã'], ['kĩ lưởng', 'kĩ lưỡng', 'hỏi/ngã'], ['tưỡng tượng', 'tưởng tượng', 'hỏi/ngã'], ['ngộ nghỉnh', 'ngộ nghĩnh', 'hỏi/ngã'],
    ['rỏ ràng', 'rõ ràng', 'hỏi/ngã'], ['giúp đở', 'giúp đỡ', 'hỏi/ngã'], ['bải biển', 'bãi biển', 'hỏi/ngã'], ['nổ lực', 'nỗ lực', 'hỏi/ngã'],
    ['chia sẽ', 'chia sẻ', 'hỏi/ngã'], ['san sẽ', 'san sẻ', 'hỏi/ngã'], ['quyễn', 'quyển', 'hỏi/ngã'], ['nhửng', 'những', 'hỏi/ngã'],
    ['mổi', 'mỗi', 'hỏi/ngã'], ['củng rất', 'cũng rất', 'hỏi/ngã'], ['củng có', 'cũng có', 'hỏi/ngã'], ['củng được', 'cũng được', 'hỏi/ngã'],
    ['củng thích', 'cũng thích', 'hỏi/ngã'], ['em củng', 'em cũng', 'hỏi/ngã'], ['tôi củng', 'tôi cũng', 'hỏi/ngã'], ['củng là', 'cũng là', 'hỏi/ngã'],
    ['em đả', 'em đã', 'hỏi/ngã'], ['đả được', 'đã được', 'hỏi/ngã'], ['đả có', 'đã có', 'hỏi/ngã'], ['đả từng', 'đã từng', 'hỏi/ngã'],
    ['kỉ niệm', 'kỉ niệm', ''], ['kĩ niệm', 'kỉ niệm', 'hỏi/ngã'], ['kỹ niệm', 'kỷ niệm', 'hỏi/ngã'], ['vẩy đuôi', 'vẫy đuôi', 'hỏi/ngã'],
    ['nhỏ nhắn', 'nhỏ nhắn', ''], ['nhẵn nhụi', 'nhẵn nhụi', ''], ['nhẳn nhụi', 'nhẵn nhụi', 'hỏi/ngã'], ['gọn gàng', 'gọn gàng', ''],
    ['cố gắn', 'cố gắng', 'vần'], ['cố gắng lên', 'cố gắng lên', ''], ['bắt chướt', 'bắt chước', 'vần'], ['chiến thắn', 'chiến thắng', 'vần'],
    ['ngoằn nghèo', 'ngoằn ngoèo', 'vần'], ['khuya khoắc', 'khuya khoắt', 'vần'], ['bát ngác', 'bát ngát', 'vần'], ['ngan ngát', 'ngan ngát', ''],
    ['tháng ngày', 'tháng ngày', ''], ['thương iêu', 'thương yêu', 'vần'], ['iêu thương', 'yêu thương', 'vần'], ['iêu quý', 'yêu quý', 'vần']
  ].filter(function (r) { return r[2]; });

  // Từ viết tắt, "teen code" không dùng trong bài văn
  var TEEN = [
    ['ko', 'không'], ['k0', 'không'], ['hok', 'không'],['hem', 'không'], ['dc', 'được'], ['đc', 'được'],
    ['j', 'gì'], ['vs', 'với'], ['ntn', 'như thế nào'], ['mik', 'mình'], ['mk', 'mình'], ['bít', 'biết'], ['zui', 'vui'],
    ['rùi', 'rồi'], ['thui', 'thôi'], ['nhiu', 'nhiêu'], ['bn', 'bạn'], ['cx', 'cũng'], ['ng', 'người'], ['nc', 'nước'], ['trc', 'trước']
  ];

  // Tên riêng hay viết thường nhầm
  var PROPER = [
    ['việt nam', 'Việt Nam'], ['hà nội', 'Hà Nội'], ['bác hồ', 'Bác Hồ'], ['hồ chí minh', 'Hồ Chí Minh'], ['sa pa', 'Sa Pa'],
    ['trường sa', 'Trường Sa'], ['hoàng sa', 'Hoàng Sa'], ['đà nẵng', 'Đà Nẵng'], ['huế', 'Huế'], ['hạ long', 'Hạ Long']
  ];

  // Từ chức năng không nên lặp đôi liền nhau
  var NO_REPEAT = ['của', 'và', 'là', 'thì', 'mà', 'những', 'các', 'rất', 'cũng', 'đã', 'đang', 'sẽ', 'với', 'cho', 'ở', 'trong', 'một', 'em', 'tôi', 'khi', 'nhưng'];

  var L = '\\p{L}';
  var E_CLASS = 'eèéẻẽẹêềếểễệ';
  var I_CLASS = 'iìíỉĩị';
  var Y_CLASS = 'yỳýỷỹỵ';

  function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  function matchCase(orig, sug) {
    if (orig === orig.toUpperCase() && orig.length > 1) return sug.toUpperCase();
    if (orig[0] && orig[0] !== orig[0].toLowerCase()) return sug[0].toUpperCase() + sug.slice(1);
    return sug;
  }

  function findAll(text, pattern, flags, cb) {
    var re = new RegExp(pattern, flags);
    var m;
    while ((m = re.exec(text)) !== null) {
      cb(m);
      if (m[0].length === 0) re.lastIndex++;
    }
  }

  function wordRe(phrase) {
    return '(?<![' + L + '])' + escapeRe(phrase).replace(/ /g, '\\s+') + '(?![' + L + '])';
  }

  function check(rawText, opts) {
    opts = opts || {};
    var text = (rawText || '').normalize('NFC');
    var issues = [];
    function add(start, end, suggestion, type, message) {
      // tránh trùng vị trí
      for (var i = 0; i < issues.length; i++) {
        if (start < issues[i].end && end > issues[i].start) return;
      }
      issues.push({ start: start, end: end, original: text.slice(start, end), suggestion: suggestion, type: type, message: message });
    }

    // 1. Lỗi thường gặp
    COMMON.forEach(function (r) {
      findAll(text, wordRe(r[0]), 'giu', function (m) {
        add(m.index, m.index + m[0].length, matchCase(m[0], r[1]), 'spelling', 'Lỗi chính tả (' + r[2] + '): viết đúng là "' + r[1] + '".');
      });
    });

    // 2. Teen code
    TEEN.forEach(function (r) {
      findAll(text, wordRe(r[0]), 'giu', function (m) {
        add(m.index, m.index + m[0].length, matchCase(m[0], r[1]), 'teencode', 'Không viết tắt trong bài văn: hãy viết "' + r[1] + '".');
      });
    });

    // 3. Luật ghép chữ tiếng Việt: ng/ngh, g/gh, c/k, q phải đi với u
    findAll(text, '(?<![' + L + '])[' + L + ']+', 'gu', function (m) {
      var w = m[0];
      var lw = w.toLowerCase();
      var sug = null, why = '';
      if (/^ngh/.test(lw) && !new RegExp('^ngh[' + E_CLASS + I_CLASS + ']').test(lw)) {
        sug = w.slice(0, 2) + w.slice(3); why = '"ngh" chỉ đứng trước e, ê, i.';
      } else if (/^ng(?!h)/.test(lw) && new RegExp('^ng[' + E_CLASS + I_CLASS + ']').test(lw)) {
        sug = w.slice(0, 2) + 'h' + w.slice(2); why = 'Trước e, ê, i phải viết "ngh".';
      } else if (/^gh/.test(lw) && !new RegExp('^gh[' + E_CLASS + I_CLASS + ']').test(lw)) {
        sug = w.slice(0, 1) + w.slice(2); why = '"gh" chỉ đứng trước e, ê, i.';
      } else if (new RegExp('^g[' + E_CLASS + ']').test(lw)) {
        sug = w.slice(0, 1) + 'h' + w.slice(1); why = 'Trước e, ê phải viết "gh".';
      } else if (new RegExp('^c[' + E_CLASS + I_CLASS + Y_CLASS + ']').test(lw)) {
        sug = (w[0] === 'C' ? 'K' : 'k') + w.slice(1); why = 'Trước e, ê, i, y phải viết "k".';
      } else if (/^k[aăâoôơuư]/.test(lw)) {
        sug = (w[0] === 'K' ? 'C' : 'c') + w.slice(1); why = '"k" chỉ đứng trước e, ê, i, y.';
      } else if (/^q(?!u)/.test(lw) && lw.length > 1) {
        sug = w[0] + 'u' + w.slice(1); why = '"q" luôn đi với "u" (qu).';
      }
      if (sug) add(m.index, m.index + w.length, sug, 'spelling', 'Sai luật chính tả: ' + why);
    });

    // 4. Tên riêng viết hoa
    PROPER.forEach(function (r) {
      findAll(text, wordRe(r[0]), 'giu', function (m) {
        if (m[0] !== r[1]) add(m.index, m.index + m[0].length, r[1], 'capital', 'Tên riêng phải viết hoa: "' + r[1] + '".');
      });
    });

    // 5. Dấu câu và khoảng trắng
    findAll(text, '[ \\t]+([,.!?;:])', 'g', function (m) {
      add(m.index, m.index + m[0].length, m[1], 'punctuation', 'Không để dấu cách trước dấu câu.');
    });
    findAll(text, '([,!?;])(?=[' + L + '])', 'gu', function (m) {
      add(m.index, m.index + 1, m[1] + ' ', 'punctuation', 'Cần một dấu cách sau dấu câu.');
    });
    findAll(text, '(?<![.\\d])\\.(?=[' + L + '])', 'gu', function (m) {
      add(m.index, m.index + 1, '. ', 'punctuation', 'Cần một dấu cách sau dấu chấm.');
    });
    findAll(text, '(?<=\\S)[^\\S\\n]{2,}(?=\\S)', 'g', function (m) {
      add(m.index, m.index + m[0].length, ' ', 'punctuation', 'Thừa dấu cách.');
    });

    // 6. Viết hoa đầu câu
    findAll(text, '(^|(?<!\\.)[.!?]\\s+|\\n\\s*)([' + L + '])', 'gu', function (m) {
      var ch = m[2];
      var pos = m.index + m[1].length;
      if (ch !== ch.toUpperCase()) {
        add(pos, pos + 1, ch.toUpperCase(), 'capital', 'Chữ cái đầu câu phải viết hoa.');
      }
    });

    // 7. Lặp từ chức năng
    findAll(text, '(?<![' + L + '])(' + NO_REPEAT.join('|') + ')\\s+\\1(?![' + L + '])', 'giu', function (m) {
      add(m.index, m.index + m[0].length, m[1], 'grammar', 'Lặp từ "' + m[1] + '" – hãy bỏ bớt một từ.');
    });

    // 8. Cuối đoạn thiếu dấu kết thúc câu (chỉ với đoạn văn / bài văn)
    if (opts.kind === 'essay' || opts.kind === 'paragraph') {
      var paraRe = /[^\n]+/g, pm;
      while ((pm = paraRe.exec(text)) !== null) {
        var p = pm[0].trimEnd();
        if (p.split(/\s+/).length >= 4 && !/[.!?…:"”)]$/.test(p)) {
          var endPos = pm.index + p.length;
          issues.push({ start: endPos, end: endPos, original: '', suggestion: '.', type: 'punctuation', message: 'Cuối câu cần có dấu kết thúc câu (. ! ?).' });
        }
      }
    }

    issues.sort(function (a, b) { return a.start - b.start; });
    return issues;
  }

  /* Gợi ý về cách diễn đạt (không phải lỗi) */
  function style(rawText) {
    var text = (rawText || '').normalize('NFC');
    var notes = [];
    var sentences = text.split(/(?<=[.!?…])\s+/).filter(function (s) { return s.trim(); });
    sentences.forEach(function (s) {
      var n = s.trim().split(/\s+/).length;
      if (n > 45) notes.push('Có câu rất dài (' + n + ' chữ): "' + s.trim().slice(0, 40) + '…". Hãy tách thành 2 câu cho dễ đọc.');
    });
    var lower = text.toLowerCase();
    [['rất', 'vô cùng, thật, quá, lắm'], ['và', 'cùng, với, còn, lại'], ['rồi', 'sau đó, tiếp theo, lúc ấy'], ['đẹp', 'xinh xắn, lộng lẫy, rực rỡ, duyên dáng'], ['thích', 'yêu, mê, quý, say mê']]
      .forEach(function (pair) {
        var c = (lower.match(new RegExp('(?<![' + L + '])' + pair[0] + '(?![' + L + '])', 'gu')) || []).length;
        if (c >= 4) notes.push('Từ "' + pair[0] + '" được dùng ' + c + ' lần. Thử thay bằng: ' + pair[1] + '.');
      });
    return notes;
  }

  function applyFix(text, issue) {
    var t = (text || '').normalize('NFC');
    return t.slice(0, issue.start) + issue.suggestion + t.slice(issue.end);
  }

  function applyAll(text, issues) {
    var t = (text || '').normalize('NFC');
    issues.slice().sort(function (a, b) { return b.start - a.start; }).forEach(function (is) {
      t = t.slice(0, is.start) + is.suggestion + t.slice(is.end);
    });
    return t;
  }

  function stats(rawText) {
    var text = (rawText || '').trim();
    var words = text ? text.split(/\s+/).filter(function (w) { return /[\p{L}\d]/u.test(w); }).length : 0;
    var sentences = text ? text.split(/[.!?…]+/).filter(function (s) { return s.trim().length > 0; }).length : 0;
    var paragraphs = text ? text.split(/\n\s*\n|\n/).filter(function (p) { return p.trim().length > 0; }).length : 0;
    return { words: words, sentences: sentences, paragraphs: paragraphs };
  }

  return { check: check, style: style, applyFix: applyFix, applyAll: applyAll, stats: stats };
})();

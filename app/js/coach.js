/* "Cô giáo" của VƯỜN VĂN – tạo bản thảo gợi ý và chấm điểm tự động.
   Chạy hoàn toàn trên máy, không cần mạng, không cần tài khoản: dựa trên dữ liệu SGK (data.js),
   kho kiến thức theo từng đề tài (kb*.js), bài tham khảo (samples.js) và bộ kiểm tra chính tả (spell.js). */
window.VV = window.VV || {};

VV.coach = (function () {
  /* Dạng văn nào dùng loại mục nào trong kho kiến thức */
  var TYPES = {
    'ke-chuyen': ['story'], 'tuong-tuong': ['story'], 'cam-xuc-nhan-vat': ['story'], 'y-kien': ['story', 'opinion'],
    'cam-xuc-nguoi': ['person'], 'ta-con-vat': ['animal'], 'ta-cay': ['tree'], 'thuat-lai': ['event'],
    'huong-dan-cv': ['craft'], 'huong-dan-sp': ['product'], 'thu': ['letter'], 'don': ['form'],
    'giay-moi': ['invite'], 'bao-cao': ['report']
  };

  function norm(s) { return ' ' + String(s || '').toLowerCase().normalize('NFC').replace(/[^\p{L}\p{N}]+/gu, ' ').trim() + ' '; }
  function ucfirst(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
  function lcfirst(s) { return s ? s.charAt(0).toLowerCase() + s.slice(1) : ''; }
  function noDot(s) { return String(s || '').replace(/[.!…\s]+$/, ''); }
  function q(name) { return '“' + name + '”'; }

  /* Câu mở đầu gợi ý: lấy vế đầu của một câu mẫu rồi để em viết tiếp */
  function firstClause(s) {
    s = noDot(s);
    var parts = s.split(',');
    var out = parts[0].length >= 14 || parts.length < 2 ? parts[0] : parts[0] + ',' + parts[1];
    if (out.length > 70) out = out.slice(0, 70).replace(/\s+\S*$/, '');
    return out.trim() + '…';
  }

  /* Tìm mục kiến thức khớp nhất trong một đoạn chữ; cụm từ dài thắng cụm ngắn.
     Gõ không dấu vẫn nhận ra, nhưng chỉ với cụm từ có từ hai tiếng trở lên (tránh nhầm "bố" với "bò"). */
  function findIn(types, text) {
    var t = norm(text), tu = VV.unaccent(t), best = null;
    (VV.KB || []).forEach(function (e) {
      if (types.indexOf(e.type) < 0) return;
      e.keys.forEach(function (k) {
        var nk = norm(k).trim(), p = t.indexOf(' ' + nk + ' ');
        if (p < 0 && nk.indexOf(' ') > 0) p = tu.indexOf(' ' + VV.unaccent(nk) + ' ');
        if (p < 0) return;
        var score = nk.length * 10 - p / 100;
        if (!best || score > best.score) best = { entry: e, score: score };
      });
    });
    return best && best.entry;
  }

  /* Ưu tiên đề bài, sau đó đến yêu cầu riêng của em */
  function match(genreId, topic, request) {
    var types = TYPES[genreId] || [];
    return findIn(types, topic) || findIn(types, request);
  }

  /* Đề bài cụ thể sinh từ kho kiến thức cho một dạng văn */
  function kbTopic(genreId, e) {
    if (e.type === 'story') {
      return {
        'ke-chuyen': 'Kể lại câu chuyện ' + q(e.name),
        'y-kien': 'Nêu ý kiến của em về câu chuyện ' + q(e.name),
        'cam-xuc-nhan-vat': 'Nêu tình cảm, cảm xúc của em về ' + e.hero + ' trong câu chuyện ' + q(e.name),
        'tuong-tuong': 'Tưởng tượng một kết thúc khác cho câu chuyện ' + q(e.name)
      }[genreId];
    }
    if (e.type === 'animal' || e.type === 'tree') return 'Tả ' + e.name;
    return e.topic;
  }

  /* Đề bài của một dạng văn: đề SGK + đề có gợi ý chi tiết (bỏ đề tài đã có sẵn trong đề SGK) */
  function topicsFor(genreId) {
    var g = VV.genreById(genreId);
    if (!g) return { sgk: [], kb: [] };
    var types = TYPES[genreId] || [];
    var covered = g.topics.map(function (t) { return findIn(types, t); }).filter(Boolean);
    var kb = (VV.KB || []).filter(function (e) { return types.indexOf(e.type) >= 0 && covered.indexOf(e) < 0; })
      .map(function (e) { return kbTopic(genreId, e); }).filter(Boolean);
    return { sgk: g.topics.slice(), kb: kb };
  }

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

  /* ---------- Bộ ghép gợi ý theo từng dạng văn ----------
     Mỗi hàm nhận mục kiến thức e và trả về
     { center, parts: [{part, points[], starter}], branches: [{label, children[]}], ideas[], sample } */
  function hs(list) { return (list || []).map(function (x) { return x.s; }); }
  function hh(list) { return (list || []).map(function (x) { return x.h; }); }
  function pi(list) { return (list || []).map(function (x) { return x.part + ': ' + x.items.join('; ') + '.'; }); }
  function br(label, children) { return { label: label, children: children.filter(Boolean) }; }
  /* Nhánh có hơn 4 ý thì tách đôi để sơ đồ không bị rối */
  function brSplit(label, children) {
    if (children.length <= 4) return [br(label, children)];
    var half = Math.ceil(children.length / 2);
    return [br(label + ' (1)', children.slice(0, half)), br(label + ' (2)', children.slice(half))];
  }
  /* Nhân vật em muốn viết: nhân vật được nhắc trong đề/yêu cầu, nếu không thì nhân vật chính */
  function heroOf(e, text) {
    var t = norm(text), h = norm(e.hero);
    var c = e.chars.find(function (c) { return t.indexOf(norm(c.n)) >= 0; }) ||
      e.chars.find(function (c) { return norm(c.n).indexOf(h) >= 0 || h.indexOf(norm(c.n)) >= 0; }) || { n: e.hero, t: '' };
    // "Người mẹ", "Cô bé Lọ Lem" đứng giữa câu thì viết thường chữ đầu; tên riêng như "Thánh Gióng" giữ nguyên
    var common = /^(người|cậu|cô|chú|bà|ông|anh|chị|em|cụ|bác|nàng|chàng|con|hai|bốn)\s/i.test(c.n);
    return { n: common ? lcfirst(c.n) : c.n, t: c.t };
  }
  function kindOf(e) { return lcfirst(e.kind || 'câu chuyện'); }
  /* Các sự việc có nhắc tới nhân vật (theo tiếng cuối trong tên: "Người mẹ" → "mẹ"); không có thì lấy các sự việc đầu */
  function heroEvents(e, hero) {
    var all = e.open.concat(e.body, e.end), key = norm(hero.n).trim().split(' ').pop();
    var has = function (s) { return norm(s).indexOf(' ' + key + ' ') >= 0; };
    var mine = all.filter(function (x) { return has(x.h); });
    if (mine.length < 2) mine = all.filter(function (x) { return has(x.s); });
    return (mine.length >= 2 ? mine : e.body).slice(0, 4);
  }
  /* Các cách mở bài là những lựa chọn, không phải viết tất cả */
  function ways(list) { return list.length < 2 ? list : list.map(function (x, i) { return 'Cách ' + (i + 1) + ': ' + x; }); }
  function steps(list) { return list.map(function (s, i) { return 'Bước ' + (i + 1) + ': ' + s.s; }); }
  function numbered(list) { return list.map(function (s, i) { return (i + 1) + '. ' + s.h; }); }

  function describe(tree) {
    return function (e) {
      return {
        center: e.name,
        parts: [
          { part: 'Mở bài', points: ways(e.intro), starter: firstClause(e.intro[0]) },
          { part: tree ? 'Thân bài – Đoạn 1: Tả bao quát và từng bộ phận' : 'Thân bài – Đoạn 1: Tả hình dáng', points: pi(e.look), starter: 'Nổi bật nhất ở ' + e.name + ' là …' },
          { part: tree ? 'Thân bài – Đoạn 2: Sự thay đổi, ích lợi' : 'Thân bài – Đoạn 2: Tả hoạt động, thói quen', points: pi(e.acts), starter: tree ? 'Mỗi mùa, ' + e.name + ' lại …' : (/^khi /i.test(e.acts[0].part) ? e.acts[0].part : 'Hằng ngày') + ', ' + e.name + ' …' },
          { part: 'Kết bài', points: e.bond.concat(e.end), starter: firstClause(e.end[0]) }
        ],
        branches: e.look.slice(0, 3).map(function (p) { return br(p.part, p.items.slice(0, 3)); })
          .concat(e.acts.slice(0, 2).map(function (p) { return br(p.part, p.items.slice(0, 3)); }), [br(tree ? 'Gắn bó với em' : 'Tình cảm', e.bond.slice(0, 2).map(noDot))]),
        ideas: e.intro.concat(pi(e.look), pi(e.acts), e.bond)
      };
    };
  }

  var COMPOSE = {
    'ke-chuyen': function (e) {
      var open = 'Em đã được nghe kể nhiều câu chuyện hay, nhưng em nhớ nhất là ' + kindOf(e) + ' ' + q(e.name) + '.';
      var lesson = 'Câu chuyện ' + q(e.name) + ' giúp em hiểu rằng ' + lcfirst(noDot(e.lesson)) + '.';
      return {
        center: e.name,
        parts: [
          { part: 'Mở bài', points: ['Giới thiệu câu chuyện: ' + e.intro, 'Em được nghe hoặc đọc câu chuyện này ở đâu (bà kể, cô giáo kể, đọc sách…)?'], starter: open },
          { part: 'Thân bài – Mở đầu câu chuyện', points: [e.setting + '.'].concat(hs(e.open), ['Nhân vật: ' + e.chars.map(function (c) { return c.n + ' (' + c.t + ')'; }).join('; ') + '.']), starter: e.setting + '…' },
          { part: 'Thân bài – Diễn biến', points: hs(e.body), starter: firstClause(e.body[0].s) },
          { part: 'Thân bài – Kết thúc', points: hs(e.end), starter: firstClause(e.end[0].s) },
          { part: 'Kết bài', points: ['Bài học: ' + e.lesson].concat(e.feel.slice(0, 2)), starter: 'Câu chuyện ' + q(e.name) + ' giúp em hiểu rằng …' }
        ],
        branches: [br('Nhân vật', e.chars.slice(0, 4).map(function (c) { return c.n; })), br('Mở đầu', hh(e.open))]
          .concat(brSplit('Diễn biến', hh(e.body)), [br('Kết thúc', hh(e.end)), br('Bài học', [noDot(e.lesson)])]),
        ideas: ['Câu chuyện: ' + e.intro, 'Nhân vật: ' + e.chars.map(function (c) { return c.n + ' – ' + c.t; }).join('; ') + '.']
          .concat(e.details.map(function (d) { return 'Chi tiết nên kể thật kĩ: ' + noDot(d) + '.'; }), ['Bài học: ' + e.lesson]),
        sample: [open, e.setting + '. ' + hs(e.open).join(' '), hs(e.body).join(' '), hs(e.end).join(' '), lesson + ' ' + e.feel[0]].join('\n')
      };
    },
    'y-kien': function (e, o) {
      if (e.type === 'opinion') {
        return {
          center: e.name,
          parts: [
            { part: 'Câu mở đầu', points: e.intro, starter: firstClause(e.intro[0]) },
            { part: 'Các câu tiếp theo', points: e.reasons.map(function (r, i) { return 'Lí do ' + (i + 1) + ' – ' + r.h + ': ' + r.s; }), starter: 'Trước hết, …' },
            { part: 'Câu kết thúc', points: e.end, starter: firstClause(e.end[0]) }
          ],
          branches: [br('Ý kiến của em', [noDot(e.intro[0])])]
            .concat(e.reasons.slice(0, 4).map(function (r, i) { return br('Lí do ' + (i + 1), [r.h]); }), [br('Kết luận', [noDot(e.end[0])])]),
          ideas: e.intro.concat(e.reasons.map(function (r) { return r.h + ': ' + r.s; }), e.end),
          sample: e.intro.join(' ') + ' ' + hs(e.reasons).join(' ') + ' ' + e.end.join(' ')
        };
      }
      var aboutHero = /nhân vật/i.test(o.topic + ' ' + o.request);
      var hero = heroOf(e, o.topic + ' ' + o.request);
      var first = aboutHero ? 'Em rất yêu thích nhân vật ' + hero.n + ' trong ' + kindOf(e) + ' ' + q(e.name) + '.' : 'Em rất thích câu chuyện ' + q(e.name) + '.';
      var reasons = aboutHero ? [
        'Lí do 1 – tính cách: ' + hero.n + ' ' + hero.t + '.',
        'Lí do 2 – việc làm đáng nhớ: ' + heroEvents(e, hero).slice(0, 2).map(function (b) { return lcfirst(noDot(b.s)); }).join('; ') + '.',
        'Lí do 3 – chi tiết em ấn tượng: ' + lcfirst(noDot(e.details[0])) + '.',
        'Lí do 4 – điều em học được: ' + lcfirst(e.lesson)
      ] : [
        'Lí do 1 – nội dung hấp dẫn: ' + hh(e.body).join(' → ') + '.',
        'Lí do 2 – nhân vật: ' + e.chars.slice(0, 2).map(function (c) { return c.n + ' ' + c.t; }).join('; ') + '.',
        'Lí do 3 – chi tiết đặc sắc: ' + lcfirst(noDot(e.details[0])) + '.',
        'Lí do 4 – bài học ý nghĩa: ' + lcfirst(e.lesson)
      ];
      return {
        center: aboutHero ? hero.n : 'Em thích ' + q(e.name),
        parts: [
          { part: 'Câu mở đầu', points: ['Nêu ý kiến: ' + first, e.intro], starter: first },
          { part: 'Các câu tiếp theo', points: reasons, starter: 'Trước hết, …' },
          { part: 'Câu kết thúc', points: e.feel.slice(0, 2).concat(['Khẳng định lại: đây là ' + (aboutHero ? 'nhân vật' : 'câu chuyện') + ' em nhớ mãi.']), starter: 'Vì vậy, …' }
        ],
        branches: aboutHero
          ? [br('Tính cách', [hero.t]), br('Việc làm', hh(heroEvents(e, hero))), br('Chi tiết em nhớ', e.details.slice(0, 3)), br('Bài học', [noDot(e.lesson)])]
          : [br('Nội dung', hh(e.body).slice(0, 4)), br('Nhân vật', e.chars.slice(0, 4).map(function (c) { return c.n; })), br('Chi tiết hay', e.details.slice(0, 3)), br('Bài học', [noDot(e.lesson)])],
        ideas: [first].concat(reasons, e.feel.slice(0, 1)),
        sample: first + ' ' + (aboutHero ? 'Trước hết, ' + hero.n + ' ' + hero.t + '. ' : 'Trước hết, câu chuyện có nhiều tình tiết hấp dẫn. ' + e.body[0].s + ' ') +
          'Em ấn tượng nhất với chi tiết ' + lcfirst(noDot(e.details[0])) + '. Không chỉ vậy, câu chuyện còn nhắc em rằng ' + lcfirst(noDot(e.lesson)) + '. ' + e.feel[0]
      };
    },
    'cam-xuc-nhan-vat': function (e, o) {
      var hero = heroOf(e, o.topic + ' ' + o.request);
      var first = 'Trong ' + kindOf(e) + ' ' + q(e.name) + ', em yêu quý nhất là ' + hero.n + '.';
      var last = 'Qua nhân vật ' + hero.n + ', em hiểu rằng ' + lcfirst(noDot(e.lesson)) + '.';
      return {
        center: ucfirst(hero.n),
        parts: [
          { part: 'Câu mở đầu', points: ['Giới thiệu nhân vật: ' + hero.n + ' trong ' + kindOf(e) + ' ' + q(e.name) + '.', 'Nêu tình cảm chung của em: yêu quý, khâm phục, thương cảm…'], starter: first },
          { part: 'Các câu tiếp theo', points: (hero.t ? [ucfirst(hero.n) + ': ' + hero.t + '.'] : [])
            .concat(heroEvents(e, hero).slice(0, 3).map(function (b) { return 'Việc làm đáng nhớ: ' + b.s; }), ['Chi tiết làm em xúc động: ' + lcfirst(noDot(e.details[0])) + '.']), starter: 'Em nhớ nhất chi tiết ' + lcfirst(noDot(e.details[0])) + '…' },
          { part: 'Câu kết thúc', points: e.feel.slice(0, 2).concat(['Điều em học được: ' + e.lesson]), starter: 'Qua nhân vật ' + hero.n + ', em hiểu rằng …' }
        ],
        branches: [br('Là ai?', [ucfirst(kindOf(e)) + ' ' + q(e.name), hero.t]), br('Việc làm', hh(heroEvents(e, hero))), br('Chi tiết em nhớ', e.details.slice(0, 3)), br('Cảm xúc của em', e.feel.slice(0, 2).map(noDot)), br('Bài học', [noDot(e.lesson)])],
        ideas: [first].concat(hero.t ? [ucfirst(hero.n) + ': ' + hero.t + '.'] : [], e.details.map(function (d) { return 'Chi tiết: ' + noDot(d) + '.'; }), e.feel),
        sample: first + ' ' + heroEvents(e, hero).slice(0, 2).map(function (b) { return b.s; }).join(' ') + ' Em nhớ nhất chi tiết ' + lcfirst(noDot(e.details[0])) + '. ' + e.feel[0] + ' ' + last
      };
    },
    'tuong-tuong': function (e) {
      var first = 'Nếu được viết tiếp câu chuyện ' + q(e.name) + ', em sẽ tưởng tượng một kết thúc khác.';
      return {
        center: 'Tưởng tượng: ' + e.name,
        parts: [
          { part: 'Câu mở đầu', points: ['Nhắc lại câu chuyện gốc: ' + e.intro, 'Nói em sẽ tưởng tượng điều gì: kết thúc khác, gặp lại nhân vật…'], starter: first },
          { part: 'Các câu tiếp theo', points: ['Bắt đầu từ chỗ: ' + e.body[Math.min(2, e.body.length - 1)].s].concat(e.alt.map(function (a) { return 'Ý tưởng: ' + a; }), ['Thêm lời nói, việc làm, cảm xúc của nhân vật để đoạn văn sinh động.']), starter: firstClause(e.alt[0]) },
          { part: 'Câu kết thúc', points: ['Cảm xúc của em về kết thúc mới.', 'Điều em muốn gửi gắm: ' + e.lesson], starter: 'Em thích kết thúc này vì …' }
        ],
        branches: [br('Truyện gốc', hh(e.open).concat(hh(e.body)).slice(0, 4)), br('Nhân vật', e.chars.slice(0, 4).map(function (c) { return c.n; })), br('Kết thúc mới', e.alt.slice(0, 3)), br('Ý nghĩa', [noDot(e.lesson)])],
        ideas: e.alt.concat(['Nhân vật: ' + e.chars.map(function (c) { return c.n; }).join(', ') + '.', 'Ý nghĩa: ' + e.lesson]),
        sample: first + ' ' + e.alt[0] + ' Em thích kết thúc này vì nó giúp em hiểu rằng ' + lcfirst(e.lesson)
      };
    },
    'ta-con-vat': describe(false),
    'ta-cay': describe(true),
    'cam-xuc-nguoi': function (e) {
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Câu mở đầu', points: ways(e.intro).concat(['Nêu tình cảm chung của em với ' + e.name + '.']), starter: firstClause(e.intro[0]) },
          { part: 'Các câu tiếp theo', points: pi(e.look.slice(0, 2)).concat(pi(e.acts), e.bond.map(function (b) { return 'Kỉ niệm: ' + b; })), starter: firstClause(e.bond[0]) },
          { part: 'Câu kết thúc', points: e.end, starter: firstClause(e.end[0]) }
        ],
        branches: e.look.slice(0, 2).map(function (p) { return br(p.part, p.items.slice(0, 3)); })
          .concat(e.acts.slice(0, 2).map(function (p) { return br(p.part, p.items.slice(0, 3)); }), [br('Kỉ niệm', e.bond.slice(0, 3).map(noDot)), br('Tình cảm', e.end.map(noDot))]).slice(0, 6),
        ideas: e.intro.concat(pi(e.look), pi(e.acts), e.bond, e.end)
      };
    },
    'thuat-lai': function (e) {
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Mở bài', points: e.intro, starter: firstClause(e.intro[0]) },
          { part: 'Thân bài – Diễn biến theo thứ tự', points: hs(e.steps), starter: firstClause(e.steps[0].s) },
          { part: 'Thân bài – Chi tiết đáng nhớ', points: e.highlight, starter: firstClause(e.highlight[0]) },
          { part: 'Kết bài', points: e.feel.concat(e.end), starter: firstClause(e.feel[0]) }
        ],
        branches: [br('Thời gian, địa điểm', e.intro.slice(0, 2).map(noDot))]
          .concat(brSplit('Diễn biến', hh(e.steps)), [br('Đáng nhớ nhất', e.highlight.slice(0, 3).map(noDot)), br('Cảm xúc', e.feel.slice(0, 2).map(noDot))]),
        ideas: e.intro.concat(hs(e.steps), e.highlight, e.feel),
        sample: [e.intro.join(' '), hs(e.steps).join(' '), e.highlight.join(' '), e.feel.concat(e.end).join(' ')].join('\n')
      };
    },
    'huong-dan-cv': function (e) {
      var title = ('Cách ' + lcfirst(e.name)).toUpperCase();
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Tên bài hướng dẫn', points: [title], starter: title },
          { part: 'Lời mở đầu', points: e.intro, starter: firstClause(e.intro[0]) },
          { part: 'Chuẩn bị', points: e.materials, starter: 'Để làm được, các bạn cần chuẩn bị: …' },
          { part: 'Các bước thực hiện', points: steps(e.steps), starter: 'Bước 1: ' + firstClause(e.steps[0].s) },
          { part: 'Kết quả / lời chúc', points: e.notes.map(function (n) { return 'Lưu ý: ' + n; }).concat(e.end), starter: firstClause(e.end[0]) }
        ],
        branches: [br('Chuẩn bị', e.materials.slice(0, 4))].concat(brSplit('Các bước', numbered(e.steps)), [br('Lưu ý', e.notes.slice(0, 3).map(noDot)), br('Kết quả', e.end.map(noDot))]),
        ideas: e.intro.concat(['Chuẩn bị: ' + e.materials.join(', ') + '.'], steps(e.steps), e.notes),
        sample: [title, e.intro.join(' '), 'Chuẩn bị: ' + e.materials.join(', ') + '.'].concat(steps(e.steps), ['Lưu ý: ' + e.notes.join(' '), e.end.join(' ')]).join('\n')
      };
    },
    'huong-dan-sp': function (e) {
      var title = 'HƯỚNG DẪN SỬ DỤNG ' + e.name.toUpperCase();
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Tên sản phẩm', points: [title], starter: title },
          { part: 'Giới thiệu / công dụng', points: e.intro.concat(pi(e.parts)), starter: firstClause(e.intro[0]) },
          { part: 'Cách sử dụng', points: steps(e.steps), starter: 'Bước 1: ' + firstClause(e.steps[0].s) },
          { part: 'Lưu ý, bảo quản', points: e.notes.concat(e.end), starter: firstClause(e.notes[0]) }
        ],
        branches: [br('Công dụng', e.intro.slice(0, 2).map(noDot)), br('Bộ phận', e.parts.map(function (p) { return p.part; }).slice(0, 4))]
          .concat(brSplit('Cách dùng', numbered(e.steps)), [br('Lưu ý', e.notes.slice(0, 4).map(noDot))]),
        ideas: e.intro.concat(pi(e.parts), steps(e.steps), e.notes),
        sample: [title, e.intro.join(' ')].concat(pi(e.parts), steps(e.steps), ['Lưu ý: ' + e.notes.join(' '), e.end.join(' ')]).join('\n')
      };
    },
    'thu': function (e) {
      var head = e.place + ', ngày … tháng … năm …';
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Phần đầu', points: [head, 'Lời xưng hô: ' + e.greet], starter: head },
          { part: 'Phần chính – Hỏi thăm', points: e.ask, starter: firstClause(e.ask[0]) },
          { part: 'Phần chính – Kể về em', points: e.tell, starter: firstClause(e.tell[0]) },
          { part: 'Phần cuối', points: e.wish.concat(e.promise, ['Kí tên: ' + e.sign]), starter: firstClause(e.wish[0]) }
        ],
        branches: [br('Hỏi thăm', e.ask.slice(0, 3).map(noDot)), br('Kể về em', e.tell.slice(0, 4).map(noDot)), br('Lời chúc', e.wish.slice(0, 3).map(noDot)), br('Lời hứa', e.promise.map(noDot))],
        ideas: e.ask.concat(e.tell, e.wish, e.promise),
        sample: [head, e.greet, e.ask.join(' '), e.tell.join(' '), e.wish.concat(e.promise).join(' '), e.sign, '(Tên của em)'].join('\n')
      };
    },
    'don': function (e) {
      var nat = ['CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM', 'Độc lập – Tự do – Hạnh phúc'];
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Quốc hiệu, tiêu ngữ', points: nat, starter: nat[0] },
          { part: 'Tên đơn', points: [e.title], starter: e.title },
          { part: 'Nơi nhận đơn', points: [e.to], starter: e.to },
          { part: 'Nội dung đơn', points: e.self.concat(e.reason.map(function (r) { return 'Lí do: ' + r; }), e.promise.map(function (p) { return 'Lời hứa: ' + p; })), starter: firstClause(e.self[0]) },
          { part: 'Địa điểm, thời gian, chữ kí', points: ['…, ngày … tháng … năm …', 'Người viết đơn (kí và ghi rõ họ tên)'], starter: '…, ngày … tháng … năm …' }
        ],
        branches: [br('Trình bày', ['Quốc hiệu, tiêu ngữ', e.title, 'Kính gửi…']), br('Giới thiệu em', e.self.slice(0, 3).map(noDot)), br('Lí do', e.reason.slice(0, 3).map(noDot)), br('Lời hứa', e.promise.slice(0, 3).map(noDot))],
        ideas: e.self.concat(e.reason, e.promise),
        sample: nat.concat([e.title, e.to, e.self.join(' '), e.reason.join(' '), e.promise.join(' '), '…, ngày … tháng … năm …', 'Người viết đơn', '(Kí và ghi rõ họ tên)']).join('\n')
      };
    },
    'giay-moi': function (e) {
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Tiêu đề', points: [e.title], starter: e.title },
          { part: 'Người được mời', points: [e.to], starter: e.to },
          { part: 'Sự kiện, thời gian, địa điểm', points: e.content.concat(['Thời gian: ' + e.time, 'Địa điểm: ' + e.place], e.program.map(function (p) { return 'Chương trình: ' + p; })), starter: firstClause(e.content[0]) },
          { part: 'Mong muốn, đề nghị', points: e.note, starter: firstClause(e.note[0]) },
          { part: 'Người mời', points: [e.sign], starter: e.sign }
        ],
        branches: [br('Sự kiện', e.content.map(noDot)), br('Thời gian, địa điểm', [e.time, e.place]), br('Chương trình', e.program.slice(0, 4)), br('Lời mong', e.note.map(noDot))],
        ideas: e.content.concat(['Thời gian: ' + e.time, 'Địa điểm: ' + e.place], e.program, e.note),
        sample: [e.title, e.to, e.content.join(' '), 'Thời gian: ' + e.time, 'Địa điểm: ' + e.place, 'Chương trình: ' + e.program.join('; ') + '.', e.note.join(' '), e.sign].join('\n')
      };
    },
    'bao-cao': function (e) {
      var head = ['CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM', 'Độc lập – Tự do – Hạnh phúc', '…, ngày … tháng … năm …'];
      return {
        center: ucfirst(e.name),
        parts: [
          { part: 'Phần đầu', points: head, starter: head[0] },
          { part: 'Tiêu đề', points: [e.title, e.subject], starter: e.title },
          { part: 'Người nhận', points: [e.to], starter: e.to },
          { part: 'Nội dung báo cáo', points: hs(e.items).concat(e.good.map(function (x) { return 'Ưu điểm: ' + x; }), e.todo.map(function (x) { return 'Đề xuất: ' + x; })), starter: firstClause(e.items[0].s) },
          { part: 'Người viết báo cáo', points: [e.sign], starter: e.sign }
        ],
        branches: brSplit('Kết quả thảo luận', hh(e.items)).concat([br('Ưu điểm', e.good.slice(0, 3).map(noDot)), br('Đề xuất', e.todo.slice(0, 3).map(noDot))]),
        ideas: hs(e.items).concat(e.good, e.todo),
        sample: head.concat([e.title, e.subject, e.to], hs(e.items).map(function (s, i) { return (i + 1) + '. ' + s; }), ['Ưu điểm: ' + e.good.join(' '), 'Đề xuất: ' + e.todo.join(' '), e.sign]).join('\n')
      };
    }
  };

  /* Chưa có dữ liệu riêng cho đề này: dùng cấu trúc SGK */
  function fallback(g, o) {
    var starters = STARTERS[g.kind] || STARTERS.essay;
    return {
      center: shortTopic(o.topic),
      parts: g.structure.map(function (p, i) { return { part: p.part, points: [p.guide].concat(p.questions), starter: starters[Math.min(i, starters.length - 1)] }; }),
      branches: g.structure.map(function (p) { return br(p.part, p.questions.slice(0, 3).map(function (x) { return x.replace(/\?$/, ''); })); }),
      ideas: g.structure.reduce(function (acc, p) { return acc.concat(p.questions.slice(0, 2).map(function (x) { return p.part + ': ' + x; })); }, []),
      vocab: subjectWords(o.topic + ' ' + o.request).concat(g.vocab)
    };
  }

  function draft(o) {
    var g = VV.genreById(o.genreId);
    var want = function (id) { return o.hintTypes.indexOf(id) >= 0; };
    o.request = (o.request || '').trim();
    var e = match(g.id, o.topic, o.request);
    var c = e ? COMPOSE[g.id](e, o) : fallback(g, o);
    var parts = c.parts.map(function (p) { return { part: p.part, points: p.points.slice(), starter: p.starter }; });
    var ideas = c.ideas.slice();
    var branches = c.branches.filter(function (b) { return b.children.length; });
    if (o.request) {
      var mine = 'Ý riêng của em: ' + o.request;
      ideas.unshift(mine);
      parts[Math.min(1, parts.length - 1)].points.push(mine);
      if (branches.length < 6) branches.push(br('Ý của em', [o.request.length > 60 ? o.request.slice(0, 58) + '…' : o.request]));
    }
    var name = o.studentName || 'em', intro;
    if (e) intro = 'Chào ' + name + '! Vườn Văn đã chuẩn bị gợi ý riêng cho bài về ' + q(e.name) + '. Em đọc kĩ rồi tự viết bằng lời của mình nhé!';
    else {
      var types = TYPES[g.id] || [];
      var list = (VV.KB || []).filter(function (x) { return types.indexOf(x.type) >= 0; }).map(function (x) { return x.type === 'story' ? q(x.name) : x.name; });
      intro = 'Chào ' + name + '! Đây là gợi ý theo cấu trúc bài trong SGK.' + (list.length
        ? ' Muốn có dàn ý, sơ đồ tư duy và từ ngữ riêng cho bài của mình, em chọn đề cụ thể ở bước 2 hoặc ghi vào ô "Yêu cầu riêng" một đề tài như: ' + list.slice(0, 10).join(', ') + (list.length > 10 ? '…' : '') + '.'
        : ' Em ghi thêm ý của mình vào ô "Yêu cầu riêng" để gợi ý sát hơn nhé.');
    }
    var sample = !want('sample') ? null : c.sample ? { topic: o.topic, text: c.sample } : VV.SAMPLES[g.id];
    return {
      title: g.name + ': ' + shortTopic(o.topic),
      subject: e ? e.name : '',
      intro: intro,
      vocabulary: want('vocab') ? (e ? e.vocab : c.vocab) : [],
      ideas: want('ideas') ? ideas : [],
      paragraphs: want('paragraph') ? parts.map(function (p) { return { part: p.part, hints: p.points.slice(0, 3), starter: p.starter }; }) : [],
      mindmap: want('mindmap') ? { center: c.center, branches: branches } : { center: '', branches: [] },
      outline: want('outline') ? parts.map(function (p) { return { part: p.part, points: p.points }; }) : [],
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

  return { draft: draft, grade: grade, match: match, topicsFor: topicsFor };
})();

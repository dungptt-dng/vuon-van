/* VƯỜN VĂN – Dữ liệu dạng văn lấy theo SGK Tiếng Việt 4 (Kết nối tri thức với cuộc sống).
   Mỗi dạng văn gồm: tham chiếu SGK, cấu trúc bài, đề gợi ý, vốn từ, lưu ý.
   Dữ liệu này cũng là "bộ não" để app tạo gợi ý khi KHÔNG có mạng. */
window.VV = window.VV || {};

VV.THEMES = [
  { id: 'moi-nguoi-mot-ve', name: 'Mỗi người một vẻ', book: 'Tập một', icon: '🌈' },
  { id: 'trai-nghiem', name: 'Trải nghiệm và khám phá', book: 'Tập một', icon: '🔭' },
  { id: 'niem-vui-sang-tao', name: 'Niềm vui sáng tạo', book: 'Tập một', icon: '🎨' },
  { id: 'chap-canh-uoc-mo', name: 'Chắp cánh ước mơ', book: 'Tập một', icon: '🕊️' },
  { id: 'song-de-yeu-thuong', name: 'Sống để yêu thương', book: 'Tập hai', icon: '💗' },
  { id: 'uong-nuoc-nho-nguon', name: 'Uống nước nhớ nguồn', book: 'Tập hai', icon: '🏯' },
  { id: 'que-huong', name: 'Quê hương trong tôi', book: 'Tập hai', icon: '🌾' },
  { id: 'the-gioi-binh-yen', name: 'Vì một thế giới bình yên', book: 'Tập hai', icon: '🌏' },
  { id: 'tu-do', name: 'Chủ đề tự chọn', book: '', icon: '✨' }
];

VV.HINT_TYPES = [
  { id: 'vocab', name: 'Cung cấp vốn từ', icon: '📚', desc: 'Từ ngữ hay, câu mở đầu hay để em dùng' },
  { id: 'ideas', name: 'Cung cấp ý', icon: '💡', desc: 'Những ý chính em có thể viết' },
  { id: 'paragraph', name: 'Gợi ý viết từng đoạn', icon: '🧩', desc: '2 – 3 gợi ý cho mỗi đoạn' },
  { id: 'mindmap', name: 'Sơ đồ tư duy', icon: '🗺️', desc: 'Nhìn ý tưởng như một cái cây' },
  { id: 'outline', name: 'Dàn ý', icon: '📝', desc: 'Mở bài – Thân bài – Kết bài' },
  { id: 'sample', name: 'Bài tham khảo', icon: '📖', desc: 'Một bài mẫu ngắn để tham khảo (không chép!)' }
];

/* Thang điểm 10 dùng chung cho AI chấm và chấm tạm khi ngoại tuyến */
VV.RUBRIC = [
  { id: 'structure', name: 'Bố cục', max: 2, desc: 'Đủ phần, đúng thể loại, các đoạn rõ ràng' },
  { id: 'content', name: 'Nội dung', max: 3, desc: 'Đúng đề, ý phong phú, có chi tiết cụ thể' },
  { id: 'language', name: 'Dùng từ, đặt câu', max: 2, desc: 'Từ ngữ sinh động, câu đúng, có biện pháp nghệ thuật' },
  { id: 'spelling', name: 'Chính tả, trình bày', max: 1.5, desc: 'Viết đúng chính tả, dấu câu, viết hoa' },
  { id: 'creativity', name: 'Sáng tạo, cảm xúc', max: 1.5, desc: 'Có nét riêng, thể hiện tình cảm của em' }
];

VV.GENRES = [
  {
    id: 'y-kien', name: 'Đoạn văn nêu ý kiến', icon: '💬', kind: 'paragraph', color: '#4f9cf9',
    sgk: 'Tập một: Bài 2 – 5 (tr.14 – 25) · Tập hai: Bài 12 – 13 (tr.53, 58)',
    desc: 'Nêu lí do em thích (hoặc không thích) một câu chuyện, bài thơ, nhân vật, việc làm…',
    minWords: 60, maxWords: 160,
    structure: [
      { part: 'Câu mở đầu', guide: 'Nêu ý kiến của em (em thích điều gì).', questions: ['Em muốn nói về câu chuyện/bài thơ/nhân vật nào?', 'Em thích hay không thích điều đó?'] },
      { part: 'Các câu tiếp theo', guide: 'Đưa ra lí do và dẫn chứng.', questions: ['Lí do thứ nhất là gì?', 'Chi tiết nào trong bài chứng tỏ điều đó?', 'Còn lí do nào khác nữa?'] },
      { part: 'Câu kết thúc', guide: 'Khẳng định lại ý kiến hoặc nêu cảm xúc.', questions: ['Câu chuyện/nhân vật đã để lại cho em điều gì?'] }
    ],
    topics: [
      'Nêu lí do em thích một câu chuyện em đã đọc hoặc đã nghe',
      'Nêu lí do em yêu thích một nhân vật trong câu chuyện',
      'Nêu lí do em thích một bài thơ đã học',
      'Nêu ý kiến của em về câu chuyện "Bốn anh tài"',
      'Nêu ý kiến của em về việc đọc sách mỗi ngày',
      'Nêu ý kiến của em về một tấm gương "Uống nước nhớ nguồn"'
    ],
    vocab: [
      { group: 'Câu nêu ý kiến', words: ['Em rất thích…', 'Điều làm em ấn tượng nhất là…', 'Theo em,…', 'Em cho rằng…'] },
      { group: 'Từ nối lí do', words: ['Trước hết', 'Lí do đầu tiên là', 'Bên cạnh đó', 'Không chỉ vậy', 'Hơn nữa', 'Đặc biệt', 'Vì thế', 'Tóm lại'] },
      { group: 'Từ chỉ cảm xúc, đánh giá', words: ['thú vị', 'hấp dẫn', 'xúc động', 'ý nghĩa', 'sâu sắc', 'đáng nhớ', 'bất ngờ', 'cảm phục', 'trân trọng', 'ngưỡng mộ'] }
    ],
    tips: ['Mỗi lí do nên có một dẫn chứng (chi tiết trong bài).', 'Đoạn văn viết liền, chữ đầu đoạn lùi vào một ô.']
  },
  {
    id: 'bao-cao', name: 'Báo cáo thảo luận nhóm', icon: '📋', kind: 'form', color: '#0fb5a6',
    sgk: 'Tập một: Bài 6 – 8 (tr.28, 33, 36)',
    desc: 'Báo cáo kết quả nhóm em đã thảo luận về một việc.',
    minWords: 60, maxWords: 220,
    structure: [
      { part: 'Phần đầu', guide: 'Quốc hiệu, tiêu ngữ; địa điểm và thời gian viết báo cáo.', questions: ['Em viết báo cáo ở đâu, ngày nào?'] },
      { part: 'Tiêu đề', guide: 'BÁO CÁO KẾT QUẢ THẢO LUẬN NHÓM về “…”', questions: ['Nhóm em thảo luận về việc gì?'] },
      { part: 'Người nhận', guide: 'Kính gửi: thầy/cô giáo chủ nhiệm…', questions: ['Báo cáo gửi cho ai?'] },
      { part: 'Nội dung báo cáo', guide: 'Thời gian thảo luận, các kết quả (đánh số 1, 2, 3…).', questions: ['Nhóm đã thảo luận khi nào?', 'Nhóm thống nhất được những việc gì? Ai làm việc gì?'] },
      { part: 'Người viết báo cáo', guide: 'Nhóm trưởng (kí tên), họ và tên.', questions: ['Ai là người viết báo cáo?'] }
    ],
    topics: [
      'Báo cáo kết quả thảo luận nhóm về hoạt động chào mừng ngày Nhà giáo Việt Nam 20 – 11',
      'Báo cáo kết quả thảo luận nhóm về việc xây dựng góc đọc sách của lớp',
      'Báo cáo kết quả thảo luận nhóm về kế hoạch trồng cây xanh ở sân trường',
      'Báo cáo kết quả thảo luận nhóm về cách giữ gìn vệ sinh lớp học'
    ],
    vocab: [
      { group: 'Mẫu câu', words: ['CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM', 'Độc lập – Tự do – Hạnh phúc', 'Kính gửi:', 'Nhóm xin báo cáo kết quả thảo luận như sau:', 'Nhóm trưởng (kí tên)'] },
      { group: 'Từ ngữ hoạt động', words: ['thảo luận', 'thống nhất', 'phân công', 'đề xuất', 'chuẩn bị', 'tham gia', 'phụ trách'] }
    ],
    tips: ['Trình bày đúng các phần như mẫu SGK trang 28.', 'Kết quả nên đánh số thứ tự cho rõ ràng.']
  },
  {
    id: 'thuat-lai', name: 'Bài văn thuật lại một sự việc', icon: '📅', kind: 'essay', color: '#f59e0b',
    sgk: 'Tập một: Bài 9 – 11 (tr.42 – 50) · Tập hai: Bài 14 – 16 (tr.61 – 68)',
    desc: 'Kể lại một sự việc em đã tham gia hoặc chứng kiến theo trình tự.',
    minWords: 150, maxWords: 350,
    structure: [
      { part: 'Mở bài', guide: 'Giới thiệu sự việc (sự việc gì, ở đâu, khi nào).', questions: ['Đó là sự việc gì?', 'Diễn ra ở đâu, khi nào?', 'Em tham gia hay chứng kiến?'] },
      { part: 'Thân bài', guide: 'Thuật lại diễn biến theo trình tự: trước – trong – sau.', questions: ['Trước khi diễn ra, mọi người chuẩn bị gì?', 'Diễn biến chính như thế nào? Có chi tiết nào đáng nhớ?', 'Sự việc kết thúc ra sao?'] },
      { part: 'Kết bài', guide: 'Nêu cảm nghĩ của em về sự việc.', questions: ['Em cảm thấy thế nào?', 'Sự việc giúp em hiểu thêm điều gì?'] }
    ],
    topics: [
      'Thuật lại một buổi sinh hoạt lớp đáng nhớ',
      'Thuật lại một hoạt động trải nghiệm em đã tham gia',
      'Thuật lại buổi lễ chào cờ đầu tuần ở trường em',
      'Thuật lại một việc làm tốt em đã tham gia (trồng cây, giúp bạn…)',
      'Thuật lại một lễ hội hoặc ngày hội ở quê em',
      'Thuật lại một buổi tham quan di tích lịch sử'
    ],
    vocab: [
      { group: 'Từ chỉ trình tự', words: ['Đầu tiên', 'Trước giờ…', 'Tiếp theo', 'Sau đó', 'Lúc ấy', 'Bỗng nhiên', 'Cuối cùng', 'Khi buổi … kết thúc'] },
      { group: 'Từ tả không khí', words: ['náo nức', 'rộn ràng', 'tưng bừng', 'sôi nổi', 'trang nghiêm', 'háo hức', 'vang lên', 'rộn rã'] },
      { group: 'Từ chỉ cảm xúc', words: ['vui sướng', 'tự hào', 'bồi hồi', 'xúc động', 'hào hứng', 'nhớ mãi'] }
    ],
    tips: ['Thuật lại theo đúng thứ tự thời gian.', 'Chọn 1 – 2 chi tiết thú vị để kể kĩ hơn.']
  },
  {
    id: 'ke-chuyen', name: 'Bài văn kể lại một câu chuyện', icon: '📚', kind: 'essay', color: '#8b5cf6',
    sgk: 'Tập một: Bài 12 – 16 (tr.52 – 68) · Tập hai: Bài 9 – 11 (tr.43 – 50)',
    desc: 'Kể lại một câu chuyện đã đọc, đã nghe bằng lời văn của em.',
    minWords: 150, maxWords: 380,
    structure: [
      { part: 'Mở bài', guide: 'Giới thiệu câu chuyện (tên truyện, em đọc/nghe ở đâu) hoặc nhân vật chính.', questions: ['Câu chuyện tên là gì?', 'Em đã đọc hoặc nghe ở đâu?'] },
      { part: 'Thân bài', guide: 'Kể diễn biến câu chuyện: mở đầu – diễn biến – kết thúc, dùng từ ngữ chuyển ý.', questions: ['Câu chuyện bắt đầu thế nào?', 'Những sự việc chính xảy ra theo thứ tự nào?', 'Câu chuyện kết thúc ra sao?'] },
      { part: 'Kết bài', guide: 'Nêu suy nghĩ, cảm xúc hoặc bài học từ câu chuyện.', questions: ['Em thích nhân vật nào? Vì sao?', 'Câu chuyện nhắc nhở em điều gì?'] }
    ],
    topics: [
      'Kể lại một câu chuyện cổ tích em yêu thích',
      'Kể lại câu chuyện "Sự tích con Rồng cháu Tiên"',
      'Kể lại một câu chuyện về lòng tốt mà em đã đọc hoặc đã nghe',
      'Kể lại một câu chuyện về một tấm gương hiếu học',
      'Kể lại câu chuyện "Cô bé Lọ Lem" bằng lời của em'
    ],
    vocab: [
      { group: 'Từ ngữ chuyển ý', words: ['Chuyện kể rằng', 'Ngày xửa ngày xưa', 'Không lâu sau', 'Một ngày nọ', 'Từ đó', 'Thế rồi', 'Đúng lúc ấy', 'Từ đó về sau'] },
      { group: 'Từ tả nhân vật', words: ['hiền lành', 'tốt bụng', 'chăm chỉ', 'dũng cảm', 'thông minh', 'độc ác', 'tham lam', 'hiếu thảo'] },
      { group: 'Câu kết hay', words: ['Câu chuyện giúp em hiểu rằng…', 'Em sẽ luôn ghi nhớ…', 'Ở hiền thì gặp lành'] }
    ],
    tips: ['Kể bằng lời văn của em, không chép nguyên văn.', 'Dùng từ ngữ chuyển ý để nối các sự việc.']
  },
  {
    id: 'tuong-tuong', name: 'Đoạn văn tưởng tượng', icon: '🦄', kind: 'paragraph', color: '#ec4899',
    sgk: 'Tập một: Bài 17 – 20 (tr.79 – 91) · Tập hai: Bài 25 – 27 (tr.116 – 122)',
    desc: 'Viết đoạn văn dựa vào câu chuyện đã đọc nhưng thay đổi, thêm thắt theo trí tưởng tượng.',
    minWords: 80, maxWords: 200,
    structure: [
      { part: 'Câu mở đầu', guide: 'Giới thiệu câu chuyện/nhân vật và điều em tưởng tượng.', questions: ['Em dựa vào câu chuyện nào?', 'Em muốn thay đổi hay viết tiếp phần nào?'] },
      { part: 'Các câu tiếp theo', guide: 'Kể các sự việc tưởng tượng, dùng biện pháp nhân hoá.', questions: ['Điều gì kì diệu đã xảy ra?', 'Nhân vật nói gì, làm gì?', 'Cây cối, con vật có thể nói, cười như người không?'] },
      { part: 'Câu kết thúc', guide: 'Kết thúc câu chuyện tưởng tượng hoặc nêu cảm xúc.', questions: ['Câu chuyện em tưởng tượng kết thúc thế nào?'] }
    ],
    topics: [
      'Viết đoạn văn tưởng tượng dựa vào một câu chuyện thú vị em đã đọc hoặc đã nghe',
      'Tưởng tượng một cái kết khác cho câu chuyện em yêu thích',
      'Tưởng tượng em gặp lại một nhân vật trong truyện cổ tích',
      'Tưởng tượng em là một con vật sống trong khu bảo tồn thiên nhiên',
      'Tưởng tượng thế giới sau 20 năm nữa khi Trái Đất được bảo vệ tốt'
    ],
    vocab: [
      { group: 'Mở đầu tưởng tượng', words: ['Nếu một ngày…', 'Em tưởng tượng rằng…', 'Bỗng nhiên, một điều kì lạ xảy ra…', 'Trong giấc mơ, em thấy…'] },
      { group: 'Từ ngữ nhân hoá', words: ['mỉm cười', 'thì thầm', 'vẫy tay', 'trò chuyện', 'nhảy múa', 'tinh nghịch', 'lim dim', 'ngái ngủ', 'hớn hở'] },
      { group: 'Từ kì diệu', words: ['lấp lánh', 'huyền diệu', 'kì lạ', 'phép màu', 'rực rỡ', 'bay bổng'] }
    ],
    tips: ['Tưởng tượng phải dựa trên câu chuyện gốc, hợp lí.', 'Hãy dùng biện pháp nhân hoá cho sinh động.']
  },
  {
    id: 'huong-dan-cv', name: 'Hướng dẫn thực hiện một công việc', icon: '🛠️', kind: 'guide', color: '#14b8a6',
    sgk: 'Tập một: Bài 21 – 22 (tr.95, 99)',
    desc: 'Hướng dẫn các bạn cách làm một việc (làm đồ chơi, gấp giấy, nấu món ăn đơn giản…).',
    minWords: 80, maxWords: 250,
    structure: [
      { part: 'Tên bài hướng dẫn', guide: 'Cách làm…', questions: ['Em hướng dẫn làm việc gì?'] },
      { part: 'Lời mở đầu', guide: 'Một câu giới thiệu vui, gần gũi.', questions: ['Vì sao việc này thú vị/có ích?'] },
      { part: 'Chuẩn bị', guide: 'Nguyên liệu, dụng cụ cần có.', questions: ['Cần những gì? Bao nhiêu?'] },
      { part: 'Các bước thực hiện', guide: 'Bước 1, Bước 2, Bước 3… mỗi bước một việc.', questions: ['Làm gì trước? Làm gì sau?', 'Cần chú ý gì ở mỗi bước?'] },
      { part: 'Kết quả / lời chúc', guide: 'Sản phẩm hoàn thành ra sao, lời chúc các bạn.', questions: ['Sản phẩm trông thế nào?'] }
    ],
    topics: [
      'Hướng dẫn cách làm một chú nghé ọ bằng lá',
      'Hướng dẫn cách gấp một chiếc thuyền giấy',
      'Hướng dẫn cách làm một tấm thiệp chúc mừng',
      'Hướng dẫn cách trồng một cây non',
      'Hướng dẫn cách pha một cốc nước chanh'
    ],
    vocab: [
      { group: 'Từ chỉ bước', words: ['Đầu tiên', 'Bước 1', 'Tiếp theo', 'Sau đó', 'Cuối cùng', 'Thế là xong!'] },
      { group: 'Động từ hướng dẫn', words: ['gấp', 'cắt', 'dán', 'buộc', 'xếp', 'vẽ', 'tô màu', 'đặt', 'ấn nhẹ'] },
      { group: 'Lời khuyên', words: ['Các bạn nhớ…', 'Cẩn thận khi…', 'Chúc các bạn thành công!'] }
    ],
    tips: ['Viết câu ngắn, rõ ràng, mỗi bước một việc.', 'Có thể vẽ hình minh hoạ cho từng bước.']
  },
  {
    id: 'don', name: 'Viết đơn', icon: '📄', kind: 'form', color: '#64748b',
    sgk: 'Tập một: Bài 23 – 24 (tr.104, 107)',
    desc: 'Viết đơn để đề nghị, xin phép một việc (xin tham gia câu lạc bộ, xin nghỉ học…).',
    minWords: 60, maxWords: 200,
    structure: [
      { part: 'Quốc hiệu, tiêu ngữ', guide: 'CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM – Độc lập – Tự do – Hạnh phúc', questions: [] },
      { part: 'Tên đơn', guide: 'ĐƠN XIN…', questions: ['Em xin điều gì?'] },
      { part: 'Nơi nhận đơn', guide: 'Kính gửi: …', questions: ['Đơn gửi cho ai?'] },
      { part: 'Nội dung đơn', guide: 'Giới thiệu bản thân, lí do viết đơn, lời hứa, lời cảm ơn.', questions: ['Em tên gì, học lớp nào?', 'Vì sao em viết đơn?', 'Em hứa điều gì?'] },
      { part: 'Địa điểm, thời gian, chữ kí', guide: '…, ngày … tháng … năm …; Người viết đơn (kí, ghi họ tên).', questions: [] }
    ],
    topics: [
      'Viết đơn xin tham gia câu lạc bộ sáng tạo của trường',
      'Viết đơn xin tham gia câu lạc bộ thể thao',
      'Viết đơn xin nghỉ học',
      'Viết đơn xin tham gia đội văn nghệ của trường'
    ],
    vocab: [
      { group: 'Mẫu câu', words: ['Em tên là…, học sinh lớp…', 'Em viết đơn này xin…', 'Em xin hứa…', 'Em xin chân thành cảm ơn!', 'Người viết đơn'] }
    ],
    tips: ['Trình bày đơn đúng quy định (SGK trang 104).', 'Lời lẽ lễ phép, ngắn gọn, rõ ràng.']
  },
  {
    id: 'ta-con-vat', name: 'Bài văn miêu tả con vật', icon: '🐶', kind: 'essay', color: '#22c55e',
    sgk: 'Tập một: Bài 25 – 30 (tr.112 – 130)',
    desc: 'Tả một con vật em nuôi hoặc từng nhìn thấy: hình dáng, hoạt động, tình cảm.',
    minWords: 150, maxWords: 350,
    structure: [
      { part: 'Mở bài', guide: 'Giới thiệu con vật (trực tiếp hoặc gián tiếp).', questions: ['Đó là con vật gì? Tên nó là gì?', 'Ai nuôi? Em gặp nó ở đâu?'] },
      { part: 'Thân bài – Đoạn 1', guide: 'Tả hình dáng: bao quát rồi đến từng bộ phận (đầu, mắt, tai, lông, chân, đuôi…).', questions: ['Nó to hay nhỏ? Bộ lông màu gì?', 'Đôi mắt, cái tai, cái mũi trông như thế nào?', 'Có thể so sánh với vật gì?'] },
      { part: 'Thân bài – Đoạn 2', guide: 'Tả hoạt động, thói quen.', questions: ['Nó ăn, ngủ, chơi đùa thế nào?', 'Khi em đi học về, nó làm gì?', 'Có hoạt động nào đáng yêu, buồn cười?'] },
      { part: 'Kết bài', guide: 'Nêu tình cảm, suy nghĩ của em về con vật (mở rộng hoặc không mở rộng).', questions: ['Em yêu quý nó thế nào?', 'Em sẽ chăm sóc nó ra sao?'] }
    ],
    topics: [
      'Viết bài văn miêu tả một con vật mà em từng nuôi hoặc từng nhìn thấy và có ấn tượng đặc biệt',
      'Tả con mèo nhà em',
      'Tả chú chó nhỏ em yêu quý',
      'Tả một con vật em nhìn thấy ở vườn thú',
      'Tả con gà trống nhà em'
    ],
    vocab: [
      { group: 'Tả hình dáng', words: ['tròn trịa', 'bụ bẫm', 'mũm mĩm', 'thon thả', 'mượt như nhung', 'óng ánh', 'tròn xoe', 'long lanh', 'hồng hồng', 'nhọn hoắt'] },
      { group: 'Tả hoạt động', words: ['nhanh nhẹn', 'tinh nghịch', 'lon ton', 'vẫy đuôi rối rít', 'rón rén', 'nhảy phóc', 'cuộn tròn', 'gáy vang', 'ngoe nguẩy'] },
      { group: 'Hình ảnh so sánh', words: ['mắt tròn như hai hòn bi ve', 'lông mượt như tấm thảm nhung', 'cái mai như chiếc áo giáp', 'đuôi như chiếc chổi lông gà'] },
      { group: 'Tình cảm', words: ['quấn quýt', 'thân thiết', 'yêu quý', 'người bạn nhỏ', 'chăm sóc'] }
    ],
    tips: ['Quan sát kĩ bằng nhiều giác quan (nhìn, nghe, sờ).', 'Dùng hình ảnh so sánh, nhân hoá cho bài văn sinh động.']
  },
  {
    id: 'thu', name: 'Viết thư', icon: '✉️', kind: 'letter', color: '#f97316',
    sgk: 'Tập một: Bài 31 – 32 (tr.134, 136) · Tập hai: Bài 28 – 29 (tr.125, 130)',
    desc: 'Viết thư thăm hỏi, chia sẻ tin tức với bạn bè, người thân.',
    minWords: 100, maxWords: 300,
    structure: [
      { part: 'Phần đầu', guide: 'Địa điểm và thời gian viết thư; lời thưa gửi, lời chào đầu thư.', questions: ['Em viết thư ở đâu, ngày nào?', 'Em gửi thư cho ai? Xưng hô thế nào?'] },
      { part: 'Phần chính', guide: 'Thăm hỏi tình hình người nhận thư; chia sẻ tin tức của người viết thư.', questions: ['Em muốn hỏi thăm điều gì (sức khoẻ, học tập…)?', 'Em muốn kể tin gì về mình, gia đình, trường lớp?', 'Ước mơ, dự định của em?'] },
      { part: 'Phần cuối', guide: 'Lời cảm ơn, lời chúc, hứa hẹn; chữ kí và tên.', questions: ['Em chúc người nhận điều gì?', 'Em hứa hoặc mong điều gì?'] }
    ],
    topics: [
      'Viết thư cho một người bạn ở xa để thăm hỏi và kể về trường lớp của em',
      'Viết thư cho ông bà để thăm hỏi sức khoẻ',
      'Viết thư kể cho bạn nghe về ước mơ của em',
      'Viết thư cho một bạn nhỏ ở nước ngoài giới thiệu về quê hương em'
    ],
    vocab: [
      { group: 'Lời chào đầu thư', words: ['… thân mến!', 'Ông bà kính yêu!', 'Bạn … thân yêu!'] },
      { group: 'Lời thăm hỏi', words: ['Dạo này … có khoẻ không?', 'Việc học của cậu thế nào?', 'Gia đình cậu vẫn bình an chứ?'] },
      { group: 'Lời cuối thư', words: ['Chúc … mạnh khoẻ, học giỏi.', 'Mong sớm nhận được thư…', 'Bạn của cậu', 'Cháu của ông bà'] }
    ],
    tips: ['Xưng hô phù hợp với người nhận.', 'Thư có đủ ba phần: đầu thư, phần chính, cuối thư.']
  },
  {
    id: 'cam-xuc-nguoi', name: 'Đoạn văn nêu tình cảm, cảm xúc về một người gần gũi', icon: '💞', kind: 'paragraph', color: '#e11d48',
    sgk: 'Tập hai: Bài 1 – 3 (tr.10 – 19)',
    desc: 'Bày tỏ tình cảm, cảm xúc với một người thân thiết (ông bà, bố mẹ, thầy cô, bạn bè).',
    minWords: 70, maxWords: 180,
    structure: [
      { part: 'Câu mở đầu', guide: 'Giới thiệu người em yêu quý.', questions: ['Người đó là ai? Có quan hệ thế nào với em?'] },
      { part: 'Các câu tiếp theo', guide: 'Nêu những việc làm, kỉ niệm khiến em có tình cảm, cảm xúc.', questions: ['Người đó thường làm gì cho em?', 'Kỉ niệm nào em nhớ nhất?', 'Khi ấy em cảm thấy thế nào?'] },
      { part: 'Câu kết thúc', guide: 'Khẳng định tình cảm, mong ước của em.', questions: ['Em muốn nói gì với người đó?'] }
    ],
    topics: [
      'Viết đoạn văn nêu tình cảm, cảm xúc của em về một người gần gũi, thân thiết',
      'Viết đoạn văn nêu tình cảm của em đối với mẹ (hoặc bố)',
      'Viết đoạn văn nêu cảm xúc của em về ông hoặc bà',
      'Viết đoạn văn nêu tình cảm của em với thầy cô giáo',
      'Viết đoạn văn nêu tình cảm của em với người bạn thân'
    ],
    vocab: [
      { group: 'Từ chỉ tình cảm', words: ['yêu thương', 'kính trọng', 'biết ơn', 'quý mến', 'gắn bó', 'thân thiết', 'nhớ thương', 'tự hào'] },
      { group: 'Từ chỉ cảm xúc', words: ['ấm áp', 'hạnh phúc', 'xúc động', 'rưng rưng', 'bồi hồi', 'vui sướng', 'an tâm'] },
      { group: 'Mẫu câu', words: ['Mỗi khi…, em lại thấy…', 'Em nhớ mãi lần…', 'Em mong…', 'Em yêu … nhiều lắm!'] }
    ],
    tips: ['Nêu việc làm, kỉ niệm cụ thể thì cảm xúc mới chân thật.', 'Dùng các từ ngữ thể hiện tình cảm, cảm xúc.']
  },
  {
    id: 'cam-xuc-nhan-vat', name: 'Đoạn văn nêu tình cảm, cảm xúc về một nhân vật trong văn học', icon: '🦸', kind: 'paragraph', color: '#a855f7',
    sgk: 'Tập hai: Bài 4 – 6 (tr.22 – 29)',
    desc: 'Bày tỏ tình cảm, cảm xúc của em về một nhân vật trong câu chuyện, bài thơ đã học.',
    minWords: 70, maxWords: 180,
    structure: [
      { part: 'Câu mở đầu', guide: 'Giới thiệu nhân vật và câu chuyện.', questions: ['Nhân vật nào? Trong câu chuyện nào?'] },
      { part: 'Các câu tiếp theo', guide: 'Nêu đặc điểm, việc làm đáng nhớ của nhân vật và cảm xúc của em.', questions: ['Nhân vật có đặc điểm gì nổi bật?', 'Việc làm nào khiến em yêu quý/khâm phục?', 'Em cảm thấy thế nào khi đọc đến đoạn đó?'] },
      { part: 'Câu kết thúc', guide: 'Khẳng định tình cảm và điều em học được từ nhân vật.', questions: ['Em học được gì từ nhân vật?'] }
    ],
    topics: [
      'Viết đoạn văn nêu tình cảm, cảm xúc của em về một nhân vật trong văn học',
      'Nêu cảm xúc của em về Hải Thượng Lãn Ông',
      'Nêu cảm xúc của em về nhân vật Thánh Gióng',
      'Nêu cảm xúc của em về một nhân vật trong truyện cổ tích'
    ],
    vocab: [
      { group: 'Từ đánh giá nhân vật', words: ['dũng cảm', 'nhân hậu', 'tài giỏi', 'hiếu thảo', 'kiên trì', 'thật thà', 'giàu lòng thương người'] },
      { group: 'Từ chỉ cảm xúc', words: ['khâm phục', 'ngưỡng mộ', 'yêu mến', 'cảm động', 'thương cảm', 'tự hào'] },
      { group: 'Mẫu câu', words: ['Em rất ấn tượng với…', 'Chi tiết khiến em xúc động nhất là…', 'Em muốn học tập ở … đức tính…'] }
    ],
    tips: ['Gắn cảm xúc với chi tiết cụ thể trong câu chuyện.']
  },
  {
    id: 'huong-dan-sp', name: 'Hướng dẫn sử dụng một sản phẩm', icon: '🧴', kind: 'guide', color: '#0ea5e9',
    sgk: 'Tập hai: Bài 7 – 8 (tr.33, 37)',
    desc: 'Viết hướng dẫn sử dụng một đồ dùng quen thuộc (bút máy, quạt điện, bình nước…).',
    minWords: 80, maxWords: 250,
    structure: [
      { part: 'Tên sản phẩm', guide: 'Hướng dẫn sử dụng…', questions: ['Sản phẩm em hướng dẫn là gì?'] },
      { part: 'Giới thiệu / công dụng', guide: 'Sản phẩm dùng để làm gì, gồm những bộ phận nào.', questions: ['Sản phẩm có tác dụng gì?', 'Có những bộ phận chính nào?'] },
      { part: 'Cách sử dụng', guide: 'Các bước sử dụng theo thứ tự.', questions: ['Bước đầu tiên làm gì?', 'Tiếp theo làm gì?'] },
      { part: 'Lưu ý, bảo quản', guide: 'Những điều cần tránh, cách giữ gìn.', questions: ['Cần chú ý điều gì để an toàn?', 'Bảo quản thế nào cho bền?'] }
    ],
    topics: [
      'Viết hướng dẫn sử dụng chiếc bút máy',
      'Viết hướng dẫn sử dụng chiếc quạt điện',
      'Viết hướng dẫn sử dụng bình giữ nhiệt',
      'Viết hướng dẫn sử dụng một đồ chơi em thích'
    ],
    vocab: [
      { group: 'Từ ngữ hướng dẫn', words: ['Bước 1', 'nhấn', 'vặn', 'mở nắp', 'lắp', 'cắm điện', 'tắt', 'lau khô', 'cất giữ'] },
      { group: 'Lưu ý', words: ['Không nên…', 'Tránh để…', 'Cần…', 'Nên đặt ở nơi khô ráo'] }
    ],
    tips: ['Các bước phải theo đúng thứ tự.', 'Không quên phần lưu ý an toàn.']
  },
  {
    id: 'ta-cay', name: 'Bài văn miêu tả cây cối', icon: '🌳', kind: 'essay', color: '#16a34a',
    sgk: 'Tập hai: Bài 17 – 24 (tr.83 – 110)',
    desc: 'Tả một cây em yêu thích: cây bóng mát, cây hoa, cây ăn quả.',
    minWords: 150, maxWords: 350,
    structure: [
      { part: 'Mở bài', guide: 'Giới thiệu cây (cây gì, trồng ở đâu, ai trồng).', questions: ['Đó là cây gì?', 'Cây trồng ở đâu? Có từ bao giờ?'] },
      { part: 'Thân bài – Đoạn 1', guide: 'Tả bao quát rồi tả từng bộ phận (gốc, thân, cành, lá, hoa, quả).', questions: ['Nhìn từ xa, cây trông như thế nào?', 'Thân, cành, lá ra sao?', 'Hoa, quả có màu sắc, hương vị gì?'] },
      { part: 'Thân bài – Đoạn 2', guide: 'Tả cây theo thời gian (các mùa) hoặc ích lợi, hoạt động quanh cây.', questions: ['Cây thay đổi thế nào theo mùa?', 'Chim chóc, con người hoạt động gì quanh cây?', 'Cây mang lại lợi ích gì?'] },
      { part: 'Kết bài', guide: 'Nêu tình cảm, ích lợi của cây.', questions: ['Em yêu cây vì sao?', 'Em sẽ chăm sóc cây thế nào?'] }
    ],
    topics: [
      'Viết bài văn miêu tả một cây em yêu thích',
      'Tả cây bàng ở sân trường em',
      'Tả cây phượng vĩ mùa hè',
      'Tả một cây ăn quả trong vườn nhà em',
      'Tả cây đa ở đầu làng'
    ],
    vocab: [
      { group: 'Tả thân, cành, lá', words: ['xù xì', 'sần sùi', 'vươn cao', 'sum suê', 'xanh mướt', 'xanh biếc', 'non tơ', 'xoè rộng như chiếc ô'] },
      { group: 'Tả hoa, quả', words: ['đỏ rực', 'vàng ươm', 'thơm ngát', 'ngọt lịm', 'chín mọng', 'trĩu cành', 'lấp ló', 'chi chít'] },
      { group: 'Tả theo mùa', words: ['mùa xuân đâm chồi nảy lộc', 'mùa hè rợp bóng mát', 'mùa thu lá vàng', 'mùa đông khẳng khiu'] },
      { group: 'Nhân hoá', words: ['cây vẫy tay chào', 'lá thì thầm', 'cây đứng hiên ngang', 'mẹ cây ôm ấp lũ chim non'] }
    ],
    tips: ['Tả từ bao quát đến chi tiết.', 'Dùng so sánh, nhân hoá để cây "sống" trong bài văn.']
  },
  {
    id: 'giay-moi', name: 'Viết giấy mời', icon: '💌', kind: 'form', color: '#db2777',
    sgk: 'Tập hai: Bài 30 (tr.132)',
    desc: 'Viết giấy mời ai đó tham dự một sự kiện.',
    minWords: 40, maxWords: 150,
    structure: [
      { part: 'Tiêu đề', guide: 'GIẤY MỜI tham dự…', questions: ['Mời tham dự sự kiện gì?'] },
      { part: 'Người được mời', guide: 'Thân mời / Kính mời: …', questions: ['Mời ai?'] },
      { part: 'Sự kiện, thời gian, địa điểm', guide: 'Đến dự…; Thời gian: …; Địa điểm: …', questions: ['Sự kiện diễn ra lúc nào? Ở đâu?'] },
      { part: 'Mong muốn, đề nghị', guide: 'Rất vui được đón tiếp…', questions: ['Em mong muốn điều gì?'] },
      { part: 'Người mời', guide: 'Thay mặt…, chức vụ (kí tên), họ tên.', questions: ['Ai là người mời?'] }
    ],
    topics: [
      'Viết giấy mời bạn lớp bên tham dự buổi thi kể chuyện sáng tạo',
      'Viết giấy mời bố mẹ dự buổi biểu diễn văn nghệ của lớp',
      'Viết giấy mời thầy cô dự ngày hội đọc sách',
      'Viết giấy mời các bạn tham gia ngày hội "Cuộc sống xanh"'
    ],
    vocab: [
      { group: 'Mẫu câu', words: ['GIẤY MỜI', 'Thân mời:', 'Kính mời:', 'Đến dự…', 'Thời gian:', 'Địa điểm:', 'Rất vui được đón tiếp!', 'Thay mặt tập thể lớp…'] }
    ],
    tips: ['Ghi rõ thời gian (giờ, thứ, ngày, tháng, năm) và địa điểm.']
  }
];

VV.genreById = function (id) { return VV.GENRES.find(function (g) { return g.id === id; }); };
VV.themeById = function (id) { return VV.THEMES.find(function (t) { return t.id === id; }); };

/* Kho từ theo đối tượng thường gặp – dùng khi ngoại tuyến để gợi ý sát đề hơn */
VV.SUBJECT_WORDS = [
  { keys: ['mèo'], words: ['bộ ria trắng muốt', 'đôi mắt xanh biếc', 'bước đi êm ru', 'kêu meo meo', 'cuộn tròn sưởi nắng', 'vờn quả bóng len', 'móng vuốt sắc'] },
  { keys: ['chó', 'cún'], words: ['vẫy đuôi rối rít', 'cái mũi ướt lạnh', 'sủa gâu gâu', 'tai vểnh lên', 'chạy lon ton ra đón', 'canh nhà', 'trung thành'] },
  { keys: ['gà trống'], words: ['mào đỏ chót', 'bộ lông óng ánh', 'đuôi cong vồng', 'gáy ò ó o', 'oai vệ', 'đôi cựa nhọn'] },
  { keys: ['gà'], words: ['lông vàng óng', 'kêu chiếp chiếp', 'mổ thóc', 'lích chích', 'túm tụm bên mẹ'] },
  { keys: ['rùa'], words: ['cái mai cứng như áo giáp', 'bò chậm rãi', 'rụt cổ vào mai', 'mắt nhỏ như hạt đậu'] },
  { keys: ['thỏ'], words: ['đôi tai dài', 'mắt đỏ hồng', 'bộ lông trắng như bông', 'nhai cà rốt', 'nhảy tung tăng'] },
  { keys: ['chim', 'vẹt', 'sáo'], words: ['hót líu lo', 'chiếc mỏ xinh xắn', 'bộ lông sặc sỡ', 'nhảy nhót trong lồng', 'vỗ cánh'] },
  { keys: ['bàng'], words: ['tán lá xoè như chiếc ô khổng lồ', 'lá bàng to như cái quạt', 'mùa đông lá đỏ', 'quả bàng chín vàng', 'rợp bóng sân trường'] },
  { keys: ['phượng'], words: ['hoa đỏ rực như lửa', 'mùa hè', 'tiếng ve', 'chùm hoa', 'lá phượng nhỏ li ti', 'nhớ mùa chia tay'] },
  { keys: ['đa'], words: ['gốc to mấy người ôm không xuể', 'rễ buông xuống như râu ông cụ', 'tán lá rậm', 'đầu làng', 'nghìn năm tuổi'] },
  { keys: ['xoài', 'cam', 'bưởi', 'nhãn', 'vải', 'ổi', 'mít', 'táo'], words: ['quả chín vàng', 'trĩu cành', 'thơm lừng', 'ngọt lịm', 'hoa trắng li ti', 'ong bướm rập rờn'] },
  { keys: ['hoa hồng', 'hồng'], words: ['cánh hoa mịn như nhung', 'thơm ngào ngạt', 'gai nhọn', 'nụ hoa chúm chím'] },
  { keys: ['mẹ'], words: ['bàn tay mẹ ấm áp', 'giọng mẹ dịu dàng', 'tần tảo', 'thức khuya dậy sớm', 'nụ cười hiền'] },
  { keys: ['bố', 'ba'], words: ['đôi vai vững chãi', 'bàn tay rắn rỏi', 'nghiêm khắc mà yêu thương', 'chở em đi học'] },
  { keys: ['ông', 'bà'], words: ['mái tóc bạc phơ', 'giọng kể chuyện ấm áp', 'đôi mắt hiền từ', 'nếp nhăn trên trán', 'trầu cau'] },
  { keys: ['cô giáo', 'thầy giáo', 'thầy', 'cô'], words: ['giọng giảng bài ấm áp', 'ánh mắt trìu mến', 'tận tuỵ', 'người mẹ thứ hai', 'phấn trắng bảng đen'] },
  { keys: ['bạn'], words: ['chơi thân', 'giúp đỡ nhau', 'chia sẻ vui buồn', 'nụ cười tươi', 'cùng đến trường'] },
  { keys: ['trồng cây', 'cây xanh'], words: ['đào hố', 'vun gốc', 'tưới nước', 'mầm non', 'xanh mát'] },
  { keys: ['lễ hội', 'hội'], words: ['cờ hoa rực rỡ', 'tiếng trống rộn ràng', 'người đông như nước', 'trò chơi dân gian', 'náo nhiệt'] }
];

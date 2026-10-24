/* VƯỜN VĂN – Bài tham khảo cho từng dạng văn (viết riêng cho app, vừa sức lớp 4).
   Mỗi bài gắn với một đề trong VV.GENRES để học sinh thấy cách triển khai bố cục theo SGK. */
window.VV = window.VV || {};

VV.SAMPLES = {
  'y-kien': {
    topic: 'Nêu lí do em thích một câu chuyện em đã đọc hoặc đã nghe',
    text: 'Trong những câu chuyện em đã đọc, em thích nhất truyện cổ tích "Cây khế". ' +
      'Trước hết, câu chuyện có những chi tiết rất thú vị như con chim phượng hoàng biết nói "Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng". ' +
      'Thứ hai, người em trong truyện hiền lành, chăm chỉ và không tham lam nên được đền đáp xứng đáng. ' +
      'Còn người anh vì quá tham lam mà phải chịu kết cục đáng buồn. ' +
      'Câu chuyện nhắc em phải biết sống thật thà, biết đủ và không ham của cải. ' +
      'Mỗi lần đọc lại "Cây khế", em lại thấy thêm yêu những câu chuyện cổ tích của ông cha ta.'
  },
  'bao-cao': {
    topic: 'Báo cáo kết quả thảo luận nhóm về việc xây dựng góc đọc sách của lớp',
    text: 'CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập – Tự do – Hạnh phúc\n\n' +
      'Hà Nội, ngày 15 tháng 10 năm 2026\n\n' +
      'BÁO CÁO KẾT QUẢ THẢO LUẬN NHÓM\nVề việc xây dựng góc đọc sách của lớp 4A\n\n' +
      'Kính gửi: Cô giáo chủ nhiệm lớp 4A\n\n' +
      'Nhóm 2 gồm 5 bạn đã họp vào giờ ra chơi ngày 14 tháng 10 để bàn về góc đọc sách của lớp. Kết quả như sau:\n' +
      '1. Vị trí: đặt giá sách ở góc cuối lớp, cạnh cửa sổ cho sáng.\n' +
      '2. Sách: mỗi bạn góp ít nhất 2 cuốn truyện hoặc sách khoa học phù hợp lứa tuổi.\n' +
      '3. Quản lí: mỗi tuần hai bạn trực góc đọc, ghi sổ mượn – trả sách.\n' +
      '4. Trang trí: vẽ tranh, viết khẩu hiệu "Mỗi ngày một trang sách".\n\n' +
      'Nhóm em đề nghị cô cho phép lớp thực hiện từ tuần sau.\n\n' +
      'Người viết báo cáo\nNhóm trưởng\nTrần Bảo Ngọc'
  },
  'thuat-lai': {
    topic: 'Thuật lại một buổi sinh hoạt lớp đáng nhớ',
    text: 'Chiều thứ Sáu tuần trước, lớp em có một buổi sinh hoạt lớp thật đáng nhớ vì đó là buổi chúc mừng sinh nhật các bạn sinh trong tháng Mười.\n\n' +
      'Mở đầu buổi sinh hoạt, bạn lớp trưởng đứng lên nhận xét tình hình học tập trong tuần. Cả lớp vỗ tay khen tổ Ba đạt nhiều điểm tốt nhất. ' +
      'Sau đó, cô giáo mời ba bạn có sinh nhật lên bục giảng. Chúng em cùng hát vang bài "Mừng sinh nhật", tiếng hát vang cả hành lang. ' +
      'Mỗi tổ tặng các bạn một tấm thiệp tự làm, có tấm vẽ hình bông hoa, có tấm vẽ ông mặt trời đang cười. ' +
      'Bạn Minh xúc động nói lời cảm ơn, giọng run run làm cả lớp cười ồ. ' +
      'Cuối buổi, cô kể cho chúng em nghe một câu chuyện ngắn về tình bạn và dặn cả lớp luôn biết yêu thương, giúp đỡ nhau.\n\n' +
      'Buổi sinh hoạt hôm ấy kết thúc trong tiếng cười vui vẻ. Em mong lớp em sẽ còn nhiều buổi sinh hoạt ấm áp như thế.'
  },
  'ke-chuyen': {
    topic: 'Kể lại câu chuyện "Sự tích con Rồng cháu Tiên"',
    text: 'Ngày xửa ngày xưa, ở vùng đất Lạc Việt có một vị thần tên là Lạc Long Quân, mình rồng, sức khoẻ vô địch, thường giúp dân diệt trừ yêu quái.\n\n' +
      'Một lần, Lạc Long Quân gặp nàng Âu Cơ, con gái Thần Nông, xinh đẹp tuyệt trần, từ vùng núi cao phương Bắc tìm đến. Hai người đem lòng yêu nhau rồi nên duyên vợ chồng. ' +
      'Ít lâu sau, Âu Cơ sinh ra một cái bọc trăm trứng, nở ra một trăm người con khôi ngô, khoẻ mạnh. ' +
      'Vì Lạc Long Quân quen sống dưới nước, Âu Cơ quen sống trên cạn, hai người đành chia con: năm mươi con theo cha xuống biển, năm mươi con theo mẹ lên núi. ' +
      'Trước khi chia tay, họ hẹn nhau khi có việc cần thì giúp đỡ lẫn nhau. ' +
      'Người con trưởng theo mẹ được tôn làm vua, lấy hiệu là Hùng Vương, đặt tên nước là Văn Lang.\n\n' +
      'Vì thế, người Việt Nam ta tự hào là con Rồng cháu Tiên và luôn nhắc nhau hai tiếng "đồng bào" – nghĩa là cùng một bọc sinh ra. Câu chuyện giúp em thêm yêu quý và đoàn kết với mọi người.'
  },
  'tuong-tuong': {
    topic: 'Tưởng tượng một cái kết khác cho câu chuyện em yêu thích',
    text: 'Em tưởng tượng một cái kết khác cho câu chuyện "Rùa và Thỏ". ' +
      'Khi thấy Rùa sắp về đích, Thỏ chợt tỉnh giấc, cắm đầu chạy thật nhanh. Nhưng chạy được một đoạn, Thỏ dừng lại, nhìn Rùa đang lặc lè từng bước mà mồ hôi nhễ nhại. ' +
      'Thỏ nghĩ: "Mình đã coi thường bạn ấy. Thắng như thế này có gì đáng tự hào đâu!" ' +
      'Thế là Thỏ đi chậm lại, bước bên cạnh Rùa và nói: "Rùa ơi, mình xin lỗi. Chúng mình cùng về đích nhé!" ' +
      'Rùa mỉm cười gật đầu. Hai bạn cùng chạm vạch đích trong tiếng reo hò của muông thú. ' +
      'Từ hôm đó, Thỏ không còn kiêu ngạo nữa, còn Rùa có thêm một người bạn thân. Em thích cái kết này vì ai cũng vui và biết quý trọng nhau hơn.'
  },
  'huong-dan-cv': {
    topic: 'Hướng dẫn cách gấp một chiếc thuyền giấy',
    text: 'Các bạn ơi, gấp thuyền giấy rất dễ và vui. Mình cùng làm nhé!\n\n' +
      'Chuẩn bị: một tờ giấy hình chữ nhật (giấy màu hoặc giấy vở cũ).\n\n' +
      'Các bước thực hiện:\n' +
      'Bước 1: Gấp đôi tờ giấy theo chiều ngang rồi mở ra để lấy nếp ở giữa.\n' +
      'Bước 2: Gấp đôi tờ giấy theo chiều dọc, mép gấp ở phía trên.\n' +
      'Bước 3: Gấp hai góc trên vào giữa sao cho tạo thành hình mái nhà.\n' +
      'Bước 4: Gấp hai mép giấy thừa ở dưới lên hai phía.\n' +
      'Bước 5: Mở phần đáy ra, ấn dẹt thành hình vuông, rồi gấp hai góc dưới lên trên.\n' +
      'Bước 6: Mở đáy lần nữa, ấn dẹt, sau đó kéo nhẹ hai góc trên sang hai bên là thành chiếc thuyền.\n\n' +
      'Lưu ý: miết nếp gấp thật phẳng để thuyền đứng vững. Bạn có thể tô màu và viết tên lên thuyền cho đẹp nhé!'
  },
  'don': {
    topic: 'Viết đơn xin tham gia câu lạc bộ sáng tạo của trường',
    text: 'CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập – Tự do – Hạnh phúc\n\n' +
      'Hà Nội, ngày 20 tháng 9 năm 2026\n\n' +
      'ĐƠN XIN THAM GIA CÂU LẠC BỘ SÁNG TẠO\n\n' +
      'Kính gửi: Thầy phụ trách Câu lạc bộ Sáng tạo trường Tiểu học Hoa Mai\n\n' +
      'Em tên là: Nguyễn Minh An\n' +
      'Học sinh lớp: 4A\n\n' +
      'Em rất thích lắp ghép mô hình và làm đồ chơi từ vật liệu tái chế. Em làm đơn này xin được tham gia Câu lạc bộ Sáng tạo của trường để học hỏi thêm và cùng các bạn làm những sản phẩm có ích.\n\n' +
      'Nếu được tham gia, em xin hứa sẽ đi sinh hoạt đầy đủ, đúng giờ và thực hiện tốt nội quy của câu lạc bộ.\n\n' +
      'Em xin chân thành cảm ơn!\n\n' +
      'Người làm đơn\nNguyễn Minh An'
  },
  'ta-con-vat': {
    topic: 'Tả con mèo nhà em',
    text: 'Nhà em có nuôi một chú mèo mướp tên là Mun. Mun đã ba tuổi và là người bạn nhỏ đáng yêu của cả nhà.\n\n' +
      'Mun có bộ lông vằn xám đen, mềm và mượt như nhung. Cái đầu tròn tròn, hai tai nhỏ dựng đứng lúc nào cũng như đang nghe ngóng. ' +
      'Đôi mắt Mun tròn xoe, ban ngày xanh biếc như hai hòn bi ve, ban đêm sáng rực như hai ngọn đèn nhỏ. Bộ ria trắng cứ vểnh lên trông thật oai. ' +
      'Bốn chân Mun có những móng vuốt sắc giấu kín trong lớp đệm thịt êm ái nên chú đi lại nhẹ nhàng, không một tiếng động. ' +
      'Ban ngày, Mun thích nằm sưởi nắng bên hiên, thỉnh thoảng lại lim dim mắt "rừ… rừ…". ' +
      'Đêm đến, chú rón rén đi tuần quanh bếp, nhờ vậy mà nhà em không còn con chuột nào dám bén mảng. ' +
      'Mỗi khi em đi học về, Mun lại chạy ra quấn quýt bên chân, cọ cái đầu nhỏ vào người em như muốn nói: "Chào cậu chủ!"\n\n' +
      'Em rất yêu quý Mun. Em luôn chăm sóc, cho Mun ăn đúng bữa để chú lớn nhanh và mãi là người bạn thân của em.'
  },
  'thu': {
    topic: 'Viết thư cho ông bà để thăm hỏi sức khoẻ',
    text: 'Hà Nội, ngày 5 tháng 11 năm 2026\n\n' +
      'Ông bà kính yêu!\n\n' +
      'Đã lâu cháu chưa về quê thăm ông bà, cháu nhớ ông bà nhiều lắm. Dạo này trời trở lạnh, ông bà có khoẻ không ạ? Chân bà còn đau không ạ? Ông có còn ra vườn chăm cây bưởi mỗi sáng không ạ?\n\n' +
      'Cả nhà cháu vẫn khoẻ. Bố mẹ cháu đi làm chăm chỉ, em Bin đã biết đọc những chữ cái đầu tiên. Còn cháu năm nay học lớp Bốn, cháu được cô khen viết văn tiến bộ. Cháu còn tham gia câu lạc bộ cờ vua của trường nữa ạ.\n\n' +
      'Tết này cả nhà cháu sẽ về quê. Cháu sẽ kể cho ông bà nghe thật nhiều chuyện ở trường và giúp bà gói bánh chưng.\n\n' +
      'Cháu chúc ông bà luôn mạnh khoẻ, sống lâu với con cháu. Cháu hứa sẽ học thật giỏi để ông bà vui lòng.\n\n' +
      'Cháu của ông bà\nMinh An'
  },
  'cam-xuc-nguoi': {
    topic: 'Viết đoạn văn nêu tình cảm của em đối với mẹ (hoặc bố)',
    text: 'Trong gia đình, người em yêu thương nhất là mẹ. ' +
      'Mẹ em có dáng người nhỏ nhắn, đôi bàn tay hơi gầy nhưng lúc nào cũng ấm áp. ' +
      'Sáng nào mẹ cũng dậy thật sớm nấu bữa sáng, rồi tết tóc cho em trước khi đi làm. ' +
      'Tối về, dù mệt, mẹ vẫn ngồi cạnh nghe em đọc bài và nhẹ nhàng chỉ cho em chỗ còn sai. ' +
      'Có lần em bị sốt, mẹ thức trắng đêm chườm khăn cho em. Sáng hôm sau nhìn đôi mắt thâm quầng của mẹ, em thương mẹ vô cùng. ' +
      'Em thấy mình thật hạnh phúc vì có một người mẹ hiền hậu như thế. ' +
      'Em tự nhủ sẽ ngoan ngoãn, học giỏi và giúp mẹ việc nhà để mẹ bớt vất vả.'
  },
  'cam-xuc-nhan-vat': {
    topic: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về một nhân vật trong văn học',
    text: 'Đọc truyện "Dế Mèn bênh vực kẻ yếu", em rất yêu quý và khâm phục nhân vật Dế Mèn. ' +
      'Khi gặp chị Nhà Trò gầy yếu bị bọn nhện bắt nạt, Dế Mèn không hề làm ngơ mà xoè cả hai càng ra, dõng dạc nói: "Em đừng sợ. Hãy trở về cùng với tôi đây." ' +
      'Đứng trước bọn nhện đông đúc và hung dữ, Mèn vẫn bình tĩnh, lí lẽ đanh thép khiến chúng phải phá vòng vây. ' +
      'Em thấy Dế Mèn thật dũng cảm, có tấm lòng nghĩa hiệp, luôn sẵn sàng bảo vệ người yếu. ' +
      'Nhân vật Dế Mèn khiến em hiểu rằng gặp chuyện bất công thì cần mạnh dạn lên tiếng. Em mong mình cũng trở thành người tốt bụng và can đảm như Dế Mèn.'
  },
  'huong-dan-sp': {
    topic: 'Viết hướng dẫn sử dụng chiếc quạt điện',
    text: 'HƯỚNG DẪN SỬ DỤNG QUẠT ĐIỆN ĐỂ BÀN\n\n' +
      'Chiếc quạt điện giúp chúng ta mát mẻ trong những ngày hè. Để dùng quạt an toàn và bền lâu, bạn làm theo các bước sau nhé:\n\n' +
      'Bước 1: Đặt quạt ở nơi bằng phẳng, chắc chắn, cách xa chỗ có nước.\n' +
      'Bước 2: Lau khô tay rồi cắm phích điện vào ổ.\n' +
      'Bước 3: Bấm nút số 1, 2 hoặc 3 để chọn gió nhẹ, vừa hoặc mạnh.\n' +
      'Bước 4: Muốn quạt quay qua lại, bạn ấn núm tròn ở phía sau đầu quạt xuống; muốn quạt đứng yên thì kéo núm lên.\n' +
      'Bước 5: Khi không dùng nữa, bấm nút 0 để tắt rồi rút phích điện ra.\n\n' +
      'Lưu ý:\n– Không thò tay hay que vào lồng quạt khi quạt đang chạy.\n– Không để quạt thổi thẳng vào người quá lâu.\n– Thường xuyên lau sạch bụi ở cánh quạt (nhờ người lớn giúp và nhớ rút điện trước).'
  },
  'ta-cay': {
    topic: 'Tả cây bàng ở sân trường em',
    text: 'Giữa sân trường em có một cây bàng già. Cây đã gắn bó với bao thế hệ học trò, là người bạn thân thiết của chúng em.\n\n' +
      'Từ xa nhìn lại, cây bàng như một chiếc ô khổng lồ xoè rộng che mát cả một góc sân. Thân cây to, mấy bạn ôm không xuể, vỏ sần sùi, nâu sẫm. ' +
      'Cành bàng mọc ngang thành từng tầng như những cánh tay dang rộng. ' +
      'Mùa xuân, những chồi non xanh mơn mởn nhú lên như ngọn lửa xanh. Mùa hè, lá bàng to bằng bàn tay người lớn, xanh thẫm, đan vào nhau tạo thành vòm lá mát rượi. ' +
      'Mùa thu, cây ra những chùm quả xanh rồi chín vàng, thơm thoang thoảng. Mùa đông, lá bàng chuyển sang màu đỏ au rồi lặng lẽ rơi xuống sân. ' +
      'Giờ ra chơi, chúng em thường ngồi dưới gốc bàng đọc truyện, chơi ô ăn quan. Chim sẻ ríu rít trên cành như cũng muốn góp vui.\n\n' +
      'Em rất yêu cây bàng ở sân trường. Em sẽ cùng các bạn chăm sóc, không bẻ cành, ngắt lá để cây mãi xanh tốt.'
  },
  'giay-moi': {
    topic: 'Viết giấy mời bố mẹ dự buổi biểu diễn văn nghệ của lớp',
    text: 'GIẤY MỜI\n\n' +
      'Kính gửi: Bố mẹ của bạn Nguyễn Minh An\n\n' +
      'Lớp 4A trân trọng kính mời bố mẹ tới dự buổi biểu diễn văn nghệ chào mừng ngày Nhà giáo Việt Nam 20 – 11.\n\n' +
      'Thời gian: 8 giờ sáng thứ Bảy, ngày 15 tháng 11 năm 2026\n' +
      'Địa điểm: Hội trường tầng 2, trường Tiểu học Hoa Mai\n\n' +
      'Sự có mặt của bố mẹ là niềm vui lớn với các bạn nhỏ lớp 4A.\n\n' +
      'Thay mặt lớp\nLớp trưởng\nTrần Bảo Ngọc'
  }
};

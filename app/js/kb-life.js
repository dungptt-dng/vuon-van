/* Kho kiến thức: NGƯỜI THÂN, SỰ VIỆC, THƯ */
VV.KB.push(
  /* ===================== NGƯỜI GẦN GŨI (person) ===================== */
  {
    id: 'ps-me', type: 'person', name: 'mẹ',
    keys: ['mẹ', 'mẹ em', 'người mẹ', 'mẹ của em'],
    topic: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về mẹ',
    intro: [
      'Người em yêu thương nhất trong gia đình là mẹ – người tất bật lo cho cả nhà từ sáng sớm đến tối muộn.',
      'Mẹ em năm nay ngoài ba mươi tuổi, làm công nhân ở một xưởng may gần nhà.'
    ],
    look: [
      { part: 'Dáng người', items: ['Mẹ có dáng người thon thả, đi lại nhanh nhẹn', 'Mẹ thường mặc bộ quần áo giản dị, gọn gàng', 'Mỗi sáng mẹ đội chiếc mũ bảo hiểm màu xanh, chở em đến trường'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt mẹ tròn, hiền hậu, có lúm đồng tiền khi cười', 'Đôi mắt mẹ đen láy, nhìn em đầy trìu mến', 'Nụ cười của mẹ làm em quên hết mệt mỏi'] },
      { part: 'Mái tóc', items: ['Mái tóc mẹ dài, đen mượt, thường buộc gọn sau gáy', 'Tóc mẹ thoang thoảng mùi bồ kết', 'Gần đây em thấy trên tóc mẹ đã có vài sợi bạc'] },
      { part: 'Đôi bàn tay', items: ['Đôi bàn tay mẹ gầy, hơi ráp vì làm lụng nhiều', 'Bàn tay ấy nấu những bữa cơm ngon, khâu lại chiếc áo đứt cúc của em', 'Mỗi tối, tay mẹ nhẹ nhàng xoa lưng cho em dễ ngủ'] }
    ],
    acts: [
      { part: 'Công việc hằng ngày', items: ['Mẹ dậy từ năm giờ sáng để nấu bữa sáng cho cả nhà', 'Đi làm về, mẹ lại tất bật giặt giũ, dọn dẹp, nấu cơm', 'Tối đến, mẹ ngồi kèm em học bài dưới ánh đèn bàn'] },
      { part: 'Tính tình', items: ['Mẹ hiền lành, ít khi to tiếng với ai', 'Khi em mắc lỗi, mẹ nhẹ nhàng chỉ cho em điều sai để sửa', 'Mẹ hay giúp đỡ hàng xóm nên ai cũng quý mẹ'] },
      { part: 'Cách chăm sóc em', items: ['Mẹ luôn nhớ em thích ăn trứng rán và canh chua', 'Trời trở lạnh, mẹ là người đầu tiên lấy áo ấm cho em', 'Mẹ dặn dò em từng li từng tí trước khi đi học'] }
    ],
    bond: [
      'Có lần em bị sốt cao giữa đêm, mẹ thức trắng bên giường, chườm khăn mát lên trán em đến tận sáng.',
      'Hôm em được điểm mười môn Toán, mẹ ôm em thật chặt và nấu món sườn xào chua ngọt để thưởng cho em.',
      'Một buổi chiều mưa to, mẹ đến đón em, mẹ trùm kín áo mưa cho em còn vai áo mẹ thì ướt sũng.'
    ],
    end: [
      'Em yêu mẹ nhiều lắm và mong mẹ luôn mạnh khoẻ, mãi ở bên em.',
      'Em hứa sẽ chăm ngoan, học giỏi và giúp mẹ việc nhà để mẹ bớt vất vả.'
    ],
    vocab: [
      { group: 'Từ ngữ tả mẹ', items: [
        { w: 'hiền hậu', use: 'Khuôn mặt mẹ hiền hậu, lúc nào cũng như đang mỉm cười.' },
        { w: 'tất bật', use: 'Đi làm về, mẹ lại tất bật nấu cơm, giặt giũ.' },
        { w: 'dịu dàng', use: 'Mẹ dịu dàng chỉ cho em chỗ sai trong bài toán.' },
        { w: 'trìu mến', use: 'Mẹ nhìn em trìu mến khi em đọc bài cho mẹ nghe.' },
        { w: 'làm lụng', use: 'Đôi bàn tay mẹ ráp đi vì làm lụng vất vả.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm, cảm xúc', items: [
        { w: 'yêu thương', use: 'Em luôn cảm nhận được tình yêu thương của mẹ trong từng bữa cơm.' },
        { w: 'biết ơn', use: 'Em biết ơn mẹ đã thức trắng đêm chăm em ốm.' },
        { w: 'ấm áp', use: 'Được mẹ ôm vào lòng, em thấy ấm áp vô cùng.' },
        { w: 'xúc động', use: 'Em xúc động khi thấy vai áo mẹ ướt sũng vì che mưa cho em.' },
        { w: 'thương mẹ', use: 'Nhìn tóc mẹ có sợi bạc, em càng thương mẹ hơn.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi khi', use: 'Mỗi khi thấy mẹ tất bật trong bếp, em lại muốn giúp mẹ một tay.' },
        { w: 'Em nhớ mãi', use: 'Em nhớ mãi đêm mẹ ngồi chườm khăn cho em đến sáng.' },
        { w: 'Em mong', use: 'Em mong mẹ luôn khoẻ mạnh và vui vẻ.' },
        { w: 'nhiều lắm', use: 'Mẹ ơi, con yêu mẹ nhiều lắm!' }
      ] }
    ]
  },
  {
    id: 'ps-bo', type: 'person', name: 'bố',
    keys: ['bố', 'bố em', 'ba của em', 'người bố', 'cha của em'],
    topic: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về bố',
    intro: [
      'Trong gia đình, người em vô cùng kính yêu và tự hào là bố.',
      'Bố em là kĩ sư xây dựng, ngày ngày đi làm ở công trường xa nhà.'
    ],
    look: [
      { part: 'Dáng người', items: ['Bố cao lớn, vai rộng, nước da rám nắng', 'Bố bước đi chắc nịch, nhanh nhẹn', 'Đi làm, bố mặc áo sơ mi xanh và đội mũ bảo hộ màu vàng'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt bố vuông vức, cằm lún phún râu', 'Đôi mắt bố sáng, nghiêm nghị nhưng rất ấm áp', 'Mỗi lần bố cười, đuôi mắt lại hằn lên mấy nếp nhăn'] },
      { part: 'Mái tóc', items: ['Tóc bố cắt ngắn, gọn gàng', 'Sợi tóc đen, cứng và dày', 'Hai bên thái dương đã lấm tấm sợi bạc'] },
      { part: 'Đôi bàn tay', items: ['Bàn tay bố to, dày và chai sạn', 'Đôi tay ấy sửa được quạt điện, xe đạp, cả vòi nước bị rỉ', 'Mỗi lần bố xoa đầu, em thấy thật vững vàng'] }
    ],
    acts: [
      { part: 'Công việc hằng ngày', items: ['Sáng sớm, bố tập thể dục rồi chở em đến trường', 'Chiều về, bố tưới cây, sửa đồ đạc trong nhà', 'Cuối tuần, bố dạy em chơi cờ tướng và đá bóng'] },
      { part: 'Tính tình', items: ['Bố nghiêm khắc nhưng rất công bằng', 'Bố ít nói, thương em bằng việc làm hơn lời nói', 'Bố hay pha trò khiến cả nhà cười vang'] },
      { part: 'Cách dạy bảo em', items: ['Bố dạy em tập xe đạp, ngã thì tự đứng dậy', 'Bố khuyên em đã hứa thì phải giữ lời', 'Bố cùng em làm mô hình cho tiết Khoa học'] }
    ],
    bond: [
      'Hồi em tập xe đạp, bố chạy theo giữ yên xe suốt cả buổi chiều, mồ hôi ướt đẫm lưng áo.',
      'Có lần em làm vỡ chiếc bình hoa, em sợ lắm, nhưng bố chỉ ôm em và dặn lần sau cẩn thận hơn.',
      'Hè năm ngoái, bố đưa cả nhà đi biển, cõng em trên vai lội ra chỗ sóng nhỏ.'
    ],
    end: [
      'Em yêu bố và luôn tự hào vì có một người bố tuyệt vời như thế.',
      'Em mong bố luôn mạnh khoẻ, em sẽ cố gắng học thật giỏi để bố vui lòng.'
    ],
    vocab: [
      { group: 'Từ ngữ tả bố', items: [
        { w: 'rám nắng', use: 'Nước da bố rám nắng vì làm việc ngoài công trường.' },
        { w: 'chai sạn', use: 'Bàn tay bố chai sạn nhưng xoa đầu em rất nhẹ.' },
        { w: 'nghiêm khắc', use: 'Bố nghiêm khắc khi em lười học bài.' },
        { w: 'vững chãi', use: 'Đôi vai bố vững chãi cõng em lội ra biển.' },
        { w: 'chắc nịch', use: 'Bố bước những bước chân chắc nịch trên đường đi làm.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm, cảm xúc', items: [
        { w: 'kính yêu', use: 'Bố là người em kính yêu nhất.' },
        { w: 'tự hào', use: 'Em tự hào khi kể với các bạn về công việc của bố.' },
        { w: 'biết ơn', use: 'Em biết ơn bố đã kiên nhẫn dạy em đi xe đạp.' },
        { w: 'an tâm', use: 'Có bố ở bên, em thấy an tâm lạ thường.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi lần', use: 'Mỗi lần bố xoa đầu, em lại thấy mình được che chở.' },
        { w: 'Em sẽ không bao giờ quên', use: 'Em sẽ không bao giờ quên buổi chiều bố chạy theo giữ xe cho em.' },
        { w: 'Em mong', use: 'Em mong bố bớt vất vả và có nhiều thời gian chơi với em.' },
        { w: 'Bố ơi', use: 'Bố ơi, con yêu bố nhiều lắm!' }
      ] }
    ]
  },
  {
    id: 'ps-ong', type: 'person', name: 'ông',
    keys: ['ông nội', 'ông ngoại', 'ông của em', 'về ông', 'ông hoặc bà', 'với ông'],
    topic: 'Viết đoạn văn nêu cảm xúc của em về ông',
    intro: [
      'Ông nội em năm nay đã gần tám mươi tuổi nhưng vẫn còn minh mẫn, khoẻ mạnh.',
      'Ông từng là bộ đội, giờ nghỉ hưu ở nhà chăm vườn cây và trông các cháu.'
    ],
    look: [
      { part: 'Dáng người', items: ['Ông gầy, lưng đã hơi còng', 'Ông thường mặc bộ quần áo nâu đã bạc màu', 'Ông đi chậm rãi, tay chống chiếc gậy trúc'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt ông nhiều nếp nhăn, da lấm tấm đồi mồi', 'Đôi mắt ông hiền từ sau cặp kính lão', 'Chòm râu bạc của ông rung rung mỗi khi ông cười'] },
      { part: 'Mái tóc', items: ['Tóc ông bạc trắng như cước', 'Ông cắt tóc ngắn, chải gọn gàng', 'Mỗi sáng ông đội chiếc mũ cối đi dạo'] },
      { part: 'Đôi bàn tay', items: ['Bàn tay ông gầy guộc, nổi rõ những đường gân xanh', 'Đôi tay ấy vẫn khéo léo vót nan làm diều cho em', 'Tay ông ấm áp, nắm tay em dắt đi dạo quanh làng'] }
    ],
    acts: [
      { part: 'Công việc hằng ngày', items: ['Sáng nào ông cũng dậy sớm tập thể dục, tưới cây cảnh', 'Ông đọc báo rồi kể tin tức cho cả nhà nghe', 'Chiều chiều, ông ra đầu ngõ đón em đi học về'] },
      { part: 'Tính tình', items: ['Ông hiền từ, điềm đạm, chưa bao giờ quát mắng con cháu', 'Ông rất giữ nếp, nói năng từ tốn', 'Ông hay kể chuyện thời ông đi bộ đội'] },
      { part: 'Cách chăm sóc em', items: ['Ông dạy em chơi cờ tướng, chỉ từng nước đi', 'Ông làm diều sáo cho em thả mỗi mùa hè', 'Ông dạy em viết chữ, nắn nót từng nét'] }
    ],
    bond: [
      'Hè năm ngoái, ông cùng em vót nan, dán giấy làm chiếc diều cánh cò; khi diều bay cao, ông vỗ tay cười như trẻ con.',
      'Có lần em bị điểm kém, buồn không muốn ăn cơm, ông ngồi cạnh kể chuyện ngày xưa ông học bài dưới ánh đèn dầu để động viên em.',
      'Tối mùa hè, em nằm trên chõng tre ngoài hiên, ông vừa phe phẩy quạt nan vừa kể chuyện cổ tích cho em nghe.'
    ],
    end: [
      'Em kính yêu ông vô cùng và mong ông sống thật lâu, thật khoẻ bên con cháu.',
      'Em sẽ chăm ngoan để ông luôn vui lòng.'
    ],
    vocab: [
      { group: 'Từ ngữ tả ông', items: [
        { w: 'bạc trắng như cước', use: 'Mái tóc ông đã bạc trắng như cước.' },
        { w: 'hiền từ', use: 'Ông nhìn em bằng đôi mắt hiền từ sau cặp kính lão.' },
        { w: 'gầy guộc', use: 'Bàn tay ông gầy guộc nhưng vót nan rất khéo.' },
        { w: 'điềm đạm', use: 'Ông lúc nào cũng điềm đạm, nói năng từ tốn.' },
        { w: 'minh mẫn', use: 'Gần tám mươi tuổi mà ông vẫn minh mẫn, nhớ tên từng đứa cháu.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm, cảm xúc', items: [
        { w: 'kính yêu', use: 'Em kính yêu ông, người đã dạy em những nước cờ đầu tiên.' },
        { w: 'kính trọng', use: 'Cả xóm đều kính trọng ông vì ông sống mẫu mực.' },
        { w: 'gắn bó', use: 'Em gắn bó với ông qua những buổi chiều thả diều.' },
        { w: 'bồi hồi', use: 'Nghe ông kể chuyện thời đi bộ đội, em thấy bồi hồi khó tả.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi khi', use: 'Mỗi khi nhìn chiếc diều treo trên tường, em lại nhớ đến ông.' },
        { w: 'Em nhớ nhất', use: 'Em nhớ nhất những đêm hè nằm nghe ông kể chuyện.' },
        { w: 'Em mong', use: 'Em mong ông sống lâu để chơi cờ với em thật nhiều.' },
        { w: 'Em kính yêu ông', use: 'Em kính yêu ông và luôn muốn được ở bên ông.' }
      ] }
    ]
  },
  {
    id: 'ps-ba', type: 'person', name: 'bà',
    keys: ['bà nội', 'bà ngoại', 'bà của em', 'về bà', 'với bà'],
    topic: 'Viết đoạn văn nêu cảm xúc của em về bà',
    intro: [
      'Người em yêu quý nhất trong nhà là bà ngoại.',
      'Bà em năm nay đã ngoài bảy mươi tuổi, sống cùng gia đình em trong căn nhà có mảnh vườn nhỏ.'
    ],
    look: [
      { part: 'Dáng người', items: ['Bà nhỏ nhắn, lưng đã hơi còng', 'Bà thường mặc áo bà ba màu nâu nhạt', 'Bà đi lại chậm rãi, nhẹ nhàng'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt bà phúc hậu, có nhiều nếp nhăn', 'Đôi mắt bà đã mờ nhưng vẫn ánh lên vẻ hiền từ', 'Bà cười móm mém trông rất hiền'] },
      { part: 'Mái tóc', items: ['Mái tóc bà bạc phơ, dài ngang lưng', 'Bà búi tóc gọn sau gáy', 'Tóc bà thơm mùi nước gội lá bưởi'] },
      { part: 'Đôi bàn tay', items: ['Bàn tay bà nhăn nheo, gầy gầy', 'Đôi tay ấy vẫn nhặt rau, khâu vá thoăn thoắt', 'Bàn tay bà xoa lưng cho em mỗi tối, mát rượi'] }
    ],
    acts: [
      { part: 'Công việc hằng ngày', items: ['Sáng sớm, bà quét sân, cho gà ăn', 'Bà nhặt rau, nấu nồi chè đỗ đen em thích', 'Chiều chiều, bà ngồi ở hiên khâu lại áo cho các cháu'] },
      { part: 'Tính tình', items: ['Bà hiền hậu, ai trong xóm cũng quý', 'Bà chịu thương chịu khó, không lúc nào chịu ngồi yên', 'Bà nhẹ nhàng, chưa từng mắng em'] },
      { part: 'Cách chăm sóc em', items: ['Bà để dành cho em những quả na chín nhất trong vườn', 'Bà ru em ngủ bằng những câu hát ru ngọt ngào', 'Bà kể chuyện Tấm Cám, Thạch Sanh cho em nghe'] }
    ],
    bond: [
      'Có lần em bị ngã trầy đầu gối, bà vội lấy nước muối rửa vết thương, vừa thổi vừa dỗ dành em.',
      'Những tối mùa hè mất điện, bà nằm bên em, tay phe phẩy chiếc quạt nan cho đến khi em ngủ say.',
      'Tết năm ngoái, bà dạy em gói bánh chưng; chiếc bánh em gói méo xệch nhưng bà vẫn khen cháu khéo tay.'
    ],
    end: [
      'Em yêu bà nhiều lắm, bà là "kho truyện cổ tích" và là vòng tay ấm áp nhất của em.',
      'Em mong bà sống lâu trăm tuổi để em được ở bên bà mãi.'
    ],
    vocab: [
      { group: 'Từ ngữ tả bà', items: [
        { w: 'bạc phơ', use: 'Mái tóc bà bạc phơ như mây trắng.' },
        { w: 'móm mém', use: 'Bà cười móm mém khi thấy em về.' },
        { w: 'phúc hậu', use: 'Khuôn mặt bà phúc hậu, ai nhìn cũng thấy mến.' },
        { w: 'nhăn nheo', use: 'Bàn tay bà nhăn nheo nhưng xoa lưng em rất êm.' },
        { w: 'thoăn thoắt', use: 'Tay bà vẫn khâu áo thoăn thoắt dù mắt đã mờ.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm, cảm xúc', items: [
        { w: 'yêu quý', use: 'Em yêu quý bà hơn bất cứ ai trong nhà.' },
        { w: 'ấm áp', use: 'Vòng tay bà ấm áp như một chiếc chăn bông.' },
        { w: 'nhớ thương', use: 'Mỗi lần đi xa, em lại nhớ thương bà da diết.' },
        { w: 'biết ơn', use: 'Em biết ơn bà đã ru em ngủ suốt những năm em còn bé.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi khi', use: 'Mỗi khi ăn chè đỗ đen, em lại nhớ đến bà.' },
        { w: 'Em nhớ mãi', use: 'Em nhớ mãi những đêm hè bà phe phẩy quạt cho em ngủ.' },
        { w: 'Em mong', use: 'Em mong bà sống lâu trăm tuổi.' },
        { w: 'Bà ơi', use: 'Bà ơi, cháu yêu bà nhiều lắm!' }
      ] }
    ]
  },
  {
    id: 'ps-co-giao', type: 'person', name: 'cô giáo',
    keys: ['cô giáo', 'thầy giáo', 'thầy cô', 'thầy cô giáo', 'cô chủ nhiệm'],
    topic: 'Viết đoạn văn nêu tình cảm của em với thầy cô giáo',
    intro: [
      'Người để lại trong em nhiều tình cảm nhất ở trường là cô Lan, cô giáo chủ nhiệm lớp em.',
      'Cô đã dạy em từ năm lớp Ba và năm nay tiếp tục chủ nhiệm lớp 4A.'
    ],
    look: [
      { part: 'Dáng người', items: ['Cô có dáng người mảnh mai, nhanh nhẹn', 'Thứ Hai nào cô cũng mặc áo dài thướt tha', 'Giọng cô trong trẻo, ấm áp'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt cô trái xoan, lúc nào cũng tươi tắn', 'Đôi mắt cô sau cặp kính trắng nhìn học trò trìu mến', 'Cô cười rất hiền, để lộ hàm răng trắng đều'] },
      { part: 'Mái tóc', items: ['Tóc cô dài, đen óng', 'Cô kẹp tóc gọn bằng chiếc kẹp hình con bướm', 'Khi cô cúi xuống chữa bài, tóc cô thoang thoảng mùi hương'] },
      { part: 'Đôi bàn tay', items: ['Bàn tay cô thon dài, viết chữ rất đẹp', 'Những dòng chữ nghiêng đều của cô trên bảng thẳng tắp', 'Cô cầm tay em sửa từng nét chữ còn run'] }
    ],
    acts: [
      { part: 'Công việc hằng ngày', items: ['Cô đến lớp sớm, mở cửa sổ đón nắng', 'Cô giảng bài chậm rãi, dễ hiểu', 'Tối về, cô còn chấm bài, soạn bài đến khuya'] },
      { part: 'Tính tình', items: ['Cô hiền nhưng nghiêm khắc trong học tập', 'Cô công bằng với mọi bạn trong lớp', 'Cô vui tính, hay kể chuyện vui đầu giờ'] },
      { part: 'Cách quan tâm học sinh', items: ['Bạn nào ốm, cô gọi điện hỏi thăm', 'Cô kèm thêm cho các bạn học chậm', 'Cô khen ngợi từng tiến bộ nhỏ của học trò'] }
    ],
    bond: [
      'Có lần em bị đau bụng trong giờ học, cô dìu em xuống phòng y tế, pha cho em cốc nước gừng ấm rồi gọi điện báo mẹ.',
      'Hồi đầu năm em viết chữ rất xấu, cô kiên nhẫn cầm tay em luyện từng nét; cuối học kì em được khen vở sạch chữ đẹp.',
      'Ngày 20-11 năm ngoái, cả lớp tặng cô bó hoa cúc tự tay gói; cô xúc động, rơm rớm nước mắt cảm ơn chúng em.'
    ],
    end: [
      'Em kính trọng và biết ơn cô rất nhiều.',
      'Em sẽ cố gắng học thật giỏi để không phụ công dạy dỗ của cô.'
    ],
    vocab: [
      { group: 'Từ ngữ tả thầy cô', items: [
        { w: 'dịu dàng', use: 'Giọng cô dịu dàng khi giảng bài cho cả lớp.' },
        { w: 'tận tuỵ', use: 'Cô tận tuỵ chấm từng bài văn của chúng em đến khuya.' },
        { w: 'nghiêm khắc', use: 'Cô nghiêm khắc nhắc nhở bạn nào chưa làm bài tập.' },
        { w: 'kiên nhẫn', use: 'Cô kiên nhẫn cầm tay em sửa từng nét chữ.' },
        { w: 'nắn nót', use: 'Nhờ cô, em đã biết viết nắn nót từng dòng.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm, cảm xúc', items: [
        { w: 'kính trọng', use: 'Cả lớp em đều kính trọng cô chủ nhiệm.' },
        { w: 'biết ơn', use: 'Em biết ơn cô đã dìu em xuống phòng y tế hôm ấy.' },
        { w: 'quý mến', use: 'Các bạn trong lớp ai cũng quý mến cô.' },
        { w: 'xúc động', use: 'Em xúc động khi thấy cô rơm rớm nước mắt nhận hoa.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi khi', use: 'Mỗi khi nhìn những dòng chữ đẹp trong vở, em lại nhớ đến cô.' },
        { w: 'Em nhớ mãi', use: 'Em nhớ mãi cốc nước gừng ấm cô pha cho em.' },
        { w: 'công dạy dỗ', use: 'Em sẽ học thật giỏi để đền đáp công dạy dỗ của cô.' },
        { w: 'Em mong', use: 'Em mong cô luôn mạnh khoẻ để dạy chúng em thật lâu.' }
      ] }
    ]
  },
  {
    id: 'ps-ban-than', type: 'person', name: 'bạn thân',
    keys: ['bạn thân', 'người bạn thân', 'bạn của em', 'bạn cùng lớp'],
    topic: 'Viết đoạn văn nêu tình cảm của em với người bạn thân',
    intro: [
      'Người bạn thân nhất của em là Minh Anh, ngồi cùng bàn với em từ năm lớp Ba.',
      'Nhà hai đứa ở cùng một ngõ nên sáng nào chúng em cũng rủ nhau đi học.'
    ],
    look: [
      { part: 'Dáng người', items: ['Minh Anh nhỏ nhắn, nhanh nhẹn', 'Bạn hay mặc chiếc áo đồng phục trắng phẳng phiu', 'Chiếc cặp màu xanh của bạn lúc nào cũng gọn gàng'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt bạn tròn, bầu bĩnh', 'Đôi mắt to, đen láy, lúc nào cũng tươi cười', 'Khi cười, bạn có chiếc răng khểnh rất duyên'] },
      { part: 'Mái tóc', items: ['Tóc bạn cắt ngắn ngang vai', 'Bạn cài chiếc kẹp hình ngôi sao', 'Những hôm đá cầu, mái tóc bạn bết mồ hôi'] },
      { part: 'Giọng nói, tiếng cười', items: ['Giọng bạn trong trẻo, nói nhanh', 'Bạn hát rất hay trong các buổi văn nghệ', 'Tiếng cười của bạn giòn tan'] }
    ],
    acts: [
      { part: 'Học tập', items: ['Bạn học giỏi môn Toán, hay giảng bài cho em', 'Bạn chăm chỉ, làm bài tập đầy đủ', 'Giờ ra chơi, bạn hay rủ em lên thư viện đọc truyện'] },
      { part: 'Tính tình', items: ['Bạn vui vẻ, hoà đồng với cả lớp', 'Bạn thật thà, có gì nói thẳng', 'Bạn hay nhường nhịn, chia sẻ đồ dùng học tập'] },
      { part: 'Cùng nhau vui chơi', items: ['Chúng em cùng chơi nhảy dây, đá cầu', 'Cuối tuần, hai đứa đạp xe quanh công viên', 'Chúng em đổi truyện tranh cho nhau đọc'] }
    ],
    bond: [
      'Có lần em quên hộp bút ở nhà, Minh Anh lặng lẽ chia cho em chiếc bút chì và cục tẩy của mình suốt buổi học.',
      'Hôm em bị ốm phải nghỉ học, chiều nào bạn cũng sang chép bài và giảng lại cho em.',
      'Có một lần hai đứa giận nhau vì chuyện nhỏ, nhưng sáng hôm sau bạn đã đứng chờ em ở đầu ngõ với gói xôi chia đôi.'
    ],
    end: [
      'Em rất quý Minh Anh và mong tình bạn của chúng em mãi bền chặt.',
      'Dù sau này có học khác trường, em cũng sẽ không bao giờ quên người bạn tốt ấy.'
    ],
    vocab: [
      { group: 'Từ ngữ tả bạn', items: [
        { w: 'hoà đồng', use: 'Minh Anh hoà đồng nên bạn nào cũng muốn chơi cùng.' },
        { w: 'thật thà', use: 'Bạn em thật thà, làm sai là nhận lỗi ngay.' },
        { w: 'tốt bụng', use: 'Minh Anh tốt bụng chia cho em chiếc bút chì của mình.' },
        { w: 'bầu bĩnh', use: 'Khuôn mặt bầu bĩnh của bạn lúc nào cũng tươi cười.' },
        { w: 'giòn tan', use: 'Tiếng cười giòn tan của bạn làm cả bàn vui lây.' }
      ] },
      { group: 'Từ ngữ chỉ tình bạn', items: [
        { w: 'thân thiết', use: 'Hai đứa em thân thiết như hai chị em ruột.' },
        { w: 'quý mến', use: 'Em quý mến Minh Anh vì bạn luôn sẵn lòng giúp đỡ.' },
        { w: 'gắn bó', use: 'Chúng em đã gắn bó với nhau suốt hai năm ngồi cùng bàn.' },
        { w: 'chia sẻ', use: 'Bạn luôn chia sẻ với em cả niềm vui lẫn nỗi buồn.' },
        { w: 'bền chặt', use: 'Em mong tình bạn của chúng em mãi bền chặt.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi khi', use: 'Mỗi khi gặp bài toán khó, em lại nhớ đến lời giảng của bạn.' },
        { w: 'Em nhớ mãi', use: 'Em nhớ mãi gói xôi bạn chia đôi hôm hai đứa làm lành.' },
        { w: 'Em thật may mắn', use: 'Em thật may mắn khi có một người bạn như Minh Anh.' },
        { w: 'Em mong', use: 'Em mong năm nào chúng em cũng được ngồi cùng bàn.' }
      ] }
    ]
  },
  {
    id: 'ps-anh-chi', type: 'person', name: 'anh trai',
    keys: ['anh trai', 'anh của em', 'chị gái', 'chị của em', 'anh chị'],
    topic: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về anh trai (hoặc chị gái)',
    intro: [
      'Anh trai em tên là Hùng, đang học lớp 8, hơn em bốn tuổi.',
      'Đối với em, anh vừa là anh, vừa là người bạn, người thầy nhỏ ở nhà.'
    ],
    look: [
      { part: 'Dáng người', items: ['Anh cao lêu nghêu, gầy nhưng rắn chắc', 'Anh thích mặc áo phông và quần thể thao', 'Anh đi đứng nhanh nhẹn, khoẻ khoắn'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt anh dài, sống mũi cao', 'Đôi mắt anh sáng, tinh nghịch', 'Mỗi khi trêu em, anh lại nheo mắt cười'] },
      { part: 'Mái tóc', items: ['Tóc anh cắt ngắn, dựng đứng như chiếc bàn chải', 'Đá bóng về, tóc anh ướt đẫm mồ hôi', 'Anh hay gãi đầu khi gặp bài khó'] },
      { part: 'Đôi bàn tay', items: ['Bàn tay anh to, khoẻ', 'Đôi tay anh khéo léo sửa xe đạp, lắp đồ chơi cho em', 'Anh nắm chặt tay em khi dắt em qua đường'] }
    ],
    acts: [
      { part: 'Công việc hằng ngày', items: ['Anh giúp mẹ quét nhà, rửa bát', 'Tối nào anh cũng học bài rất chăm', 'Chiều chiều, anh đi đá bóng ở sân gần nhà'] },
      { part: 'Tính tình', items: ['Anh hay trêu em nhưng rất thương em', 'Anh nhường em phần quà ngon nhất', 'Anh có trách nhiệm, việc gì đã nhận là làm đến nơi'] },
      { part: 'Cách chăm sóc em', items: ['Anh giảng cho em những bài toán khó', 'Anh dạy em bơi ở bể bơi gần nhà', 'Khi bố mẹ đi vắng, anh nấu mì cho em ăn'] }
    ],
    bond: [
      'Có lần em bị một bạn lớn hơn trêu chọc, anh đã đến nói chuyện nhẹ nhàng với bạn ấy, từ đó bạn ấy không trêu em nữa.',
      'Hôm sinh nhật em, anh dành tiền tiết kiệm mua tặng em quyển truyện em thích nhất.',
      'Mùa hè năm ngoái, anh kiên nhẫn đỡ bụng em dưới nước suốt một tuần cho đến khi em tự bơi được.'
    ],
    end: [
      'Em rất thương anh và tự hào vì có một người anh tốt như thế.',
      'Em mong anh học giỏi, thi đỗ vào ngôi trường anh hằng mơ ước.'
    ],
    vocab: [
      { group: 'Từ ngữ tả anh (chị)', items: [
        { w: 'cao lêu nghêu', use: 'Anh em cao lêu nghêu, đứng cạnh bố đã gần bằng.' },
        { w: 'tinh nghịch', use: 'Đôi mắt tinh nghịch của anh nheo lại mỗi khi trêu em.' },
        { w: 'khoẻ khoắn', use: 'Đá bóng về, anh trông thật khoẻ khoắn.' },
        { w: 'có trách nhiệm', use: 'Anh rất có trách nhiệm, trông em cẩn thận khi bố mẹ đi vắng.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm anh em', items: [
        { w: 'che chở', use: 'Anh luôn che chở em mỗi khi em gặp chuyện buồn.' },
        { w: 'nhường nhịn', use: 'Anh biết nhường nhịn em từng miếng bánh ngon.' },
        { w: 'thương', use: 'Em thương anh vì anh học khuya mà vẫn giảng bài cho em.' },
        { w: 'tự hào', use: 'Em tự hào khoe với các bạn về người anh của mình.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi lần', use: 'Mỗi lần nhảy xuống bể bơi, em lại nhớ đến đôi tay anh đỡ em.' },
        { w: 'Em nhớ mãi', use: 'Em nhớ mãi quyển truyện anh mua bằng tiền tiết kiệm.' },
        { w: 'Em mong', use: 'Em mong anh thi đỗ vào ngôi trường anh mơ ước.' },
        { w: 'Anh ơi', use: 'Anh ơi, em cảm ơn anh nhiều lắm!' }
      ] }
    ]
  },
  {
    id: 'ps-em-be', type: 'person', name: 'em bé',
    keys: ['em bé', 'em gái', 'em trai', 'bé út', 'em nhỏ trong nhà'],
    topic: 'Viết đoạn văn nêu tình cảm, cảm xúc của em về em bé trong nhà',
    intro: [
      'Nhà em có thêm một thành viên nhỏ là bé Na, em gái em, vừa tròn hai tuổi.',
      'Từ khi có bé Na, căn nhà em lúc nào cũng rộn rã tiếng cười.'
    ],
    look: [
      { part: 'Dáng người', items: ['Bé Na mũm mĩm, tròn như quả bóng', 'Bé mới biết đi, bước chân còn lẫm chẫm', 'Bé hay mặc bộ váy hồng có hình con thỏ'] },
      { part: 'Khuôn mặt, đôi mắt', items: ['Khuôn mặt bé bầu bĩnh, hai má phúng phính', 'Đôi mắt đen tròn như hạt nhãn', 'Cái miệng nhỏ xinh lúc nào cũng bi bô'] },
      { part: 'Mái tóc', items: ['Tóc bé lơ thơ, mềm như tơ', 'Mẹ buộc cho bé một chỏm tóc nhỏ trên đỉnh đầu', 'Tóc bé thơm mùi sữa'] },
      { part: 'Đôi bàn tay, bàn chân', items: ['Bàn tay bé nhỏ xíu, mũm mĩm', 'Những ngón tay bé nắm chặt lấy ngón tay em', 'Đôi bàn chân bé hồng hào, xinh xắn'] }
    ],
    acts: [
      { part: 'Hoạt động hằng ngày', items: ['Bé thích chơi xếp hình và ôm gấu bông', 'Bé bi bô gọi "chị ơi", "mẹ ơi" suốt ngày', 'Bé hay bắt chước mọi người cầm chổi quét nhà'] },
      { part: 'Tính nết', items: ['Bé hiếu động, chạy khắp nhà', 'Bé hay cười, ít khi quấy khóc', 'Đôi khi bé nghịch, lấy bút chì vẽ lên vở của em'] },
      { part: 'Em chăm sóc bé', items: ['Em đút cho bé ăn cháo', 'Em đọc truyện tranh, hát cho bé nghe', 'Em trông bé khi mẹ nấu cơm'] }
    ],
    bond: [
      'Lần đầu tiên bé gọi được tiếng "chị", em sung sướng chạy đi khoe với cả nhà.',
      'Có lần bé bị ngã khóc oà, em vội bế bé lên, thổi vào chỗ đau và làm mặt hề cho đến khi bé bật cười.',
      'Chiều nào em đi học về, bé cũng lẫm chẫm chạy ra cửa, dang tay đòi em bế.'
    ],
    end: [
      'Em yêu bé Na vô cùng, mỗi ngày bên bé đều là một ngày vui.',
      'Em sẽ làm người chị tốt, luôn che chở và nhường nhịn em.'
    ],
    vocab: [
      { group: 'Từ ngữ tả em bé', items: [
        { w: 'mũm mĩm', use: 'Bé Na mũm mĩm, ai gặp cũng muốn bế.' },
        { w: 'phúng phính', use: 'Hai má bé phúng phính như hai chiếc bánh bao.' },
        { w: 'lẫm chẫm', use: 'Bé lẫm chẫm chạy ra cửa đón em đi học về.' },
        { w: 'bi bô', use: 'Bé bi bô gọi "chị ơi" nghe thật đáng yêu.' },
        { w: 'đen tròn như hạt nhãn', use: 'Đôi mắt bé đen tròn như hạt nhãn.' }
      ] },
      { group: 'Từ ngữ chỉ tình cảm, cảm xúc', items: [
        { w: 'đáng yêu', use: 'Mỗi lần bé cười, trông bé đáng yêu vô cùng.' },
        { w: 'sung sướng', use: 'Em sung sướng khi bé gọi được tiếng "chị".' },
        { w: 'che chở', use: 'Em sẽ luôn che chở cho bé Na.' },
        { w: 'nhường nhịn', use: 'Em nhường nhịn bé cả món đồ chơi em thích nhất.' }
      ] },
      { group: 'Mẫu câu bày tỏ cảm xúc', items: [
        { w: 'Mỗi khi', use: 'Mỗi khi bé cười, mọi mệt mỏi của em đều tan biến.' },
        { w: 'Em nhớ mãi', use: 'Em nhớ mãi lần đầu tiên bé gọi em là "chị".' },
        { w: 'Em mong', use: 'Em mong bé mau lớn để hai chị em cùng đi học.' },
        { w: 'Em yêu bé', use: 'Em yêu bé Na nhiều lắm!' }
      ] }
    ]
  },

  /* ===================== THUẬT LẠI SỰ VIỆC (event) ===================== */
  {
    id: 'ev-sinh-hoat-lop', type: 'event', name: 'buổi sinh hoạt lớp',
    keys: ['sinh hoạt lớp', 'buổi sinh hoạt lớp', 'giờ sinh hoạt lớp'],
    topic: 'Thuật lại một buổi sinh hoạt lớp đáng nhớ',
    intro: [
      'Chiều thứ Sáu tuần trước, lớp 4A của em có một buổi sinh hoạt lớp thật đáng nhớ.',
      'Buổi sinh hoạt diễn ra ngay trong lớp học, do bạn lớp trưởng điều khiển, có cô giáo chủ nhiệm cùng tham dự.'
    ],
    steps: [
      { h: 'Hát đầu giờ', s: 'Đầu tiên, bạn lớp trưởng mời cả lớp đứng dậy hát một bài thật sôi nổi để khởi động.' },
      { h: 'Các tổ báo cáo', s: 'Tiếp theo, ba tổ trưởng lần lượt báo cáo kết quả học tập và nề nếp của tổ trong tuần.' },
      { h: 'Tuyên dương, nhắc nhở', s: 'Sau đó, lớp trưởng tuyên dương các bạn có nhiều điểm tốt và nhắc nhở những bạn còn nói chuyện riêng.' },
      { h: 'Góp ý xây dựng lớp', s: 'Cả lớp sôi nổi giơ tay góp ý: bạn đề nghị trồng thêm cây xanh, bạn đề nghị lập góc đọc sách.' },
      { h: 'Tiểu phẩm vui', s: 'Phần văn nghệ bắt đầu, tổ em diễn tiểu phẩm "Ai tốt bụng nhất?" khiến cả lớp cười rộ.' },
      { h: 'Cô nhận xét, dặn dò', s: 'Cuối cùng, cô giáo nhận xét, khen lớp tiến bộ và phổ biến kế hoạch tuần sau.' }
    ],
    highlight: [
      'Bạn Nam trước hay đi muộn, tuần này được tuyên dương vì đi học đúng giờ cả năm buổi; cả lớp vỗ tay rào rào.',
      'Tổ em được cắm lá cờ thi đua đỏ thắm lên góc bảng của tổ.'
    ],
    feel: [
      'Em thấy vui và tự hào vì tổ mình được khen.',
      'Em hiểu rằng mỗi bạn cố gắng một chút thì cả lớp sẽ cùng tiến bộ.'
    ],
    end: [
      'Buổi sinh hoạt lớp hôm ấy để lại trong em nhiều niềm vui.',
      'Em tự nhủ tuần sau sẽ cố gắng hơn để góp phần xây dựng lớp thêm vững mạnh.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, cả lớp hát vang một bài để khởi động.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, các tổ trưởng lần lượt báo cáo.' },
        { w: 'Sau đó', use: 'Sau đó, lớp trưởng tuyên dương những bạn có nhiều điểm tốt.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, cô giáo nhận xét và dặn dò cả lớp.' },
        { w: 'Khi buổi sinh hoạt kết thúc', use: 'Khi buổi sinh hoạt kết thúc, ai cũng ra về với nụ cười.' }
      ] },
      { group: 'Từ ngữ tả không khí', items: [
        { w: 'sôi nổi', use: 'Phần góp ý diễn ra thật sôi nổi.' },
        { w: 'rôm rả', use: 'Cả lớp bàn bạc rôm rả về góc đọc sách.' },
        { w: 'vỗ tay rào rào', use: 'Nghe tên bạn Nam được khen, cả lớp vỗ tay rào rào.' },
        { w: 'cười rộ', use: 'Tiểu phẩm của tổ em khiến cả lớp cười rộ.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'tự hào', use: 'Em tự hào khi tổ mình được cắm cờ thi đua.' },
        { w: 'phấn khởi', use: 'Ai cũng phấn khởi khi nghe cô khen lớp tiến bộ.' },
        { w: 'vui sướng', use: 'Em vui sướng đến mức muốn kể ngay cho mẹ nghe.' },
        { w: 'nhớ mãi', use: 'Em sẽ nhớ mãi buổi sinh hoạt lớp hôm ấy.' }
      ] }
    ]
  },
  {
    id: 'ev-trai-nghiem', type: 'event', name: 'buổi trải nghiệm ở làng gốm',
    keys: ['hoạt động trải nghiệm', 'trải nghiệm', 'làng nghề', 'làng gốm', 'bát tràng', 'nặn gốm'],
    topic: 'Thuật lại một hoạt động trải nghiệm em đã tham gia',
    intro: [
      'Sáng Chủ nhật vừa rồi, trường em tổ chức cho học sinh khối 4 đi trải nghiệm ở làng gốm Bát Tràng.',
      'Đi cùng chúng em có cô giáo chủ nhiệm và một số phụ huynh.'
    ],
    steps: [
      { h: 'Lên xe khởi hành', s: 'Bảy giờ sáng, cả lớp tập trung ở cổng trường, lên xe ca, vừa đi vừa hát vang.' },
      { h: 'Nghe giới thiệu làng gốm', s: 'Đến nơi, chị hướng dẫn viên giới thiệu làng gốm đã có hàng trăm năm và dẫn chúng em xem các lò nung.' },
      { h: 'Xem nghệ nhân làm gốm', s: 'Tiếp theo, chúng em xem bác nghệ nhân đặt cục đất lên bàn xoay, đôi tay khéo léo vuốt thành chiếc bình.' },
      { h: 'Tự tay nặn gốm', s: 'Sau đó, mỗi bạn được nặn một sản phẩm; em nặn chiếc cốc nhỏ, tay lấm lem đất sét.' },
      { h: 'Vẽ hoa văn, tô màu', s: 'Chúng em vẽ hoa văn và tô màu lên những chiếc đĩa gốm đã nung sẵn.' },
      { h: 'Chụp ảnh, mang quà về', s: 'Cuối cùng, cả lớp chụp ảnh lưu niệm và mang sản phẩm của mình về làm quà.' }
    ],
    highlight: [
      'Chiếc cốc em nặn lúc đầu cứ méo xệch, bác nghệ nhân cầm tay em vuốt lại, chỉ một lúc đã tròn trịa.',
      'Bạn Tuấn lỡ tay làm sụp chiếc bình đang nặn, cả nhóm cười ồ rồi cùng giúp bạn làm lại.'
    ],
    feel: [
      'Em thấy thích thú và khâm phục đôi bàn tay tài hoa của các nghệ nhân.',
      'Em hiểu rằng làm ra một sản phẩm gốm thật công phu, vất vả.'
    ],
    end: [
      'Chuyến trải nghiệm kết thúc nhưng em vẫn nhớ mãi cảm giác lần đầu được nặn gốm.',
      'Chiếc cốc nhỏ em làm giờ được đặt ngay ngắn trên bàn học.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, chúng em nghe giới thiệu về làng gốm.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, cả lớp xem bác nghệ nhân làm gốm.' },
        { w: 'Sau đó', use: 'Sau đó, mỗi bạn được tự tay nặn một sản phẩm.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, chúng em chụp ảnh và lên xe về trường.' }
      ] },
      { group: 'Từ ngữ về nghề gốm', items: [
        { w: 'bàn xoay', use: 'Cục đất quay tròn trên bàn xoay dưới tay bác nghệ nhân.' },
        { w: 'đất sét', use: 'Tay em lấm lem đất sét nhưng em vẫn cười tươi.' },
        { w: 'nghệ nhân', use: 'Bác nghệ nhân chỉ cho em cách vuốt miệng cốc.' },
        { w: 'lò nung', use: 'Chị hướng dẫn viên dẫn chúng em đi xem lò nung gốm.' },
        { w: 'hoa văn', use: 'Em vẽ hoa văn hình bông sen lên chiếc đĩa.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'háo hức', use: 'Cả lớp háo hức chờ đến lượt được nặn gốm.' },
        { w: 'thích thú', use: 'Em thích thú ngắm chiếc bình thành hình trên bàn xoay.' },
        { w: 'khâm phục', use: 'Em khâm phục đôi bàn tay khéo léo của bác nghệ nhân.' },
        { w: 'tài hoa', use: 'Những người thợ gốm thật tài hoa.' }
      ] }
    ]
  },
  {
    id: 'ev-chao-co', type: 'event', name: 'lễ chào cờ đầu tuần',
    keys: ['chào cờ', 'lễ chào cờ', 'chào cờ đầu tuần', 'buổi chào cờ'],
    topic: 'Thuật lại buổi lễ chào cờ đầu tuần ở trường em',
    intro: [
      'Sáng thứ Hai nào trường em cũng tổ chức lễ chào cờ ở sân trường.',
      'Toàn thể thầy cô giáo và học sinh đều có mặt, mặc đồng phục chỉnh tề, đeo khăn quàng đỏ.'
    ],
    steps: [
      { h: 'Tập trung xếp hàng', s: 'Đầu tiên, khi tiếng trống vang lên, các lớp nhanh chóng xếp hàng ngay ngắn dưới sân trường.' },
      { h: 'Nghi lễ chào cờ', s: 'Tiếp theo, bạn Liên đội trưởng hô "Nghiêm!", đội nghi lễ rước cờ, cả trường hát Quốc ca và Đội ca.' },
      { h: 'Nhận xét thi đua tuần', s: 'Sau đó, thầy Tổng phụ trách nhận xét nề nếp tuần qua và công bố lớp dẫn đầu thi đua.' },
      { h: 'Cô Hiệu trưởng dặn dò', s: 'Cô Hiệu trưởng phát động chủ điểm mới và nhắc nhở học sinh giữ gìn vệ sinh trường lớp.' },
      { h: 'Hoạt động theo chủ đề', s: 'Tiếp đến, các anh chị lớp 5 diễn một tiết mục ngắn về an toàn giao thông.' },
      { h: 'Các lớp về lớp', s: 'Cuối cùng, các lớp lần lượt về lớp trong tiếng nhạc vui tươi.' }
    ],
    highlight: [
      'Khi lá cờ đỏ sao vàng từ từ kéo lên, tung bay trong gió, cả sân trường im phăng phắc.',
      'Lớp em được nhận cờ thi đua, bạn lớp trưởng chạy lên nhận cờ trong tràng vỗ tay giòn giã.'
    ],
    feel: [
      'Lúc hát Quốc ca, em thấy bồi hồi và tự hào về Tổ quốc.',
      'Em vui sướng khi lớp mình được khen trước toàn trường.'
    ],
    end: [
      'Buổi chào cờ đầu tuần giúp em thêm yêu trường, yêu lớp.',
      'Em tự nhủ sẽ cố gắng học tập thật tốt trong tuần mới.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, các lớp xếp hàng ngay ngắn dưới sân.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, cả trường hát Quốc ca và Đội ca.' },
        { w: 'Sau đó', use: 'Sau đó, thầy Tổng phụ trách nhận xét thi đua.' },
        { w: 'Tiếp đến', use: 'Tiếp đến là tiết mục về an toàn giao thông.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, các lớp lần lượt về lớp học.' }
      ] },
      { group: 'Từ ngữ tả không khí', items: [
        { w: 'trang nghiêm', use: 'Lễ chào cờ diễn ra thật trang nghiêm.' },
        { w: 'chỉnh tề', use: 'Học sinh mặc đồng phục chỉnh tề, đeo khăn quàng đỏ.' },
        { w: 'im phăng phắc', use: 'Lúc kéo cờ, cả sân trường im phăng phắc.' },
        { w: 'tung bay', use: 'Lá cờ đỏ sao vàng tung bay trong nắng sớm.' },
        { w: 'ngay ngắn', use: 'Các hàng học sinh đứng thẳng tắp, ngay ngắn.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'bồi hồi', use: 'Em bồi hồi khi tiếng Quốc ca vang lên.' },
        { w: 'tự hào', use: 'Em tự hào khi lớp mình nhận cờ thi đua.' },
        { w: 'vui sướng', use: 'Cả lớp vui sướng reo lên khi nghe tên lớp mình.' },
        { w: 'thêm yêu', use: 'Buổi chào cờ giúp em thêm yêu ngôi trường của mình.' }
      ] }
    ]
  },
  {
    id: 'ev-viec-tot', type: 'event', name: 'một việc làm tốt',
    keys: ['việc làm tốt', 'việc tốt', 'giúp bà cụ', 'qua đường', 'của rơi', 'nhặt được'],
    topic: 'Thuật lại một việc làm tốt em đã tham gia',
    intro: [
      'Chiều thứ Tư tuần trước, trên đường đi học về, em đã làm được một việc tốt.',
      'Chuyện xảy ra ở ngã tư gần trường em, lúc tan học xe cộ qua lại đông đúc.'
    ],
    steps: [
      { h: 'Thấy bà cụ đứng chờ', s: 'Đầu tiên, em thấy một bà cụ tóc bạc, tay xách giỏ rau, đứng mãi bên đường mà không qua được.' },
      { h: 'Lễ phép hỏi thăm', s: 'Em lại gần lễ phép hỏi: "Bà ơi, bà muốn sang đường phải không ạ? Để cháu dắt bà!"' },
      { h: 'Dắt bà qua đường', s: 'Tiếp theo, em nắm tay bà, đợi đèn xanh rồi dắt bà đi chậm qua vạch kẻ đường.' },
      { h: 'Nhặt được chiếc ví', s: 'Sang đến nơi, em thấy một chiếc ví rơi dưới chân; hoá ra bà đánh rơi lúc vội vàng.' },
      { h: 'Trả lại cho bà', s: 'Sau đó, em trả lại chiếc ví, bà mở ra thấy tiền đi chợ vẫn còn nguyên, mừng rỡ cảm ơn em.' },
      { h: 'Về kể với mẹ', s: 'Cuối cùng, em về nhà kể cho mẹ nghe, mẹ xoa đầu khen em ngoan.' }
    ],
    highlight: [
      'Bàn tay bà gầy guộc, run run nắm chặt tay em giữa dòng xe cộ.',
      'Bà xoa đầu em và nói: "Cháu ngoan quá, bà cảm ơn cháu nhiều!"'
    ],
    feel: [
      'Em thấy lòng vui sướng, ấm áp lạ thường.',
      'Em hiểu rằng giúp đỡ người khác cũng là niềm vui của chính mình.'
    ],
    end: [
      'Việc làm nhỏ ấy khiến em nhớ mãi.',
      'Em tự hứa sẽ luôn sẵn lòng giúp đỡ mọi người xung quanh.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, em thấy một bà cụ đứng mãi bên đường.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, em nắm tay dắt bà qua đường.' },
        { w: 'Lúc ấy', use: 'Lúc ấy, em nhìn thấy một chiếc ví rơi dưới chân bà.' },
        { w: 'Sau đó', use: 'Sau đó, em trả lại chiếc ví cho bà.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, em vui vẻ đi về nhà kể cho mẹ nghe.' }
      ] },
      { group: 'Từ ngữ về việc làm tốt', items: [
        { w: 'giúp đỡ', use: 'Em giúp đỡ bà cụ qua đường an toàn.' },
        { w: 'lễ phép', use: 'Em lễ phép thưa với bà trước khi dắt bà đi.' },
        { w: 'nhặt được', use: 'Em nhặt được chiếc ví và trả lại ngay cho bà.' },
        { w: 'trả lại', use: 'Em trả lại chiếc ví còn nguyên tiền cho bà cụ.' },
        { w: 'tốt bụng', use: 'Bà khen em là một cô bé tốt bụng.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'vui sướng', use: 'Em vui sướng khi thấy bà mỉm cười.' },
        { w: 'ấm áp', use: 'Lời cảm ơn của bà làm lòng em ấm áp.' },
        { w: 'mừng rỡ', use: 'Bà mừng rỡ khi nhận lại chiếc ví.' },
        { w: 'nhớ mãi', use: 'Em sẽ nhớ mãi buổi chiều hôm ấy.' }
      ] }
    ]
  },
  {
    id: 'ev-le-hoi', type: 'event', name: 'hội đua thuyền ở quê',
    keys: ['lễ hội', 'ngày hội', 'hội đua thuyền', 'đua thuyền', 'lễ hội đình làng', 'hội làng'],
    topic: 'Thuật lại một lễ hội ở quê em',
    intro: [
      'Mùa xuân năm nay, em được về quê ngoại dự hội đua thuyền trên sông.',
      'Hội diễn ra vào ngày mùng sáu Tết, người trong làng và khách thập phương kéo đến xem đông nghịt.'
    ],
    steps: [
      { h: 'Sáng sớm ra bờ sông', s: 'Đầu tiên, từ sáng sớm, em theo ông ra bờ sông; cờ ngũ sắc cắm dọc đường, tiếng trống hội rộn ràng.' },
      { h: 'Lễ dâng hương ở đình', s: 'Tiếp theo, các cụ cao tuổi trong làng làm lễ dâng hương ở đình, cầu mưa thuận gió hoà.' },
      { h: 'Các thuyền vào vạch', s: 'Sau đó, năm chiếc thuyền sơn đủ màu dàn hàng ngang, mỗi thuyền có mười hai tay chèo mặc áo đồng phục.' },
      { h: 'Hiệu lệnh, đua tài', s: 'Hiệu lệnh vang lên, các thuyền lao vút đi, mái chèo khua nước trắng xoá theo nhịp trống.' },
      { h: 'Cổ vũ hai bên bờ', s: 'Hai bên bờ, người xem reo hò, vỗ tay, gọi tên đội của xóm mình đến khản cả giọng.' },
      { h: 'Trao giải, kết thúc', s: 'Cuối cùng, đội xóm Đông về nhất, ban tổ chức trao cờ và phần thưởng trong tiếng reo vang.' }
    ],
    highlight: [
      'Ở vòng cuối, thuyền xóm Đông và xóm Đoài bám sát nhau, về đích chỉ hơn nhau nửa mũi thuyền.',
      'Bác đứng ở mũi thuyền vừa gõ trống vừa hô "Dô ta!", cả đội chèo đều tăm tắp.'
    ],
    feel: [
      'Em thấy háo hức, hồi hộp như chính mình đang ngồi trên thuyền.',
      'Em tự hào về nét đẹp truyền thống của quê ngoại.'
    ],
    end: [
      'Hội đua thuyền khép lại nhưng tiếng trống, tiếng reo hò vẫn vang mãi trong em.',
      'Em mong Tết năm sau lại được về quê dự hội.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Từ sáng sớm', use: 'Từ sáng sớm, người dân đã kéo ra bờ sông.' },
        { w: 'Đầu tiên', use: 'Đầu tiên, các cụ làm lễ dâng hương ở đình.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, các đội thuyền dàn hàng ngang chờ hiệu lệnh.' },
        { w: 'Bỗng', use: 'Bỗng một hồi trống vang lên, các thuyền lao vút đi.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, đội xóm Đông giành chiến thắng.' }
      ] },
      { group: 'Từ ngữ tả không khí lễ hội', items: [
        { w: 'tưng bừng', use: 'Ngày hội đua thuyền diễn ra tưng bừng trên sông.' },
        { w: 'náo nhiệt', use: 'Hai bên bờ sông náo nhiệt tiếng reo hò.' },
        { w: 'đông nghịt', use: 'Người xem đứng đông nghịt dọc bờ đê.' },
        { w: 'lao vút', use: 'Những chiếc thuyền lao vút đi như tên bắn.' },
        { w: 'trắng xoá', use: 'Mái chèo khua nước trắng xoá cả mặt sông.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'háo hức', use: 'Em háo hức theo ông ra bờ sông từ sớm.' },
        { w: 'hồi hộp', use: 'Em hồi hộp nắm chặt tay ông khi hai thuyền bám sát nhau.' },
        { w: 'tự hào', use: 'Em tự hào về lễ hội truyền thống của quê ngoại.' },
        { w: 'nhớ mãi', use: 'Em nhớ mãi tiếng trống hội rộn ràng hôm ấy.' }
      ] }
    ]
  },
  {
    id: 'ev-di-tich', type: 'event', name: 'tham quan Văn Miếu – Quốc Tử Giám',
    keys: ['di tích', 'di tích lịch sử', 'tham quan di tích', 'văn miếu', 'quốc tử giám', 'khuê văn các'],
    topic: 'Thuật lại một buổi tham quan di tích lịch sử',
    intro: [
      'Nhân dịp kỉ niệm ngày Nhà giáo Việt Nam, lớp em được đi tham quan Văn Miếu – Quốc Tử Giám ở Hà Nội.',
      'Đi cùng chúng em có cô giáo chủ nhiệm và chị hướng dẫn viên của khu di tích.'
    ],
    steps: [
      { h: 'Đến cổng Văn Miếu', s: 'Đầu tiên, cả lớp xếp hàng trước cổng, nghe chị hướng dẫn viên kể đây là trường đại học đầu tiên của nước ta.' },
      { h: 'Ngắm Khuê Văn Các', s: 'Tiếp theo, chúng em đi qua những lớp cổng, ngắm Khuê Văn Các soi bóng xuống giếng Thiên Quang.' },
      { h: 'Xem bia tiến sĩ', s: 'Sau đó, chúng em đến khu bia tiến sĩ, những tấm bia đá đặt trên lưng rùa ghi tên các bậc hiền tài.' },
      { h: 'Dâng hương tưởng nhớ', s: 'Vào khu Thái Học, cả lớp nghe kể về thầy giáo Chu Văn An và cùng cô dâng hương tưởng nhớ.' },
      { h: 'Ghi chép, chụp ảnh', s: 'Cuối cùng, chúng em ghi chép điều mình học được và chụp ảnh lưu niệm bên Khuê Văn Các.' }
    ],
    highlight: [
      'Những tấm bia tiến sĩ xếp thành hàng thẳng tắp, rêu phong cổ kính, khiến em đứng ngắm mãi.',
      'Chị hướng dẫn viên dặn không xoa đầu rùa để giữ gìn di tích, ai cũng gật đầu làm theo.'
    ],
    feel: [
      'Em thấy trang nghiêm, xúc động trước truyền thống hiếu học của cha ông.',
      'Em tự hào vì nước mình có nhiều bậc hiền tài.'
    ],
    end: [
      'Chuyến tham quan giúp em hiểu thêm nhiều điều bổ ích về lịch sử nước nhà.',
      'Em tự nhủ phải chăm chỉ học tập để xứng đáng với cha ông.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, cả lớp xếp hàng trước cổng Văn Miếu.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, chúng em ngắm Khuê Văn Các.' },
        { w: 'Sau đó', use: 'Sau đó, chị hướng dẫn viên dẫn chúng em đến khu bia tiến sĩ.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, cả lớp chụp ảnh lưu niệm rồi ra về.' }
      ] },
      { group: 'Từ ngữ về di tích', items: [
        { w: 'cổ kính', use: 'Văn Miếu mang vẻ đẹp cổ kính giữa lòng Hà Nội.' },
        { w: 'rêu phong', use: 'Những tấm bia đá đã rêu phong theo năm tháng.' },
        { w: 'hiền tài', use: 'Bia tiến sĩ ghi tên những bậc hiền tài của đất nước.' },
        { w: 'hiếu học', use: 'Văn Miếu cho em hiểu về truyền thống hiếu học của dân tộc.' },
        { w: 'giữ gìn', use: 'Chúng em phải cùng nhau giữ gìn di tích lịch sử.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'trang nghiêm', use: 'Không khí ở khu Thái Học thật trang nghiêm.' },
        { w: 'tự hào', use: 'Em tự hào về những người tài giỏi của đất nước.' },
        { w: 'ngưỡng mộ', use: 'Em ngưỡng mộ thầy Chu Văn An, người thầy mẫu mực.' },
        { w: 'xúc động', use: 'Em xúc động khi thắp nén hương tưởng nhớ các bậc tiền nhân.' }
      ] }
    ]
  },
  {
    id: 'ev-trong-cay', type: 'event', name: 'buổi trồng cây ở trường',
    keys: ['trồng cây', 'tết trồng cây', 'buổi trồng cây', 'trồng cây ở trường'],
    topic: 'Thuật lại buổi trồng cây ở trường em',
    intro: [
      'Hưởng ứng Tết trồng cây đầu xuân, sáng thứ Bảy vừa qua, trường em tổ chức buổi trồng cây quanh sân trường.',
      'Tham gia có các thầy cô, học sinh khối 4, khối 5 và một số bác phụ huynh.'
    ],
    steps: [
      { h: 'Chuẩn bị dụng cụ', s: 'Từ hôm trước, mỗi tổ chuẩn bị xẻng nhỏ, bình tưới, găng tay; nhà trường chở về những cây bằng lăng, cây phượng con.' },
      { h: 'Nghe hướng dẫn', s: 'Đầu tiên, thầy giáo hướng dẫn cách đặt cây, lấp đất và tưới nước.' },
      { h: 'Đào hố, trộn phân', s: 'Tiếp theo, các bạn nam thay nhau đào hố, các bạn nữ trộn phân vào đất cho tơi xốp.' },
      { h: 'Đặt cây, vun đất', s: 'Sau đó, em giữ thẳng thân cây, bạn Hoa vun đất vào gốc rồi dùng tay nén chặt.' },
      { h: 'Tưới nước, cắm biển tên', s: 'Chúng em tưới đẫm gốc và cắm tấm biển nhỏ ghi tên lớp 4A cạnh cây.' },
      { h: 'Dọn dẹp, chụp ảnh', s: 'Cuối cùng, cả lớp thu dọn dụng cụ, rửa tay và chụp ảnh bên hàng cây mới trồng.' }
    ],
    highlight: [
      'Lúc đặt cây xuống hố, bầu đất bị vỡ, cả nhóm cuống quýt khum tay vun lại cho cây khỏi đổ.',
      'Mặt mũi, quần áo đứa nào cũng lấm lem đất nhưng ai cũng cười tươi.'
    ],
    feel: [
      'Em vui sướng vì đã góp thêm một cây xanh cho trường.',
      'Em mong cây mau lớn để mùa hè có bóng mát cho chúng em vui chơi.'
    ],
    end: [
      'Buổi trồng cây kết thúc trong niềm vui của mọi người.',
      'Từ hôm ấy, giờ ra chơi nào em cũng ghé thăm và tưới nước cho cây của lớp mình.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Từ hôm trước', use: 'Từ hôm trước, tổ em đã chuẩn bị đủ xẻng và bình tưới.' },
        { w: 'Đầu tiên', use: 'Đầu tiên, thầy giáo hướng dẫn cách trồng cây.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, các bạn nam thay nhau đào hố.' },
        { w: 'Sau đó', use: 'Sau đó, chúng em đặt cây và vun đất.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, cả lớp tưới nước và dọn dẹp dụng cụ.' }
      ] },
      { group: 'Từ ngữ về trồng cây', items: [
        { w: 'đào hố', use: 'Bạn Nam hì hục đào hố sâu ngang đầu gối.' },
        { w: 'vun gốc', use: 'Em cẩn thận vun gốc cho cây đứng vững.' },
        { w: 'tơi xốp', use: 'Đất trộn phân tơi xốp giúp cây mau bén rễ.' },
        { w: 'tưới đẫm', use: 'Chúng em tưới đẫm gốc cây sau khi trồng.' },
        { w: 'xanh tươi', use: 'Hàng cây non xanh tươi dưới nắng xuân.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'hăng hái', use: 'Cả lớp hăng hái tham gia trồng cây.' },
        { w: 'vui sướng', use: 'Em vui sướng khi cây của lớp đứng thẳng tắp.' },
        { w: 'lấm lem', use: 'Quần áo lấm lem đất nhưng ai cũng vui vẻ.' },
        { w: 'mong', use: 'Em mong cây bằng lăng mau lớn và nở hoa tím.' }
      ] }
    ]
  },
  {
    id: 'ev-khai-giang', type: 'event', name: 'ngày khai giảng',
    keys: ['khai giảng', 'lễ khai giảng', 'ngày khai giảng', 'năm học mới'],
    topic: 'Thuật lại buổi lễ khai giảng năm học mới ở trường em',
    intro: [
      'Sáng ngày 5 tháng 9, trường em long trọng tổ chức lễ khai giảng năm học mới.',
      'Đến dự có các bác lãnh đạo địa phương, thầy cô giáo, phụ huynh và toàn thể học sinh.'
    ],
    steps: [
      { h: 'Đến trường từ sớm', s: 'Từ sáu giờ rưỡi, em đã mặc đồng phục mới tinh, đeo khăn quàng đỏ, theo mẹ đến trường.' },
      { h: 'Đón học sinh lớp Một', s: 'Đầu tiên, cả trường vỗ tay chào đón các em lớp Một nắm tay nhau bước vào sân.' },
      { h: 'Chào cờ, hát Quốc ca', s: 'Tiếp theo là nghi lễ chào cờ, cả trường đứng nghiêm hát Quốc ca.' },
      { h: 'Văn nghệ chào mừng', s: 'Sau đó, các anh chị lớp 5 biểu diễn một tiết mục múa về ngày đầu tiên đi học rất duyên dáng.' },
      { h: 'Đánh trống khai trường', s: 'Thầy Hiệu trưởng đọc thư của Chủ tịch nước gửi ngành giáo dục rồi đánh hồi trống khai giảng.' },
      { h: 'Thả bóng bay, về lớp', s: 'Cuối cùng, những chùm bóng bay được thả lên trời, chúng em vui vẻ về lớp gặp cô chủ nhiệm.' }
    ],
    highlight: [
      'Tiếng trống khai giảng "Tùng! Tùng! Tùng!" vang lên giòn giã, lòng em rộn ràng khó tả.',
      'Những quả bóng bay xanh, đỏ, vàng bay lên bầu trời trong xanh, các bạn ngửa cổ nhìn theo reo hò.'
    ],
    feel: [
      'Em thấy náo nức, háo hức bước vào năm học mới.',
      'Em vui vì được gặp lại thầy cô, bạn bè sau ba tháng hè.'
    ],
    end: [
      'Lễ khai giảng năm nay để lại trong em nhiều ấn tượng đẹp.',
      'Em tự hứa sẽ chăm chỉ học tập để có một năm học thật nhiều điểm tốt.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Từ sáng sớm', use: 'Từ sáng sớm, sân trường đã rực rỡ cờ hoa.' },
        { w: 'Đầu tiên', use: 'Đầu tiên, cả trường chào đón các em lớp Một.' },
        { w: 'Tiếp theo', use: 'Tiếp theo là nghi lễ chào cờ trang nghiêm.' },
        { w: 'Sau đó', use: 'Sau đó, thầy Hiệu trưởng đánh trống khai giảng.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, chúng em thả bóng bay rồi về lớp.' }
      ] },
      { group: 'Từ ngữ tả không khí', items: [
        { w: 'long trọng', use: 'Lễ khai giảng được tổ chức long trọng.' },
        { w: 'rực rỡ', use: 'Sân trường rực rỡ cờ hoa và bóng bay.' },
        { w: 'giòn giã', use: 'Tiếng trống khai trường vang lên giòn giã.' },
        { w: 'tưng bừng', use: 'Cả trường tưng bừng trong ngày hội đến trường.' },
        { w: 'mới tinh', use: 'Em mặc bộ đồng phục mới tinh đến dự lễ.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'náo nức', use: 'Em náo nức chờ đón năm học mới.' },
        { w: 'rộn ràng', use: 'Nghe tiếng trống, lòng em rộn ràng khó tả.' },
        { w: 'bỡ ngỡ', use: 'Các em lớp Một còn bỡ ngỡ nắm chặt tay nhau.' },
        { w: 'háo hức', use: 'Em háo hức gặp lại cô giáo và các bạn.' }
      ] }
    ]
  },
  {
    id: 'ev-van-nghe-20-11', type: 'event', name: 'hội thi văn nghệ 20-11',
    keys: ['văn nghệ', 'hội thi văn nghệ', '20-11', '20/11', 'ngày nhà giáo việt nam'],
    topic: 'Thuật lại hội thi văn nghệ chào mừng ngày Nhà giáo Việt Nam 20-11',
    intro: [
      'Chào mừng ngày Nhà giáo Việt Nam 20-11, trường em tổ chức hội thi văn nghệ vào sáng thứ Bảy.',
      'Mỗi lớp góp hai tiết mục; lớp em tham gia một tiết mục múa hát và một tiết mục đọc thơ.'
    ],
    steps: [
      { h: 'Tập luyện cả tuần', s: 'Trước đó cả tuần, sau giờ học, lớp em ở lại tập dưới sự hướng dẫn của cô giáo âm nhạc.' },
      { h: 'Sân khấu rực rỡ', s: 'Sáng hôm thi, sân khấu được trang trí phông đỏ, hoa tươi và dòng chữ chào mừng ngày 20-11.' },
      { h: 'Khai mạc hội thi', s: 'Đầu tiên, thầy Hiệu trưởng phát biểu khai mạc, ban giám khảo là các thầy cô ngồi ở hàng ghế đầu.' },
      { h: 'Các lớp biểu diễn', s: 'Tiếp theo, các lớp lần lượt biểu diễn: có tốp ca, múa, kịch ngắn, có bạn chơi đàn organ.' },
      { h: 'Lớp em lên sân khấu', s: 'Đến lượt lớp em, mười bạn mặc áo dài vừa múa vừa hát một bài về thầy cô, em đứng ở hàng đầu.' },
      { h: 'Công bố giải, tặng hoa', s: 'Cuối cùng, ban giám khảo công bố kết quả, lớp em đạt giải Nhì và cả lớp chạy lên tặng hoa cô chủ nhiệm.' }
    ],
    highlight: [
      'Khi lớp em hát đến đoạn nói về bụi phấn vương trên tóc thầy cô, em thấy cô chủ nhiệm lặng lẽ lau nước mắt.',
      'Lúc bước ra sân khấu, tim em đập thình thịch, nhưng nghe tiếng các bạn cổ vũ, em bình tĩnh lại.'
    ],
    feel: [
      'Em vừa hồi hộp vừa vui sướng khi được biểu diễn tặng thầy cô.',
      'Em càng thêm kính yêu, biết ơn các thầy cô giáo.'
    ],
    end: [
      'Hội thi văn nghệ khép lại nhưng em nhớ mãi giây phút cả lớp cùng ôm lấy cô.',
      'Em sẽ chăm ngoan, học giỏi để làm món quà ý nghĩa nhất tặng thầy cô.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ trình tự', items: [
        { w: 'Trước đó', use: 'Trước đó cả tuần, lớp em đã ở lại tập luyện.' },
        { w: 'Đầu tiên', use: 'Đầu tiên, thầy Hiệu trưởng phát biểu khai mạc.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, các lớp lần lượt lên biểu diễn.' },
        { w: 'Đến lượt', use: 'Đến lượt lớp em, cả hội trường im lặng lắng nghe.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, ban giám khảo công bố kết quả.' }
      ] },
      { group: 'Từ ngữ về văn nghệ', items: [
        { w: 'biểu diễn', use: 'Lớp em biểu diễn tiết mục múa hát về thầy cô.' },
        { w: 'sân khấu', use: 'Sân khấu được trang trí bằng hoa tươi rực rỡ.' },
        { w: 'tốp ca', use: 'Tiết mục tốp ca của lớp 5A được vỗ tay rất lâu.' },
        { w: 'uyển chuyển', use: 'Các bạn nữ múa uyển chuyển trong tà áo dài.' },
        { w: 'cổ vũ', use: 'Cả lớp vẫy cờ cổ vũ các bạn biểu diễn.' }
      ] },
      { group: 'Từ ngữ chỉ cảm xúc', items: [
        { w: 'hồi hộp', use: 'Em hồi hộp chờ đến lượt lớp mình lên sân khấu.' },
        { w: 'thình thịch', use: 'Tim em đập thình thịch khi bước ra trước khán giả.' },
        { w: 'xúc động', use: 'Cô chủ nhiệm xúc động khi nhận bó hoa của cả lớp.' },
        { w: 'biết ơn', use: 'Em biết ơn thầy cô đã dạy dỗ chúng em nên người.' }
      ] }
    ]
  },

  /* ===================== VIẾT THƯ (letter) ===================== */
  {
    id: 'lt-ong-ba', type: 'letter', name: 'thư gửi ông bà',
    keys: ['thư cho ông bà', 'thư gửi ông bà', 'thư thăm ông bà', 'ông bà ở quê'],
    topic: 'Viết thư cho ông bà để thăm hỏi sức khoẻ',
    place: 'Hà Nội', greet: 'Ông bà kính yêu!',
    ask: [
      'Dạo này ông bà có khoẻ không ạ? Bệnh đau lưng của bà đã đỡ chưa ạ?',
      'Vụ lúa năm nay nhà mình có được mùa không ông? Đàn gà của bà đã nở thêm lứa nào chưa ạ?',
      'Cô Hoa và em Bống nhà bên cạnh vẫn hay sang chơi với ông bà chứ ạ?'
    ],
    tell: [
      'Cả nhà cháu vẫn khoẻ; bố mẹ bận đi làm nhưng tối nào cũng nhắc đến ông bà.',
      'Năm nay cháu học lớp 4, cô giáo chủ nhiệm rất hiền; giữa kì vừa rồi cháu được điểm 10 môn Toán.',
      'Cháu đã tự đạp xe đến trường và biết nấu cơm giúp mẹ rồi đấy ạ.',
      'Cây bưởi nhỏ ông cho cháu trồng ở ban công giờ đã ra mấy lá non xanh mướt.'
    ],
    wish: [
      'Cháu chúc ông bà luôn mạnh khoẻ, sống lâu trăm tuổi với con cháu.',
      'Cháu mong hè này được về quê thả diều với ông, nghe bà kể chuyện.'
    ],
    promise: [
      'Cháu hứa sẽ chăm ngoan, học giỏi để ông bà vui lòng.',
      'Cháu sẽ viết thư cho ông bà thường xuyên hơn.'
    ],
    sign: 'Cháu của ông bà',
    vocab: [
      { group: 'Lời thăm hỏi', items: [
        { w: 'có khoẻ không ạ', use: 'Dạo này ông bà có khoẻ không ạ?' },
        { w: 'đã đỡ chưa ạ', use: 'Bệnh đau lưng của bà đã đỡ chưa ạ?' },
        { w: 'vẫn bình an', use: 'Cháu mong ông bà ở quê vẫn bình an, vui vẻ.' },
        { w: 'được mùa', use: 'Năm nay nhà mình có được mùa lúa không ông?' }
      ] },
      { group: 'Từ ngữ thể hiện tình cảm', items: [
        { w: 'kính yêu', use: 'Cháu viết thư này gửi ông bà kính yêu của cháu.' },
        { w: 'nhớ ông bà', use: 'Ở thành phố, cháu nhớ ông bà nhiều lắm.' },
        { w: 'mong mỏi', use: 'Cháu mong mỏi từng ngày được về quê thăm ông bà.' },
        { w: 'sum họp', use: 'Cháu mong Tết đến để cả nhà được sum họp bên ông bà.' }
      ] },
      { group: 'Lời cuối thư', items: [
        { w: 'Cháu chúc', use: 'Cháu chúc ông bà luôn mạnh khoẻ.' },
        { w: 'sống lâu trăm tuổi', use: 'Cháu mong ông bà sống lâu trăm tuổi với con cháu.' },
        { w: 'Cháu hứa', use: 'Cháu hứa sẽ học thật giỏi để ông bà vui lòng.' },
        { w: 'Cháu của ông bà', use: 'Cuối thư, em kí tên dưới dòng chữ "Cháu của ông bà".' }
      ] }
    ]
  },
  {
    id: 'lt-ban-o-xa', type: 'letter', name: 'thư gửi bạn ở xa',
    keys: ['thư cho bạn', 'thư gửi bạn', 'bạn ở xa', 'chuyển trường', 'người bạn ở xa', 'kể về trường lớp'],
    topic: 'Viết thư cho một người bạn ở xa để thăm hỏi và kể về trường lớp của em',
    place: 'Đà Nẵng', greet: 'Phương thân mến!',
    ask: [
      'Từ ngày cậu theo bố mẹ chuyển vào Cần Thơ, cậu đã quen với trường mới chưa?',
      'Lớp mới của cậu có đông không, cô giáo có hiền không?',
      'Ở đó trời nóng lắm phải không? Cậu đã được đi chợ nổi trên sông chưa?'
    ],
    tell: [
      'Lớp 4B mình vẫn vậy, chỗ ngồi cạnh cửa sổ của cậu giờ bạn Hà ngồi, nhưng cả lớp vẫn quen gọi là "chỗ của Phương".',
      'Tuần trước lớp mình đạt giải Nhất hội thi kể chuyện, mình được cô chọn kể chuyện "Ông Trạng thả diều".',
      'Cây phượng trước lớp vừa được các bác cắt tỉa, sân trường thoáng hơn hẳn.',
      'Mình đang tập đá cầu để thi Hội khoẻ Phù Đổng, giá có cậu tập cùng thì vui biết mấy.'
    ],
    wish: [
      'Chúc cậu luôn mạnh khoẻ, học giỏi và có thêm nhiều bạn mới.',
      'Mong cậu sớm viết thư kể cho mình nghe về trường mới nhé.'
    ],
    promise: [
      'Hè này mình sẽ xin bố mẹ cho vào thăm cậu.',
      'Mình hứa sẽ giữ gìn quyển truyện cậu tặng như kỉ vật của tình bạn.'
    ],
    sign: 'Bạn thân của cậu',
    vocab: [
      { group: 'Lời hỏi thăm bạn', items: [
        { w: 'Dạo này', use: 'Dạo này cậu có khoẻ không?' },
        { w: 'đã quen', use: 'Cậu đã quen với trường mới chưa?' },
        { w: 'Việc học của cậu', use: 'Việc học của cậu ở trường mới thế nào rồi?' },
        { w: 'bạn mới', use: 'Cậu đã có thêm nhiều bạn mới chưa?' }
      ] },
      { group: 'Từ ngữ kể tin tức, tình bạn', items: [
        { w: 'nhớ cậu', use: 'Cả lớp mình ai cũng nhớ cậu lắm.' },
        { w: 'thân thiết', use: 'Hai đứa mình đã thân thiết từ hồi lớp Một.' },
        { w: 'vẫn vậy', use: 'Lớp mình vẫn vậy, vẫn vui và ồn ào như ngày cậu còn ở đây.' },
        { w: 'kỉ vật', use: 'Quyển truyện cậu tặng là kỉ vật mình quý nhất.' },
        { w: 'giá có cậu', use: 'Giá có cậu ở đây thì buổi đá cầu vui biết mấy.' }
      ] },
      { group: 'Lời cuối thư', items: [
        { w: 'Chúc cậu', use: 'Chúc cậu luôn mạnh khoẻ và học giỏi.' },
        { w: 'Mong cậu', use: 'Mong cậu sớm viết thư trả lời mình nhé.' },
        { w: 'Mình hứa', use: 'Mình hứa hè này sẽ vào thăm cậu.' },
        { w: 'Bạn thân của cậu', use: 'Mình kí tên dưới dòng "Bạn thân của cậu".' }
      ] }
    ]
  },
  {
    id: 'lt-ban-nuoc-ngoai', type: 'letter', name: 'thư gửi bạn nước ngoài',
    keys: ['bạn nước ngoài', 'bạn nhỏ ở nước ngoài', 'giới thiệu về quê hương', 'quê hương việt nam', 'thư giới thiệu quê hương'],
    topic: 'Viết thư cho một bạn nhỏ ở nước ngoài giới thiệu về quê hương em',
    place: 'Huế', greet: 'Bạn Emily thân mến!',
    ask: [
      'Bạn có khoẻ không? Ở nước Anh bây giờ đã sang mùa đông lạnh giá chưa?',
      'Bạn có thích học tiếng Việt không? Bạn đã biết nói "xin chào" và "cảm ơn" chưa?'
    ],
    tell: [
      'Mình tên là Lan, học lớp 4 ở thành phố Huế, miền Trung Việt Nam; quê mình có dòng sông Hương xanh biếc và cầu Tràng Tiền soi bóng.',
      'Ở Huế có Đại Nội cổ kính với những cung điện mái ngói vàng, nơi các vua triều Nguyễn từng sống.',
      'Món ăn mình thích nhất là bún bò Huế cay cay và bánh bèo nhỏ xíu đựng trong những chiếc chén con.',
      'Tết Nguyên đán là ngày vui nhất, nhà nào cũng gói bánh chưng, trẻ em được mặc áo mới và nhận lì xì.'
    ],
    wish: [
      'Chúc bạn và gia đình mạnh khoẻ, đón Giáng sinh thật vui.',
      'Mong một ngày bạn sang Việt Nam để mình đưa bạn đi thuyền trên sông Hương.'
    ],
    promise: [
      'Mình sẽ gửi kèm thư mấy tấm bưu ảnh về Huế để bạn xem.',
      'Mình sẽ chăm học tiếng Anh để trò chuyện với bạn dễ dàng hơn.'
    ],
    sign: 'Người bạn Việt Nam của bạn',
    vocab: [
      { group: 'Từ ngữ giới thiệu quê hương', items: [
        { w: 'cổ kính', use: 'Đại Nội Huế mang vẻ đẹp cổ kính, uy nghiêm.' },
        { w: 'thơ mộng', use: 'Sông Hương thơ mộng chảy qua lòng thành phố.' },
        { w: 'xanh biếc', use: 'Nước sông Hương xanh biếc như dải lụa.' },
        { w: 'đặc sản', use: 'Bún bò là đặc sản nổi tiếng của Huế.' },
        { w: 'mến khách', use: 'Người Huế hiền hoà và rất mến khách.' }
      ] },
      { group: 'Lời hỏi thăm, làm quen', items: [
        { w: 'Bạn có khoẻ không', use: 'Bạn có khoẻ không, Emily?' },
        { w: 'Mình tên là', use: 'Mình tên là Lan, năm nay mười tuổi.' },
        { w: 'Bạn có thích', use: 'Bạn có thích những món ăn Việt Nam không?' },
        { w: 'kết bạn', use: 'Mình rất vui khi được kết bạn với bạn qua thư.' }
      ] },
      { group: 'Lời cuối thư', items: [
        { w: 'Chúc bạn', use: 'Chúc bạn và gia đình đón Giáng sinh vui vẻ.' },
        { w: 'Mong một ngày', use: 'Mong một ngày bạn sẽ đến thăm Việt Nam.' },
        { w: 'gửi kèm', use: 'Mình gửi kèm mấy tấm bưu ảnh về sông Hương.' },
        { w: 'Người bạn Việt Nam', use: 'Cuối thư, mình kí tên là "Người bạn Việt Nam của bạn".' }
      ] }
    ]
  },
  {
    id: 'lt-thay-co-cu', type: 'letter', name: 'thư gửi thầy cô cũ',
    keys: ['thư gửi thầy cô', 'thư cho thầy cô', 'thầy cô cũ', 'cô giáo cũ', 'thầy giáo cũ'],
    topic: 'Viết thư thăm hỏi thầy cô giáo cũ',
    place: 'Hải Phòng', greet: 'Cô Thu kính mến!',
    ask: [
      'Dạo này cô có khoẻ không ạ? Giọng cô đã hết khàn chưa ạ?',
      'Năm nay cô chủ nhiệm lớp mấy ạ? Các bạn lớp mới có ngoan không cô?',
      'Bé Bin con cô đã đi mẫu giáo chưa ạ?'
    ],
    tell: [
      'Năm nay em đã lên lớp 4, cô chủ nhiệm mới của em cũng rất tận tình.',
      'Em vẫn giữ thói quen viết chữ nắn nót cô dạy; tháng trước em được giải Ba hội thi Viết chữ đẹp của trường.',
      'Em còn nhớ mãi hôm em quên áo mưa, cô đã đưa áo của cô cho em mặc về.',
      'Các bạn lớp 3A cũ vẫn hay rủ nhau nhắc về những giờ đọc truyện của cô.'
    ],
    wish: [
      'Nhân ngày 20-11, em kính chúc cô luôn mạnh khoẻ, hạnh phúc và mãi yêu nghề.',
      'Em mong sẽ sớm được gặp lại cô.'
    ],
    promise: [
      'Em hứa sẽ chăm chỉ học tập để không phụ lòng cô.',
      'Hè này em sẽ cùng các bạn về trường cũ thăm cô.'
    ],
    sign: 'Học trò cũ của cô',
    vocab: [
      { group: 'Lời lẽ kính trọng', items: [
        { w: 'kính mến', use: 'Cô Thu kính mến, em rất nhớ cô.' },
        { w: 'kính chúc', use: 'Em kính chúc cô luôn mạnh khoẻ và hạnh phúc.' },
        { w: 'có khoẻ không ạ', use: 'Dạo này cô có khoẻ không ạ?' },
        { w: 'thưa cô', use: 'Thưa cô, năm nay em đã lên lớp 4 rồi ạ.' }
      ] },
      { group: 'Từ ngữ nói về công ơn thầy cô', items: [
        { w: 'tận tình', use: 'Cô đã tận tình dạy em từng nét chữ.' },
        { w: 'công dạy dỗ', use: 'Em luôn ghi nhớ công dạy dỗ của cô.' },
        { w: 'biết ơn', use: 'Em biết ơn cô đã cho em mượn áo mưa hôm ấy.' },
        { w: 'phụ lòng', use: 'Em sẽ cố gắng để không phụ lòng cô.' }
      ] },
      { group: 'Lời cuối thư', items: [
        { w: 'Em hứa', use: 'Em hứa sẽ luôn chăm ngoan, học giỏi.' },
        { w: 'mãi yêu nghề', use: 'Em chúc cô mãi yêu nghề và mãi trẻ trung.' },
        { w: 'Em mong', use: 'Em mong sớm được về thăm cô.' },
        { w: 'Học trò cũ của cô', use: 'Em kí tên dưới dòng chữ "Học trò cũ của cô".' }
      ] }
    ]
  },
  {
    id: 'lt-uoc-mo', type: 'letter', name: 'thư kể về ước mơ',
    keys: ['ước mơ', 'ước mơ của em', 'mơ ước', 'thư kể về ước mơ'],
    topic: 'Viết thư kể cho bạn nghe về ước mơ của em',
    place: 'Thành phố Hồ Chí Minh', greet: 'Khoa thân mến!',
    ask: [
      'Lâu rồi mình chưa nhận được thư cậu, dạo này cậu có khoẻ không?',
      'Cậu vẫn mê vẽ tranh như hồi trước chứ? Ước mơ trở thành hoạ sĩ của cậu thế nào rồi?'
    ],
    tell: [
      'Mình muốn kể cậu nghe ước mơ của mình: lớn lên mình muốn trở thành bác sĩ nhi khoa để chữa bệnh cho các em nhỏ.',
      'Mình có ước mơ ấy từ hôm em gái mình sốt cao, cô bác sĩ khám cho em rất dịu dàng và chỉ vài ngày em đã khỏi.',
      'Để thực hiện ước mơ, mình đang cố học thật tốt môn Toán và Khoa học, đọc thêm sách về cơ thể người.',
      'Mình còn tham gia câu lạc bộ Chữ thập đỏ của trường, được học cách băng bó vết thương nhỏ.'
    ],
    wish: [
      'Chúc cậu luôn vui vẻ và sớm thực hiện được ước mơ làm hoạ sĩ.',
      'Mong cậu viết thư kể cho mình nghe về những bức tranh mới của cậu.'
    ],
    promise: [
      'Mình hứa sẽ cố gắng hết sức để ước mơ thành sự thật.',
      'Khi nào cậu vẽ tranh về bệnh viện, mình sẽ làm "bác sĩ" ngồi mẫu cho cậu.'
    ],
    sign: 'Bạn thân của cậu',
    vocab: [
      { group: 'Từ ngữ về ước mơ', items: [
        { w: 'ước mơ', use: 'Ước mơ của mình là trở thành bác sĩ nhi khoa.' },
        { w: 'mơ ước', use: 'Mình mơ ước được chữa bệnh cho các em nhỏ.' },
        { w: 'thực hiện', use: 'Để thực hiện ước mơ, mình chăm học môn Khoa học.' },
        { w: 'thành sự thật', use: 'Mình tin ước mơ của chúng mình sẽ thành sự thật.' },
        { w: 'nghề', use: 'Nghề bác sĩ giúp mọi người khoẻ mạnh.' }
      ] },
      { group: 'Từ ngữ về sự cố gắng', items: [
        { w: 'cố gắng', use: 'Mình đang cố gắng học tốt tất cả các môn.' },
        { w: 'kiên trì', use: 'Muốn thành bác sĩ, mình phải kiên trì học tập.' },
        { w: 'chăm chỉ', use: 'Mình chăm chỉ đọc sách về cơ thể người mỗi tối.' },
        { w: 'quyết tâm', use: 'Mình quyết tâm theo đuổi ước mơ đến cùng.' }
      ] },
      { group: 'Lời hỏi thăm và cuối thư', items: [
        { w: 'Dạo này', use: 'Dạo này cậu vẫn vẽ tranh đều chứ?' },
        { w: 'Chúc cậu', use: 'Chúc cậu sớm trở thành một hoạ sĩ tài năng.' },
        { w: 'Mình hứa', use: 'Mình hứa sẽ kể cậu nghe mỗi bước tiến của mình.' },
        { w: 'Mong cậu', use: 'Mong cậu sớm viết thư trả lời mình.' }
      ] }
    ]
  }
);

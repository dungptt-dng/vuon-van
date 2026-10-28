/* Kho kiến thức: CON VẬT và CÂY CỐI (bài văn miêu tả) */
VV.KB.push(
  /* ===================== CON VẬT ===================== */
  {
    id: 'an-meo', type: 'animal', name: 'con mèo',
    keys: ['con mèo', 'mèo', 'chú mèo', 'mèo mướp', 'mèo tam thể'],
    intro: [
      'Nhà em có nuôi một chú mèo mướp tên là Mimi.',
      'Năm ngoái, bà ngoại cho em một chú mèo con xinh xắn.',
      'Trong các con vật nuôi, em quý nhất chú mèo tam thể của nhà em.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng chiếc ấm tích, thân hình thon dài',
        'trông lúc nào cũng sạch sẽ, gọn gàng',
        'nằm cuộn tròn như một cuộn len to'
      ] },
      { part: 'Đầu', items: [
        'cái đầu tròn như quả cam nhỏ',
        'đôi mắt tròn xoe, ban đêm sáng như hai hòn bi ve',
        'đôi tai nhỏ dựng đứng, bộ ria trắng vểnh lên'
      ] },
      { part: 'Bộ lông', items: [
        'bộ lông vàng xen vằn đen, mượt như nhung',
        'sờ vào thấy mềm và ấm áp',
        'lúc nào cũng được chú liếm cho bóng mượt'
      ] },
      { part: 'Chân và đuôi', items: [
        'bốn chân thon nhỏ, có đệm thịt êm ái',
        'móng vuốt sắc giấu kín trong lớp đệm thịt',
        'cái đuôi dài, thỉnh thoảng lại ngoe nguẩy'
      ] }
    ],
    acts: [
      { part: 'Khi bắt chuột', items: [
        'nằm im phục sẵn ở góc bếp, mắt không chớp',
        'nhẹ nhàng rón rén bước, không một tiếng động',
        'nhảy phốc tới, vồ gọn con chuột'
      ] },
      { part: 'Khi chơi đùa', items: [
        'đuổi theo cuộn len lăn khắp nhà',
        'dụi đầu vào chân em, kêu meo meo nũng nịu',
        'nằm sưởi nắng ngoài hiên, lim dim ngủ'
      ] },
      { part: 'Khi ăn', items: [
        'ăn từ tốn, nhai cá ngon lành',
        'ăn xong lấy chân lau mặt rất cẩn thận',
        'thích nhất là món cơm trộn cá kho'
      ] }
    ],
    bond: [
      'Mỗi khi em đi học về, chú mèo lại chạy ra cổng đón em.',
      'Buổi tối, chú hay nằm cuộn tròn bên cạnh em lúc em học bài.',
      'Có lần chú bị ốm, bỏ ăn, em lo lắng đến mất ngủ.'
    ],
    end: [
      'Em rất yêu chú mèo, chú như một người bạn nhỏ của em.',
      'Em sẽ chăm sóc chú thật chu đáo để chú luôn khoẻ mạnh.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'tròn xoe', use: 'Đôi mắt chú mèo tròn xoe như hai hòn bi ve.' },
        { w: 'mượt như nhung', use: 'Bộ lông của chú mèo mượt như nhung.' },
        { w: 'vểnh lên', use: 'Bộ ria trắng của chú mèo vểnh lên trông rất oai.' },
        { w: 'thon dài', use: 'Chú mèo có thân hình thon dài, nhanh nhẹn.' },
        { w: 'êm ái', use: 'Bàn chân mèo có đệm thịt êm ái nên bước đi không ra tiếng.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'rón rén', use: 'Chú mèo rón rén bước lại gần chỗ con chuột.' },
        { w: 'vồ', use: 'Chú nhảy phốc tới vồ gọn con chuột nhắt.' },
        { w: 'dụi đầu', use: 'Chú mèo dụi đầu vào chân em như muốn làm nũng.' },
        { w: 'lim dim', use: 'Chú mèo nằm sưởi nắng, mắt lim dim.' },
        { w: 'ngoe nguẩy', use: 'Cái đuôi của chú mèo cứ ngoe nguẩy mãi.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như hai hòn bi ve', use: 'Ban đêm, mắt mèo sáng như hai hòn bi ve.' },
        { w: 'như một cuộn len', use: 'Chú mèo nằm cuộn tròn như một cuộn len to.' },
        { w: 'như quả cam nhỏ', use: 'Cái đầu chú mèo tròn như quả cam nhỏ.' },
        { w: 'như một người bạn', use: 'Chú mèo quấn quýt bên em như một người bạn.' }
      ] }
    ]
  },
  {
    id: 'an-cho', type: 'animal', name: 'con chó',
    keys: ['con chó', 'chó', 'chú chó', 'cún', 'con cún', 'chó con'],
    intro: [
      'Nhà em nuôi một chú chó tên là Vàng, ai cũng quý.',
      'Sinh nhật năm ngoái, bố tặng em một chú cún con.',
      'Người bạn thân thiết nhất của em ở nhà là chú chó Mực.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to gần bằng cái ghế đẩu, thân hình chắc nịch',
        'dáng đi nhanh nhẹn, khoẻ khoắn',
        'lúc đứng gác trông rất oai vệ'
      ] },
      { part: 'Đầu', items: [
        'đôi mắt đen láy, nhìn em rất hiền',
        'đôi tai vểnh lên, nghe ngóng mọi tiếng động',
        'cái mũi đen ươn ướt, đánh hơi rất giỏi'
      ] },
      { part: 'Bộ lông', items: [
        'bộ lông vàng óng như tơ',
        'lông ở cổ dày, sờ vào thấy ấm',
        'mỗi lần tắm xong lông lại bông mượt'
      ] },
      { part: 'Chân và đuôi', items: [
        'bốn chân thẳng, chạy nhanh như gió',
        'móng chân cứng, bới đất rất khoẻ',
        'cái đuôi cong, mừng ai là ngoáy tít'
      ] }
    ],
    acts: [
      { part: 'Khi canh nhà', items: [
        'nằm ở cổng, tai luôn vểnh lên nghe ngóng',
        'thấy người lạ là sủa gâu gâu vang cả xóm',
        'ban đêm đi quanh sân canh giữ cẩn thận'
      ] },
      { part: 'Khi gặp người thân', items: [
        'chạy ra cổng, ngoáy tít đuôi mừng rỡ',
        'chồm hai chân trước lên người em',
        'liếm tay em, rên ư ử như muốn nói chuyện'
      ] },
      { part: 'Khi ăn và chơi', items: [
        'ăn cơm trộn xương ngon lành, tóp tép',
        'đuổi theo quả bóng chạy khắp sân',
        'gặm khúc xương, nằm khoanh tròn ngủ trưa'
      ] }
    ],
    bond: [
      'Chiều nào em đi học về, chú Vàng cũng đứng đợi ở cổng.',
      'Có lần nhà em suýt mất trộm, chú sủa vang đánh thức cả nhà.',
      'Em thường chơi ném bóng với chú trên bãi cỏ sau nhà.'
    ],
    end: [
      'Em yêu chú chó như một thành viên trong gia đình.',
      'Em mong chú luôn khoẻ mạnh để mãi làm bạn với em.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'chắc nịch', use: 'Chú chó có thân hình chắc nịch, khoẻ mạnh.' },
        { w: 'đen láy', use: 'Đôi mắt đen láy của chú chó nhìn em rất hiền.' },
        { w: 'vàng óng', use: 'Bộ lông vàng óng của chú chó bóng lên dưới nắng.' },
        { w: 'oai vệ', use: 'Lúc đứng gác cổng, chú chó trông rất oai vệ.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'ngoáy tít', use: 'Thấy em về, chú chó ngoáy tít cái đuôi.' },
        { w: 'sủa', use: 'Hễ có người lạ, chú chó lại sủa gâu gâu.' },
        { w: 'đánh hơi', use: 'Chú chó đánh hơi rất giỏi, tìm ra cả chiếc dép em giấu.' },
        { w: 'chồm', use: 'Chú chó chồm hai chân trước lên người em mừng rỡ.' },
        { w: 'nghe ngóng', use: 'Chú chó nằm ở cổng, đôi tai nghe ngóng mọi tiếng động.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'nhanh như gió', use: 'Chú chó chạy nhanh như gió đuổi theo quả bóng.' },
        { w: 'như tơ', use: 'Bộ lông chú chó mềm như tơ.' },
        { w: 'như một người bảo vệ', use: 'Ban đêm, chú chó canh nhà như một người bảo vệ.' },
        { w: 'như muốn nói chuyện', use: 'Chú chó rên ư ử như muốn nói chuyện với em.' }
      ] }
    ]
  },
  {
    id: 'an-ga-trong', type: 'animal', name: 'con gà trống',
    keys: ['con gà trống', 'gà trống', 'chú gà trống'],
    intro: [
      'Nhà em có nuôi một chú gà trống rất đẹp.',
      'Mẹ mua về một chú gà trống con, nay chú đã lớn phổng phao.',
      'Sáng nào em cũng thức dậy nhờ tiếng gáy của chú gà trống.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng cái nồi cơm, dáng cao, ngực ưỡn ra',
        'bước đi đĩnh đạc như một vị tướng',
        'đứng nghiêng đầu trông rất oai'
      ] },
      { part: 'Đầu', items: [
        'cái mào đỏ chót như bông hoa mào gà',
        'đôi mắt tròn, sáng như hạt cườm',
        'cái mỏ vàng, nhọn và cứng'
      ] },
      { part: 'Bộ lông', items: [
        'lông cổ dài óng ánh màu đỏ tía',
        'lông cánh nâu sẫm xen sắc xanh biếc',
        'đuôi cong vồng lên, nhiều màu rực rỡ'
      ] },
      { part: 'Chân', items: [
        'đôi chân cao, vàng ươm, có vảy',
        'cựa nhọn như chiếc gai sắc',
        'móng chân cứng, bới đất tìm mồi'
      ] }
    ],
    acts: [
      { part: 'Khi gáy', items: [
        'sáng sớm nhảy lên đống rơm cao',
        'vỗ cánh phành phạch rồi rướn cổ lên',
        'gáy ò ó o vang khắp xóm'
      ] },
      { part: 'Khi kiếm ăn', items: [
        'bới đất tìm giun, kêu tục tục gọi gà mái',
        'nhường mồi ngon cho đàn gà',
        'mổ thóc thoăn thoắt, không sót một hạt'
      ] },
      { part: 'Khi canh giữ đàn', items: [
        'ngẩng cao đầu, mắt nhìn quanh cảnh giác',
        'xù lông, dang cánh đuổi kẻ lạ',
        'chiều tối dẫn đàn gà về chuồng'
      ] }
    ],
    bond: [
      'Sáng nào em cũng mang thóc ra cho chú gà ăn.',
      'Tiếng gáy của chú như chiếc đồng hồ báo thức gọi em dậy đi học.',
      'Có lần chú dũng cảm đuổi con diều hâu, bảo vệ đàn gà con.'
    ],
    end: [
      'Em rất quý chú gà trống chăm chỉ và dũng cảm.',
      'Em sẽ chăm sóc chú thật tốt để chú mãi gáy vang mỗi sớm mai.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'đỏ chót', use: 'Cái mào đỏ chót của chú gà trống nổi bật giữa sân.' },
        { w: 'óng ánh', use: 'Lông cổ chú gà trống óng ánh dưới nắng sớm.' },
        { w: 'cong vồng', use: 'Cái đuôi cong vồng của chú gà trống trông như cầu vồng nhỏ.' },
        { w: 'vàng ươm', use: 'Đôi chân chú gà trống vàng ươm, có vảy.' },
        { w: 'đĩnh đạc', use: 'Chú gà trống bước đi đĩnh đạc quanh sân.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'gáy', use: 'Mỗi sáng, chú gà trống gáy ò ó o vang cả xóm.' },
        { w: 'vỗ cánh phành phạch', use: 'Trước khi gáy, chú vỗ cánh phành phạch.' },
        { w: 'rướn cổ', use: 'Chú gà trống rướn cổ lên cất tiếng gáy.' },
        { w: 'bới', use: 'Chú gà trống bới đất tìm giun cho đàn gà.' },
        { w: 'cảnh giác', use: 'Chú gà trống ngẩng cao đầu, cảnh giác nhìn quanh.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như một vị tướng', use: 'Chú gà trống oai vệ như một vị tướng.' },
        { w: 'như bông hoa mào gà', use: 'Cái mào chú đỏ rực như bông hoa mào gà.' },
        { w: 'như chiếc đồng hồ báo thức', use: 'Tiếng gáy của chú gà trống như chiếc đồng hồ báo thức.' },
        { w: 'như hạt cườm', use: 'Đôi mắt chú gà trống sáng như hạt cườm.' }
      ] }
    ]
  },
  {
    id: 'an-ga-mai', type: 'animal', name: 'con gà mái (và đàn gà con)',
    keys: ['con gà mái', 'gà mái', 'gà mẹ', 'gà con', 'đàn gà con', 'đàn gà'],
    intro: [
      'Nhà em có một cô gà mái hoa mơ vừa nở được đàn con.',
      'Bà em nuôi một chị gà mái rất đảm đang.',
      'Mùa xuân năm nay, chị gà mái nhà em đã ấp nở mười chú gà con.'
    ],
    look: [
      { part: 'Gà mẹ', items: [
        'thân hình tròn trịa, đầy đặn',
        'bộ lông nâu vàng điểm đốm trắng như hoa mơ',
        'mào nhỏ, đỏ tươi; mắt tròn, hiền hậu'
      ] },
      { part: 'Đàn gà con', items: [
        'nhỏ xíu, tròn như những cục bông',
        'lông tơ vàng mượt như tơ',
        'mỏ nhỏ xinh, đôi chân tăm hồng hồng'
      ] },
      { part: 'Tiếng kêu', items: [
        'gà mẹ kêu tục tục gọi con',
        'gà con kêu chiếp chiếp suốt ngày',
        'đẻ trứng xong gà mẹ cục tác inh ỏi'
      ] }
    ],
    acts: [
      { part: 'Khi ấp trứng', items: [
        'nằm im trong ổ rơm suốt mấy tuần liền',
        'xoè rộng cánh ủ ấm cho trứng',
        'thỉnh thoảng lấy mỏ đảo trứng nhẹ nhàng'
      ] },
      { part: 'Khi dẫn con đi kiếm ăn', items: [
        'bới đất tìm giun rồi gọi con lại ăn',
        'đàn con lon ton chạy theo sau mẹ',
        'gà con tranh nhau mổ thóc lách chách'
      ] },
      { part: 'Khi che chở con', items: [
        'thấy diều hâu liền xù lông, kêu thất thanh',
        'xoè cánh cho đàn con chui vào trốn',
        'tối đến ủ cả đàn con dưới đôi cánh'
      ] }
    ],
    bond: [
      'Chiều nào em cũng rắc tấm cho đàn gà con ăn.',
      'Em thích ngắm đàn gà con chui rúc dưới cánh mẹ, chỉ ló ra những cái đầu nhỏ.',
      'Có lần một chú gà con bị lạc, em đã tìm và mang trả về cho gà mẹ.'
    ],
    end: [
      'Nhìn gà mẹ chăm con, em lại nhớ đến tình thương của mẹ em.',
      'Em mong đàn gà con mau lớn, khoẻ mạnh.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'tròn trịa', use: 'Chị gà mái có thân hình tròn trịa, đầy đặn.' },
        { w: 'hoa mơ', use: 'Bộ lông hoa mơ của gà mẹ điểm những đốm trắng xinh xắn.' },
        { w: 'nhỏ xíu', use: 'Những chú gà con nhỏ xíu chạy lăng xăng quanh mẹ.' },
        { w: 'lông tơ', use: 'Lớp lông tơ vàng của gà con mềm mại vô cùng.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'ấp', use: 'Gà mẹ kiên nhẫn ấp trứng suốt ba tuần liền.' },
        { w: 'lon ton', use: 'Đàn gà con lon ton chạy theo mẹ.' },
        { w: 'chiếp chiếp', use: 'Gà con kêu chiếp chiếp đòi mẹ.' },
        { w: 'xoè cánh', use: 'Gà mẹ xoè cánh che chở cho đàn con.' },
        { w: 'cục tác', use: 'Đẻ xong quả trứng, gà mái cục tác inh ỏi.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như những cục bông', use: 'Đàn gà con tròn như những cục bông vàng.' },
        { w: 'như tơ', use: 'Lông gà con vàng mượt như tơ.' },
        { w: 'như một người mẹ hiền', use: 'Gà mái chăm con như một người mẹ hiền.' },
        { w: 'như chiếc ô', use: 'Đôi cánh gà mẹ xoè ra như chiếc ô che cho đàn con.' }
      ] }
    ]
  },
  {
    id: 'an-tho', type: 'animal', name: 'con thỏ',
    keys: ['con thỏ', 'thỏ', 'chú thỏ', 'thỏ trắng'],
    intro: [
      'Nhà em có nuôi một đôi thỏ trắng rất đáng yêu.',
      'Hôm sinh nhật, cô em tặng em một chú thỏ con.',
      'Ở góc vườn nhà em có một chiếc chuồng nhỏ, đó là nhà của chú thỏ Bông.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng chiếc bình tích, tròn như cục bông',
        'lúc ngồi thu lu trông như nắm tuyết',
        'thân hình mềm mại, nhẹ nhàng'
      ] },
      { part: 'Đầu', items: [
        'đôi tai dài dựng đứng, mỏng và hồng',
        'đôi mắt đỏ hồng long lanh như hạt ngọc',
        'cái mũi hồng lúc nào cũng hít hít, ria trắng'
      ] },
      { part: 'Bộ lông', items: [
        'bộ lông trắng muốt như bông',
        'lông dày, sờ vào mềm và ấm',
        'mỗi lần chú chải lông trông rất ngộ'
      ] },
      { part: 'Chân và đuôi', items: [
        'hai chân trước ngắn, hai chân sau dài và khoẻ',
        'bàn chân có lớp lông dày, bước đi êm',
        'cái đuôi ngắn cũn như một nắm bông'
      ] }
    ],
    acts: [
      { part: 'Khi ăn', items: [
        'hai chân trước ôm củ cà rốt',
        'nhấm nháp từng chút, hai má phồng phồng',
        'thích ăn rau muống, lá bắp cải non'
      ] },
      { part: 'Khi chạy nhảy', items: [
        'nhảy tưng tưng khắp bãi cỏ',
        'chỉ cần một cú nhún là vọt xa',
        'nghe tiếng động lạ thì dựng tai lên nghe ngóng'
      ] },
      { part: 'Khi nghỉ ngơi', items: [
        'nằm thu lu trong góc chuồng',
        'lấy chân trước rửa mặt, vuốt tai',
        'dụi đầu vào tay em khi được vuốt ve'
      ] }
    ],
    bond: [
      'Chiều nào em cũng hái rau tươi cho chú thỏ ăn.',
      'Em thường bế chú thỏ ra bãi cỏ cho chú chạy nhảy.',
      'Có lần chú thỏ trốn ra vườn, cả nhà phải đi tìm mãi mới thấy.'
    ],
    end: [
      'Em rất yêu chú thỏ trắng hiền lành, đáng yêu.',
      'Em sẽ chăm sóc chú thật chu đáo để chú lớn nhanh.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'trắng muốt', use: 'Chú thỏ có bộ lông trắng muốt như bông.' },
        { w: 'dựng đứng', use: 'Đôi tai thỏ dài dựng đứng trên đầu.' },
        { w: 'long lanh', use: 'Đôi mắt đỏ hồng của chú thỏ long lanh như hạt ngọc.' },
        { w: 'ngắn cũn', use: 'Cái đuôi ngắn cũn của chú thỏ trông thật ngộ.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'nhấm nháp', use: 'Chú thỏ nhấm nháp củ cà rốt ngon lành.' },
        { w: 'nhảy tưng tưng', use: 'Chú thỏ nhảy tưng tưng khắp bãi cỏ.' },
        { w: 'hít hít', use: 'Cái mũi hồng của chú thỏ cứ hít hít liên tục.' },
        { w: 'thu lu', use: 'Chú thỏ nằm thu lu trong góc chuồng.' },
        { w: 'vuốt ve', use: 'Chú thỏ rất thích được em vuốt ve.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như cục bông', use: 'Chú thỏ con tròn như cục bông trắng.' },
        { w: 'như hạt ngọc', use: 'Mắt thỏ đỏ hồng như hạt ngọc.' },
        { w: 'như nắm tuyết', use: 'Chú thỏ ngồi thu lu trông như nắm tuyết.' },
        { w: 'như hai chiếc lá', use: 'Đôi tai thỏ dựng lên như hai chiếc lá non.' }
      ] }
    ]
  },
  {
    id: 'an-trau', type: 'animal', name: 'con trâu',
    keys: ['con trâu', 'trâu', 'chú trâu', 'bác trâu'],
    intro: [
      'Ở quê nội em, nhà nào cũng có một con trâu để cày ruộng.',
      'Ông em nuôi một chú trâu khoẻ mạnh, cả nhà gọi là chú Mộng.',
      'Con trâu là người bạn thân thiết của nhà nông.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'thân hình to lớn, vạm vỡ, chắc khoẻ',
        'lưng rộng và phẳng như tấm phản',
        'bụng to tròn, trông rất bệ vệ'
      ] },
      { part: 'Đầu', items: [
        'đôi sừng cong cong như hai lưỡi liềm',
        'đôi mắt to, tròn, đen và hiền lành',
        'cái mũi to, đeo sợi thừng để dắt'
      ] },
      { part: 'Da và lông', items: [
        'làn da đen bóng, dày và cứng',
        'lông thưa, ngắn, cứng như rễ tre',
        'tắm xong da bóng loáng dưới nắng'
      ] },
      { part: 'Chân và đuôi', items: [
        'bốn chân to, chắc như bốn cột nhà',
        'móng chân xẻ đôi, bước chắc trên bùn',
        'cái đuôi dài, phe phẩy đuổi ruồi muỗi'
      ] }
    ],
    acts: [
      { part: 'Khi cày ruộng', items: [
        'kéo cày đều bước trên thửa ruộng',
        'đi theo tiếng hò "vắt, diệt" của bác nông dân',
        'làm việc từ sáng sớm đến trưa không nghỉ'
      ] },
      { part: 'Khi ăn và nghỉ', items: [
        'gặm cỏ ngoài bãi, nhai rau ráu',
        'nằm nhai lại, mắt lim dim',
        'đầm mình trong vũng nước cho mát'
      ] },
      { part: 'Với trẻ chăn trâu', items: [
        'để các bạn nhỏ ngồi vắt vẻo trên lưng',
        'ngoan ngoãn theo về khi chiều tối',
        'thở phì phò, cọ đầu vào người chủ'
      ] }
    ],
    bond: [
      'Mỗi lần về quê, em lại theo anh họ đi chăn trâu.',
      'Em từng được ngồi trên lưng trâu, vừa sợ vừa thích.',
      'Nhìn chú trâu cày ruộng vất vả, em càng thương chú hơn.'
    ],
    end: [
      'Con trâu hiền lành, chăm chỉ thật xứng là đầu cơ nghiệp của nhà nông.',
      'Em mong chú trâu luôn khoẻ để giúp ông bà cày cấy.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'vạm vỡ', use: 'Chú trâu có thân hình vạm vỡ, chắc khoẻ.' },
        { w: 'đen bóng', use: 'Làn da đen bóng của chú trâu loáng nước sau khi tắm.' },
        { w: 'cong cong', use: 'Đôi sừng trâu cong cong trông rất oai.' },
        { w: 'hiền lành', use: 'Đôi mắt chú trâu to tròn, hiền lành.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'kéo cày', use: 'Chú trâu kéo cày đều bước trên ruộng.' },
        { w: 'gặm cỏ', use: 'Buổi chiều, chú trâu thong thả gặm cỏ ngoài đê.' },
        { w: 'nhai lại', use: 'Chú trâu nằm dưới gốc tre nhai lại.' },
        { w: 'đầm mình', use: 'Trưa hè, chú trâu đầm mình trong ao cho mát.' },
        { w: 'phe phẩy', use: 'Cái đuôi trâu phe phẩy đuổi ruồi.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như hai lưỡi liềm', use: 'Đôi sừng trâu cong như hai lưỡi liềm.' },
        { w: 'như bốn cột nhà', use: 'Bốn chân trâu chắc như bốn cột nhà.' },
        { w: 'như tấm phản', use: 'Lưng trâu rộng và phẳng như tấm phản.' },
        { w: 'như người bạn', use: 'Chú trâu gắn bó với nhà nông như người bạn thân.' }
      ] }
    ]
  },
  {
    id: 'an-lon', type: 'animal', name: 'con lợn',
    keys: ['con lợn', 'lợn', 'chú lợn', 'con heo', 'heo', 'lợn con'],
    intro: [
      'Nhà bà ngoại em có nuôi mấy chú lợn con rất ngộ nghĩnh.',
      'Mẹ em mua về một chú lợn giống, cả nhà gọi là chú Ủn.',
      'Trong các con vật ở quê, em thấy chú lợn là đáng yêu nhất.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'thân hình tròn trùng trục, béo ú',
        'bụng tròn xoe, gần chạm đất',
        'đi lại ục ịch, chậm chạp'
      ] },
      { part: 'Đầu', items: [
        'cái mõm dài, mũi hếch có hai lỗ tròn',
        'đôi tai to như hai chiếc lá mít, cụp xuống',
        'đôi mắt nhỏ, lúc nào cũng híp lại'
      ] },
      { part: 'Da và lông', items: [
        'làn da hồng hồng, căng bóng',
        'lông thưa, ngắn, hơi cứng',
        'nằm lâu trong chuồng hay lấm lem bùn đất'
      ] },
      { part: 'Chân và đuôi', items: [
        'bốn chân ngắn ngủn, đỡ cái thân nặng',
        'móng chân nhỏ, xẻ đôi',
        'cái đuôi xoắn tít như chiếc lò xo'
      ] }
    ],
    acts: [
      { part: 'Khi ăn', items: [
        'nghe tiếng gõ máng là chạy ra kêu ụt ịt',
        'chúi mõm vào máng ăn tóp tép',
        'ăn xong bụng căng tròn, nằm thở phì phò'
      ] },
      { part: 'Khi ngủ', items: [
        'nằm lăn ra ngủ, ngáy khò khò',
        'mấy chú lợn con nằm sát vào nhau cho ấm',
        'ngủ say đến mức gọi mãi không dậy'
      ] },
      { part: 'Khi chơi', items: [
        'dùng mõm ủn ủn rơm trong chuồng',
        'các chú lợn con đuổi nhau quanh chuồng',
        'thích được gãi lưng, nằm im tận hưởng'
      ] }
    ],
    bond: [
      'Mỗi lần về quê, em lại xin bà cho em cho lợn ăn.',
      'Em thích nhất là gãi lưng cho chú lợn, chú nằm im híp mắt lại.',
      'Nhìn chú lợn ăn ngon lành, em thấy rất vui.'
    ],
    end: [
      'Chú lợn tuy chậm chạp nhưng rất ngộ nghĩnh, đáng yêu.',
      'Em mong chú lợn ăn nhiều, mau lớn.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'tròn trùng trục', use: 'Chú lợn có thân hình tròn trùng trục.' },
        { w: 'béo ú', use: 'Chú lợn con béo ú, trông rất đáng yêu.' },
        { w: 'ngắn ngủn', use: 'Bốn chân ngắn ngủn của chú lợn đỡ cái thân nặng nề.' },
        { w: 'xoắn tít', use: 'Cái đuôi chú lợn xoắn tít lại.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'ụt ịt', use: 'Thấy em mang cám tới, chú lợn kêu ụt ịt.' },
        { w: 'tóp tép', use: 'Chú lợn ăn cám tóp tép ngon lành.' },
        { w: 'ục ịch', use: 'Chú lợn đi lại ục ịch trong chuồng.' },
        { w: 'ủn', use: 'Chú lợn dùng mõm ủn đống rơm.' },
        { w: 'ngáy khò khò', use: 'Ăn no, chú lợn nằm ngáy khò khò.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như hai chiếc lá mít', use: 'Đôi tai chú lợn to như hai chiếc lá mít.' },
        { w: 'như chiếc lò xo', use: 'Cái đuôi chú lợn xoắn như chiếc lò xo.' },
        { w: 'như quả bóng', use: 'Ăn no, bụng chú lợn căng tròn như quả bóng.' },
        { w: 'như cái ống', use: 'Cái mõm dài của chú lợn trông như cái ống nhỏ.' }
      ] }
    ]
  },
  {
    id: 'an-vit', type: 'animal', name: 'con vịt',
    keys: ['con vịt', 'vịt', 'chú vịt', 'đàn vịt', 'vịt con'],
    intro: [
      'Bà ngoại em nuôi một đàn vịt ở bên bờ ao.',
      'Mùa hè vừa rồi, em được bà cho nuôi một chú vịt con.',
      'Mỗi lần về quê, em đều ra bờ ao ngắm đàn vịt bơi lội.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng chiếc bình nước, thân bầu bầu',
        'dáng đi lạch bạch, lắc lư',
        'khi bơi trông như chiếc thuyền nhỏ'
      ] },
      { part: 'Đầu và mỏ', items: [
        'cái đầu nhỏ, cổ hơi dài',
        'cái mỏ dẹt, màu vàng như chiếc thìa',
        'đôi mắt đen nhỏ như hạt đậu'
      ] },
      { part: 'Bộ lông', items: [
        'vịt con lông vàng mượt như tơ',
        'vịt lớn lông trắng hoặc nâu xám',
        'lông không thấm nước, lặn xong vẫn khô'
      ] },
      { part: 'Chân', items: [
        'đôi chân ngắn, màu vàng cam',
        'các ngón chân có màng như mái chèo',
        'đuôi ngắn, cong lên, hay ngoe nguẩy'
      ] }
    ],
    acts: [
      { part: 'Khi bơi lội', items: [
        'nhảy ùm xuống ao, bơi thong thả',
        'chân quạt nước như hai mái chèo',
        'chúi đầu xuống nước, chổng đuôi lên mò mồi'
      ] },
      { part: 'Khi kiếm ăn', items: [
        'lấy mỏ sục bùn tìm ốc, tôm tép',
        'tranh nhau ăn thóc, kêu cạp cạp',
        'nuốt chửng con ốc nhỏ'
      ] },
      { part: 'Khi lên bờ', items: [
        'đi lạch bạch nối đuôi nhau',
        'giũ lông cho nước bắn tung toé',
        'rúc mỏ vào cánh rỉa lông, nằm nghỉ'
      ] }
    ],
    bond: [
      'Chiều nào em cũng ra bờ ao gọi vịt về chuồng.',
      'Em thích nhìn đàn vịt lặn ngụp, chổng đuôi lên trông rất buồn cười.',
      'Có lần em cùng bà đi nhặt trứng vịt, trứng to và trắng hồng.'
    ],
    end: [
      'Đàn vịt làm cho mặt ao quê em thêm vui nhộn.',
      'Em mong đàn vịt luôn khoẻ mạnh và đẻ thật nhiều trứng.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'bầu bầu', use: 'Chú vịt có thân hình bầu bầu như quả bí nhỏ.' },
        { w: 'mỏ dẹt', use: 'Chú vịt dùng cái mỏ dẹt sục bùn tìm ốc.' },
        { w: 'có màng', use: 'Chân vịt có màng nên bơi rất giỏi.' },
        { w: 'vàng mượt', use: 'Những chú vịt con lông vàng mượt chạy theo mẹ.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'lạch bạch', use: 'Đàn vịt đi lạch bạch về chuồng.' },
        { w: 'cạp cạp', use: 'Đàn vịt kêu cạp cạp đòi ăn.' },
        { w: 'lặn ngụp', use: 'Mấy chú vịt lặn ngụp dưới ao cả buổi.' },
        { w: 'rỉa lông', use: 'Lên bờ, chú vịt ngồi rỉa lông cho khô.' },
        { w: 'sục', use: 'Chú vịt sục mỏ xuống bùn tìm tôm tép.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như chiếc thuyền nhỏ', use: 'Chú vịt bơi trên mặt ao như chiếc thuyền nhỏ.' },
        { w: 'như mái chèo', use: 'Đôi chân vịt quạt nước như mái chèo.' },
        { w: 'như chiếc thìa', use: 'Mỏ vịt dẹt và vàng như chiếc thìa.' },
        { w: 'như hạt đậu', use: 'Mắt vịt đen nhỏ như hạt đậu.' }
      ] }
    ]
  },
  {
    id: 'an-chao-mao', type: 'animal', name: 'chú chim chào mào',
    keys: ['chim chào mào', 'chào mào', 'chú chim chào mào', 'con chim chào mào'],
    intro: [
      'Bố em nuôi một chú chim chào mào trong chiếc lồng treo ở hiên nhà.',
      'Sáng nào trên cây ổi trước nhà em cũng có một chú chào mào ghé hót.',
      'Trong các loài chim, em thích nhất chú chim chào mào.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'nhỏ nhắn, chỉ bằng nắm tay em',
        'dáng thon gọn, nhanh nhẹn',
        'đậu trên cành trông như một quả ớt chín'
      ] },
      { part: 'Đầu', items: [
        'cái mào đen nhọn dựng đứng như chóp nón',
        'hai bên má có chòm lông đỏ tươi',
        'đôi mắt đen nhánh, cái mỏ nhỏ và nhọn'
      ] },
      { part: 'Bộ lông', items: [
        'lưng và cánh màu nâu xám',
        'ngực và bụng trắng ngà, mịn màng',
        'phần lông dưới đuôi đỏ như quả ớt chín'
      ] },
      { part: 'Chân và đuôi', items: [
        'đôi chân nhỏ, bám chắc vào cành cây',
        'cái đuôi dài, xoè ra khi bay',
        'đôi cánh nhỏ vỗ nhanh thoăn thoắt'
      ] }
    ],
    acts: [
      { part: 'Khi hót', items: [
        'sáng sớm nhảy lên cành cao nhất',
        'ngẩng đầu hót líu lo, trong trẻo',
        'tiếng hót lảnh lót vang khắp khu vườn'
      ] },
      { part: 'Khi kiếm ăn', items: [
        'mổ những quả ớt, quả ổi chín đỏ',
        'bắt sâu bọ trên lá cây',
        'thích ăn chuối chín, uống nước trong lồng'
      ] },
      { part: 'Khi nhảy nhót', items: [
        'chuyền từ cành này sang cành khác',
        'nghiêng đầu, đảo mắt nhìn quanh',
        'rỉa lông, rũ cánh dưới nắng sớm'
      ] }
    ],
    bond: [
      'Sáng nào em cũng thức dậy cùng tiếng hót của chú chào mào.',
      'Em thường giúp bố thay nước và cho chú ăn chuối chín.',
      'Có lần em đứng thật im dưới gốc ổi để ngắm chú hót, quên cả giờ đi học.'
    ],
    end: [
      'Tiếng hót của chú chào mào làm cho ngôi nhà em thêm vui.',
      'Em mong chú chim mãi ở lại khu vườn nhà em.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'nhỏ nhắn', use: 'Chú chào mào nhỏ nhắn chỉ bằng nắm tay em.' },
        { w: 'dựng đứng', use: 'Cái mào đen của chú chào mào dựng đứng trên đầu.' },
        { w: 'đỏ tươi', use: 'Hai bên má chú chào mào có chòm lông đỏ tươi.' },
        { w: 'đen nhánh', use: 'Đôi mắt đen nhánh của chú chào mào đảo liên hồi.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'líu lo', use: 'Chú chào mào hót líu lo trên cành ổi.' },
        { w: 'lảnh lót', use: 'Tiếng hót lảnh lót của chú chào mào vang khắp vườn.' },
        { w: 'chuyền', use: 'Chú chào mào chuyền từ cành này sang cành khác.' },
        { w: 'mổ', use: 'Chú chào mào mổ lấy quả ớt chín đỏ.' },
        { w: 'nghiêng đầu', use: 'Chú chào mào nghiêng đầu nhìn em như làm quen.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như chóp nón', use: 'Cái mào chú chào mào nhọn như chóp nón.' },
        { w: 'như quả ớt chín', use: 'Lông dưới đuôi chú chào mào đỏ như quả ớt chín.' },
        { w: 'như tiếng sáo', use: 'Tiếng hót của chú chào mào trong như tiếng sáo.' },
        { w: 'như một ca sĩ nhỏ', use: 'Chú chào mào đứng trên cành hót như một ca sĩ nhỏ.' }
      ] }
    ]
  },
  {
    id: 'an-rua', type: 'animal', name: 'con rùa',
    keys: ['con rùa', 'rùa', 'chú rùa', 'rùa con'],
    intro: [
      'Anh trai em có nuôi một chú rùa nhỏ trong chậu nước.',
      'Hôm đi chợ cá cảnh, bố mua cho em một chú rùa con.',
      'Con vật chậm chạp mà em yêu quý nhất là chú rùa của em.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng bàn tay em, dẹt và tròn',
        'trông như một chiếc đĩa nhỏ biết bò',
        'nằm im thì giống như một hòn đá'
      ] },
      { part: 'Mai rùa', items: [
        'chiếc mai cứng, khum khum như cái bát úp',
        'trên mai có những ô vuông xếp đều nhau',
        'mai màu xanh xám, đôi chỗ có vệt vàng'
      ] },
      { part: 'Đầu', items: [
        'cái đầu nhỏ, thò ra thụt vào',
        'đôi mắt nhỏ, đen, chớp chậm rãi',
        'cái mỏ cứng, hơi nhọn'
      ] },
      { part: 'Chân và đuôi', items: [
        'bốn chân ngắn, da sần sùi',
        'móng chân nhỏ, bám chắc khi bò',
        'cái đuôi ngắn, nhọn như chiếc gai'
      ] }
    ],
    acts: [
      { part: 'Khi bò', items: [
        'bò chậm rãi, thong thả từng bước',
        'vươn cổ ra nhìn quanh rồi mới đi',
        'leo lên hòn đá trong chậu để phơi nắng'
      ] },
      { part: 'Khi gặp nguy hiểm', items: [
        'rụt đầu, rụt chân vào trong mai',
        'nằm im như hòn đá, không nhúc nhích',
        'đợi yên rồi mới từ từ thò đầu ra'
      ] },
      { part: 'Khi ăn và bơi', items: [
        'đớp thức ăn rất nhanh',
        'thích ăn rau xanh, tép nhỏ',
        'bơi bằng bốn chân như bốn mái chèo nhỏ'
      ] }
    ],
    bond: [
      'Chiều nào em cũng thay nước và cho chú rùa ăn.',
      'Em thường đặt chú lên bàn tay, chờ chú thò đầu ra chào em.',
      'Nhìn chú rùa chậm mà chắc, em nhớ đến câu chuyện Rùa và Thỏ.'
    ],
    end: [
      'Chú rùa nhỏ dạy em biết kiên nhẫn từng bước một.',
      'Em sẽ chăm sóc chú rùa thật tốt.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'khum khum', use: 'Chiếc mai rùa khum khum như cái bát úp.' },
        { w: 'cứng', use: 'Chiếc mai cứng giúp chú rùa che chở thân mình.' },
        { w: 'sần sùi', use: 'Bốn chân rùa ngắn, da sần sùi.' },
        { w: 'xanh xám', use: 'Mai rùa màu xanh xám, có những ô vuông đều nhau.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'chậm rãi', use: 'Chú rùa bò chậm rãi quanh chậu nước.' },
        { w: 'rụt đầu', use: 'Nghe tiếng động, chú rùa rụt đầu vào mai.' },
        { w: 'thò ra', use: 'Một lúc sau, cái đầu nhỏ của chú rùa lại thò ra.' },
        { w: 'vươn cổ', use: 'Chú rùa vươn cổ nhìn quanh rồi mới bò đi.' },
        { w: 'phơi nắng', use: 'Chú rùa thích leo lên hòn đá phơi nắng.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như cái bát úp', use: 'Mai rùa khum lên như cái bát úp.' },
        { w: 'như một hòn đá', use: 'Rụt hết vào mai, chú rùa nằm im như một hòn đá.' },
        { w: 'như chiếc đĩa nhỏ', use: 'Chú rùa con dẹt và tròn như chiếc đĩa nhỏ.' },
        { w: 'như mái chèo', use: 'Bốn chân rùa quạt nước như mái chèo.' }
      ] }
    ]
  },
  {
    id: 'an-voi', type: 'animal', name: 'con voi (ở vườn thú)',
    keys: ['con voi', 'voi', 'chú voi', 'bác voi'],
    intro: [
      'Chủ nhật vừa rồi, em được bố mẹ đưa đi chơi vườn thú.',
      'Trong chuyến tham quan vườn thú, con vật em nhớ nhất là chú voi.',
      'Lần đầu được tận mắt nhìn thấy chú voi ở vườn thú, em vô cùng thích thú.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to lớn như một ngôi nhà nhỏ',
        'thân hình đồ sộ, nặng nề',
        'đứng sừng sững giữa khu chuồng'
      ] },
      { part: 'Đầu', items: [
        'cái vòi dài, mềm dẻo, buông xuống tận đất',
        'đôi tai to như hai chiếc quạt nan',
        'hai chiếc ngà trắng, cong vút'
      ] },
      { part: 'Da', items: [
        'làn da xám, dày và nhăn nheo',
        'trên da có vài sợi lông cứng lơ thơ',
        'đôi mắt nhỏ xíu so với thân hình'
      ] },
      { part: 'Chân và đuôi', items: [
        'bốn chân to như bốn cột đình',
        'bước đi chậm rãi, chắc nịch',
        'cái đuôi nhỏ như sợi dây, có chùm lông'
      ] }
    ],
    acts: [
      { part: 'Khi ăn uống', items: [
        'dùng vòi cuốn bó cỏ đưa vào miệng',
        'hút nước bằng vòi rồi phun vào miệng',
        'nhận chuối từ tay người trông thú'
      ] },
      { part: 'Khi tắm và chơi', items: [
        'hút nước phun lên lưng như vòi hoa sen',
        'vẫy đôi tai to phành phạch cho mát',
        'tung bụi đất lên mình để đuổi côn trùng'
      ] },
      { part: 'Khi chào khách', items: [
        'giơ cao vòi như đang vẫy chào',
        'kêu một tiếng vang như tiếng kèn',
        'gật gù cái đầu to khiến mọi người cười vang'
      ] }
    ],
    bond: [
      'Em đứng ngắm chú voi rất lâu, không muốn rời đi.',
      'Khi chú voi giơ vòi lên, em và các bạn reo hò thích thú.',
      'Em đã chụp một tấm ảnh với chú voi để làm kỉ niệm.'
    ],
    end: [
      'Chú voi to lớn mà hiền lành để lại trong em nhiều ấn tượng.',
      'Em mong được quay lại vườn thú để thăm chú voi.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'đồ sộ', use: 'Chú voi có thân hình đồ sộ.' },
        { w: 'sừng sững', use: 'Chú voi đứng sừng sững giữa khu chuồng.' },
        { w: 'nhăn nheo', use: 'Làn da xám của chú voi dày và nhăn nheo.' },
        { w: 'cong vút', use: 'Hai chiếc ngà trắng của chú voi cong vút.' },
        { w: 'mềm dẻo', use: 'Cái vòi mềm dẻo giúp chú voi cuốn được cả bó cỏ.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'cuốn', use: 'Chú voi dùng vòi cuốn bó mía đưa vào miệng.' },
        { w: 'phun', use: 'Chú voi hút nước rồi phun lên lưng.' },
        { w: 'phành phạch', use: 'Đôi tai to của chú voi vẫy phành phạch.' },
        { w: 'chậm rãi', use: 'Chú voi bước đi chậm rãi quanh chuồng.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như hai chiếc quạt nan', use: 'Đôi tai voi to như hai chiếc quạt nan.' },
        { w: 'như bốn cột đình', use: 'Bốn chân voi to như bốn cột đình.' },
        { w: 'như một ngôi nhà nhỏ', use: 'Chú voi to lớn như một ngôi nhà nhỏ.' },
        { w: 'như vòi hoa sen', use: 'Chú voi phun nước như vòi hoa sen.' }
      ] }
    ]
  },
  {
    id: 'an-khi', type: 'animal', name: 'con khỉ (ở vườn thú)',
    keys: ['con khỉ', 'khỉ', 'chú khỉ', 'bầy khỉ'],
    intro: [
      'Hè vừa rồi, em được đi chơi vườn thú cùng cả lớp.',
      'Ở vườn thú, em thích nhất là khu chuồng khỉ.',
      'Chú khỉ ở vườn thú là con vật làm em cười nhiều nhất.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng đứa trẻ lên ba, dáng nhanh nhẹn',
        'lúc ngồi trông giống như một cậu bé tinh nghịch',
        'thân hình gầy, linh hoạt'
      ] },
      { part: 'Đầu và mặt', items: [
        'khuôn mặt đỏ hồng, ít lông',
        'đôi mắt tròn, đen, đảo liên tục',
        'cái miệng rộng, hay nhăn nhở'
      ] },
      { part: 'Bộ lông', items: [
        'bộ lông màu nâu xám, mượt',
        'lông ở lưng dày hơn ở bụng',
        'thường xuyên được các bạn khỉ bắt chấy cho'
      ] },
      { part: 'Tay chân và đuôi', items: [
        'đôi tay dài, bàn tay giống tay người',
        'chân cũng cầm nắm được như tay',
        'cái đuôi dài, đu cành rất khéo'
      ] }
    ],
    acts: [
      { part: 'Khi leo trèo', items: [
        'chuyền cành thoăn thoắt',
        'đu mình trên dây như làm xiếc',
        'nhảy từ cây này sang cây khác nhẹ như bay'
      ] },
      { part: 'Khi ăn', items: [
        'cầm quả chuối, bóc vỏ rất khéo',
        'nhai nhồm nhoàm, mắt vẫn láo liên',
        'giành nhau quả ngô với bạn'
      ] },
      { part: 'Khi trêu đùa', items: [
        'nhăn mặt, nhe răng trêu khách',
        'bắt chước động tác của mọi người',
        'gãi đầu gãi tai trông rất buồn cười'
      ] }
    ],
    bond: [
      'Em và các bạn đứng xem bầy khỉ rất lâu, ai cũng cười vang.',
      'Khi một chú khỉ bắt chước em vẫy tay, em thích thú vô cùng.',
      'Về nhà, em kể mãi cho bố mẹ nghe về bầy khỉ tinh nghịch.'
    ],
    end: [
      'Chú khỉ tinh nghịch đã cho em một buổi tham quan thật vui.',
      'Em mong lại được đến thăm bầy khỉ ở vườn thú.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'nhanh nhẹn', use: 'Chú khỉ có dáng người nhanh nhẹn.' },
        { w: 'đỏ hồng', use: 'Khuôn mặt chú khỉ đỏ hồng, ít lông.' },
        { w: 'tinh nghịch', use: 'Đôi mắt tinh nghịch của chú khỉ đảo liên tục.' },
        { w: 'nâu xám', use: 'Bộ lông nâu xám của chú khỉ mượt mà.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'chuyền cành', use: 'Chú khỉ chuyền cành thoăn thoắt.' },
        { w: 'đu', use: 'Chú khỉ đu mình trên sợi dây như làm xiếc.' },
        { w: 'bóc', use: 'Chú khỉ bóc vỏ chuối rất khéo.' },
        { w: 'nhăn mặt', use: 'Chú khỉ nhăn mặt trêu mọi người.' },
        { w: 'bắt chước', use: 'Chú khỉ bắt chước em vẫy tay chào.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như một cậu bé tinh nghịch', use: 'Chú khỉ ngồi gãi đầu như một cậu bé tinh nghịch.' },
        { w: 'như làm xiếc', use: 'Chú khỉ nhào lộn như làm xiếc.' },
        { w: 'nhẹ như bay', use: 'Chú khỉ nhảy sang cây khác nhẹ như bay.' },
        { w: 'giống tay người', use: 'Bàn tay chú khỉ giống tay người.' }
      ] }
    ]
  },
  {
    id: 'an-ca-vang', type: 'animal', name: 'con cá vàng',
    keys: ['con cá vàng', 'cá vàng', 'chú cá vàng', 'bể cá'],
    intro: [
      'Trên bàn học của em có một bể cá nhỏ, trong đó có hai chú cá vàng.',
      'Nhân dịp em được học sinh giỏi, mẹ mua tặng em một chú cá vàng.',
      'Ở phòng khách nhà em có bể cá vàng rất đẹp.'
    ],
    look: [
      { part: 'Hình dáng chung', items: [
        'to bằng hai ngón tay, thân tròn trịa',
        'bơi lượn trông như một đốm lửa nhỏ',
        'dáng mềm mại, uyển chuyển'
      ] },
      { part: 'Đầu', items: [
        'đôi mắt lồi, tròn như hai hạt cườm',
        'cái miệng nhỏ, lúc nào cũng đớp đớp',
        'mang cá phập phồng theo nhịp thở'
      ] },
      { part: 'Thân và vảy', items: [
        'lớp vảy vàng óng ánh như kim tuyến',
        'vảy xếp đều nhau như những đồng xu nhỏ',
        'dưới ánh đèn, thân cá lấp lánh'
      ] },
      { part: 'Vây và đuôi', items: [
        'đôi vây nhỏ như hai chiếc quạt xinh',
        'cái đuôi xoè rộng như dải lụa mỏng',
        'đuôi uốn lượn mềm mại khi bơi'
      ] }
    ],
    acts: [
      { part: 'Khi bơi lội', items: [
        'bơi lượn quanh bể, đuôi uốn mềm mại',
        'luồn qua những cành rong xanh',
        'đuổi nhau vòng quanh hòn non bộ nhỏ'
      ] },
      { part: 'Khi ăn', items: [
        'thấy em đến là bơi lên mặt nước',
        'đớp những hạt cám nhanh thoăn thoắt',
        'ăn xong nhả ra những chuỗi bong bóng nhỏ'
      ] },
      { part: 'Khi nghỉ', items: [
        'đứng im một chỗ, vây khẽ rung rinh',
        'nép mình bên cành rong',
        'ban đêm bơi chậm hẳn lại'
      ] }
    ],
    bond: [
      'Mỗi buổi sáng, em đều rắc cám cho cá ăn trước khi đi học.',
      'Những lúc học bài mệt, em lại ngắm cá bơi cho thư thái.',
      'Cuối tuần, em giúp bố thay nước, rửa bể cho cá.'
    ],
    end: [
      'Chú cá vàng nhỏ bé đã mang lại niềm vui cho góc học tập của em.',
      'Em sẽ chăm sóc bể cá thật sạch sẽ.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'óng ánh', use: 'Lớp vảy cá vàng óng ánh dưới ánh đèn.' },
        { w: 'lấp lánh', use: 'Thân chú cá vàng lấp lánh mỗi khi bơi qua.' },
        { w: 'mắt lồi', use: 'Chú cá vàng có đôi mắt lồi trông rất ngộ.' },
        { w: 'xoè rộng', use: 'Cái đuôi chú cá vàng xoè rộng như dải lụa.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'bơi lượn', use: 'Chú cá vàng bơi lượn quanh bể.' },
        { w: 'đớp', use: 'Chú cá vàng đớp những hạt cám rất nhanh.' },
        { w: 'uyển chuyển', use: 'Chú cá vàng bơi uyển chuyển như đang múa.' },
        { w: 'luồn', use: 'Chú cá vàng luồn qua những cành rong xanh.' },
        { w: 'phập phồng', use: 'Mang chú cá vàng phập phồng theo nhịp thở.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như dải lụa', use: 'Đuôi cá vàng mềm như dải lụa mỏng.' },
        { w: 'như một đốm lửa nhỏ', use: 'Chú cá vàng bơi trong bể như một đốm lửa nhỏ.' },
        { w: 'như những đồng xu nhỏ', use: 'Vảy cá xếp đều như những đồng xu nhỏ.' },
        { w: 'như kim tuyến', use: 'Vảy chú cá vàng óng ánh như kim tuyến.' }
      ] }
    ]
  },

  /* ===================== CÂY CỐI ===================== */
  {
    id: 'tr-bang', type: 'tree', name: 'cây bàng',
    keys: ['cây bàng', 'bàng', 'gốc bàng'],
    intro: [
      'Giữa sân trường em có một cây bàng to, toả bóng mát rượi.',
      'Cây bàng đã gắn bó với chúng em suốt những năm học tiểu học.',
      'Nghe bác bảo vệ kể, cây bàng ở sân trường đã có từ ngày trường mới xây.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'tán lá xoè rộng như chiếc ô khổng lồ',
        'các tầng cành xếp lớp như mái nhà',
        'cao vượt lên khỏi mái trường'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to, hai bạn ôm không xuể',
        'rễ nổi trên mặt đất như những con rắn',
        'thân sần sùi, vỏ màu nâu xám'
      ] },
      { part: 'Cành và lá', items: [
        'cành chìa ngang, toả ra bốn phía',
        'lá to bằng bàn tay người lớn, dày và bóng',
        'lá non xanh mơn mởn như ngọn lửa xanh'
      ] },
      { part: 'Hoa và quả', items: [
        'hoa nhỏ li ti, màu trắng ngà',
        'quả hình bầu dục, xanh rồi chín vàng',
        'quả chín thơm, nhân bên trong ăn bùi'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: lộc non xanh biếc phủ kín cành',
        'mùa hè: tán lá xanh um, toả bóng mát',
        'mùa đông: lá đỏ rực rồi rụng, trơ cành'
      ] },
      { part: 'Gắn bó với học sinh', items: [
        'che bóng mát cho chúng em vui chơi',
        'dưới gốc là nơi chúng em đọc sách, kể chuyện',
        'lá bàng đỏ được nhặt về làm đồ chơi'
      ] }
    ],
    bond: [
      'Giờ ra chơi, chúng em thường nhảy dây, đá cầu dưới gốc bàng.',
      'Mùa đông, em hay nhặt những chiếc lá bàng đỏ ép vào vở.',
      'Có lần em ngồi dưới gốc bàng ôn bài cùng bạn thân trước giờ kiểm tra.'
    ],
    end: [
      'Cây bàng như người bạn lớn luôn che chở chúng em.',
      'Mai này rời trường, em sẽ nhớ mãi cây bàng thân thương.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'xoè rộng', use: 'Tán bàng xoè rộng che mát cả một góc sân.' },
        { w: 'sần sùi', use: 'Thân cây bàng sần sùi, vỏ nâu xám.' },
        { w: 'xanh mơn mởn', use: 'Mùa xuân, cây bàng khoác lên mình những chồi lá xanh mơn mởn.' },
        { w: 'đỏ rực', use: 'Mùa đông, những chiếc lá bàng đỏ rực như ngọn lửa.' },
        { w: 'mát rượi', use: 'Ngồi dưới gốc bàng, chúng em thấy mát rượi.' }
      ] },
      { group: 'Từ ngữ tả sự thay đổi', items: [
        { w: 'đâm chồi nảy lộc', use: 'Xuân về, cây bàng đâm chồi nảy lộc.' },
        { w: 'xanh um', use: 'Mùa hè, tán bàng xanh um.' },
        { w: 'trút lá', use: 'Mùa đông, cây bàng trút lá, chỉ còn trơ cành.' },
        { w: 'trơ trụi', use: 'Những cành bàng trơ trụi khẳng khiu trong gió bấc.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như chiếc ô khổng lồ', use: 'Tán bàng xoè ra như chiếc ô khổng lồ.' },
        { w: 'như những con rắn', use: 'Rễ bàng trườn trên mặt đất như những con rắn.' },
        { w: 'như ngọn lửa', use: 'Lá bàng mùa đông đỏ như ngọn lửa.' },
        { w: 'như người bạn lớn', use: 'Cây bàng che chở chúng em như người bạn lớn.' }
      ] }
    ]
  },
  {
    id: 'tr-phuong', type: 'tree', name: 'cây phượng vĩ',
    keys: ['cây phượng vĩ', 'cây phượng', 'phượng vĩ', 'hoa phượng', 'phượng'],
    intro: [
      'Ở góc sân trường em có một cây phượng vĩ đã nhiều tuổi.',
      'Mỗi khi hè về, cây phượng ở cổng trường lại nở hoa đỏ rực.',
      'Cây phượng vĩ được gọi là cây hoa học trò.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'tán rộng xoè như chiếc ô xanh khổng lồ',
        'mùa hè trông như một mâm xôi gấc đỏ',
        'cao lớn, vượt qua cả dãy lớp học'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to, có những cái bướu sần sùi',
        'thân màu nâu xám, xù xì',
        'rễ nổi lên mặt đất, ngoằn ngoèo'
      ] },
      { part: 'Cành và lá', items: [
        'cành dài, vươn ra mọi phía',
        'lá nhỏ xíu, xếp đều như lá me',
        'lá xanh rì, xoè như những chiếc lông chim'
      ] },
      { part: 'Hoa và quả', items: [
        'hoa đỏ rực, mọc thành từng chùm',
        'mỗi bông có năm cánh, nhuỵ dài cong vút',
        'quả dẹt, dài như lưỡi kiếm, màu nâu đen'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: cành lá xanh non mơn mởn',
        'mùa hè: hoa nở đỏ rực, ve kêu râm ran',
        'mùa đông: lá rụng nhiều, cành khẳng khiu'
      ] },
      { part: 'Gắn bó với học sinh', items: [
        'báo hiệu mùa hè và mùa chia tay',
        'cánh hoa được ép vào lưu bút',
        'nhuỵ hoa làm trò chọi gà vui nhộn'
      ] }
    ],
    bond: [
      'Mỗi khi phượng nở, chúng em lại biết sắp được nghỉ hè.',
      'Em và các bạn hay nhặt cánh phượng ghép thành hình con bướm.',
      'Em thường ép hoa phượng vào trang vở để làm kỉ niệm.'
    ],
    end: [
      'Cây phượng gắn liền với tuổi học trò của em.',
      'Dù sau này đi đâu, em vẫn nhớ màu hoa phượng đỏ sân trường.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'đỏ rực', use: 'Mùa hè, hoa phượng nở đỏ rực cả góc sân.' },
        { w: 'xù xì', use: 'Thân cây phượng xù xì, nâu xám.' },
        { w: 'xanh rì', use: 'Tán lá phượng xanh rì trước khi ra hoa.' },
        { w: 'cong vút', use: 'Nhuỵ hoa phượng dài và cong vút.' }
      ] },
      { group: 'Từ ngữ tả sự thay đổi', items: [
        { w: 'nở rộ', use: 'Đầu tháng năm, hoa phượng nở rộ.' },
        { w: 'rực rỡ', use: 'Cây phượng rực rỡ dưới nắng hè.' },
        { w: 'khẳng khiu', use: 'Mùa đông, cây phượng chỉ còn những cành khẳng khiu.' },
        { w: 'râm ran', use: 'Phượng nở, tiếng ve kêu râm ran.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như một mâm xôi gấc', use: 'Cây phượng nở hoa trông như một mâm xôi gấc đỏ.' },
        { w: 'như lá me', use: 'Lá phượng nhỏ xíu như lá me.' },
        { w: 'như lưỡi kiếm', use: 'Quả phượng dẹt và dài như lưỡi kiếm.' },
        { w: 'như cánh bướm', use: 'Cánh phượng mỏng manh như cánh bướm đỏ.' },
        { w: 'hoa học trò', use: 'Hoa phượng được gọi là hoa học trò.' }
      ] }
    ]
  },
  {
    id: 'tr-da', type: 'tree', name: 'cây đa',
    keys: ['cây đa', 'gốc đa', 'cây đa đầu làng'],
    intro: [
      'Ở đầu làng quê nội em có một cây đa cổ thụ.',
      'Nghe ông kể, cây đa đầu làng đã có từ mấy trăm năm trước.',
      'Nhắc đến quê hương, em lại nhớ cây đa, bến nước, sân đình.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'cao sừng sững, tán lá xanh thẫm',
        'tán rộng như một chiếc ô khổng lồ',
        'nhìn từ xa đã thấy như một ngọn đồi xanh'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to, mấy người ôm không xuể',
        'thân xù xì, có nhiều u bướu',
        'rễ nổi lên mặt đất, ngoằn ngoèo như rắn'
      ] },
      { part: 'Rễ phụ', items: [
        'rễ phụ buông thõng từ trên cành xuống',
        'có rễ chạm đất thành những cột trụ',
        'trông như bộ râu dài của ông cụ'
      ] },
      { part: 'Cành, lá và quả', items: [
        'cành to, vươn dài ra bốn phía',
        'lá dày, xanh bóng, to bằng bàn tay',
        'quả đa nhỏ, chín đỏ, chim kéo về ăn'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: búp đa non đỏ hồng như ngọn nến',
        'mùa hè: tán lá xanh um, mát rượi',
        'mùa quả: chim chóc ríu rít trên cành'
      ] },
      { part: 'Gắn bó với người dân', items: [
        'người đi làm đồng ngồi nghỉ dưới gốc',
        'trẻ con chơi trốn tìm quanh gốc đa',
        'là nơi hẹn hò, gặp gỡ của cả làng'
      ] }
    ],
    bond: [
      'Mỗi lần về quê, em lại cùng các anh chị chơi trốn tìm dưới gốc đa.',
      'Trưa hè, em hay ngồi nghe ông kể chuyện dưới bóng đa mát rượi.',
      'Em thích ngắm đàn chim ríu rít ăn quả đa chín.'
    ],
    end: [
      'Cây đa như người ông già hiền hậu canh giữ làng quê.',
      'Em mong cây đa mãi xanh tốt cùng quê hương.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'cổ thụ', use: 'Cây đa cổ thụ đứng sừng sững ở đầu làng.' },
        { w: 'sừng sững', use: 'Cây đa sừng sững giữa cánh đồng.' },
        { w: 'buông thõng', use: 'Những chùm rễ đa buông thõng xuống đất.' },
        { w: 'xù xì', use: 'Thân cây đa xù xì, đầy u bướu.' },
        { w: 'xanh thẫm', use: 'Tán đa xanh thẫm che kín một góc trời.' }
      ] },
      { group: 'Từ ngữ tả hoạt động, âm thanh', items: [
        { w: 'ríu rít', use: 'Chim chóc ríu rít trên cành đa.' },
        { w: 'rì rào', use: 'Gió thổi, lá đa rì rào như đang trò chuyện.' },
        { w: 'toả bóng', use: 'Cây đa toả bóng mát xuống cả bãi cỏ.' },
        { w: 'vươn', use: 'Những cành đa vươn dài ra bốn phía.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như bộ râu', use: 'Rễ phụ của cây đa trông như bộ râu dài của ông cụ.' },
        { w: 'như một chiếc ô khổng lồ', use: 'Tán đa xoè ra như một chiếc ô khổng lồ.' },
        { w: 'như ngọn nến', use: 'Búp đa non đỏ hồng như ngọn nến.' },
        { w: 'như người ông', use: 'Cây đa hiền hậu như người ông canh giữ làng.' }
      ] }
    ]
  },
  {
    id: 'tr-xoai', type: 'tree', name: 'cây xoài',
    keys: ['cây xoài', 'xoài', 'quả xoài'],
    intro: [
      'Trong vườn nhà em có một cây xoài do ông nội trồng.',
      'Cây xoài ở góc vườn đã cho quả được mấy mùa rồi.',
      'Mỗi khi hè về, em lại mong ngóng cây xoài trước sân chín quả.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'tán lá tròn, xanh um, rậm rạp',
        'trông như một cây nấm khổng lồ',
        'cao hơn mái nhà em'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to bằng cái cột đình',
        'thân màu nâu sẫm, vỏ nứt nẻ',
        'cành to toả ra như những cánh tay'
      ] },
      { part: 'Lá và hoa', items: [
        'lá dài, nhọn như ngọn giáo',
        'lá non màu nâu tím, lá già xanh đậm',
        'hoa nhỏ, vàng nhạt, mọc thành chùm'
      ] },
      { part: 'Quả', items: [
        'quả non xanh, nhỏ như ngón tay',
        'quả chín vàng ươm, thơm lừng',
        'thịt quả vàng, ngọt lịm, mọng nước'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'cuối đông: trổ hoa vàng nhạt kín cành',
        'đầu hè: quả non lúc lỉu trên cây',
        'giữa hè: quả chín vàng, hương thơm khắp vườn'
      ] },
      { part: 'Ích lợi', items: [
        'cho quả ngọt cả nhà cùng thưởng thức',
        'tán lá toả bóng mát cho cả sân',
        'quả xanh chấm muối ớt chua chua giòn giòn'
      ] }
    ],
    bond: [
      'Em thường cùng ông tưới nước và nhặt cỏ quanh gốc xoài.',
      'Mùa xoài chín, em được ông cho hái những quả to nhất.',
      'Trưa hè, em hay mắc võng ngủ dưới gốc xoài mát rượi.'
    ],
    end: [
      'Cây xoài như món quà ông để lại cho cả nhà.',
      'Em sẽ chăm sóc cây xoài để năm nào cây cũng sai quả.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'rậm rạp', use: 'Tán xoài rậm rạp che kín một góc vườn.' },
        { w: 'nứt nẻ', use: 'Thân cây xoài sẫm màu, vỏ nứt nẻ.' },
        { w: 'vàng ươm', use: 'Những quả xoài chín vàng ươm trên cành.' },
        { w: 'thơm lừng', use: 'Quả xoài chín thơm lừng cả khu vườn.' }
      ] },
      { group: 'Từ ngữ tả sự thay đổi', items: [
        { w: 'trổ hoa', use: 'Cuối đông, cây xoài trổ hoa vàng nhạt.' },
        { w: 'lúc lỉu', use: 'Quả xoài non treo lúc lỉu trên cành.' },
        { w: 'sai quả', use: 'Năm nay cây xoài nhà em rất sai quả.' },
        { w: 'ngọt lịm', use: 'Miếng xoài chín ngọt lịm tan trong miệng.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như ngọn giáo', use: 'Lá xoài dài và nhọn như ngọn giáo.' },
        { w: 'như cây nấm khổng lồ', use: 'Nhìn từ xa, cây xoài như cây nấm khổng lồ.' },
        { w: 'như những cánh tay', use: 'Cành xoài toả ra như những cánh tay.' },
        { w: 'như mật ong', use: 'Xoài chín ngọt như mật ong.' }
      ] }
    ]
  },
  {
    id: 'tr-vu-sua', type: 'tree', name: 'cây vú sữa',
    keys: ['cây vú sữa'],
    intro: [
      'Trước sân nhà em có một cây vú sữa do bố trồng từ khi em mới sinh.',
      'Cây vú sữa trong vườn nhà bà là cây em yêu quý nhất.',
      'Mỗi lần nhìn cây vú sữa, em lại nhớ đến câu chuyện cổ tích cảm động về người mẹ.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'tán lá tròn xoe, dày và rậm',
        'trông lấp lánh khi gió thổi lật lá',
        'cao hơn mái hiên nhà em'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to bằng bắp đùi người lớn',
        'thân màu nâu xám, thẳng',
        'cành toả đều ra mọi phía'
      ] },
      { part: 'Lá và hoa', items: [
        'lá mặt trên xanh bóng như được đánh sáp',
        'mặt dưới lá màu nâu đồng óng ánh',
        'hoa nhỏ li ti, màu trắng ngà'
      ] },
      { part: 'Quả', items: [
        'quả tròn, căng mịn, to bằng nắm tay',
        'chín thì vỏ tím bóng hoặc xanh óng',
        'bóp mềm, có dòng sữa trắng ngọt mát'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'cuối năm: quả to dần, treo lủng lẳng',
        'khoảng dịp Tết: quả chín óng ánh trên cành',
        'quanh năm: lá xanh tươi, ít khi rụng trụi'
      ] },
      { part: 'Ích lợi và gắn bó', items: [
        'cho quả ngọt bày mâm ngũ quả ngày Tết',
        'toả bóng mát cho cả sân nhà',
        'gợi nhớ tình mẹ qua câu chuyện cổ tích'
      ] }
    ],
    bond: [
      'Em thường cùng bố bắc thang hái những quả vú sữa chín.',
      'Em thích bóp mềm quả vú sữa rồi mút dòng sữa ngọt lịm.',
      'Có lần em mang vú sữa đến lớp chia cho các bạn cùng ăn.'
    ],
    end: [
      'Cây vú sữa nhắc em luôn nhớ đến tình yêu thương của mẹ.',
      'Em sẽ chăm sóc cây để năm nào cây cũng sai trĩu quả.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'xanh bóng', use: 'Mặt trên lá vú sữa xanh bóng như được đánh sáp.' },
        { w: 'nâu đồng', use: 'Mặt dưới lá vú sữa màu nâu đồng óng ánh.' },
        { w: 'căng mịn', use: 'Quả vú sữa chín căng mịn, tròn trịa.' },
        { w: 'tím bóng', use: 'Những quả vú sữa tím bóng treo trên cành.' }
      ] },
      { group: 'Từ ngữ tả quả và vị', items: [
        { w: 'lủng lẳng', use: 'Quả vú sữa treo lủng lẳng khắp các cành.' },
        { w: 'ngọt mát', use: 'Dòng sữa trắng của quả vú sữa ngọt mát.' },
        { w: 'trĩu quả', use: 'Mùa này cây vú sữa trĩu quả.' },
        { w: 'thơm dịu', use: 'Quả vú sữa chín có mùi thơm dịu.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như sữa mẹ', use: 'Dòng nước trắng trong quả vú sữa ngọt như sữa mẹ.' },
        { w: 'như được đánh sáp', use: 'Lá vú sữa bóng như được đánh sáp.' },
        { w: 'như những chiếc đèn lồng', use: 'Quả vú sữa treo trên cành như những chiếc đèn lồng nhỏ.' },
        { w: 'như vòng tay mẹ', use: 'Tán vú sữa che chở em như vòng tay mẹ.' }
      ] }
    ]
  },
  {
    id: 'tr-buoi', type: 'tree', name: 'cây bưởi',
    keys: ['cây bưởi', 'bưởi', 'hoa bưởi', 'quả bưởi'],
    intro: [
      'Trong vườn nhà ông bà em có một cây bưởi rất sai quả.',
      'Cây bưởi ở góc vườn do ông em trồng đã hơn mười năm.',
      'Mỗi mùa hoa bưởi nở, cả khu vườn nhà em thơm ngát.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'tán lá tròn, xanh đậm, rậm rạp',
        'cao hơn đầu bố em một chút',
        'mùa quả trông như cây treo đèn lồng'
      ] },
      { part: 'Gốc, thân và cành', items: [
        'thân màu nâu xám, thẳng và chắc',
        'cành nhiều, có những chiếc gai nhọn',
        'cành mùa quả trĩu xuống, phải chống đỡ'
      ] },
      { part: 'Lá và hoa', items: [
        'lá xanh bóng, to bằng lòng bàn tay',
        'hoa trắng muốt, cánh dày, nhuỵ vàng',
        'hương hoa thơm ngát, dịu dàng'
      ] },
      { part: 'Quả', items: [
        'quả to tròn như quả bóng',
        'vỏ xanh, khi chín ngả vàng',
        'múi bưởi mọng nước, tép ngọt thanh'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: hoa nở trắng cành, ong bướm về',
        'mùa hè: quả non lớn dần, xanh mướt',
        'mùa thu: quả chín vàng, đúng dịp Trung thu'
      ] },
      { part: 'Ích lợi', items: [
        'quả bưởi bày mâm cỗ Trung thu, ngày Tết',
        'lá bưởi đun nước gội đầu thơm tóc',
        'hoa bưởi ướp chè, nấu chè thơm ngát'
      ] }
    ],
    bond: [
      'Mỗi sáng mùa xuân, em thích đứng dưới gốc bưởi hít hương hoa.',
      'Trung thu năm ngoái, em được bà làm cho con chó bằng múi bưởi.',
      'Em thường giúp ông bắt sâu, tưới nước cho cây bưởi.'
    ],
    end: [
      'Cây bưởi mang lại cho nhà em hương thơm và trái ngọt.',
      'Em mong cây bưởi luôn xanh tốt, năm nào cũng sai quả.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'trắng muốt', use: 'Những bông hoa bưởi trắng muốt nở đầy cành.' },
        { w: 'xanh bóng', use: 'Lá bưởi xanh bóng dưới nắng xuân.' },
        { w: 'tròn trĩnh', use: 'Quả bưởi tròn trĩnh treo trên cành.' },
        { w: 'mọng nước', use: 'Múi bưởi mọng nước, ngọt thanh.' }
      ] },
      { group: 'Từ ngữ tả hương vị', items: [
        { w: 'thơm ngát', use: 'Hoa bưởi thơm ngát cả khu vườn.' },
        { w: 'ngọt thanh', use: 'Tép bưởi ngọt thanh, mát lạnh.' },
        { w: 'thoang thoảng', use: 'Hương bưởi thoang thoảng bay vào nhà.' },
        { w: 'trĩu', use: 'Những cành bưởi trĩu xuống vì nhiều quả.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như quả bóng', use: 'Quả bưởi to tròn như quả bóng.' },
        { w: 'như những chiếc đèn lồng', use: 'Quả bưởi treo lủng lẳng như những chiếc đèn lồng.' },
        { w: 'như những ngôi sao', use: 'Hoa bưởi trắng nở như những ngôi sao nhỏ.' },
        { w: 'như hạt mưa', use: 'Cánh hoa bưởi rụng trắng gốc như hạt mưa.' }
      ] }
    ]
  },
  {
    id: 'tr-cam', type: 'tree', name: 'cây cam',
    keys: ['cây cam', 'quả cam', 'vườn cam', 'hoa cam'],
    intro: [
      'Ông nội em trồng một cây cam ở góc vườn.',
      'Nhà em có một cây cam đang mùa chín quả.',
      'Trong vườn nhà bà, em thích nhất là cây cam sai trĩu quả.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'cây không cao lắm, tán tròn, xanh rậm',
        'mùa quả, cây như treo đầy đèn lồng',
        'cao ngang mái hiên nhà'
      ] },
      { part: 'Thân và cành', items: [
        'thân nhỏ, vỏ màu xanh xám',
        'cành mảnh, có gai nhọn',
        'cành mùa quả trĩu xuống sát đất'
      ] },
      { part: 'Lá và hoa', items: [
        'lá xanh đậm, bóng, vò ra có mùi thơm',
        'hoa nhỏ, trắng muốt, nở từng chùm',
        'hoa thơm ngát, ong bướm bay đến'
      ] },
      { part: 'Quả', items: [
        'quả tròn như quả bóng tennis',
        'vỏ xanh, chín ngả vàng cam',
        'múi cam mọng nước, chua chua ngọt ngọt'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: nở hoa trắng, thơm ngát',
        'mùa hè: quả non xanh lớn dần',
        'cuối năm: quả chín vàng, kịp dịp Tết'
      ] },
      { part: 'Ích lợi', items: [
        'quả cam vắt nước uống bổ dưỡng',
        'vỏ cam có tinh dầu thơm',
        'cây cam bày mâm ngũ quả ngày Tết'
      ] }
    ],
    bond: [
      'Em thường cùng ông tưới nước, nhổ cỏ cho cây cam.',
      'Có lần em bị gai cam đâm vào tay, từ đó em hái quả rất cẩn thận.',
      'Mỗi sáng mẹ vắt cho em một cốc nước cam mát lạnh.'
    ],
    end: [
      'Cây cam cho nhà em những trái ngọt và nhiều niềm vui.',
      'Em sẽ chăm sóc cây cam để năm nào cây cũng sai quả.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'xanh rậm', use: 'Tán cam tròn, xanh rậm.' },
        { w: 'trắng muốt', use: 'Hoa cam trắng muốt nở từng chùm.' },
        { w: 'vàng cam', use: 'Quả cam chín có màu vàng cam rất đẹp.' },
        { w: 'nhọn', use: 'Cành cam có những chiếc gai nhọn.' }
      ] },
      { group: 'Từ ngữ tả quả và hương vị', items: [
        { w: 'sai trĩu', use: 'Cây cam sai trĩu quả.' },
        { w: 'mọng nước', use: 'Múi cam mọng nước, mát lạnh.' },
        { w: 'chua chua ngọt ngọt', use: 'Nước cam chua chua ngọt ngọt rất ngon.' },
        { w: 'thơm ngát', use: 'Hoa cam nở thơm ngát khu vườn.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như đèn lồng', use: 'Quả cam chín treo trên cây như đèn lồng nhỏ.' },
        { w: 'như quả bóng tennis', use: 'Quả cam tròn như quả bóng tennis.' },
        { w: 'như những bông tuyết', use: 'Hoa cam trắng như những bông tuyết.' },
        { w: 'như mặt trời nhỏ', use: 'Quả cam chín vàng như mặt trời nhỏ.' }
      ] }
    ]
  },
  {
    id: 'tr-nhan', type: 'tree', name: 'cây nhãn',
    keys: ['cây nhãn', 'nhãn', 'quả nhãn', 'nhãn lồng'],
    intro: [
      'Vườn nhà bà nội em có một cây nhãn đã lâu năm.',
      'Cây nhãn do ông em trồng từ ngày bố em còn nhỏ.',
      'Mỗi dịp hè, em lại về quê ăn nhãn chín ngay trên cây.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'tán lá rộng, xanh thẫm, tròn như cái nấm',
        'cành lá sum suê, rậm rạp',
        'cao vượt qua mái nhà bà'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to, rễ bám chắc vào đất',
        'thân xù xì, vỏ nâu sẫm',
        'cành to, toả ra nhiều phía'
      ] },
      { part: 'Lá và hoa', items: [
        'lá dài, xanh sẫm, mọc đối nhau',
        'hoa nhỏ li ti, màu vàng nhạt',
        'hoa mọc thành chùm, ong bay về hút mật'
      ] },
      { part: 'Quả', items: [
        'quả tròn, nhỏ như hòn bi, mọc thành chùm',
        'vỏ mỏng màu vàng nâu',
        'cùi trắng trong, ngọt lịm, hạt đen nhánh'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: hoa nở vàng nhạt, ong về rộn ràng',
        'đầu hè: quả non xanh lúc lỉu',
        'giữa hè: quả chín vàng nâu, trĩu cành'
      ] },
      { part: 'Ích lợi', items: [
        'quả nhãn ăn ngọt, có thể sấy làm long nhãn',
        'hoa nhãn cho ong làm mật thơm',
        'tán rộng che mát cả góc sân'
      ] }
    ],
    bond: [
      'Mỗi mùa nhãn chín, em được cùng ông bắc thang hái nhãn.',
      'Em thích ngồi dưới gốc nhãn bóc từng quả ngọt lịm.',
      'Bà thường gửi nhãn lên phố cho nhà em làm quà.'
    ],
    end: [
      'Cây nhãn chứa đựng bao kỉ niệm tuổi thơ của em ở quê.',
      'Em mong cây nhãn mãi xanh tươi, sai quả.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'sum suê', use: 'Cây nhãn cành lá sum suê.' },
        { w: 'xanh thẫm', use: 'Tán nhãn xanh thẫm, rậm rạp.' },
        { w: 'trắng trong', use: 'Cùi nhãn trắng trong, mọng nước.' },
        { w: 'đen nhánh', use: 'Hạt nhãn đen nhánh như hạt huyền.' }
      ] },
      { group: 'Từ ngữ tả quả và hương vị', items: [
        { w: 'chi chít', use: 'Những chùm nhãn chi chít trên cành.' },
        { w: 'ngọt lịm', use: 'Cùi nhãn ngọt lịm.' },
        { w: 'trĩu cành', use: 'Mùa hè, nhãn chín trĩu cành.' },
        { w: 'rộn ràng', use: 'Hoa nhãn nở, đàn ong bay về rộn ràng.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như hòn bi', use: 'Quả nhãn tròn như hòn bi.' },
        { w: 'như mắt rồng', use: 'Hạt nhãn đen bóng như mắt rồng.' },
        { w: 'như cái nấm', use: 'Tán nhãn tròn như cái nấm khổng lồ.' },
        { w: 'như mật ong', use: 'Nhãn chín ngọt như mật ong.' }
      ] }
    ]
  },
  {
    id: 'tr-hoa-hong', type: 'tree', name: 'cây hoa hồng',
    keys: ['cây hoa hồng', 'hoa hồng', 'khóm hồng', 'bông hồng'],
    intro: [
      'Trước hiên nhà em có một khóm hoa hồng do mẹ trồng.',
      'Trong vườn hoa của trường, em thích nhất là cây hoa hồng.',
      'Ngày sinh nhật, em được tặng một chậu hoa hồng nhung.'
    ],
    look: [
      { part: 'Nhìn chung', items: [
        'cây thấp, cao ngang bụng em',
        'khóm cây xum xuê, xanh tốt',
        'mùa hoa, cả khóm như được thắp sáng'
      ] },
      { part: 'Thân và cành', items: [
        'thân nhỏ, mảnh mai, màu xanh nâu',
        'cành có nhiều gai nhọn',
        'gai như những chú lính canh giữ hoa'
      ] },
      { part: 'Lá', items: [
        'lá nhỏ, mép có răng cưa',
        'lá non màu đỏ tía, lá già xanh đậm',
        'lá mọc thành từng chùm năm, bảy lá'
      ] },
      { part: 'Nụ và hoa', items: [
        'nụ hoa nhỏ, búp như ngọn bút',
        'cánh hoa mịn như nhung, xếp nhiều lớp',
        'hoa đỏ thắm, thơm dịu ngọt ngào'
      ] }
    ],
    acts: [
      { part: 'Khi hoa nở', items: [
        'sáng sớm, cánh hoa còn đọng sương long lanh',
        'nụ hé dần, cánh hoa xoè rộng',
        'ong bướm bay đến quanh khóm hoa'
      ] },
      { part: 'Ích lợi và chăm sóc', items: [
        'hoa làm đẹp sân nhà, cắm bình phòng khách',
        'hoa dùng để tặng người thân',
        'em tưới nước, tỉa lá úa mỗi chiều'
      ] }
    ],
    bond: [
      'Sáng nào em cũng ra ngắm xem khóm hồng có nụ mới không.',
      'Ngày 8 tháng 3, em đã cắt bông hồng đẹp nhất tặng mẹ.',
      'Có lần em bị gai hồng đâm, từ đó em chăm hoa thật cẩn thận.'
    ],
    end: [
      'Cây hoa hồng làm cho ngôi nhà em thêm tươi đẹp.',
      'Em sẽ chăm sóc khóm hồng để hoa nở quanh năm.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'đỏ thắm', use: 'Bông hồng đỏ thắm nổi bật giữa vườn.' },
        { w: 'mịn như nhung', use: 'Cánh hoa hồng mịn như nhung.' },
        { w: 'răng cưa', use: 'Lá hồng nhỏ, mép có răng cưa.' },
        { w: 'mảnh mai', use: 'Thân hồng mảnh mai nhưng đầy gai.' }
      ] },
      { group: 'Từ ngữ tả hoa nở và hương', items: [
        { w: 'chúm chím', use: 'Nụ hồng chúm chím như môi cười.' },
        { w: 'hé nở', use: 'Sáng nay, bông hồng đầu tiên đã hé nở.' },
        { w: 'thơm dịu', use: 'Hoa hồng thơm dịu khắp hiên nhà.' },
        { w: 'long lanh', use: 'Giọt sương long lanh đọng trên cánh hồng.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như nhung', use: 'Cánh hoa hồng mềm mại như nhung.' },
        { w: 'như những chú lính', use: 'Gai hồng như những chú lính canh giữ hoa.' },
        { w: 'như ngọn bút', use: 'Nụ hồng búp lại như ngọn bút.' },
        { w: 'như nữ hoàng', use: 'Hoa hồng đẹp như nữ hoàng của các loài hoa.' }
      ] }
    ]
  },
  {
    id: 'tr-hoa-mai', type: 'tree', name: 'cây hoa mai',
    keys: ['cây hoa mai', 'hoa mai', 'cây mai', 'mai vàng'],
    intro: [
      'Tết năm nay, bố mua về một chậu mai vàng đặt giữa phòng khách.',
      'Trước sân nhà em có một cây mai vàng do ông nội trồng.',
      'Ở miền Nam, nhà nào cũng chưng hoa mai vàng mỗi dịp Tết đến.'
    ],
    look: [
      { part: 'Nhìn chung', items: [
        'cây cao ngang người lớn, dáng thanh mảnh',
        'Tết đến, cả cây vàng rực như được dát vàng',
        'đặt trong chậu sứ, trông rất trang nhã'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to, sần sùi, nhiều u bướu',
        'thân màu nâu xám, cong cong mềm mại',
        'cành nhỏ, mảnh, vươn ra nhiều phía'
      ] },
      { part: 'Lá và nụ', items: [
        'lá xanh, mỏng, hình bầu dục',
        'trước Tết, lá được lặt hết để hoa nở đúng dịp',
        'nụ tròn, xanh rồi vàng dần, chi chít'
      ] },
      { part: 'Hoa', items: [
        'mỗi bông có năm cánh vàng tươi',
        'nhuỵ nhỏ, mảnh như sợi chỉ vàng',
        'hoa nở rộ, rung rinh trong gió xuân'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'giữa tháng chạp: người ta lặt lá cho mai',
        'những ngày Tết: hoa nở rộ, vàng rực',
        'sau Tết: hoa rụng, lá non xanh mọc lại'
      ] },
      { part: 'Ý nghĩa', items: [
        'báo hiệu mùa xuân, Tết đã về',
        'mang đến may mắn, sung túc cho gia đình',
        'làm ngôi nhà thêm ấm cúng, rộn ràng'
      ] }
    ],
    bond: [
      'Năm nào em cũng giúp ông lặt lá mai trước Tết.',
      'Sáng mùng Một, cả nhà em chụp ảnh bên cây mai vàng.',
      'Em thích đếm những nụ mai mới nở mỗi buổi sáng.'
    ],
    end: [
      'Cây mai vàng là biểu tượng của mùa xuân và ngày Tết ở quê em.',
      'Em mong năm nào cây mai cũng nở hoa thật đẹp.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'vàng tươi', use: 'Những cánh mai vàng tươi nở rộ ngày Tết.' },
        { w: 'thanh mảnh', use: 'Cây mai có dáng thanh mảnh, mềm mại.' },
        { w: 'chi chít', use: 'Nụ mai chi chít trên khắp các cành.' },
        { w: 'sần sùi', use: 'Gốc mai sần sùi, nhiều u bướu.' }
      ] },
      { group: 'Từ ngữ tả hoa nở', items: [
        { w: 'nở rộ', use: 'Sáng mùng Một, hoa mai nở rộ.' },
        { w: 'rung rinh', use: 'Hoa mai rung rinh trong gió xuân.' },
        { w: 'bung nở', use: 'Những nụ mai bung nở đúng đêm giao thừa.' },
        { w: 'rực rỡ', use: 'Cây mai vàng rực rỡ giữa phòng khách.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như được dát vàng', use: 'Cây mai nở hoa như được dát vàng.' },
        { w: 'như sợi chỉ vàng', use: 'Nhuỵ mai nhỏ như sợi chỉ vàng.' },
        { w: 'như những ngôi sao', use: 'Hoa mai năm cánh như những ngôi sao nhỏ.' },
        { w: 'như nắng xuân', use: 'Sắc mai vàng tươi như nắng xuân.' }
      ] }
    ]
  },
  {
    id: 'tr-hoa-dao', type: 'tree', name: 'cây hoa đào',
    keys: ['cây hoa đào', 'hoa đào', 'cây đào', 'cành đào', 'đào tết'],
    intro: [
      'Tết năm nay, bố mua về một cây đào thật đẹp.',
      'Ở miền Bắc, mỗi khi Tết đến, nhà nào cũng có một cành đào.',
      'Sáng hai mươi tám Tết, em cùng bố đi chợ hoa chọn cây đào.'
    ],
    look: [
      { part: 'Nhìn chung', items: [
        'cây cao hơn em một chút, dáng mềm mại',
        'cả cây phớt hồng như một đám mây',
        'đặt ở góc phòng khách làm sáng cả nhà'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc to, xù xì, màu nâu sẫm',
        'thân có những vết nứt như vảy rồng',
        'cành nâu bóng, uốn lượn mềm mại'
      ] },
      { part: 'Nụ và lộc', items: [
        'nụ tròn, chúm chím như những hạt cườm',
        'lộc non xanh biếc điểm xen giữa hoa',
        'nụ hé dần sắc hồng phớt'
      ] },
      { part: 'Hoa', items: [
        'mỗi bông có năm cánh mỏng manh',
        'cánh hoa hồng phấn, mịn màng',
        'nhuỵ vàng nhạt, toả hương thoang thoảng'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'cuối đông: cành trơ trụi, rồi nhú nụ',
        'những ngày Tết: hoa nở rộ, hồng thắm',
        'sau Tết: hoa rụng, lộc non xanh mơn mởn'
      ] },
      { part: 'Ý nghĩa', items: [
        'báo hiệu mùa xuân đã về',
        'mang lại may mắn cho cả nhà',
        'làm không khí Tết thêm đầm ấm'
      ] }
    ],
    bond: [
      'Năm nào em cũng cùng mẹ treo thiệp và đèn nháy lên cây đào.',
      'Sáng mùng Một, em mặc áo mới chụp ảnh bên cây đào.',
      'Em thích đếm xem hôm nay có thêm bao nhiêu bông đào nở.'
    ],
    end: [
      'Cây đào mang cả mùa xuân vào ngôi nhà em.',
      'Em mong năm nào nhà em cũng có một cây đào thật đẹp đón Tết.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'hồng phấn', use: 'Những cánh đào hồng phấn mỏng manh.' },
        { w: 'phớt hồng', use: 'Cả cây đào phớt hồng như một đám mây.' },
        { w: 'xù xì', use: 'Gốc đào xù xì, nâu sẫm.' },
        { w: 'mỏng manh', use: 'Cánh hoa đào mỏng manh, chỉ chạm nhẹ là rụng.' }
      ] },
      { group: 'Từ ngữ tả hoa nở', items: [
        { w: 'chúm chím', use: 'Nụ đào chúm chím trên cành.' },
        { w: 'nở rộ', use: 'Sáng mùng Một, hoa đào nở rộ.' },
        { w: 'thắm', use: 'Hoa đào hồng thắm cả góc phòng.' },
        { w: 'xanh biếc', use: 'Lộc đào xanh biếc điểm xen giữa những bông hoa.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như một đám mây', use: 'Cây đào nở hoa như một đám mây hồng.' },
        { w: 'như những hạt cườm', use: 'Nụ đào tròn như những hạt cườm.' },
        { w: 'như vảy rồng', use: 'Thân đào có những vết nứt như vảy rồng.' },
        { w: 'như má em bé', use: 'Cánh đào hồng như má em bé.' }
      ] }
    ]
  },
  {
    id: 'tr-dua', type: 'tree', name: 'cây dừa',
    keys: ['cây dừa', 'dừa', 'quả dừa', 'hàng dừa'],
    intro: [
      'Quê ngoại em ở miền Tây, nơi có những hàng dừa xanh mát.',
      'Trước ngõ nhà bà em có một cây dừa cao vút.',
      'Hè vừa rồi về quê, em ấn tượng nhất là cây dừa bên bờ sông.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'cao vút, ngọn như chạm tới mây',
        'tàu lá xoè ra như chiếc ô xanh',
        'trông như cô gái đứng soi bóng bờ sông'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc có nhiều rễ nhỏ bám chặt vào đất',
        'thân thẳng, tròn, không có cành',
        'thân có những ngấn tròn như bậc thang'
      ] },
      { part: 'Tàu lá', items: [
        'tàu lá dài như chiếc lược khổng lồ',
        'lá xanh, dài, xếp đều hai bên sống lá',
        'gió thổi, tàu lá vẫy vẫy như cánh tay'
      ] },
      { part: 'Quả', items: [
        'quả mọc thành buồng dưới tàu lá',
        'quả tròn, vỏ xanh bóng, to bằng cái đầu em',
        'nước dừa ngọt mát, cùi trắng béo ngậy'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo thời gian', items: [
        'hoa dừa nhỏ, vàng nhạt, mọc thành chùm',
        'quả non xanh lớn dần thành buồng trĩu',
        'dừa già vỏ ngả nâu, cùi dày và cứng'
      ] },
      { part: 'Ích lợi', items: [
        'nước dừa giải khát ngày hè',
        'cùi dừa làm kẹo, mứt, nấu chè',
        'lá dừa lợp nhà, gáo dừa làm đồ dùng'
      ] }
    ],
    bond: [
      'Em được cậu trèo lên hái cho quả dừa xiêm ngọt mát.',
      'Trưa hè, em hay mắc võng nằm dưới bóng dừa nghe gió thổi.',
      'Có lần em cùng anh họ làm đồ chơi từ lá dừa.'
    ],
    end: [
      'Cây dừa gắn bó với tuổi thơ của em mỗi lần về quê.',
      'Em yêu những hàng dừa xanh của quê hương.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'cao vút', use: 'Cây dừa cao vút giữa trời xanh.' },
        { w: 'thẳng tắp', use: 'Thân dừa thẳng tắp, không có cành.' },
        { w: 'xanh bóng', use: 'Quả dừa xanh bóng nằm dưới tàu lá.' },
        { w: 'béo ngậy', use: 'Cùi dừa trắng, béo ngậy.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'vẫy', use: 'Tàu dừa vẫy vẫy trong gió như chào đón em.' },
        { w: 'xào xạc', use: 'Gió thổi, lá dừa xào xạc.' },
        { w: 'soi bóng', use: 'Hàng dừa soi bóng xuống dòng sông.' },
        { w: 'trĩu', use: 'Buồng dừa trĩu quả dưới tàu lá.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như chiếc lược khổng lồ', use: 'Tàu dừa dài như chiếc lược khổng lồ chải vào mây.' },
        { w: 'như bậc thang', use: 'Những ngấn trên thân dừa như bậc thang.' },
        { w: 'như cánh tay', use: 'Tàu lá dừa vẫy như cánh tay.' },
        { w: 'như cô gái', use: 'Cây dừa soi bóng xuống sông như cô gái đứng soi gương.' }
      ] }
    ]
  },
  {
    id: 'tr-chuoi', type: 'tree', name: 'cây chuối',
    keys: ['cây chuối', 'chuối', 'bụi chuối', 'buồng chuối'],
    intro: [
      'Sau nhà bà em có một bụi chuối xanh tốt.',
      'Cây chuối ở góc vườn vừa trổ buồng.',
      'Nhà quê nào cũng có vài khóm chuối, nhà ông bà em cũng vậy.'
    ],
    look: [
      { part: 'Nhìn chung', items: [
        'cây cao hơn đầu người lớn',
        'tàu lá xoè ra như những chiếc quạt lớn',
        'quanh gốc mẹ có nhiều cây chuối con'
      ] },
      { part: 'Thân', items: [
        'thân tròn, thẳng, mát rượi khi sờ vào',
        'thân do nhiều bẹ ôm khít vào nhau',
        'màu xanh nhạt, có đốm nâu'
      ] },
      { part: 'Lá', items: [
        'lá to, dài như chiếc chiếu nhỏ',
        'lá non cuộn tròn như tờ giấy',
        'lá già bị gió xé thành từng dải'
      ] },
      { part: 'Hoa và quả', items: [
        'bắp chuối màu tím đỏ như ngọn lửa',
        'quả xếp thành nải, nải xếp thành buồng',
        'chuối chín vàng, thơm lừng, ngọt lịm'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo thời gian', items: [
        'cây lớn nhanh, tàu lá mới mọc liên tục',
        'trổ bắp, rồi nở ra từng nải chuối',
        'buồng chuối già, người ta chặt về ủ chín'
      ] },
      { part: 'Ích lợi', items: [
        'quả chuối ăn ngon, bổ dưỡng',
        'lá chuối gói bánh chưng, bánh tét',
        'bắp chuối làm nộm, thân chuối nuôi lợn'
      ] }
    ],
    bond: [
      'Tết năm nào em cũng cùng bà cắt lá chuối gói bánh chưng.',
      'Em thích núp dưới tàu lá chuối mỗi khi trời đổ mưa.',
      'Em hay dùng tàu lá chuối làm ngựa chơi cùng các bạn.'
    ],
    end: [
      'Cây chuối tuy bình dị nhưng rất có ích cho mọi người.',
      'Em yêu những khóm chuối xanh mát sau nhà bà.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'xanh mướt', use: 'Tàu lá chuối xanh mướt dưới nắng.' },
        { w: 'tím đỏ', use: 'Bắp chuối màu tím đỏ treo lủng lẳng.' },
        { w: 'mát rượi', use: 'Thân chuối mát rượi khi em áp tay vào.' },
        { w: 'cuộn tròn', use: 'Lá chuối non cuộn tròn như tờ giấy.' }
      ] },
      { group: 'Từ ngữ tả hoạt động', items: [
        { w: 'phe phẩy', use: 'Tàu lá chuối phe phẩy trong gió.' },
        { w: 'trổ buồng', use: 'Cây chuối vừa trổ buồng.' },
        { w: 'quây quần', use: 'Những cây chuối con quây quần bên gốc mẹ.' },
        { w: 'trĩu', use: 'Buồng chuối trĩu xuống nặng trịch.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như những chiếc quạt', use: 'Tàu lá chuối xoè ra như những chiếc quạt lớn.' },
        { w: 'như ngọn lửa', use: 'Bắp chuối đỏ tía như ngọn lửa.' },
        { w: 'như đàn con', use: 'Những cây chuối non vây quanh gốc như đàn con quấn mẹ.' },
        { w: 'như tờ giấy', use: 'Lá chuối non cuộn như tờ giấy.' }
      ] }
    ]
  },
  {
    id: 'tr-tre', type: 'tree', name: 'cây tre (lũy tre)',
    keys: ['cây tre', 'lũy tre', 'luỹ tre', 'bụi tre', 'rặng tre'],
    intro: [
      'Bao quanh làng quê nội em là những lũy tre xanh.',
      'Đầu làng em có một rặng tre xanh mát.',
      'Nhắc đến làng quê Việt Nam, ai cũng nhớ đến hình ảnh cây tre.'
    ],
    look: [
      { part: 'Nhìn từ xa', items: [
        'lũy tre xanh rì bao quanh làng',
        'ngọn tre cong cong, đung đưa trong gió',
        'các bụi tre mọc san sát bên nhau'
      ] },
      { part: 'Gốc và thân', items: [
        'gốc tre có nhiều rễ nhỏ bám chặt đất',
        'thân thẳng, tròn, chia thành nhiều đốt',
        'cành có gai nhọn, mọc từ các mắt tre'
      ] },
      { part: 'Lá', items: [
        'lá nhỏ, thon dài như mũi mác',
        'lá xanh tươi quanh năm',
        'lá khô rơi xuống, vàng cả gốc tre'
      ] },
      { part: 'Măng tre', items: [
        'măng nhọn hoắt nhú lên từ gốc',
        'bẹ măng như chiếc áo che chở măng non',
        'măng lớn rất nhanh, vươn thẳng lên trời'
      ] }
    ],
    acts: [
      { part: 'Thay đổi theo mùa', items: [
        'mùa xuân: lá non xanh mướt',
        'mùa mưa: măng mọc lên nhiều quanh gốc',
        'mùa bão: tre níu nhau, che chắn cho làng'
      ] },
      { part: 'Ích lợi', items: [
        'làm nhà, làm rổ rá, đòn gánh, chõng tre',
        'măng tre nấu canh, xào ăn rất ngon',
        'lũy tre che gió, giữ làng'
      ] }
    ],
    bond: [
      'Trưa hè, em thường cùng các bạn hóng mát dưới lũy tre.',
      'Em được ông dạy chẻ tre làm diều.',
      'Có lần em theo bà đi hái măng sau mưa ở bụi tre đầu làng.'
    ],
    end: [
      'Cây tre là người bạn gắn bó với làng quê em.',
      'Em yêu những lũy tre xanh thân thương của quê hương.'
    ],
    vocab: [
      { group: 'Từ ngữ tả hình dáng', items: [
        { w: 'xanh rì', use: 'Lũy tre xanh rì bao quanh làng.' },
        { w: 'thẳng tắp', use: 'Thân tre thẳng tắp vươn lên trời.' },
        { w: 'nhọn hoắt', use: 'Những mầm măng nhọn hoắt nhú lên từ gốc tre.' },
        { w: 'san sát', use: 'Các bụi tre mọc san sát bên nhau.' }
      ] },
      { group: 'Từ ngữ tả hoạt động, âm thanh', items: [
        { w: 'kẽo kẹt', use: 'Gió thổi, thân tre cọ vào nhau kẽo kẹt.' },
        { w: 'đung đưa', use: 'Ngọn tre đung đưa trong gió.' },
        { w: 'xào xạc', use: 'Lá tre xào xạc như đang hát.' },
        { w: 'che chở', use: 'Lũy tre che chở cho làng qua mưa bão.' }
      ] },
      { group: 'Hình ảnh so sánh', items: [
        { w: 'như mũi mác', use: 'Lá tre nhỏ và nhọn như mũi mác.' },
        { w: 'như bức tường', use: 'Lũy tre bao quanh làng như bức tường xanh.' },
        { w: 'như chiếc áo', use: 'Bẹ măng ôm lấy măng non như chiếc áo.' },
        { w: 'như người bạn', use: 'Cây tre gắn bó với người dân quê như người bạn thân.' }
      ] }
    ]
  }
);

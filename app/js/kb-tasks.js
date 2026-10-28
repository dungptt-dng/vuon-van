/* Kho kiến thức: HƯỚNG DẪN, ĐƠN, GIẤY MỜI, BÁO CÁO, Ý KIẾN */
VV.KB.push(

  /* ============ HƯỚNG DẪN THỰC HIỆN MỘT CÔNG VIỆC (craft) ============ */
  {
    id: 'cr-nghe-o', type: 'craft', name: 'Làm con nghé ọ bằng lá',
    topic: 'Hướng dẫn cách làm một chú nghé ọ bằng lá',
    keys: ['nghé ọ', 'con nghé', 'nghé bằng lá', 'trâu lá mít', 'con trâu bằng lá', 'lá mít'],
    intro: [
      'Chỉ với vài chiếc lá mít và mấy que tre nhỏ, các bạn đã có thể tự làm một chú nghé ọ xinh xắn để chơi.',
      'Đây là trò chơi dân gian quen thuộc của trẻ em nông thôn, vừa vui vừa không tốn tiền.'
    ],
    materials: [
      'Ba đến bốn chiếc lá mít to, còn xanh, không rách',
      'Năm que tre nhỏ hoặc tăm tre (một que để ghim, bốn que làm chân)',
      'Hai hạt đậu đen hoặc bút dạ đen để làm mắt',
      'Một chiếc kéo nhỏ'
    ],
    steps: [
      { h: 'Chọn và lau sạch lá', s: 'Đầu tiên, các bạn chọn những chiếc lá mít to, lành lặn rồi lau sạch bụi bằng khăn ẩm.' },
      { h: 'Cuộn lá làm thân nghé', s: 'Lấy một chiếc lá, cuộn tròn theo chiều dọc thành một cái ống vừa tay, rồi ghim chặt mép lá bằng một đoạn tăm; cuống lá để thò ra làm đuôi.' },
      { h: 'Cuộn lá thứ hai làm đầu', s: 'Tiếp theo, cuộn chiếc lá thứ hai thành hình cái phễu, đầu nhọn hướng ra trước làm mõm, rồi cắm phần loe vào một đầu ống thân và ghim lại.' },
      { h: 'Làm đôi sừng cong', s: 'Cắt hai dải lá nhỏ, cuộn mỗi dải thành một que mảnh rồi cài lên hai bên đầu, uốn hơi cong ra phía sau thành đôi sừng.' },
      { h: 'Cắm bốn chân cho nghé', s: 'Sau đó, cắm bốn que tre xuống dưới bụng nghé, hai que phía trước và hai que phía sau, sao cho nghé đứng vững trên bàn.' },
      { h: 'Gắn mắt, hoàn thành', s: 'Cuối cùng, gắn hai hạt đậu đen hoặc chấm bút dạ làm mắt, thế là chú nghé ọ đã sẵn sàng ra đồng.' }
    ],
    notes: [
      'Các bạn cẩn thận khi dùng kéo và tăm tre nhọn, không chĩa vào mặt bạn bên cạnh.',
      'Nên dùng lá còn tươi vì lá khô dễ gãy, khó cuộn.',
      'Muốn có cả đàn nghé, các bạn có thể làm thêm những chú nghé nhỏ bằng lá non.'
    ],
    end: [
      'Chú nghé ọ bằng lá trông thật ngộ nghĩnh với đôi sừng cong và cái đuôi ve vẩy. Chúc các bạn làm thành công và có những giờ chơi thật vui!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, các bạn chọn mấy chiếc lá mít thật to và lành lặn.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, các bạn cuộn chiếc lá thứ hai thành hình cái phễu.' },
        { w: 'Sau đó', use: 'Sau đó, cắm bốn que tre làm chân cho chú nghé.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, gắn hai hạt đậu đen làm mắt là xong.' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'cuộn tròn', use: 'Các bạn cuộn tròn chiếc lá theo chiều dọc thành một cái ống.' },
        { w: 'ghim', use: 'Dùng tăm tre ghim mép lá lại để ống không bị bung.' },
        { w: 'cài', use: 'Các bạn cài hai dải lá nhỏ lên đầu nghé làm sừng.' },
        { w: 'cắm', use: 'Cắm bốn que tre dưới bụng để chú nghé đứng vững.' },
        { w: 'uốn cong', use: 'Nhớ uốn cong đôi sừng ra phía sau cho giống thật.' }
      ] },
      { group: 'Từ ngữ tả sản phẩm', items: [
        { w: 'xinh xắn', use: 'Chú nghé ọ bằng lá trông thật xinh xắn.' },
        { w: 'ngộ nghĩnh', use: 'Đôi mắt đậu đen làm chú nghé thêm ngộ nghĩnh.' },
        { w: 'xanh mướt', use: 'Thân nghé làm bằng lá mít xanh mướt.' },
        { w: 'đứng vững', use: 'Nhờ bốn chân tre, chú nghé đứng vững trên mặt bàn.' }
      ] }
    ]
  },

  {
    id: 'cr-thuyen-giay', type: 'craft', name: 'Gấp thuyền giấy',
    topic: 'Hướng dẫn cách gấp một chiếc thuyền giấy',
    keys: ['thuyền giấy', 'gấp thuyền', 'con thuyền giấy', 'chiếc thuyền'],
    intro: [
      'Những ngày mưa, thả một chiếc thuyền giấy trôi trên vũng nước là niềm vui của biết bao bạn nhỏ.',
      'Gấp thuyền giấy rất dễ, chỉ cần một tờ giấy và một chút khéo léo.'
    ],
    materials: [
      'Một tờ giấy hình chữ nhật cỡ A4 (giấy màu hoặc giấy vở cũ)',
      'Bút màu để trang trí (nếu thích)'
    ],
    steps: [
      { h: 'Gấp đôi tờ giấy', s: 'Đầu tiên, các bạn đặt tờ giấy nằm ngang rồi gấp đôi từ trên xuống, miết thật phẳng nếp gấp.' },
      { h: 'Gấp hai góc vào giữa', s: 'Gấp đôi thêm một lần để lấy nếp giữa rồi mở ra; sau đó gấp hai góc trên vào sát nếp giữa, ta được hình như mái nhà.' },
      { h: 'Gấp mép dưới lên', s: 'Tiếp theo, gấp phần mép dưới còn thừa lên trên, mặt trước một lớp, lật sang mặt sau gấp lớp còn lại.' },
      { h: 'Mở đáy, ép thành hình vuông', s: 'Cho hai ngón tay vào phần đáy, mở rộng ra rồi ép dẹt lại, các bạn sẽ được một hình vuông.' },
      { h: 'Gấp góc dưới lên hai mặt', s: 'Gấp góc dưới của hình vuông lên trên ở cả hai mặt để được hình tam giác, rồi lại mở đáy và ép dẹt thành hình vuông nhỏ hơn.' },
      { h: 'Kéo hai góc ra, thành thuyền', s: 'Cuối cùng, cầm hai góc nhọn ở trên kéo nhẹ sang hai bên, chiếc thuyền giấy sẽ hiện ra với thân thuyền và cánh buồm ở giữa.' }
    ],
    notes: [
      'Mỗi nếp gấp nên miết thật kĩ để thuyền đứng dáng và chắc chắn.',
      'Nếu muốn thuyền nổi lâu hơn, các bạn có thể tô sáp màu kín đáy thuyền.',
      'Khi thả thuyền, chỉ chơi ở vũng nước nông hoặc chậu nước, tuyệt đối không ra gần ao, hồ, sông.'
    ],
    end: [
      'Thế là các bạn đã có một chiếc thuyền giấy xinh xắn để thả trôi. Chúc các bạn gấp thật nhiều thuyền và cùng nhau chơi thật vui!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Bước 1', use: 'Bước 1, các bạn gấp đôi tờ giấy từ trên xuống.' },
        { w: 'Bước 2', use: 'Bước 2, gấp hai góc trên vào sát nếp giữa.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, các bạn gấp mép dưới lên ở cả hai mặt.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, kéo nhẹ hai góc sang hai bên là có thuyền.' },
        { w: 'Thế là xong', use: 'Thế là xong một chiếc thuyền giấy thật đẹp!' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'gấp đôi', use: 'Các bạn gấp đôi tờ giấy sao cho hai mép trùng khít.' },
        { w: 'miết', use: 'Nhớ miết thật phẳng từng nếp gấp.' },
        { w: 'ép dẹt', use: 'Mở rộng phần đáy rồi ép dẹt lại thành hình vuông.' },
        { w: 'lật', use: 'Các bạn lật tờ giấy sang mặt sau và gấp tương tự.' },
        { w: 'kéo nhẹ', use: 'Kéo nhẹ hai góc nhọn sang hai bên để thuyền mở ra.' }
      ] },
      { group: 'Từ ngữ tả sản phẩm', items: [
        { w: 'thẳng thớm', use: 'Chiếc thuyền có nếp gấp thẳng thớm trông rất đẹp.' },
        { w: 'cánh buồm', use: 'Ở giữa thân thuyền nhô lên một cánh buồm nhỏ.' },
        { w: 'bập bềnh', use: 'Chiếc thuyền giấy bập bềnh trôi trên vũng nước mưa.' },
        { w: 'nhẹ tênh', use: 'Thuyền giấy nhẹ tênh nên chỉ một làn gió cũng đẩy nó đi.' }
      ] }
    ]
  },

  {
    id: 'cr-thiep', type: 'craft', name: 'Làm thiệp chúc mừng',
    topic: 'Hướng dẫn cách làm một tấm thiệp chúc mừng',
    keys: ['thiệp chúc mừng', 'làm thiệp', 'tấm thiệp', 'thiệp tặng', 'thiệp 20-11', 'thiệp sinh nhật'],
    intro: [
      'Một tấm thiệp tự tay làm sẽ là món quà ý nghĩa để tặng thầy cô, bố mẹ hay bạn bè vào những ngày đặc biệt.',
      'Cách làm thiệp rất đơn giản, các bạn hãy cùng thử nhé!'
    ],
    materials: [
      'Một tờ giấy bìa màu cỡ A4',
      'Vài tờ giấy màu khác nhau',
      'Kéo, hồ dán hoặc băng dính hai mặt',
      'Bút chì, bút màu, bút nhũ',
      'Ruy băng, hạt trang trí hoặc nhãn dán (nếu có)'
    ],
    steps: [
      { h: 'Gấp đôi tờ bìa', s: 'Đầu tiên, các bạn gấp đôi tờ bìa màu theo chiều ngang, miết thẳng nếp để được một tấm thiệp mở ra như quyển sách.' },
      { h: 'Vẽ và cắt hình trang trí', s: 'Tiếp theo, vẽ lên giấy màu những hình các bạn thích như bông hoa, trái tim hay ngôi sao, rồi cắt theo nét vẽ.' },
      { h: 'Dán hình lên mặt trước', s: 'Sau đó, bôi hồ vào mặt sau các hình và dán lên mặt trước của thiệp, sắp xếp sao cho cân đối, hài hoà.' },
      { h: 'Viết dòng chữ chúc mừng', s: 'Dùng bút nhũ hoặc bút màu viết dòng chữ thật to và đẹp như “Chúc mừng ngày Nhà giáo Việt Nam” hay “Chúc mừng sinh nhật”.' },
      { h: 'Viết lời chúc bên trong', s: 'Mở thiệp ra, viết vài lời chúc chân thành gửi người nhận, cuối thiệp ghi tên của mình.' },
      { h: 'Trang trí thêm cho đẹp', s: 'Cuối cùng, gắn thêm ruy băng, hạt cườm hoặc vẽ những chấm màu nhỏ quanh viền để tấm thiệp thêm nổi bật.' }
    ],
    notes: [
      'Khi dùng kéo, các bạn cắt chậm, xa tay, xong việc thì cất kéo cẩn thận.',
      'Chỉ bôi một lớp hồ mỏng để giấy không bị nhăn.',
      'Nên viết nháp lời chúc ra giấy trước để không viết sai lên thiệp.'
    ],
    end: [
      'Chỉ một lúc thôi, tấm thiệp rực rỡ sắc màu đã hoàn thành. Chúc các bạn làm được những tấm thiệp thật đẹp để trao tặng người mình yêu quý!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, các bạn gấp đôi tờ bìa màu.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, vẽ và cắt những bông hoa nhỏ bằng giấy màu.' },
        { w: 'Sau đó', use: 'Sau đó, dán các hình đã cắt lên mặt trước của thiệp.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, viết lời chúc và ghi tên mình bên trong thiệp.' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'cắt', use: 'Các bạn cắt chậm theo nét bút chì để hình không bị lệch.' },
        { w: 'dán', use: 'Dán bông hoa vào góc trên của tấm thiệp.' },
        { w: 'trang trí', use: 'Các bạn có thể trang trí thêm ruy băng quanh viền thiệp.' },
        { w: 'sắp xếp', use: 'Hãy sắp xếp các hình cho cân đối trước khi dán.' },
        { w: 'tô màu', use: 'Các bạn tô màu cho những ngôi sao thật tươi sáng.' }
      ] },
      { group: 'Từ ngữ tả sản phẩm', items: [
        { w: 'rực rỡ', use: 'Tấm thiệp rực rỡ sắc màu làm cô giáo rất vui.' },
        { w: 'xinh xắn', use: 'Những trái tim nhỏ xinh xắn nằm gọn trên mặt thiệp.' },
        { w: 'nổi bật', use: 'Dòng chữ bút nhũ nổi bật giữa nền bìa màu xanh.' },
        { w: 'chân thành', use: 'Em viết những lời chúc chân thành gửi tới cô.' }
      ] }
    ]
  },

  {
    id: 'cr-trong-cay', type: 'craft', name: 'Trồng một cây non trong chậu',
    topic: 'Hướng dẫn cách trồng một cây non',
    keys: ['trồng cây', 'trồng một cây non', 'cây non', 'trồng cây vào chậu', 'chậu cây'],
    intro: [
      'Tự tay trồng một cây non và ngắm nó lớn lên từng ngày là niềm vui rất đặc biệt.',
      'Các bạn có thể trồng một cây hoa hay cây cảnh nhỏ trong chậu để đặt ở góc học tập hoặc ban công.'
    ],
    materials: [
      'Một cây non còn nguyên bầu đất (cây hoa, cây sen đá, cây trầu bà…)',
      'Một chiếc chậu có lỗ thoát nước ở đáy',
      'Đất trồng tơi xốp đã trộn phân hữu cơ',
      'Một nắm sỏi nhỏ hoặc mảnh gạch vỡ',
      'Xẻng nhỏ hoặc bay trồng cây, găng tay',
      'Bình tưới nước có vòi nhỏ'
    ],
    steps: [
      { h: 'Lót sỏi dưới đáy chậu', s: 'Đầu tiên, các bạn rải một lớp sỏi nhỏ dưới đáy chậu để nước thoát dễ dàng, rễ cây không bị úng.' },
      { h: 'Cho đất vào nửa chậu', s: 'Tiếp theo, đổ đất trồng vào khoảng một nửa chậu, dùng xẻng nhỏ đào một hố ở giữa vừa bằng bầu đất của cây.' },
      { h: 'Gỡ túi bầu, đặt cây', s: 'Nhẹ nhàng gỡ túi ni lông bọc bầu đất, giữ nguyên đất quanh rễ, rồi đặt cây thẳng đứng vào giữa hố.' },
      { h: 'Lấp đất, nén nhẹ gốc', s: 'Sau đó, cho thêm đất lấp kín bầu, cách miệng chậu khoảng hai đốt ngón tay, rồi dùng tay nén nhẹ quanh gốc cho cây đứng vững.' },
      { h: 'Tưới nước từ từ', s: 'Dùng bình tưới nước từ từ quanh gốc cho đến khi thấy nước chảy ra ở lỗ dưới đáy chậu.' },
      { h: 'Đặt chậu nơi có nắng nhẹ', s: 'Cuối cùng, đặt chậu ở nơi thoáng, có ánh nắng nhẹ; mấy ngày đầu nên tránh nắng gắt để cây kịp bén rễ.' }
    ],
    notes: [
      'Các bạn nên đeo găng tay khi trồng cây và rửa tay sạch bằng xà phòng sau khi làm xong.',
      'Chỉ tưới khi mặt đất khô, tưới quá nhiều nước sẽ làm thối rễ.',
      'Mỗi tuần nên nhổ cỏ dại và xới nhẹ đất quanh gốc cho cây dễ thở.'
    ],
    end: [
      'Chỉ ít ngày sau, cây non sẽ bén rễ và nhú ra những chiếc lá mới xanh mơn mởn. Chúc các bạn trồng cây thành công và luôn chăm sóc cây thật chu đáo!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, các bạn lót một lớp sỏi nhỏ dưới đáy chậu.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, đổ đất vào khoảng một nửa chậu.' },
        { w: 'Sau đó', use: 'Sau đó, lấp đất và nén nhẹ quanh gốc cây.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, đặt chậu ở nơi có ánh nắng nhẹ.' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'lót', use: 'Các bạn lót sỏi dưới đáy để chậu thoát nước tốt.' },
        { w: 'đào hố', use: 'Dùng xẻng nhỏ đào hố ở giữa chậu vừa bằng bầu đất.' },
        { w: 'lấp đất', use: 'Các bạn lấp đất kín bầu rồi nén nhẹ cho chắc.' },
        { w: 'tưới', use: 'Tưới nước từ từ quanh gốc để đất ngấm đều.' },
        { w: 'xới', use: 'Thỉnh thoảng các bạn xới đất cho tơi xốp.' }
      ] },
      { group: 'Từ ngữ tả cây và đất', items: [
        { w: 'tơi xốp', use: 'Đất trồng tơi xốp giúp rễ cây dễ dàng phát triển.' },
        { w: 'bén rễ', use: 'Sau vài ngày, cây non đã bén rễ trong chậu.' },
        { w: 'xanh mơn mởn', use: 'Những chiếc lá mới nhú ra xanh mơn mởn.' },
        { w: 'úng', use: 'Nếu tưới quá nhiều, rễ cây sẽ bị úng và thối.' }
      ] }
    ]
  },

  {
    id: 'cr-nuoc-chanh', type: 'craft', name: 'Pha nước chanh',
    topic: 'Hướng dẫn cách pha một cốc nước chanh',
    keys: ['nước chanh', 'pha nước chanh', 'cốc nước chanh', 'pha chanh', 'chanh đá'],
    intro: [
      'Những ngày hè oi bức, một cốc nước chanh mát lạnh sẽ giúp chúng ta giải khát và thấy khoẻ khoắn hơn.',
      'Pha nước chanh rất dễ, các bạn có thể tự làm để mời cả nhà.'
    ],
    materials: [
      'Một quả chanh tươi',
      'Hai thìa đường (khoảng 20 gam)',
      'Một cốc nước đun sôi để nguội (khoảng 200 mi-li-lít)',
      'Vài viên đá',
      'Dao nhỏ, thớt, dụng cụ vắt chanh, thìa khuấy và một chiếc cốc'
    ],
    steps: [
      { h: 'Rửa sạch quả chanh', s: 'Đầu tiên, các bạn rửa sạch tay và rửa quả chanh dưới vòi nước.' },
      { h: 'Cắt đôi quả chanh', s: 'Đặt quả chanh lên thớt, cắt ngang làm đôi; nếu chưa quen dùng dao, các bạn hãy nhờ người lớn giúp.' },
      { h: 'Vắt lấy nước cốt', s: 'Tiếp theo, vắt chanh vào cốc bằng dụng cụ vắt, vắt nhẹ tay và nhặt bỏ hết hạt.' },
      { h: 'Hoà đường cho tan', s: 'Cho hai thìa đường và một ít nước vào cốc, khuấy đều cho đường tan hết.' },
      { h: 'Thêm nước và nếm thử', s: 'Sau đó, rót thêm nước cho gần đầy cốc, khuấy đều rồi nếm thử; nếu chua quá thì thêm đường, nhạt quá thì thêm chanh.' },
      { h: 'Thả đá và thưởng thức', s: 'Cuối cùng, thả vài viên đá vào cốc là các bạn đã có một cốc nước chanh mát lạnh.' }
    ],
    notes: [
      'Phải dùng nước đun sôi để nguội hoặc nước lọc sạch, không dùng nước lã.',
      'Không nên vắt quá mạnh vì tinh dầu ở vỏ chanh sẽ làm nước bị đắng.',
      'Dao rất sắc, các bạn cầm dao cẩn thận và cất dao ngay sau khi dùng xong.'
    ],
    end: [
      'Cốc nước chanh vàng nhạt, chua chua ngọt ngọt, mát lạnh thật dễ chịu. Chúc các bạn pha thành công và mời cả nhà cùng thưởng thức!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, các bạn rửa sạch tay và quả chanh.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, vắt chanh vào cốc và bỏ hết hạt.' },
        { w: 'Sau đó', use: 'Sau đó, cho đường vào và khuấy cho tan.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, thả vài viên đá vào cốc là xong.' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'vắt', use: 'Các bạn vắt chanh nhẹ tay để nước không bị đắng.' },
        { w: 'khuấy đều', use: 'Dùng thìa khuấy đều cho đường tan hết.' },
        { w: 'rót', use: 'Rót thêm nước đun sôi để nguội cho gần đầy cốc.' },
        { w: 'nếm thử', use: 'Các bạn nhớ nếm thử trước khi thả đá.' },
        { w: 'thả', use: 'Thả vài viên đá vào để cốc nước thêm mát.' }
      ] },
      { group: 'Từ ngữ tả hương vị', items: [
        { w: 'chua chua ngọt ngọt', use: 'Nước chanh có vị chua chua ngọt ngọt rất dễ uống.' },
        { w: 'mát lạnh', use: 'Uống một ngụm nước chanh mát lạnh, em thấy thật sảng khoái.' },
        { w: 'thơm dịu', use: 'Cốc nước chanh thơm dịu mùi chanh tươi.' },
        { w: 'sảng khoái', use: 'Sau giờ chơi, một cốc nước chanh làm em thấy sảng khoái.' }
      ] }
    ]
  },

  {
    id: 'cr-may-bay-giay', type: 'craft', name: 'Gấp máy bay giấy',
    topic: 'Hướng dẫn cách gấp một chiếc máy bay giấy',
    keys: ['máy bay giấy', 'gấp máy bay', 'phi cơ giấy', 'chiếc máy bay'],
    intro: [
      'Gấp máy bay giấy rồi phóng lên cao là trò chơi mà bạn nhỏ nào cũng thích.',
      'Chỉ cần một tờ giấy và vài phút, các bạn đã có một chiếc máy bay bay xa vun vút.'
    ],
    materials: [
      'Một tờ giấy hình chữ nhật cỡ A4',
      'Bút màu để vẽ trang trí (nếu thích)'
    ],
    steps: [
      { h: 'Lấy nếp gấp ở giữa', s: 'Đầu tiên, các bạn đặt tờ giấy nằm dọc, gấp đôi theo chiều dọc để lấy nếp giữa rồi mở ra.' },
      { h: 'Gấp hai góc trên vào giữa', s: 'Tiếp theo, gấp hai góc trên vào sát nếp giữa, ta được một đầu nhọn như mũi tên.' },
      { h: 'Gấp mép xiên lần nữa', s: 'Gấp tiếp hai mép xiên vào sát nếp giữa thêm một lần để mũi máy bay nhọn và chắc hơn.' },
      { h: 'Gấp đôi thân máy bay', s: 'Sau đó, gấp đôi cả tờ giấy theo nếp giữa sao cho các phần đã gấp nằm ở phía ngoài.' },
      { h: 'Gấp hai cánh xuống', s: 'Gấp mỗi bên cánh xuống sao cho mép cánh trùng với mép dưới của thân, làm giống nhau ở cả hai bên.' },
      { h: 'Mở cánh và phóng thử', s: 'Cuối cùng, mở hai cánh ra cho phẳng ngang, cầm ở phần thân dưới cánh rồi phóng nhẹ về phía trước.' }
    ],
    notes: [
      'Không phóng máy bay vào mặt người khác vì mũi máy bay nhọn có thể làm đau mắt.',
      'Hai cánh phải gấp đều nhau thì máy bay mới bay thẳng.',
      'Nên chơi ở sân rộng, không trèo lên lan can hay chỗ cao để phóng.'
    ],
    end: [
      'Chiếc máy bay giấy đã sẵn sàng cất cánh. Chúc các bạn gấp được những chiếc máy bay bay thật xa!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Bước 1', use: 'Bước 1, các bạn gấp đôi tờ giấy theo chiều dọc để lấy nếp giữa.' },
        { w: 'Bước 2', use: 'Bước 2, gấp hai góc trên vào sát nếp giữa.' },
        { w: 'Sau đó', use: 'Sau đó, gấp đôi cả tờ giấy theo nếp giữa.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, mở hai cánh ra và phóng thử.' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'gấp', use: 'Các bạn gấp hai mép xiên vào thật khít.' },
        { w: 'miết', use: 'Nhớ miết thật kĩ các nếp gấp để máy bay cứng cáp.' },
        { w: 'mở', use: 'Các bạn mở hai cánh ra cho phẳng ngang.' },
        { w: 'phóng', use: 'Cầm thân máy bay rồi phóng nhẹ về phía trước.' }
      ] },
      { group: 'Từ ngữ tả sản phẩm', items: [
        { w: 'vun vút', use: 'Chiếc máy bay giấy lao vun vút qua sân trường.' },
        { w: 'nhọn hoắt', use: 'Mũi máy bay nhọn hoắt nên phải phóng cẩn thận.' },
        { w: 'chao liệng', use: 'Máy bay chao liệng mấy vòng rồi đáp xuống bãi cỏ.' },
        { w: 'thăng bằng', use: 'Hai cánh gấp đều giúp máy bay giữ thăng bằng.' }
      ] }
    ]
  },

  {
    id: 'cr-dieu-giay', type: 'craft', name: 'Làm diều giấy đơn giản',
    topic: 'Hướng dẫn cách làm một chiếc diều giấy đơn giản',
    keys: ['diều giấy', 'làm diều', 'con diều', 'thả diều', 'cánh diều'],
    intro: [
      'Được thả chiếc diều do chính tay mình làm bay lên bầu trời là niềm vui khó quên của tuổi thơ.',
      'Với giấy và hai nan tre, các bạn có thể làm một chiếc diều hình thoi thật đơn giản.'
    ],
    materials: [
      'Hai nan tre mảnh, nhẵn: một nan dài khoảng 50 xăng-ti-mét, một nan dài khoảng 40 xăng-ti-mét',
      'Một tờ giấy bóng kính hoặc giấy pơ-luya to hơn khung diều',
      'Một cuộn chỉ to hoặc dây dù mảnh',
      'Kéo, hồ dán hoặc băng dính',
      'Vài dải giấy màu dài để làm đuôi diều'
    ],
    steps: [
      { h: 'Buộc hai nan thành chữ thập', s: 'Đầu tiên, các bạn đặt nan ngắn vắt ngang nan dài, cách đầu nan dài khoảng một phần tư, rồi buộc chặt chỗ giao nhau thành hình chữ thập.' },
      { h: 'Căng dây làm khung thoi', s: 'Tiếp theo, buộc một sợi chỉ nối lần lượt bốn đầu nan và căng thật thẳng, ta được khung diều hình thoi.' },
      { h: 'Dán giấy lên khung', s: 'Đặt khung lên tờ giấy, cắt giấy rộng hơn khung khoảng hai đốt ngón tay, rồi gấp mép giấy bọc qua sợi chỉ và dán lại.' },
      { h: 'Gắn đuôi diều', s: 'Sau đó, dán mấy dải giấy màu dài vào đầu dưới của diều làm đuôi để diều bay ổn định, không bị lộn vòng.' },
      { h: 'Buộc dây lèo và dây thả', s: 'Cuối cùng, buộc một sợi dây lèo nối hai đầu nan dài ở mặt trước, rồi buộc dây thả vào dây lèo ở điểm gần đầu diều hơn.' }
    ],
    notes: [
      'Nan tre có thể có dằm sắc, các bạn nên nhờ người lớn chuốt nan cho nhẵn.',
      'Chỉ thả diều ở bãi đất trống, xa đường dây điện, xa đường có xe cộ và không trèo lên mái nhà.',
      'Nếu diều cứ chúi xuống, hãy dịch điểm buộc dây thả lên gần đầu diều hoặc nối đuôi dài thêm.'
    ],
    end: [
      'Chiếc diều xinh xắn đã sẵn sàng bay lên đón gió. Chúc các bạn có những buổi chiều thả diều thật vui!'
    ],
    vocab: [
      { group: 'Từ chỉ thứ tự các bước', items: [
        { w: 'Đầu tiên', use: 'Đầu tiên, các bạn buộc hai nan tre thành hình chữ thập.' },
        { w: 'Tiếp theo', use: 'Tiếp theo, căng chỉ nối bốn đầu nan thành khung thoi.' },
        { w: 'Sau đó', use: 'Sau đó, dán đuôi diều bằng những dải giấy màu.' },
        { w: 'Cuối cùng', use: 'Cuối cùng, buộc dây lèo và dây thả là có thể đem diều đi thả.' }
      ] },
      { group: 'Động từ chỉ thao tác', items: [
        { w: 'buộc chặt', use: 'Các bạn buộc chặt chỗ hai nan giao nhau.' },
        { w: 'căng', use: 'Nhớ căng sợi chỉ thật thẳng giữa các đầu nan.' },
        { w: 'bọc', use: 'Gấp mép giấy bọc qua sợi chỉ rồi dán lại.' },
        { w: 'chuốt', use: 'Nhờ bố chuốt nan tre cho thật nhẵn.' },
        { w: 'thả', use: 'Các bạn chạy ngược chiều gió và thả dây từ từ.' }
      ] },
      { group: 'Từ ngữ tả cánh diều', items: [
        { w: 'chao nghiêng', use: 'Cánh diều chao nghiêng rồi vút lên cao.' },
        { w: 'lơ lửng', use: 'Chiếc diều lơ lửng giữa bầu trời xanh.' },
        { w: 'phấp phới', use: 'Đuôi diều bay phấp phới trong gió.' },
        { w: 'no gió', use: 'Cánh diều no gió căng phồng lên.' }
      ] }
    ]
  },

  /* ============ HƯỚNG DẪN SỬ DỤNG MỘT SẢN PHẨM (product) ============ */
  {
    id: 'pd-but-may', type: 'product', name: 'Bút máy',
    topic: 'Viết hướng dẫn sử dụng chiếc bút máy',
    keys: ['bút máy', 'cây bút máy', 'chiếc bút máy', 'bơm mực', 'ngòi bút'],
    intro: [
      'Bút máy là người bạn thân thiết giúp học sinh viết chữ đều, đẹp và rõ nét.',
      'Muốn bút viết trơn và dùng được lâu, các bạn cần biết cách sử dụng và giữ gìn bút đúng cách.'
    ],
    parts: [
      { part: 'Nắp bút', items: ['có kẹp nhỏ để cài vào túi áo hoặc hộp bút', 'đậy kín ngòi để mực không bị khô'] },
      { part: 'Ngòi bút', items: ['làm bằng kim loại, đầu nhỏ có khe chẻ ở giữa', 'dẫn mực từ ống mực xuống trang giấy'] },
      { part: 'Thân bút và ống mực', items: ['thân bút vặn ra được để lấy mực', 'bên trong có ống bơm mực hoặc ống mực thay được'] }
    ],
    steps: [
      { h: 'Mở nắp, vặn thân bút', s: 'Đầu tiên, các bạn mở nắp bút rồi vặn tháo phần thân để nhìn thấy ống bơm mực.' },
      { h: 'Bơm mực vào ống', s: 'Nhúng ngòi bút ngập vào lọ mực, bóp hoặc vặn ống bơm từ từ để hút mực cho đầy ống.' },
      { h: 'Lau sạch ngòi bút', s: 'Tiếp theo, nhấc bút lên, dùng giấy thấm hoặc khăn mềm lau sạch mực dính ngoài ngòi.' },
      { h: 'Lắp lại thân bút', s: 'Sau đó, vặn thân bút vào thật khít để mực không bị rỉ ra ngoài.' },
      { h: 'Cầm bút và viết', s: 'Khi viết, các bạn cầm bút bằng ba ngón tay, để bút nghiêng vừa phải và đưa ngòi nhẹ nhàng, không ấn mạnh.' },
      { h: 'Đậy nắp sau khi viết', s: 'Cuối cùng, viết xong nhớ đậy nắp ngay để ngòi không bị khô mực và không bị va đập.' }
    ],
    notes: [
      'Không để bút rơi xuống đất vì ngòi bút rất dễ bị toè, viết sẽ xấu và nhoè.',
      'Chỉ nên dùng một loại mực; khi đổi mực, hãy rửa ngòi bằng nước sạch trước.',
      'Không cho bạn mượn viết thường xuyên vì mỗi người cầm bút một kiểu, ngòi dễ bị lệch.',
      'Sau một thời gian, các bạn nên rửa ngòi bằng nước ấm rồi phơi khô để mực ra đều.'
    ],
    end: [
      'Nếu sử dụng và giữ gìn cẩn thận, chiếc bút máy sẽ đồng hành cùng các bạn suốt năm học, giúp chúng ta luyện được những nét chữ thật đẹp.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ thao tác', items: [
        { w: 'mở nắp', use: 'Các bạn mở nắp bút trước khi bơm mực.' },
        { w: 'vặn', use: 'Vặn nhẹ thân bút để tháo ra.' },
        { w: 'bơm mực', use: 'Em nhúng ngòi vào lọ rồi bơm mực thật từ từ.' },
        { w: 'lau sạch', use: 'Nhớ lau sạch ngòi bút sau khi bơm mực.' },
        { w: 'đậy nắp', use: 'Viết xong, các bạn đậy nắp bút ngay.' }
      ] },
      { group: 'Từ ngữ chỉ bộ phận', items: [
        { w: 'ngòi bút', use: 'Ngòi bút sáng loáng có một khe nhỏ ở giữa.' },
        { w: 'ống mực', use: 'Ống mực nằm gọn bên trong thân bút.' },
        { w: 'kẹp bút', use: 'Kẹp bút giúp em cài bút vào túi áo.' },
        { w: 'thân bút', use: 'Thân bút tròn, cầm vừa tay em.' }
      ] },
      { group: 'Từ ngữ khuyên nhủ', items: [
        { w: 'Không nên', use: 'Không nên ấn mạnh ngòi khi viết.' },
        { w: 'Cần', use: 'Cần đậy nắp bút ngay khi viết xong.' },
        { w: 'Tránh', use: 'Tránh để bút rơi xuống đất làm toè ngòi.' },
        { w: 'nhẹ nhàng', use: 'Các bạn hãy đưa ngòi bút thật nhẹ nhàng trên trang giấy.' }
      ] }
    ]
  },

  {
    id: 'pd-quat-dien', type: 'product', name: 'Quạt điện',
    topic: 'Viết hướng dẫn sử dụng chiếc quạt điện',
    keys: ['quạt điện', 'cái quạt', 'chiếc quạt', 'quạt cây', 'quạt bàn'],
    intro: [
      'Quạt điện tạo ra luồng gió mát, giúp cả nhà dễ chịu hơn trong những ngày hè nóng nực.',
      'Để dùng quạt an toàn và bền lâu, các bạn hãy làm theo hướng dẫn dưới đây.'
    ],
    parts: [
      { part: 'Đế và thân quạt', items: ['đế quạt to, nặng giúp quạt đứng vững', 'trên thân có bảng nút bấm số 0, 1, 2, 3 và núm quay'] },
      { part: 'Cánh quạt và lồng quạt', items: ['cánh quạt quay tròn để tạo ra gió', 'lồng quạt bằng nhựa hoặc kim loại bao quanh, che chắn cánh quạt'] },
      { part: 'Dây điện và phích cắm', items: ['dây điện nối quạt với ổ điện', 'phích cắm để cắm vào ổ điện'] }
    ],
    steps: [
      { h: 'Đặt quạt nơi bằng phẳng', s: 'Đầu tiên, các bạn đặt quạt ở chỗ bằng phẳng, chắc chắn, cách người ngồi khoảng một đến hai mét.' },
      { h: 'Cắm điện khi tay khô', s: 'Khi tay thật khô, cầm vào phần nhựa của phích cắm và cắm vào ổ điện.' },
      { h: 'Chọn số gió phù hợp', s: 'Tiếp theo, bấm nút số 1 để có gió nhẹ, số 2 gió vừa, số 3 gió mạnh.' },
      { h: 'Cho quạt quay qua lại', s: 'Muốn quạt quay qua lại cho gió thổi khắp phòng, các bạn ấn núm quay ở phía sau đầu quạt xuống; kéo núm lên thì quạt đứng yên.' },
      { h: 'Tắt quạt, rút phích', s: 'Cuối cùng, khi không dùng nữa, bấm nút số 0 để tắt quạt rồi rút phích cắm ra khỏi ổ điện.' }
    ],
    notes: [
      'Tuyệt đối không thò ngón tay, bút hay que vào lồng quạt khi cánh đang quay.',
      'Không để quạt thổi thẳng vào người quá lâu, nhất là khi ngủ hoặc lúc người đang ra nhiều mồ hôi.',
      'Phải tắt quạt và rút phích cắm trước khi lau chùi; việc tháo lồng quạt để vệ sinh nên nhờ người lớn làm.',
      'Nếu quạt có mùi khét hoặc tiếng kêu lạ, hãy tắt ngay, rút điện và báo cho bố mẹ.'
    ],
    end: [
      'Biết cách sử dụng đúng, chiếc quạt điện sẽ mang lại cho gia đình những làn gió mát lành suốt mùa hè.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ thao tác', items: [
        { w: 'cắm điện', use: 'Các bạn chỉ cắm điện khi tay đã khô.' },
        { w: 'bấm nút', use: 'Em bấm nút số 2 để quạt chạy gió vừa.' },
        { w: 'ấn núm', use: 'Ấn núm quay xuống thì quạt sẽ quay qua lại.' },
        { w: 'tắt', use: 'Ra khỏi phòng, các bạn nhớ tắt quạt.' },
        { w: 'rút phích cắm', use: 'Trước khi lau quạt, phải rút phích cắm ra.' }
      ] },
      { group: 'Từ ngữ chỉ bộ phận', items: [
        { w: 'cánh quạt', use: 'Cánh quạt quay tít tạo ra luồng gió mát.' },
        { w: 'lồng quạt', use: 'Lồng quạt che chắn để tay không chạm vào cánh.' },
        { w: 'đế quạt', use: 'Đế quạt nặng giúp quạt không bị đổ.' },
        { w: 'bảng nút bấm', use: 'Bảng nút bấm có các số 0, 1, 2, 3.' }
      ] },
      { group: 'Từ ngữ lưu ý an toàn', items: [
        { w: 'Tuyệt đối không', use: 'Tuyệt đối không thò tay vào lồng quạt.' },
        { w: 'an toàn', use: 'Đặt quạt ở chỗ bằng phẳng để sử dụng an toàn.' },
        { w: 'báo cho người lớn', use: 'Khi thấy quạt có mùi khét, em tắt quạt và báo cho người lớn.' },
        { w: 'mát lành', use: 'Chiếc quạt mang lại những làn gió mát lành.' }
      ] }
    ]
  },

  {
    id: 'pd-binh-giu-nhiet', type: 'product', name: 'Bình giữ nhiệt',
    topic: 'Viết hướng dẫn sử dụng bình giữ nhiệt',
    keys: ['bình giữ nhiệt', 'bình nước giữ nhiệt', 'bình nước', 'cốc giữ nhiệt'],
    intro: [
      'Bình giữ nhiệt giúp nước nóng vẫn nóng, nước mát vẫn mát trong nhiều giờ liền.',
      'Mang bình giữ nhiệt đến trường, các bạn luôn có nước sạch để uống mà không cần dùng chai nhựa.'
    ],
    parts: [
      { part: 'Nắp bình', items: ['vặn kín miệng bình', 'có vòng cao su (gioăng) giúp nước không bị rò ra'] },
      { part: 'Thân bình', items: ['gồm hai lớp thép không gỉ, ở giữa là lớp chân không giúp giữ nhiệt', 'bên ngoài thường có màu sắc và hình in đẹp mắt'] },
      { part: 'Quai xách và đáy bình', items: ['quai xách hoặc dây đeo giúp mang đi dễ dàng', 'đáy bình phẳng để bình đứng vững'] }
    ],
    steps: [
      { h: 'Rửa sạch trước khi dùng', s: 'Đầu tiên, các bạn rửa bình và nắp bằng nước ấm pha chút nước rửa chén, tráng lại bằng nước sạch.' },
      { h: 'Tráng bình trước', s: 'Muốn giữ nóng lâu, hãy tráng bình bằng một ít nước ấm; muốn giữ lạnh lâu, tráng bằng nước mát rồi đổ đi.' },
      { h: 'Rót nước không quá đầy', s: 'Tiếp theo, rót nước vào bình, chừa lại khoảng hai đốt ngón tay tính từ miệng bình.' },
      { h: 'Vặn chặt nắp bình', s: 'Sau đó, vặn nắp thật chặt, dốc ngược thử xem nước có bị rò ra không.' },
      { h: 'Mở nắp từ từ khi uống', s: 'Khi uống, mở nắp từ từ, rót ra nắp hoặc cốc và thử trước một ngụm nhỏ để không bị bỏng.' }
    ],
    notes: [
      'Không đựng nước có ga vì hơi ga có thể làm bật nắp bình.',
      'Không cho bình vào lò vi sóng, tủ đông hoặc đặt lên bếp.',
      'Không đựng sữa, nước hoa quả quá lâu trong bình vì dễ bị chua, có mùi.',
      'Tránh làm rơi bình vì bình bị móp sẽ không giữ nhiệt tốt nữa; sau mỗi ngày nên rửa sạch, mở nắp cho bình thật khô.'
    ],
    end: [
      'Sử dụng đúng cách, chiếc bình giữ nhiệt sẽ là người bạn đồng hành giúp các bạn luôn có nước uống đủ mỗi ngày.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ thao tác', items: [
        { w: 'tráng', use: 'Các bạn tráng bình bằng nước ấm trước khi rót nước nóng.' },
        { w: 'rót', use: 'Rót nước vào bình nhưng không rót quá đầy.' },
        { w: 'vặn chặt', use: 'Nhớ vặn chặt nắp để nước không rò ra cặp sách.' },
        { w: 'dốc ngược', use: 'Em dốc ngược bình để thử xem nắp đã kín chưa.' },
        { w: 'úp ngược', use: 'Rửa xong, các bạn úp ngược bình cho ráo nước.' }
      ] },
      { group: 'Từ ngữ chỉ bộ phận', items: [
        { w: 'nắp bình', use: 'Nắp bình có một vòng cao su nhỏ bên trong.' },
        { w: 'gioăng cao su', use: 'Gioăng cao su giúp nước không bị rò ra ngoài.' },
        { w: 'thân bình', use: 'Thân bình làm bằng thép không gỉ rất chắc chắn.' },
        { w: 'quai xách', use: 'Quai xách giúp em mang bình đi học dễ dàng.' }
      ] },
      { group: 'Từ ngữ lưu ý, bảo quản', items: [
        { w: 'Không nên', use: 'Không nên đựng nước có ga trong bình giữ nhiệt.' },
        { w: 'bị bỏng', use: 'Uống từng ngụm nhỏ để không bị bỏng.' },
        { w: 'móp', use: 'Bình bị móp sẽ giữ nhiệt kém đi.' },
        { w: 'khô ráo', use: 'Hãy để bình ở nơi khô ráo sau khi rửa.' }
      ] }
    ]
  },

  {
    id: 'pd-o-to-dieu-khien', type: 'product', name: 'Xe ô tô đồ chơi điều khiển từ xa',
    topic: 'Viết hướng dẫn sử dụng một đồ chơi em thích',
    keys: ['ô tô điều khiển', 'xe điều khiển', 'xe ô tô đồ chơi', 'điều khiển từ xa', 'đồ chơi em thích', 'ô tô đồ chơi'],
    intro: [
      'Xe ô tô điều khiển từ xa là món đồ chơi thú vị, giúp các bạn tự mình lái xe chạy tới, chạy lui, rẽ trái, rẽ phải.',
      'Muốn chơi vui và giữ xe được bền, các bạn hãy đọc kĩ hướng dẫn sau.'
    ],
    parts: [
      { part: 'Chiếc xe', items: ['thân xe bằng nhựa cứng, có bốn bánh cao su', 'dưới gầm xe có công tắc bật/tắt (ON/OFF) và ngăn đựng pin'] },
      { part: 'Bộ điều khiển', items: ['có cần gạt tiến, lùi và cần gạt rẽ trái, rẽ phải', 'có công tắc, đèn báo và ngăn đựng pin riêng'] }
    ],
    steps: [
      { h: 'Lắp pin cho xe và điều khiển', s: 'Đầu tiên, các bạn mở ngăn pin ở xe và ở bộ điều khiển, lắp pin đúng chiều dấu cộng, dấu trừ rồi đóng nắp lại.' },
      { h: 'Bật công tắc xe', s: 'Tiếp theo, lật xe lên, gạt công tắc dưới gầm sang chữ ON rồi đặt xe xuống mặt sàn phẳng.' },
      { h: 'Bật bộ điều khiển', s: 'Bật công tắc trên bộ điều khiển, khi đèn báo sáng là xe đã sẵn sàng chạy.' },
      { h: 'Điều khiển tiến, lùi', s: 'Đẩy cần gạt bên trái lên thì xe chạy tới, kéo xuống thì xe chạy lùi.' },
      { h: 'Điều khiển rẽ trái, phải', s: 'Gạt cần bên phải sang trái hoặc sang phải để xe rẽ theo hướng mình muốn.' },
      { h: 'Chơi xong, tắt cả hai', s: 'Cuối cùng, chơi xong các bạn tắt công tắc ở cả xe và bộ điều khiển để tiết kiệm pin.' }
    ],
    notes: [
      'Chỉ cho xe chạy trên nền nhà phẳng, khô ráo; không cho xe chạy xuống nước, bùn hay ra đường có xe cộ.',
      'Không lái xe đâm mạnh vào tường, chân bàn ghế vì xe dễ bị vỡ, gãy bánh.',
      'Nếu lâu không chơi, hãy tháo pin ra; không để em nhỏ cầm pin cho vào miệng.',
      'Khi xe chạy chậm hoặc không nghe lệnh, có thể pin đã yếu, các bạn cần thay pin mới.'
    ],
    end: [
      'Giữ gìn cẩn thận, chiếc xe điều khiển sẽ là người bạn chơi vui vẻ của các bạn trong thật nhiều năm.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ thao tác', items: [
        { w: 'lắp pin', use: 'Các bạn lắp pin đúng chiều dấu cộng, dấu trừ.' },
        { w: 'bật công tắc', use: 'Em bật công tắc dưới gầm xe sang chữ ON.' },
        { w: 'đẩy cần gạt', use: 'Đẩy cần gạt lên là xe vọt lên phía trước.' },
        { w: 'rẽ trái', use: 'Muốn xe rẽ trái, các bạn gạt cần sang bên trái.' },
        { w: 'tháo pin', use: 'Lâu không chơi thì nên tháo pin ra khỏi xe.' }
      ] },
      { group: 'Từ ngữ chỉ bộ phận', items: [
        { w: 'bộ điều khiển', use: 'Bộ điều khiển vừa vặn trong hai bàn tay em.' },
        { w: 'ngăn pin', use: 'Ngăn pin nằm ở dưới gầm xe.' },
        { w: 'đèn báo', use: 'Đèn báo sáng xanh khi điều khiển đã bật.' },
        { w: 'bánh xe', use: 'Bánh xe bằng cao su bám đường rất tốt.' }
      ] },
      { group: 'Từ ngữ lưu ý, bảo quản', items: [
        { w: 'khô ráo', use: 'Chỉ cho xe chạy trên nền nhà khô ráo.' },
        { w: 'Không được', use: 'Không được cho xe chạy ra đường có xe cộ qua lại.' },
        { w: 'tiết kiệm pin', use: 'Tắt xe sau khi chơi để tiết kiệm pin.' },
        { w: 'cất gọn', use: 'Chơi xong, em cất gọn xe và điều khiển vào hộp.' }
      ] }
    ]
  },

  {
    id: 'pd-noi-com-dien', type: 'product', name: 'Nồi cơm điện',
    topic: 'Viết hướng dẫn sử dụng chiếc nồi cơm điện',
    keys: ['nồi cơm điện', 'nồi cơm', 'nấu cơm', 'cắm cơm'],
    intro: [
      'Nồi cơm điện giúp nấu cơm chín đều, dẻo thơm và tự giữ ấm cơm sau khi nấu xong.',
      'Biết dùng nồi cơm điện, các bạn có thể giúp bố mẹ nấu cơm cho cả nhà.'
    ],
    parts: [
      { part: 'Vỏ nồi và nắp nồi', items: ['vỏ ngoài có quai cầm, bên trong có mâm nhiệt để đun nóng', 'nắp nồi đậy kín, trên nắp có van thoát hơi'] },
      { part: 'Lòng nồi', items: ['là chiếc nồi nhỏ bên trong, phủ lớp chống dính', 'thành lòng nồi có vạch chia mực nước'] },
      { part: 'Nút nấu và đèn báo', items: ['nút gạt hoặc nút bấm để bắt đầu nấu', 'đèn “Nấu” sáng khi đang nấu, đèn “Giữ ấm” sáng khi cơm đã chín'] }
    ],
    steps: [
      { h: 'Đong và vo gạo', s: 'Đầu tiên, các bạn đong gạo bằng cốc đong kèm theo nồi, cho vào rá và vo nhẹ hai đến ba lần cho sạch.' },
      { h: 'Cho gạo, đổ nước theo vạch', s: 'Cho gạo vào lòng nồi, san phẳng mặt gạo rồi đổ nước đến vạch ứng với số cốc gạo vừa đong.' },
      { h: 'Lau khô đáy lòng nồi', s: 'Tiếp theo, dùng khăn lau thật khô mặt ngoài và đáy lòng nồi, rồi đặt vào nồi, xoay nhẹ cho lòng nồi nằm sát mâm nhiệt.' },
      { h: 'Đóng nắp, cắm điện', s: 'Đóng chặt nắp, khi tay khô thì cắm phích điện vào ổ.' },
      { h: 'Bấm nút nấu', s: 'Sau đó, gạt hoặc bấm nút nấu, thấy đèn “Nấu” sáng là nồi đã bắt đầu nấu cơm.' },
      { h: 'Đợi cơm chín, ủ thêm', s: 'Cuối cùng, khi nút tự bật lên và đèn “Giữ ấm” sáng, các bạn chờ thêm khoảng mười phút rồi mới mở nắp, xới đều cơm.' }
    ],
    notes: [
      'Luôn lau khô đáy lòng nồi trước khi đặt vào, nếu không nồi dễ bị hỏng và gây chập điện.',
      'Không đưa tay, mặt lại gần van thoát hơi khi nồi đang nấu vì hơi nước rất nóng, dễ gây bỏng.',
      'Dùng muôi nhựa hoặc muôi gỗ để xới cơm, không dùng vật sắc cào làm tróc lớp chống dính.',
      'Lần đầu nấu, các bạn nên có người lớn bên cạnh hướng dẫn; ăn xong nhớ rút phích điện.'
    ],
    end: [
      'Làm đúng các bước trên, các bạn sẽ có một nồi cơm trắng dẻo, thơm ngon để cả nhà cùng thưởng thức.'
    ],
    vocab: [
      { group: 'Từ ngữ chỉ thao tác', items: [
        { w: 'đong gạo', use: 'Các bạn đong gạo bằng chiếc cốc nhựa đi kèm nồi.' },
        { w: 'vo gạo', use: 'Em vo gạo nhẹ tay hai lần cho sạch.' },
        { w: 'lau khô', use: 'Nhớ lau khô đáy lòng nồi trước khi đặt vào.' },
        { w: 'bấm nút nấu', use: 'Đóng nắp xong, các bạn bấm nút nấu.' },
        { w: 'xới', use: 'Cơm chín, em lấy muôi nhựa xới đều cho tơi.' }
      ] },
      { group: 'Từ ngữ chỉ bộ phận', items: [
        { w: 'lòng nồi', use: 'Lòng nồi có lớp chống dính màu đen bóng.' },
        { w: 'vạch chia', use: 'Em đổ nước đúng tới vạch chia số hai.' },
        { w: 'van thoát hơi', use: 'Hơi nước nóng bốc lên từ van thoát hơi trên nắp.' },
        { w: 'đèn báo', use: 'Đèn báo chuyển sang “Giữ ấm” khi cơm đã chín.' }
      ] },
      { group: 'Từ ngữ lưu ý, kết quả', items: [
        { w: 'bỏng', use: 'Không ghé mặt gần van thoát hơi để tránh bị bỏng.' },
        { w: 'chập điện', use: 'Đáy nồi còn ướt có thể gây chập điện.' },
        { w: 'dẻo thơm', use: 'Nồi cơm chín dẻo thơm khiến cả nhà ăn rất ngon miệng.' },
        { w: 'chín đều', use: 'Ủ thêm mười phút giúp cơm chín đều hơn.' }
      ] }
    ]
  },

  /* ============ VIẾT ĐƠN (form) ============ */
  {
    id: 'fm-clb-sang-tao', type: 'form', name: 'Đơn xin tham gia câu lạc bộ sáng tạo',
    topic: 'Viết đơn xin tham gia câu lạc bộ sáng tạo của trường',
    keys: ['câu lạc bộ sáng tạo', 'clb sáng tạo', 'câu lạc bộ stem', 'câu lạc bộ khoa học', 'câu lạc bộ vẽ', 'đơn xin tham gia câu lạc bộ'],
    title: 'ĐƠN XIN THAM GIA CÂU LẠC BỘ SÁNG TẠO',
    to: 'Kính gửi: Ban phụ trách Câu lạc bộ Sáng tạo Trường Tiểu học …',
    self: [
      'Em tên là Nguyễn Minh An, học sinh lớp 4A, Trường Tiểu học …',
      'Em sinh ngày … tháng … năm …, hiện ở tại …'
    ],
    reason: [
      'Em rất thích tìm hiểu cách các đồ vật hoạt động và hay tự làm đồ chơi từ vỏ hộp, ống hút, que kem.',
      'Năm lớp 3, em đã cùng bạn làm mô hình chiếc quạt gió chạy bằng pin và được cô giáo khen trước lớp.',
      'Em mong được tham gia Câu lạc bộ Sáng tạo để học thêm về lắp ráp, lập trình đơn giản và cùng các bạn làm ra những sản phẩm có ích.'
    ],
    promise: [
      'Nếu được tham gia câu lạc bộ, em xin hứa sẽ đi sinh hoạt đầy đủ, đúng giờ và chấp hành tốt nội quy của câu lạc bộ.',
      'Em sẽ cố gắng học hỏi, giữ gìn dụng cụ chung và không để ảnh hưởng đến việc học tập trên lớp.',
      'Em xin chân thành cảm ơn!'
    ],
    vocab: [
      { group: 'Mẫu câu viết đơn', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Ban phụ trách Câu lạc bộ Sáng tạo của trường.' },
        { w: 'Em tên là', use: 'Em tên là Nguyễn Minh An, học sinh lớp 4A.' },
        { w: 'Em viết đơn này', use: 'Em viết đơn này xin được tham gia Câu lạc bộ Sáng tạo.' },
        { w: 'Em xin hứa', use: 'Em xin hứa sẽ sinh hoạt đầy đủ và đúng giờ.' },
        { w: 'Em xin chân thành cảm ơn', use: 'Em xin chân thành cảm ơn các thầy cô!' }
      ] },
      { group: 'Từ ngữ nói về sở thích, khả năng', items: [
        { w: 'say mê', use: 'Em say mê lắp ráp những mô hình nhỏ.' },
        { w: 'khéo tay', use: 'Em khá khéo tay nên làm được nhiều đồ chơi từ vỏ hộp.' },
        { w: 'tò mò', use: 'Em luôn tò mò muốn biết chiếc quạt quay được nhờ đâu.' },
        { w: 'mô hình', use: 'Em đã làm một mô hình ngôi nhà bằng que kem.' },
        { w: 'ý tưởng', use: 'Em có nhiều ý tưởng muốn cùng các bạn thực hiện.' }
      ] },
      { group: 'Từ ngữ thể hiện quyết tâm', items: [
        { w: 'chấp hành', use: 'Em sẽ chấp hành tốt nội quy của câu lạc bộ.' },
        { w: 'đầy đủ', use: 'Em hứa đi sinh hoạt đầy đủ các buổi.' },
        { w: 'cố gắng', use: 'Em sẽ cố gắng học hỏi thêm từ thầy cô và các bạn.' },
        { w: 'giữ gìn', use: 'Em sẽ giữ gìn cẩn thận dụng cụ chung của câu lạc bộ.' }
      ] }
    ]
  },

  {
    id: 'fm-clb-the-thao', type: 'form', name: 'Đơn xin tham gia câu lạc bộ thể thao',
    topic: 'Viết đơn xin tham gia câu lạc bộ thể thao',
    keys: ['câu lạc bộ thể thao', 'câu lạc bộ bóng đá', 'câu lạc bộ cờ vua', 'câu lạc bộ bơi', 'clb bóng đá', 'clb thể thao'],
    title: 'ĐƠN XIN THAM GIA CÂU LẠC BỘ BÓNG ĐÁ',
    to: 'Kính gửi: Thầy phụ trách Câu lạc bộ Bóng đá Trường Tiểu học …',
    self: [
      'Em tên là Trần Quốc Bảo, học sinh lớp 4B, Trường Tiểu học …',
      'Em sinh ngày … tháng … năm …, sức khoẻ tốt.'
    ],
    reason: [
      'Từ nhỏ em đã rất mê bóng đá, chiều nào em cũng cùng các bạn trong xóm đá bóng ở sân nhà văn hoá.',
      'Em chạy khá nhanh, biết dẫn bóng, chuyền bóng và đã cùng đội lớp giành giải Nhì trong hội khoẻ Phù Đổng của trường.',
      'Em muốn tham gia câu lạc bộ để được luyện tập đúng kĩ thuật, rèn luyện sức khoẻ và học cách phối hợp với đồng đội.'
    ],
    promise: [
      'Nếu được nhận vào câu lạc bộ, em xin hứa sẽ tập luyện chăm chỉ, đi tập đúng giờ và nghe lời thầy hướng dẫn.',
      'Em sẽ thi đấu trung thực, đoàn kết với đồng đội và vẫn giữ kết quả học tập tốt.',
      'Em xin trân trọng cảm ơn!'
    ],
    vocab: [
      { group: 'Mẫu câu viết đơn', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Thầy phụ trách Câu lạc bộ Bóng đá.' },
        { w: 'học sinh lớp', use: 'Em tên là Trần Quốc Bảo, học sinh lớp 4B.' },
        { w: 'Em làm đơn này', use: 'Em làm đơn này xin được tham gia Câu lạc bộ Bóng đá của trường.' },
        { w: 'Em xin hứa', use: 'Em xin hứa sẽ tập luyện chăm chỉ.' },
        { w: 'Người viết đơn', use: 'Cuối đơn, em ghi “Người viết đơn” rồi kí và ghi rõ họ tên.' }
      ] },
      { group: 'Từ ngữ về thể thao', items: [
        { w: 'dẫn bóng', use: 'Em có thể dẫn bóng qua mấy bạn liền.' },
        { w: 'chuyền bóng', use: 'Em biết chuyền bóng chính xác cho đồng đội.' },
        { w: 'rèn luyện sức khoẻ', use: 'Đá bóng giúp em rèn luyện sức khoẻ mỗi ngày.' },
        { w: 'đồng đội', use: 'Em luôn phối hợp ăn ý với đồng đội.' },
        { w: 'kĩ thuật', use: 'Em mong được thầy dạy kĩ thuật sút bóng đúng cách.' }
      ] },
      { group: 'Từ ngữ thể hiện quyết tâm', items: [
        { w: 'chăm chỉ', use: 'Em sẽ tập luyện chăm chỉ ở mỗi buổi.' },
        { w: 'đúng giờ', use: 'Em hứa luôn có mặt ở sân tập đúng giờ.' },
        { w: 'trung thực', use: 'Khi thi đấu, em sẽ chơi trung thực và đẹp.' },
        { w: 'đoàn kết', use: 'Em sẽ đoàn kết, giúp đỡ các bạn trong đội.' }
      ] }
    ]
  },

  {
    id: 'fm-nghi-hoc', type: 'form', name: 'Đơn xin nghỉ học',
    topic: 'Viết đơn xin nghỉ học',
    keys: ['xin nghỉ học', 'đơn xin nghỉ', 'nghỉ học', 'bị ốm', 'nghỉ ốm'],
    title: 'ĐƠN XIN NGHỈ HỌC',
    to: 'Kính gửi: Cô giáo chủ nhiệm lớp 4A, Trường Tiểu học …',
    self: [
      'Em tên là Lê Thu Hà, học sinh lớp 4A.'
    ],
    reason: [
      'Từ tối hôm qua, em bị sốt cao và ho nhiều; bác sĩ đã khám và dặn em cần nghỉ ngơi ở nhà để uống thuốc, theo dõi sức khoẻ.',
      'Vì vậy, em viết đơn này xin phép cô cho em được nghỉ học hai ngày, từ ngày … tháng … đến hết ngày … tháng … năm …',
      'Trong những ngày nghỉ, em sẽ nhờ bạn Minh Thư cùng lớp chép bài và báo cho em bài tập về nhà.'
    ],
    promise: [
      'Em xin hứa sẽ chép bài và làm đầy đủ bài tập những ngày nghỉ, có chỗ nào chưa hiểu em sẽ hỏi cô và các bạn.',
      'Em kính mong cô chấp thuận. Em xin chân thành cảm ơn cô!'
    ],
    vocab: [
      { group: 'Mẫu câu viết đơn', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô giáo chủ nhiệm lớp 4A.' },
        { w: 'xin phép', use: 'Em viết đơn này xin phép cô cho em nghỉ học hai ngày.' },
        { w: 'kính mong', use: 'Em kính mong cô chấp thuận cho em nghỉ.' },
        { w: 'Ý kiến của cha mẹ học sinh', use: 'Bên dưới đơn có mục “Ý kiến của cha mẹ học sinh” để bố mẹ kí xác nhận.' }
      ] },
      { group: 'Từ ngữ nói về lí do', items: [
        { w: 'sốt cao', use: 'Đêm qua em bị sốt cao, người mệt rã rời.' },
        { w: 'bác sĩ', use: 'Bác sĩ dặn em phải nghỉ ngơi và uống thuốc đúng giờ.' },
        { w: 'nghỉ ngơi', use: 'Em cần nghỉ ngơi ở nhà để mau khỏi bệnh.' },
        { w: 'theo dõi', use: 'Mẹ ở nhà theo dõi sức khoẻ của em.' }
      ] },
      { group: 'Từ ngữ thể hiện trách nhiệm', items: [
        { w: 'chép bài', use: 'Em sẽ nhờ bạn chép bài giúp trong hai ngày nghỉ.' },
        { w: 'đầy đủ', use: 'Em hứa làm đầy đủ bài tập cô giao.' },
        { w: 'chấp thuận', use: 'Em mong cô chấp thuận đơn xin nghỉ của em.' },
        { w: 'chân thành cảm ơn', use: 'Em xin chân thành cảm ơn cô!' }
      ] }
    ]
  },

  {
    id: 'fm-van-nghe', type: 'form', name: 'Đơn xin tham gia đội văn nghệ',
    topic: 'Viết đơn xin tham gia đội văn nghệ của trường',
    keys: ['đội văn nghệ', 'văn nghệ của trường', 'xin tham gia đội văn nghệ', 'đội múa', 'đội hát'],
    title: 'ĐƠN XIN THAM GIA ĐỘI VĂN NGHỆ',
    to: 'Kính gửi: Cô phụ trách Đội văn nghệ Trường Tiểu học …',
    self: [
      'Em tên là Phạm Ngọc Mai, học sinh lớp 4C, Trường Tiểu học …',
      'Em sinh ngày … tháng … năm …'
    ],
    reason: [
      'Em rất yêu thích ca hát và múa; ở nhà, em thường hát cho ông bà nghe những bài hát thiếu nhi như “Em yêu trường em”, “Lớp chúng ta đoàn kết”.',
      'Em đã học múa ở nhà văn hoá phường được một năm và từng biểu diễn trong buổi văn nghệ chào mừng ngày 20 – 11 của lớp.',
      'Em mong được tham gia đội văn nghệ để luyện tập thêm, tự tin hơn khi đứng trên sân khấu và góp phần vào các buổi biểu diễn của trường.'
    ],
    promise: [
      'Nếu được tham gia đội văn nghệ, em xin hứa sẽ tập luyện chăm chỉ, đi tập đúng giờ và nghe theo sự hướng dẫn của cô.',
      'Em sẽ sắp xếp thời gian hợp lí để vừa học tốt vừa tập văn nghệ tốt.',
      'Em xin chân thành cảm ơn cô!'
    ],
    vocab: [
      { group: 'Mẫu câu viết đơn', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô phụ trách Đội văn nghệ của trường.' },
        { w: 'Em tên là', use: 'Em tên là Phạm Ngọc Mai, học sinh lớp 4C.' },
        { w: 'Em viết đơn này', use: 'Em viết đơn này xin được tham gia đội văn nghệ.' },
        { w: 'Em xin hứa', use: 'Em xin hứa sẽ đi tập đầy đủ và đúng giờ.' }
      ] },
      { group: 'Từ ngữ về văn nghệ', items: [
        { w: 'ca hát', use: 'Em rất yêu thích ca hát từ khi còn nhỏ.' },
        { w: 'biểu diễn', use: 'Em đã biểu diễn một tiết mục múa trong buổi văn nghệ của lớp.' },
        { w: 'tiết mục', use: 'Em mong được góp một tiết mục cho ngày hội của trường.' },
        { w: 'sân khấu', use: 'Em muốn tự tin hơn mỗi khi bước lên sân khấu.' },
        { w: 'năng khiếu', use: 'Cô giáo nói em có năng khiếu múa.' }
      ] },
      { group: 'Từ ngữ thể hiện quyết tâm', items: [
        { w: 'tập luyện', use: 'Em sẽ tập luyện chăm chỉ trong mỗi buổi.' },
        { w: 'tự tin', use: 'Tham gia đội văn nghệ sẽ giúp em tự tin hơn.' },
        { w: 'hợp lí', use: 'Em sẽ sắp xếp thời gian hợp lí giữa việc học và tập văn nghệ.' },
        { w: 'góp phần', use: 'Em mong được góp phần làm cho buổi biểu diễn thêm vui.' }
      ] }
    ]
  },

  /* ============ GIẤY MỜI (invite) ============ */
  {
    id: 'iv-ke-chuyen', type: 'invite', name: 'Giấy mời dự hội thi kể chuyện',
    topic: 'Viết giấy mời bạn lớp bên tham dự buổi thi kể chuyện sáng tạo',
    keys: ['thi kể chuyện', 'hội thi kể chuyện', 'kể chuyện sáng tạo', 'mời dự thi kể chuyện'],
    title: 'GIẤY MỜI',
    to: 'Thân mời: Tập thể lớp 4B',
    content: [
      'Lớp 4A trân trọng kính mời các bạn lớp 4B tới dự buổi thi “Kể chuyện sáng tạo” do lớp 4A tổ chức.',
      'Sự có mặt và những tràng vỗ tay cổ vũ của các bạn sẽ giúp buổi thi thêm vui và ý nghĩa.'
    ],
    time: '14 giờ chiều thứ Sáu, ngày … tháng … năm …',
    place: 'Phòng học lớp 4A, tầng 2, Trường Tiểu học …',
    program: [
      'Văn nghệ chào mừng: tốp ca “Em yêu trường em”',
      'Các đội lần lượt kể chuyện sáng tạo, có tranh minh hoạ và đóng vai nhân vật',
      'Khán giả bình chọn câu chuyện được yêu thích nhất',
      'Ban giám khảo nhận xét và trao giải'
    ],
    note: [
      'Rất mong các bạn đến đúng giờ để kịp ổn định chỗ ngồi.',
      'Mỗi bạn được nhận một phiếu bình chọn khi vào phòng.'
    ],
    sign: 'Thay mặt lớp 4A – Lớp trưởng',
    vocab: [
      { group: 'Mẫu câu giấy mời', items: [
        { w: 'Thân mời', use: 'Thân mời: Tập thể lớp 4B.' },
        { w: 'trân trọng kính mời', use: 'Lớp 4A trân trọng kính mời các bạn tới dự buổi thi.' },
        { w: 'tới dự', use: 'Mời các bạn tới dự buổi thi kể chuyện sáng tạo.' },
        { w: 'Rất vui được đón tiếp', use: 'Rất vui được đón tiếp các bạn lớp 4B!' },
        { w: 'Thay mặt', use: 'Thay mặt lớp 4A, lớp trưởng kí tên dưới giấy mời.' }
      ] },
      { group: 'Từ ngữ về hội thi', items: [
        { w: 'kể chuyện sáng tạo', use: 'Mỗi đội sẽ kể chuyện sáng tạo bằng lời của mình.' },
        { w: 'đóng vai', use: 'Các bạn sẽ đóng vai nhân vật thật sinh động.' },
        { w: 'ban giám khảo', use: 'Ban giám khảo gồm cô chủ nhiệm và hai bạn lớp trưởng.' },
        { w: 'bình chọn', use: 'Khán giả được bình chọn câu chuyện hay nhất.' },
        { w: 'trao giải', use: 'Buổi thi kết thúc bằng phần trao giải.' }
      ] },
      { group: 'Từ ngữ chỉ thời gian, địa điểm', items: [
        { w: 'Thời gian', use: 'Thời gian: 14 giờ chiều thứ Sáu tuần này.' },
        { w: 'Địa điểm', use: 'Địa điểm: phòng học lớp 4A, tầng 2.' },
        { w: 'đúng giờ', use: 'Mong các bạn đến đúng giờ để buổi thi bắt đầu kịp lúc.' },
        { w: 'cổ vũ', use: 'Tiếng vỗ tay cổ vũ của các bạn sẽ tiếp thêm sức mạnh cho các đội.' }
      ] }
    ]
  },

  {
    id: 'iv-van-nghe', type: 'invite', name: 'Giấy mời bố mẹ dự buổi văn nghệ',
    topic: 'Viết giấy mời bố mẹ dự buổi biểu diễn văn nghệ của lớp',
    keys: ['mời bố mẹ', 'buổi văn nghệ', 'biểu diễn văn nghệ', 'mời phụ huynh', 'văn nghệ của lớp'],
    title: 'GIẤY MỜI',
    to: 'Kính gửi: Bố mẹ của bạn …, học sinh lớp 4A',
    content: [
      'Tập thể lớp 4A trân trọng kính mời bố mẹ tới dự buổi biểu diễn văn nghệ “Mừng xuân yêu thương” của lớp.',
      'Chúng con rất mong được bố mẹ đến xem và động viên những tiết mục mà cả lớp đã chăm chỉ tập luyện.'
    ],
    time: '8 giờ sáng thứ Bảy, ngày … tháng … năm …',
    place: 'Hội trường Trường Tiểu học …',
    program: [
      'Lớp trưởng phát biểu chào mừng',
      'Tốp ca, đơn ca các bài hát về mái trường và gia đình',
      'Tiết mục múa và hoạt cảnh “Bàn tay mẹ”',
      'Đọc thơ tặng bố mẹ',
      'Chụp ảnh lưu niệm cùng bố mẹ và cô giáo'
    ],
    note: [
      'Kính mong bố mẹ sắp xếp thời gian đến dự đúng giờ.',
      'Buổi biểu diễn kéo dài khoảng một giờ rưỡi.'
    ],
    sign: 'Thay mặt tập thể lớp 4A – Lớp trưởng',
    vocab: [
      { group: 'Mẫu câu giấy mời', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Bố mẹ của bạn Minh Anh, học sinh lớp 4A.' },
        { w: 'trân trọng kính mời', use: 'Tập thể lớp 4A trân trọng kính mời bố mẹ tới dự.' },
        { w: 'Kính mong', use: 'Kính mong bố mẹ sắp xếp thời gian đến dự.' },
        { w: 'Rất hân hạnh được đón tiếp', use: 'Lớp chúng con rất hân hạnh được đón tiếp bố mẹ.' }
      ] },
      { group: 'Từ ngữ về buổi văn nghệ', items: [
        { w: 'tiết mục', use: 'Mỗi tổ chuẩn bị một tiết mục thật đặc sắc.' },
        { w: 'tốp ca', use: 'Tốp ca của tổ 1 sẽ mở màn buổi biểu diễn.' },
        { w: 'hoạt cảnh', use: 'Hoạt cảnh “Bàn tay mẹ” do tổ 3 thể hiện.' },
        { w: 'biểu diễn', use: 'Chúng con đã tập luyện suốt hai tuần cho buổi biểu diễn.' },
        { w: 'lưu niệm', use: 'Cuối buổi, cả lớp chụp ảnh lưu niệm cùng bố mẹ.' }
      ] },
      { group: 'Từ ngữ bày tỏ mong muốn', items: [
        { w: 'động viên', use: 'Chúng con mong bố mẹ đến xem và động viên cả lớp.' },
        { w: 'đúng giờ', use: 'Kính mong bố mẹ đến dự đúng giờ.' },
        { w: 'niềm vui', use: 'Sự có mặt của bố mẹ là niềm vui lớn của chúng con.' },
        { w: 'chăm chỉ', use: 'Cả lớp đã chăm chỉ tập luyện từng tiết mục.' }
      ] }
    ]
  },

  {
    id: 'iv-doc-sach', type: 'invite', name: 'Giấy mời dự ngày hội đọc sách',
    topic: 'Viết giấy mời thầy cô dự ngày hội đọc sách',
    keys: ['ngày hội đọc sách', 'hội đọc sách', 'mời thầy cô', 'ngày sách', 'mời dự ngày hội đọc sách'],
    title: 'GIẤY MỜI',
    to: 'Kính gửi: Cô giáo chủ nhiệm lớp 4A',
    content: [
      'Chi đội lớp 4A trân trọng kính mời cô tới dự “Ngày hội đọc sách” của lớp nhân dịp Ngày Sách và Văn hoá đọc Việt Nam 21 – 4.',
      'Chúng em rất mong được cô đến chia sẻ niềm vui và góp ý cho các hoạt động của lớp.'
    ],
    time: '15 giờ chiều thứ Năm, ngày … tháng … năm …',
    place: 'Thư viện Trường Tiểu học …',
    program: [
      'Khai mạc ngày hội, giới thiệu góc sách của lớp',
      'Thi giới thiệu cuốn sách em yêu thích',
      'Trò chơi đố vui về nhân vật trong sách',
      'Trao đổi sách giữa các bạn',
      'Cô giáo nhận xét và trao thưởng'
    ],
    note: [
      'Kính mong cô đến dự đúng giờ.',
      'Rất mong được cô tặng lớp một cuốn sách mà cô yêu thích.'
    ],
    sign: 'Thay mặt lớp 4A – Lớp trưởng',
    vocab: [
      { group: 'Mẫu câu giấy mời', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô giáo chủ nhiệm lớp 4A.' },
        { w: 'trân trọng kính mời', use: 'Chi đội lớp 4A trân trọng kính mời cô tới dự ngày hội.' },
        { w: 'Kính mong', use: 'Kính mong cô sắp xếp thời gian đến dự.' },
        { w: 'Thay mặt', use: 'Thay mặt lớp 4A, lớp trưởng kí tên.' }
      ] },
      { group: 'Từ ngữ về ngày hội đọc sách', items: [
        { w: 'góc sách', use: 'Góc sách của lớp có hơn một trăm cuốn sách hay.' },
        { w: 'giới thiệu sách', use: 'Mỗi tổ sẽ cử một bạn lên giới thiệu sách.' },
        { w: 'trao đổi sách', use: 'Các bạn mang sách cũ đến để trao đổi sách với nhau.' },
        { w: 'đố vui', use: 'Phần đố vui về nhân vật trong truyện rất sôi nổi.' },
        { w: 'văn hoá đọc', use: 'Ngày hội giúp chúng em xây dựng văn hoá đọc trong lớp.' }
      ] },
      { group: 'Từ ngữ bày tỏ mong muốn', items: [
        { w: 'chia sẻ', use: 'Chúng em mong cô đến chia sẻ niềm vui cùng cả lớp.' },
        { w: 'góp ý', use: 'Chúng em rất mong được cô góp ý cho ngày hội.' },
        { w: 'vinh dự', use: 'Được đón cô đến dự là niềm vinh dự của lớp em.' },
        { w: 'đúng giờ', use: 'Kính mong cô đến đúng giờ để khai mạc ngày hội.' }
      ] }
    ]
  },

  {
    id: 'iv-cuoc-song-xanh', type: 'invite', name: 'Giấy mời tham gia ngày hội “Cuộc sống xanh”',
    topic: 'Viết giấy mời các bạn tham gia ngày hội "Cuộc sống xanh"',
    keys: ['cuộc sống xanh', 'ngày hội xanh', 'ngày hội cuộc sống xanh', 'sống xanh', 'mời các bạn tham gia'],
    title: 'GIẤY MỜI',
    to: 'Thân mời: Các bạn học sinh khối lớp 4',
    content: [
      'Liên đội Trường Tiểu học … thân mời các bạn tới tham gia ngày hội “Cuộc sống xanh” với chủ đề “Chung tay bảo vệ môi trường”.',
      'Ngày hội là dịp để chúng ta cùng học cách sống xanh, tái chế đồ dùng và làm cho trường lớp thêm sạch đẹp.'
    ],
    time: '7 giờ 30 phút sáng Chủ nhật, ngày … tháng … năm …',
    place: 'Sân trường Trường Tiểu học …',
    program: [
      'Đổi giấy vụn, chai nhựa lấy cây xanh',
      'Thi làm đồ dùng học tập từ vật liệu tái chế',
      'Trồng cây và chăm sóc bồn hoa ở sân trường',
      'Trò chơi phân loại rác đúng cách',
      'Tuyên dương các lớp có nhiều sản phẩm đẹp'
    ],
    note: [
      'Mỗi bạn mang theo một ít giấy vụn hoặc chai nhựa đã rửa sạch, đội mũ và mang bình nước riêng.',
      'Rất mong các bạn đến đúng giờ và tham gia thật nhiệt tình.'
    ],
    sign: 'Thay mặt Ban chỉ huy Liên đội – Liên đội trưởng',
    vocab: [
      { group: 'Mẫu câu giấy mời', items: [
        { w: 'Thân mời', use: 'Thân mời: Các bạn học sinh khối lớp 4.' },
        { w: 'tới tham gia', use: 'Liên đội thân mời các bạn tới tham gia ngày hội.' },
        { w: 'Rất mong', use: 'Rất mong các bạn đến đúng giờ.' },
        { w: 'Thay mặt', use: 'Thay mặt Ban chỉ huy Liên đội, Liên đội trưởng kí tên.' }
      ] },
      { group: 'Từ ngữ về môi trường', items: [
        { w: 'tái chế', use: 'Các bạn sẽ thi làm hộp bút từ vật liệu tái chế.' },
        { w: 'phân loại rác', use: 'Trò chơi giúp chúng ta biết cách phân loại rác đúng.' },
        { w: 'sống xanh', use: 'Sống xanh là biết tiết kiệm và giữ gìn môi trường.' },
        { w: 'giấy vụn', use: 'Mỗi bạn mang theo một ít giấy vụn để đổi lấy cây.' },
        { w: 'sạch đẹp', use: 'Ngày hội giúp sân trường thêm sạch đẹp.' }
      ] },
      { group: 'Từ ngữ cổ vũ, kêu gọi', items: [
        { w: 'chung tay', use: 'Chúng ta hãy chung tay bảo vệ môi trường.' },
        { w: 'nhiệt tình', use: 'Mong các bạn tham gia thật nhiệt tình.' },
        { w: 'ý nghĩa', use: 'Đây sẽ là một ngày hội vui và ý nghĩa.' },
        { w: 'hưởng ứng', use: 'Hãy cùng hưởng ứng ngày hội “Cuộc sống xanh” nhé!' }
      ] }
    ]
  },

  /* ============ BÁO CÁO THẢO LUẬN NHÓM (report) ============ */
  {
    id: 'rp-20-11', type: 'report', name: 'Báo cáo: chào mừng ngày Nhà giáo Việt Nam',
    topic: 'Báo cáo kết quả thảo luận nhóm về hoạt động chào mừng ngày Nhà giáo Việt Nam 20 – 11',
    keys: ['nhà giáo việt nam', '20 – 11', '20-11', '20/11', 'ngày nhà giáo', 'chào mừng thầy cô'],
    title: 'BÁO CÁO KẾT QUẢ THẢO LUẬN NHÓM',
    to: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A',
    subject: 'Về việc chuẩn bị chào mừng ngày Nhà giáo Việt Nam 20 – 11',
    items: [
      { h: 'Thời gian, thành phần', s: 'Nhóm 2 đã thảo luận vào giờ sinh hoạt lớp chiều thứ Sáu, ngày … tháng 11; có mặt đủ 6 thành viên.' },
      { h: 'Thi đua hoa điểm tốt', s: 'Cả nhóm thống nhất thi đua học tốt, mỗi bạn phấn đấu đạt ít nhất năm điểm tốt trong tuần để làm “bông hoa điểm tốt” tặng cô.' },
      { h: 'Tập tiết mục văn nghệ', s: 'Nhóm sẽ tập tốp ca bài “Bụi phấn”; bạn Lan phụ trách, nhóm tập vào giờ ra chơi các ngày thứ Ba và thứ Năm.' },
      { h: 'Làm thiệp và báo tường', s: 'Bạn Minh và bạn Hoa làm thiệp chúc mừng; bạn Nam, bạn Hùng vẽ tranh và viết bài cho tờ báo tường của lớp.' },
      { h: 'Trang trí lớp học', s: 'Bạn Thảo phụ trách chuẩn bị giấy màu, cả nhóm sẽ ở lại trang trí bảng lớp vào chiều ngày 19 tháng 11.' }
    ],
    good: [
      'Các bạn trong nhóm đều hăng hái phát biểu, đưa ra nhiều ý tưởng hay.',
      'Nhóm đã phân công rõ ràng, mỗi bạn đều nhận một việc phù hợp với khả năng.'
    ],
    todo: [
      'Nhóm đề xuất lớp góp chung tiền tiết kiệm để mua một bó hoa tươi tặng cô.',
      'Nhóm mong cô góp ý thêm cho tiết mục văn nghệ trước ngày biểu diễn.'
    ],
    sign: 'Người viết báo cáo – Thư kí nhóm',
    vocab: [
      { group: 'Mẫu câu báo cáo', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A.' },
        { w: 'Nhóm xin báo cáo', use: 'Nhóm xin báo cáo kết quả thảo luận như sau.' },
        { w: 'thống nhất', use: 'Cả nhóm thống nhất tập tốp ca bài “Bụi phấn”.' },
        { w: 'phân công', use: 'Nhóm phân công bạn Minh làm thiệp chúc mừng.' },
        { w: 'phụ trách', use: 'Bạn Lan phụ trách tập luyện tiết mục văn nghệ.' }
      ] },
      { group: 'Từ ngữ về ngày 20 – 11', items: [
        { w: 'tri ân', use: 'Ngày 20 – 11 là dịp để chúng em tri ân thầy cô.' },
        { w: 'hoa điểm tốt', use: 'Cả nhóm thi đua làm hoa điểm tốt dâng tặng cô.' },
        { w: 'báo tường', use: 'Tờ báo tường của lớp có nhiều bài viết về thầy cô.' },
        { w: 'thiệp chúc mừng', use: 'Bạn Hoa khéo tay nên được giao làm thiệp chúc mừng.' },
        { w: 'thi đua', use: 'Cả lớp thi đua học tốt để chào mừng ngày Nhà giáo Việt Nam.' }
      ] },
      { group: 'Từ ngữ nhận xét, đề xuất', items: [
        { w: 'hăng hái', use: 'Các bạn trong nhóm đều hăng hái phát biểu.' },
        { w: 'rõ ràng', use: 'Nhóm đã phân công công việc rõ ràng cho từng bạn.' },
        { w: 'đề xuất', use: 'Nhóm đề xuất mua một bó hoa tươi tặng cô.' },
        { w: 'góp ý', use: 'Nhóm mong cô góp ý thêm cho tiết mục văn nghệ.' }
      ] }
    ]
  },

  {
    id: 'rp-goc-doc-sach', type: 'report', name: 'Báo cáo: xây dựng góc đọc sách',
    topic: 'Báo cáo kết quả thảo luận nhóm về việc xây dựng góc đọc sách của lớp',
    keys: ['góc đọc sách', 'tủ sách lớp', 'xây dựng góc đọc', 'thư viện lớp', 'góc sách'],
    title: 'BÁO CÁO KẾT QUẢ THẢO LUẬN NHÓM',
    to: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A',
    subject: 'Về việc xây dựng góc đọc sách của lớp',
    items: [
      { h: 'Thời gian, thành phần', s: 'Nhóm 1 đã thảo luận vào giờ ra chơi sáng thứ Hai, ngày … tháng … ; có mặt đủ 5 thành viên.' },
      { h: 'Chọn vị trí góc đọc', s: 'Nhóm thống nhất đặt góc đọc sách ở cuối lớp, cạnh cửa sổ cho sáng sủa, có một giá sách và hai tấm thảm ngồi.' },
      { h: 'Quyên góp sách', s: 'Mỗi bạn trong lớp góp ít nhất hai cuốn sách hay đã đọc như truyện cổ tích, sách khoa học, truyện tranh lành mạnh; bạn Hà phụ trách thu sách.' },
      { h: 'Sắp xếp và trang trí', s: 'Bạn Tuấn dán nhãn và xếp sách theo từng loại; bạn Mai và bạn Khoa trang trí góc đọc bằng tranh vẽ và khẩu hiệu “Mỗi ngày một trang sách”.' },
      { h: 'Nội quy mượn sách', s: 'Nhóm đề ra nội quy: mượn sách phải ghi vào sổ, giữ sách sạch, trả đúng hẹn trong một tuần; bạn Linh làm thủ thư.' }
    ],
    good: [
      'Các bạn trong nhóm đều nhiệt tình, nhiều bạn sẵn sàng góp hơn hai cuốn sách.',
      'Kế hoạch được bàn kĩ, phân công cụ thể cho từng người.'
    ],
    todo: [
      'Nhóm đề xuất cô cho phép dùng mười lăm phút đầu giờ thứ Sáu hằng tuần làm giờ đọc sách chung.',
      'Nhóm mong các tổ khác cùng góp sách để góc đọc thêm phong phú.'
    ],
    sign: 'Người viết báo cáo – Thư kí nhóm',
    vocab: [
      { group: 'Mẫu câu báo cáo', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A.' },
        { w: 'Nhóm đã thảo luận', use: 'Nhóm đã thảo luận vào giờ ra chơi sáng thứ Hai.' },
        { w: 'thống nhất', use: 'Nhóm thống nhất đặt góc đọc sách ở cuối lớp.' },
        { w: 'phụ trách', use: 'Bạn Hà phụ trách thu sách của cả lớp.' }
      ] },
      { group: 'Từ ngữ về góc đọc sách', items: [
        { w: 'quyên góp', use: 'Cả lớp cùng quyên góp sách cho góc đọc.' },
        { w: 'giá sách', use: 'Chiếc giá sách được kê sát cửa sổ cho sáng sủa.' },
        { w: 'thủ thư', use: 'Bạn Linh làm thủ thư, ghi sổ mượn trả sách.' },
        { w: 'dán nhãn', use: 'Bạn Tuấn dán nhãn để phân loại từng loại sách.' },
        { w: 'nội quy', use: 'Góc đọc có nội quy mượn và trả sách rõ ràng.' }
      ] },
      { group: 'Từ ngữ nhận xét, đề xuất', items: [
        { w: 'nhiệt tình', use: 'Các bạn trong nhóm rất nhiệt tình góp sách.' },
        { w: 'cụ thể', use: 'Mỗi bạn đều được giao một việc cụ thể.' },
        { w: 'đề xuất', use: 'Nhóm đề xuất có giờ đọc sách chung mỗi tuần.' },
        { w: 'phong phú', use: 'Góc đọc sẽ thêm phong phú nếu các tổ cùng góp sách.' }
      ] }
    ]
  },

  {
    id: 'rp-trong-cay', type: 'report', name: 'Báo cáo: trồng và chăm sóc cây xanh',
    topic: 'Báo cáo kết quả thảo luận nhóm về kế hoạch trồng cây xanh ở sân trường',
    keys: ['trồng cây xanh', 'chăm sóc cây xanh', 'cây xanh ở sân trường', 'kế hoạch trồng cây', 'bồn cây'],
    title: 'BÁO CÁO KẾT QUẢ THẢO LUẬN NHÓM',
    to: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A',
    subject: 'Về kế hoạch trồng và chăm sóc cây xanh ở sân trường',
    items: [
      { h: 'Thời gian, thành phần', s: 'Nhóm 3 đã thảo luận vào giờ sinh hoạt lớp chiều thứ Sáu, ngày … tháng … ; có mặt đủ 6 thành viên.' },
      { h: 'Chọn cây và nơi trồng', s: 'Nhóm thống nhất trồng sáu cây hoa mười giờ và hai cây sao nhái vào bồn cây trước cửa lớp, vì đây là những cây dễ sống, ra hoa đẹp.' },
      { h: 'Chuẩn bị dụng cụ', s: 'Bạn Đức mang xẻng nhỏ, bạn Ngân mang bình tưới, bạn Phúc xin cây giống và một bao đất trồng từ nhà.' },
      { h: 'Lịch tưới nước', s: 'Mỗi ngày có hai bạn trực tưới cây vào đầu giờ sáng, lần lượt theo danh sách nhóm đã lập.' },
      { h: 'Theo dõi sự lớn lên', s: 'Bạn Vy ghi sổ theo dõi cây mỗi tuần: cây cao bao nhiêu, ra mấy nụ hoa, có bị sâu không.' }
    ],
    good: [
      'Cả nhóm sôi nổi bàn bạc, ai cũng muốn góp sức làm cho sân trường xanh hơn.',
      'Kế hoạch có lịch trực rõ ràng nên cây sẽ được chăm sóc đều đặn.'
    ],
    todo: [
      'Nhóm đề xuất nhờ bác bảo vệ hướng dẫn cách bón phân cho cây.',
      'Nhóm mong cô cho phép làm biển tên nhỏ cắm cạnh mỗi cây để các bạn cùng giữ gìn.'
    ],
    sign: 'Người viết báo cáo – Thư kí nhóm',
    vocab: [
      { group: 'Mẫu câu báo cáo', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A.' },
        { w: 'Nhóm xin báo cáo', use: 'Nhóm xin báo cáo kế hoạch trồng cây như sau.' },
        { w: 'thống nhất', use: 'Nhóm thống nhất trồng hoa mười giờ ở bồn cây trước lớp.' },
        { w: 'phân công', use: 'Nhóm phân công bạn Ngân mang bình tưới.' }
      ] },
      { group: 'Từ ngữ về chăm sóc cây', items: [
        { w: 'cây giống', use: 'Bạn Phúc xin được tám cây giống từ vườn nhà.' },
        { w: 'tưới nước', use: 'Mỗi sáng có hai bạn trực tưới nước cho cây.' },
        { w: 'bón phân', use: 'Nhóm muốn học cách bón phân cho cây đúng cách.' },
        { w: 'sổ theo dõi', use: 'Bạn Vy ghi chép cẩn thận vào sổ theo dõi cây.' },
        { w: 'xanh tươi', use: 'Nhóm mong bồn cây trước lớp luôn xanh tươi.' }
      ] },
      { group: 'Từ ngữ nhận xét, đề xuất', items: [
        { w: 'sôi nổi', use: 'Buổi thảo luận diễn ra rất sôi nổi.' },
        { w: 'đều đặn', use: 'Có lịch trực nên cây được chăm sóc đều đặn.' },
        { w: 'đề xuất', use: 'Nhóm đề xuất làm biển tên cho từng cây.' },
        { w: 'góp sức', use: 'Ai trong nhóm cũng muốn góp sức làm đẹp sân trường.' }
      ] }
    ]
  },

  {
    id: 'rp-ve-sinh', type: 'report', name: 'Báo cáo: giữ vệ sinh lớp học',
    topic: 'Báo cáo kết quả thảo luận nhóm về cách giữ gìn vệ sinh lớp học',
    keys: ['vệ sinh lớp học', 'giữ gìn vệ sinh', 'lớp học sạch đẹp', 'trực nhật', 'giữ vệ sinh'],
    title: 'BÁO CÁO KẾT QUẢ THẢO LUẬN NHÓM',
    to: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A',
    subject: 'Về cách giữ gìn vệ sinh lớp học',
    items: [
      { h: 'Thời gian, thành phần', s: 'Nhóm 4 đã thảo luận vào giờ sinh hoạt lớp chiều thứ Sáu, ngày … tháng … ; có mặt đủ 5 thành viên.' },
      { h: 'Lịch trực nhật hằng ngày', s: 'Nhóm thống nhất lập lịch trực nhật: mỗi ngày hai bạn quét lớp, lau bảng, đổ rác trước giờ vào học.' },
      { h: 'Không xả rác bừa bãi', s: 'Mọi bạn bỏ rác đúng nơi quy định, vỏ bánh kẹo cho vào thùng rác, giấy vụn gom riêng để bán lấy tiền quỹ lớp.' },
      { h: 'Giữ bàn ghế sạch sẽ', s: 'Không viết, vẽ lên bàn ghế và tường; mỗi bạn tự lau chỗ ngồi của mình vào cuối buổi học thứ Sáu.' },
      { h: 'Cử bạn nhắc nhở', s: 'Bạn Hải được giao nhắc nhở và ghi lại những bạn làm tốt hoặc chưa tốt để báo cáo trong giờ sinh hoạt.' }
    ],
    good: [
      'Các bạn trong nhóm đều nhận thấy lớp sạch thì học tập vui và khoẻ hơn.',
      'Nhóm đưa ra những việc làm cụ thể, dễ thực hiện.'
    ],
    todo: [
      'Nhóm đề xuất lớp mua thêm một thùng rác có nắp và hai chiếc khăn lau bảng mới.',
      'Nhóm mong cô khen thưởng tổ giữ vệ sinh tốt nhất mỗi tháng.'
    ],
    sign: 'Người viết báo cáo – Thư kí nhóm',
    vocab: [
      { group: 'Mẫu câu báo cáo', items: [
        { w: 'Kính gửi', use: 'Kính gửi: Cô giáo chủ nhiệm và các bạn lớp 4A.' },
        { w: 'Nhóm đã thảo luận', use: 'Nhóm đã thảo luận vào giờ sinh hoạt lớp chiều thứ Sáu.' },
        { w: 'thống nhất', use: 'Cả nhóm thống nhất lập lịch trực nhật hằng ngày.' },
        { w: 'được giao', use: 'Bạn Hải được giao nhắc nhở các bạn giữ vệ sinh.' }
      ] },
      { group: 'Từ ngữ về vệ sinh lớp học', items: [
        { w: 'trực nhật', use: 'Mỗi ngày có hai bạn trực nhật quét lớp.' },
        { w: 'xả rác', use: 'Không bạn nào được xả rác bừa bãi trong lớp.' },
        { w: 'đúng nơi quy định', use: 'Các bạn bỏ rác đúng nơi quy định.' },
        { w: 'lau bảng', use: 'Bạn trực nhật lau bảng trước giờ vào học.' },
        { w: 'sạch sẽ', use: 'Lớp học sạch sẽ giúp chúng em học tập vui hơn.' }
      ] },
      { group: 'Từ ngữ nhận xét, đề xuất', items: [
        { w: 'nhận thấy', use: 'Các bạn đều nhận thấy lớp sạch thì ai cũng khoẻ.' },
        { w: 'dễ thực hiện', use: 'Nhóm đưa ra những việc làm dễ thực hiện.' },
        { w: 'đề xuất', use: 'Nhóm đề xuất mua thêm một thùng rác có nắp.' },
        { w: 'khen thưởng', use: 'Nhóm mong cô khen thưởng tổ giữ vệ sinh tốt nhất.' }
      ] }
    ]
  },

  /* ============ ĐOẠN VĂN NÊU Ý KIẾN (opinion) ============ */
  {
    id: 'op-doc-sach', type: 'opinion', name: 'Ý kiến về việc đọc sách mỗi ngày',
    topic: 'Nêu ý kiến của em về việc đọc sách mỗi ngày',
    keys: ['đọc sách mỗi ngày', 'việc đọc sách', 'đọc sách', 'thói quen đọc sách', 'lợi ích của đọc sách'],
    intro: [
      'Theo em, đọc sách mỗi ngày là một thói quen rất tốt mà bạn nhỏ nào cũng nên có.'
    ],
    reasons: [
      { h: 'Sách mở rộng hiểu biết', s: 'Trước hết, sách giúp chúng ta biết thêm bao điều mới lạ; nhờ đọc cuốn “Mười vạn câu hỏi vì sao”, em đã hiểu vì sao bầu trời có màu xanh.' },
      { h: 'Giúp viết văn hay hơn', s: 'Bên cạnh đó, đọc sách nhiều giúp em có thêm vốn từ ngữ; từ khi đọc truyện mỗi tối, bài văn của em được cô khen là dùng từ hay và sinh động hơn.' },
      { h: 'Dạy ta sống tốt', s: 'Không chỉ vậy, những câu chuyện trong sách dạy em biết yêu thương, chia sẻ; đọc “Dế Mèn phiêu lưu kí”, em hiểu rằng không nên kiêu căng, bắt nạt kẻ yếu.' },
      { h: 'Thư giãn, bớt xem điện thoại', s: 'Hơn nữa, mười lăm phút đọc sách trước khi ngủ giúp em thấy thư thái và bớt thời gian ngồi xem điện thoại, đôi mắt cũng đỡ mỏi.' }
    ],
    end: [
      'Vì thế, em mong bạn nào cũng dành ra một ít thời gian đọc sách mỗi ngày, dù chỉ vài trang thôi.',
      'Mỗi trang sách là một người bạn hiền giúp chúng ta lớn lên thêm từng ngày.'
    ],
    vocab: [
      { group: 'Câu nêu ý kiến', items: [
        { w: 'Theo em', use: 'Theo em, đọc sách mỗi ngày là một thói quen rất tốt.' },
        { w: 'Em cho rằng', use: 'Em cho rằng sách là người bạn hiền của mỗi người.' },
        { w: 'Em rất đồng tình', use: 'Em rất đồng tình với việc mỗi bạn đọc sách mười lăm phút mỗi ngày.' },
        { w: 'thói quen', use: 'Đọc sách trước khi ngủ đã trở thành thói quen của em.' }
      ] },
      { group: 'Từ nối lí do', items: [
        { w: 'Trước hết', use: 'Trước hết, sách giúp em biết thêm nhiều điều mới lạ.' },
        { w: 'Bên cạnh đó', use: 'Bên cạnh đó, đọc sách giúp em viết văn hay hơn.' },
        { w: 'Không chỉ vậy', use: 'Không chỉ vậy, sách còn dạy em cách sống tốt.' },
        { w: 'Hơn nữa', use: 'Hơn nữa, đọc sách giúp em bớt xem điện thoại.' },
        { w: 'Vì thế', use: 'Vì thế, em sẽ đọc sách mỗi ngày.' }
      ] },
      { group: 'Từ ngữ đánh giá', items: [
        { w: 'bổ ích', use: 'Cuốn sách khoa học này thật bổ ích.' },
        { w: 'hiểu biết', use: 'Đọc sách giúp em mở rộng hiểu biết về thế giới.' },
        { w: 'vốn từ ngữ', use: 'Nhờ đọc sách, vốn từ ngữ của em ngày càng phong phú.' },
        { w: 'thư thái', use: 'Đọc vài trang truyện làm em thấy thư thái trước khi ngủ.' }
      ] }
    ]
  },

  {
    id: 'op-uong-nuoc-nho-nguon', type: 'opinion', name: 'Ý kiến về một tấm gương “Uống nước nhớ nguồn”',
    topic: 'Nêu ý kiến của em về một tấm gương "Uống nước nhớ nguồn"',
    keys: ['uống nước nhớ nguồn', 'đền ơn đáp nghĩa', 'nghĩa trang liệt sĩ', 'thương binh liệt sĩ', 'tấm gương', 'biết ơn'],
    intro: [
      'Em rất cảm phục việc làm của các bạn Liên đội trường em: tháng Bảy nào các bạn cũng đến thăm, dọn dẹp nghĩa trang liệt sĩ của xã và thăm hỏi các gia đình thương binh, liệt sĩ.',
      'Theo em, đó là một tấm gương đẹp về truyền thống “Uống nước nhớ nguồn”.'
    ],
    reasons: [
      { h: 'Thể hiện lòng biết ơn', s: 'Trước hết, việc làm ấy thể hiện lòng biết ơn các chú bộ đội, các anh hùng liệt sĩ đã hi sinh để chúng ta có cuộc sống hoà bình; các bạn đã cùng nhau quét lá, nhổ cỏ, thắp hương trên từng phần mộ.' },
      { h: 'Mang niềm vui cho mọi người', s: 'Bên cạnh đó, những món quà nhỏ và bài hát các bạn tặng đã làm các bác thương binh, các bà mẹ liệt sĩ rất cảm động, có bà còn nắm tay các bạn hỏi han mãi không thôi.' },
      { h: 'Giúp em hiểu lịch sử', s: 'Không chỉ vậy, khi nghe các bác cựu chiến binh kể chuyện chiến đấu, các bạn hiểu thêm về lịch sử quê hương và thêm yêu đất nước.' },
      { h: 'Lan toả việc làm tốt', s: 'Hơn nữa, việc làm ấy đã lan toả khắp trường, năm nay nhiều lớp khác cũng xin được cùng tham gia, trong đó có lớp em.' }
    ],
    end: [
      'Vì thế, em rất trân trọng tấm gương ấy và tự nhủ sẽ học tập thật tốt, luôn ghi nhớ công ơn của những người đi trước.'
    ],
    vocab: [
      { group: 'Câu nêu ý kiến', items: [
        { w: 'Em rất cảm phục', use: 'Em rất cảm phục việc làm của các bạn trong Liên đội.' },
        { w: 'Theo em', use: 'Theo em, đó là một tấm gương đẹp về lòng biết ơn.' },
        { w: 'tấm gương', use: 'Các bạn là tấm gương để chúng em noi theo.' },
        { w: 'Điều làm em xúc động nhất', use: 'Điều làm em xúc động nhất là bà mẹ liệt sĩ nắm tay các bạn hỏi han.' }
      ] },
      { group: 'Từ ngữ về truyền thống', items: [
        { w: 'uống nước nhớ nguồn', use: 'Thăm nghĩa trang liệt sĩ là việc làm thể hiện truyền thống uống nước nhớ nguồn.' },
        { w: 'đền ơn đáp nghĩa', use: 'Trường em thường tổ chức các hoạt động đền ơn đáp nghĩa.' },
        { w: 'hi sinh', use: 'Các anh hùng liệt sĩ đã hi sinh vì độc lập của Tổ quốc.' },
        { w: 'công ơn', use: 'Chúng em luôn ghi nhớ công ơn của những người đi trước.' },
        { w: 'thương binh', use: 'Các bạn đến thăm hỏi và tặng quà các bác thương binh.' }
      ] },
      { group: 'Từ ngữ bày tỏ tình cảm', items: [
        { w: 'biết ơn', use: 'Em vô cùng biết ơn các chú bộ đội đã bảo vệ quê hương.' },
        { w: 'trân trọng', use: 'Em trân trọng những việc làm nhỏ mà ý nghĩa ấy.' },
        { w: 'cảm động', use: 'Các bà mẹ liệt sĩ rất cảm động khi nghe các bạn hát.' },
        { w: 'lan toả', use: 'Việc làm tốt của các bạn đã lan toả khắp trường.' }
      ] }
    ]
  },

  {
    id: 'op-thu-cung', type: 'opinion', name: 'Ý kiến về việc nuôi thú cưng',
    topic: 'Nêu ý kiến của em về việc có nên nuôi thú cưng không',
    keys: ['nuôi thú cưng', 'thú cưng', 'có nên nuôi', 'nuôi chó mèo', 'vật nuôi'],
    intro: [
      'Theo em, các bạn nhỏ nên nuôi thú cưng, nhưng phải biết chăm sóc chúng thật chu đáo và có trách nhiệm.'
    ],
    reasons: [
      { h: 'Thú cưng là bạn thân', s: 'Trước hết, thú cưng là người bạn nhỏ luôn ở bên ta; mỗi chiều đi học về, chú chó Mực nhà em lại vẫy đuôi chạy ra đón khiến em quên hết mệt mỏi.' },
      { h: 'Rèn tính trách nhiệm', s: 'Bên cạnh đó, nuôi thú cưng giúp em biết chăm lo cho người khác; ngày nào em cũng tự cho Mực ăn, thay nước và dọn chỗ nằm cho nó.' },
      { h: 'Giúp em vận động nhiều hơn', s: 'Không chỉ vậy, chiều nào em cũng dắt Mực đi dạo quanh xóm, nhờ đó em bớt ngồi xem ti vi và khoẻ mạnh hơn.' },
      { h: 'Cần nuôi đúng cách', s: 'Tuy vậy, nuôi thú cưng cũng cần cẩn thận: phải tiêm phòng đầy đủ, giữ vệ sinh, không thả rông để chúng làm phiền hàng xóm; bố em luôn đưa Mực đi tiêm phòng dại mỗi năm.' }
    ],
    end: [
      'Vì vậy, em nghĩ nuôi thú cưng là điều rất đáng làm, miễn là chúng ta yêu thương và chăm sóc chúng đúng cách.'
    ],
    vocab: [
      { group: 'Câu nêu ý kiến', items: [
        { w: 'Theo em', use: 'Theo em, các bạn nhỏ nên nuôi một con vật để làm bạn.' },
        { w: 'Em nghĩ rằng', use: 'Em nghĩ rằng nuôi thú cưng giúp chúng ta biết yêu thương.' },
        { w: 'Tuy vậy', use: 'Tuy vậy, nuôi thú cưng cũng cần nhiều công chăm sóc.' },
        { w: 'miễn là', use: 'Nuôi thú cưng là điều tốt, miễn là chúng ta có trách nhiệm.' }
      ] },
      { group: 'Từ ngữ về chăm sóc vật nuôi', items: [
        { w: 'tiêm phòng', use: 'Bố em đưa chú chó đi tiêm phòng mỗi năm.' },
        { w: 'chăm sóc', use: 'Em tự tay chăm sóc chú mèo nhỏ mỗi ngày.' },
        { w: 'thả rông', use: 'Không nên thả rông chó ra đường.' },
        { w: 'đi dạo', use: 'Chiều nào em cũng dắt chú chó Mực đi dạo quanh xóm.' },
        { w: 'vệ sinh', use: 'Em giữ vệ sinh chỗ nằm của Mực luôn sạch sẽ.' }
      ] },
      { group: 'Từ ngữ đánh giá, tình cảm', items: [
        { w: 'trách nhiệm', use: 'Nuôi thú cưng giúp em có tinh thần trách nhiệm hơn.' },
        { w: 'quấn quýt', use: 'Chú chó Mực lúc nào cũng quấn quýt bên em.' },
        { w: 'trung thành', use: 'Chó là con vật rất trung thành với chủ.' },
        { w: 'đáng yêu', use: 'Chú mèo con đáng yêu làm cả nhà vui vẻ.' }
      ] }
    ]
  },

  {
    id: 'op-tui-ni-long', type: 'opinion', name: 'Ý kiến về việc hạn chế túi ni lông',
    topic: 'Nêu ý kiến của em về việc hạn chế dùng túi ni lông để bảo vệ môi trường',
    keys: ['túi ni lông', 'túi nilon', 'hạn chế túi ni lông', 'bảo vệ môi trường', 'rác thải nhựa'],
    intro: [
      'Theo em, mỗi người, mỗi gia đình nên hạn chế dùng túi ni lông để cùng nhau bảo vệ môi trường.'
    ],
    reasons: [
      { h: 'Túi ni lông rất khó phân huỷ', s: 'Trước hết, túi ni lông phải mất hàng trăm năm mới phân huỷ hết; những chiếc túi bị vứt ở bãi đất gần nhà em đến nay vẫn còn nguyên, bám đầy bùn đất.' },
      { h: 'Gây ô nhiễm đất và nước', s: 'Bên cạnh đó, túi ni lông làm đất kém màu mỡ và làm tắc cống rãnh; mùa mưa năm ngoái, con đường trước ngõ nhà em bị ngập vì rác ni lông lấp kín miệng cống.' },
      { h: 'Gây hại cho các con vật', s: 'Không chỉ vậy, nhiều con vật như rùa biển, cá voi đã chết vì nuốt phải túi ni lông mà tưởng là thức ăn.' },
      { h: 'Dễ thay bằng đồ dùng khác', s: 'Hơn nữa, chúng ta hoàn toàn có thể dùng túi vải, làn nhựa hoặc giỏ đi chợ; mẹ em đã quen mang túi vải mỗi lần đi chợ, vừa tiện vừa dùng được rất lâu.' }
    ],
    end: [
      'Vì thế, em mong mọi người hãy nói “không” với túi ni lông khi có thể, bắt đầu từ những việc nhỏ như mang theo túi vải.',
      'Mỗi chiếc túi ni lông bớt đi là một phần môi trường được giữ gìn xanh – sạch – đẹp.'
    ],
    vocab: [
      { group: 'Câu nêu ý kiến', items: [
        { w: 'Theo em', use: 'Theo em, chúng ta nên hạn chế dùng túi ni lông.' },
        { w: 'Em cho rằng', use: 'Em cho rằng bảo vệ môi trường là việc của tất cả mọi người.' },
        { w: 'Em mong', use: 'Em mong mọi người mang túi vải khi đi chợ.' },
        { w: 'nói “không”', use: 'Hãy nói “không” với túi ni lông khi có thể.' }
      ] },
      { group: 'Từ ngữ về môi trường', items: [
        { w: 'phân huỷ', use: 'Túi ni lông phải mất hàng trăm năm mới phân huỷ.' },
        { w: 'ô nhiễm', use: 'Rác ni lông làm ô nhiễm đất và nguồn nước.' },
        { w: 'tắc cống', use: 'Túi ni lông vứt bừa bãi làm tắc cống, gây ngập đường.' },
        { w: 'túi vải', use: 'Mẹ em luôn mang theo túi vải khi đi chợ.' },
        { w: 'rác thải nhựa', use: 'Rác thải nhựa đang làm hại nhiều loài vật dưới biển.' }
      ] },
      { group: 'Từ nối và từ đánh giá', items: [
        { w: 'Trước hết', use: 'Trước hết, túi ni lông rất khó phân huỷ.' },
        { w: 'Bên cạnh đó', use: 'Bên cạnh đó, túi ni lông còn gây ngập úng.' },
        { w: 'Hơn nữa', use: 'Hơn nữa, chúng ta có nhiều cách thay thế túi ni lông.' },
        { w: 'có hại', use: 'Túi ni lông rất có hại cho đất, nước và các con vật.' },
        { w: 'Vì thế', use: 'Vì thế, em sẽ dùng túi vải thay cho túi ni lông.' }
      ] }
    ]
  }
);

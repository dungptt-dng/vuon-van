# VƯỜN VĂN – Hướng dẫn sử dụng

App luyện viết văn cho học sinh lớp 4, theo các dạng văn trong SGK Tiếng Việt 4 – Kết nối tri thức với cuộc sống (tập một và tập hai).

## 1. Chạy thử ngay trên máy tính

1. Nháy đúp tệp **`MO-APP.bat`**.
2. Trình duyệt tự mở trang `http://localhost:8686/`. Cửa sổ đen phía sau là "máy chủ nhỏ" của app: **để nguyên, đừng tắt** trong lúc dùng.
3. Học sinh nhập họ tên và mã lớp rồi bấm **Vào vườn văn**.
4. Thầy cô bấm **👩‍🏫 Giáo viên**, nhập mã lớp và mã PIN (mặc định **`1234`**; đổi PIN trong *Cài đặt*).

Khi chưa cài gì thêm, app vẫn dùng được đầy đủ trên **một máy**: bản thảo gợi ý, sơ đồ tư duy, kiểm tra chính tả, chấm điểm tạm, lưu bài, báo cáo. Dữ liệu nằm trong trình duyệt của máy đó.

## 2. Các tính năng chính

| Dành cho | Tính năng |
|---|---|
| Học sinh | Chọn dạng văn (14 dạng theo SGK), chủ điểm, đề bài, cách gợi ý (vốn từ, ý, 2–3 gợi ý cho từng đoạn, sơ đồ tư duy, dàn ý, đoạn văn mẫu) và nhập yêu cầu riêng |
| Học sinh | Nhận **bản thảo gợi ý**, viết bài trên "giấy kẻ ô ly", bấm chip từ ngữ để chèn vào bài |
| Học sinh | **Kiểm tra chính tả – ngữ pháp** (s/x, tr/ch, r/d/gi, l/n, dấu hỏi/ngã, ng/ngh, g/gh, c/k, viết hoa, dấu câu, từ lặp…), sửa từng lỗi hoặc sửa tất cả; khi có AI thì kiểm tra sâu hơn |
| Học sinh | Nộp bài → **AI chấm điểm** theo thang 10 (bố cục, nội dung, dùng từ – đặt câu, chính tả, sáng tạo), nêu điểm mạnh, điều cần cải thiện, câu văn hay hơn |
| Học sinh | Xem lại bài của em, bài tập thầy cô giao, nhận **nhắc bài tập** |
| Giáo viên | Tổng quan lớp, xem từng bài, chấm lại bằng AI, cho điểm và nhận xét (điểm của thầy cô được ưu tiên hơn điểm AI) |
| Giáo viên | Quản lý học sinh, **giao bài** có hạn nộp |
| Giáo viên | **Báo cáo tiến độ** theo tuần / tháng / học kì / tuỳ chọn: biểu đồ xu hướng, điểm từng em, theo dạng văn; tải Excel (CSV), in hoặc lưu PDF; app **tự lập báo cáo định kỳ** |
| Giáo viên | Sao lưu tự động hằng ngày (trên máy + lên đám mây), xuất/nhập tệp sao lưu |
| Mọi người | Cỡ chữ lớn, chế độ tương phản cao, đọc to bằng giọng nói (nút **Aa**), dùng được trên điện thoại, máy tính bảng |

## 3. Bật AI (Claude) – để gợi ý hay hơn và chấm điểm thật

1. Vào <https://console.anthropic.com>, tạo tài khoản, nạp tiền, rồi vào **API Keys** → **Create Key**.
2. **Nên đặt giới hạn chi tiêu** (Settings → Limits) để không bị tiêu quá mức.
3. Trong app: **Giáo viên → Cài đặt → Trí tuệ nhân tạo**, dán khoá, chọn mô hình, bấm **Kiểm tra khoá** rồi **Lưu**.
   - *Claude Opus 5.5*: chất lượng cao nhất (khuyên dùng).
   - *Claude Sonnet 5.5* / *Haiku 5.5*: rẻ và nhanh hơn.
4. Muốn máy học sinh cũng dùng AI: bật **Dùng chung khoá cho máy học sinh của lớp** (cần đã bật đồng bộ ở mục 4).

Không có khoá hoặc mất mạng: app tự dùng bộ gợi ý có sẵn và cho **điểm tạm** (có dấu `*`). Khi có mạng và khoá, bài đó được AI chấm lại tự động.

> ⚠️ Khoá AI được lưu trong trình duyệt. Ai biết mã lớp và dùng app của lớp thì có thể đọc được khoá khi thầy cô bật "dùng chung". Vì vậy hãy luôn đặt giới hạn chi tiêu và có thể tạo khoá riêng cho app này.

## 4. Bật đồng bộ thời gian thực + sao lưu đám mây (Firebase, miễn phí)

Để bài làm của học sinh trên mọi máy hiện ngay ở máy thầy cô, bài tập giao đến ngay máy học sinh, và dữ liệu được sao lưu lên mạng:

1. Vào <https://console.firebase.google.com> → **Add project** (đặt tên, ví dụ `vuon-van-lop4a`; có thể tắt Google Analytics).
2. **Build → Firestore Database → Create database** → chọn vùng gần (ví dụ `asia-southeast1`) → *Start in production mode*.
3. Tab **Rules** của Firestore: xoá hết, dán toàn bộ nội dung tệp **`firestore.rules`** đi kèm, bấm **Publish**.
4. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable**.
5. **Project settings (⚙️) → Your apps → biểu tượng `</>` (Web)** → đặt tên → **Register app**. Sao chép đoạn `firebaseConfig = { ... }`.
6. Mở tệp **`app/js/config.js`** bằng Notepad, thay `firebase: null` bằng cấu hình vừa sao chép (xem ví dụ trong tệp), lưu lại.
   *(Hoặc dán vào Giáo viên → Cài đặt → Đồng bộ, nhưng cách này phải làm trên từng máy.)*
7. Đặt **mã lớp khó đoán** (ví dụ `4A-HOAMAI-2731`) và chỉ báo cho học sinh lớp mình – mã lớp chính là "chìa khoá" vào dữ liệu của lớp.

Khi đã kết nối, góc trên app hiện chấm **Trực tuyến** và mục Tổng quan báo "Đã kết nối đám mây ☁️". Mất mạng thì học sinh vẫn viết bình thường; có mạng lại app tự gửi lên.

## 5. Đưa app lên mạng để học sinh dùng ở nhà / trên điện thoại

Trang `localhost` chỉ mở được trên chính máy đó. Để cả lớp dùng, đưa **toàn bộ thư mục `app`** lên một dịch vụ lưu trữ web miễn phí (cần địa chỉ `https://`):

- **Netlify Drop** (dễ nhất): vào <https://app.netlify.com/drop>, kéo thả thư mục `app` vào → nhận được địa chỉ dạng `https://ten-ngau-nhien.netlify.app`.
- Hoặc **Firebase Hosting** (cùng dự án Firebase ở mục 4), hoặc **GitHub Pages**.

Gửi địa chỉ đó cho học sinh. Trên điện thoại/máy tính bảng, mở bằng Chrome/Safari rồi chọn **Thêm vào màn hình chính** (Cài đặt app) – app sẽ có biểu tượng riêng và **chạy được khi không có mạng**.

Mỗi lần sửa `config.js` hoặc tệp nào trong `app`, hãy tải lại thư mục lên.

## 6. Thông báo nhắc bài tập

- Học sinh bấm **🔔 Bật thông báo nhắc bài** trong mục *Bài tập*. App nhắc khi: có bài mới được giao, bài sắp hết hạn (dưới 24 giờ), và nhắc luyện viết hằng ngày theo giờ chọn trong nút **Aa** (mặc định 19:00).
- Thầy cô nhận thông báo khi có học sinh nộp bài.
- Thông báo hoạt động khi app đang mở (kể cả chạy nền). Với app đã **cài lên màn hình chính** trên Chrome/Edge (Android, máy tính), app còn tự kiểm tra hạn nộp định kỳ khi đang đóng.
- Giới hạn: muốn gửi thông báo tới máy **đã tắt hẳn app** (nhất là iPhone) cần thêm máy chủ gửi tin (Firebase Cloud Messaging + Cloud Functions, gói trả phí Blaze). Bản hiện tại chưa dùng phần này.

## 7. Sao lưu & khôi phục

- Mỗi ngày app tự sao lưu: lưu 7 bản gần nhất ngay trên máy, và gửi một bản lên đám mây (nếu đã bật Firebase).
- **Giáo viên → Cài đặt → Sao lưu**: **Sao lưu ngay**, **Tải tệp sao lưu (.json)** về máy, **Khôi phục từ tệp**, hoặc khôi phục bản sao lưu của một ngày.
- Lưu ý: nếu chưa bật đồng bộ, xoá dữ liệu duyệt web của trình duyệt sẽ xoá bài làm – hãy tải tệp sao lưu định kỳ.

## 8. Các tệp trong thư mục

```
VUON_VAN/
├─ MO-APP.bat          ← nháy đúp để chạy trên máy
├─ HUONG-DAN.md        ← tệp này
├─ firestore.rules     ← luật bảo mật dán vào Firebase
└─ app/                ← toàn bộ app (thư mục cần đưa lên mạng)
   ├─ index.html, sw.js, manifest.webmanifest
   ├─ css/style.css
   ├─ assets/          ← hình nền đăng nhập, biểu tượng
   └─ js/
      ├─ config.js     ← chỗ thầy cô dán cấu hình Firebase
      ├─ data.js       ← 14 dạng văn, chủ điểm, đề bài, vốn từ theo SGK
      ├─ spell.js      ← bộ kiểm tra chính tả – ngữ pháp
      ├─ ai.js         ← gợi ý & chấm điểm bằng Claude
      ├─ sync.js       ← đồng bộ & sao lưu đám mây
      ├─ notify.js     ← thông báo nhắc bài
      ├─ report.js     ← báo cáo tiến độ
      └─ app.js, teacher.js, db.js, utils.js
```

Muốn thêm đề bài hoặc vốn từ: mở `app/js/data.js`, tìm dạng văn tương ứng và thêm vào danh sách `topics` hoặc `vocab`.

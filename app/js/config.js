/* CẤU HÌNH CHUNG CHO CẢ LỚP – thầy cô sửa tệp này MỘT LẦN trước khi đưa app lên mạng.
   Nhờ vậy mọi máy của học sinh tự kết nối đồng bộ mà không phải nhập lại.
   (Có thể để trống và nhập trong mục Cài đặt của Giáo viên trên từng máy.) */
window.VV = window.VV || {};

VV.CONFIG = {
  // Dán cấu hình Firebase của thầy cô vào đây (Firebase Console → Project settings → Your apps → Config).
  // Ví dụ:
  // firebase: {
  //   apiKey: "AIza...",
  //   authDomain: "vuon-van-lop4a.firebaseapp.com",
  //   projectId: "vuon-van-lop4a",
  //   storageBucket: "vuon-van-lop4a.appspot.com",
  //   messagingSenderId: "1234567890",
  //   appId: "1:1234567890:web:abcdef"
  // },
  firebase: null,

  // Mã lớp mặc định gợi ý trên màn hình đăng nhập (ví dụ "4A-HOAMAI"). Để trống nếu không cần.
  defaultClassCode: ''
};

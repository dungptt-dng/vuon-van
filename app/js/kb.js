/* KHO KIẾN THỨC của VƯỜN VĂN – nội dung cụ thể cho từng đề tài (câu chuyện, con vật, cây, người, sự việc…).
   Các tệp kb-*.js đẩy mục vào VV.KB; coach.js tìm mục khớp với đề bài và yêu cầu của học sinh để gợi ý đúng bài.

   Trường chung của mỗi mục:
     id     – mã duy nhất, ví dụ 'st-vu-sua'
     type   – story | animal | tree | person | event | craft | product | letter | form | invite | report | opinion
     name   – tên hiển thị: 'Sự tích cây vú sữa', 'con mèo', 'cây bàng', 'mẹ'…
     keys   – các cụm từ (chữ thường, có dấu) để nhận ra đề tài trong đề bài / yêu cầu
     vocab  – [{ group, items: [{ w: 'từ ngữ', use: 'Câu mẫu có dùng từ ngữ đó.' }] }]
     topic  – đề bài cụ thể (bắt buộc với mọi loại trừ story, animal, tree)

   story  : kind, hero, intro, setting, chars[{n,t}], open[{h,s}], body[{h,s}], end[{h,s}], details[], lesson, feel[], alt[]
   animal, tree, person : intro[], look[{part,items[]}], acts[{part,items[]}], bond[], end[]
   event  : intro[], steps[{h,s}], highlight[], feel[], end[]
   craft  : intro[], materials[], steps[{h,s}], notes[], end[]
   product: intro[], parts[{part,items[]}], steps[{h,s}], notes[], end[]
   letter : place, greet, ask[], tell[], wish[], promise[], sign
   form   : title, to, self[], reason[], promise[]
   invite : title, to, content[], time, place, program[], note[], sign
   report : title, to, subject, items[{h,s}], good[], todo[], sign
   opinion: intro[], reasons[{h,s}], end[]
   ({h,s}: h – nhãn ngắn cho sơ đồ tư duy, s – câu đầy đủ) */
window.VV = window.VV || {};
VV.KB = VV.KB || [];

/* Bỏ dấu tiếng Việt để so khớp khi học sinh gõ không dấu */
VV.unaccent = function (s) {
  return String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D');
};

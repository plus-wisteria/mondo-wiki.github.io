// $(function () {
//   function end_loader() {
//     $('.loader').fadeOut(800);
//   }
//   $(window).on('load', function () {
//     setTimeout(function () {
//       end_loader();
//     }, 3000)
//   })
// })

$(document).ready(function () {
  console.log("load.js is loaded"); // 読み込み確認用
  setTimeout(function () {
    $('.loader').fadeOut(800);
  }, 2000); // 秒後に消える
});
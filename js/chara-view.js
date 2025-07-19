document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".char-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const detailId = this.getAttribute("data-detail");

      // jQueryでフェード処理
      $(".char-content:visible, .char-detail:visible").fadeOut(300, function () {
        $("#" + targetId).fadeIn(300);
        $("#" + detailId).fadeIn(300);
      });
    });
  });
});




  
  
  

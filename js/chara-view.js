document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".char-btn");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const targetId = this.getAttribute("data-target");
        const detailId = this.getAttribute("data-detail");
  
        // すべてのキャラコンテンツを非表示にする
        document.querySelectorAll(".char-content").forEach((content) => {
          content.style.display = "none";
        });
  
        // すべての詳細ステータスを非表示にする
        document.querySelectorAll(".char-detail").forEach((detail) => {
          detail.style.display = "none";
        });
  
        // 選択したキャラのコンテンツと詳細を表示
        document.getElementById(targetId).style.display = "block";
        document.getElementById(detailId).style.display = "block";
      });
    });
  });


  
  
  
$(document).ready(function () {
  //藥丸分類視窗 / 導覽分類視窗 預選 index 1
  $("#categoryModal .modal_list_btn:first-child").addClass("selected");
  $("#backNavModal .modal_list_btn:first-child").addClass("selected");

  //藥丸頁籤分頁操作
  //選中頁籤
  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    let targetItemId = e.target.id.split("-")[1];
    $("#categoryModal .modal_list_btn").removeClass("selected");
    $(`#categoryModal #modal-list-${targetItemId}`).addClass("selected");
  });

  //點擊導覽分類視窗按鈕
  $("#backNavModal .modal_list_btn").click(function (e) {
    let targetItemText = $(this).text();

    $(".main_title h5").text(targetItemText);

    $("#backNavModal").modal("hide");
  });

  //網址提取參數
  function getUrlQuery(val) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] == val) {
        return pair[1];
      }
    }
    return false;
  }
});

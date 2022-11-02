//search_list_data.js

$(document).ready(function () {
  //取得分類標題
  var titleIndex = Number(getUrlQuery("title"));
  getTitle();

  function getTitle() {
    //被選中的導覽分類
    if (titleIndex == 4) {
      //langSetting == 'tw'
      $(".back_navbar span").text("英文關鍵字");
      //langSetting == 'en'
      $(".back_navbar span").text("ENG. KEYWORD");
    }
  }

  //藥丸分類視窗按鈕預選 index 1
  $("#categoryModal .modal_list_btn:first-child").addClass("selected");

  //藥丸頁籤分頁操作
  //選中頁籤
  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    let targetItemId = e.target.id.split("-")[1];
    $("#categoryModal .modal_list_btn").removeClass("selected");
    $(`#categoryModal #modal-list-${targetItemId}`).addClass("selected");
  });

  //keyboard 動態改變 ScrollWrapper 高度
  //進入畫面時設定 ScrollWrapper 高度
  setScrollWrapperHeight(".zhuyin_keyboard", ".scroll_wrapper_zhuyin");
  setScrollWrapperHeight(".english_keyboard", ".scroll_wrapper_english");
  setScrollWrapperHeight(".number_keyboard", ".scroll_wrapper_number");

  $(window).resize(function () {
    //Screen size 改變時設定 ScrollWrapper 高度
    setScrollWrapperHeight(".zhuyin_keyboard", ".scroll_wrapper_zhuyin");
    setScrollWrapperHeight(".english_keyboard", ".scroll_wrapper_english");
    setScrollWrapperHeight(".number_keyboard", ".scroll_wrapper_number");
  });

  function setScrollWrapperHeight(keyboard, scrollWrapper) {
    let scrollWrapperPaddingTop = $(keyboard).height() + 10;
    scrollWrapperPaddingTop;
    $(scrollWrapper).css("padding-top", `${scrollWrapperPaddingTop}px`);
  }

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

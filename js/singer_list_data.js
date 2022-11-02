//singer_list_data.js

$(document).ready(function () {
  //langSetting == "en"
  const list = [
    { title: "FEMALE ARTISTS", id: "female", img: "KTV-default" },
    { title: "MALE ARTISTS", id: "male", img: "KTV-default" },
    { title: "GROUP ARTISTS", id: "group", img: "KTV-default" },
    { title: "SONG TITLES", id: "song", img: "KTV-default" },
    { title: "ENG. KEYWORD", id: "english_keywords", img: "KTV-default" },
  ];

  //取得分類標題
  var titleIndex = Number(getUrlQuery("title"));
  getTitle();

  function getTitle() {
    //被選中的導覽分類
    if (titleIndex < 3) {
      $(".back_navbar h6").text(list[titleIndex].title);
    }
    $(`#backNavModal #modal-list-${list[titleIndex].id}`).addClass("selected");
  }

  //點擊導覽分類視窗按鈕
  $("#backNavModal .modal_list_btn").bind("click", function (e) {
    let targetItemText = $(this).text();
    let targetItemId = e.target.id.split("-")[2];

    if (targetItemId == "male") {
      window.location.replace("singer_list.html?cate=5&title=1");
      $("#backNavModal .modal_list_btn").removeClass("selected");
      $(`#backNavModal #modal-list-${targetItemId}`).addClass("selected");
      $(".back_navbar h6").text(targetItemText);
    } else if (targetItemId == "female") {
      window.location.replace("singer_list.html?cate=5&title=0");
      $("#backNavModal .modal_list_btn").removeClass("selected");
      $(`#backNavModal #modal-list-${targetItemId}`).addClass("selected");
      $(".back_navbar h6").text(targetItemText);
    } else if (targetItemId == "group") {
      window.location.replace("singer_list.html?cate=5&title=2");
      $("#backNavModal .modal_list_btn").removeClass("selected");
      $(`#backNavModal #modal-list-${targetItemId}`).addClass("selected");
      $(".back_navbar h6").text(targetItemText);
    } else if (targetItemId == "song") {
      window.location.replace("search_music.html?cate=5&title=3");
    } else if (targetItemId == "english_keywords") {
      window.location.replace("english_keywords.html?cate=5&title=4");
    }
    $("#backNavModal").modal("hide");
  });

  //藥丸分類視窗按鈕進入畫面預選 index 1
  $("#categoryModal .modal_list_btn:first-child").addClass("selected");

  //藥丸頁籤分頁操作
  //選中頁籤
  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    let targetItemId = e.target.id.split("-")[1];
    $("#categoryModal .modal_list_btn").removeClass("selected");
    $(`#categoryModal #modal-list-${targetItemId}`).addClass("selected");

    if (targetItemId == "english") {
      window.setTimeout(() => {
        setScrollWrapperHeight(".english_keyboard", ".scroll_wrapper_english");
      }, 100);
    }

    if (targetItemId == "zhuyin") {
      window.setTimeout(() => {
        setScrollWrapperHeight(".zhuyin_keyboard", ".scroll_wrapper_zhuyin");
      }, 100);
    }

    if (targetItemId == "number") {
      window.setTimeout(() => {
        setScrollWrapperHeight(".number_keyboard", ".scroll_wrapper_number");
      }, 100);
    }
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

$(document).ready(function () {
  //動態改變 ScrollWrapper 高度
  //進入畫面時設定 ScrollWrapper 高度
  setScrollWrapperHeight(".zhuyin_keyboard", ".scroll_wrapper_zhuyin");
  $(window).resize(function () {
    //Screen size 改變時設定 ScrollWrapper 高度
    setScrollWrapperHeight(".zhuyin_keyboard", ".scroll_wrapper_zhuyin");
  });

  function setScrollWrapperHeight(keyboard, scrollWrapper) {
    var scrollWrapperPaddingTop = $(keyboard).height() + 10;
    $(scrollWrapper).css("padding-top", "".concat(scrollWrapperPaddingTop, "px"));
  }
});
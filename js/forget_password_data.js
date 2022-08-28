// register
$(document).ready(function () {
  //偵測input已填寫內容，sendPasswordBtn 切換為可點擊
  $("#usernameInput").bind("input propertychange", function (evt) {
    if (
      $("#usernameInput").val().length > 0 &&
      $("#phoneInput").val().length > 0
    ) {
      $("#sendPasswordBtn").removeAttr("disabled");
    }
  });

  $("#phoneInput").bind("input propertychange", function (evt) {
    if (
      $("#usernameInput").val().length > 0 &&
      $("#phoneInput").val().length > 0
    ) {
      $("#sendPasswordBtn").removeAttr("disabled");
    }
  });
});

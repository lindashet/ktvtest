// register
$(document).ready(function () {
  //偵測input已填寫內容，loginBtn 切換為可點擊
  $("#usernameInput").bind("input propertychange", function (evt) {
    if (
      $("#usernameInput").val().length > 0 &&
      $("#passwordInput").val().length > 0
    ) {
      $("#loginBtn").removeAttr("disabled");
    }
  });
  $("#passwordInput").bind("input propertychange", function (evt) {
    if (
      $("#usernameInput").val().length > 0 &&
      $("#passwordInput").val().length > 0
    ) {
      $("#loginBtn").removeAttr("disabled");
    }
  });
});

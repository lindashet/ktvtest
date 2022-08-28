// register
$(document).ready(function () {
  //點擊同意條款按鈕
  $("#Checkbox").change(function () {
    var status = $(this).is(":checked");
    if (status) {
      $("#nextBtn").removeAttr("disabled");
    } else {
      $("#nextBtn").attr("disabled", "");
    }
  });

  //點擊下一步按鈕
  $("#nextBtn").click(function () {
    $(".register_step_1").addClass("d-none");
    $(".register_step_2").removeClass("d-none");
    console.log("step 2");
  });

  //點擊驗證按鈕
  $("#verifyBtn").click(function () {
    $(".register_step_2").addClass("d-none");
    $(".register_step_3").removeClass("d-none");
    console.log("step 3");
  });

  //點擊註冊按鈕
  $("#registerBtn").click(function () {
    $(".register_step_3").addClass("d-none");
    $(".register_step_4").removeClass("d-none");
    console.log("step 4");
  });

  //偵測input已填寫內容，顯示驗證碼區塊
  $("#usernameInput").bind("input propertychange", function (evt) {
    if (
      $("#usernameInput").val().length > 0 &&
      $("#phoneInput").val().length > 0
    ) {
      $("#verifyCodeBlock").removeClass("d-none");
    }
  });

  $("#phoneInput").bind("input propertychange", function (evt) {
    if (
      $("#usernameInput").val().length > 0 &&
      $("#phoneInput").val().length > 0
    ) {
      $("#verifyCodeBlock").removeClass("d-none");
    }
  });

  //偵測input已填寫內容，verifyBtn 切換為可點擊
  $("#verifyCodeInput").bind("input propertychange", function (evt) {
    if ($("#verifyCodeInput").val().length > 0) {
      $("#verifyBtn").removeAttr("disabled");
    }
  });

  //偵測input已填寫內容，registerBtn 切換為可點擊
  $("#passwordInput").bind("input propertychange", function (evt) {
    if (
      $("#passwordInput").val().length > 0 &&
      $("#passwordRepeatInput").val().length > 0
    ) {
      $("#registerBtn").removeAttr("disabled");
    }
  });

  $("#passwordRepeatInput").bind("input propertychange", function (evt) {
    if (
      $("#passwordInput").val().length > 0 &&
      $("#passwordRepeatInput").val().length > 0
    ) {
      $("#registerBtn").removeAttr("disabled");
    }
  });
});

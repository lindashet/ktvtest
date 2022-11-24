//member_center_data.js
$(document).ready(function () {
  var cateIndex = Number(getUrlQuery("cate"));

  console.log(cateIndex);
  switch (cateIndex) {
    case 1:
      $("#MemberCenterAccountTab-tab").tab("show");
      break;
    case 4:
      $("#MemberCenterEditTab-tab").tab("show");
      break;
    case 5:
      $("#MemberCenterEditPwdTab-tab").tab("show");
      break;
    default:
      break;
  }

  //變更手機版下拉選單標題
  $('button[data-bs-toggle="tab"]').on("show.bs.tab", function (e) {
    document.getElementById("navbarDropdownMemberCenterMenu").innerHTML =
      e.target.innerHTML;
  });

  //點擊編輯手機號碼按鈕
  $("#toMemberEditBtn").click(function (e) {
    $("#MemberCenterEditTab-tab").tab("show");
  });

  //點擊編輯手機號碼按鈕
  $("#phoneEditBtn").click(function () {
    $("#phoneEditBtn").addClass("d-none");
    $(".phone_new_wrapper").removeClass("d-none");
  });

  //點擊取消編輯手機號碼按鈕
  $("#cancelPhoneEditBtn").click(function () {
    $("#phoneEditBtn").removeClass("d-none");
    $(".phone_new_wrapper").addClass("d-none");
  });

  //點擊驗證手機號碼按鈕
  $("#verifyPhoneEditBtn").click(function () {
    $("#phoneEditBtn").removeClass("d-none");
    $(".phone_new_wrapper").addClass("d-none");
    showSuccessModal("手機號碼修改成功！");
  });

  //點擊確認修改會員資料按鈕
  $("#resetMemberInfoBtn").click(function () {
    showSuccessModal("會員資料更新完成！");
  });

  //點擊確認修改會員密碼按鈕
  $("#resetPasswordBtn").click(function () {
    showSuccessModal("會員密碼變更完成！");
  });

  $("#uploadBtn").click(function () {
    $("#uploadAvator").click();
  });

  // 修改密碼
  function showSuccessModal(text) {
    $(".successModalText").text(text);
    $("#successModal").modal("show");
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

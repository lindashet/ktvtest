$(document).ready(function () {
  //回上頁
  $("#backToPre").on("click", function () {
    history.back();
    console.log("back");
  }); //點擊外圍關閉語言視窗

  $(document).click(function () {
    if ($(".toast_lang_wrapper").hasClass("active")) {
      $(".toast_lang_wrapper").removeClass("active");
      $("#cover").hide();
    }
  }); //阻止冒泡事件

  $(".toast_lang_wrapper").click(function () {
    event.stopPropagation();
  }); //點擊語言按鈕

  $("#lang_btn").click(function () {
    if ($(".toast_lang_wrapper").hasClass("active")) {
      ToastLangToggle(false);
    } else {
      ToastLangToggle(true);
    }
  });
  $("#cover").click(function () {
    ToastLangToggle(false);
  });
  $(".lang_item").click(function () {
    switchLang($(this));
  }); //語言視窗開關

  function ToastLangToggle(isOpen) {
    $(".toast_lang_wrapper").click(function () {
      if (isOpen) {
        $(".toast_lang_wrapper").addClass("active");
        $("#cover").show();
      } else {
        $(".toast_lang_wrapper").removeClass("active");
        $("#cover").hide();
      }
    });
  } //切換語言


  function switchLang(evt) {
    if (evt.hasClass("tw")) {
      $(".lang_item.tw").addClass("selected");
      $(".lang_item.en").removeClass("selected");
    } else if (evt.hasClass("en")) {
      $(".lang_item.en").addClass("selected");
      $(".lang_item.tw").removeClass("selected");
    }

    ToastLangToggle(false);
  } // requestModal
  // 開啟 requestModal


  function requestModal(title, song, singer, type) {
    $(".model_alert").addClass(type);
    $(".requestModalTitle").text(title);
    $(".requestModalSong").text(song);
    $(".requestModalModalSinger").text(singer);
    $("#requestModal").modal("show");
    window.setTimeout(function () {
      $("#requestModal").modal("hide");
      $(".model_alert").removeClass(type);
    }, 2000);
  }

  var requestSong = "落月";
  var requestSinger = "江蕙"; //點播

  $(".requestModalRequest").click(function () {
    requestModal("成功點播", requestSong, requestSinger, "success");
  }); //插播

  $(".requestModalInterrupt").click(function () {
    requestModal("成功插播", requestSong, requestSinger, "success");
  }); //角色插播

  $(".requestModalLeadInterrupt").click(function () {
    requestModal("已有角色插播", requestSong, requestSinger, "warning");
  }); //刪除

  $(".requestModalDelete").click(function () {
    requestModal("成功刪除", requestSong, requestSinger, "success");
  }); //音量控制項

  var defaultVol = 0; //預設音量

  var maxVol = 5; //最大音量

  var minVol = -5; //最小音量

  var correction = 6; //校正值

  var micVolumeVol = defaultVol,
      toneVol = defaultVol,
      echoVol = defaultVol,
      volumeVol = defaultVol;

  function volumeController(id, val) {
    $("#".concat(id, "Plus")).click(function () {
      if (val >= defaultVol) {
        if (val < maxVol) {
          val++;
          $("#".concat(id, " .dot:nth-child(").concat(val + correction, ")")).addClass("active");
        } else {
          return;
        }
      } else {
        $("#".concat(id, " .dot:nth-child(").concat(val + correction, ")")).removeClass("active");
        val++;
      }
    });
    $("#".concat(id, "Minus")).click(function () {
      if (val > defaultVol) {
        $("#".concat(id, " .dot:nth-child(").concat(val + correction, ")")).removeClass("active");
        val--;
      } else {
        if (val > minVol) {
          val--;
          $("#".concat(id, " .dot:nth-child(").concat(val + correction, ")")).addClass("active");
        } else {
          return;
        }
      }
    });
  }

  volumeController("micVolume", micVolumeVol);
  volumeController("tone", toneVol);
  volumeController("echo", echoVol);
  volumeController("volume", volumeVol); //modal list 預選 index 1

  $("#categoryModal .modal_list_btn:first-child").addClass("selected");
  $("#backNavModal .modal_list_btn:first-child").addClass("selected");
  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    var targetItemId = e.target.id.split("-")[1];
    console.log(targetItemId);
    $("#categoryModal .modal_list_btn").removeClass("selected");
    $("#categoryModal #modal-list-".concat(targetItemId)).addClass("selected");
  });
  $("#categoryModal .modal_list_btn").click(function (e) {
    var targetItemId = e.target.id.split("-")[2];
    console.log(targetItemId);
    $("#pills-tab #pills-".concat(targetItemId, "-tab")).tab("show");
    $("#categoryModal").modal("hide");
  });
  $("#backNavModal .modal_list_btn").click(function (e) {
    var targetItemText = $(this).html();
    console.log(targetItemText);
    $(".main_title h5").html(targetItemText);
    $("#backNavModal").modal("hide");
  });
});
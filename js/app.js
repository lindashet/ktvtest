//app.js
$(document).ready(function () {
  //回上頁
  $("#backToPre").on("click", () => {
    history.back();
  });

  //語言切換動作
  //點擊外圍關閉語言視窗
  $(document).click(function () {
    if ($(".toast_lang_wrapper").hasClass("active")) {
      $(".toast_lang_wrapper").removeClass("active");
      $("#cover").hide();
    }
  });

  //阻止冒泡事件
  $(".toast_lang_wrapper").click(function () {
    event.stopPropagation();
  });

  //點擊語言按鈕
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
  });

  //語言視窗開關
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
  }

  //切換語言
  function switchLang(evt) {
    if (evt.hasClass("tw")) {
      $(".lang_item.tw").addClass("selected");
      $(".lang_item.en").removeClass("selected");
    } else if (evt.hasClass("en")) {
      $(".lang_item.en").addClass("selected");
      $(".lang_item.tw").removeClass("selected");
    }
    ToastLangToggle(false);
  }

  // 點播動作提示
  // 開啟 requestModal
  function requestModal(title, song, singer, type) {
    $(".model_alert").addClass(type);
    $(".requestModalTitle").text(title);
    $(".requestModalSong").text(song);
    $(".requestModalModalSinger").text(singer);

    $("#requestModal").modal("show");
    window.setTimeout(() => {
      $("#requestModal").modal("hide");
      $(".model_alert").removeClass(type);
    }, 2000);
  }

  let requestSong = "落月";
  let requestSinger = "江蕙";

  //langSetting == "tw"
  //點播
  $(".requestModalRequest").click(function () {
    requestModal("成功點播", requestSong, requestSinger, "success");
  });

  //插播
  $(".requestModalInterrupt").click(function () {
    requestModal("成功插播", requestSong, requestSinger, "success");
  });

  //角色插播
  $(".requestModalLeadInterrupt").click(function () {
    requestModal("已有角色插播", requestSong, requestSinger, "warning");
  });

  //刪除
  $(".requestModalDelete").click(function () {
    requestModal("成功刪除", requestSong, requestSinger, "success");
  });

  //Volume Controller
  //音量控制項
  const defaultVol = 6; //預設音量
  const maxVol = 11; //最大音量
  const minVol = 1; //最小音量

  //Middle音樂控制項
  const defaultMVol = 0; //預設音量
  const maxMVol = 5; //最大音量
  const minMVol = -5; //最小音量
  const correction = 6; //校正值

  let micVolumeVol = defaultVol,
    toneVol = defaultMVol,
    echoVol = defaultMVol,
    volumeVol = defaultVol;

  volumeController("micVolume", micVolumeVol);
  volumeController("volume", volumeVol);
  volumeMiddleController("tone", toneVol);
  volumeMiddleController("echo", echoVol);

  function volumeController(id, val) {
    $(`#${id}Plus`).click(function () {
      if (val < maxVol) {
        val++;
        $(`#${id} .dot:nth-child(${val})`).addClass("active");
      }
    });

    $(`#${id}Minus`).click(function () {
      if (val > minVol) {
        $(`#${id} .dot:nth-child(${val})`).removeClass("active");
        val--;
      }
    });
  }

  function volumeMiddleController(id, val) {
    $(`#${id}Plus`).click(function () {
      if (val >= defaultMVol) {
        if (val < maxMVol) {
          val++;
          $(`#${id} .dot:nth-child(${val + correction})`).addClass("active");
        } else {
          return;
        }
      } else {
        $(`#${id} .dot:nth-child(${val + correction})`).removeClass("active");
        val++;
      }
    });

    $(`#${id}Minus`).click(function () {
      if (val > defaultMVol) {
        $(`#${id} .dot:nth-child(${val + correction})`).removeClass("active");
        val--;
      } else {
        if (val > minMVol) {
          val--;
          $(`#${id} .dot:nth-child(${val + correction})`).addClass("active");
        } else {
          return;
        }
      }
    });
  }

  //藥丸分類視窗按鈕點擊動作
  $("#categoryModal .modal_list_btn").click(function (e) {
    let targetItemId = e.target.id.split("-")[2];

    $(`#pills-tab #pills-${targetItemId}-tab`).tab("show");
    $("#categoryModal").modal("hide");
  });
});

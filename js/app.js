//app.js
$(document).ready(function () {
  lazyload();

  //Toast Text 提示漸入
  function ShowToastText(text) {
    $(".toast_text_msg").text(text);
    $(".toast_text_msg").fadeIn();
    setTimeout(function () {
      $(".toast_text_msg").fadeOut();
    }, 800);
  }

  //回上頁
  $("#backToPre").on("click", () => {
    history.back();
  });

  //打開點餐車
  $("#goToCartBtn").click(function () {
    $("#cartModal").modal("show");
  });
  $("#cart_btn").click(function () {
    $("#cartModal").modal("show");
  });

  //點餐紀錄-展開詳細內容按鈕
  $(".show_meals_btn").click(function () {
    $(".order_record_item_wrapper.ellipsis").slideToggle(500, function () {
      if ($(".show_meals_btn").hasClass("expand")) {
        $(".show_meals_btn").removeClass("expand");
        $(".show_meals_btn span").text("SEE MORE");
      } else {
        $(".order_record_item_wrapper.ellipsis").removeClass("d-none");
        $(".show_meals_btn").addClass("expand");
        $(".show_meals_btn span").text("COLLAPSE");
      }
    });
  });
  //點擊AC主廚設計icon
  $(".ac.mark_icon").click(function (event) {
    $("#ACModal").modal("show");
    event.stopPropagation();
  });

  //送出餐點按鈕
  $("#sendOrderBtn").click(function () {
    $("#cartModal").modal("hide");
    ShowToastText("點餐成功");
  });

  //藥丸頁籤分頁操作
  //選中頁籤
  $('a[data-bs-toggle="tab"]').on("show.bs.tab", function (e) {
    let targetItemId = e.target.id.split("-")[0];
    if (targetItemId == "cartTab") {
      $(".cartTab_footer").show();
      $(".cartTab2_footer").hide();
    } else {
      $(".cartTab_footer").hide();
      $(".cartTab2_footer").show();
    }
  });

  //點餐快速加入按鈕
  $(".add_btn").click(function (event) {
    if ($(".go_to_cart_wrapper").hasClass("d-none")) {
      $(".go_to_cart_wrapper").removeClass("d-none");
    }

    ShowToastText("餐點新增成功");
    event.stopPropagation();
  });

  //點餐詳細頁加入按鈕
  $("#addMealBtn").click(function () {
    $("#orderDetailModal").modal("hide");
    if ($(".go_to_cart_wrapper").hasClass("d-none")) {
      $(".go_to_cart_wrapper").removeClass("d-none");
    }
    ShowToastText("餐點新增成功");
  });

  //點擊餐點 - 展開詳細頁
  $(".menu_item").click(function () {
    $("#orderDetailModal").modal("show");
  });

  //計數器 Counter
  var count = 1;
  $(".counter .minus_btn").click(function () {
    count--;
    $(".counter span").text(count);
  });
  $(".counter .plus_btn").click(function () {
    count++;
    $(".counter span").text(count);
  });

  //環控頁面 元素高度等比例設定
  screenHeightRatio();

  function screenHeightRatio() {
    let windowsVH = window.innerHeight / 100;
    document.documentElement.style.setProperty("--vh", windowsVH + "px");

    window.addEventListener("resize", function () {
      document.documentElement.style.setProperty("--vh", windowsVH + "px");
    });
  }

  //環控頁面 智慧燈光切換
  $("#evenoddBtn").click(function () {
    $(this).toggleClass("active");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 144) {
      /* 要滑動到選單的距離 */
      $(".menu_category_navbar").addClass("scrollspy"); /* 幫選單加上固定效果 */
      $("#navbar_menu").addClass("scrollspy"); /* 幫選單加上固定效果 */
      $(".scrollspy_menu").addClass("scrollspy"); /* 幫選單加上固定效果 */
    } else {
      $(".menu_category_navbar").removeClass(
        "scrollspy"
      ); /* 幫選單加上固定效果 */
      $("#navbar_menu").removeClass("scrollspy"); /* 幫選單加上固定效果 */
      $(".scrollspy_menu").removeClass("scrollspy"); /* 幫選單加上固定效果 */
    }

    if (
      ($(document).width() > 767 && $(this).scrollTop() > 140) ||
      ($(document).width() < 768 && $(this).scrollTop() > 200)
    ) {
      /* 要滑動到選單的距離 */
      $("#ReservationSearchTab").addClass("navFixed"); /* 幫選單加上固定效果 */
    } else {
      $("#ReservationSearchTab").removeClass("navFixed"); /* 移除選單固定效果 */
    }

    if (
      ($(document).width() > 767 && $(this).scrollTop() > 72) ||
      ($(document).width() < 768 && $(this).scrollTop() > 62)
    ) {
      /* 要滑動到選單的距離 */
      $(".reservation_detail_nav").addClass(
        "navFixed"
      ); /* 幫選單加上固定效果 */
      $(".reservation_detail_nav").addClass(
        "navFixed"
      ); /* 幫選單加上固定效果 */
    } else {
      $(".reservation_detail_nav").removeClass(
        "navFixed"
      ); /* 移除選單固定效果 */
    }
  });

  //語言切換動作
  //點擊外圍關閉語言視窗
  //點擊外圍關閉會員中心視窗
  $(document).click(function () {
    if ($(".toast_lang_wrapper").hasClass("active")) {
      $(".toast_lang_wrapper").removeClass("active");
      $("#cover").hide();
    }
    if ($(".toast_member_wrapper").hasClass("active")) {
      $(".toast_member_wrapper").removeClass("active");
      $("#cover").hide();
    }
  });

  //阻止冒泡事件
  $(".toast_lang_wrapper").click(function (event) {
    $(".toast_member_wrapper").removeClass("active"); //關閉
    event.stopPropagation();
  });
  $(".toast_member_wrapper").click(function (event) {
    $(".toast_lang_wrapper").removeClass("active"); //關閉
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

  //點擊會員中心按鈕
  $("#member_btn").click(function () {
    if ($(".toast_member_wrapper").hasClass("active")) {
      ToastMemberToggle(false);
    } else {
      ToastMemberToggle(true);
    }
  });

  $("#cover").click(function () {
    ToastLangToggle(false);
    ToastMemberToggle(false);
  });

  //會員中心視窗開關
  function ToastMemberToggle(isOpen) {
    $(".toast_member_wrapper").click(function () {
      if (isOpen) {
        $(".toast_member_wrapper").addClass("active");
        $("#cover").show();
      } else {
        $(".toast_member_wrapper").removeClass("active");
        $("#cover").hide();
      }
    });
  }

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

  // 修改密碼
  $("#resetPasswordBtn").click(function () {
    $(".resetPasswordModalText").text("會員密碼修改成功！");
    $("#resetPasswordModal").modal("show");
  });

  // 取消訂位
  $("#reservationCancelBtn").click(function () {
    messageModal("您的訂位已取消");
  });

  // 開啟 messageModal
  function messageModal(text) {
    $(".messageModalText").text(text);
    $("#messageModal").modal("show");
  }

  //messageModal 點擊 confirm 按鈕
  $("#messageModal #comfirmBtn").click(function () {
    $("#messageModal").modal("hide");
    window.location.href = "reservation_search.html";
  });

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

  //langSetting == "en"
  //點播
  $(".requestModalRequest").click(function () {
    requestModal("Queue", requestSong, requestSinger, "success");
  });

  //插播
  $(".requestModalInterrupt").click(function () {
    requestModal("Priority", requestSong, requestSinger, "success");
  });

  //角色插播
  $(".requestModalLeadInterrupt").click(function () {
    requestModal("Next On exits", requestSong, requestSinger, "warning");
  });

  //刪除
  $(".requestModalDelete").click(function () {
    requestModal("Delete", requestSong, requestSinger, "success");
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

  //bootstrap date picker
  $("#datepicker").datetimepicker({
    useCurrent: false,
    format: "YYYY-MM-DD",
    showTodayButton: false,
    ignoreReadonly: true,
    minDate: moment().format("YYYY-MM-DD"),
    icons: {
      next: "fa fa-chevron-right",
      previous: "fa fa-chevron-left",
      today: "todayText",
    },
  });

  $("#timepicker").datetimepicker({
    format: "HH:mm",
    stepping: 30,
    ignoreReadonly: true,

    icons: {
      up: "fa fa-chevron-up",
      down: "fa fa-chevron-down",
    },
  });
});

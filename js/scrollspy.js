//scrollspy.js
$(document).ready(function () {
  // 點餐 scrollspy tab 錨點偵測滾動
  $("body").scrollspy({ target: "#navbar_menu", offset: 120 });
  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy("refresh");
  });
  // 偵測 tab 選中跟隨滾動
  $(window).on("activate.bs.scrollspy", function (e) {
    var tabOffsetLeft = $("#navbar_menu a.active").offset().left;
    var tabScrollLeft = $("#navbar_menu a.active").parent().position().left;

    if (tabOffsetLeft < 0) {
      //超出螢幕左側
      $("#navbar_menu").animate(
        {
          scrollLeft: tabScrollLeft,
        },
        300,
        "swing"
      );
    } else if (
      tabOffsetLeft + $("#navbar_menu a.active").width() >
      window.innerWidth
    ) {
      // 超出螢幕右側
      $("#navbar_menu").animate(
        {
          scrollLeft: tabScrollLeft,
        },
        300,
        "swing"
      );
    }
  });

  // tab 點擊時卷軸滾動
  $("#navbar_menu a[href^='#']").on("click", function (event) {
    var target = $("#" + event.target.id);

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 120,
        },
        500,
        "swing",
        function () {
          $("#navbar_menu a").removeClass("active");
          target.addClass("active");
        }
      );
    }
  });
});

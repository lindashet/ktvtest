//scrollspy.js
$(document).ready(function () {
// 點餐 scrollspy tab 錨點偵測滾動
$("body").scrollspy({ target: "#navbar_menu", offset: 120 });


// 偵測 tab 選中跟隨滾動
$(window).on("activate.bs.scrollspy", function (e) {
  console.log(e);
  var activeTabDistance = $("a.active").offset().left;
  $("#navbar_menu").animate(
    {
      scrollLeft: activeTabDistance,
    },
    {
      duration: 300,
      easing: "swing",
    }
  );
});

// tab 點擊時卷軸滾動
$("#navbar_menu a").on("click", function (event) {
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 110,
      },
      {
        duration: 500,
        easing: "swing",
      },
      function () {}
    );
  }
});
})
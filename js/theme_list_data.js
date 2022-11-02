// theme_list_data.js
$(document).ready(function () {
  //langSetting == "en"
  const list = [
    { title: "DUET", img: "KTV-2-Themes-09" },
    { title: "KKBOX華語年中榜", img: "KTV-default" },
    { title: "TEENYBOPPER", img: "KTV-2-Themes-03_3" },
    { title: "LGBTQ+ PRIDE", img: "KTV-2-Themes-04_3" },
    { title: "GIRLS NIGHT OUT", img: "KTV-2-Themes-05_5" },
    { title: "FAMILY FIRST", img: "KTV-2-Themes-06_3" },
    { title: "HIS STORIES", img: "KTV-2-Themes-07_3" },
    { title: "HER SECRETS", img: "KTV-2-Themes-08_6" },
    { title: "TAIWAN HIP HOP", img: "KTV-2-Themes-11_5" },
    { title: "TAIWAN BANDS", img: "KTV-2-Themes-12_4" },
    { title: "TIKTOK MANIAC", img: "KTV-2-Themes-09_8" },
    { title: "SING-ALONGS", img: "KTV-2-Themes-10 _5" },
    { title: "PARTY TIME", img: "KTV-2-Themes-13_3" },
    { title: "BOTTOMS UP!", img: "KTV-2-Themes-14_5" },
    { title: "MEMES", img: "KTV-2-Themes-15_5" },
    { title: "RELEASE YOUR RAGE", img: "KTV-2-Themes-16_5" },
    { title: "BIRTHDAY BASH", img: "KTV-2-Themes-17_5" },
    { title: "TV & MOVIE THEME SONGS", img: "KTV-2-Themes-19_3" },
    { title: "GRADUATION", img: "KTV-2-Themes-18_5" },
    { title: "SING! CHINA HITS", img: "KTV-2-Themes-20_5" },
    { title: "BEST OF GOLDEN MUSIC AWARDS", img: "KTV-2-Themes-21_5" },
    { title: "LIVE", img: "KTV-2-Themes-22_5" },
    { title: "80'S CLASSICS", img: "KTV-3-Best of-04_5" },
    { title: "90'S CLASSICS", img: "KTV-3-Best of-05_5" },
    { title: "00'S CLASSICS", img: "KTV-3-Best of-06_5" },
    { title: "SANCTUARY OF SADNESS", img: "KTV-2-Themes-02_2" },
  ];

  var titleIndex = Number(getUrlQuery("title"));
  getTitle();

  function getTitle() {
    //被選中的導覽分類
    $(".back_navbar h6").text(list[titleIndex].title);
    $(`#backNavModal #modal-list-${titleIndex}`).addClass("selected");
  }

  //點擊導覽分類視窗按鈕
  $("#backNavModal .modal_list_btn").bind("click", function (e) {
    let targetItemText = $(this).text();
    let targetItemId = e.target.id.split("-")[2];

    $("#backNavModal .modal_list_btn").removeClass("selected");
    $(`#backNavModal #modal-list-${targetItemId}`).addClass("selected");
    $(".back_navbar h6").text(targetItemText);

    $("#backNavModal").modal("hide");
  });

  //藥丸分類視窗按鈕預選 index 1
  $("#categoryModal .modal_list_btn:first-child").addClass("selected");

  //藥丸頁籤分頁操作
  //選中頁籤
  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    let targetItemId = e.target.id.split("-")[1];
    $("#categoryModal .modal_list_btn").removeClass("selected");
    $(`#categoryModal #modal-list-${targetItemId}`).addClass("selected");
  });

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

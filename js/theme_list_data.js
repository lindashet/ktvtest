// theme_list_data.js
$(document).ready(function () {
  //langSetting == "en"
  const list = [
    { title: "DUET", img: "KTV-2-Themes-09" },
    { title: "SANCTUARY OF SADNESS", img: "KTV-2-Themes-02" },
    { title: "TEENYBOPPER", img: "KTV-2-Themes-sweet" },
    { title: "LGBTQ+ PRIDE", img: "KTV-2-Themes-04" },
    { title: "GIRLS NIGHT OUT", img: "KTV-2-Themes-05" },
    { title: "FAMILY FIRST", img: "KTV-default" },
    { title: "HIS STORIES", img: "KTV-2-Themes-08" },
    { title: "HER SECRETS", img: "KTV-2-Themes-08-2" },
    { title: "TIKTOK MANIAC", img: "KTV-2-Themes-09-2" },
    { title: "SING-ALONGS", img: "KTV-2-Themes-10-1" },
    { title: "TAIWAN HIP HOP", img: "KTV-2-Themes-11" },
    { title: "TAIWAN BANDS", img: "KTV-2-Themes-01" },
    { title: "PARTY TIME", img: "KTV-default" },
    { title: "BOTTOMS UP!", img: "KTV-2-Themes-14" },
    { title: "MEMES", img: "KTV-2-Themes-15" },
    { title: "RELEASE YOUR RAGE", img: "KTV-2-Themes-16" },
    { title: "BIRTHDAY BASH", img: "KTV-2-Themes-17" },
    { title: "GRADUATION", img: "KTV-2-Themes-18" },
    { title: "TV & MOVIE THEME SONGS", img: "KTV-2-Themes-12" },
    { title: "SING! CHINA HITS", img: "KTV-2-Themes-20" },
    { title: "BEST OF GOLDEN MUSIC AWARDS", img: "KTV-2-Themes-21" },
    { title: "LIVE", img: "KTV-2-Themes-22" },
    { title: "80'S CLASSICS", img: "KTV-3-Bestof-04" },
    { title: "90'S CLASSICS", img: "KTV-3-Bestof-05" },
    { title: "00'S CLASSICS", img: "KTV-3-Bestof-062" },
  ];

  var titleIndex = Number(getUrlQuery("title"));
  getTitle();

  function getTitle() {
    //被選中的導覽分類
    $(".back_navbar h5").text(list[titleIndex].title);
    $(`#backNavModal #modal-list-${titleIndex}`).addClass("selected");
  }

  //點擊導覽分類視窗按鈕
  $("#backNavModal .modal_list_btn").bind("click", function (e) {
    let targetItemText = $(this).text();
    let targetItemId = e.target.id.split("-")[2];

    $("#backNavModal .modal_list_btn").removeClass("selected");
    $(`#backNavModal #modal-list-${targetItemId}`).addClass("selected");
    $(".back_navbar h5").text(targetItemText);

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

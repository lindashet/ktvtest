// theme_list_data.js
$(document).ready(function () {
  //langSetting == "tw"
  const list = [
    { title: "男女合唱", img: "KTV-2-Themes-01_4" },
    { title: "KKBOX華語年中榜", img: "KTV-default" },
    { title: "甜蜜特調", img: "KTV-2-Themes-03_3" },
    { title: "彩虹國歌", img: "KTV-2-Themes-04_3" },
    { title: "姊妹淘聚會", img: "KTV-2-Themes-05_5" },
    { title: "親情至上", img: "KTV-2-Themes-06_3" },
    { title: "男人KTV", img: "KTV-2-Themes-07_3" },
    { title: "有故事的女人", img: "KTV-2-Themes-08_6" },
    { title: "台灣嘻哈饒舌", img: "KTV-2-Themes-11_5" },
    { title: "台灣搖滾樂團", img: "KTV-2-Themes-12_4" },
    { title: "抖音洗腦", img: "KTV-2-Themes-09_8" },
    { title: "音痴也可以", img: "KTV-2-Themes-10 _5" },
    { title: "嗨歌不累", img: "KTV-2-Themes-13_3" },
    { title: "喝酒乾了吧", img: "KTV-2-Themes-14_5" },
    { title: "時事迷因", img: "KTV-2-Themes-15_5" },
    { title: "憤怒燃燒", img: "KTV-2-Themes-16_5" },
    { title: "生日你最大", img: "KTV-2-Themes-17_5" },
    { title: "電視電影主題曲", img: "KTV-2-Themes-19_3" },
    { title: "畢業驪歌", img: "KTV-2-Themes-18_5" },
    { title: "中國好歌聲", img: "KTV-2-Themes-20_5" },
    { title: "金曲 GMA 精選", img: "KTV-2-Themes-21_5" },
    { title: "演唱會歌單", img: "KTV-2-Themes-22_5" },
    { title: "七年級生精選", img: "KTV-3-Best of-04_5" },
    { title: "八年級生精選", img: "KTV-3-Best of-05_5" },
    { title: "九年級生精選", img: "KTV-3-Best of-06_5" },
    { title: "悲傷釋放", img: "KTV-2-Themes-02_2" },
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

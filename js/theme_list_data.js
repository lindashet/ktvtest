// theme_list_data.js
$(document).ready(function () {
  //langSetting == "tw"
  const list = [
    { title: "男女合唱", img: "KTV-2-Themes-09" },
    { title: "悲傷釋放", img: "KTV-2-Themes-02" },
    { title: "甜蜜特調", img: "KTV-2-Themes-sweet" },
    { title: "彩虹國歌", img: "KTV-2-Themes-04" },
    { title: "姊妹淘聚會", img: "KTV-2-Themes-05" },
    { title: "親情至上", img: "KTV-default" },
    { title: "男人KTV", img: "KTV-2-Themes-08" },
    { title: "有故事的女人", img: "KTV-2-Themes-08-2" },
    { title: "抖音洗腦", img: "KTV-2-Themes-09-2" },
    { title: "音痴也可以", img: "KTV-2-Themes-10-1" },
    { title: "台灣嘻哈饒舌", img: "KTV-2-Themes-11" },
    { title: "台灣搖滾樂團", img: "KTV-2-Themes-01" },
    { title: "嗨歌不累", img: "KTV-default" },
    { title: "喝酒乾了吧", img: "KTV-2-Themes-14" },
    { title: "時事迷因", img: "KTV-2-Themes-15" },
    { title: "憤怒燃燒", img: "KTV-2-Themes-16" },
    { title: "生日你最大", img: "KTV-2-Themes-17" },
    { title: "畢業驪歌", img: "KTV-2-Themes-18" },
    { title: "電視電影主題曲", img: "KTV-2-Themes-12" },
    { title: "中國好歌聲", img: "KTV-2-Themes-20" },
    { title: "金曲 GMA 精選", img: "KTV-2-Themes-21" },
    { title: "演唱會歌單", img: "KTV-2-Themes-22" },
    { title: "七年級生精選", img: "KTV-3-Bestof-04" },
    { title: "八年級生精選", img: "KTV-3-Bestof-05" },
    { title: "九年級生精選", img: "KTV-3-Bestof-062" },
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

// song_list_data.js
$(document).ready(function () {
  //langSetting == "tw"
  const newKtvImgCards = [
    { title: "國語", img: "KTV-1-NewRelease-01" },
    { title: "台語", img: "KTV-1-NewRelease-02" },
    { title: "英語", img: "KTV-1-NewRelease-03" },
    { title: "粵語", img: "cantonese" },
    { title: "其他", img: "KTV-1-NewRelease-08" },
  ];
  const rankingKtvImgCards = [
    { title: "新歌", img: "new-ranking" },
    { title: "國語", img: "chinese-ranking" },
    { title: "台語", img: "taiwanese-ranking" },
    { title: "英語", img: "english-ranking" },
    { title: "粵語", img: "cantonese" },
    { title: "日語", img: "japanese-ranking" },
  ];

  const partyKtvImgCards = [
    { title: "TOMARROWLAND 2022", img: "KTV-4-Party-03" },
    { title: "ULTRA 2022", img: "KTV-4-Party-01" },
    { title: "EDC 2022", img: "KTV-4-Party-02" },
  ];
  const djKtvImgCards = [
    { title: "BUBBLE", img: "BUBBLE_theLOOP_1200x1200-2" },
    { title: "CYNDI", img: "CYNDI_theLOOP_1200x1200-2" },
    { title: "EYCK", img: "EYCK_theLOOP_1200x1200" },
    { title: "GIN", img: "GIN_theLOOP_1200x1200" },
    { title: "RARA", img: "RARA_theLOOP_1200x1200" },
    { title: "RAYRAY", img: "RAYRAY_theLOOP_1200x1200-2" },
    { title: "REASON", img: "REASON_theLOOP_1200x1200-2" },
    { title: "SHORTY", img: "SHORTY_theLOOP_1200x1200" },
    { title: "T-TIME", img: "T-TIME_theLOOP_1200x1200" },
    { title: "USAL", img: "USAL_theLOOP_1200x1200" },
    { title: "VONIK & BELL", img: "VONIK_BELL_theLOOP_1200x1200" },
    { title: "VONIK", img: "VONIK_theLOOP_1200x1200" },
    { title: "WADE", img: "WADE_theLOOP_1200x1200" },
    { title: "ZEINT", img: "ZEINT_theLOOP_1200x1200" },
  ];

  var list = [];
  var cate = "";
  var cateIndex = Number(getUrlQuery("cate"));
  var titleIndex = Number(getUrlQuery("title"));
  //取得分類標題及父分類
  getList();

  function getList() {
    $("#backNavModal .modal-body").html("");

    //langSetting == "tw"
    switch (cateIndex) {
      case 0:
        cate = "新歌快報";
        list = newKtvImgCards;
        break;
      case 1:
        cate = "排行榜";
        list = rankingKtvImgCards;
        break;
      case 3:
        cate = "一鍵派對";
        list = partyKtvImgCards;
        break;
      case 4:
        cate = "theLOOP Live 精選";
        list = djKtvImgCards;
        break;
      default:
        break;
    }

    $(".back_navbar span").text(cate);

    for (i = 0; i < list.length; i++) {
      $("#backNavModal .modal-body").append(
        `<button class="modal_list_btn stroke_btn mt_10" id="modal-list-${i}"> ${list[i].title} </button>`
      );
      if (titleIndex == i) {
        $(".back_navbar h5").text(list[i].title);
        $(`#backNavModal #modal-list-${i}`).addClass("selected");
      }
    }
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

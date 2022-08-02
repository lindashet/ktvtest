$(document).ready(function () {
  var newKtvImgCards = [{
    title: "國語",
    img: "KTV-1-NewRelease-01"
  }, {
    title: "台語",
    img: "KTV-1-NewRelease-02"
  }, {
    title: "英語",
    img: "KTV-1-NewRelease-03"
  }, {
    title: "粵語",
    img: "cantonese"
  }, {
    title: "其他",
    img: "KTV-1-NewRelease-08"
  }];
  var rankingKtvImgCards = [{
    title: "新歌",
    img: "new-ranking"
  }, {
    title: "國語",
    img: "chinese-ranking"
  }, {
    title: "台語",
    img: "taiwanese-ranking"
  }, {
    title: "英語",
    img: "english-ranking"
  }, {
    title: "粵語",
    img: "cantonese"
  }, {
    title: "日語",
    img: "japanese-ranking"
  }, {
    title: "韓語",
    img: "korean-ranking"
  }];
  var partyKtvImgCards = [{
    title: "ULTRA",
    img: "KTV-4-Party-01"
  }, {
    title: "EDC",
    img: "KTV-4-Party-02"
  }, {
    title: "Tomorrowland",
    img: "KTV-4-Party-03"
  }];
  var djKtvImgCards = [{
    title: "Bubble",
    img: "BUBBLE_theLOOP_1200x1200"
  }, {
    title: "Cyndi",
    img: "CINDI_theLOOP_1200x1200"
  }, {
    title: "EYCK",
    img: "EYCK_theLOOP_1200x1200"
  }, {
    title: "Gin",
    img: "GIN_theLOOP_1200x1200"
  }, {
    title: "RaRa",
    img: "RARA_theLOOP_1200x1200"
  }, {
    title: "RayRay",
    img: "RAYRAY_theLOOP_1200x1200-2"
  }, {
    title: "Reason",
    img: "REASON_theLOOP_1200x1200-2"
  }, {
    title: "Shorty",
    img: "SHORTY_theLOOP_1200x1200"
  }, {
    title: "T-TIME",
    img: "T-TIME_theLOOP_1200x1200"
  }, {
    title: "Usal",
    img: "USAL_theLOOP_1200x1200"
  }, {
    title: "Vonik and MC Bell",
    img: "VONIK_BELL_theLOOP_1200x1200"
  }, {
    title: "Vonik",
    img: "VONIK_theLOOP_1200x1200"
  }, {
    title: "MC Bell",
    img: "BELL_theLOOP_1200x1200"
  }, {
    title: "Wade",
    img: "WADE_theLOOP_1200x1200"
  }, {
    title: "Zenit",
    img: "ZEINT_theLOOP_1200x1200"
  }];
  var list = [];
  var cate = "";
  var cateIndex = Number(getUrlQuery("cate"));
  var titleIndex = Number(getUrlQuery("title")); //取得分類標題及父分類

  getList();

  function getList() {
    $("#backNavModal .modal-body").html("");

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
        cate = "電音 PARTY 排行";
        list = partyKtvImgCards;
        break;

      case 4:
        cate = "THELOOP DJ 精選";
        list = djKtvImgCards;
        break;

      default:
        break;
    }

    $(".back_navbar span").text(cate);

    for (i = 0; i < list.length; i++) {
      $("#backNavModal .modal-body").append("<button class=\"modal_list_btn stroke_btn mt_10\" id=\"modal-list-".concat(i, "\"> ").concat(list[i].title, " </button>"));

      if (titleIndex == i) {
        $(".back_navbar h5").text(list[i].title);
        $("#backNavModal #modal-list-".concat(i)).addClass("selected");
      }
    }
  } //點擊導覽分類視窗按鈕


  $("#backNavModal .modal_list_btn").bind("click", function (e) {
    var targetItemText = $(this).text();
    var targetItemId = e.target.id.split("-")[2];
    $("#backNavModal .modal_list_btn").removeClass("selected");
    $("#backNavModal #modal-list-".concat(targetItemId)).addClass("selected");
    $(".back_navbar h5").text(targetItemText);
    $("#backNavModal").modal("hide");
  }); //藥丸頁籤分頁操作
  //選中頁籤

  $('button[data-bs-toggle="pill"]').on("show.bs.tab", function (e) {
    var targetItemId = e.target.id.split("-")[1];
    $("#categoryModal .modal_list_btn").removeClass("selected");
    $("#categoryModal #modal-list-".concat(targetItemId)).addClass("selected");
  }); //網址提取參數

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
  } //網址提取參數


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
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
  var themeKtvImgCards = [{
    title: "男女合唱",
    img: "KTV-2-Themes-09"
  }, {
    title: "悲傷釋放",
    img: "KTV-2-Themes-02"
  }, {
    title: "甜蜜特調",
    img: "KTV-2-Themes-sweet"
  }, {
    title: "彩虹國歌",
    img: "KTV-2-Themes-04"
  }, {
    title: "姊妹淘聚會",
    img: "KTV-2-Themes-05"
  }, {
    title: "親情至上",
    img: "KTV-default"
  }, {
    title: "男人KTV",
    img: "KTV-2-Themes-08"
  }, {
    title: "有故事的女人",
    img: "KTV-2-Themes-08-2"
  }, {
    title: "抖音洗腦",
    img: "KTV-2-Themes-09-2"
  }, {
    title: "音痴也可以",
    img: "KTV-2-Themes-10-1"
  }, {
    title: "台灣嘻哈饒舌",
    img: "KTV-2-Themes-11"
  }, {
    title: "台灣搖滾樂團",
    img: "KTV-2-Themes-01"
  }, {
    title: "嗨歌不累",
    img: "KTV-default"
  }, {
    title: "喝酒乾了吧",
    img: "KTV-2-Themes-14"
  }, {
    title: "時事迷因",
    img: "KTV-2-Themes-15"
  }, {
    title: "憤怒燃燒",
    img: "KTV-2-Themes-16"
  }, {
    title: "生日你最大",
    img: "KTV-2-Themes-17"
  }, {
    title: "畢業驪歌",
    img: "KTV-2-Themes-18"
  }, {
    title: "電視電影主題曲",
    img: "KTV-2-Themes-12"
  }, {
    title: "中國好歌聲",
    img: "KTV-2-Themes-20"
  }, {
    title: "金曲 GMA 精選",
    img: "KTV-2-Themes-21"
  }, {
    title: "演唱會歌單",
    img: "KTV-2-Themes-22"
  }, {
    title: "七年級生精選",
    img: "KTV-3-Bestof-04"
  }, {
    title: "八年級生精選",
    img: "KTV-3-Bestof-05"
  }, {
    title: "九年級生精選",
    img: "KTV-3-Bestof-062"
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
  var singerKtvImgCards = [{
    title: "女歌星",
    id: "female",
    img: "KTV-default"
  }, {
    title: "男歌星",
    id: "male",
    img: "KTV-default"
  }, {
    title: "團體",
    id: "group",
    img: "KTV-default"
  }];
  var searchKtvImgCards = [{
    title: "注音",
    img: "KTV-default"
  }, {
    title: "字部",
    img: "KTV-default"
  }, {
    title: "英文",
    img: "KTV-default"
  }, {
    title: "語種",
    img: "KTV-default"
  }];
  var cateIndex = Number(getUrlQuery("cate"));
  var list = [];
  var cate = "";
  var titleIndex = Number(getUrlQuery("title"));
  $("#backNavModal .modal-body").html("");
  getList(cateIndex);

  function getList(index) {
    switch (index) {
      case 0:
        cate = "新歌快報";
        list = newKtvImgCards;
        break;

      case 1:
        cate = "排行榜";
        list = rankingKtvImgCards;
        break;

      case 2:
        cate = "主題點歌";
        list = themeKtvImgCards;
        break;

      case 3:
        cate = "電音 PARTY 排行";
        list = partyKtvImgCards;
        break;

      case 4:
        cate = "THELOOP DJ 精選";
        list = djKtvImgCards;
        break;

      case 5:
        cate = "歌星點歌";
        list = singerKtvImgCards;
        break;

      case 6:
        cate = "歌曲查詢";
        list = searchKtvImgCards;
        break;

      default:
        break;
    }

    $(".back_navbar span").text(cate);

    for (i = 0; i < list.length; i++) {
      if (titleIndex == i) {
        $("#backNavModal .modal-body").append("<button class=\"modal_list_btn stroke_btn selected mt_10\" id=\"modal-list-".concat(i, "\"> ").concat(list[i].title, " </button>"));
        $(".back_navbar h5").text(list[i].title);
      } else {
        $("#backNavModal .modal-body").append("<button class=\"modal_list_btn stroke_btn mt_10\" id=\"modal-list-".concat(i, "\"> ").concat(list[i].title, " </button>"));
      }
    }
  }

  $("#backNavModal .modal_list_btn").bind("click", function (e) {
    var targetItemText = $(this).text();
    console.log(targetItemText);
    $(".back_navbar h5").text(targetItemText);
    $("#backNavModal").modal("hide");
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
  }
});
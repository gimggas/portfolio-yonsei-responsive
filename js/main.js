$(function () {
  let tab = $(".notice_board01 li");
  let sheet = $(".notice_board1>div ");

  tab.click(function () {
    let target = $(this);
    let i = target.index();

    tab.removeClass("on");
    tab.eq(i).addClass("on");

    sheet.removeClass("on_sheet");
    sheet.eq(i).addClass("on_sheet");
  });
  //////////////////////////////////////////////
  //로그인 버튼
  $(".search").click(function (e) {
    e.preventDefault();

    if ($(".searchbox").css("display") == "none") {
      $(".searchbox").fadeIn();
    } else {
      $(".searchbox").fadeOut();
    }
  });

  //닫힘버튼
  $(".closeBtn").click(function (e) {
    $(".searchbox").fadeOut();
  });
  //////////////////////////////////////////////////////

  $(".next").click(function (e) {
    e.preventDefault();

    if ($(".schedule03").css("display") == "none") {
      $(".schedule03").show();
    } else {
      $(".schedule02").hide();
    }
  });
  $(".prev").click(function (e) {
    e.preventDefault();

    if ($(".schedule02").css("display") == "none") {
      $(".schedule02").show();
      $(".schedule03").hide();
    } else {
      $(".schedule03").hide();
    }
  });
  ///////////////////////////////////////////////////////

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }

    if ($(this).scrollTop() >= 200) {
      $(".top").fadeIn("fast");
    } else {
      $(".top").fadeOut("fast");
    }
  }); //window_scroll_event

  $(".top_btn ,.top_btn01").click(function (e) {
    e.preventDefault();

    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      1000
    );

    $(window).scrollTo({ top: 0, left: 0 }, 500);
    $(window).scrollTo(this.hash || 0, 10000);
  }); // topbtn_click_event
  /////////////////////////////////////////////////////////
  $(document).ready(function () {
    $(".menu .xi-bars").on("click", function () {
      $(".menubox").show();
      $(".menubox").show().animate({
        right: 0,
      });
    });
    $(".menubox .xi-close").on("click", function () {
      $(".menubox").animate(
        {
          right: "-" + 50 + "%",
        },
        function () {
          $(".menubox").hide();
        }
      );
    });
  });
  //jQuery_function

  ///////////////////////////////////////////////////////////////
  $(function () {
    let btn = $(".quick_menu>div");
    let section = $(".contents section");

    $(".nav").css("top", $(window).height() / 2 - $(".nav").height() / 2);
    // 800/2 - 200/2

    $(window).scroll(function () {
      let point =
        $(this).scrollTop() + $(this).height() / 2 - $(".nav").height() / 2;
      $(".nav").stop().animate({ top: point }, 500);

      let sectionPoint = $(window).scrollTop();
      section.each(function () {
        let target = $(this);
        let i = target.index();

        if (target.offset().top <= sectionPoint) {
          btn.remove("on");
          btn.eq(i).addClass("on");
        }
      }); //each_function
    }); //window_scroll_event

    btn.click(function () {
      let target = $(this);
      let i = target.index();

      let targetSection = section.eq(i);
      let point = targetSection.offset().top;

      $("html, body").stop().animate({ scrollTop: point }, 1000);
    }); // .nav li_click event
  }); //jQuery_function
  ///////////////////////////////////////////////

  $("#bgndVideo").YTPlayer({
    videoURL: "8W2eENLTizw",
    containment: ".movieBg",
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
  });

  $(".movieBg i:first-child").on("click", function () {
    $("#bgndVideo").YTPPause();
  });

  $(".movieBg i:last-child").on("click", function () {
    $("#bgndVideo").YTPPlay();
  });
  //////////////////////////////////////////////////////
  $(function () {
    const lnbLi = $(".gnb_nav>li");

    const ul = $(".gnb_nav>li>ul");

    const headerMin = $(".innerHeader").height();

    const headerMax = ul.innerHeight();

    let state = false;

    lnbLi.mouseenter(function () {
      if (!state) {
        $(".innerHeader")
          .stop()
          .animate(
            {
              height: headerMax,
            },
            150,

            function () {
              ul.stop().fadeIn(150);
            }
          );

        state = true;
      }

      $(this).find("ul").addClass("on");
    }); //mouseenter_event

    lnbLi.mouseleave(function () {
      $(this).find("ul").removeClass("on");
    }); //mouseleave_event

    $(".header").mouseleave(function () {
      ul.stop().fadeOut(150, function () {
        $(".innerHeader").stop().animate(
          {
            height: headerMin,
          },
          150
        );
      });

      state = false;
    }); //header_mouseleave

    $(".gnb1 li a")
      .focus(function () {
        $(".innerHeader").stop().animate(
          {
            height: headerMax,
          },
          150
        );

        ul.stop().fadeIn(150);
      })
      .blur(function () {
        $(".innerHeader").stop().animate(
          {
            height: headerMin,
          },
          150
        );

        ul.stop().fadeOut(150);
      }); //focus_event
  });
});

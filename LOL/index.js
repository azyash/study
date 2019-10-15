$(function () {
  $('.header_nav_a').hover(function () {
    // over
    timer = setTimeout(function () {
      $('.head-nav-sub').addClass("show")
    }, 400);
  }, function () {
    // out
    clearTimeout(timer);
    $('.head-nav-sub').removeClass("show")
  }
  );

  $('.icon-phone').hover(function () {
    // over
    $('.icon-qp').addClass("show")
  }, function () {
    // out
    $('.icon-qp').removeClass("show")
  }
  );

  $('.header_nav .header_left ul li:nth-child(3)').hover(function () {
    // over
    $('.header_left_left').addClass("show2")
  }, function () {
    // out
    $('.header_left_left').removeClass("show2")
  }
  );

  // 头部大图动画
  $(window).scroll(function (event) {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 0) {
      $('.header_img img:nth-child(2)').removeClass('big')
      $('.header_img').css('height', '360px')
      $('.ckxq').css('bottom', '32px')
    }
  });
  // 轮播图
  let x = 1;
  function lb () {
    if (x < 5) {
      x = x + 1
    } else { x = 1 }
    $(".promo ul:nth-child(2) li").removeClass('pitchOn')
    $('.promo ul:nth-child(1)').css("transform", "translateX(-" + ((x - 1) * 820) + "px)")
    $(".promo ul:nth-child(2) li:nth-child(" + x + ")").addClass('pitchOn')
  }
  timer = setInterval(lb, 3000)
  $(".promo").hover(function () {
    // over
    timer = clearInterval(timer);
  }, function () {
    // out
    timer = setInterval(lb, 3000)
  }
  );
  $(".promo ul:nth-child(2)").on('mouseover', 'li', function () {
    x = $(this).index() + 1
    $(".promo ul:nth-child(2) li").removeClass('pitchOn')
    $('.promo ul:nth-child(1)').css("transform", "translateX(-" + ((x - 1) * 820) + "px)")
    $(".promo ul:nth-child(2) li:nth-child(" + x + ")").addClass('pitchOn')
  });
  //封装头部切换函数

  function tbqh (object) {
    $(object).on('mouseover', 'li', function () {
      let a = $(this).index() + 1
      let b = $(object + ' ul').children().length + 1;
      if ($(object + ' ul').find('a').length != 0) {
        b -= 1
      }
      if (a < b) {
        $(object + ' li').removeClass('fontsc')
        $(object + ' li:nth-child(' + a + ')').addClass('fontsc')
        setTimeout(function () {
          $(object + ' li').removeClass('fontsc2')
          $(object + ' li:nth-child(' + a + ')').addClass('fontsc2')
        }, 1)
      }
    })
  }
  //调用头部切换函数
  tbqh('.news_top')
  tbqh('.activity_column1_one_top')
  tbqh('.tournament_top')
  tbqh('.videoCenter_right_top')
  tbqh('.videoCenter_left_top')
  tbqh('.tournament_columm2_top')
  //封装视频特效函数
  function sptx (object) {
    let video = object + ' video'
    $(object).hover(function () {
      // over
      $(video).trigger('play');
      setTimeout(function () {
        $(object).addClass('videodh');
      })
    }, function () {
      // out
      $(object).removeClass('videodh');
      setTimeout(function () {
        $(video).trigger('pause');
      }, 200)
    }
    );
  }
  //调用视频特效函数
  sptx('.xyx_video')
  sptx('.ps_video')
  //英雄资料头部切换
  let acSpan = $(".herodata_top ul li")
  console.log(acSpan)
  acSpan.on('mouseover', 'span', function () {
    $(this).addClass('fontsc')
    $(this).find('i').removeClass('icon-dd').addClass('icon-acdd')
  })
  acSpan.on('mouseout', 'span', function () {
    $(this).removeClass('fontsc')
    $(this).find('i').removeClass('icon-acdd').addClass('icon-dd')
  })
  acSpan.on('click', 'span', function () {
    acSpan.find('span').removeClass('fontscc')
    acSpan.find('i').removeClass('icon-acddd')
    $(this).addClass('fontscc')
    $(this).find('i').addClass('icon-acddd')
  })
  //英雄资料swiper
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    freeMode: true,
    autoHeight: true,
    hide: true,
    slidesPerView: 'auto',
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      hide: true,
    },
  });
  swiper.scrollbar.$el.css('width', '10px');
  swiper.scrollbar.$dragEl.css('background', '#ABC0C3');
  //排行榜swiper
  var listSwiper = new Swiper('.list-swiper-container', {
    direction: 'vertical',
    freeMode: true,
    autoHeight: true,
    hide: true,
    slidesPerView: 'auto',
    grabCursor: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
  listSwiper.scrollbar.$dragEl.css('background', '#ABC0C3');
})

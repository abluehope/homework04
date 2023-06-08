$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 0 ? $(".header").addClass("on") : $(".header").removeClass("on");
  });
  $(".main_slide").on("init afterChange", function (e, s, c) {
    const current = $(".main_slide .slick-current");
    current.addClass("on").siblings().removeClass("on");
  });
  $(".main_slide").slick({
    pauseOnHover: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 50 ? $(".to_top").addClass("on") : $(".to_top").removeClass("on");
  });
});

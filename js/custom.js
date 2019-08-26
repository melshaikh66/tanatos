$(function() {
  "use strict";
  // trigger nice scroll
  $("html").niceScroll();

  // adjust header height
  $(".header").height($(window).height());

  // scroll to features

  $(".header .arrow i").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".feat").offset().top
      },
      1000
    );
  });

  // show hidden items

  $(".show-more").on("click", function() {
    $(".our-work .hidden").fadeIn(1000);
  });
});

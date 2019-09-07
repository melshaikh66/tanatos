$(function() {
  "use strict";
  // trigger nice scroll
  $("html").niceScroll({
    cursorcolor: "#f7600e",
    cursorwidth: "7px",
    cursorborder: "1px solid #f7600e"
  });

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
  $(".hire").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".our-team").offset().top
      },
      1000
    );
  });

  // show hidden items

  $(".show-more").on("click", function() {
    $(".our-work .hidden").fadeIn(1000);
  });

  // check testimonials
  var rightArrow = $(".testim .fa-chevron-right"),
    leftArrow = $(".testim .fa-chevron-left");
  function checkClients() {
    $(".client:first").hasClass("active")
      ? leftArrow.fadeOut()
      : leftArrow.fadeIn();
    $(".client:last").hasClass("active")
      ? rightArrow.fadeOut()
      : rightArrow.fadeIn();
  }
  checkClients();
  $(".testim i").click(function() {
    if ($(this).hasClass("fa-chevron-right")) {
      $(".testim .active").fadeOut(100, function() {
        $(this)
          .removeClass("active")
          .next(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    } else {
      $(".testim .active").fadeOut(100, function() {
        $(this)
          .removeClass("active")
          .prev(".client")
          .addClass("active")
          .fadeIn();
        checkClients();
      });
    }
  });
});

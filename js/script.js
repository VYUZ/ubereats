// btn load-more
$(function () {
  $(".load-more").on("click", function () {
    const btn = $(this);
    const loader = btn.find("span");
    $.ajax({
      url: "/data.html",
      type: "GET",
      beforeSend: function () {
        btn.attr("disabled", true);
        loader.addClass("d-inline-block");
      },
      success: function (responce) {
        setTimeout(function () {
          loader.removeClass("d-inline-block");
          btn.attr("disabled", false);
          $(".after-posts").before(responce);
        }, 1000);
      },
      error: function () {
        alert("Error!");
        loader.removeClass("d-inline-block");
        btn.attr("disabled", false);
      },
    });
  });
});

//btn-up
jQuery(document).ready(function () {
  var btn = $("#btn-up");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({scrollTop: 0}, "300");
  });
});

// //dropdown language
// $(document).ready(function () {
//   $("a").on("click", function (e) {
//     e.preventDefault();
//   });
//   $("#dd-foo-language li").hover(
//     function () {
//       clearTimeout($.data(this, "timer"));
//       $("ul", this).stop(true, true).slideDown(200);
//     },
//     function () {
//       $.data(
//         this,
//         "timer",
//         setTimeout(
//           $.proxy(function () {
//             $("ul", this).stop(true, true).slideUp(200);
//           }, this),
//           100
//         )
//       );
//     }
//   );
// });

//rest.html navigation active menu link
$(".nav").on("click", "a", function () {
  $(".nav a").removeClass("aactive");
  $(this).addClass("aactive");
  event.preventDefault();

  var href = $(this).attr("href");
  if (href === undefined || href === "") {
    alert("!");
    e.preventDefault();
  } else {
    $(".main-content").removeClass("main-content-active");
    $(href).addClass("main-content-active");
  }
});

//media vert menu (max-width: 576px)
$(document).ready(function () {
  $(".nav-menu").click(function (event) {
    $(".nav-menu,.nav").addClass("active");
    $("body").addClass("lock");
  });
  $(".nav>li").click(function (event) {
    $(".nav-menu,.nav").removeClass("active");
    $("body").removeClass("lock");
  });
});

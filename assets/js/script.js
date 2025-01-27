// Javascript by Sander Sats
var keepAlive = $(".sblogos").data("keep-alive");
var interval = $(".sblogos").data("interval");
var random = $(".sblogos").data("random");

$(function() {
  // creates interval according to parameters
  function fadeCaller() {
    if (random == "true" || random == 1) {
        setInterval(fadeImage, interval);
    } else {
      setInterval(fadeImage, keepAlive);
    }
  }

  function fadeImage() {
    // save sponsor logo boxes for further use
    var $hiddenBoxes = $('.sblogos .sblogos__col:not(:visible)');
    var $visibleBoxes = $('.sblogos .sblogos__col:visible');
    var $visibleBox;
    // if too few boxes, use random
    if ((random == "true" || random == 1) || ($hiddenBoxes.length < $visibleBoxes.length)) {
      $visibleBox = $visibleBoxes.not('.active, .sb-animation-pause').random();
    } else {
      $visibleBox = $visibleBoxes.not('.active, .sb-animation-pause').first();
      // don't fire function when no free boxes
      if ($visibleBox.length) {
        setTimeout(fadeImage, interval);
      }
    }
        var $hiddenBox = $hiddenBoxes.not('.active, .sb-animation-pause').random();
    if (!$hiddenBoxes.length) return;

    var $hiddenContent = $hiddenBox.find('a');
    if (!$hiddenContent.length) return;

    $hiddenBox.addClass('active');
    $visibleBox.addClass('active');
    var $visibleContent = $visibleBox.find('a').addClass('prev');
    $visibleBox.append($hiddenContent.addClass('next'));

    setTimeout(function() {
      $visibleBox.find('a').addClass('transition');
    }, 100);

    $visibleBox.data('timeoutId', setTimeout(function() {
      $visibleBox.find('a').removeClass('transition');
      $hiddenBox.append($visibleContent.removeClass('prev'));
      $visibleBox.removeClass('active');
      $hiddenBox.removeClass('active');
      $hiddenContent.removeClass('next');
    }, keepAlive));
  }

  $('body').on('mouseenter', '.sblogos__col', function() {
    $(this).addClass('sb-animation-pause');
  });
  $('body').on('mouseleave', '.sblogos__col', function() {
    $(this).removeClass('sb-animation-pause');
  });
  fadeCaller();
});

$.fn.random = function(){
  var ret = $();
  if(this.length > 0) {
    ret = ret.add(this[Math.floor((Math.random() * this.length))]);
  }
  return ret;
};
 
 (function($) {
     "use strict";  //Start of use strict

     $(window).on("load", function() {
         bigSlider();
         bigPageLoader();
         bigHomePagePopup();
         full_height();
         bigCarousel();
         bigStickyHeader();
         bigAccordion();
         bigToggle();
         bigProgresbar();
         bigLocalScroll();
         bigLightbox();
         bigTextRotator();
         fullscreen_nav();
         megamenu();
     });

     var pageSection = $("div, section");
     pageSection.each(function(indx) {

         if ($(this).attr("data-bg")) {
             $(this).css("background-image", "url(" + $(this).data("bg") + ")");
         }
     });
    
  //Speaker carousel
 if($('.speaker-carousel').length){
     $('.speaker-carousel').owlCarousel({
         loop: true,
         margin: 30,
         dots: false,
         nav: true,
         autoplayHoverPause: true,
         autoplay: true,
         autoplayTimeout: 4000,
         smartSpeed: 700,
         navText: [
           '<i class="fas fa-long-arrow-alt-left"></i>',
           '<i class="fas fa-long-arrow-alt-right"></i>'
         ],
         responsive: {
             0: {
                 items: 1,
                 center: false
             },
             480:{
                 items:1,
                 center: false
             },
             600: {
                 items: 2,
                 center: false
             },
             768: {
                 items: 2
             },
             992: {
                 items: 3
             },
             1200: {
                 items: 3
             }
         }
     })
 }

 })(jQuery);

 function bigAccordion() {
     (function($) {
         "use strict";
         var allPanels = $(".accordion > dd").hide();
         allPanels.first().slideDown("easeOutExpo");
         $(".accordion > dt > a").first().addClass("active");

         $(".accordion > dt > a").on("click", function() {

             var current = $(this).parent().next("dd");
             $(".accordion > dt > a").removeClass("active");
             $(this).addClass("active");
             allPanels.not(current).slideUp("easeInExpo");
             $(this).parent().next().slideDown("easeOutExpo");

             return false;

         });
     })(jQuery);
 }

 // Toggle

 function bigToggle() {
     (function($) {
         "use strict";

         var allToggles = $(".toggle > dd").hide();

         $(".toggle > dt > a").on("click", function() {

             if ($(this).hasClass("active")) {

                 $(this).parent().next().slideUp("easeOutExpo");
                 $(this).removeClass("active");

             } else {
                 var current = $(this).parent().next("dd");
                 $(this).addClass("active");
                 $(this).parent().next().slideDown("easeOutExpo");
             }

             return false;
         });

         $('.navbar-nav').slicknav();

     })(jQuery);
 }

 function bigProgresbar() {
     (function($) {
         "use strict";

         // Progress bars
         var progressBar = $(".progress-bar");
         progressBar.each(function(indx) {
             $(this).css("width", $(this).attr("aria-valuenow") + "%");
         });

         $('.list-group-item').on('click', function(e) {
             var previous = $(this).closest(".list-group").children(".active");
             previous.removeClass('active'); // previous list-item
             $(e.target).addClass('active');  //activated list-item
         });

     })(jQuery);
 }

 function bigLocalScroll() {
     (function($) {
         "use strict";

         $(".local-scroll").localScroll({
             target: "body",
             duration: 1500,
             offset: 0,
             easing: "easeInOutExpo"
         });

     })(jQuery);
 }

 function bigLightbox() {
     (function($) {
         "use strict";

         $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
             disableOn: 700,
             type: 'iframe',
             mainClass: 'mfp-fade',
             removalDelay: 160,
             preloader: false,

             fixedContentPos: false
         });

     })(jQuery);
 }

 function bigTextRotator() {
     (function($) {
         "use strict";
         $(".text-rotating-flip").Morphext({
             animation: "flipInY",
             speed: 1500
         });
         $(".text-rotating-fade").Morphext({
             animation: "fadeInDown",
             speed: 2500
         });
         $(".text-rotating-bounce").Morphext({
             animation: "bounceInDown",
             speed: 3000
         });
         $(".text-rotating-rotate").Morphext({
             animation: "rotateInDownLeft",
             speed: 4000
         });
         $(".text-rotating-zoom").Morphext({
             animation: "zoomInDown",
             speed: 3500
         });

     })(jQuery);
 }

 //Owl Carousel

 function bigCarousel() {
     (function($) {
         "use strict";
         $(".owl-carousel").owlCarousel({

             loop: true,
             margin: 10,
             nav: true,
             responsiveClass: true,
             dots: true,
             responsive: {
                 0: {
                     items: 1,
                     nav: true
                 },
                 700: {
                     items: 1,
                     nav: false
                 },
                 1170: {
                     items: 1,
                     nav: true,
                     loop: true
                 }
             }

         });
         $('.brands').owlCarousel({
             loop: true,
             margin: 10,
             nav: true,
             responsive: {
                 0: {
                     items: 2
                 },
                 700: {
                     items: 4
                 },
                 1170: {
                     items: 6
                 }
             }
         })

       //   Works Item Lightbox  
         $(".portfolio-img").magnificPopup({
             gallery: {
                 enabled: true
             }
         });
         $(".award-img").magnificPopup({
             gallery: {
                 enabled: true
             }
         });

     })(jQuery);
 }

 //Home Page Slider

 function bigSlider() {
     (function($) {
         "use strict";
         $('.flexslider').flexslider({
             animation: "fade",
             controlNav: false
         });
     })(jQuery);
 }

 //Page Loader

 function bigPageLoader() {
     (function($) {
         "use strict";
         $(".page-loader").fadeOut("slow");
     })(jQuery);
 }

 //Sticky Header

 function bigStickyHeader() {
     (function($) {
         "use strict";
         $(".header").sticky({
             topSpacing: 0
         });
     })(jQuery);
 }

 //Home Page Popup

 function bigHomePagePopup() {
     (function($) {
         "use strict";
         $('#onload').modal('show');

     })(jQuery);
 }

 // Full Height

 function full_height() {
     (function($) {
         $(".full-height").height($(window).height());

         $(window).scroll(function() {

             if ($(window).scrollTop() > 100) {
                 $(".header-transparent").removeClass("transparent");
                 $(".header-transparent").addClass("header-bg");
             } else {
                 $(".header-transparent").addClass("transparent");
                 $(".header-transparent").removeClass("header-bg");
             }

         });
     })(jQuery);
 }
 // Full Height

 function fullscreen_nav() {
     (function($) {
         $(".fullscreen-btn a").on('click', function() {
             $(".fullscreen-overlay").fadeToggle(200);
             $(this).toggleClass('btn-open').toggleClass('btn-close');
             $(".fullscreen-overlay").width($(window).width());
         });
         $('.fullscreen-overlay').on('click', function() {
             $(".fullscreen-overlay").fadeToggle(200);
             $(".fullscreen-btn a").toggleClass('btn-open').toggleClass('btn-close');
             $(".fullscreen-overlay").width($(window).width());
             open = false;
         });
     })(jQuery);
 }

 function megamenu() {
     $(".dropdown").hover(
         function() {
             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
             $(this).toggleClass('open');
         },
         function() {
             $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
             $(this).toggleClass('open');
         }
     );
 }

 $('.countchiffre').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

 


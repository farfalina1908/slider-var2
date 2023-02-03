// $(document).ready(function(){

   $(".slider").slick({
      arrows: false,
      dots: true,
      speed: 500,
      easing: "ease",
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2500,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
   });

   $(".top-slider").slick({
      arrows: false,
      speed: 500,
      easing: "ease",
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
   });
// })

// $('.responsive').slick({
//    dots: true,
//    prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
//    nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
//    infinite: true,
//    speed: 300,
//    slidesToScroll: 1,
//    adaptiveHeight: true,
//    slidesToShow: 3,
 
//    responsive: [
//      {
//        breakpoint: 1200,
//        settings: {
//          slidesToShow: 2,
//        },
//      },
//      {
//        breakpoint: 768,
//        settings: {
//          slidesToShow: 1,
//        },
//      },
//      // You can unslick at a given breakpoint now by adding:
//      // settings: "unslick"
//      // instead of a settings object
//    ],
//  });

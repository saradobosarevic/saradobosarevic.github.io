$('.post-wrapper').slick({
  // infinite:false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: $('.arrow-prev'),
  nextArrow: $('.arrow-next'),
  responsive: [
    {
        breakpoint: 980, // tablet breakpoint
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 480, // mobile breakpoint
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
]
});


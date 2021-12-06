$(document).ready(function(){
  $('.choice__slider').slick({
      arrows: false,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false
              }
          }
      ]
    });
  });

  $('.btn-demo').on('click', function(e) {
    e.preventDefault();
    $('.overlay, #demo').fadeIn('slow');
});
$('.btn-more').on('click', function(e) {
    e.preventDefault();
    $('.overlay, #callback').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #callback, #demo').fadeOut('slow');
});
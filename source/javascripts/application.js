//= require jquery
//= require bootstrap
//= require carousel/owl.carousel
//= require jquery.swipebox

document.addEventListener("DOMContentLoaded", function(event) {
  $('.dropdown-toggle').dropdown()
});


function activateCarousel() {
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      responsive:{
        0:{
          items:1,
          loop: true,
          stagePadding: 10
        },
        600:{
          items:1,
          loop: true,
          stagePadding: 20
        },
        1000:{
          items:1,
          loop:true,
          stagePadding: 50
        }
      }
    });
    document.querySelector('.owl-next-custom').addEventListener('click', function(event) {
      $(".owl-carousel").trigger('next.owl.carousel');
    });
    document.querySelector('.owl-previous-custom').addEventListener('click', function(event) {
      $(".owl-carousel").trigger('prev.owl.carousel');
    });
    document.addEventListener('keyup', function(event) {
      if (event.code == "ArrowRight") {
        $(".owl-carousel").trigger('next.owl.carousel');
      } else if (event.code == "ArrowLeft") {
        $(".owl-carousel").trigger('prev.owl.carousel');
      }
    });
  });
}

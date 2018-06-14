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
    document.querySelectorAll('.owl-next-custom').forEach(function(item) {
      item.addEventListener('click', function(event) {
        var target = event.currentTarget.dataset.target;
        if (target) {
          $("#" + target).trigger('next.owl.carousel');
        } else {
          $(".owl-carousel").trigger('next.owl.carousel');
        }
      });
    })
    document.querySelectorAll('.owl-previous-custom').forEach(function(item) {
      item.addEventListener('click', function(event) {
        var target = event.currentTarget.dataset.target;
        console.log(target)
        $(".owl-carousel").trigger('prev.owl.carousel');
      });
    })
    document.addEventListener('keyup', function(event) {
      if (event.code == "ArrowRight") {
        $(".owl-carousel").trigger('next.owl.carousel');
      } else if (event.code == "ArrowLeft") {
        $(".owl-carousel").trigger('prev.owl.carousel');
      }
    });
  });
}

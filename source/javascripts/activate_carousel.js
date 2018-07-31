function activateCarouselNav(selector) {
  if (selector.includes('.')) {
    var navigationElements = document.querySelector(selector).parentElement.querySelectorAll('.owl-next-custom');
  } else {
    var navigationElements = document.getElementById(selector).parentElement.querySelectorAll('.owl-next-custom');
  }
  navigationElements.forEach(function(item) {
    item.addEventListener('click', function(event) {
      var target = event.currentTarget.dataset.target;
      if (target) {
        $("#" + target).trigger('next.owl.carousel');
      } else {
        $(selector).trigger('next.owl.carousel');
      }
    });
  })
  document.querySelectorAll('.owl-previous-custom').forEach(function(item) {
    item.addEventListener('click', function(event) {
      var target = event.currentTarget.dataset.target;
      console.log(target)
      $(selector).trigger('prev.owl.carousel');
    });
  })
  document.addEventListener('keyup', function(event) {
    if (event.code == "ArrowRight") {
      $(selector).trigger('next.owl.carousel');
    } else if (event.code == "ArrowLeft") {
      $(selector).trigger('prev.owl.carousel');
    }
  });
}

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
    activateCarouselNav(".owl-carousel");
  });
}

function activateCarouselArticle(carouselSelector, amountOfPictures) {
  $(document).ready(function(){
    $("#" + carouselSelector).owlCarousel({
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
          items:amountOfPictures,
          loop:true,
          stagePadding: 50
        }
      }
    });
    activateCarouselNav(carouselSelector);
  });
}


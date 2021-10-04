import $ from "jquery";
import 'owl.carousel';
import 'bootstrap';
import 'swipebox';
import { activateCarousel, activateCarouselArticle } from "./activate_carousel";

document.addEventListener("DOMContentLoaded", function(event) {
  $('.dropdown-toggle').dropdown()
});

$('.swipebox').swipebox();


activateCarousel()

if(document.querySelector('#testimonial')) {
  activateCarouselArticle("testimonial", 1);
} else {
  activateCarouselArticle("trip-photo", 3);
}
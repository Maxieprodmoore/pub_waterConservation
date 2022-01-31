import _ from 'lodash';
import Splide from '@splidejs/splide';
import '@shoelace-style/shoelace/dist/shoelace';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';


/*------Sticky Navigation------*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}



/*--------Creating Modal images for How Water sustains nature Collage-------*/

  //Get Overlay
    var overlay = document.querySelectorAll(".collageOverlay");

  //Get image. 
    var collageImg = document.querySelectorAll(".ws-collagePic");

  //Get overlay to be active on clicking on image
    Array.from(collageImg).forEach(function(collageImgArray, i) {
      collageImgArray.addEventListener('click',  function() {
        overlay[i].style.display = "block";
      });
    });
  //Get icon button (x) that closes Overlay
    var overlayClose = document.querySelectorAll(".overlay-CloseBtn");

  // When the user clicks on icon button (x), close the overlay
    Array.from(overlayClose).forEach(function(overlayCloseArray, i) {
      overlayCloseArray.addEventListener('click', function() {
        overlay[i].style.display = "none";
      });
    });



/*--------Setting up Slider for Uses of Water --------*/
var slideWaterUses = new Splide('#slide_waterUses', {
  type   : 'fade',
  perPage: 1,
  padding: 0,
  rewind: true,
  heightRatio: 0.4,
  drag: true,
  cover: true,
} )

document.addEventListener( 'DOMContentLoaded', function () {
  slideWaterUses.mount();
} );

/*--------Setting up Slider for Water Available --------*/
var slidesWaterAvail = new Splide('#slider-waterAvail', {
  type   : 'fade',
  perPage: 1,
  padding: 0,
  rewind: true,
  heightRatio: 0.4,
  drag: true,  
  cover: true,
} ).mount();

document.addEventListener( 'DOMContentLoaded', function () {
  slidesWaterAvail.mount();
} );

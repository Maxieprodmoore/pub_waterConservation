import Splide from '@splidejs/splide';
import '@shoelace-style/shoelace/dist/shoelace';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

/*------Sticky Navigation------*/
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/*---------------------------Hamburger Menu-----------------------*/

  const navMenu = document.querySelector('#phoneNav');
  const navOpen = document.querySelector('#phoneNavBtn');
  navOpen.addEventListener('click', () => navMenu.show());

/*--------Creating Modal images for How Water sustains nature Collage-------*/

  //Get Overlay
    var collageDrawer = document.querySelectorAll(".collageDrawer");
  //Get image. 
    var imgFullScrn = document.querySelectorAll(".ws-collagePic");
  //Get overlay to be active on clicking on image
    Array.from(imgFullScrn).forEach(function(imgFullScrnArray, i) {
      imgFullScrnArray.addEventListener('click', function() {
        collageDrawer[i].show();
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


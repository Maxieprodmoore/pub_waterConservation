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
  //Get Navigation Hamburger menu drawer
  const navMenu = document.querySelector('#phoneNav');
  //Get links on Navigation Hamburger menu button
  const navOpen = document.querySelector('#phoneNavBtn');
  navOpen.addEventListener('click', () => navMenu.show());

  //Get links on Navigation Hamburger menu
  const navLink = document.querySelectorAll('.phoneNavLink');

  //Enabling clicking on Navigation bar links to close hamburger menu on clicking
  Array.from(navLink).forEach(function(navLinkArray, i) {
    navLinkArray.addEventListener('click', () => navMenu.hide());
  });

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

/*--------Setting up info tabs for Water Available --------*/
  //Geting info panel
    const waterAvailInfo = document.querySelectorAll(".waterAvail-info");

  //Getting water avail btn
    const  waterAvailBtn = document.querySelectorAll(".waterAvail-img");
  
  //Getting info  tab being active on clicking
    Array.from(waterAvailBtn).forEach(function(waterAvailBtnArray, i) {
      waterAvailBtnArray.addEventListener('click', function() {
        waterAvailInfo[i].show();
      });
    });

/*--------Setting up info tabs for Consequences of no water --------*/
  //Geting info panel
  const waterConsqInfo = document.querySelectorAll(".consqDialog");

  //Getting water avail btn
    const  waterConsqBtn = document.querySelectorAll(".consqPic");
  
  //Getting info  tab being active on clicking
    Array.from(waterConsqBtn).forEach(function(waterConsqBtnArray, i) {
      waterConsqBtnArray.addEventListener('click', function() {
        waterConsqInfo[i].show();
      });
    });

/*----------------------Setting up Disclaimer and Socials Popups----------------------*/ 
    //Getting dialogue box for Social
    const socialMediaShareBx = document.querySelector("#social-sharingBx");

    //Getting dialogue box for Social media Sharing button
    const socialMediaShareBtn = document.querySelector("#social-sharingBtn");

    socialMediaShareBtn.addEventListener('click', () => socialMediaShareBx.show());

    //Getting dialogue box for Credits page
    const creditsBx = document.querySelector("#sourcesPage");

    //Getting dialogue box for Credits button
    const creditsBtn = document.querySelector("#sourcesBtn");

    creditsBtn.addEventListener('click', () => creditsBx.show());
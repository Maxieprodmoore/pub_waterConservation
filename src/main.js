import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('./../dist/shoelace');
import Splide from '@splidejs/splide';

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

	new Splide( '.splide', {
        type   : 'fade',
        perPage: 1,
        padding: 0,
        rewind: true,
        heightRatio: 0.4,
        drag: true,
    
    } ).mount();

    document.addEventListener( 'DOMContentLoaded', function () {
        new Splide( '#image-slider', {
            'cover'      : true,
            'heightRatio': 0.5,
        } ).mount();
    } );


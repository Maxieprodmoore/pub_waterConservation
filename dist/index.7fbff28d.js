window.onscroll = function() {
    myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
}
new Splide('.splide', {
    type: 'fade',
    perPage: 1,
    padding: 0,
    rewind: true,
    heightRatio: 0.4,
    drag: true
}).mount();
document.addEventListener('DOMContentLoaded', function() {
    new Splide('#image-slider', {
        'cover': true,
        'heightRatio': 0.5
    }).mount();
});

//# sourceMappingURL=index.7fbff28d.js.map

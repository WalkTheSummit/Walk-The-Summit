'use strict';
$(window).on('load', function() {
    // Please run it with window.onload, not with document.ready
    initSmoothScrolling('.block', 'smoothscroll');
});

const carousel = document.getElementById('carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      carousel.scrollTo({
        left: carousel.clientWidth * currentIndex,
        behavior: 'smooth'
      });
    }, 3000);

function initSmoothScrolling(container, animation) {
    var sliderWidth = 0;
    var animationWidth = 0;
    var sliderHeight = $('>div>div:first-of-type', container).outerHeight(false);

    $('>div>div', container).each(function() {
        animationWidth += $(this).outerWidth(false);
    });

    // detect number of visible slides
    var slidesVisible = $(container).width() / $('>div>div:first-of-type', container).outerWidth(false);
    slidesVisible = Math.ceil(slidesVisible);

    // count slides to determine animation speed
    var slidesNumber = $('>div>div', container).length;
    var speed = slidesNumber * 2;

    // append the tail	
    $('>div>div', container).slice(0, slidesVisible).clone().appendTo($('>div', container));

    // Detect the slider width with appended tail
    $('>div>div', container).each(function() {
        sliderWidth += $(this).outerWidth(false);
    });

    // set slider dimensions
    $('>div', container).css({ 'width': sliderWidth, 'height': sliderHeight });

    // Insert styles to html
    $("<style type='text/css'>@keyframes " + animation + " { 0% { margin-left: 0px; } 100% { margin-left: -" + animationWidth + "px; } } " + $('>div>div:first-of-type', container).selector + " { -webkit-animation: " + animation + " " + speed + "s linear infinite; -moz-animation: " + animation + " " + speed + "s linear infinite; -ms-animation: " + animation + " " + speed + "s linear infinite; -o-animation: " + animation + " " + speed + "s linear infinite; animation: " + animation + " " + speed + "s linear infinite; }</style>").appendTo("head");

    // restart the animation (e.g. for safari & ie)	
    var cl = $(container).attr("class");
    $(container).removeClass(cl).animate({ 'nothing': null }, 1, function() {
        $(this).addClass(cl);
    });
}



const blob = document.getElementById("blob");
window.onpointermove = event => {
    const { pageX, pageY } = event;

    blob.animate({
        left: `${pageX}px`,
        top: `${pageY}px`
    }, { duration: 300, fill: "forwards" });
}


function isMacOS() {
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
}

if (isMacOS()) {
    var styleElement = document.getElementById('blob');
    if (styleElement) {
        styleElement.remove()
    }
}

function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    blob.remove();
    var elements = document.querySelectorAll('.remover');
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
    var marginalp = document.querySelectorAll("mt-100")

} else {
    var elements = document.querySelectorAll('.anti-remover');
    elements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });
}

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function() {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});



const addEventOnElements = function(elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}



const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function() {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function() {
    const isScrollBottom = lastScrollPos < window.scrollY;
    if (isScrollBottom) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function() {
    if (window.scrollY >= 50) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
        hideHeader();
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function() {
    lastActiveSliderItem.classList.remove("active");
    heroSliderItems[currentSlidePos].classList.add("active");
    lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function() {
    if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function() {
    if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
    } else {
        currentSlidePos--;
    }

    updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function() {
    autoSlideInterval = setInterval(function() {
        slideNext();
    }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function() {
    clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function(event) {

    x = (event.clientX / window.innerWidth * 10) - 5;
    y = (event.clientY / window.innerHeight * 10) - 5;

    // reverse the number eg. 20 -> -20, -5 -> 5
    x = x - (x * 2);
    y = y - (y * 2);

    for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
        y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
        parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
    }

});
const slideContainer = document.querySelector('.slide');
const slideWrapper = document.querySelector('.slide-wrapper');
const slides = Array.from(document.querySelectorAll('.slide-wrapper img'));
let touchstartX = 0;
let touchendX = 0;
let isSlidingWithScroll = false;
let currentSlide = 0;

function goToSlide(index) {
    currentSlide = index;
    const slideWidth = slides[0].offsetWidth;
    const newPosition = -1 * slideWidth * index;
    slideWrapper.style.transform = `translateX(${newPosition}px)`;
    document.querySelector('.slide-buttons-item.active').classList.remove('active');
    document.querySelectorAll('.slide-buttons-item')[currentSlide].classList.add('active');
}

function swipeleft() {
    console.log(slides.length);
    if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
    }
}

function swiperight() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

function checkDirection() {
    if (touchendX < touchstartX) {
        console.log("swiped left");
        swipeleft();
    }
    if (touchendX > touchstartX) {
        console.log("swiped right");
        swiperight();
    }
}

slideContainer.addEventListener('mousedown', e => {
    touchstartX = e.screenX;
});

slideContainer.addEventListener('mouseup', e => {
    if (slideContainer.contains(e.target)) {
        touchendX = e.screenX;
        checkDirection();
    }
});

slideContainer.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

slideContainer.addEventListener('touchend', e => {
    if (slideContainer.contains(e.target)) {
        touchendX = e.changedTouches[0].screenX;
        checkDirection();
    }
});

slideContainer.addEventListener('wheel', (e) => {
    if (!e.shiftKey | isSlidingWithScroll)
        return;
    if (e.wheelDelta < 0) {
        isSlidingWithScroll = true;
        swipeleft();
    }
    if (e.wheelDelta > 0) {
        isSlidingWithScroll = true;
        swiperight();
    }
    // set timeout
    setTimeout(() => {
        isSlidingWithScroll = false;
    }, 500);
});
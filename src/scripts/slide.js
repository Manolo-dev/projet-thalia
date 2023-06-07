const slideContainer = document.querySelector('.slide-container');
const slideWrapper = document.querySelector('.slide-wrapper');
const slides = Array.from(document.querySelectorAll('.slide'));

let currentSlide = 0;

function goToSlide(index) {
    currentSlide = index;
    const slideWidth = slides[0].offsetWidth;
    const newPosition = -1 * slideWidth * index;
    slideWrapper.style.transform = `translateX(${newPosition}px)`;
    document.querySelector('.slide-buttons-item.active').classList.remove('active');
    document.querySelectorAll('.slide-buttons-item')[currentSlide].classList.add('active');
}

slideContainer.addEventListener('swipeleft', () => {
    if (currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
    }
});

slideContainer.addEventListener('swiperight', () => {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
});

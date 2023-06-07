const container = document.querySelector('.slide-images');
let isScrolling = false;
let currentSlide = 0;

container.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;

        const sectionWidth = container.clientWidth;
        const scrollPosition = container.scrollLeft;

        const newSlide = Math.round(scrollPosition / sectionWidth);
        const snapPosition = newSlide * sectionWidth;

        container.scrollTo({
            left: snapPosition,
            behavior: 'smooth'
        });

        if (newSlide !== currentSlide) {
            currentSlide = newSlide;
            document.querySelector('.slide-buttons-item.active').classList.remove('active');
            document.querySelectorAll('.slide-buttons-item')[currentSlide].classList.add('active');
        }

        setTimeout(() => {
            isScrolling = false;
        }, 100);
    }
});

function goToSlide(index) {
    isScrolling = true;
    const sectionWidth = container.clientWidth;
    const snapPosition = index * sectionWidth;

    container.scrollTo({
        left: snapPosition,
        behavior: 'smooth'
    });

    currentSlide = index;
    document.querySelector('.slide-buttons-item.active').classList.remove('active');
    document.querySelectorAll('.slide-buttons-item')[currentSlide].classList.add('active');

    setTimeout(() => {
        isScrolling = false;
    }, 100);
}

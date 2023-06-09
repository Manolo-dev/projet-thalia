const menu = document.querySelector('.header-pages');
const header = document.querySelector('header');
const main = document.querySelector('main');

function openMenu() {
    menu.classList.add('open');
}

function closeMenu() {
    menu.classList.remove('open');
}

function toggleSubMenu(t) {
    t.parentNode.classList.toggle('open');
    t.classList.toggle('open');
}

function handleScroll() {
    var scrollTop = main.pageYOffset || main.scrollTop;
    console.log(scrollTop);
    if (scrollTop === 0) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
    }
    setTimeout(() => {
        header.style.transition = 'background .5s ease-in-out';
    }, 100);
}

handleScroll();
const menu = document.querySelector('.header-pages');

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
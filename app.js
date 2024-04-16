
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const menuIcon = document.getElementById('menu-icon');


navToggle.addEventListener('click', function () {
    links.classList.toggle('show-links');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
    const isMenuOpen = links.classList.contains('show-links');
});

closeIcon.addEventListener('click', function () {
    links.classList.remove('show-links');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
});

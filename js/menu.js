const menu = document.getElementById('header__menu');
const headerLinks = document.getElementById('header__links');

menu.addEventListener('click', (event) => {
    headerLinks.classList.toggle('show');
    menu.classList.toggle('show');
});
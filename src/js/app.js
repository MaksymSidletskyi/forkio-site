const button = document.querySelector('.menu__mobile');
const menu = document.querySelector('.menu__mobile-hr')

button.addEventListener('click', function () {
   const navbar = document.querySelector('.nav__list');

   
    navbar.classList.toggle('active');

    menu.classList.toggle('close');
    menu.classList.toggle('menu__mobile-hr');

})


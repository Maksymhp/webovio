const menuBtn = document.querySelector ('.burger__btn');
const  menu = document.querySelector ('.header__items');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('header__items--active');
});
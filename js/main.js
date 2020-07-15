'use strict';

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const aNav = document.querySelectorAll('.a-nav');
const rightMenu = document.querySelector('.right-menu');

const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => { 

if(pageYOffset >= 100 && screen.width > 768){
    header.classList.add('scrolled');
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].classList.add('scrolled');
    }
    logo.src = 'img/logo.svg';
}else{    
    header.classList.remove('scrolled');
    for (let i = 0; i < aNav.length; i++) {
        aNav[i].classList.remove('scrolled');
    }
    logo.src = 'img/logo-white.png';
}

});

hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
    closeDropdown();
});

document.addEventListener('click', event => {
    if (!event.target.closest('.left-menu')) {
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
        closeDropdown();
    }
});

leftMenu.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    const dropdown = target.closest('.dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});
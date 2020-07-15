'use strict';

const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const aNav = document.querySelectorAll('.a-nav');
console.log(aNav);

window.addEventListener('scroll', () => { 

if(pageYOffset >= 100){
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
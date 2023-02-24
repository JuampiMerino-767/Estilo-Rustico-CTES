/*const btnToggle = document.querySelector('.btn-togle');
const navbar = document.querySelector('.navbar');
const closeMenu = document.querySelector('.close-menu');
const navActive = document.querySelectorAll('active-a');

btnToggle.addEventListener('click',()=>{
    navbar.classList.add('active');
    btnToggle.classList.add('.active')
    closeMenu.classList.add('active')
    btnToggle.classList.add('active-close');
    console.log(navbar);
});

closeMenu.addEventListener('click',()=>{
    navbar.classList.remove('active');
    closeMenu.classList.remove('active')
    btnToggle.classList.remove('active-close');
    console.log(closeMenu);
});

*/
const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menu.classList.contains('active')) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});





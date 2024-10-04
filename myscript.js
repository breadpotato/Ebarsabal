const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
  window.location.href = 'mailto:ebarsabalfrancis@gmail.com';
});

const contactButton1 = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
  window.location.href = 'https://wa.me/639083320528';
});

const facebookButton = document.querySelector('.contact-button');

facebookButton.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/your-facebook-profile-url';
});

const facebookIcon = document.querySelector('.facebook-icon');

facebookIcon.addEventListener('click', () => {
  window.location.href = 'https://www.facebook.com/your-facebook-profile-url';
});

const instagramIcon = document.querySelector('.instagram-icon');
const telegramIcon = document.querySelector('.telegram-icon');
const githubIcon = document.querySelector('.github-icon');

instagramIcon.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/francisrobertebarsabal/';
});

telegramIcon.addEventListener('click', () => {
  window.location.href = 'https://wa.me/639083320528';
});

githubIcon.addEventListener('click', () => {
  window.location.href = 'https://github.com/BreadPotato16';
});

const hireButton = document.querySelector('.hire-button');

hireButton.addEventListener('click', () => {
  window.open('https://www.pinterest.com/pin/741334788663105407/', '_blank');
});

const hamburgerMenu = document.querySelector('.hamburger-menu');
  const dashboard = document.querySelector('.dashboard');

  hamburgerMenu.addEventListener('click', () => {
    dashboard.classList.toggle('show');
  });
/* eslint-env browser */
import Typewriter from 'typewriter-effect/dist/core';
import './assets/css/style.css';
import aboutImage from './assets/images/kolakolade_4.png';
import popupImage from './assets/images/kolakolade_5.png';
import heroLogo from './assets/images/kolakolade_logo.png';
import './assets/scss/main.scss';

// Import fontawesome
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

// Site logo
const logoDiv = document.querySelector('.hero__logo');
// Typewriter text
const typewriter = document.querySelector('#typewriter');
// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');
// About Image
const aboutImg = document.querySelector('.about__img');
// About Overlay & Popup
const about = document.querySelector('#about');
const tabLinks = document.querySelectorAll('.about__tab__link');
const tabContents = document.querySelectorAll('.about__tab-content');
const aboutOverlay = document.querySelector('.about__overlay');
const popup = document.querySelector('.about__popup');
const popupClose = document.querySelector('.about__popup__close');
const popupImg = document.querySelector('.about__popup__img');

// Site logo
logoDiv.src = heroLogo;

// Typewriter text
new Typewriter(typewriter, {
  strings: [
    'Full Stack Web Developer',
    'Mobile App Developer',
    'Wordpress Developer',
    'Tech Enthusiast',
  ],
  autoStart: true,
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Back to top button
const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.classList.remove('hidden');
  } else {
    backToTopBtn.classList.add('hidden');
  }
};

window.onscroll = () => {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

backToTopBtn.addEventListener('click', topFunction);
// About Image
aboutImg.src = aboutImage;

// About Overlay & Popup
popupImg.src = popupImage;
about.addEventListener('click', (e) => {
  if (e.target.classList.contains('about__tab__link')) {
    tabLinks.forEach((tab) => {
      tab.classList.remove('active');
    });
    e.target.classList.add('active');

    tabContents.forEach((content) => {
      content.classList.remove('active');
      if (e.target.textContent.toLowerCase() === content.id) {
        content.classList.add('active');
      }
    });
  }
});

about.addEventListener('click', (e) => {
  if (e.target.classList.contains('about__more')) {
    aboutOverlay.classList.remove('hidden');
  }
});

aboutOverlay.addEventListener('click', (e) => {
  if (e.target === popupClose || e.target !== popup) {
    aboutOverlay.classList.add('hidden');
  }
});

/* eslint-env browser */
import Typewriter from 'typewriter-effect/dist/core';
import './assets/css/style.css';
import aboutImage from './assets/images/kolakolade_4.png';
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
const typewriter = document.getElementById('typewriter');
// About Image
const aboutImg = document.querySelector('.about__img');
console.log(aboutImg);

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

// About Image
aboutImg.src = aboutImage;

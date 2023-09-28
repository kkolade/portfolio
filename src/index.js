/* eslint-env browser */
import './assets/css/style.css';
import heroLogo from './assets/images/kolakolade_logo.png';
import './assets/scss/main.scss';

// Import fontawesome
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';

// Site logo
const logoDiv = document.querySelector('.hero__logo');
logoDiv.src = heroLogo;

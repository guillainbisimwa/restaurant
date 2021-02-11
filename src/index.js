import homeMainSection from './scripts/mainSection';
import foodsSection from './scripts/menuSection';
import aboutUs from './scripts/aboutSection';
import contactUs from './scripts/contactSection';
import progSection from './scripts/programSection';
import testSection from './scripts/testimonySection';
import footer from './scripts/footer';

const header = require('./scripts/header');

const {
  home, menu, about, contact,
} = require('./scripts/navMenu');

require('./style.css');

const content = document.querySelector('#content');
content.className = 'container main';

const mainPage = document.createElement('div');
content.appendChild(mainPage);

function homePage() {
  mainPage.innerHTML = '';
  mainPage.appendChild(header);
  mainPage.appendChild(homeMainSection());
  mainPage.appendChild(progSection());
  mainPage.appendChild(testSection());
  mainPage.appendChild(footer());
}

function menuPage() {
  mainPage.innerHTML = '';
  mainPage.appendChild(header);
  mainPage.appendChild(foodsSection());
  mainPage.appendChild(testSection());
  mainPage.appendChild(footer());
}

function aboutPage() {
  mainPage.innerHTML = '';
  mainPage.appendChild(header);
  mainPage.appendChild(progSection());
  mainPage.appendChild(aboutUs());
  mainPage.appendChild(footer());
}

function contactPage() {
  mainPage.innerHTML = '';
  mainPage.appendChild(header);
  mainPage.appendChild(contactUs());
  mainPage.appendChild(footer());
}

homePage();
home.addEventListener('click', homePage);
menu.addEventListener('click', menuPage);
about.addEventListener('click', aboutPage);
contact.addEventListener('click', contactPage);

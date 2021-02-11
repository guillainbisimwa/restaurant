const header = require('./scripts/header');
const homeMainSection = require('./scripts/mainSection');
const foodsSection = require('./scripts/menuSection');
const aboutUs = require('./scripts/aboutSection');
const contactUs = require('./scripts/contactSection');
const progSection = require('./scripts/programSection');
const testSection = require('./scripts/testimonySection');
const footer = require('./scripts/footer');

const {  brand, home, menu, about, shopping, contact } = require('./scripts/navMenu');

require('./style.css');

const content = document.querySelector('#content');
content.className = 'container main';

const mainPage = document.createElement('div');
content.appendChild(mainPage);
homePage();

function homePage(){
    mainPage.innerHTML = '';
    mainPage.appendChild(header);
    mainPage.appendChild(header);
    mainPage.appendChild(homeMainSection);
    mainPage.appendChild(progSection);
    mainPage.appendChild(testSection);
    mainPage.appendChild(footer);
}

function menuPage(){
    mainPage.innerHTML = '';
    mainPage.appendChild(header);
    mainPage.appendChild(foodsSection);
    mainPage.appendChild(testSection);
    mainPage.appendChild(footer);
}

function aboutPage(){
    mainPage.innerHTML = '';
    mainPage.appendChild(header);
    mainPage.appendChild(progSection);
    mainPage.appendChild(aboutUs);
    mainPage.appendChild(footer);
}

function contactPage(){
    mainPage.innerHTML = '';
    mainPage.appendChild(header);
    mainPage.appendChild(contactUs);
    mainPage.appendChild(footer);
}

home.addEventListener('click', homePage);
menu.addEventListener('click', menuPage);
about.addEventListener('click', aboutPage);
contact.addEventListener('click', contactPage);


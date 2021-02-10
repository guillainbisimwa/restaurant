const header = require('./scripts/header');
const homeMainSection = require('./scripts/mainSection');

const {  brand, home, menu, about, shopping, contact } = require('./scripts/navMenu');

require('./style.css');

const content = document.querySelector('#content');
content.className = 'container main';

content.appendChild(header);
content.appendChild(homeMainSection);
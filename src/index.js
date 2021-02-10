const header = require('./scripts/header');
const homeMainSection = require('./scripts/mainSection');
const progSection = require('./scripts/programSection');
const testSection = require('./scripts/testimonySection');
const footer = require('./scripts/footer');

const {  brand, home, menu, about, shopping, contact } = require('./scripts/navMenu');

require('./style.css');

const content = document.querySelector('#content');
content.className = 'container main';

content.appendChild(header);
content.appendChild(homeMainSection);
content.appendChild(progSection);
content.appendChild(testSection);
content.appendChild(footer);

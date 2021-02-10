const header = require('./scripts/header');
const {  brand, home, menu, about, shopping, contact } = require('./scripts/navMenu');

require('./style.css');

const content = document.querySelector('#content');
content.appendChild(header);
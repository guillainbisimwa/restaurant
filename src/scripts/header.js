const {  brand, home, menu, about, shopping, contact } = require('./navMenu');

const navBar = () => {

  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.className = 'd-flex justify-content-between my-4 pt-5';

  const listMenu = document.createElement('ul');

  const home_li = document.createElement('li');
  home_li.className = 'nav-item ms-5';
  home_li.appendChild(home);

  const menu_li = document.createElement('li');
  menu_li.className = 'nav-item ms-5';
  menu_li.appendChild(menu);

  const about_li = document.createElement('li');
  about_li.className = 'nav-item ms-5';
  about_li.appendChild(about);

  const shopping_li = document.createElement('li');
  shopping_li.className = 'nav-item ms-5';
  shopping_li.appendChild(shopping);

  const contact_li = document.createElement('li');
  contact_li.className = 'nav-item ms-5 me-5';
  contact_li.appendChild(contact);

  listMenu.className = 'nav fw-bold';
  listMenu.appendChild(home_li);
  listMenu.appendChild(menu_li);
  listMenu.appendChild(about_li);
  listMenu.appendChild(shopping_li);
  listMenu.appendChild(contact_li);

  nav.appendChild(brand);
  nav.appendChild(listMenu);

  header.appendChild(nav);

  return header;
};

module.exports = navBar();

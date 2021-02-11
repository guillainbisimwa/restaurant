const {
  brand, home, menu, about, shopping, contact,
} = require('./navMenu');

const navBar = () => {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.className = 'd-flex justify-content-between my-4 pt-5';

  const listMenu = document.createElement('ul');

  const homeLi = document.createElement('li');
  homeLi.className = 'nav-item ms-5';
  homeLi.appendChild(home);

  const menuLi = document.createElement('li');
  menuLi.className = 'nav-item ms-5';
  menuLi.appendChild(menu);

  const aboutLi = document.createElement('li');
  aboutLi.className = 'nav-item ms-5';
  aboutLi.appendChild(about);

  const shoppingLi = document.createElement('li');
  shoppingLi.className = 'nav-item ms-5';
  shoppingLi.appendChild(shopping);

  const contactLi = document.createElement('li');
  contactLi.className = 'nav-item ms-5 me-5';
  contactLi.appendChild(contact);

  listMenu.className = 'nav fw-bold';
  listMenu.appendChild(homeLi);
  listMenu.appendChild(menuLi);
  listMenu.appendChild(aboutLi);
  listMenu.appendChild(shoppingLi);
  listMenu.appendChild(contactLi);

  nav.appendChild(brand);
  nav.appendChild(listMenu);

  header.appendChild(nav);

  return header;
};

module.exports = navBar();

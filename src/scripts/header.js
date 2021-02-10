const {  brand, home, menu, about, shopping, contact } = require('./navMenu');

const navBar = () => {
  const container = document.createElement('div');
  container.className = 'container main';

  const header = document.createElement('header');

  const nav = document.createElement('nav');
  nav.className = 'd-flex justify-content-between my-4 pt-5';

  const listMenu = document.createElement('ul');
  listMenu.className = 'nav fw-bold';
  listMenu.appendChild(home);
  listMenu.appendChild(menu);
  listMenu.appendChild(about);
  listMenu.appendChild(shopping);
  listMenu.appendChild(contact);

  nav.appendChild(listMenu);

  header.appendChild(brand);
  header.appendChild(nav);

  container.appendChild(header);
  return header;
};

module.exports = navBar();

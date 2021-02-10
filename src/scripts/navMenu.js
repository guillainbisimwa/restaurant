const navMenu = () => {
    const brand = document.createElement('h3');
    brand.className = 'text-secondary';
    brand.textContent = 'Restaurant';

    const home = document.createElement('a');
    home.className = 'nav-link text-dark';
    home.textContent = 'Home';

    const menu = document.createElement('a');
    menu.className = 'nav-link text-dark';
    menu.textContent = 'Our menu';

    const about = document.createElement('a');
    about.className = 'nav-link text-dark';
    about.textContent = 'About us';

    const shopping = document.createElement('li');
    shopping.className = 'fas fa-shopping-cart pt-2 mx-3 fs-2';

    const contact = document.createElement('a');
    contact.className = 'nav-link btn btn btn-light btn-main fw-bold shadow';
    contact.textContent = 'contact';
  
    return { brand, home, menu, about, shopping, contact };
  };
  
  module.exports = navMenu();
  
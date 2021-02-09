const navMenu = () => {
    const brand = document.createElement('h3');
    brand.className = 'text-secondary';
    brand.textContent = 'Restaurant';

    const home = document.createElement('a');
    home.className('nav-link text-dark');
    home.textContent('Home');

    const menu = document.createElement('a');
    home.className('nav-link text-dark');
    home.textContent('Our menu');

    const about = document.createElement('a');
    home.className('nav-link text-dark');
    home.textContent('About us');

    const shopping = document.createElement('li');
    home.className('fas fa-shopping-cart pt-2 mx-3 fs-2');

    const contact = document.createElement('a');
    home.className('nav-link btn btn btn-light btn-main fw-bold shadow');
    home.textContent('contact');
  
    return { brand, menu, about, shopping, contact };
  };
  
  module.exports = navMenu();
  
import im2 from '../img/2-min.png';

const mainSection = () => {
  const homeMainSection = document.createElement('section');
  homeMainSection.className = 'row mb-2 pb-2 bg-bl';

  const divtext = document.createElement('div');
  divtext.className = 'title col-7 mt-5 pt-5';

  const welcometext = document.createElement('h1');
  welcometext.textContent = 'Your Favorite food Delivered Hot & Fresh';

  const loremtext = document.createElement('p');
  loremtext.className = 'gray-600';
  loremtext.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam praesentium optio nam.';

  const bookingbtn = document.createElement('button');
  bookingbtn.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';
  bookingbtn.textContent = 'Book now';

  const icon = document.createElement('i');
  icon.className = 'fas fa-arrow-right mx-3';

  const divimg = document.createElement('div');
  divimg.className = 'pic col-5';

  const image = document.createElement('img');
  image.className = 'img w-100';
  image.setAttribute('alt', 'Food 1');
  image.src = im2;

  bookingbtn.appendChild(icon);

  divtext.appendChild(welcometext);
  divtext.appendChild(loremtext);
  divtext.appendChild(bookingbtn);

  divimg.appendChild(image);

  homeMainSection.appendChild(divtext);
  homeMainSection.appendChild(divimg);

  return homeMainSection;
};

export default mainSection;

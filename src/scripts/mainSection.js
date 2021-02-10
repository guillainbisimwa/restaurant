const mainSection = () => {
    const homeMainSection = document.createElement('section');
    homeMainSection.className = 'row mb-2 pb-2 bg-bl';

    const div_text = document.createElement('div');
    div_text.className = 'title col-7 mt-5 pt-5';

    const welcome_text = document.createElement('h1');
    welcome_text.textContent = 'Your Favorite food Delivered Hot & Fresh';

    const lorem_text = document.createElement('p');
    lorem_text.className = 'gray-600';
    lorem_text.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam praesentium optio nam.';

    const booking_btn = document.createElement('button');
    booking_btn.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';
    booking_btn.textContent = 'Book now';

    const icon = document.createElement('i');
    icon.className = 'fas fa-arrow-right mx-3';

    const div_img = document.createElement('div');
    div_img.className = 'pic col-5';    

    const image = document.createElement('img');
    image.className = 'img w-100';
    image.setAttribute('alt', 'Food 1');
    image.setAttribute('src', '../src/img/2-min.png');

    booking_btn.appendChild(icon);

    div_text.appendChild(welcome_text);
    div_text.appendChild(lorem_text);
    div_text.appendChild(booking_btn);

    div_img.appendChild(image);

    homeMainSection.appendChild(div_text);
    homeMainSection.appendChild(div_img);

    return homeMainSection;
  };
  
  module.exports = mainSection();
  
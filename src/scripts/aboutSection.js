const aboutSection = () => {
    const aboutUs = document.createElement('section');
    aboutUs.className = 'text-center my-4 mb-5';

    const h3 = document.createElement('h3');
    h3.className = 'mt-5';
    h3.textContent = 'What they are saying!';

    const details = document.createElement('p');
    details.className = 'text-secondary mt-3 p-5';
    details.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas numquam eos, iure perferendis, maxime itaque facilis velit hic a illo repellendus, quis repudiandae architecto laboriosam animi cum autem voluptas! Esse.';

    const div = document.createElement('div');
    div.className = 'shadow br-custom w-50 mt-5 pb-3 m-auto';

    const image = document.createElement('img');
    image.className = 'm-auto w-50';
    image.setAttribute('alt', 'Food Testimony');
    image.setAttribute('src', '../src/img/11-min.png');

    const text = document.createElement('p');
    text.className = 'small px-5 text-secondary';
    text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit!';

    div.appendChild(image);
    div.appendChild(text);

    aboutUs.appendChild(h3);
    aboutUs.appendChild(details);
    aboutUs.appendChild(div);

    return aboutUs;
  };
  
  module.exports = aboutSection();
  
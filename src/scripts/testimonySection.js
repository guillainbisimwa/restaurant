const testimonySection = () => {
    const testSection = document.createElement('section');
    testSection.className = 'text-center my-4 mb-5';

    const button = document.createElement('button');
    button.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';
    button.textContent = 'See more foods';

    const icon = document.createElement('i');
    icon.className = 'fas fa-arrow-down mx-3';

    const h3 = document.createElement('h3');
    h3.className = 'mt-5';
    h3.textContent = 'What they are saying!';

    const details = document.createElement('p');
    details.className = 'text-secondary mt-3';
    details.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore culpa, ratione doloremque dignissimos quae earum laboriosam architecto neque soluta veniam at nostrum sit perspiciatis sequi exercitationem quia blanditiis veritatis?';

    const div = document.createElement('div');
    div.className = 'shadow br-custom w-50 mt-5 pb-3 m-auto';

    const image = document.createElement('img');
    image.className = 'm-auto w-50';
    image.setAttribute('alt', 'Food Testimony');
    image.setAttribute('src', '../src/img/4-min.png');

    const text = document.createElement('p');
    text.className = 'small px-5 text-secondary';
    text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit!';

    button.appendChild(icon);
    div.appendChild(image);
    div.appendChild(text);

    testSection.appendChild(button);
    testSection.appendChild(h3);
    testSection.appendChild(details);
    testSection.appendChild(div);

    return testSection;
  };
  
  module.exports = testimonySection();
  
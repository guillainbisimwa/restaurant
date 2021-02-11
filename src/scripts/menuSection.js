const menuSection = () => {
  const foodsSection = document.createElement('section');
  foodsSection.className = 'row mb-2 pb-2';

  const imagesList = [
    {
      src: '../src/img/2-min.png',
      details: 'Meat',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/3-min.png',
      details: 'Vegetables',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/4-min.png',
      details: 'Vlegumes/beans',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/9-min.png',
      details: 'beans',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/10-min.png',
      details: 'Meat',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/17-min.png',
      details: 'Vegetables',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/15-min.png',
      details: 'Vlegumes/beans',
      text: 'enjoy a variety of nutritious foods.'
    },
    {
      src: '../src/img/12-min.png',
      details: 'beans',
      text: 'enjoy a variety of nutritious foods.'
    }
  ];

  for(let i = 0; i < imagesList.length; i++){

    const container = document.createElement('div');
    container.className = 'col-xs-12 col-sm-6 col-md-3';

    const div = document.createElement('div');
    div.className = 'm-lg-2 m-sm-1 shadow bg-light pt-3 br-custom';

    const image = document.createElement('img');
    image.className = 'img w-100';
    image.setAttribute('alt', imagesList[i].details);
    image.setAttribute('src', imagesList[i].src);

    const text = document.createElement('p');
    text.className = 'fw-bold text-center';
    text.textContent = imagesList[i].details;

    const textSmall = document.createElement('p');
    textSmall.className = 'small text-center';
    textSmall.textContent = imagesList[i].text;

    const button = document.createElement('button');
    button.className = 'btn btn-danger plus text-left';
    button.textContent = '+';

    div.appendChild(image);
    div.appendChild(text);
    div.appendChild(textSmall);
    div.appendChild(button);

    container.appendChild(div);

    foodsSection.appendChild(container);      
  }

  return foodsSection;
};

module.exports = menuSection();

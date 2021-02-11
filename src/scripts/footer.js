const footerSection = () => {
  const footer = document.createElement('footer');
  footer.className = 'py-5 bg-gray-200 my-5';

  const container = document.createElement('div');
  container.className = 'container';

  const row = document.createElement('div');
  row.className = 'row';

  const left = document.createElement('div');
  left.className = 'col-12 col-md-4 col-lg-3';

  const image = document.createElement('img');
  image.className = 'footer-brand img-fluid mb-2';
  image.setAttribute('width', 60);
  image.setAttribute('alt', 'Food logo');
  image.setAttribute('src', '../src/img/14-min.png');

  const slogan = document.createElement('p');
  slogan.className = 'text-gray-700 mb-2';
  slogan.textContent = 'Best restaurent for you';

  const icons = document.createElement('div');

  const icon1 = document.createElement('i');
  icon1.className = 'fab fa-twitter c-main fs-4 m-1';

  const icon2 = document.createElement('i');
  icon2.className = 'fab fa-linkedin-in c-main fs-4 m-1';

  const icon3 = document.createElement('i');
  icon3.className = 'fab fa-google-plus-g c-main fs-4 m-1';

  const icon4 = document.createElement('i');
  icon4.className = 'fab fa-git c-main fs-4 m-1';


  const menuFooter = [
    {
      menu: 'Products',
      subMenu: [
        'Lorem 1',
        'Lorem 2',
        'Lorem 3',
        'Lorem 4',
      ],
    },
    {
      menu: 'Services',
      subMenu: [
        'Lorem 5',
        'Lorem 6',
        'Lorem 7',
        'Lorem 8',
        'Lorem 9',
      ],
    },
    {
      menu: 'Connect',
      subMenu: [
        'Lorem 10',
        'Lorem 11',
        'Lorem 12',
      ],
    },
    {
      menu: 'Legal',
      subMenu: [
        'Lorem 13',
        'Lorem 14',
        'Lorem 15',
        'Lorem 16',
        'Lorem 17',
        'Lorem 18',
        'Lorem 19',
      ],
    },
  ];

  icons.appendChild(icon1);
  icons.appendChild(icon2);
  icons.appendChild(icon3);
  icons.appendChild(icon4);

  left.appendChild(image);
  left.appendChild(slogan);
  left.appendChild(icons);

  row.appendChild(left);

  for (let i = 0; i < menuFooter.length; i += 1) {
    const column = document.createElement('div');
    column.className = 'col-6 col-md-4 col-lg-2';

    const h6 = document.createElement('h6');
    h6.className = 'font-weight-bold text-uppercase text-gray-700';
    h6.textContent = menuFooter[i].menu;

    const list = document.createElement('ul');
    list.className = 'list-unstyled text-muted mb-6 mb-md-8 mb-lg-0';

    for (let j = 0; j < menuFooter[i].subMenu.length; j += 1) {
      const item = document.createElement('li');
      item.className = 'mb-3';

      const itemSpan = document.createElement('span');
      itemSpan.className = 'text-reset';
      itemSpan.textContent = menuFooter[i].subMenu[j];

      item.appendChild(itemSpan);

      list.appendChild(item);
    }

    column.appendChild(h6);
    column.appendChild(list);

    row.appendChild(column);
  }

  container.appendChild(row);

  footer.appendChild(container);

  return footer;
};

module.exports = footerSection();

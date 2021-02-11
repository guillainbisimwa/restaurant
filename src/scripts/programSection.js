const programSection = () => {
  const progSection = document.createElement('section');
  progSection.className = 'program row text-center';

  const cssClass = [
    {
      myClass: 'fa-clock',
      details: 'Today, 10am to 7pm',
      text: 'Working hours',
    },
    {
      myClass: 'fa-map-marker-alt',
      details: 'Lorem dolor sit amet',
      text: 'Get position',
    },
    {
      myClass: 'fa-phone',
      details: '+243 000 000 000',
      text: 'Call online',
    },
  ];

  for (let i = 0; i < cssClass.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'col bg-light shadow m-lg-5 m-sm-3 pt-3 br-custom';

    const icon = document.createElement('i');
    icon.className = `fas c-main fs-2 ${cssClass[i].myClass}`;

    const text = document.createElement('p');
    text.className = 'fw-bold';
    text.textContent = cssClass[i].details;

    const textSmall = document.createElement('p');
    textSmall.className = 'small';
    textSmall.textContent = cssClass[i].text;

    div.appendChild(icon);
    div.appendChild(text);
    div.appendChild(textSmall);

    progSection.appendChild(div);
  }

  return progSection;
};

export default programSection;

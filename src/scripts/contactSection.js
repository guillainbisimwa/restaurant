const contactSection = () => {
  const contactUs = document.createElement('section');
  contactUs.className = 'my-4 mb-5';

  const divHeader = document.createElement('div');
  divHeader.className = 'py-5 text-center';

  const h2 = document.createElement('h2');
  h2.className = 'mt-5';
  h2.textContent = 'Contact form!';

  const details = document.createElement('p');
  details.className = 'lead px-3';
  details.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas numquam eos, iure perferendis, maxime itaque facilis velit hic a illo repellendus, quis repudiandae architecto laboriosam animi cum autem voluptas! Esse.';

  const divForm = document.createElement('div');
  divForm.className = 'row g-3 w-50 m-auto';

  const divformInputFn = document.createElement('div');
  divformInputFn.className = 'col-sm-6';

  const labelFn = document.createElement('label');
  labelFn.className = 'form-label';
  labelFn.textContent = 'First name';
  labelFn.setAttribute('for', 'firstName');

  const inputFn = document.createElement('input');
  inputFn.className = 'form-control';
  inputFn.setAttribute('id', 'firstName');
  inputFn.setAttribute('type', 'text');
  inputFn.setAttribute('placeholder', 'First name');

  const divformInputLn = document.createElement('div');
  divformInputLn.className = 'col-sm-6';

  const labelLn = document.createElement('label');
  labelLn.className = 'form-label';
  labelLn.textContent = 'Last name';
  labelLn.setAttribute('for', 'lastName');

  const inputLn = document.createElement('input');
  inputLn.className = 'form-control';
  inputLn.setAttribute('id', 'lastName');
  inputLn.setAttribute('type', 'text');
  inputLn.setAttribute('placeholder', 'Last name');

  const divformInputTa = document.createElement('div');

  const textArea = document.createElement('textarea');
  textArea.className = 'form-control h-100"';
  textArea.setAttribute('placeholder', 'Leave a comment here');

  const button = document.createElement('button');
  button.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';
  button.textContent = 'Submit';

  divHeader.appendChild(h2);
  divHeader.appendChild(details);

  divformInputFn.appendChild(labelFn);
  divformInputFn.appendChild(inputFn);

  divformInputLn.appendChild(labelLn);
  divformInputLn.appendChild(inputLn);

  divformInputTa.appendChild(textArea);

  divForm.appendChild(divformInputFn);
  divForm.appendChild(divformInputLn);
  divForm.appendChild(divformInputTa);
  divForm.appendChild(button);

  contactUs.appendChild(divHeader);
  contactUs.appendChild(divForm);

  return contactUs;
};

export default contactSection;

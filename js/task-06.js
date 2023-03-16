const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const length = input.dataset.length;
  const valueLength = input.value.length;

  if (valueLength === Number(length)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});

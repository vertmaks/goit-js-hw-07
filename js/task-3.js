const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const clearValue = event.currentTarget.value.trim();
  textOutput.textContent = clearValue === '' ? 'Anonymous' : clearValue;
});

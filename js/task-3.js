const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const clearValue = event.currentTarget.value.trim();
  textOutput.textContent = clearValue === '' ? 'Anonymous' : clearValue;
});

//#region Deco
const input = document.querySelector('#name-input');
const greeting = document.querySelector('h1');

const mainWrapper = document.createElement('main');
mainWrapper.classList.add('main');

input.parentNode.insertBefore(mainWrapper, input);
mainWrapper.append(input, greeting);

//#endregion

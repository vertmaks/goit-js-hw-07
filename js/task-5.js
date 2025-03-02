function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.querySelector('body');

function changeColor() {
  const colorName = document.querySelector('.color');
  const randomColor = getRandomHexColor();

  colorName.textContent = randomColor;
  body.style.backgroundColor = randomColor;
}

changeColorBtn.addEventListener('click', changeColor);

//#region Deco
const widget = document.querySelector('.widget');

const mainWrapper = document.createElement('main');
mainWrapper.classList.add('main');

widget.parentNode.insertBefore(mainWrapper, widget);
mainWrapper.append(widget);

//#endregion

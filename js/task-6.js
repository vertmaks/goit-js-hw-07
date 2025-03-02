function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');
const box = document.querySelector('.box');

const boxesList = document.createElement('ul');
boxes.append(boxesList);

function createEvent() {
  if (input.value >= 1 && input.value <= 100) {
    if (boxesList.querySelector('.box')) {
      boxesList.innerHTML = '';
    }

    let width = 30;
    let height = 30;
    for (let i = 0; i < input.value; i++) {
      const boxItem = document.createElement('li');

      boxItem.classList.add('box');
      boxItem.style.width = `${width}px`;
      boxItem.style.height = `${height}px`;
      boxItem.style.backgroundColor = getRandomHexColor();
      boxesList.append(boxItem);

      width += 10;
      height += 10;

      boxes.style.display = 'block';
    }
  } else {
    alert('Minimal amout is 1, maximal — 100 boxes!');
  }
}

function destroyEvent() {
  boxes.style.display = '';
  boxesList.innerHTML = '';
}

createBtn.addEventListener('click', createEvent);
destroyBtn.addEventListener('click', destroyEvent);

//#region Deco
const widget = document.querySelector('#controls');

const mainWrapper = document.createElement('main');
mainWrapper.classList.add('main');

widget.parentNode.insertBefore(mainWrapper, widget);
mainWrapper.append(widget);

// const boxesWrapper = document.createElement('section');
// boxesWrapper.classList.add('boxes-wrapper');

// boxes.parentNode.insertBefore(boxesWrapper, boxes);
// boxesWrapper.append(boxes);

//#endregion

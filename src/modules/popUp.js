import { getDataLocalStorage } from './store.js';

const image = document.querySelector('.image');
const title = document.querySelector('.modal-title');
const paragraph = document.querySelector('.dsc');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openPopUp = () => {
  overlay.classList.add('active');
  modal.classList.add('active');
}

export const fillPopUp = (event) => {
  openPopUp();
  let isButton = event.target.classList.contains('button');
  if (isButton) {
    const id = event.target.dataset.id;
    const mainGrid = getDataLocalStorage();
    const element = mainGrid[id];
    image.setAttribute('src', `${element.show.image.original}`);
    title.textContent = `${element.show.name}`;
    paragraph.innerHTML = `${element.show.summary}`;
  }
}

export const closePopUp = () => {
  overlay.classList.remove('active');
  modal.classList.remove('active');
}

import { getDataLocalStorage } from './store.js';

export function showpopUp(event) {
  document.querySelector('section').style.display = 'block';
  if (event.target.classList.contains('button')) {
    const { id } = event.target.dataset;
    const mainGrid = getDataLocalStorage();
    const element = mainGrid[id];
    const image = document.querySelector('.image');
    const title = document.querySelector('.title');
    const paragraph = document.querySelector('.par');
    image.setAttribute('src', `${element.show.image.original}`);
    title.textContent = `${element.show.name}`;
    paragraph.innerHTML = `${element.show.summary}`;
  }
}
import { createGrid } from './modules/createGrid.js';
import { getComics } from './modules/getData.js';
import { showpopUp } from './modules/popUp.js';
import { getDataLocalStorage, setDataLocalStorage } from './modules/store.js';
import './styles.scss';

window.addEventListener('load', () => {
  getComics().then((result) => {
    result.splice(7, 1);
    setDataLocalStorage(result);
  });
  const mainGrid = getDataLocalStorage();
  createGrid(mainGrid);
  const container = document.querySelector('.container');
  container.addEventListener('click', (e) => showpopUp(e));
  const x = document.querySelector('.X');
  x.addEventListener('click', () => {
    document.querySelector('section').style.display = 'none';
  });
});

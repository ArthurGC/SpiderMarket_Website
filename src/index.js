import { getData } from './modules/getData.js';
import { showpopUp } from './modules/popUp.js';
import './styles.scss';

const container = document.querySelector('.container');

window.addEventListener('load', () => {
  getData();
  container.addEventListener('click', (e) => showpopUp(e));
  const close = document.querySelector('.fa-times');
  close.addEventListener('click', () => {
    document.querySelector('section').style.display = 'none';
  });
});

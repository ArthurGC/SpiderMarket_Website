import { getData } from './modules/getData.js';
import { fillPopUp, closePopUp } from './modules/popUp.js';
import './styles.scss';

const container = document.querySelector('.container');
const close = document.querySelector('.close');

window.addEventListener('load', () => {
  getData();
});

container.addEventListener('click', (e) => fillPopUp(e));

close.addEventListener('click', closePopUp);

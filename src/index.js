import { getData } from './modules/getData.js';
import { sendLikes } from './modules/like.js';
import { fillPopUp, closePopUp } from './modules/popUp.js';
import './styles.scss';
// import { commentsPopUp } from './modules/comments.js'

const container = document.querySelector('.container');
const close = document.querySelector('.close');

window.addEventListener('load', () => {
  getData();
});

container.addEventListener('click', (e) => {
  fillPopUp(e);
  sendLikes(e);
});

close.addEventListener('click', closePopUp);

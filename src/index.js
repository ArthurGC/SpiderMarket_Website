import { getData } from './modules/getData.js';
import { sendLikes } from './modules/like.js';
import { fillPopUp, closePopUp } from './modules/popUp.js';
import './styles.scss';
import { createNewComment } from './modules/comments.js';

const container = document.querySelector('.container');
const close = document.querySelector('.close');
const buttonModal = document.querySelector('.modal-button');

window.addEventListener('load', () => {
  getData();
});

container.addEventListener('click', (e) => {
  fillPopUp(e);
  sendLikes(e);
});

buttonModal.addEventListener('click', (e) => {
  e.preventDefault();
  const titleid = document.querySelector('.modal-title').dataset.id;
  const inputName = document.querySelector('.inputName').value;
  const inputComment = document.querySelector('.inputComment').value;
  createNewComment(titleid, inputName, inputComment);
  document.querySelector('.form').reset();
});

close.addEventListener('click', closePopUp);

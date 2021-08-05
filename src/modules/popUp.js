import { getDataLocalStorage } from './store.js';
import involvement from './comments.js';

const image = document.querySelector('.image');
const title = document.querySelector('.modal-title');
const paragraph = document.querySelector('.dsc');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const main = document.querySelector('body');

const openPopUp = () => {
  overlay.classList.add('active');
  modal.classList.add('active');
  main.style.overflow = 'hidden';
};

export const fillPopUp = (event) => {
  const isButton = event.target.classList.contains('button');
  if (isButton) {
    openPopUp();
    const { id } = event.target.dataset;
    const mainGrid = getDataLocalStorage();
    const element = mainGrid[id];
    image.setAttribute('src', `${element.show.image.original}`);
    title.textContent = `${element.show.name}`;
    paragraph.innerHTML = `${element.show.summary}`;
    commentsPopUp(id);
  }
};

export const closePopUp = () => {
  overlay.classList.remove('active');
  modal.classList.remove('active');
  main.style.overflow = '';
};

export const commentsPopUp = (id) => {
 
  involvement.getComments(id)
    .then((comments) => {
      if (comments.length > 0) {

        const popUpCommentsTitle = document.createElement('h3');
        popUpCommentsTitle.className = 'comments-title';
        popUpCommentsTitle.textContent = 'Comments';
        popUpComments.appendChild(popUpCommentsTitle);

        const popUpCommentsContainer = document.createElement('ul');
        popUpCommentsContainer.id = 'comments-list';
        popUpCommentsContainer.className = 'comments-list';
        popUpComments.appendChild(popUpCommentsContainer);

        for (let i = 0; i < comments.length; i += 1) {
          comments[i].creation_date = comments[i].creation_date.replace('-', '/').replace('-', '/');
          const listItem = document.createElement('li');
          listItem.className = 'comm-list-item';

          const displayComment = document.createElement('p');
          displayComment.className = 'comment';
          displayComment.textContent = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
          listItem.appendChild(displayComment);
          popUpCommentsContainer.appendChild(listItem);
        }

        const divComments = document.querySelector(".commments");
        divComments.appendChild(popUpCommentsTitle);
        divComments.appendChild(popUpCommentsContainer);
      }
    })

};


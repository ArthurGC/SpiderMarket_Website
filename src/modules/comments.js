import { addCounterCommmentDOM } from './commentCounter.js';

const postURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/comments';

export const getComments = async (itemID) => {
  const getURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/comments?item_id=${itemID}`;
  const rawResp = await fetch(getURL);
  const comments = await rawResp.json();
  return comments;
};

export const createNewComment = async (commID, commUserName, comm) => {
  const rawResp = await fetch(postURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${commID}`,
      username: `${commUserName}`,
      comment: `${comm}`,
    }),
  });

  getComments(commID)
    .then((comments) => {
      const divComments = document.querySelector('.comments');
      divComments.innerHTML = '';
      if (comments.length > 0) {
        const popUpCommentsTitle = document.createElement('h3');
        popUpCommentsTitle.className = 'comments-title';
        popUpCommentsTitle.innerHTML = 'Comments <span class="counter"></span>';

        const popUpCommentsContainer = document.createElement('ul');
        popUpCommentsContainer.id = 'comments-list';
        popUpCommentsContainer.className = 'comments-list';

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

        divComments.appendChild(popUpCommentsTitle);
        divComments.appendChild(popUpCommentsContainer);
        addCounterCommmentDOM();
      }
    });

  const status = await rawResp;
  return status;
};

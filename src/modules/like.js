const createURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
const likeURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/likes/";

export const createApp = async () => {
  const response = await fetch(createURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: "newAppArthur",
    }),
  });
  const status = await response.text();
  return status;
};

//   1skhHeMuaX5lQlDsoElJ
const createLikes = async (id) => {
  const response = await fetch(likeURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  });
  const status = await response;
  return status;
};

export const sendLikes = (event) => {
  const isLikeBtn = event.target.classList.contains("icon-heart");
  if (isLikeBtn) {
    const { id } = event.target.dataset;
    createLikes(id).then(result => getListLikesAPI());
  }
};

const getLikes = async () => {
  const response = await fetch(likeURL);

  const status = await response.json();
  return status;
};

const distributeLikes = (likesListAPI) => {
  let likeCounter = [...document.querySelectorAll(".likes")];
  likesListAPI.forEach((object) => {
    let id = parseInt(object.item_id, 10);
    likeCounter[id].textContent = object.likes;
  });
};

export const getListLikesAPI = () => {
  getLikes().then((result) => {
    distributeLikes(result);
  });
};

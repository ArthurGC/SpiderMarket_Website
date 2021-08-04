let createURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/";
let likeURL =
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


 let appURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cYQkNTJ9fpeDgpCyZ2kY/comments';
 
 async function createNewApp() {
    const rawResp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const newAppID = await rawResp.text();

    return newAppID;
  }
  
  export async function createNewComment(commID, commUserName, comm) {
    const rawResp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cYQkNTJ9fpeDgpCyZ2kY/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: commID,
        username: commUserName,
        comment: comm,
      })
    });

    if (rawResp.status !== 201) {
      throw new Error('Something went wrong when creating the new comment');
    }
   
  }
  
  export async function getComments(itemID) {
    try {
      const rawResp = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cYQkNTJ9fpeDgpCyZ2kY/comments?item_id=${itemID}`);
      const comments = await rawResp.json();
      return comments;
    } catch (error) {
      throw new Error(error);
    }
  }



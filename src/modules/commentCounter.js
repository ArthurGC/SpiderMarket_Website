const itemCounterComments = () => {
    const items = [...document.querySelector('.comments-list').children];
    return items.length;
  };

  export const addCounterCommmentDOM = () => {
    const counterDOM = document.querySelector('.counter');
    counterDOM.innerHTML = `<b>(${itemCounterComments()})<b>`;
  };
  
  export default itemCounterComments;
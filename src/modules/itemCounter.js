const itemCounter = () => {
  const items = [...document.querySelector('.container').children];
  return items.length;
};

export const addCounterDOM = () => {
  const counterDOM = document.querySelector('.items-counter');
  counterDOM.innerHTML = `<b>(${itemCounter()})<b>`;
};

export default itemCounter;

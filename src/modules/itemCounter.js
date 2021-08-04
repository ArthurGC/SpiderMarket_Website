const itemCounter = () => {
    let items = [...document.querySelector('.container').children];
    return items.length;
}

export const addCounterDOM = () => {
    let counterDOM = document.querySelector('.items-counter');
    counterDOM.innerHTML = `<b>(${itemCounter()})<b>`;
}

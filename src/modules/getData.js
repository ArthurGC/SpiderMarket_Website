import { createGrid } from './createGrid.js';
import { addCounterDOM } from './itemCounter.js';
import { getListLikesAPI } from './like.js';
import { setDataLocalStorage } from './store.js';

const dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
const getDrawComics = async () => {
  const response = await fetch(dataURL);
  const comics = await response.json();
  return comics;
};

export const getData = () => {
  getDrawComics().then(result => {
    result.splice(7, 1);
    setDataLocalStorage(result);
    createGrid(result);
    getListLikesAPI();
  })
};

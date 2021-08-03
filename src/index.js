import { createGrid } from './modules/createGrid.js';
import { getComics } from './modules/getData.js';

window.addEventListener('load', (event)=> {
    getComics().then( result => {
        console.log(result);
        createGrid(result);
    })
})

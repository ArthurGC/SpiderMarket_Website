import { createGrid } from './modules/createGrid.js';
import { mainGrid } from './modules/getData.js';

window.addEventListener('load', ()=> {
    createGrid(mainGrid)
})

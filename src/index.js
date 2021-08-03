import { getComics } from './modules/getData.js';

window.addEventListener('load', (event)=> {
    getComics().then( result => {
        console.log(result);
    })
})

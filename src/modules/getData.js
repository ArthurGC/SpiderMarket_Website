let dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
export let mainGrid;
const getComics = async () => {
    const response = await fetch(dataURL);  
    const comics = await response.json();
    return comics;
};

getComics().then( result => {
    result.splice(7,1); 
    mainGrid = result;
})

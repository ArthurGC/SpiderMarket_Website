let dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';

export const getComics = async () => {
    const response = await fetch(dataURL);  
    const comics = await response.json();
    return comics;
};

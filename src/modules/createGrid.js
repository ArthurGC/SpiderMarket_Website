export const createGrid = (arrayComics) => {
    let containerJS = document.createDocumentFragment();
    let mainContainer = document.querySelector('.container');

    arrayComics.forEach((comic,index) => {
        let container = document.createElement('li');
        let imgContainer = document.createElement('div');
        let image = document.createElement('img');
        let likeBox = document.createElement('div');
        let name = document.createElement('p');
        let likeIcon = document.createElement('i');
        let likeAmount = document.createElement('p');
        let button = document.createElement('button');

        image.setAttribute('src', `${comic.show.image.original}`);
        name.textContent = `${comic.show.name} ${index}`;
        likeAmount.textContent = 0;
        button.textContent = 'Comments';
        button.dataset.id = `${index}`;
        button.classList.add("button");
        imgContainer.appendChild(image);
        likeBox.appendChild(name);
        likeBox.appendChild(likeIcon);
        likeBox.appendChild(likeAmount);
        container.appendChild(imgContainer);
        container.appendChild(likeBox);
        container.appendChild(button);
        containerJS.appendChild(container);
    });
    mainContainer.appendChild(containerJS);
}

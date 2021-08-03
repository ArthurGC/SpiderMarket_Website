export function showpopUp (event) {
    if (event.target.classList.contains("button")) {
        let id = event.target.dataset.id
        let mainGrid = getDataLocalStorage();
        let element = mainGrid[id];
        let image = document.querySelector(".image");
        let title = document.querySelector(".title");
        let paragraph = document.querySelector(".par");
        image.setAttribute("src", `${element.show.image.original}`);
        title.textContent = `${element.show.name}`; 
        paragraph.textContent = `${element.show.summary}`; 

    }
}
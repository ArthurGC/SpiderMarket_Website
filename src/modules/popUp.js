import { getDataLocalStorage} from "./store.js"

export function showpopUp (event) {
    document.querySelector("section").style.display = "block";
    if (event.target.classList.contains("button")) {
        let id = event.target.dataset.id
        let mainGrid = getDataLocalStorage();
        let element = mainGrid[id];
        let image = document.querySelector(".image");
        let title = document.querySelector(".title");
        let paragraph = document.querySelector(".par");
        image.setAttribute("src", `${element.show.image.original}`);
        title.textContent = `${element.show.name}`; 
        paragraph.innerHTML = `${element.show.summary}`; 

    }
}
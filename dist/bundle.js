/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/createGrid.js":
/*!***********************************!*\
  !*** ./src/modules/createGrid.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGrid": () => (/* binding */ createGrid)
/* harmony export */ });
const createGrid = (arrayComics) => {
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


/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComics": () => (/* binding */ getComics)
/* harmony export */ });
let dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
const getComics = async () => {
    const response = await fetch(dataURL);  
    const comics = await response.json();
    return comics;
};


/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDataLocalStorage": () => (/* binding */ getDataLocalStorage),
/* harmony export */   "setDataLocalStorage": () => (/* binding */ setDataLocalStorage)
/* harmony export */ });
const getDataLocalStorage = () => JSON.parse(localStorage.getItem('APIData'));

const setDataLocalStorage = (data) => {
  localStorage.setItem('APIData', JSON.stringify(data));
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createGrid.js */ "./src/modules/createGrid.js");
/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getData.js */ "./src/modules/getData.js");
/* harmony import */ var _modules_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/store.js */ "./src/modules/store.js");




window.addEventListener('load', ()=> {
    (0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_1__.getComics)().then( result => {
        result.splice(7,1); 
        (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.setDataLocalStorage)(result);
    })
    let mainGrid = (0,_modules_store_js__WEBPACK_IMPORTED_MODULE_2__.getDataLocalStorage)();
    (0,_modules_createGrid_js__WEBPACK_IMPORTED_MODULE_0__.createGrid)(mainGrid);
})

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jcmVhdGVHcmlkLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsMEJBQTBCO0FBQy9ELDhCQUE4QixnQkFBZ0IsR0FBRyxNQUFNO0FBQ3ZEO0FBQ0E7QUFDQSwrQkFBK0IsTUFBTTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDTztBQUNQLDBDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTE87O0FBRUE7QUFDUDtBQUNBOzs7Ozs7O1VDSkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05xRDtBQUNMO0FBQzhCOztBQUU5RTtBQUNBLElBQUksOERBQVM7QUFDYiwyQjtBQUNBLFFBQVEsc0VBQW1CO0FBQzNCLEtBQUs7QUFDTCxtQkFBbUIsc0VBQW1CO0FBQ3RDLElBQUksa0VBQVU7QUFDZCxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjcmVhdGVHcmlkID0gKGFycmF5Q29taWNzKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lckpTID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gICAgYXJyYXlDb21pY3MuZm9yRWFjaCgoY29taWMsaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxldCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBsaWtlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgbGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIGxldCBsaWtlQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtjb21pYy5zaG93LmltYWdlLm9yaWdpbmFsfWApO1xuICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7Y29taWMuc2hvdy5uYW1lfSAke2luZGV4fWA7XG4gICAgICAgIGxpa2VBbW91bnQudGV4dENvbnRlbnQgPSAwO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICAgICAgICBidXR0b24uZGF0YXNldC5pZCA9IGAke2luZGV4fWA7XG5cbiAgICAgICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgbGlrZUJveC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgbGlrZUJveC5hcHBlbmRDaGlsZChsaWtlSWNvbik7XG4gICAgICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobGlrZUFtb3VudCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdDb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlrZUJveCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBjb250YWluZXJKUy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVySlMpO1xufVxuIiwibGV0IGRhdGFVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zcGlkZXJtYW4nO1xuZXhwb3J0IGNvbnN0IGdldENvbWljcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkwpOyAgXG4gICAgY29uc3QgY29taWNzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBjb21pY3M7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldERhdGFMb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBUElEYXRhJykpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGF0YUxvY2FsU3RvcmFnZSA9IChkYXRhKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBUElEYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlR3JpZCB9IGZyb20gJy4vbW9kdWxlcy9jcmVhdGVHcmlkLmpzJztcbmltcG9ydCB7IGdldENvbWljcyB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhLmpzJ1xuaW1wb3J0IHsgZ2V0RGF0YUxvY2FsU3RvcmFnZSwgc2V0RGF0YUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9zdG9yZS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PiB7XG4gICAgZ2V0Q29taWNzKCkudGhlbiggcmVzdWx0ID0+IHtcbiAgICAgICAgcmVzdWx0LnNwbGljZSg3LDEpOyBcbiAgICAgICAgc2V0RGF0YUxvY2FsU3RvcmFnZShyZXN1bHQpO1xuICAgIH0pXG4gICAgbGV0IG1haW5HcmlkID0gZ2V0RGF0YUxvY2FsU3RvcmFnZSgpO1xuICAgIGNyZWF0ZUdyaWQobWFpbkdyaWQpO1xufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=
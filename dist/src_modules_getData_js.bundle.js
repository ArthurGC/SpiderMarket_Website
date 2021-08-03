(self["webpackChunkApi_webapp_capstone_project"] = self["webpackChunkApi_webapp_capstone_project"] || []).push([["src_modules_getData_js"],{

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFTztBQUNQLDBDO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19tb2R1bGVzX2dldERhdGFfanMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGRhdGFVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zcGlkZXJtYW4nO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29taWNzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZGF0YVVSTCk7ICBcbiAgICBjb25zdCBjb21pY3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGNvbWljcztcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.typekit.net/mry2cbf.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\nheader .logo {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.7vw);\n  font-weight: 500;\n  line-height: 32px;\n  text-decoration: none;\n  color: #fdad00;\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  background: #fdad00;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.8rem 0;\n  padding: 0.4rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  background: blue;\n  color: #fff;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .button:hover {\n  background: #f73c3c;\n  color: #fff;\n}\n\n.overlay .form .list-input .modal-button:hover {\n  background: #fdad00;\n  color: #000;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/styles.scss","webpack://./src/scss/layout/_home.scss","webpack://./src/scss/utilities/_mixins.scss","webpack://./src/scss/layout/_popup.scss","webpack://./src/scss/layout/_transitions.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n","@import url(\"https://use.typekit.net/mry2cbf.css\");\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\nheader .logo {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.7vw);\n  font-weight: 500;\n  line-height: 32px;\n  text-decoration: none;\n  color: #fdad00;\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  background: #fdad00;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.8rem 0;\n  padding: 0.4rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.3rem 0.8rem;\n  text-align: center;\n  cursor: pointer;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  background: blue;\n  color: #fff;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .button:hover {\n  background: #f73c3c;\n  color: #fff;\n}\n\n.overlay .form .list-input .modal-button:hover {\n  background: #fdad00;\n  color: #000;\n}","@use '../utilities' as *;\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n\n  @include flex(row, center, space-between);\n\n  .logo {\n    @include muli-text(24px, 500, 32px, 0.7);\n\n    text-decoration: none;\n    color: rgb(253, 173, 0);\n  }\n\n  .navbar {\n    li {\n      @include muli-text(14px, 500, 24px);\n    }\n  }\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n\n  @include flex(row, center, center);\n\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n\n  .item {\n    min-width: 250px;\n    max-width: 280px;\n\n    .img-container {\n      .img {\n        width: 100%;\n        max-height: 389px;\n      }\n    }\n\n    .like-container {\n      @include flex(row, center, space-between);\n\n      padding: 0.5rem;\n\n      .title {\n        @include muli-text(14px, 500, 24px);\n\n        flex-basis: 75%;\n      }\n\n      .icon-heart {\n        font-size: calc(1rem + 0.2vw);\n        color: red;\n        cursor: pointer;\n      }\n\n      .likes {\n        @include muli-text(14px, 500, 32px);\n      }\n    }\n\n    .button {\n      margin-top: 0.5rem;\n      padding: 0.3rem 0.8rem;\n      text-align: center;\n      cursor: pointer;\n\n      @include muli-text(12px, 500, 24px);\n\n      background: rgb(253, 173, 0);\n      border-radius: 8px;\n      transition: background 0.5s, color 0.5s;\n    }\n  }\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n\n  .text-footer {\n    @include muli-text(12px, 500, 32px);\n  }\n}\n","@mixin muli-text($size, $weight, $height, $increase: 0.3) {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(#{$size} + #{$increase}vw);\n  font-weight: $weight;\n  line-height: $height;\n}\n\n@mixin flex($direction, $align: false, $justify: false) {\n  display: flex;\n  flex-direction: $direction;\n\n  @if $align {\n    align-items: $align;\n  }\n\n  @if $justify {\n    justify-content: $justify;\n  }\n}\n","@use '../utilities' as *;\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n\n  .fa-times {\n    float: right;\n    font-size: calc(2rem + 0.5vw);\n    cursor: pointer;\n  }\n\n  .image-container {\n    margin-inline: auto;\n    min-width: 180px;\n    max-width: 250px;\n\n    .image {\n      width: 100%;\n    }\n  }\n\n  .modal-title {\n    @include muli-text(24px, 700, 24px);\n\n    text-align: center;\n    margin: 1rem 0;\n  }\n\n  .dsc-container {\n    padding: 0 1rem;\n\n    .dsc {\n      text-align: center;\n\n      @include muli-text(16px, 500, 24px);\n    }\n  }\n\n  .comments {\n    text-align: center;\n\n    h3 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .comment {\n      @include muli-text(14px, 500, 24px);\n\n      margin: 0.5rem 0;\n    }\n  }\n\n  .form {\n    text-align: center;\n\n    h4 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .list-input {\n      .form-item {\n        input {\n          @include muli-text(14px, 500, 24px);\n\n          margin: 0.8rem 0;\n          padding: 0.4rem;\n          border-radius: 8px;\n        }\n\n        button {\n          margin-top: 0.5rem;\n          padding: 0.3rem 0.8rem;\n          text-align: center;\n          cursor: pointer;\n\n          @include muli-text(12px, 700, 24px);\n\n          background: blue;\n          color: #fff;\n          border-radius: 8px;\n          transition: background 0.5s, color 0.5s;\n        }\n      }\n    }\n  }\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n\n  @include flex(row, center, center);\n\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba($color: #8c9197, $alpha: 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n","@use '../utilities' as *;\n\n.container {\n  .button:hover {\n    background: rgb(247, 60, 60);\n    color: #fff;\n  }\n}\n\n.overlay {\n  .form {\n    .list-input {\n      .modal-button:hover {\n        background: rgb(253, 173, 0);\n        color: #000;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const involvement = {
    appURL: 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cYQkNTJ9fpeDgpCyZ2kY/comments',
    async createNewApp() {
      const rawResp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const newAppID = await rawResp.text();
  
      return newAppID;
    },
    async createNewComment(commID, commUserName, comm) {
      const rawResp = await fetch(this.appURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: commID,
          username: commUserName,
          comment: comm,
        }),
      });
  
      if (rawResp.status !== 201) {
        throw new Error('Something went wrong when creating the new comment');
      }
    },
    async getComments(itemID) {
      try {
        const rawResp = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cYQkNTJ9fpeDgpCyZ2kY/comments?item_id=${itemID}`);
        const comments = await rawResp.json();
        return comments;
      } catch (error) {
        throw new Error(error);
      }
    },
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvement);

/***/ }),

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
  const containerJS = document.createDocumentFragment();
  const mainContainer = document.querySelector('.container');

  arrayComics.forEach((comic, index) => {
    const container = document.createElement('li');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const likeBox = document.createElement('div');
    const name = document.createElement('p');
    const likeIcon = document.createElement('i');
    const likeAmount = document.createElement('p');
    const button = document.createElement('button');

    container.classList.add('item');
    imgContainer.classList.add('img-container');
    image.classList.add('img');
    image.setAttribute('src', `${comic.show.image.original}`);
    likeBox.classList.add('like-container');
    name.classList.add('title');
    name.textContent = `${comic.show.name} ${index}`;
    likeIcon.classList.add('far', 'fa-heart', 'icon-heart');
    likeIcon.dataset.id = `${index}`;
    likeAmount.classList.add('likes');
    likeAmount.textContent = 0;
    likeAmount.dataset.id = `${index}`;
    button.textContent = 'Comments';
    button.dataset.id = `${index}`;
    button.classList.add('button');
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
};


/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });
/* harmony import */ var _createGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createGrid.js */ "./src/modules/createGrid.js");
/* harmony import */ var _itemCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemCounter.js */ "./src/modules/itemCounter.js");
/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like.js */ "./src/modules/like.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");





const dataURL = 'https://api.tvmaze.com/search/shows?q=spiderman';
const getDrawComics = async () => {
  const response = await fetch(dataURL);
  const comics = await response.json();
  return comics;
};

const getData = () => {
  getDrawComics().then((result) => {
    result.splice(7, 1);
    (0,_store_js__WEBPACK_IMPORTED_MODULE_3__.setDataLocalStorage)(result);
    (0,_createGrid_js__WEBPACK_IMPORTED_MODULE_0__.createGrid)(result);
    (0,_itemCounter_js__WEBPACK_IMPORTED_MODULE_1__.addCounterDOM)();
    (0,_like_js__WEBPACK_IMPORTED_MODULE_2__.getListLikesAPI)();
  });
};


/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCounterDOM": () => (/* binding */ addCounterDOM)
/* harmony export */ });
const itemCounter = () => {
  const items = [...document.querySelector('.container').children];
  return items.length;
};

const addCounterDOM = () => {
  const counterDOM = document.querySelector('.items-counter');
  counterDOM.innerHTML = `<b>(${itemCounter()})<b>`;
};

// module.exports = itemCounter;


/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "getListLikesAPI": () => (/* binding */ getListLikesAPI),
/* harmony export */   "sendLikes": () => (/* binding */ sendLikes)
/* harmony export */ });
const createURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/likes/';

const createApp = async () => {
  const response = await fetch(createURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      name: 'newAppArthur',
    }),
  });
  const status = await response.text();
  return status;
};

//   1skhHeMuaX5lQlDsoElJ
const createLikes = async (id) => {
  const response = await fetch(likeURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${id}`,
    }),
  });
  const status = await response;
  return status;
};

const getLikes = async () => {
  const response = await fetch(likeURL);

  const status = await response.json();
  return status;
};

const distributeLikes = (likesListAPI) => {
  const likeCounter = [...document.querySelectorAll('.likes')];
  likesListAPI.forEach((object) => {
    const id = parseInt(object.item_id, 10);
    likeCounter[id].textContent = object.likes;
  });
};

const getListLikesAPI = () => {
  getLikes().then((result) => {
    distributeLikes(result);
  });
};

const sendLikes = (event) => {
  const isLikeBtn = event.target.classList.contains('icon-heart');
  if (isLikeBtn) {
    const { id } = event.target.dataset;
    createLikes(id).then((result) => {
      getListLikesAPI();
      return result;
    });
  }
};


/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillPopUp": () => (/* binding */ fillPopUp),
/* harmony export */   "closePopUp": () => (/* binding */ closePopUp),
/* harmony export */   "commentsPopUp": () => (/* binding */ commentsPopUp)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");



const image = document.querySelector('.image');
const title = document.querySelector('.modal-title');
const paragraph = document.querySelector('.dsc');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const main = document.querySelector('body');

const openPopUp = () => {
  overlay.classList.add('active');
  modal.classList.add('active');
  main.style.overflow = 'hidden';
};

const fillPopUp = (event) => {
  const isButton = event.target.classList.contains('button');
  if (isButton) {
    openPopUp();
    const { id } = event.target.dataset;
    const mainGrid = (0,_store_js__WEBPACK_IMPORTED_MODULE_0__.getDataLocalStorage)();
    const element = mainGrid[id];
    image.setAttribute('src', `${element.show.image.original}`);
    title.textContent = `${element.show.name}`;
    paragraph.innerHTML = `${element.show.summary}`;
    commentsPopUp(id);
  }
};

const closePopUp = () => {
  overlay.classList.remove('active');
  modal.classList.remove('active');
  main.style.overflow = '';
};

const commentsPopUp = (id) => {
 
  _comments_js__WEBPACK_IMPORTED_MODULE_1__.default.getComments(id)
    .then((comments) => {
      if (comments.length > 0) {

        const popUpCommentsTitle = document.createElement('h3');
        popUpCommentsTitle.className = 'comments-title';
        popUpCommentsTitle.textContent = 'Comments';
        popUpComments.appendChild(popUpCommentsTitle);

        const popUpCommentsContainer = document.createElement('ul');
        popUpCommentsContainer.id = 'comments-list';
        popUpCommentsContainer.className = 'comments-list';
        popUpComments.appendChild(popUpCommentsContainer);

        for (let i = 0; i < comments.length; i += 1) {
          comments[i].creation_date = comments[i].creation_date.replace('-', '/').replace('-', '/');
          const listItem = document.createElement('li');
          listItem.className = 'comm-list-item';

          const displayComment = document.createElement('p');
          displayComment.className = 'comment';
          displayComment.textContent = `${comments[i].creation_date} ${comments[i].username}: ${comments[i].comment}`;
          listItem.appendChild(displayComment);
          popUpCommentsContainer.appendChild(listItem);
        }

        const divComments = document.querySelector(".commments");
        divComments.appendChild(popUpCommentsTitle);
        divComments.appendChild(popUpCommentsContainer);
      }
    })

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _modules_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/getData.js */ "./src/modules/getData.js");
/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/like.js */ "./src/modules/like.js");
/* harmony import */ var _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");




// import { commentsPopUp } from './modules/comments.js'

const container = document.querySelector('.container');
const close = document.querySelector('.close');

window.addEventListener('load', () => {
  (0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
});

container.addEventListener('click', (e) => {
  (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__.fillPopUp)(e);
  (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.sendLikes)(e);
});

close.addEventListener('click', _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__.closePopUp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndl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TSxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFlBQVksVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxhQUFhLFFBQVEsTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksWUFBWSxhQUFhLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsYUFBYSxlQUFlLGVBQWUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFlBQVksV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsUUFBUSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFlBQVksTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FB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O0FBQ0E7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0Q7QUFDYTtBQUNwQztBQUN2QixXQUFXLGdCQUFnQjs7QUFFM0I7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNERBQU87QUFDVCxDQUFDOztBQUVEO0FBQ0EsRUFBRSw0REFBUztBQUNYLEVBQUUsMkRBQVM7QUFDWCxDQUFDOztBQUVELGdDQUFnQyx5REFBVSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VzZS50eXBla2l0Lm5ldC9tcnkyY2JmLmNzcyk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDQuNXZ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaGVhZGVyIC5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjd2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZkYWQwMDtcXG59XFxuaGVhZGVyIC5uYXZiYXIgbGkge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyAydncpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IGNhbGMoMXJlbSArIDN2dyk7XFxufVxcbi5jb250YWluZXIgLml0ZW0ge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIG1heC13aWR0aDogMjgwcHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmltZy1jb250YWluZXIgLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDM4OXB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC50aXRsZSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZmxleC1iYXNpczogNzUlO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAuaWNvbi1oZWFydCB7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMnZ3KTtcXG4gIGNvbG9yOiByZWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC5saWtlcyB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmRhZDAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcbn1cXG5mb290ZXIgLnRleHQtZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogY2FsYygxLjVyZW0gKyAwLjN2dyk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggKyAzMHZ3KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzLCBvcGFjaXR5IDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgei1pbmRleDogMzAwO1xcbn1cXG4ubW9kYWwgLmZhLXRpbWVzIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMC41dncpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWwgLmltYWdlLWNvbnRhaW5lciB7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcbi5tb2RhbCAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuZHNjLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcbi5tb2RhbCAuZHNjLWNvbnRhaW5lciAuZHNjIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5tb2RhbCAuY29tbWVudHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5jb21tZW50cyAuY29tbWVudCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsIC5mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5mb3JtIGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMC44cmVtIDA7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5tb2RhbCAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgdHJhbnNmb3JtIDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNDAsIDE0NSwgMTUxLCAwLjUpO1xcbiAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmNvbnRhaW5lciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmNzNjM2M7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXkgLmZvcm0gLmxpc3QtaW5wdXQgLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmRhZDAwO1xcbiAgY29sb3I6ICMwMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3V0aWxpdGllcy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fcG9wdXAuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L190cmFuc2l0aW9ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBQ2JBO0VBQ0UsZ0RBQUE7RUNNQSxhQUFBO0VBQ0EsbUJETGM7RUNRWixtQkRSaUI7RUNZakIsOEJEWnlCO0FEa0I3QjtBQ2hCRTtFQ05BLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCREkyQjtFQ0gzQixpQkRHZ0M7RUFFOUIscUJBQUE7RUFDQSxjQUFBO0FEcUJKO0FDakJJO0VDZEYsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JEWTZCO0VDWDdCLGlCRFdrQztBRHVCcEM7O0FDbEJBO0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VDZkEsYUFBQTtFQUNBLG1CRGdCYztF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RHRHWixtQkNzR2lCO0VEbEdqQix1QkNrR3lCO0VBRTNCLG1EQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FIb0hGOztBR2pIQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUhvSEY7O0FJL09FO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FKa1BKOztBSTNPTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBSjhPUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L21yeTJjYmYuY3NzXFxcIik7XFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5oZWFkZXIgLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMjRweCArIDAuN3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmRhZDAwO1xcbn1cXG5oZWFkZXIgLm5hdmJhciBsaSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDJ2dyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogY2FsYygxcmVtICsgM3Z3KTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAuaW1nLWNvbnRhaW5lciAuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMzg5cHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC5pY29uLWhlYXJ0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLmxpa2VzIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQ6ICNmZGFkMDA7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxufVxcbmZvb3RlciAudGV4dC1mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiBjYWxjKDEuNXJlbSArIDAuM3Z3KTtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCArIDMwdncpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXMsIHZpc2liaWxpdHkgMHM7XFxuICB6LWluZGV4OiAzMDA7XFxufVxcbi5tb2RhbCAuZmEtdGltZXMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuLm1vZGFsIC5pbWFnZS1jb250YWluZXIgLmltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLm1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5kc2MtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLm1vZGFsIC5kc2MtY29udGFpbmVyIC5kc2Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLm1vZGFsIC5jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY29tbWVudHMgaDMge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIC5jb21tZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4ubW9kYWwgLmZvcm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmZvcm0gaDQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBpbnB1dCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogYmx1ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB0cmFuc2Zvcm0gMXMsIHZpc2liaWxpdHkgMHM7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE0MCwgMTQ1LCAxNTEsIDAuNSk7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uY29udGFpbmVyIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Y3M2MzYztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheSAuZm9ybSAubGlzdC1pbnB1dCAubW9kYWwtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmZGFkMDA7XFxuICBjb2xvcjogIzAwMDtcXG59XCIsXCJAdXNlICcuLi91dGlsaXRpZXMnIGFzICo7XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDQuNXZ3KTtcXG5cXG4gIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4pO1xcblxcbiAgLmxvZ28ge1xcbiAgICBAaW5jbHVkZSBtdWxpLXRleHQoMjRweCwgNTAwLCAzMnB4LCAwLjcpO1xcblxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMjUzLCAxNzMsIDApO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIGxpIHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTRweCwgNTAwLCAyNHB4KTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDJ2dyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuXFxuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiBjYWxjKDFyZW0gKyAzdncpO1xcblxcbiAgLml0ZW0ge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcblxcbiAgICAuaW1nLWNvbnRhaW5lciB7XFxuICAgICAgLmltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDM4OXB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubGlrZS1jb250YWluZXIge1xcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4pO1xcblxcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMjRweCk7XFxuXFxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgICAgfVxcblxcbiAgICAgIC5pY29uLWhlYXJ0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4ydncpO1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLmxpa2VzIHtcXG4gICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDMycHgpO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgICAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxMnB4LCA1MDAsIDI0cHgpO1xcblxcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNTMsIDE3MywgMCk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcblxcbiAgLnRleHQtZm9vdGVyIHtcXG4gICAgQGluY2x1ZGUgbXVsaS10ZXh0KDEycHgsIDUwMCwgMzJweCk7XFxuICB9XFxufVxcblwiLFwiQG1peGluIG11bGktdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGluY3JlYXNlOiAwLjMpIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKCN7JHNpemV9ICsgI3skaW5jcmVhc2V9dncpO1xcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXG59XFxuXFxuQG1peGluIGZsZXgoJGRpcmVjdGlvbiwgJGFsaWduOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuXFxuICBAaWYgJGFsaWduIHtcXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcXG4gIH1cXG5cXG4gIEBpZiAkanVzdGlmeSB7XFxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxuICB9XFxufVxcblwiLFwiQHVzZSAnLi4vdXRpbGl0aWVzJyBhcyAqO1xcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogY2FsYygxLjVyZW0gKyAwLjN2dyk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggKyAzMHZ3KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzLCBvcGFjaXR5IDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgei1pbmRleDogMzAwO1xcblxcbiAgLmZhLXRpbWVzIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDAuNXZ3KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmltYWdlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxuICAgIG1heC13aWR0aDogMjUwcHg7XFxuXFxuICAgIC5pbWFnZSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb2RhbC10aXRsZSB7XFxuICAgIEBpbmNsdWRlIG11bGktdGV4dCgyNHB4LCA3MDAsIDI0cHgpO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgfVxcblxcbiAgLmRzYy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAwIDFyZW07XFxuXFxuICAgIC5kc2Mge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTZweCwgNTAwLCAyNHB4KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmNvbW1lbnRzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBoMyB7XFxuICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE2cHgsIDcwMCwgMjRweCk7XFxuXFxuICAgICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIH1cXG5cXG4gICAgLmNvbW1lbnQge1xcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcblxcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5mb3JtIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBoNCB7XFxuICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE2cHgsIDcwMCwgMjRweCk7XFxuXFxuICAgICAgbWFyZ2luOiAxcmVtIDA7XFxuICAgIH1cXG5cXG4gICAgLmxpc3QtaW5wdXQge1xcbiAgICAgIC5mb3JtLWl0ZW0ge1xcbiAgICAgICAgaW5wdXQge1xcbiAgICAgICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTRweCwgNTAwLCAyNHB4KTtcXG5cXG4gICAgICAgICAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gICAgICAgICAgcGFkZGluZzogMC40cmVtO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTJweCwgNzAwLCAyNHB4KTtcXG5cXG4gICAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcXG4gICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHRyYW5zZm9ybSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjOGM5MTk3LCAkYWxwaGE6IDAuNSk7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cIixcIkB1c2UgJy4uL3V0aWxpdGllcycgYXMgKjtcXG5cXG4uY29udGFpbmVyIHtcXG4gIC5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCA2MCwgNjApO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgLmZvcm0ge1xcbiAgICAubGlzdC1pbnB1dCB7XFxuICAgICAgLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAxNzMsIDApO1xcbiAgICAgICAgY29sb3I6ICMwMDA7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbnZvbHZlbWVudCA9IHtcbiAgICBhcHBVUkw6ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9jWVFrTlRKOWZwZURncEN5WjJrWS9jb21tZW50cycsXG4gICAgYXN5bmMgY3JlYXRlTmV3QXBwKCkge1xuICAgICAgY29uc3QgcmF3UmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGNvbnN0IG5ld0FwcElEID0gYXdhaXQgcmF3UmVzcC50ZXh0KCk7XG4gIFxuICAgICAgcmV0dXJuIG5ld0FwcElEO1xuICAgIH0sXG4gICAgYXN5bmMgY3JlYXRlTmV3Q29tbWVudChjb21tSUQsIGNvbW1Vc2VyTmFtZSwgY29tbSkge1xuICAgICAgY29uc3QgcmF3UmVzcCA9IGF3YWl0IGZldGNoKHRoaXMuYXBwVVJMLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIGl0ZW1faWQ6IGNvbW1JRCxcbiAgICAgICAgICB1c2VybmFtZTogY29tbVVzZXJOYW1lLFxuICAgICAgICAgIGNvbW1lbnQ6IGNvbW0sXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKHJhd1Jlc3Auc3RhdHVzICE9PSAyMDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgd2VudCB3cm9uZyB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgY29tbWVudCcpO1xuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZ2V0Q29tbWVudHMoaXRlbUlEKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByYXdSZXNwID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL2NZUWtOVEo5ZnBlRGdwQ3laMmtZL2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSUR9YCk7XG4gICAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmF3UmVzcC5qc29uKCk7XG4gICAgICAgIHJldHVybiBjb21tZW50cztcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBpbnZvbHZlbWVudDsiLCJleHBvcnQgY29uc3QgY3JlYXRlR3JpZCA9IChhcnJheUNvbWljcykgPT4ge1xuICBjb25zdCBjb250YWluZXJKUyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICBhcnJheUNvbWljcy5mb3JFYWNoKChjb21pYywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgbGlrZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgbGlrZUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250YWluZXInKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2NvbWljLnNob3cuaW1hZ2Uub3JpZ2luYWx9YCk7XG4gICAgbGlrZUJveC5jbGFzc0xpc3QuYWRkKCdsaWtlLWNvbnRhaW5lcicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7Y29taWMuc2hvdy5uYW1lfSAke2luZGV4fWA7XG4gICAgbGlrZUljb24uY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLWhlYXJ0JywgJ2ljb24taGVhcnQnKTtcbiAgICBsaWtlSWNvbi5kYXRhc2V0LmlkID0gYCR7aW5kZXh9YDtcbiAgICBsaWtlQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2xpa2VzJyk7XG4gICAgbGlrZUFtb3VudC50ZXh0Q29udGVudCA9IDA7XG4gICAgbGlrZUFtb3VudC5kYXRhc2V0LmlkID0gYCR7aW5kZXh9YDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gYCR7aW5kZXh9YDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBsaWtlQm94LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobGlrZUljb24pO1xuICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobGlrZUFtb3VudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpa2VCb3gpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGNvbnRhaW5lckpTLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0pO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckpTKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHcmlkIH0gZnJvbSAnLi9jcmVhdGVHcmlkLmpzJztcbmltcG9ydCB7IGFkZENvdW50ZXJET00gfSBmcm9tICcuL2l0ZW1Db3VudGVyLmpzJztcbmltcG9ydCB7IGdldExpc3RMaWtlc0FQSSB9IGZyb20gJy4vbGlrZS5qcyc7XG5pbXBvcnQgeyBzZXREYXRhTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yZS5qcyc7XG5cbmNvbnN0IGRhdGFVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zcGlkZXJtYW4nO1xuY29uc3QgZ2V0RHJhd0NvbWljcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhVVJMKTtcbiAgY29uc3QgY29taWNzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gY29taWNzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gIGdldERyYXdDb21pY3MoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICByZXN1bHQuc3BsaWNlKDcsIDEpO1xuICAgIHNldERhdGFMb2NhbFN0b3JhZ2UocmVzdWx0KTtcbiAgICBjcmVhdGVHcmlkKHJlc3VsdCk7XG4gICAgYWRkQ291bnRlckRPTSgpO1xuICAgIGdldExpc3RMaWtlc0FQSSgpO1xuICB9KTtcbn07XG4iLCJjb25zdCBpdGVtQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmNoaWxkcmVuXTtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDb3VudGVyRE9NID0gKCkgPT4ge1xuICBjb25zdCBjb3VudGVyRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWNvdW50ZXInKTtcbiAgY291bnRlckRPTS5pbm5lckhUTUwgPSBgPGI+KCR7aXRlbUNvdW50ZXIoKX0pPGI+YDtcbn07XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gaXRlbUNvdW50ZXI7XG4iLCJjb25zdCBjcmVhdGVVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGxpa2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXNraEhlTXVhWDVsUWxEc29FbEovbGlrZXMvJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjcmVhdGVVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogJ25ld0FwcEFydGh1cicsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCBzdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBzdGF0dXM7XG59O1xuXG4vLyAgIDFza2hIZU11YVg1bFFsRHNvRWxKXG5jb25zdCBjcmVhdGVMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7aWR9YCxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGlrZVVSTCk7XG5cbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuY29uc3QgZGlzdHJpYnV0ZUxpa2VzID0gKGxpa2VzTGlzdEFQSSkgPT4ge1xuICBjb25zdCBsaWtlQ291bnRlciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKV07XG4gIGxpa2VzTGlzdEFQSS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KG9iamVjdC5pdGVtX2lkLCAxMCk7XG4gICAgbGlrZUNvdW50ZXJbaWRdLnRleHRDb250ZW50ID0gb2JqZWN0Lmxpa2VzO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMaXN0TGlrZXNBUEkgPSAoKSA9PiB7XG4gIGdldExpa2VzKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgZGlzdHJpYnV0ZUxpa2VzKHJlc3VsdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRMaWtlcyA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0xpa2VCdG4gPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWhlYXJ0Jyk7XG4gIGlmIChpc0xpa2VCdG4pIHtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICBjcmVhdGVMaWtlcyhpZCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBnZXRMaXN0TGlrZXNBUEkoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBnZXREYXRhTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yZS5qcyc7XG5pbXBvcnQgaW52b2x2ZW1lbnQgZnJvbSAnLi9jb21tZW50cy5qcyc7XG5cbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aXRsZScpO1xuY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRzYycpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3Qgb3BlblBvcFVwID0gKCkgPT4ge1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgbWFpbi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbGxQb3BVcCA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0J1dHRvbiA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpO1xuICBpZiAoaXNCdXR0b24pIHtcbiAgICBvcGVuUG9wVXAoKTtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCBtYWluR3JpZCA9IGdldERhdGFMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gbWFpbkdyaWRbaWRdO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZWxlbWVudC5zaG93LmltYWdlLm9yaWdpbmFsfWApO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5zaG93Lm5hbWV9YDtcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5zaG93LnN1bW1hcnl9YDtcbiAgICBjb21tZW50c1BvcFVwKGlkKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUG9wVXAgPSAoKSA9PiB7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtYWluLnN0eWxlLm92ZXJmbG93ID0gJyc7XG59O1xuXG5leHBvcnQgY29uc3QgY29tbWVudHNQb3BVcCA9IChpZCkgPT4ge1xuIFxuICBpbnZvbHZlbWVudC5nZXRDb21tZW50cyhpZClcbiAgICAudGhlbigoY29tbWVudHMpID0+IHtcbiAgICAgIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgY29uc3QgcG9wVXBDb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgcG9wVXBDb21tZW50c1RpdGxlLmNsYXNzTmFtZSA9ICdjb21tZW50cy10aXRsZSc7XG4gICAgICAgIHBvcFVwQ29tbWVudHNUaXRsZS50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gICAgICAgIHBvcFVwQ29tbWVudHMuYXBwZW5kQ2hpbGQocG9wVXBDb21tZW50c1RpdGxlKTtcblxuICAgICAgICBjb25zdCBwb3BVcENvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgcG9wVXBDb21tZW50c0NvbnRhaW5lci5pZCA9ICdjb21tZW50cy1saXN0JztcbiAgICAgICAgcG9wVXBDb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudHMtbGlzdCc7XG4gICAgICAgIHBvcFVwQ29tbWVudHMuYXBwZW5kQ2hpbGQocG9wVXBDb21tZW50c0NvbnRhaW5lcik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGUgPSBjb21tZW50c1tpXS5jcmVhdGlvbl9kYXRlLnJlcGxhY2UoJy0nLCAnLycpLnJlcGxhY2UoJy0nLCAnLycpO1xuICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnY29tbS1saXN0LWl0ZW0nO1xuXG4gICAgICAgICAgY29uc3QgZGlzcGxheUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgZGlzcGxheUNvbW1lbnQuY2xhc3NOYW1lID0gJ2NvbW1lbnQnO1xuICAgICAgICAgIGRpc3BsYXlDb21tZW50LnRleHRDb250ZW50ID0gYCR7Y29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50c1tpXS51c2VybmFtZX06ICR7Y29tbWVudHNbaV0uY29tbWVudH1gO1xuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlDb21tZW50KTtcbiAgICAgICAgICBwb3BVcENvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRpdkNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21tbWVudHNcIik7XG4gICAgICAgIGRpdkNvbW1lbnRzLmFwcGVuZENoaWxkKHBvcFVwQ29tbWVudHNUaXRsZSk7XG4gICAgICAgIGRpdkNvbW1lbnRzLmFwcGVuZENoaWxkKHBvcFVwQ29tbWVudHNDb250YWluZXIpO1xuICAgICAgfVxuICAgIH0pXG5cbn07XG5cbiIsImV4cG9ydCBjb25zdCBnZXREYXRhTG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVBJRGF0YScpKTtcblxuZXhwb3J0IGNvbnN0IHNldERhdGFMb2NhbFN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQVBJRGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhLmpzJztcbmltcG9ydCB7IHNlbmRMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9saWtlLmpzJztcbmltcG9ydCB7IGZpbGxQb3BVcCwgY2xvc2VQb3BVcCB9IGZyb20gJy4vbW9kdWxlcy9wb3BVcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuLy8gaW1wb3J0IHsgY29tbWVudHNQb3BVcCB9IGZyb20gJy4vbW9kdWxlcy9jb21tZW50cy5qcydcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGdldERhdGEoKTtcbn0pO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBmaWxsUG9wVXAoZSk7XG4gIHNlbmRMaWtlcyhlKTtcbn0pO1xuXG5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wVXApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
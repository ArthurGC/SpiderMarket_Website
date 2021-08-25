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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 30px solid #2c2a74;\n}\nheader .logo {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 1vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #e44d16;\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.4vw);\n  font-weight: 500;\n  line-height: 24px;\n  color: #2c2a74;\n}\n\n.main-title {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(20px + 0.7vw);\n  font-weight: 800;\n  line-height: 24px;\n  color: #2c2a74;\n  text-align: center;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container {\n  transition: transform 0.5s;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  margin-top: 2rem;\n  background: #2c2a74;\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n  color: #fff;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n  transition: color 0.5s;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item .inputComment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n  resize: none;\n  border: 2px solid black;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .item .img-container:hover {\n  transform: scale(0.95);\n}\n.container .like-container .icon-heart:hover {\n  transform: scale(1.3);\n}\n.container .button:hover {\n  background: #e44d16;\n  color: #fff;\n}\n\n.overlay .form .list-input .form-item input:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .form-item .inputComment:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .modal-button:hover {\n  background: #e44d16;\n  color: #fff;\n}\n\n.modal .fa-times:hover {\n  color: #e44d16;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/styles.scss","webpack://./src/scss/layout/_home.scss","webpack://./src/scss/utilities/_mixins.scss","webpack://./src/scss/layout/_popup.scss","webpack://./src/scss/layout/_transitions.scss"],"names":[],"mappings":"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","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n","@import url(\"https://use.typekit.net/mry2cbf.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700;800&display=swap\");\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 30px solid #2c2a74;\n}\nheader .logo {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 1vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #e44d16;\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.4vw);\n  font-weight: 500;\n  line-height: 24px;\n  color: #2c2a74;\n}\n\n.main-title {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(20px + 0.7vw);\n  font-weight: 800;\n  line-height: 24px;\n  color: #2c2a74;\n  text-align: center;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container {\n  transition: transform 0.5s;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  margin-top: 2rem;\n  background: #2c2a74;\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n  color: #fff;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n  transition: color 0.5s;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item .inputComment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n  resize: none;\n  border: 2px solid black;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .item .img-container:hover {\n  transform: scale(0.95);\n}\n.container .like-container .icon-heart:hover {\n  transform: scale(1.3);\n}\n.container .button:hover {\n  background: #e44d16;\n  color: #fff;\n}\n\n.overlay .form .list-input .form-item input:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .form-item .inputComment:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .modal-button:hover {\n  background: #e44d16;\n  color: #fff;\n}\n\n.modal .fa-times:hover {\n  color: #e44d16;\n}","@use '../utilities' as *;\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n\n  @include flex(row, center, space-between);\n\n  border-bottom: 30px solid rgb(44, 42, 116);\n\n  .logo {\n    @include open-text(14px, 800, 24px, 1);\n\n    text-transform: uppercase;\n    text-decoration: none;\n    color: #e44d16;\n  }\n\n  .navbar {\n    li {\n      @include muli-text(12px, 500, 24px, 0.4);\n\n      color: rgb(44, 42, 116);\n    }\n  }\n}\n\n.main-title {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n\n  @include muli-text(20px, 800, 24px, 0.7);\n\n  color: rgb(44, 42, 116);\n  text-align: center;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n\n  @include flex(row, center, center);\n\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n\n  .item {\n    min-width: 250px;\n    max-width: 280px;\n\n    .img-container {\n      transition: transform 0.5s;\n\n      .img {\n        width: 100%;\n        max-height: 389px;\n      }\n    }\n\n    .like-container {\n      @include flex(row, center, space-between);\n\n      padding: 0.5rem;\n\n      .title {\n        @include muli-text(14px, 500, 24px);\n\n        flex-basis: 75%;\n      }\n\n      .icon-heart {\n        font-size: calc(1rem + 0.2vw);\n        color: red;\n        cursor: pointer;\n        transition: transform 0.5s;\n      }\n\n      .likes {\n        @include muli-text(14px, 500, 32px);\n      }\n    }\n\n    .button {\n      margin-top: 0.5rem;\n      padding: 0.5rem 0.8rem 0.3rem;\n      text-align: center;\n      cursor: pointer;\n      border: none;\n\n      @include muli-text(12px, 800, 24px);\n\n      text-transform: uppercase;\n      color: #fff;\n      background: rgb(44, 42, 116);\n      border-radius: 8px;\n      transition: background 0.5s, color 0.5s;\n    }\n  }\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  margin-top: 2rem;\n  background: rgb(44, 42, 116);\n\n  .text-footer {\n    @include muli-text(12px, 500, 32px);\n\n    color: #fff;\n  }\n}\n","@mixin muli-text($size, $weight, $height, $increase: 0.3) {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(#{$size} + #{$increase}vw);\n  font-weight: $weight;\n  line-height: $height;\n}\n\n@mixin open-text($size, $weight, $height, $increase: 0.3) {\n  font-family: 'Open Sans', sans-serif;\n  font-style: normal;\n  font-size: calc(#{$size} + #{$increase}vw);\n  font-weight: $weight;\n  line-height: $height;\n}\n\n@mixin flex($direction, $align: false, $justify: false) {\n  display: flex;\n  flex-direction: $direction;\n\n  @if $align {\n    align-items: $align;\n  }\n\n  @if $justify {\n    justify-content: $justify;\n  }\n}\n","@use '../utilities' as *;\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n\n  .fa-times {\n    float: right;\n    font-size: calc(2rem + 0.5vw);\n    cursor: pointer;\n    transition: color 0.5s;\n  }\n\n  .image-container {\n    margin-inline: auto;\n    min-width: 180px;\n    max-width: 250px;\n\n    .image {\n      width: 100%;\n    }\n  }\n\n  .modal-title {\n    @include muli-text(24px, 700, 24px);\n\n    text-align: center;\n    margin: 1rem 0;\n  }\n\n  .dsc-container {\n    padding: 0 1rem;\n\n    .dsc {\n      text-align: center;\n\n      @include muli-text(16px, 500, 24px);\n    }\n  }\n\n  .comments {\n    text-align: center;\n\n    h3 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .comment {\n      @include muli-text(14px, 500, 24px);\n\n      margin: 0.5rem 0;\n    }\n  }\n\n  .form {\n    text-align: center;\n\n    h4 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .list-input {\n      .form-item {\n        input {\n          @include muli-text(14px, 500, 24px);\n\n          transition: border 0.5s;\n          margin: 0.8rem 0;\n          padding: 0.4rem 1rem;\n          border-radius: 8px;\n        }\n\n        .inputComment {\n          @include muli-text(14px, 500, 24px);\n\n          transition: border 0.5s;\n          margin: 0.8rem 0;\n          padding: 0.4rem 1rem;\n          border-radius: 8px;\n          resize: none;\n          border: 2px solid black;\n        }\n\n        button {\n          margin-top: 0.5rem;\n          padding: 0.5rem 0.8rem 0.3rem;\n          text-align: center;\n          cursor: pointer;\n          border: none;\n\n          @include muli-text(12px, 700, 24px);\n\n          text-transform: uppercase;\n          color: #fff;\n          background: rgb(44, 42, 116);\n          border-radius: 8px;\n          transition: background 0.5s, color 0.5s;\n        }\n      }\n    }\n  }\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n\n  @include flex(row, center, center);\n\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba($color: #8c9197, $alpha: 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n","@use '../utilities' as *;\n\n.container {\n  .item {\n    .img-container:hover {\n      transform: scale(0.95);\n    }\n  }\n\n  .like-container {\n    .icon-heart:hover {\n      transform: scale(1.3);\n    }\n  }\n\n  .button:hover {\n    background: #e44d16;\n    color: #fff;\n  }\n}\n\n.overlay {\n  .form {\n    .list-input {\n      .form-item {\n        input:focus {\n          border: 5px solid rgb(44, 42, 116);\n        }\n\n        .inputComment:focus {\n          border: 5px solid rgb(44, 42, 116);\n        }\n      }\n\n      .modal-button:hover {\n        background: #e44d16;\n        color: #fff;\n      }\n    }\n  }\n}\n\n.modal {\n  .fa-times:hover {\n    color: #e44d16;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCounterCommmentDOM": () => (/* binding */ addCounterCommmentDOM),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounterComments = () => {
  const items = [...document.querySelector('.comments-list').children];
  return items.length;
};

const addCounterCommmentDOM = () => {
  const counterDOM = document.querySelector('.counter');
  counterDOM.innerHTML = `<b>(${itemCounterComments()})<b>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounterComments);

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "createNewComment": () => (/* binding */ createNewComment)
/* harmony export */ });
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");


const postURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI3xf0gsfRF6W0oy4pU3/comments';

const getComments = async (itemID) => {
  const getURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI3xf0gsfRF6W0oy4pU3/comments?item_id=${itemID}`;
  const rawResp = await fetch(getURL);
  const comments = await rawResp.json();
  return comments;
};

const createNewComment = async (commID, commUserName, comm) => {
  const rawResp = await fetch(postURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${commID}`,
      username: `${commUserName}`,
      comment: `${comm}`,
    }),
  });

  getComments(commID)
    .then((comments) => {
      const divComments = document.querySelector('.comments');
      divComments.innerHTML = '';
      if (comments.length > 0) {
        const popUpCommentsTitle = document.createElement('h3');
        popUpCommentsTitle.className = 'comments-title';
        popUpCommentsTitle.innerHTML = 'Comments <span class="counter"></span>';

        const popUpCommentsContainer = document.createElement('ul');
        popUpCommentsContainer.id = 'comments-list';
        popUpCommentsContainer.className = 'comments-list';

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

        divComments.appendChild(popUpCommentsTitle);
        divComments.appendChild(popUpCommentsContainer);
        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__.addCounterCommmentDOM)();
      }
    });

  const status = await rawResp;
  return status;
};


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
/* harmony export */   "addCounterDOM": () => (/* binding */ addCounterDOM),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounter = () => {
  const items = [...document.querySelector('.container').children];
  return items.length;
};

const addCounterDOM = () => {
  const counterDOM = document.querySelector('.items-counter');
  counterDOM.innerHTML = `<b>(${itemCounter()})<b>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);


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
const likeURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/EI3xf0gsfRF6W0oy4pU3/likes/';

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
/* harmony export */   "closePopUp": () => (/* binding */ closePopUp)
/* harmony export */ });
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ "./src/modules/store.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");




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

const commentsPopUp = (id) => {
  (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(id)
    .then((comments) => {
      const divComments = document.querySelector('.comments');
      divComments.innerHTML = '';
      if (comments.length > 0) {
        const popUpCommentsTitle = document.createElement('h3');
        popUpCommentsTitle.className = 'comments-title';
        popUpCommentsTitle.innerHTML = 'Comments <span class="counter">12</span>';

        const popUpCommentsContainer = document.createElement('ul');
        popUpCommentsContainer.id = 'comments-list';
        popUpCommentsContainer.className = 'comments-list';

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

        divComments.appendChild(popUpCommentsTitle);
        divComments.appendChild(popUpCommentsContainer);
        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_2__.addCounterCommmentDOM)();
      }
    });
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
    title.dataset.id = id;
    paragraph.innerHTML = `${element.show.summary}`;
    commentsPopUp(id);
  }
};

const closePopUp = () => {
  overlay.classList.remove('active');
  modal.classList.remove('active');
  main.style.overflow = '';
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
/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments.js */ "./src/modules/comments.js");






const container = document.querySelector('.container');
const close = document.querySelector('.close');
const buttonModal = document.querySelector('.modal-button');

window.addEventListener('load', () => {
  (0,_modules_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();
});

container.addEventListener('click', (e) => {
  (0,_modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__.fillPopUp)(e);
  (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_1__.sendLikes)(e);
});

buttonModal.addEventListener('click', (e) => {
  e.preventDefault();
  const titleid = document.querySelector('.modal-title').dataset.id;
  const inputName = document.querySelector('.inputName').value;
  const inputComment = document.querySelector('.inputComment').value;
  if (inputName !== null && inputComment !== null) {
    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_4__.createNewComment)(titleid, inputName, inputComment);
    document.querySelector('.form').reset();
  }
});

close.addEventListener('click', _modules_popUp_js__WEBPACK_IMPORTED_MODULE_2__.closePopUp);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiwyRkFBMkY7QUFDM0Ysa0hBQWtILGtCQUFrQjtBQUNwSTtBQUNBLGtFQUFrRSwyQkFBMkIsY0FBYyxlQUFlLEdBQUcsVUFBVSxnQkFBZ0IsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFlBQVkscURBQXFELGtCQUFrQix3QkFBd0Isd0JBQXdCLG1DQUFtQyxzQ0FBc0MsR0FBRyxnQkFBZ0IsMkNBQTJDLHVCQUF1QixnQ0FBZ0MscUJBQXFCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixHQUFHLHFCQUFxQixrQ0FBa0MsdUJBQXVCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLG1CQUFtQixHQUFHLGlCQUFpQixxQkFBcUIsd0JBQXdCLGtDQUFrQyx1QkFBdUIsa0NBQWtDLHFCQUFxQixzQkFBc0IsbUJBQW1CLHVCQUF1QixHQUFHLGdCQUFnQixtREFBbUQsd0JBQXdCLHNCQUFzQixrQkFBa0Isd0JBQXdCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLDBCQUEwQixHQUFHLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsbUNBQW1DLCtCQUErQixHQUFHLHdDQUF3QyxnQkFBZ0Isc0JBQXNCLEdBQUcsb0NBQW9DLGtCQUFrQix3QkFBd0Isd0JBQXdCLG1DQUFtQyxvQkFBb0IsR0FBRywyQ0FBMkMsa0NBQWtDLHVCQUF1QixrQ0FBa0MscUJBQXFCLHNCQUFzQixvQkFBb0IsR0FBRyxnREFBZ0Qsa0NBQWtDLGVBQWUsb0JBQW9CLCtCQUErQixHQUFHLDJDQUEyQyxrQ0FBa0MsdUJBQXVCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLEdB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T0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxjQUFjLGVBQWUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcs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QUVBO0FBQ1A7QUFDQTs7Ozs7OztVQ0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0Q7QUFDYTtBQUNwQztBQUNrQzs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw0REFBTztBQUNULENBQUM7O0FBRUQ7QUFDQSxFQUFFLDREQUFTO0FBQ1gsRUFBRSwyREFBUztBQUNYLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzRUFBZ0I7QUFDcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0NBQWdDLHlEQUFVIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vdXNlLnR5cGVraXQubmV0L21yeTJjYmYuY3NzKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANzAwOzgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkICMyYzJhNzQ7XFxufVxcbmhlYWRlciAubG9nbyB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDF2dyk7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNlNDRkMTY7XFxufVxcbmhlYWRlciAubmF2YmFyIGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjR2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogIzJjMmE3NDtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMC43dncpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6ICMyYzJhNzQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgMnZ3KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiBjYWxjKDFyZW0gKyAzdncpO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5pbWctY29udGFpbmVyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5pbWctY29udGFpbmVyIC5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAzODlweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZsZXgtYmFzaXM6IDc1JTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLmljb24taGVhcnQge1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC5saWtlcyB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbSAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzJjMmE3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDQuNXZ3KTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiAjMmMyYTc0O1xcbn1cXG5mb290ZXIgLnRleHQtZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiBjYWxjKDEuNXJlbSArIDAuM3Z3KTtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCArIDMwdncpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXMsIHZpc2liaWxpdHkgMHM7XFxuICB6LWluZGV4OiAzMDA7XFxufVxcbi5tb2RhbCAuZmEtdGltZXMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbn1cXG4ubW9kYWwgLmltYWdlLWNvbnRhaW5lciB7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcbi5tb2RhbCAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuZHNjLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcbi5tb2RhbCAuZHNjLWNvbnRhaW5lciAuZHNjIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5tb2RhbCAuY29tbWVudHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5jb21tZW50cyAuY29tbWVudCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsIC5mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5mb3JtIGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzO1xcbiAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSAuaW5wdXRDb21tZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcXG4gIG1hcmdpbjogMC44cmVtIDA7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbSAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzJjMmE3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgdHJhbnNmb3JtIDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNDAsIDE0NSwgMTUxLCAwLjUpO1xcbiAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmNvbnRhaW5lciAuaXRlbSAuaW1nLWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG4uY29udGFpbmVyIC5saWtlLWNvbnRhaW5lciAuaWNvbi1oZWFydDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcbi5jb250YWluZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTQ0ZDE2O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5IC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzJjMmE3NDtcXG59XFxuLm92ZXJsYXkgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSAuaW5wdXRDb21tZW50OmZvY3VzIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMyYzJhNzQ7XFxufVxcbi5vdmVybGF5IC5mb3JtIC5saXN0LWlucHV0IC5tb2RhbC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U0NGQxNjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwgLmZhLXRpbWVzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTQ0ZDE2O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9faG9tZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy91dGlsaXRpZXMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX3BvcHVwLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2xheW91dC9fdHJhbnNpdGlvbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBREFBO0VBQ0UsZ0JBQUE7QUNHRjs7QUNkQTtFQUNFLGdEQUFBO0VDY0EsYUFBQTtFQUNBLG1CRGJjO0VDZ0JaLG1CRGhCaUI7RUNvQmpCLDhCRHBCeUI7RUFFM0IsaUNBQUE7QURrQkY7QUNoQkU7RUNBQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkRGMkI7RUNHM0IsaUJESGdDO0VBRTlCLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEcUJKO0FDakJJO0VDakJGLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCRGU2QjtFQ2Q3QixpQkRja0M7RUFFOUIsY0FBQTtBRHNCTjs7QUNqQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VDM0JBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCRDBCeUI7RUN6QnpCLGlCRHlCOEI7RUFFOUIsY0FBQTtFQUNBLGtCQUFBO0FEc0JGOztBQ25CQTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtF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LGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RURsR1IsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JDaUdpQztFRGhHakMsaUJDZ0dzQztFQUU5Qix5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUhtSlY7O0FHNUlBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUgrSUY7O0FHNUlBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFRC9HQSxhQUFBO0VBQ0EsbUJDZ0hjO0VEN0daLG1CQzZHaUI7RUR6R2pCLHVCQ3lHeUI7RUFFM0IsbURBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUhnSkY7O0FHN0lBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBSGdKRjs7QUl6Ukk7RUFDRSxzQkFBQTtBSjRSTjtBSXZSSTtFQUNFLHFCQUFBO0FKeVJOO0FJclJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FKdVJKOztBSS9RUTtFQUNFLHlCQUFBO0FKa1JWO0FJL1FRO0VBQ0UseUJBQUE7QUppUlY7QUk3UU07RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUorUVI7O0FJeFFFO0VBQ0UsY0FBQTtBSjJRSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L21yeTJjYmYuY3NzXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkICMyYzJhNzQ7XFxufVxcbmhlYWRlciAubG9nbyB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDF2dyk7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNlNDRkMTY7XFxufVxcbmhlYWRlciAubmF2YmFyIGxpIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjR2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogIzJjMmE3NDtcXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyMHB4ICsgMC43dncpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6ICMyYzJhNzQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgMnZ3KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiBjYWxjKDFyZW0gKyAzdncpO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIHtcXG4gIG1pbi13aWR0aDogMjUwcHg7XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5pbWctY29udGFpbmVyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5pbWctY29udGFpbmVyIC5pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAzODlweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAudGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGZsZXgtYmFzaXM6IDc1JTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLmljb24taGVhcnQge1xcbiAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC5saWtlcyB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5idXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbSAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzJjMmE3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDQuNXZ3KTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBiYWNrZ3JvdW5kOiAjMmMyYTc0O1xcbn1cXG5mb290ZXIgLnRleHQtZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiBjYWxjKDEuNXJlbSArIDAuM3Z3KTtcXG4gIG1heC13aWR0aDogY2FsYygyMDBweCArIDMwdncpO1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMsIG9wYWNpdHkgMXMsIHZpc2liaWxpdHkgMHM7XFxuICB6LWluZGV4OiAzMDA7XFxufVxcbi5tb2RhbCAuZmEtdGltZXMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzO1xcbn1cXG4ubW9kYWwgLmltYWdlLWNvbnRhaW5lciB7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAxODBweDtcXG4gIG1heC13aWR0aDogMjUwcHg7XFxufVxcbi5tb2RhbCAuaW1hZ2UtY29udGFpbmVyIC5pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1vZGFsIC5tb2RhbC10aXRsZSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuZHNjLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxufVxcbi5tb2RhbCAuZHNjLWNvbnRhaW5lciAuZHNjIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5tb2RhbCAuY29tbWVudHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIGgzIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5jb21tZW50cyAuY29tbWVudCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsIC5mb3JtIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5mb3JtIGg0IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzO1xcbiAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSAuaW5wdXRDb21tZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcXG4gIG1hcmdpbjogMC44cmVtIDA7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbSAwLjNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZDogIzJjMmE3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgdHJhbnNmb3JtIDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxNDAsIDE0NSwgMTUxLCAwLjUpO1xcbiAgei1pbmRleDogMjAwO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLmNvbnRhaW5lciAuaXRlbSAuaW1nLWNvbnRhaW5lcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbn1cXG4uY29udGFpbmVyIC5saWtlLWNvbnRhaW5lciAuaWNvbi1oZWFydDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxufVxcbi5jb250YWluZXIgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZTQ0ZDE2O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5IC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzJjMmE3NDtcXG59XFxuLm92ZXJsYXkgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSAuaW5wdXRDb21tZW50OmZvY3VzIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMyYzJhNzQ7XFxufVxcbi5vdmVybGF5IC5mb3JtIC5saXN0LWlucHV0IC5tb2RhbC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2U0NGQxNjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwgLmZhLXRpbWVzOmhvdmVyIHtcXG4gIGNvbG9yOiAjZTQ0ZDE2O1xcbn1cIixcIkB1c2UgJy4uL3V0aWxpdGllcycgYXMgKjtcXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcblxcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgc3BhY2UtYmV0d2Vlbik7XFxuXFxuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkIHJnYig0NCwgNDIsIDExNik7XFxuXFxuICAubG9nbyB7XFxuICAgIEBpbmNsdWRlIG9wZW4tdGV4dCgxNHB4LCA4MDAsIDI0cHgsIDEpO1xcblxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZTQ0ZDE2O1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIGxpIHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTJweCwgNTAwLCAyNHB4LCAwLjQpO1xcblxcbiAgICAgIGNvbG9yOiByZ2IoNDQsIDQyLCAxMTYpO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcbiAgQGluY2x1ZGUgbXVsaS10ZXh0KDIwcHgsIDgwMCwgMjRweCwgMC43KTtcXG5cXG4gIGNvbG9yOiByZ2IoNDQsIDQyLCAxMTYpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDJ2dyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuXFxuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiBjYWxjKDFyZW0gKyAzdncpO1xcblxcbiAgLml0ZW0ge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcblxcbiAgICAuaW1nLWNvbnRhaW5lciB7XFxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuXFxuICAgICAgLmltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDM4OXB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubGlrZS1jb250YWluZXIge1xcbiAgICAgIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIHNwYWNlLWJldHdlZW4pO1xcblxcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMjRweCk7XFxuXFxuICAgICAgICBmbGV4LWJhc2lzOiA3NSU7XFxuICAgICAgfVxcblxcbiAgICAgIC5pY29uLWhlYXJ0IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4ydncpO1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbiAgICAgIH1cXG5cXG4gICAgICAubGlrZXMge1xcbiAgICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMzJweCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtIDAuM3JlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG5cXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTJweCwgODAwLCAyNHB4KTtcXG5cXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQ6IHJnYig0NCwgNDIsIDExNik7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cywgY29sb3IgMC41cztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQ6IHJnYig0NCwgNDIsIDExNik7XFxuXFxuICAudGV4dC1mb290ZXIge1xcbiAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTJweCwgNTAwLCAzMnB4KTtcXG5cXG4gICAgY29sb3I6ICNmZmY7XFxuICB9XFxufVxcblwiLFwiQG1peGluIG11bGktdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGluY3JlYXNlOiAwLjMpIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKCN7JHNpemV9ICsgI3skaW5jcmVhc2V9dncpO1xcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXG59XFxuXFxuQG1peGluIG9wZW4tdGV4dCgkc2l6ZSwgJHdlaWdodCwgJGhlaWdodCwgJGluY3JlYXNlOiAwLjMpIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygjeyRzaXplfSArICN7JGluY3JlYXNlfXZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcbiAgbGluZS1oZWlnaHQ6ICRoZWlnaHQ7XFxufVxcblxcbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb24sICRhbGlnbjogZmFsc2UsICRqdXN0aWZ5OiBmYWxzZSkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcblxcbiAgQGlmICRhbGlnbiB7XFxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XFxuICB9XFxuXFxuICBAaWYgJGp1c3RpZnkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbiAgfVxcbn1cXG5cIixcIkB1c2UgJy4uL3V0aWxpdGllcycgYXMgKjtcXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IGNhbGMoMS41cmVtICsgMC4zdncpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDIwMHB4ICsgMzB2dyk7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcywgb3BhY2l0eSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIHotaW5kZXg6IDMwMDtcXG5cXG4gIC5mYS10aW1lcyB7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyAwLjV2dyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcXG4gIH1cXG5cXG4gIC5pbWFnZS1jb250YWluZXIge1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcblxcbiAgICAuaW1hZ2Uge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW9kYWwtdGl0bGUge1xcbiAgICBAaW5jbHVkZSBtdWxpLXRleHQoMjRweCwgNzAwLCAyNHB4KTtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDFyZW0gMDtcXG4gIH1cXG5cXG4gIC5kc2MtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcblxcbiAgICAuZHNjIHtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE2cHgsIDUwMCwgMjRweCk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jb21tZW50cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgaDMge1xcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNnB4LCA3MDAsIDI0cHgpO1xcblxcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICB9XFxuXFxuICAgIC5jb21tZW50IHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTRweCwgNTAwLCAyNHB4KTtcXG5cXG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAuZm9ybSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgaDQge1xcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNnB4LCA3MDAsIDI0cHgpO1xcblxcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xcbiAgICB9XFxuXFxuICAgIC5saXN0LWlucHV0IHtcXG4gICAgICAuZm9ybS1pdGVtIHtcXG4gICAgICAgIGlucHV0IHtcXG4gICAgICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMjRweCk7XFxuXFxuICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjVzO1xcbiAgICAgICAgICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmlucHV0Q29tbWVudCB7XFxuICAgICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcblxcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcXG4gICAgICAgICAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gICAgICAgICAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDAuOHJlbSAwLjNyZW07XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxMnB4LCA3MDAsIDI0cHgpO1xcblxcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiKDQ0LCA0MiwgMTE2KTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuXFxuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBjZW50ZXIpO1xcblxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgdHJhbnNmb3JtIDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICM4YzkxOTcsICRhbHBoYTogMC41KTtcXG4gIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblwiLFwiQHVzZSAnLi4vdXRpbGl0aWVzJyBhcyAqO1xcblxcbi5jb250YWluZXIge1xcbiAgLml0ZW0ge1xcbiAgICAuaW1nLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmxpa2UtY29udGFpbmVyIHtcXG4gICAgLmljb24taGVhcnQ6aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6ICNlNDRkMTY7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgfVxcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAuZm9ybSB7XFxuICAgIC5saXN0LWlucHV0IHtcXG4gICAgICAuZm9ybS1pdGVtIHtcXG4gICAgICAgIGlucHV0OmZvY3VzIHtcXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDQ0LCA0MiwgMTE2KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5pbnB1dENvbW1lbnQ6Zm9jdXMge1xcbiAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoNDQsIDQyLCAxMTYpO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAubW9kYWwtYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNDRkMTY7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1vZGFsIHtcXG4gIC5mYS10aW1lczpob3ZlciB7XFxuICAgIGNvbG9yOiAjZTQ0ZDE2O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgaXRlbUNvdW50ZXJDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzLWxpc3QnKS5jaGlsZHJlbl07XG4gIHJldHVybiBpdGVtcy5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkQ291bnRlckNvbW1tZW50RE9NID0gKCkgPT4ge1xuICBjb25zdCBjb3VudGVyRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50ZXInKTtcbiAgY291bnRlckRPTS5pbm5lckhUTUwgPSBgPGI+KCR7aXRlbUNvdW50ZXJDb21tZW50cygpfSk8Yj5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXJDb21tZW50czsiLCJpbXBvcnQgeyBhZGRDb3VudGVyQ29tbW1lbnRET00gfSBmcm9tICcuL2NvbW1lbnRDb3VudGVyLmpzJztcblxuY29uc3QgcG9zdFVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9FSTN4ZjBnc2ZSRjZXMG95NHBVMy9jb21tZW50cyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSUQpID0+IHtcbiAgY29uc3QgZ2V0VVJMID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL0VJM3hmMGdzZlJGNlcwb3k0cFUzL2NvbW1lbnRzP2l0ZW1faWQ9JHtpdGVtSUR9YDtcbiAgY29uc3QgcmF3UmVzcCA9IGF3YWl0IGZldGNoKGdldFVSTCk7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmF3UmVzcC5qc29uKCk7XG4gIHJldHVybiBjb21tZW50cztcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdDb21tZW50ID0gYXN5bmMgKGNvbW1JRCwgY29tbVVzZXJOYW1lLCBjb21tKSA9PiB7XG4gIGNvbnN0IHJhd1Jlc3AgPSBhd2FpdCBmZXRjaChwb3N0VVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGAke2NvbW1JRH1gLFxuICAgICAgdXNlcm5hbWU6IGAke2NvbW1Vc2VyTmFtZX1gLFxuICAgICAgY29tbWVudDogYCR7Y29tbX1gLFxuICAgIH0pLFxuICB9KTtcblxuICBnZXRDb21tZW50cyhjb21tSUQpXG4gICAgLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgICBjb25zdCBkaXZDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuICAgICAgZGl2Q29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwb3BVcENvbW1lbnRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwb3BVcENvbW1lbnRzVGl0bGUuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLXRpdGxlJztcbiAgICAgICAgcG9wVXBDb21tZW50c1RpdGxlLmlubmVySFRNTCA9ICdDb21tZW50cyA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj48L3NwYW4+JztcblxuICAgICAgICBjb25zdCBwb3BVcENvbW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgcG9wVXBDb21tZW50c0NvbnRhaW5lci5pZCA9ICdjb21tZW50cy1saXN0JztcbiAgICAgICAgcG9wVXBDb21tZW50c0NvbnRhaW5lci5jbGFzc05hbWUgPSAnY29tbWVudHMtbGlzdCc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tZW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIGNvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGUgPSBjb21tZW50c1tpXS5jcmVhdGlvbl9kYXRlLnJlcGxhY2UoJy0nLCAnLycpLnJlcGxhY2UoJy0nLCAnLycpO1xuICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICBsaXN0SXRlbS5jbGFzc05hbWUgPSAnY29tbS1saXN0LWl0ZW0nO1xuXG4gICAgICAgICAgY29uc3QgZGlzcGxheUNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgZGlzcGxheUNvbW1lbnQuY2xhc3NOYW1lID0gJ2NvbW1lbnQnO1xuICAgICAgICAgIGRpc3BsYXlDb21tZW50LnRleHRDb250ZW50ID0gYCR7Y29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50c1tpXS51c2VybmFtZX06ICR7Y29tbWVudHNbaV0uY29tbWVudH1gO1xuICAgICAgICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGRpc3BsYXlDb21tZW50KTtcbiAgICAgICAgICBwb3BVcENvbW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdkNvbW1lbnRzLmFwcGVuZENoaWxkKHBvcFVwQ29tbWVudHNUaXRsZSk7XG4gICAgICAgIGRpdkNvbW1lbnRzLmFwcGVuZENoaWxkKHBvcFVwQ29tbWVudHNDb250YWluZXIpO1xuICAgICAgICBhZGRDb3VudGVyQ29tbW1lbnRET00oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICBjb25zdCBzdGF0dXMgPSBhd2FpdCByYXdSZXNwO1xuICByZXR1cm4gc3RhdHVzO1xufTtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVHcmlkID0gKGFycmF5Q29taWNzKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lckpTID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gIGFycmF5Q29taWNzLmZvckVhY2goKGNvbWljLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBsaWtlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBsaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBjb25zdCBsaWtlQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpO1xuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltZycpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7Y29taWMuc2hvdy5pbWFnZS5vcmlnaW5hbH1gKTtcbiAgICBsaWtlQm94LmNsYXNzTGlzdC5hZGQoJ2xpa2UtY29udGFpbmVyJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBgJHtjb21pYy5zaG93Lm5hbWV9ICR7aW5kZXh9YDtcbiAgICBsaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYXInLCAnZmEtaGVhcnQnLCAnaWNvbi1oZWFydCcpO1xuICAgIGxpa2VJY29uLmRhdGFzZXQuaWQgPSBgJHtpbmRleH1gO1xuICAgIGxpa2VBbW91bnQuY2xhc3NMaXN0LmFkZCgnbGlrZXMnKTtcbiAgICBsaWtlQW1vdW50LnRleHRDb250ZW50ID0gMDtcbiAgICBsaWtlQW1vdW50LmRhdGFzZXQuaWQgPSBgJHtpbmRleH1gO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21tZW50cyc7XG4gICAgYnV0dG9uLmRhdGFzZXQuaWQgPSBgJHtpbmRleH1gO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgbGlrZUJveC5hcHBlbmRDaGlsZChsaWtlSWNvbik7XG4gICAgbGlrZUJveC5hcHBlbmRDaGlsZChsaWtlQW1vdW50KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlrZUJveCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgY29udGFpbmVySlMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSk7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVySlMpO1xufTtcbiIsImltcG9ydCB7IGNyZWF0ZUdyaWQgfSBmcm9tICcuL2NyZWF0ZUdyaWQuanMnO1xuaW1wb3J0IHsgYWRkQ291bnRlckRPTSB9IGZyb20gJy4vaXRlbUNvdW50ZXIuanMnO1xuaW1wb3J0IHsgZ2V0TGlzdExpa2VzQVBJIH0gZnJvbSAnLi9saWtlLmpzJztcbmltcG9ydCB7IHNldERhdGFMb2NhbFN0b3JhZ2UgfSBmcm9tICcuL3N0b3JlLmpzJztcblxuY29uc3QgZGF0YVVSTCA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPXNwaWRlcm1hbic7XG5jb25zdCBnZXREcmF3Q29taWNzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRhdGFVUkwpO1xuICBjb25zdCBjb21pY3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjb21pY3M7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgZ2V0RHJhd0NvbWljcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHJlc3VsdC5zcGxpY2UoNywgMSk7XG4gICAgc2V0RGF0YUxvY2FsU3RvcmFnZShyZXN1bHQpO1xuICAgIGNyZWF0ZUdyaWQocmVzdWx0KTtcbiAgICBhZGRDb3VudGVyRE9NKCk7XG4gICAgZ2V0TGlzdExpa2VzQVBJKCk7XG4gIH0pO1xufTtcbiIsImNvbnN0IGl0ZW1Db3VudGVyID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJykuY2hpbGRyZW5dO1xuICByZXR1cm4gaXRlbXMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvdW50ZXJET00gPSAoKSA9PiB7XG4gIGNvbnN0IGNvdW50ZXJET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMtY291bnRlcicpO1xuICBjb3VudGVyRE9NLmlubmVySFRNTCA9IGA8Yj4oJHtpdGVtQ291bnRlcigpfSk8Yj5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXRlbUNvdW50ZXI7XG4iLCJjb25zdCBjcmVhdGVVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGxpa2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvRUkzeGYwZ3NmUkY2VzBveTRwVTMvbGlrZXMvJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjcmVhdGVVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbmFtZTogJ25ld0FwcEFydGh1cicsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCBzdGF0dXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBzdGF0dXM7XG59O1xuXG4vLyAgIDFza2hIZU11YVg1bFFsRHNvRWxKXG5jb25zdCBjcmVhdGVMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7aWR9YCxcbiAgICB9KSxcbiAgfSk7XG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGlrZVVSTCk7XG5cbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuY29uc3QgZGlzdHJpYnV0ZUxpa2VzID0gKGxpa2VzTGlzdEFQSSkgPT4ge1xuICBjb25zdCBsaWtlQ291bnRlciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMnKV07XG4gIGxpa2VzTGlzdEFQSS5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICBjb25zdCBpZCA9IHBhcnNlSW50KG9iamVjdC5pdGVtX2lkLCAxMCk7XG4gICAgbGlrZUNvdW50ZXJbaWRdLnRleHRDb250ZW50ID0gb2JqZWN0Lmxpa2VzO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMaXN0TGlrZXNBUEkgPSAoKSA9PiB7XG4gIGdldExpa2VzKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgZGlzdHJpYnV0ZUxpa2VzKHJlc3VsdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlbmRMaWtlcyA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0xpa2VCdG4gPSBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpY29uLWhlYXJ0Jyk7XG4gIGlmIChpc0xpa2VCdG4pIHtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICBjcmVhdGVMaWtlcyhpZCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBnZXRMaXN0TGlrZXNBUEkoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBnZXREYXRhTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBnZXRDb21tZW50cyB9IGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IHsgYWRkQ291bnRlckNvbW1tZW50RE9NIH0gZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XG5cbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlJyk7XG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aXRsZScpO1xuY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRzYycpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuY29uc3Qgb3BlblBvcFVwID0gKCkgPT4ge1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgbWFpbi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xufTtcblxuY29uc3QgY29tbWVudHNQb3BVcCA9IChpZCkgPT4ge1xuICBnZXRDb21tZW50cyhpZClcbiAgICAudGhlbigoY29tbWVudHMpID0+IHtcbiAgICAgIGNvbnN0IGRpdkNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRzJyk7XG4gICAgICBkaXZDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgICAgIGlmIChjb21tZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHBvcFVwQ29tbWVudHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHBvcFVwQ29tbWVudHNUaXRsZS5jbGFzc05hbWUgPSAnY29tbWVudHMtdGl0bGUnO1xuICAgICAgICBwb3BVcENvbW1lbnRzVGl0bGUuaW5uZXJIVE1MID0gJ0NvbW1lbnRzIDxzcGFuIGNsYXNzPVwiY291bnRlclwiPjEyPC9zcGFuPic7XG5cbiAgICAgICAgY29uc3QgcG9wVXBDb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHBvcFVwQ29tbWVudHNDb250YWluZXIuaWQgPSAnY29tbWVudHMtbGlzdCc7XG4gICAgICAgIHBvcFVwQ29tbWVudHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLWxpc3QnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb21tZW50c1tpXS5jcmVhdGlvbl9kYXRlID0gY29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZS5yZXBsYWNlKCctJywgJy8nKS5yZXBsYWNlKCctJywgJy8nKTtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2NvbW0tbGlzdC1pdGVtJztcblxuICAgICAgICAgIGNvbnN0IGRpc3BsYXlDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIGRpc3BsYXlDb21tZW50LmNsYXNzTmFtZSA9ICdjb21tZW50JztcbiAgICAgICAgICBkaXNwbGF5Q29tbWVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudHNbaV0udXNlcm5hbWV9OiAke2NvbW1lbnRzW2ldLmNvbW1lbnR9YDtcbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkaXNwbGF5Q29tbWVudCk7XG4gICAgICAgICAgcG9wVXBDb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXZDb21tZW50cy5hcHBlbmRDaGlsZChwb3BVcENvbW1lbnRzVGl0bGUpO1xuICAgICAgICBkaXZDb21tZW50cy5hcHBlbmRDaGlsZChwb3BVcENvbW1lbnRzQ29udGFpbmVyKTtcbiAgICAgICAgYWRkQ291bnRlckNvbW1tZW50RE9NKCk7XG4gICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmlsbFBvcFVwID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGlzQnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJyk7XG4gIGlmIChpc0J1dHRvbikge1xuICAgIG9wZW5Qb3BVcCgpO1xuICAgIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0O1xuICAgIGNvbnN0IG1haW5HcmlkID0gZ2V0RGF0YUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGVsZW1lbnQgPSBtYWluR3JpZFtpZF07XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBgJHtlbGVtZW50LnNob3cuaW1hZ2Uub3JpZ2luYWx9YCk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtlbGVtZW50LnNob3cubmFtZX1gO1xuICAgIHRpdGxlLmRhdGFzZXQuaWQgPSBpZDtcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5zaG93LnN1bW1hcnl9YDtcbiAgICBjb21tZW50c1BvcFVwKGlkKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNsb3NlUG9wVXAgPSAoKSA9PiB7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtYWluLnN0eWxlLm92ZXJmbG93ID0gJyc7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldERhdGFMb2NhbFN0b3JhZ2UgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBUElEYXRhJykpO1xuXG5leHBvcnQgY29uc3Qgc2V0RGF0YUxvY2FsU3RvcmFnZSA9IChkYXRhKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBUElEYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi9tb2R1bGVzL2dldERhdGEuanMnO1xuaW1wb3J0IHsgc2VuZExpa2VzIH0gZnJvbSAnLi9tb2R1bGVzL2xpa2UuanMnO1xuaW1wb3J0IHsgZmlsbFBvcFVwLCBjbG9zZVBvcFVwIH0gZnJvbSAnLi9tb2R1bGVzL3BvcFVwLmpzJztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgeyBjcmVhdGVOZXdDb21tZW50IH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRzLmpzJztcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbmNvbnN0IGJ1dHRvbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJ1dHRvbicpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgZ2V0RGF0YSgpO1xufSk7XG5cbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGZpbGxQb3BVcChlKTtcbiAgc2VuZExpa2VzKGUpO1xufSk7XG5cbmJ1dHRvbk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0aXRsZWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRpdGxlJykuZGF0YXNldC5pZDtcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0TmFtZScpLnZhbHVlO1xuICBjb25zdCBpbnB1dENvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRDb21tZW50JykudmFsdWU7XG4gIGlmIChpbnB1dE5hbWUgIT09IG51bGwgJiYgaW5wdXRDb21tZW50ICE9PSBudWxsKSB7XG4gICAgY3JlYXRlTmV3Q29tbWVudCh0aXRsZWlkLCBpbnB1dE5hbWUsIGlucHV0Q29tbWVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKS5yZXNldCgpO1xuICB9XG59KTtcblxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcFVwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
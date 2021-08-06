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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 30px solid #2c2a74;\n}\nheader .logo {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 1vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #E44D16;\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.4vw);\n  font-weight: 500;\n  line-height: 24px;\n  color: #2c2a74;\n}\n\n.main-title {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(20px + 0.7vw);\n  font-weight: 800;\n  line-height: 24px;\n  color: #2c2a74;\n  text-align: center;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container {\n  transition: transform 0.5s;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  margin-top: 2rem;\n  background: #2c2a74;\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n  color: #fff;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n  transition: color 0.5s;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item .inputComment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n  resize: none;\n  border: 2px solid black;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .item .img-container:hover {\n  transform: scale(0.95);\n}\n.container .like-container .icon-heart:hover {\n  transform: scale(1.3);\n}\n.container .button:hover {\n  background: #E44D16;\n  color: #fff;\n}\n\n.overlay .form .list-input .form-item input:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .form-item .inputComment:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .modal-button:hover {\n  background: #E44D16;\n  color: #fff;\n}\n\n.modal .fa-times:hover {\n  color: #E44D16;\n}", "",{"version":3,"sources":["webpack://./src/scss/base/_reset.scss","webpack://./src/styles.scss","webpack://./src/scss/layout/_home.scss","webpack://./src/scss/utilities/_mixins.scss","webpack://./src/scss/layout/_popup.scss","webpack://./src/scss/layout/_transitions.scss"],"names":[],"mappings":"AAAA;;;EAGE,sBAAA;EACA,SAAA;EACA,UAAA;ACGF;;ADAA;EACE,WAAA;ACGF;;ADAA;EACE,gBAAA;ACGF;;ACdA;EACE,gDAAA;ECcA,aAAA;EACA,mBDbc;ECgBZ,mBDhBiB;ECoBjB,8BDpByB;EAC3B,iCAAA;ADmBF;ACjBE;ECCA,oCAAA;EACA,kBAAA;EACA,2BAAA;EACA,gBDH2B;ECI3B,iBDJgC;EAC9B,yBAAA;EACA,qBAAA;EACA,cAAA;ADuBJ;ACnBI;ECfF,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBDa6B;ECZ7B,iBDYkC;EAC9B,cAAA;ADyBN;;ACpBA;EACE,gBAAA;EACA,mBAAA;ECxBA,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBDsByB;ECrBzB,iBDqB8B;EAC9B,cAAA;EACA,kBAAA;AD2BF;;ACxBA;EACE,8CAAA;EACA,mBAAA;EACA,iBAAA;ECjBA,aAAA;EACA,mBDkBc;ECfZ,mBDeiB;ECXjB,uBDWyB;EAE3B,eAAA;EACA,qBAAA;AD4BF;AC1BE;EACE,gBAAA;EACA,gBAAA;AD4BJ;AC1BI;EACE,0BAAA;AD4BN;AC3BM;EACE,WAAA;EACA,iBAAA;AD6BR;ACzBI;ECpCF,aAAA;EACA,mBDoCkB;ECjChB,mBDiCqB;EC7BrB,8BD6B6B;EAE3B,eAAA;AD6BN;AC3BM;ECzDJ,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBDuD+B;ECtD/B,iBDsDoC;EAE9B,eAAA;ADgCR;AC7BM;EACE,6BAAA;EACA,UAAA;EACA,eAAA;EACA,0BAAA;AD+BR;AC5BM;ECtEJ,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBDoE+B;ECnE/B,iBDmEoC;ADkCtC;AC9BI;EACE,kBAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EChFJ,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBD8E6B;EC7E7B,iBD6EkC;EAC9B,yBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,uCAAA;ADoCN;;AC/BA;EACE,gDAAA;EACA,gBAAA;EACA,mBAAA;ADkCF;AChCE;EChGA,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBD8F2B;EC7F3B,iBD6FgC;EAC9B,WAAA;ADsCJ;;AGvIA;EACE,gBAAA;EACA,6BAAA;EACA,6BAAA;EACA,6BAAA;EACA,cAAA;EACA,UAAA;EACA,kBAAA;EACA,mDAAA;EACA,YAAA;AH0IF;AGxIE;EACE,YAAA;EACA,6BAAA;EACA,eAAA;EACA,sBAAA;AH0IJ;AGvIE;EACE,mBAAA;EACA,gBAAA;EACA,gBAAA;AHyIJ;AGvII;EACE,WAAA;AHyIN;AGrIE;ED7BA,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBC2B2B;ED1B3B,iBC0BgC;EAE9B,kBAAA;EACA,cAAA;AH0IJ;AGvIE;EACE,eAAA;AHyIJ;AGvII;EACE,kBAAA;EDxCJ,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBCuC6B;EDtC7B,iBCsCkC;AH4IpC;AGxIE;EACE,kBAAA;AH0IJ;AGxII;EDjDF,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBC+C6B;ED9C7B,iBC8CkC;EAE9B,cAAA;AH6IN;AG1II;EDvDF,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBCqD6B;EDpD7B,iBCoDkC;EAE9B,gBAAA;AH+IN;AG3IE;EACE,kBAAA;AH6IJ;AG3II;EDjEF,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBC+D6B;ED9D7B,iBC8DkC;EAE9B,cAAA;AHgJN;AG3IQ;EDzEN,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBCuEiC;EDtEjC,iBCsEsC;EAC9B,uBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;AHiJV;AG9IQ;EDjFN,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBC+EiC;ED9EjC,iBC8EsC;EAC9B,uBAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;AHoJV;AGjJQ;EACE,kBAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EDhGR,6BAAA;EACA,kBAAA;EACA,6BAAA;EACA,gBC8FiC;ED7FjC,iBC6FsC;EAC9B,yBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;EACA,uCAAA;AHuJV;;AGhJA;EACE,mBAAA;EACA,mBAAA;EACA,UAAA;AHmJF;;AGhJA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,mBAAA;ED3GA,aAAA;EACA,mBC4Gc;EDzGZ,mBCyGiB;EDrGjB,uBCqGyB;EAE3B,mDAAA;EACA,oCAAA;EACA,YAAA;AHoJF;;AGjJA;EACE,mBAAA;EACA,mBAAA;EACA,UAAA;EACA,mBAAA;AHoJF;;AIxRI;EACE,sBAAA;AJ2RN;AItRI;EACE,qBAAA;AJwRN;AIrRE;EACE,mBAAA;EACA,WAAA;AJuRJ;;AI/QQ;EACE,yBAAA;AJkRV;AI/QQ;EACE,yBAAA;AJiRV;AI9QM;EACE,mBAAA;EACA,WAAA;AJgRR;;AIzQE;EACE,cAAA;AJ4QJ","sourcesContent":["*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n","@import url(\"https://use.typekit.net/mry2cbf.css\");\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@700;800&display=swap\");\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  width: 100%;\n}\n\nul {\n  list-style: none;\n}\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 30px solid #2c2a74;\n}\nheader .logo {\n  font-family: \"Open Sans\", sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 1vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  text-decoration: none;\n  color: #E44D16;\n}\nheader .navbar li {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.4vw);\n  font-weight: 500;\n  line-height: 24px;\n  color: #2c2a74;\n}\n\n.main-title {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(20px + 0.7vw);\n  font-weight: 800;\n  line-height: 24px;\n  color: #2c2a74;\n  text-align: center;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n}\n.container .item {\n  min-width: 250px;\n  max-width: 280px;\n}\n.container .item .img-container {\n  transition: transform 0.5s;\n}\n.container .item .img-container .img {\n  width: 100%;\n  max-height: 389px;\n}\n.container .item .like-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem;\n}\n.container .item .like-container .title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  flex-basis: 75%;\n}\n.container .item .like-container .icon-heart {\n  font-size: calc(1rem + 0.2vw);\n  color: red;\n  cursor: pointer;\n  transition: transform 0.5s;\n}\n.container .item .like-container .likes {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n}\n.container .item .button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 800;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  margin-top: 2rem;\n  background: #2c2a74;\n}\nfooter .text-footer {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 500;\n  line-height: 32px;\n  color: #fff;\n}\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n}\n.modal .fa-times {\n  float: right;\n  font-size: calc(2rem + 0.5vw);\n  cursor: pointer;\n  transition: color 0.5s;\n}\n.modal .image-container {\n  margin-inline: auto;\n  min-width: 180px;\n  max-width: 250px;\n}\n.modal .image-container .image {\n  width: 100%;\n}\n.modal .modal-title {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(24px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-align: center;\n  margin: 1rem 0;\n}\n.modal .dsc-container {\n  padding: 0 1rem;\n}\n.modal .dsc-container .dsc {\n  text-align: center;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n}\n.modal .comments {\n  text-align: center;\n}\n.modal .comments h3 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .comments .comment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  margin: 0.5rem 0;\n}\n.modal .form {\n  text-align: center;\n}\n.modal .form h4 {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(16px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  margin: 1rem 0;\n}\n.modal .form .list-input .form-item input {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n}\n.modal .form .list-input .form-item .inputComment {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(14px + 0.3vw);\n  font-weight: 500;\n  line-height: 24px;\n  transition: border 0.5s;\n  margin: 0.8rem 0;\n  padding: 0.4rem 1rem;\n  border-radius: 8px;\n  resize: none;\n  border: 2px solid black;\n}\n.modal .form .list-input .form-item button {\n  margin-top: 0.5rem;\n  padding: 0.5rem 0.8rem 0.3rem;\n  text-align: center;\n  cursor: pointer;\n  border: none;\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(12px + 0.3vw);\n  font-weight: 700;\n  line-height: 24px;\n  text-transform: uppercase;\n  color: #fff;\n  background: #2c2a74;\n  border-radius: 8px;\n  transition: background 0.5s, color 0.5s;\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba(140, 145, 151, 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n\n.container .item .img-container:hover {\n  transform: scale(0.95);\n}\n.container .like-container .icon-heart:hover {\n  transform: scale(1.3);\n}\n.container .button:hover {\n  background: #E44D16;\n  color: #fff;\n}\n\n.overlay .form .list-input .form-item input:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .form-item .inputComment:focus {\n  border: 5px solid #2c2a74;\n}\n.overlay .form .list-input .modal-button:hover {\n  background: #E44D16;\n  color: #fff;\n}\n\n.modal .fa-times:hover {\n  color: #E44D16;\n}","@use '../utilities' as *;\n\nheader {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n\n  @include flex(row, center, space-between);\n  border-bottom: 30px solid rgb(44, 42, 116);\n\n  .logo {\n    @include open-text(14px, 800, 24px, 1);\n    text-transform: uppercase;\n    text-decoration: none;\n    color: #E44D16;\n  }\n\n  .navbar {\n    li {\n      @include muli-text(12px, 500, 24px, 0.4);\n      color: rgb(44, 42, 116);\n    }\n  }\n}\n\n.main-title {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  @include muli-text(20px, 800, 24px, 0.7);\n  color: rgb(44, 42, 116);\n  text-align: center;\n}\n\n.container {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 2vw);\n  margin-inline: auto;\n  max-width: 1200px;\n\n  @include flex(row, center, center);\n\n  flex-wrap: wrap;\n  gap: calc(1rem + 3vw);\n\n  .item {\n    min-width: 250px;\n    max-width: 280px;\n\n    .img-container {\n      transition: transform .5s;\n      .img {\n        width: 100%;\n        max-height: 389px;\n      }\n    }\n\n    .like-container {\n      @include flex(row, center, space-between);\n\n      padding: 0.5rem;\n\n      .title {\n        @include muli-text(14px, 500, 24px);\n\n        flex-basis: 75%;\n      }\n\n      .icon-heart {\n        font-size: calc(1rem + 0.2vw);\n        color: red;\n        cursor: pointer;\n        transition: transform .5s;\n      }\n\n      .likes {\n        @include muli-text(14px, 500, 32px);\n      }\n    }\n\n    .button {\n      margin-top: 0.5rem;\n      padding: 0.5rem .8rem 0.3rem;\n      text-align: center;\n      cursor: pointer;\n      border: none;\n      @include muli-text(12px, 800, 24px);\n      text-transform: uppercase;\n      color: #fff;\n      background: rgb(44, 42, 116);\n      border-radius: 8px;\n      transition: background 0.5s, color 0.5s;\n    }\n  }\n}\n\nfooter {\n  padding: calc(1rem + 0.8vw) calc(1.5rem + 4.5vw);\n  margin-top: 2rem;\n  background: rgb(44, 42, 116);\n\n  .text-footer {\n    @include muli-text(12px, 500, 32px);\n    color: #fff;\n  }\n}\n","@mixin muli-text($size, $weight, $height, $increase: 0.3) {\n  font-family: muli, sans-serif;\n  font-style: normal;\n  font-size: calc(#{$size} + #{$increase}vw);\n  font-weight: $weight;\n  line-height: $height;\n}\n\n@mixin open-text($size, $weight, $height, $increase: 0.3) {\n  font-family: 'Open Sans', sans-serif;\n  font-style: normal;\n  font-size: calc(#{$size} + #{$increase}vw);\n  font-weight: $weight;\n  line-height: $height;\n}\n\n@mixin flex($direction, $align: false, $justify: false) {\n  display: flex;\n  flex-direction: $direction;\n\n  @if $align {\n    align-items: $align;\n  }\n\n  @if $justify {\n    justify-content: $justify;\n  }\n}\n","@use '../utilities' as *;\n\n.modal {\n  background: #fff;\n  padding: calc(1.5rem + 0.3vw);\n  max-width: calc(200px + 30vw);\n  max-height: calc(100% - 70px);\n  overflow: auto;\n  opacity: 0;\n  visibility: hidden;\n  transition: transform 1s, opacity 1s, visibility 0s;\n  z-index: 300;\n\n  .fa-times {\n    float: right;\n    font-size: calc(2rem + 0.5vw);\n    cursor: pointer;\n    transition: color .5s;\n  }\n\n  .image-container {\n    margin-inline: auto;\n    min-width: 180px;\n    max-width: 250px;\n\n    .image {\n      width: 100%;\n    }\n  }\n\n  .modal-title {\n    @include muli-text(24px, 700, 24px);\n\n    text-align: center;\n    margin: 1rem 0;\n  }\n\n  .dsc-container {\n    padding: 0 1rem;\n\n    .dsc {\n      text-align: center;\n\n      @include muli-text(16px, 500, 24px);\n    }\n  }\n\n  .comments {\n    text-align: center;\n\n    h3 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .comment {\n      @include muli-text(14px, 500, 24px);\n\n      margin: 0.5rem 0;\n    }\n  }\n\n  .form {\n    text-align: center;\n\n    h4 {\n      @include muli-text(16px, 700, 24px);\n\n      margin: 1rem 0;\n    }\n\n    .list-input {\n      .form-item {\n        input {\n          @include muli-text(14px, 500, 24px);\n          transition: border .5s;\n          margin: 0.8rem 0;\n          padding: 0.4rem 1rem;\n          border-radius: 8px;\n        }\n\n        .inputComment {\n          @include muli-text(14px, 500, 24px);\n          transition: border .5s;\n          margin: 0.8rem 0;\n          padding: 0.4rem 1rem;\n          border-radius: 8px;\n          resize: none;\n          border: 2px solid black;\n        }\n\n        button {\n          margin-top: 0.5rem;\n          padding: 0.5rem .8rem 0.3rem;\n          text-align: center;\n          cursor: pointer;\n          border: none;\n          @include muli-text(12px, 700, 24px);\n          text-transform: uppercase;\n          color: #fff;\n          background: rgb(44, 42, 116);\n          border-radius: 8px;\n          transition: background 0.5s, color 0.5s;\n        }\n      }\n    }\n  }\n}\n\n.modal.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  visibility: hidden;\n  opacity: 0;\n  transform: scale(0);\n\n  @include flex(row, center, center);\n\n  transition: opacity 1s, transform 1s, visibility 0s;\n  background: rgba($color: #8c9197, $alpha: 0.5);\n  z-index: 200;\n}\n\n.overlay.active {\n  visibility: visible;\n  transform: scale(1);\n  opacity: 1;\n  pointer-events: all;\n}\n","@use '../utilities' as *;\n\n.container {\n\n  .item {\n    .img-container:hover {\n      transform: scale(0.95);\n    }\n  }\n\n  .like-container {\n    .icon-heart:hover {\n      transform: scale(1.3);\n    }\n  }\n  .button:hover {\n    background: #E44D16;\n    color: #fff;\n  }\n}\n\n.overlay {\n  .form {\n    .list-input {\n      .form-item {\n        input:focus {\n          border: 5px solid rgb(44, 42, 116);\n        }\n\n        .inputComment:focus {\n          border: 5px solid rgb(44, 42, 116);\n        }\n      }\n      .modal-button:hover {\n        background: #E44D16;\n        color: #fff;\n      }\n    }\n  }\n}\n\n.modal {\n  .fa-times:hover {\n    color: #E44D16;\n  }\n}\n"],"sourceRoot":""}]);
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


const postURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/comments';

const getComments = async (itemID) => {
  const getURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1skhHeMuaX5lQlDsoElJ/comments?item_id=${itemID}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRDb3VudGVyLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRzLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NyZWF0ZUdyaWQuanMiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZ2V0RGF0YS5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9pdGVtQ291bnRlci5qcyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9saWtlLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3BvcFVwLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovL0FwaS13ZWJhcHAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQXBpLXdlYmFwcC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9BcGktd2ViYXBwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRiwyRkFBMkY7QUFDM0Ysa0hBQWtILGtCQUFrQjtBQUNwSTtBQUNBLGtFQUFrRSwyQkFBMkIsY0FBYyxlQUFlLEdBQUcsVUFBVSxnQkFBZ0IsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFlBQVkscURBQXFELGtCQUFrQix3QkFBd0Isd0JBQXdCLG1DQUFtQyxzQ0FBc0MsR0FBRyxnQkFBZ0IsMkNBQTJDLHVCQUF1QixnQ0FBZ0MscUJBQXFCLHNCQUFzQiw4QkFBOEIsMEJBQTBCLG1CQUFtQixHQUFHLHFCQUFxQixrQ0FBa0MsdUJBQXVCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLG1CQUFtQixHQUFHLGlCQUFpQixxQkFBcUIsd0JBQXdCLGtDQUFrQyx1QkFBdUIsa0NBQWtDLHFCQUFxQixzQkFBc0IsbUJBQW1CLHVCQUF1QixHQUFHLGdCQUFnQixtREFBbUQsd0JBQXdCLHNCQUFzQixrQkFBa0Isd0JBQXdCLHdCQUF3Qiw0QkFBNEIsb0JBQW9CLDBCQUEwQixHQUFHLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsbUNBQW1DLCtCQUErQixHQUFHLHdDQUF3QyxnQkFBZ0Isc0JBQXNCLEdBQUcsb0NBQW9DLGtCQUFrQix3QkFBd0Isd0JBQXdCLG1DQUFtQyxvQkFBb0IsR0FBRywyQ0FBMkMsa0NBQWtDLHVCQUF1QixrQ0FBa0MscUJBQXFCLHNCQUFzQixvQkFBb0IsR0FBRyxnREFBZ0Qsa0NBQWtDLGVBQWUsb0JBQW9CLCtCQUErQixHQUFHLDJDQUEyQyxrQ0FBa0MsdUJBQXVCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLEdB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T0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFdBQVcsYUFBYSxlQUFlLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLGFBQWEsZUFBZSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsV0FBVyxhQUFhLGVBQWUsWUFBWSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsWUFBWSxjQUFjLGVBQWUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcs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QTtBQUNQO0FBQ0E7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ04rQztBQUNEO0FBQ2E7QUFDcEM7QUFDa0M7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNERBQU87QUFDVCxDQUFDOztBQUVEO0FBQ0EsRUFBRSw0REFBUztBQUNYLEVBQUUsMkRBQVM7QUFDWCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0VBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxDQUFDOztBQUVELGdDQUFnQyx5REFBVSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL3VzZS50eXBla2l0Lm5ldC9tcnkyY2JmLmNzcyk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDcwMDs4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMzBweCBzb2xpZCAjMmMyYTc0O1xcbn1cXG5oZWFkZXIgLmxvZ28ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAxdncpO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjRTQ0RDE2O1xcbn1cXG5oZWFkZXIgLm5hdmJhciBsaSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC40dncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgY29sb3I6ICMyYzJhNzQ7XFxufVxcblxcbi5tYWluLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMjBweCArIDAuN3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjMmMyYTc0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDJ2dyk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogY2FsYygxcmVtICsgM3Z3KTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSB7XFxuICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAuaW1nLWNvbnRhaW5lciB7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAuaW1nLWNvbnRhaW5lciAuaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMzg5cHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLnRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmbGV4LWJhc2lzOiA3NSU7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC5pY29uLWhlYXJ0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAubGlrZXMge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAuYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW0gMC4zcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMyYzJhNzQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZDogIzJjMmE3NDtcXG59XFxuZm9vdGVyIC50ZXh0LWZvb3RlciB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogY2FsYygxLjVyZW0gKyAwLjN2dyk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggKyAzMHZ3KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzLCBvcGFjaXR5IDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgei1pbmRleDogMzAwO1xcbn1cXG4ubW9kYWwgLmZhLXRpbWVzIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGZvbnQtc2l6ZTogY2FsYygycmVtICsgMC41dncpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcXG59XFxuLm1vZGFsIC5pbWFnZS1jb250YWluZXIge1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1pbi13aWR0aDogMTgwcHg7XFxuICBtYXgtd2lkdGg6IDI1MHB4O1xcbn1cXG4ubW9kYWwgLmltYWdlLWNvbnRhaW5lciAuaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tb2RhbCAubW9kYWwtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMjRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmRzYy1jb250YWluZXIge1xcbiAgcGFkZGluZzogMCAxcmVtO1xcbn1cXG4ubW9kYWwgLmRzYy1jb250YWluZXIgLmRzYyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1vZGFsIC5jb21tZW50cyBoMyB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuY29tbWVudHMgLmNvbW1lbnQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMC41cmVtIDA7XFxufVxcbi5tb2RhbCAuZm9ybSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuZm9ybSBoNCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcbi5tb2RhbCAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIGlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC41cztcXG4gIG1hcmdpbjogMC44cmVtIDA7XFxuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gLmlucHV0Q29tbWVudCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNXM7XFxuICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICByZXNpemU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLm1vZGFsIC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW0gMC4zcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMyYzJhNzQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNXMsIGNvbG9yIDAuNXM7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHRyYW5zZm9ybSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTQwLCAxNDUsIDE1MSwgMC41KTtcXG4gIHotaW5kZXg6IDIwMDtcXG59XFxuXFxuLm92ZXJsYXkuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5jb250YWluZXIgLml0ZW0gLmltZy1jb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG59XFxuLmNvbnRhaW5lciAubGlrZS1jb250YWluZXIgLmljb24taGVhcnQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbn1cXG4uY29udGFpbmVyIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI0U0NEQxNjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheSAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIGlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICMyYzJhNzQ7XFxufVxcbi5vdmVybGF5IC5mb3JtIC5saXN0LWlucHV0IC5mb3JtLWl0ZW0gLmlucHV0Q29tbWVudDpmb2N1cyB7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMmMyYTc0O1xcbn1cXG4ub3ZlcmxheSAuZm9ybSAubGlzdC1pbnB1dCAubW9kYWwtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNFNDREMTY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vZGFsIC5mYS10aW1lczpob3ZlciB7XFxuICBjb2xvcjogI0U0NEQxNjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9fcmVzZXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX2hvbWUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvdXRpbGl0aWVzL19taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvbGF5b3V0L19wb3B1cC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9sYXlvdXQvX3RyYW5zaXRpb25zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNHRjs7QURBQTtFQUNFLFdBQUE7QUNHRjs7QURBQTtFQUNFLGdCQUFBO0FDR0Y7O0FDZEE7RUFDRSxnREFBQTtFQ2NBLGFBQUE7RUFDQSxtQkRiYztFQ2dCWixtQkRoQmlCO0VDb0JqQiw4QkRwQnlCO0VBQzNCLGlDQUFBO0FEbUJGO0FDakJFO0VDQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JESDJCO0VDSTNCLGlCREpnQztFQUM5Qix5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBRHVCSjtBQ25CSTtFQ2ZGLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCRGE2QjtFQ1o3QixpQkRZa0M7RUFDOUIsY0FBQTtBRHlCTjs7QUNwQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VDeEJBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCRHNCeUI7RUNyQnpCLGlCRHFCOEI7RUFDOUIsY0FBQTtFQUNBLGtCQUFBO0FEMkJGOztBQ3hCQTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQ2pC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RUFDQSxlQUFBO0VBQ0EsWUFBQTtFRGhHUiw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkM4RmlDO0VEN0ZqQyxpQkM2RnNDO0VBQzlCLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBSHVKVjs7QUdoSkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBSG1KRjs7QUdoSkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VEM0dBLGFBQUE7RUFDQSxtQkM0R2M7RUR6R1osbUJDeUdpQjtFRHJHakIsdUJDcUd5QjtFQUUzQixtREFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBSG9KRjs7QUdqSkE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FIb0pGOztBSXhSSTtFQUNFLHNCQUFBO0FKMlJOO0FJdFJJO0VBQ0UscUJBQUE7QUp3Uk47QUlyUkU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUp1Uko7O0FJL1FRO0VBQ0UseUJBQUE7QUprUlY7QUkvUVE7RUFDRSx5QkFBQTtBSmlSVjtBSTlRTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBSmdSUjs7QUl6UUU7RUFDRSxjQUFBO0FKNFFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvbXJ5MmNiZi5jc3NcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA3MDA7ODAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IGNhbGMoMXJlbSArIDAuOHZ3KSBjYWxjKDEuNXJlbSArIDQuNXZ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgIzJjMmE3NDtcXG59XFxuaGVhZGVyIC5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMXZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI0U0NEQxNjtcXG59XFxuaGVhZGVyIC5uYXZiYXIgbGkge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNHZ3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjMmMyYTc0O1xcbn1cXG5cXG4ubWFpbi10aXRsZSB7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDIwcHggKyAwLjd2dyk7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogIzJjMmE3NDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyAydncpO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IGNhbGMoMXJlbSArIDN2dyk7XFxufVxcbi5jb250YWluZXIgLml0ZW0ge1xcbiAgbWluLXdpZHRoOiAyNTBweDtcXG4gIG1heC13aWR0aDogMjgwcHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmltZy1jb250YWluZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmltZy1jb250YWluZXIgLmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDM4OXB4O1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmxpa2UtY29udGFpbmVyIC50aXRsZSB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZmxleC1iYXNpczogNzUlO1xcbn1cXG4uY29udGFpbmVyIC5pdGVtIC5saWtlLWNvbnRhaW5lciAuaWNvbi1oZWFydCB7XFxuICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMnZ3KTtcXG4gIGNvbG9yOiByZWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcXG59XFxuLmNvbnRhaW5lciAuaXRlbSAubGlrZS1jb250YWluZXIgLmxpa2VzIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5jb250YWluZXIgLml0ZW0gLmJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtIDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMmMyYTc0O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgNC41dncpO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGJhY2tncm91bmQ6ICMyYzJhNzQ7XFxufVxcbmZvb3RlciAudGV4dC1mb290ZXIge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IGNhbGMoMS41cmVtICsgMC4zdncpO1xcbiAgbWF4LXdpZHRoOiBjYWxjKDIwMHB4ICsgMzB2dyk7XFxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcywgb3BhY2l0eSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIHotaW5kZXg6IDMwMDtcXG59XFxuLm1vZGFsIC5mYS10aW1lcyB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IGNhbGMoMnJlbSArIDAuNXZ3KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuNXM7XFxufVxcbi5tb2RhbCAuaW1hZ2UtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuLm1vZGFsIC5pbWFnZS1jb250YWluZXIgLmltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubW9kYWwgLm1vZGFsLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDI0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuLm1vZGFsIC5kc2MtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuLm1vZGFsIC5kc2MtY29udGFpbmVyIC5kc2Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLm1vZGFsIC5jb21tZW50cyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tb2RhbCAuY29tbWVudHMgaDMge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmNvbW1lbnRzIC5jb21tZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG4ubW9kYWwgLmZvcm0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubW9kYWwgLmZvcm0gaDQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTZweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbn1cXG4ubW9kYWwgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBpbnB1dCB7XFxuICBmb250LWZhbWlseTogbXVsaSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgMC4zdncpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuNXM7XFxuICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgcGFkZGluZzogMC40cmVtIDFyZW07XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcbi5tb2RhbCAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIC5pbnB1dENvbW1lbnQge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoMTRweCArIDAuM3Z3KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjVzO1xcbiAgbWFyZ2luOiAwLjhyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5tb2RhbCAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtIDAuM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtZmFtaWx5OiBtdWxpLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjN2dyk7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjMmMyYTc0O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB0cmFuc2Zvcm0gMXMsIHZpc2liaWxpdHkgMHM7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE0MCwgMTQ1LCAxNTEsIDAuNSk7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uY29udGFpbmVyIC5pdGVtIC5pbWctY29udGFpbmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcbi5jb250YWluZXIgLmxpa2UtY29udGFpbmVyIC5pY29uLWhlYXJ0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuLmNvbnRhaW5lciAuYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNFNDREMTY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXkgLmZvcm0gLmxpc3QtaW5wdXQgLmZvcm0taXRlbSBpbnB1dDpmb2N1cyB7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMmMyYTc0O1xcbn1cXG4ub3ZlcmxheSAuZm9ybSAubGlzdC1pbnB1dCAuZm9ybS1pdGVtIC5pbnB1dENvbW1lbnQ6Zm9jdXMge1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzJjMmE3NDtcXG59XFxuLm92ZXJsYXkgLmZvcm0gLmxpc3QtaW5wdXQgLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjRTQ0RDE2O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbCAuZmEtdGltZXM6aG92ZXIge1xcbiAgY29sb3I6ICNFNDREMTY7XFxufVwiLFwiQHVzZSAnLi4vdXRpbGl0aWVzJyBhcyAqO1xcblxcbmhlYWRlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuXFxuICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuKTtcXG4gIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgcmdiKDQ0LCA0MiwgMTE2KTtcXG5cXG4gIC5sb2dvIHtcXG4gICAgQGluY2x1ZGUgb3Blbi10ZXh0KDE0cHgsIDgwMCwgMjRweCwgMSk7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICNFNDREMTY7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgbGkge1xcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxMnB4LCA1MDAsIDI0cHgsIDAuNCk7XFxuICAgICAgY29sb3I6IHJnYig0NCwgNDIsIDExNik7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1haW4tdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBAaW5jbHVkZSBtdWxpLXRleHQoMjBweCwgODAwLCAyNHB4LCAwLjcpO1xcbiAgY29sb3I6IHJnYig0NCwgNDIsIDExNik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcGFkZGluZzogY2FsYygxcmVtICsgMC44dncpIGNhbGMoMS41cmVtICsgMnZ3KTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG5cXG4gIEBpbmNsdWRlIGZsZXgocm93LCBjZW50ZXIsIGNlbnRlcik7XFxuXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IGNhbGMoMXJlbSArIDN2dyk7XFxuXFxuICAuaXRlbSB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuXFxuICAgIC5pbWctY29udGFpbmVyIHtcXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xcbiAgICAgIC5pbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzODlweDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmxpa2UtY29udGFpbmVyIHtcXG4gICAgICBAaW5jbHVkZSBmbGV4KHJvdywgY2VudGVyLCBzcGFjZS1iZXR3ZWVuKTtcXG5cXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgICAgLnRpdGxlIHtcXG4gICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcblxcbiAgICAgICAgZmxleC1iYXNpczogNzUlO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaWNvbi1oZWFydCB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMnZ3KTtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xcbiAgICAgIH1cXG5cXG4gICAgICAubGlrZXMge1xcbiAgICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMzJweCk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW0gLjhyZW0gMC4zcmVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxMnB4LCA4MDAsIDI0cHgpO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgYmFja2dyb3VuZDogcmdiKDQ0LCA0MiwgMTE2KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbiAgICB9XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiBjYWxjKDFyZW0gKyAwLjh2dykgY2FsYygxLjVyZW0gKyA0LjV2dyk7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgYmFja2dyb3VuZDogcmdiKDQ0LCA0MiwgMTE2KTtcXG5cXG4gIC50ZXh0LWZvb3RlciB7XFxuICAgIEBpbmNsdWRlIG11bGktdGV4dCgxMnB4LCA1MDAsIDMycHgpO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXCIsXCJAbWl4aW4gbXVsaS10ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkaW5jcmVhc2U6IDAuMykge1xcbiAgZm9udC1mYW1pbHk6IG11bGksIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IGNhbGMoI3skc2l6ZX0gKyAjeyRpbmNyZWFzZX12dyk7XFxuICBmb250LXdlaWdodDogJHdlaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiAkaGVpZ2h0O1xcbn1cXG5cXG5AbWl4aW4gb3Blbi10ZXh0KCRzaXplLCAkd2VpZ2h0LCAkaGVpZ2h0LCAkaW5jcmVhc2U6IDAuMykge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiBjYWxjKCN7JHNpemV9ICsgI3skaW5jcmVhc2V9dncpO1xcbiAgZm9udC13ZWlnaHQ6ICR3ZWlnaHQ7XFxuICBsaW5lLWhlaWdodDogJGhlaWdodDtcXG59XFxuXFxuQG1peGluIGZsZXgoJGRpcmVjdGlvbiwgJGFsaWduOiBmYWxzZSwgJGp1c3RpZnk6IGZhbHNlKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuXFxuICBAaWYgJGFsaWduIHtcXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbjtcXG4gIH1cXG5cXG4gIEBpZiAkanVzdGlmeSB7XFxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxuICB9XFxufVxcblwiLFwiQHVzZSAnLi4vdXRpbGl0aWVzJyBhcyAqO1xcblxcbi5tb2RhbCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogY2FsYygxLjVyZW0gKyAwLjN2dyk7XFxuICBtYXgtd2lkdGg6IGNhbGMoMjAwcHggKyAzMHZ3KTtcXG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzLCBvcGFjaXR5IDFzLCB2aXNpYmlsaXR5IDBzO1xcbiAgei1pbmRleDogMzAwO1xcblxcbiAgLmZhLXRpbWVzIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDAuNXZ3KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXM7XFxuICB9XFxuXFxuICAuaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgbWluLXdpZHRoOiAxODBweDtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG5cXG4gICAgLmltYWdlIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vZGFsLXRpdGxlIHtcXG4gICAgQGluY2x1ZGUgbXVsaS10ZXh0KDI0cHgsIDcwMCwgMjRweCk7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxuICB9XFxuXFxuICAuZHNjLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG5cXG4gICAgLmRzYyB7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNnB4LCA1MDAsIDI0cHgpO1xcbiAgICB9XFxuICB9XFxuXFxuICAuY29tbWVudHMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGgzIHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTZweCwgNzAwLCAyNHB4KTtcXG5cXG4gICAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgfVxcblxcbiAgICAuY29tbWVudCB7XFxuICAgICAgQGluY2x1ZGUgbXVsaS10ZXh0KDE0cHgsIDUwMCwgMjRweCk7XFxuXFxuICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLmZvcm0ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGg0IHtcXG4gICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTZweCwgNzAwLCAyNHB4KTtcXG5cXG4gICAgICBtYXJnaW46IDFyZW0gMDtcXG4gICAgfVxcblxcbiAgICAubGlzdC1pbnB1dCB7XFxuICAgICAgLmZvcm0taXRlbSB7XFxuICAgICAgICBpbnB1dCB7XFxuICAgICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xcbiAgICAgICAgICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmlucHV0Q29tbWVudCB7XFxuICAgICAgICAgIEBpbmNsdWRlIG11bGktdGV4dCgxNHB4LCA1MDAsIDI0cHgpO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgLjVzO1xcbiAgICAgICAgICBtYXJnaW46IDAuOHJlbSAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gLjhyZW0gMC4zcmVtO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBAaW5jbHVkZSBtdWxpLXRleHQoMTJweCwgNzAwLCAyNHB4KTtcXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig0NCwgNDIsIDExNik7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzLCBjb2xvciAwLjVzO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubW9kYWwuYWN0aXZlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcbiAgQGluY2x1ZGUgZmxleChyb3csIGNlbnRlciwgY2VudGVyKTtcXG5cXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHRyYW5zZm9ybSAxcywgdmlzaWJpbGl0eSAwcztcXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjOGM5MTk3LCAkYWxwaGE6IDAuNSk7XFxuICB6LWluZGV4OiAyMDA7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cIixcIkB1c2UgJy4uL3V0aWxpdGllcycgYXMgKjtcXG5cXG4uY29udGFpbmVyIHtcXG5cXG4gIC5pdGVtIHtcXG4gICAgLmltZy1jb250YWluZXI6aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5saWtlLWNvbnRhaW5lciB7XFxuICAgIC5pY29uLWhlYXJ0OmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XFxuICAgIH1cXG4gIH1cXG4gIC5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjRTQ0RDE2O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gIH1cXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgLmZvcm0ge1xcbiAgICAubGlzdC1pbnB1dCB7XFxuICAgICAgLmZvcm0taXRlbSB7XFxuICAgICAgICBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYig0NCwgNDIsIDExNik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaW5wdXRDb21tZW50OmZvY3VzIHtcXG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDQ0LCA0MiwgMTE2KTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgICAgLm1vZGFsLWJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRTQ0RDE2O1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tb2RhbCB7XFxuICAuZmEtdGltZXM6aG92ZXIge1xcbiAgICBjb2xvcjogI0U0NEQxNjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGl0ZW1Db3VudGVyQ29tbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy1saXN0JykuY2hpbGRyZW5dO1xuICByZXR1cm4gaXRlbXMubGVuZ3RoO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENvdW50ZXJDb21tbWVudERPTSA9ICgpID0+IHtcbiAgY29uc3QgY291bnRlckRPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudGVyJyk7XG4gIGNvdW50ZXJET00uaW5uZXJIVE1MID0gYDxiPigke2l0ZW1Db3VudGVyQ29tbWVudHMoKX0pPGI+YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyQ29tbWVudHM7IiwiaW1wb3J0IHsgYWRkQ291bnRlckNvbW1tZW50RE9NIH0gZnJvbSAnLi9jb21tZW50Q291bnRlci5qcyc7XG5cbmNvbnN0IHBvc3RVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvMXNraEhlTXVhWDVsUWxEc29FbEovY29tbWVudHMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlEKSA9PiB7XG4gIGNvbnN0IGdldFVSTCA9IGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8xc2toSGVNdWFYNWxRbERzb0VsSi9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlEfWA7XG4gIGNvbnN0IHJhd1Jlc3AgPSBhd2FpdCBmZXRjaChnZXRVUkwpO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJhd1Jlc3AuanNvbigpO1xuICByZXR1cm4gY29tbWVudHM7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3Q29tbWVudCA9IGFzeW5jIChjb21tSUQsIGNvbW1Vc2VyTmFtZSwgY29tbSkgPT4ge1xuICBjb25zdCByYXdSZXNwID0gYXdhaXQgZmV0Y2gocG9zdFVSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBgJHtjb21tSUR9YCxcbiAgICAgIHVzZXJuYW1lOiBgJHtjb21tVXNlck5hbWV9YCxcbiAgICAgIGNvbW1lbnQ6IGAke2NvbW19YCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgZ2V0Q29tbWVudHMoY29tbUlEKVxuICAgIC50aGVuKChjb21tZW50cykgPT4ge1xuICAgICAgY29uc3QgZGl2Q29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKTtcbiAgICAgIGRpdkNvbW1lbnRzLmlubmVySFRNTCA9ICcnO1xuICAgICAgaWYgKGNvbW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgcG9wVXBDb21tZW50c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgcG9wVXBDb21tZW50c1RpdGxlLmNsYXNzTmFtZSA9ICdjb21tZW50cy10aXRsZSc7XG4gICAgICAgIHBvcFVwQ29tbWVudHNUaXRsZS5pbm5lckhUTUwgPSAnQ29tbWVudHMgPHNwYW4gY2xhc3M9XCJjb3VudGVyXCI+PC9zcGFuPic7XG5cbiAgICAgICAgY29uc3QgcG9wVXBDb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHBvcFVwQ29tbWVudHNDb250YWluZXIuaWQgPSAnY29tbWVudHMtbGlzdCc7XG4gICAgICAgIHBvcFVwQ29tbWVudHNDb250YWluZXIuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLWxpc3QnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBjb21tZW50c1tpXS5jcmVhdGlvbl9kYXRlID0gY29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZS5yZXBsYWNlKCctJywgJy8nKS5yZXBsYWNlKCctJywgJy8nKTtcbiAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgbGlzdEl0ZW0uY2xhc3NOYW1lID0gJ2NvbW0tbGlzdC1pdGVtJztcblxuICAgICAgICAgIGNvbnN0IGRpc3BsYXlDb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgIGRpc3BsYXlDb21tZW50LmNsYXNzTmFtZSA9ICdjb21tZW50JztcbiAgICAgICAgICBkaXNwbGF5Q29tbWVudC50ZXh0Q29udGVudCA9IGAke2NvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudHNbaV0udXNlcm5hbWV9OiAke2NvbW1lbnRzW2ldLmNvbW1lbnR9YDtcbiAgICAgICAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChkaXNwbGF5Q29tbWVudCk7XG4gICAgICAgICAgcG9wVXBDb21tZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXZDb21tZW50cy5hcHBlbmRDaGlsZChwb3BVcENvbW1lbnRzVGl0bGUpO1xuICAgICAgICBkaXZDb21tZW50cy5hcHBlbmRDaGlsZChwb3BVcENvbW1lbnRzQ29udGFpbmVyKTtcbiAgICAgICAgYWRkQ291bnRlckNvbW1tZW50RE9NKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcmF3UmVzcDtcbiAgcmV0dXJuIHN0YXR1cztcbn07XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlR3JpZCA9IChhcnJheUNvbWljcykgPT4ge1xuICBjb25zdCBjb250YWluZXJKUyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICBhcnJheUNvbWljcy5mb3JFYWNoKChjb21pYywgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgbGlrZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgbGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgY29uc3QgbGlrZUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250YWluZXInKTtcbiAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdpbWcnKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2NvbWljLnNob3cuaW1hZ2Uub3JpZ2luYWx9YCk7XG4gICAgbGlrZUJveC5jbGFzc0xpc3QuYWRkKCdsaWtlLWNvbnRhaW5lcicpO1xuICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gYCR7Y29taWMuc2hvdy5uYW1lfSAke2luZGV4fWA7XG4gICAgbGlrZUljb24uY2xhc3NMaXN0LmFkZCgnZmFyJywgJ2ZhLWhlYXJ0JywgJ2ljb24taGVhcnQnKTtcbiAgICBsaWtlSWNvbi5kYXRhc2V0LmlkID0gYCR7aW5kZXh9YDtcbiAgICBsaWtlQW1vdW50LmNsYXNzTGlzdC5hZGQoJ2xpa2VzJyk7XG4gICAgbGlrZUFtb3VudC50ZXh0Q29udGVudCA9IDA7XG4gICAgbGlrZUFtb3VudC5kYXRhc2V0LmlkID0gYCR7aW5kZXh9YDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICAgIGJ1dHRvbi5kYXRhc2V0LmlkID0gYCR7aW5kZXh9YDtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBsaWtlQm94LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobGlrZUljb24pO1xuICAgIGxpa2VCb3guYXBwZW5kQ2hpbGQobGlrZUFtb3VudCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpa2VCb3gpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIGNvbnRhaW5lckpTLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0pO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckpTKTtcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVHcmlkIH0gZnJvbSAnLi9jcmVhdGVHcmlkLmpzJztcbmltcG9ydCB7IGFkZENvdW50ZXJET00gfSBmcm9tICcuL2l0ZW1Db3VudGVyLmpzJztcbmltcG9ydCB7IGdldExpc3RMaWtlc0FQSSB9IGZyb20gJy4vbGlrZS5qcyc7XG5pbXBvcnQgeyBzZXREYXRhTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9zdG9yZS5qcyc7XG5cbmNvbnN0IGRhdGFVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1zcGlkZXJtYW4nO1xuY29uc3QgZ2V0RHJhd0NvbWljcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkYXRhVVJMKTtcbiAgY29uc3QgY29taWNzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gY29taWNzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gIGdldERyYXdDb21pY3MoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICByZXN1bHQuc3BsaWNlKDcsIDEpO1xuICAgIHNldERhdGFMb2NhbFN0b3JhZ2UocmVzdWx0KTtcbiAgICBjcmVhdGVHcmlkKHJlc3VsdCk7XG4gICAgYWRkQ291bnRlckRPTSgpO1xuICAgIGdldExpc3RMaWtlc0FQSSgpO1xuICB9KTtcbn07XG4iLCJjb25zdCBpdGVtQ291bnRlciA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmNoaWxkcmVuXTtcbiAgcmV0dXJuIGl0ZW1zLmxlbmd0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRDb3VudGVyRE9NID0gKCkgPT4ge1xuICBjb25zdCBjb3VudGVyRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1zLWNvdW50ZXInKTtcbiAgY291bnRlckRPTS5pbm5lckhUTUwgPSBgPGI+KCR7aXRlbUNvdW50ZXIoKX0pPGI+YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1Db3VudGVyO1xuIiwiY29uc3QgY3JlYXRlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5jb25zdCBsaWtlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzFza2hIZU11YVg1bFFsRHNvRWxKL2xpa2VzLyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcHAgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goY3JlYXRlVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG5hbWU6ICduZXdBcHBBcnRodXInLFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuLy8gICAxc2toSGVNdWFYNWxRbERzb0VsSlxuY29uc3QgY3JlYXRlTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlVVJMLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IGAke2lkfWAsXG4gICAgfSksXG4gIH0pO1xuICBjb25zdCBzdGF0dXMgPSBhd2FpdCByZXNwb25zZTtcbiAgcmV0dXJuIHN0YXR1cztcbn07XG5cbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGxpa2VVUkwpO1xuXG4gIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIHN0YXR1cztcbn07XG5cbmNvbnN0IGRpc3RyaWJ1dGVMaWtlcyA9IChsaWtlc0xpc3RBUEkpID0+IHtcbiAgY29uc3QgbGlrZUNvdW50ZXIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2VzJyldO1xuICBsaWtlc0xpc3RBUEkuZm9yRWFjaCgob2JqZWN0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBwYXJzZUludChvYmplY3QuaXRlbV9pZCwgMTApO1xuICAgIGxpa2VDb3VudGVyW2lkXS50ZXh0Q29udGVudCA9IG9iamVjdC5saWtlcztcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlzdExpa2VzQVBJID0gKCkgPT4ge1xuICBnZXRMaWtlcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIGRpc3RyaWJ1dGVMaWtlcyhyZXN1bHQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZW5kTGlrZXMgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgaXNMaWtlQnRuID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaWNvbi1oZWFydCcpO1xuICBpZiAoaXNMaWtlQnRuKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQ7XG4gICAgY3JlYXRlTGlrZXMoaWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgZ2V0TGlzdExpa2VzQVBJKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgZ2V0RGF0YUxvY2FsU3RvcmFnZSB9IGZyb20gJy4vc3RvcmUuanMnO1xuaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCB7IGFkZENvdW50ZXJDb21tbWVudERPTSB9IGZyb20gJy4vY29tbWVudENvdW50ZXIuanMnO1xuXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZScpO1xuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGl0bGUnKTtcbmNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kc2MnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmNvbnN0IG9wZW5Qb3BVcCA9ICgpID0+IHtcbiAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG1haW4uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbn07XG5cbmNvbnN0IGNvbW1lbnRzUG9wVXAgPSAoaWQpID0+IHtcbiAgZ2V0Q29tbWVudHMoaWQpXG4gICAgLnRoZW4oKGNvbW1lbnRzKSA9PiB7XG4gICAgICBjb25zdCBkaXZDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuICAgICAgZGl2Q29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gICAgICBpZiAoY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBwb3BVcENvbW1lbnRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwb3BVcENvbW1lbnRzVGl0bGUuY2xhc3NOYW1lID0gJ2NvbW1lbnRzLXRpdGxlJztcbiAgICAgICAgcG9wVXBDb21tZW50c1RpdGxlLmlubmVySFRNTCA9ICdDb21tZW50cyA8c3BhbiBjbGFzcz1cImNvdW50ZXJcIj4xMjwvc3Bhbj4nO1xuXG4gICAgICAgIGNvbnN0IHBvcFVwQ29tbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBwb3BVcENvbW1lbnRzQ29udGFpbmVyLmlkID0gJ2NvbW1lbnRzLWxpc3QnO1xuICAgICAgICBwb3BVcENvbW1lbnRzQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdjb21tZW50cy1saXN0JztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgY29tbWVudHNbaV0uY3JlYXRpb25fZGF0ZSA9IGNvbW1lbnRzW2ldLmNyZWF0aW9uX2RhdGUucmVwbGFjZSgnLScsICcvJykucmVwbGFjZSgnLScsICcvJyk7XG4gICAgICAgICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgIGxpc3RJdGVtLmNsYXNzTmFtZSA9ICdjb21tLWxpc3QtaXRlbSc7XG5cbiAgICAgICAgICBjb25zdCBkaXNwbGF5Q29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICBkaXNwbGF5Q29tbWVudC5jbGFzc05hbWUgPSAnY29tbWVudCc7XG4gICAgICAgICAgZGlzcGxheUNvbW1lbnQudGV4dENvbnRlbnQgPSBgJHtjb21tZW50c1tpXS5jcmVhdGlvbl9kYXRlfSAke2NvbW1lbnRzW2ldLnVzZXJuYW1lfTogJHtjb21tZW50c1tpXS5jb21tZW50fWA7XG4gICAgICAgICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGlzcGxheUNvbW1lbnQpO1xuICAgICAgICAgIHBvcFVwQ29tbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2Q29tbWVudHMuYXBwZW5kQ2hpbGQocG9wVXBDb21tZW50c1RpdGxlKTtcbiAgICAgICAgZGl2Q29tbWVudHMuYXBwZW5kQ2hpbGQocG9wVXBDb21tZW50c0NvbnRhaW5lcik7XG4gICAgICAgIGFkZENvdW50ZXJDb21tbWVudERPTSgpO1xuICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbGxQb3BVcCA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0J1dHRvbiA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbicpO1xuICBpZiAoaXNCdXR0b24pIHtcbiAgICBvcGVuUG9wVXAoKTtcbiAgICBjb25zdCB7IGlkIH0gPSBldmVudC50YXJnZXQuZGF0YXNldDtcbiAgICBjb25zdCBtYWluR3JpZCA9IGdldERhdGFMb2NhbFN0b3JhZ2UoKTtcbiAgICBjb25zdCBlbGVtZW50ID0gbWFpbkdyaWRbaWRdO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgYCR7ZWxlbWVudC5zaG93LmltYWdlLm9yaWdpbmFsfWApO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudC5zaG93Lm5hbWV9YDtcbiAgICB0aXRsZS5kYXRhc2V0LmlkID0gaWQ7XG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGAke2VsZW1lbnQuc2hvdy5zdW1tYXJ5fWA7XG4gICAgY29tbWVudHNQb3BVcChpZCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjbG9zZVBvcFVwID0gKCkgPT4ge1xuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbWFpbi5zdHlsZS5vdmVyZmxvdyA9ICcnO1xufTtcbiIsImV4cG9ydCBjb25zdCBnZXREYXRhTG9jYWxTdG9yYWdlID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVBJRGF0YScpKTtcblxuZXhwb3J0IGNvbnN0IHNldERhdGFMb2NhbFN0b3JhZ2UgPSAoZGF0YSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQVBJRGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2V0RGF0YSB9IGZyb20gJy4vbW9kdWxlcy9nZXREYXRhLmpzJztcbmltcG9ydCB7IHNlbmRMaWtlcyB9IGZyb20gJy4vbW9kdWxlcy9saWtlLmpzJztcbmltcG9ydCB7IGZpbGxQb3BVcCwgY2xvc2VQb3BVcCB9IGZyb20gJy4vbW9kdWxlcy9wb3BVcC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHsgY3JlYXRlTmV3Q29tbWVudCB9IGZyb20gJy4vbW9kdWxlcy9jb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG5jb25zdCBidXR0b25Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1idXR0b24nKTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGdldERhdGEoKTtcbn0pO1xuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBmaWxsUG9wVXAoZSk7XG4gIHNlbmRMaWtlcyhlKTtcbn0pO1xuXG5idXR0b25Nb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdGl0bGVpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aXRsZScpLmRhdGFzZXQuaWQ7XG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dE5hbWUnKS52YWx1ZTtcbiAgY29uc3QgaW5wdXRDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0Q29tbWVudCcpLnZhbHVlO1xuICBpZiAoaW5wdXROYW1lICE9PSBudWxsICYmIGlucHV0Q29tbWVudCAhPT0gbnVsbCkge1xuICAgIGNyZWF0ZU5ld0NvbW1lbnQodGl0bGVpZCwgaW5wdXROYW1lLCBpbnB1dENvbW1lbnQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJykucmVzZXQoKTtcbiAgfVxufSk7XG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BVcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#footer{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 50px 10px;\n    background-color: rgb(244 240 230);\n}\n\n/* Header */\n\n#footer h1{\n    color: rgb(255, 203, 160);\n    font-family: var(--VT323);\n    font-size: 5rem;\n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    margin-bottom: 50px;\n    opacity: 0;\n}\n\n#footer h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards; \n}\n\n/* Form */\n\n.form{\n    max-width: 600px;\n    opacity: 0;\n}\n\n.form input,\n.form textarea\n{\n    width: 100%;\n    padding: 10px;\n    font-size: 1.5rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    letter-spacing: 1px;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    border: none;\n}\n\n.form button{\n    font-size: 1.5rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    width: 200px;\n    padding: 15px;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: 400ms;\n}\n\n.form input:focus,\n.form textarea:focus{\n    outline: 2px solid rgb(255, 203, 160);\n}\n\n.form button:hover{\n    transform: scale(1.1);\n}\n\n.form.reveal.active{\n    animation: scale-animation 800ms 400ms forwards;\n}", "",{"version":3,"sources":["webpack://./src/components/footer/footer.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA,WAAW;;AAEX;IACI,yBAAyB;IACzB,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,SAAS;;AAET;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;;;IAGI,WAAW;IACX,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;;IAEI,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,+CAA+C;AACnD","sourcesContent":["#footer{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 50px 10px;\n    background-color: rgb(244 240 230);\n}\n\n/* Header */\n\n#footer h1{\n    color: rgb(255, 203, 160);\n    font-family: var(--VT323);\n    font-size: 5rem;\n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    margin-bottom: 50px;\n    opacity: 0;\n}\n\n#footer h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards; \n}\n\n/* Form */\n\n.form{\n    max-width: 600px;\n    opacity: 0;\n}\n\n.form input,\n.form textarea\n{\n    width: 100%;\n    padding: 10px;\n    font-size: 1.5rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    letter-spacing: 1px;\n    margin-bottom: 20px;\n    border-radius: 10px;\n    border: none;\n}\n\n.form button{\n    font-size: 1.5rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    width: 200px;\n    padding: 15px;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: 400ms;\n}\n\n.form input:focus,\n.form textarea:focus{\n    outline: 2px solid rgb(255, 203, 160);\n}\n\n.form button:hover{\n    transform: scale(1.1);\n}\n\n.form.reveal.active{\n    animation: scale-animation 800ms 400ms forwards;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header{\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99;\n}", "",{"version":3,"sources":["webpack://./src/components/header/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,QAAQ;IACR,WAAW;AACf","sourcesContent":["header{\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 99;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/menu/menu.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/menu/menu.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu{\n    display: none;\n    cursor: pointer;\n    margin-bottom: 10px;\n}\n\n.bar{\n    display: block;\n    background-color: var(--light-grey);\n    width: 50px;\n    height: 4px;\n    margin: 10px 0;\n    transition: 300ms ease-in-out;\n}\n\n@media screen and (max-width: 1200px) {\n    .menu{\n        display: block;\n    }\n\n    .menu.active-menu .bar:nth-child(2){\n        opacity: 0;\n    }\n    .menu.active-menu .bar:nth-child(1){\n        transform: translateY(8px) rotate(45deg);\n    }\n    .menu.active-menu .bar:nth-child(3){\n        transform: translateY(-8px) rotate(-45deg);\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/components/header/menu/menu.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mCAAmC;IACnC,WAAW;IACX,WAAW;IACX,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;IACA;QACI,wCAAwC;IAC5C;IACA;QACI,0CAA0C;IAC9C;AACJ","sourcesContent":[".menu{\n    display: none;\n    cursor: pointer;\n    margin-bottom: 10px;\n}\n\n.bar{\n    display: block;\n    background-color: var(--light-grey);\n    width: 50px;\n    height: 4px;\n    margin: 10px 0;\n    transition: 300ms ease-in-out;\n}\n\n@media screen and (max-width: 1200px) {\n    .menu{\n        display: block;\n    }\n\n    .menu.active-menu .bar:nth-child(2){\n        opacity: 0;\n    }\n    .menu.active-menu .bar:nth-child(1){\n        transform: translateY(8px) rotate(45deg);\n    }\n    .menu.active-menu .bar:nth-child(3){\n        transform: translateY(-8px) rotate(-45deg);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/header/nav.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/header/nav.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#nav{\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    padding: 50px 150PX;\n    animation: nav-loader 1000ms;\n}\n\n/* List styling */\n\n#nav ul{\n    display: flex;\n    align-items: center;\n    list-style: none;\n    transition: 500ms;\n}\n\n#nav li{\n    margin: 0 25px;\n}\n\n#nav a{\n    position: relative;\n    color: white;\n    text-decoration: none;\n    font-size: 1.3rem;\n}\n\n#nav a::after{\n    position: absolute;\n    content: '';\n    background-color: var(--gold); \n    height: 2px;\n    width: 0;\n    left: 0;\n    bottom: -2px;\n    transition: 500ms;\n}\n\n#nav a:hover::after{\n    width: 100%;\n}\n\n#nav a:hover{\n    opacity: 1;\n    font-weight: bold;\n}\n\n/* nav animation */\n\n@keyframes nav-loader{\n    0%{\n        transform: translateY(-100%);\n        opacity: 0;\n    }\n\n    100%{\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@media screen and (max-width: 1200px) {\n    #nav{\n        flex-direction: column;\n        align-items: flex-end;\n        padding: 30px;\n    }\n\n    #nav ul{\n        display: none;\n        flex-direction: column;\n        align-items: flex-end;\n        z-index: 1;\n    }\n\n    #nav li{\n        margin: 5px 0;\n    }\n\n    .nav-ul.active-menu{\n        display: flex !important;\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/header/nav.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,oBAAoB;IACpB,mBAAmB;IACnB,4BAA4B;AAChC;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,6BAA6B;IAC7B,WAAW;IACX,QAAQ;IACR,OAAO;IACP,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,UAAU;IACV,iBAAiB;AACrB;;AAEA,kBAAkB;;AAElB;IACI;QACI,4BAA4B;QAC5B,UAAU;IACd;;IAEA;QACI,wBAAwB;QACxB,UAAU;IACd;AACJ;;AAEA;IACI;QACI,sBAAsB;QACtB,qBAAqB;QACrB,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,qBAAqB;QACrB,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,wBAAwB;IAC5B;AACJ","sourcesContent":["#nav{\n    display: flex;\n    align-items: center;\n    justify-content: end;\n    padding: 50px 150PX;\n    animation: nav-loader 1000ms;\n}\n\n/* List styling */\n\n#nav ul{\n    display: flex;\n    align-items: center;\n    list-style: none;\n    transition: 500ms;\n}\n\n#nav li{\n    margin: 0 25px;\n}\n\n#nav a{\n    position: relative;\n    color: white;\n    text-decoration: none;\n    font-size: 1.3rem;\n}\n\n#nav a::after{\n    position: absolute;\n    content: '';\n    background-color: var(--gold); \n    height: 2px;\n    width: 0;\n    left: 0;\n    bottom: -2px;\n    transition: 500ms;\n}\n\n#nav a:hover::after{\n    width: 100%;\n}\n\n#nav a:hover{\n    opacity: 1;\n    font-weight: bold;\n}\n\n/* nav animation */\n\n@keyframes nav-loader{\n    0%{\n        transform: translateY(-100%);\n        opacity: 0;\n    }\n\n    100%{\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n@media screen and (max-width: 1200px) {\n    #nav{\n        flex-direction: column;\n        align-items: flex-end;\n        padding: 30px;\n    }\n\n    #nav ul{\n        display: none;\n        flex-direction: column;\n        align-items: flex-end;\n        z-index: 1;\n    }\n\n    #nav li{\n        margin: 5px 0;\n    }\n\n    .nav-ul.active-menu{\n        display: flex !important;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/main/about/about.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/main/about/about.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#about-me{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    padding: 50px 10px;\n    background-image: linear-gradient(to bottom, rgb(59 125 79), #eaeaea);\n}\n\n/* Header */\n\n#about-me h1{\n    color: rgb(115, 255, 157);\n    font-size: 6.5rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    text-align: center;\n    opacity: 0;\n}\n\n#about-me h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards;\n}\n\n/* About Container */\n\n.about-container{\n    display: flex;\n    align-items: center;\n    column-gap: 25px;\n    opacity: 0;\n}\n\n.about-container.reveal.active{\n    animation: scale-animation 800ms 400ms forwards;\n}\n\n/* About me */\n\n.about{\n    padding: 20px;\n    max-width: 1000px;\n    background-color: #fcfbf8;\n    border-radius: 10px;\n    border-left: 10px solid rgb(115, 255, 157);\n    border-right: 10px solid rgb(115, 255, 157);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.about p,\n.about p span{\n    font-family: var(--VT323);\n    font-weight: 400;\n    font-size: 1.45rem;\n    line-height: 1.2;\n    color: black;\n}\n\n.about p :nth-child(1){\n    color: \trgb(250, 68, 84);\n}\n\n.about p :nth-child(2){\n    color: blueviolet;\n}\n\n.about p :nth-child(3){\n    color: \tpink;\n}\n\n.about p :nth-child(4){\n    color: \tlightskyblue;\n}\n\n/* Player */\n\n.player-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    opacity: 0\n}\n\n.player-content.reveal.active{\n    animation: scale-animation 800ms forwards 400ms;\n}\n\n.player-content img{\n   width: 350px;\n   margin: 30px 0;\n}\n\n/* Keyframe */\n\n@keyframes scale-animation{\n    from{\n        opacity: 0;\n        transform: scale(0);\n    }\n    to{\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n/* Media */\n\n@media screen and (max-width: 830px) {\n    .about-container{\n        flex-direction: column;\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/main/about/about.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,qEAAqE;AACzE;;AAEA,WAAW;;AAEX;IACI,yBAAyB;IACzB,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,+BAA+B;IAC/B,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,wCAAwC;AAC5C;;AAEA,oBAAoB;;AAEpB;IACI,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,+CAA+C;AACnD;;AAEA,aAAa;;AAEb;IACI,aAAa;IACb,iBAAiB;IACjB,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;IAC1C,2CAA2C;IAC3C,iDAAiD;AACrD;;AAEA;;IAEI,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,oBAAoB;AACxB;;AAEA,WAAW;;AAEX;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB;AACJ;;AAEA;IACI,+CAA+C;AACnD;;AAEA;GACG,YAAY;GACZ,cAAc;AACjB;;AAEA,aAAa;;AAEb;IACI;QACI,UAAU;QACV,mBAAmB;IACvB;IACA;QACI,UAAU;QACV,mBAAmB;IACvB;AACJ;;AAEA,UAAU;;AAEV;IACI;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":["#about-me{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: auto;\n    padding: 50px 10px;\n    background-image: linear-gradient(to bottom, rgb(59 125 79), #eaeaea);\n}\n\n/* Header */\n\n#about-me h1{\n    color: rgb(115, 255, 157);\n    font-size: 6.5rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    text-align: center;\n    opacity: 0;\n}\n\n#about-me h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards;\n}\n\n/* About Container */\n\n.about-container{\n    display: flex;\n    align-items: center;\n    column-gap: 25px;\n    opacity: 0;\n}\n\n.about-container.reveal.active{\n    animation: scale-animation 800ms 400ms forwards;\n}\n\n/* About me */\n\n.about{\n    padding: 20px;\n    max-width: 1000px;\n    background-color: #fcfbf8;\n    border-radius: 10px;\n    border-left: 10px solid rgb(115, 255, 157);\n    border-right: 10px solid rgb(115, 255, 157);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.about p,\n.about p span{\n    font-family: var(--VT323);\n    font-weight: 400;\n    font-size: 1.45rem;\n    line-height: 1.2;\n    color: black;\n}\n\n.about p :nth-child(1){\n    color: \trgb(250, 68, 84);\n}\n\n.about p :nth-child(2){\n    color: blueviolet;\n}\n\n.about p :nth-child(3){\n    color: \tpink;\n}\n\n.about p :nth-child(4){\n    color: \tlightskyblue;\n}\n\n/* Player */\n\n.player-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    opacity: 0\n}\n\n.player-content.reveal.active{\n    animation: scale-animation 800ms forwards 400ms;\n}\n\n.player-content img{\n   width: 350px;\n   margin: 30px 0;\n}\n\n/* Keyframe */\n\n@keyframes scale-animation{\n    from{\n        opacity: 0;\n        transform: scale(0);\n    }\n    to{\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n/* Media */\n\n@media screen and (max-width: 830px) {\n    .about-container{\n        flex-direction: column;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/main/languages/languages.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/main/languages/languages.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/languages/html-c.png */ "./src/assets/languages/html-c.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/languages/css-c.png */ "./src/assets/languages/css-c.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/languages/js-c.png */ "./src/assets/languages/js-c.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/languages/react-c.png */ "./src/assets/languages/react-c.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#languages{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px 10px; \n    background-image: linear-gradient(to bottom, rgb(0 131 214), #eaeaea);\n}\n/* Heading */\n\n#languages h1{\n    color: rgb(97, 255, 242);\n    font-family: var(--VT323);\n    font-size: 6rem; \n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    opacity: 0;\n}\n\n\n/* Card content */\n\n.languages-content{\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(4, minmax(60px, 80px));\n    column-gap: 10%; \n\n    padding: 20px;\n    max-width: 1000px;\n    width: 100%;\n\n    background-color: #fcfbf8; \n    border-radius: 10px;\n    border-right: 10px solid rgb(97, 255, 242);\n    border-left: 10px solid rgb(97, 255, 242);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    opacity: 0;\n}\n\n/* div */\n\n.languages-content div{\n    position: relative;\n    transition: 300ms;\n    overflow: hidden;\n}\n\n.languages-content div::before{\n    position: absolute;\n    display: block;\n    content: ''; \n    top: 0;\n    left: 0;\n\n    /* border */\n    border-bottom: 3px solid rgb(97, 255, 242);\n\n    /* image */\n    background-repeat: no-repeat;\n    background-size: 100%; \n    width: 100%;\n    height: 0;\n    opacity: 1;\n    transition: 400ms;\n}\n\n/* Image */\n\n.book{\n    opacity: 0;\n}\n\n.book img{\n    width: 250px;\n}\n\n/* Html */\n.languages-content div.html::before{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* Css */\n.languages-content div.css::before{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.languages-content div.js::before{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.languages-content div.react::before{\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n\n/* Hover */\n.languages-content div:hover::before{\n    height: 100%;\n}\n\n.languages-content img{\n    width: 100%;\n}\n\n/* Scroll Animations */\n\n#languages h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards; \n}\n\n.languages-content.reveal.active{\n    animation: scale-animation 800ms  400ms forwards;\n}\n\n.book.reveal.active{\n    animation: scale-animation 800ms 400ms forwards; \n}\n\n/* Media */\n\n@media screen and (max-width: 500px) {\n    #languages h1{\n        font-size: 5.5rem;\n    }\n}\n\n@media screen and (max-width: 430px) {\n    #languages h1{\n        font-size: 4.5rem;\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/main/languages/languages.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,qEAAqE;AACzE;AACA,YAAY;;AAEZ;IACI,wBAAwB;IACxB,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,UAAU;AACd;;;AAGA,iBAAiB;;AAEjB;IACI,aAAa;IACb,uBAAuB;IACvB,oDAAoD;IACpD,eAAe;;IAEf,aAAa;IACb,iBAAiB;IACjB,WAAW;;IAEX,yBAAyB;IACzB,mBAAmB;IACnB,0CAA0C;IAC1C,yCAAyC;IACzC,iDAAiD;IACjD,UAAU;AACd;;AAEA,QAAQ;;AAER;IACI,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,MAAM;IACN,OAAO;;IAEP,WAAW;IACX,0CAA0C;;IAE1C,UAAU;IACV,4BAA4B;IAC5B,qBAAqB;IACrB,WAAW;IACX,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;;AAEA,UAAU;;AAEV;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA,SAAS;AACT;IACI,yDAAyD;AAC7D;;AAEA,QAAQ;AACR;IACI,yDAAwD;AAC5D;;AAEA;IACI,yDAAuD;AAC3D;;AAEA;IACI,yDAA0D;AAC9D;;AAEA,UAAU;AACV;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA,sBAAsB;;AAEtB;IACI,wCAAwC;AAC5C;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,+CAA+C;AACnD;;AAEA,UAAU;;AAEV;IACI;QACI,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["#languages{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px 10px; \n    background-image: linear-gradient(to bottom, rgb(0 131 214), #eaeaea);\n}\n/* Heading */\n\n#languages h1{\n    color: rgb(97, 255, 242);\n    font-family: var(--VT323);\n    font-size: 6rem; \n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    opacity: 0;\n}\n\n\n/* Card content */\n\n.languages-content{\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(4, minmax(60px, 80px));\n    column-gap: 10%; \n\n    padding: 20px;\n    max-width: 1000px;\n    width: 100%;\n\n    background-color: #fcfbf8; \n    border-radius: 10px;\n    border-right: 10px solid rgb(97, 255, 242);\n    border-left: 10px solid rgb(97, 255, 242);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    opacity: 0;\n}\n\n/* div */\n\n.languages-content div{\n    position: relative;\n    transition: 300ms;\n    overflow: hidden;\n}\n\n.languages-content div::before{\n    position: absolute;\n    display: block;\n    content: ''; \n    top: 0;\n    left: 0;\n\n    /* border */\n    border-bottom: 3px solid rgb(97, 255, 242);\n\n    /* image */\n    background-repeat: no-repeat;\n    background-size: 100%; \n    width: 100%;\n    height: 0;\n    opacity: 1;\n    transition: 400ms;\n}\n\n/* Image */\n\n.book{\n    opacity: 0;\n}\n\n.book img{\n    width: 250px;\n}\n\n/* Html */\n.languages-content div.html::before{\n    background-image: url('/src/assets/languages/html-c.png');\n}\n\n/* Css */\n.languages-content div.css::before{\n    background-image: url('/src/assets/languages/css-c.png');\n}\n\n.languages-content div.js::before{\n    background-image: url('/src/assets/languages/js-c.png');\n}\n\n.languages-content div.react::before{\n    background-image: url('/src/assets/languages/react-c.png');\n}\n\n/* Hover */\n.languages-content div:hover::before{\n    height: 100%;\n}\n\n.languages-content img{\n    width: 100%;\n}\n\n/* Scroll Animations */\n\n#languages h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards; \n}\n\n.languages-content.reveal.active{\n    animation: scale-animation 800ms  400ms forwards;\n}\n\n.book.reveal.active{\n    animation: scale-animation 800ms 400ms forwards; \n}\n\n/* Media */\n\n@media screen and (max-width: 500px) {\n    #languages h1{\n        font-size: 5.5rem;\n    }\n}\n\n@media screen and (max-width: 430px) {\n    #languages h1{\n        font-size: 4.5rem;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/main/main.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/main/main.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#main{\n    position: relative;\n    width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/components/main/main.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;AACf","sourcesContent":["#main{\n    position: relative;\n    width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/main/projects/projects.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/main/projects/projects.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#projects{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px 10px;\n    background-image: linear-gradient(to bottom, rgb(0, 167, 153), #eaeaea);\n}\n\n#projects h1{\n    font-family: var(--VT323);\n    font-size: 6rem;\n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    color: rgb(0, 255, 136);\n    opacity: 0;\n}\n\n#projects h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards; \n}\n\n.projects-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1000px;\n    width: 100%;\n}\n\n/* Project cards */\n\n.project{\n    font-size: 3rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    text-align: center;\n    width: 100%;\n    height: 300px;\n    padding: 50px;\n    margin-bottom: 60px;\n    background-color: #fcfbf8;\n    border-radius: 10px;\n    border-right: 10px solid rgb(0, 255, 136);\n    border-left: 10px solid rgb(0, 255, 136);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    opacity: 0;\n    transition: 400ms;\n}\n\n.project.reveal.active{\n    animation: show 800ms 400ms forwards;\n}\n\n.project:hover{\n    transform: scale(1.05);\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n/* Image */\n\n.chest img{\n    width: 250px;\n    padding: 50px 0;\n}\n\n\n\n@keyframes show{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/components/main/projects/projects.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,uEAAuE;AAC3E;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,+BAA+B;IAC/B,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,WAAW;AACf;;AAEA,kBAAkB;;AAElB;IACI,eAAe;IACf,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,yCAAyC;IACzC,wCAAwC;IACxC,iDAAiD;IACjD,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,4CAA4C;AAChD;;AAEA,UAAU;;AAEV;IACI,YAAY;IACZ,eAAe;AACnB;;;;AAIA;IACI;QACI,UAAU;IACd;IACA;QACI,UAAU;IACd;AACJ","sourcesContent":["#projects{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px 10px;\n    background-image: linear-gradient(to bottom, rgb(0, 167, 153), #eaeaea);\n}\n\n#projects h1{\n    font-family: var(--VT323);\n    font-size: 6rem;\n    font-weight: 400;\n    text-shadow: var(--dark-shadow);\n    color: rgb(0, 255, 136);\n    opacity: 0;\n}\n\n#projects h1.reveal.active{\n    animation: flicker 1500ms 300ms forwards; \n}\n\n.projects-content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1000px;\n    width: 100%;\n}\n\n/* Project cards */\n\n.project{\n    font-size: 3rem;\n    font-family: var(--VT323);\n    font-weight: 400;\n    text-align: center;\n    width: 100%;\n    height: 300px;\n    padding: 50px;\n    margin-bottom: 60px;\n    background-color: #fcfbf8;\n    border-radius: 10px;\n    border-right: 10px solid rgb(0, 255, 136);\n    border-left: 10px solid rgb(0, 255, 136);\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n    opacity: 0;\n    transition: 400ms;\n}\n\n.project.reveal.active{\n    animation: show 800ms 400ms forwards;\n}\n\n.project:hover{\n    transform: scale(1.05);\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n/* Image */\n\n.chest img{\n    width: 250px;\n    padding: 50px 0;\n}\n\n\n\n@keyframes show{\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/parallax/parallax.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/parallax/parallax.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".parallax-content{\n    position: relative;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    width: 100%;\n    height: 100vh;\n    background-color: lightblue;\n}\n\n/* Text */\n\n.parallax-text{\n    position: absolute;\n    top: 35%;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding: 50px;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.parallax-text h1,\n.parallax-text span\n{\n    color: #FFD166;\n    text-align: center;\n    font-weight: 400;\n    font-family: var(--VT323);\n    text-shadow: var(--dark-shadow);\n}\n\n.parallax-text h1{\n    font-size: 8rem;\n    animation: show-text 1500ms;\n    margin-bottom: 20px;\n}\n\n.parallax-text span{\n    font-size: 2.3rem;\n    letter-spacing: 1px;\n    opacity: 0;\n    animation: flicker 800ms 1000ms forwards;\n}\n\n/* Images */\n\n.sun, .cloud1, .cloud2, .cloud3, .cloud4, .cloud5, .island, .background, .deer{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.boat{\n    position: absolute;\n    top: 55%;\n    left: 90%;\n    width: 150px;\n\n}\n\n\n@keyframes show-text{\n    from{\n        opacity: 0;\n        transform: translateY(100%);\n    }\n    to{\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes flicker{\n    0%{\n        opacity: 0;\n    }\n    15%{\n        opacity: 20%;\n    }\n    22%{\n        opacity: 5%;\n    }\n    35%{\n        opacity: 40%;\n    }\n    40%{\n       opacity: 0; \n    }\n    60%{\n        opacity: 80%;\n    }\n    79%{\n       opacity: 15%; \n    }\n    100%{\n        opacity: 100%;\n    }\n    \n}\n\n/* Media */\n\n", "",{"version":3,"sources":["webpack://./src/components/parallax/parallax.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,2BAA2B;AAC/B;;AAEA,SAAS;;AAET;IACI,kBAAkB;IAClB,QAAQ;IACR,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,UAAU;AACd;;AAEA;;;IAGI,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;IACV,wCAAwC;AAC5C;;AAEA,WAAW;;AAEX;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;;AAEhB;;;AAGA;IACI;QACI,UAAU;QACV,2BAA2B;IAC/B;IACA;QACI,UAAU;QACV,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,WAAW;IACf;IACA;QACI,YAAY;IAChB;IACA;OACG,UAAU;IACb;IACA;QACI,YAAY;IAChB;IACA;OACG,YAAY;IACf;IACA;QACI,aAAa;IACjB;;AAEJ;;AAEA,UAAU","sourcesContent":[".parallax-content{\n    position: relative;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    width: 100%;\n    height: 100vh;\n    background-color: lightblue;\n}\n\n/* Text */\n\n.parallax-text{\n    position: absolute;\n    top: 35%;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding: 50px;\n    overflow: hidden;\n    z-index: 1;\n}\n\n.parallax-text h1,\n.parallax-text span\n{\n    color: #FFD166;\n    text-align: center;\n    font-weight: 400;\n    font-family: var(--VT323);\n    text-shadow: var(--dark-shadow);\n}\n\n.parallax-text h1{\n    font-size: 8rem;\n    animation: show-text 1500ms;\n    margin-bottom: 20px;\n}\n\n.parallax-text span{\n    font-size: 2.3rem;\n    letter-spacing: 1px;\n    opacity: 0;\n    animation: flicker 800ms 1000ms forwards;\n}\n\n/* Images */\n\n.sun, .cloud1, .cloud2, .cloud3, .cloud4, .cloud5, .island, .background, .deer{\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.boat{\n    position: absolute;\n    top: 55%;\n    left: 90%;\n    width: 150px;\n\n}\n\n\n@keyframes show-text{\n    from{\n        opacity: 0;\n        transform: translateY(100%);\n    }\n    to{\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n@keyframes flicker{\n    0%{\n        opacity: 0;\n    }\n    15%{\n        opacity: 20%;\n    }\n    22%{\n        opacity: 5%;\n    }\n    35%{\n        opacity: 40%;\n    }\n    40%{\n       opacity: 0; \n    }\n    60%{\n        opacity: 80%;\n    }\n    79%{\n       opacity: 15%; \n    }\n    100%{\n        opacity: 100%;\n    }\n    \n}\n\n/* Media */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/pre-loader/pre-loader.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/pre-loader/pre-loader.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/assets/loader.gif */ "./src/assets/loader.gif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#preloader{\n    background: rgb(74, 74, 238) url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n    background-size: 15%;\n    height: 100vh;\n    width: 100%;\n    position: fixed;\n    z-index: 100;\n}", "",{"version":3,"sources":["webpack://./src/components/pre-loader/pre-loader.css"],"names":[],"mappings":"AAAA;IACI,qFAAyE;IACzE,oBAAoB;IACpB,aAAa;IACb,WAAW;IACX,eAAe;IACf,YAAY;AAChB","sourcesContent":["#preloader{\n    background: rgb(74, 74, 238) url(/src/assets/loader.gif) center no-repeat;\n    background-size: 15%;\n    height: 100vh;\n    width: 100%;\n    position: fixed;\n    z-index: 100;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Acme&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    Font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace; \n}\n\n:root{\n    --grey: rgb(207, 219, 213);\n    --light-grey: rgb(232, 237, 223); \n    --gold: rgb(245, 203, 92); \n    --black: rgb(36, 36, 35);\n    --light-black: rgb(51, 53, 51); \n    --VT323:'VT323', monospace;\n    --shadow: 0 0 3px white, 0 0 3px white, 0 0 3px white, 0 0 3px white;\n    --dark-shadow: 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black;\n}\n\nhtml{\n    scroll-behavior: smooth;\n}\n\nbody{\n    background-color: rgb(69 80 160); \n}", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAIA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,uFAAuF;AAC3F;;AAEA;IACI,0BAA0B;IAC1B,gCAAgC;IAChC,yBAAyB;IACzB,wBAAwB;IACxB,8BAA8B;IAC9B,0BAA0B;IAC1B,oEAAoE;IACpE,yEAAyE;AAC7E;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');\n\n*{\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    Font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace; \n}\n\n:root{\n    --grey: rgb(207, 219, 213);\n    --light-grey: rgb(232, 237, 223); \n    --gold: rgb(245, 203, 92); \n    --black: rgb(36, 36, 35);\n    --light-black: rgb(51, 53, 51); \n    --VT323:'VT323', monospace;\n    --shadow: 0 0 3px white, 0 0 3px white, 0 0 3px white, 0 0 3px white;\n    --dark-shadow: 0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black;\n}\n\nhtml{\n    scroll-behavior: smooth;\n}\n\nbody{\n    background-color: rgb(69 80 160); \n}"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
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

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/footer/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/header.css":
/*!******************************************!*\
  !*** ./src/components/header/header.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/menu/menu.css":
/*!*********************************************!*\
  !*** ./src/components/header/menu/menu.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/menu/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/header/nav.css":
/*!***************************************!*\
  !*** ./src/components/header/nav.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/header/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/main/about/about.css":
/*!*********************************************!*\
  !*** ./src/components/main/about/about.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/main/about/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/main/languages/languages.css":
/*!*****************************************************!*\
  !*** ./src/components/main/languages/languages.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_languages_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./languages.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/main/languages/languages.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_languages_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_languages_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_languages_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_languages_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/main/main.css":
/*!**************************************!*\
  !*** ./src/components/main/main.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/main/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/main/projects/projects.css":
/*!***************************************************!*\
  !*** ./src/components/main/projects/projects.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./projects.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/main/projects/projects.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_projects_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/parallax/parallax.css":
/*!**********************************************!*\
  !*** ./src/components/parallax/parallax.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_parallax_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./parallax.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/parallax/parallax.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_parallax_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_parallax_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_parallax_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_parallax_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/pre-loader/pre-loader.css":
/*!**************************************************!*\
  !*** ./src/components/pre-loader/pre-loader.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_pre_loader_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./pre-loader.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/pre-loader/pre-loader.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_pre_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_pre_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_pre_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_pre_loader_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/header/menu/menu.js":
/*!********************************************!*\
  !*** ./src/components/header/menu/menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuHandler": () => (/* binding */ menuHandler)
/* harmony export */ });
const menu = document.querySelector(".menu");
const ul = document.querySelector(".nav-ul");
const anchors = document.querySelectorAll(".nav-a");

function menuHandler() {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    ul.classList.toggle("active-menu");
  });

  anchors.forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("active-menu");
      ul.classList.remove("active-menu");
    });
  });
}


/***/ }),

/***/ "./src/components/main/about/about.js":
/*!********************************************!*\
  !*** ./src/components/main/about/about.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCharacter": () => (/* binding */ renderCharacter)
/* harmony export */ });
/* harmony import */ var _src_assets_pirate_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/pirate.gif */ "./src/assets/pirate.gif");


function renderCharacter() {
  const container = document.querySelector(".player-content");

  const newImage = new Image();
  newImage.src = _src_assets_pirate_gif__WEBPACK_IMPORTED_MODULE_0__;

  container.appendChild(newImage);
}


/***/ }),

/***/ "./src/components/main/languages/languages.js":
/*!****************************************************!*\
  !*** ./src/components/main/languages/languages.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLanguages": () => (/* binding */ renderLanguages),
/* harmony export */   "renderPc": () => (/* binding */ renderPc)
/* harmony export */ });
/* harmony import */ var _src_assets_languages_html_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/languages/html.png */ "./src/assets/languages/html.png");
/* harmony import */ var _src_assets_languages_css_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/assets/languages/css.png */ "./src/assets/languages/css.png");
/* harmony import */ var _src_assets_languages_js_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/assets/languages/js.png */ "./src/assets/languages/js.png");
/* harmony import */ var _src_assets_languages_react_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/assets/languages/react.png */ "./src/assets/languages/react.png");
/* harmony import */ var _src_assets_book_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/book.gif */ "./src/assets/book.gif");






const languagesArray = [
  { url: _src_assets_languages_html_png__WEBPACK_IMPORTED_MODULE_0__, class: "html" },
  { url: _src_assets_languages_css_png__WEBPACK_IMPORTED_MODULE_1__, class: "css" },
  { url: _src_assets_languages_js_png__WEBPACK_IMPORTED_MODULE_2__, class: "js" },
  { url: _src_assets_languages_react_png__WEBPACK_IMPORTED_MODULE_3__, class: "react" },
];

function renderLanguages() {
  const container = document.querySelector(".languages-content");

  languagesArray.forEach((lang) => {
    const div = document.createElement("div");
    const newImage = new Image();

    newImage.src = lang.url;
    div.setAttribute("class", lang.class);
    container.appendChild(div);
    div.appendChild(newImage);
  });
}

function renderPc() {
  const container = document.querySelector(".book");
  const newImage = new Image();

  newImage.src = _src_assets_book_gif__WEBPACK_IMPORTED_MODULE_4__;
  container.appendChild(newImage);
}


/***/ }),

/***/ "./src/components/main/projects/projects.js":
/*!**************************************************!*\
  !*** ./src/components/main/projects/projects.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderChest": () => (/* binding */ renderChest)
/* harmony export */ });
/* harmony import */ var _src_assets_chest_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/chest.gif */ "./src/assets/chest.gif");


function renderChest() {
  const cont = document.querySelector(".chest");
  const newImage = new Image();

  newImage.src = _src_assets_chest_gif__WEBPACK_IMPORTED_MODULE_0__;
  cont.appendChild(newImage);
}


/***/ }),

/***/ "./src/components/parallax/parallax.js":
/*!*********************************************!*\
  !*** ./src/components/parallax/parallax.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parallaxEffect": () => (/* binding */ parallaxEffect),
/* harmony export */   "renderPics": () => (/* binding */ renderPics)
/* harmony export */ });
/* harmony import */ var _src_assets_sun_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/assets/sun.png */ "./src/assets/sun.png");
/* harmony import */ var _src_assets_cloud_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/assets/cloud.png */ "./src/assets/cloud.png");
/* harmony import */ var _src_assets_cloud_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/assets/cloud 2.png */ "./src/assets/cloud 2.png");
/* harmony import */ var _src_assets_cloud_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/assets/cloud 3.png */ "./src/assets/cloud 3.png");
/* harmony import */ var _src_assets_cloud_4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/assets/cloud 4.png */ "./src/assets/cloud 4.png");
/* harmony import */ var _src_assets_cloud_5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/assets/cloud 5.png */ "./src/assets/cloud 5.png");
/* harmony import */ var _src_assets_island_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/assets/island.png */ "./src/assets/island.png");
/* harmony import */ var _src_assets_boat_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/assets/boat.png */ "./src/assets/boat.png");
/* harmony import */ var _src_assets_Background_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/assets/Background.png */ "./src/assets/Background.png");
/* harmony import */ var _src_assets_deer_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../src/assets/deer.png */ "./src/assets/deer.png");











const picArray = [
  { url: _src_assets_sun_png__WEBPACK_IMPORTED_MODULE_0__, class: "sun" },
  { url: _src_assets_cloud_png__WEBPACK_IMPORTED_MODULE_1__, class: "cloud1" },
  { url: _src_assets_cloud_2_png__WEBPACK_IMPORTED_MODULE_2__, class: "cloud2" },
  { url: _src_assets_cloud_3_png__WEBPACK_IMPORTED_MODULE_3__, class: "cloud3" },
  { url: _src_assets_cloud_4_png__WEBPACK_IMPORTED_MODULE_4__, class: "cloud4" },
  { url: _src_assets_cloud_5_png__WEBPACK_IMPORTED_MODULE_5__, class: "cloud5" },
  { url: _src_assets_island_png__WEBPACK_IMPORTED_MODULE_6__, class: "island" },
  { url: _src_assets_boat_png__WEBPACK_IMPORTED_MODULE_7__, class: "boat" },
  { url: _src_assets_Background_png__WEBPACK_IMPORTED_MODULE_8__, class: "background" },
  { url: _src_assets_deer_png__WEBPACK_IMPORTED_MODULE_9__, class: "deer" },
];

/* Render */

function renderPics() {
  const content = document.querySelector(".parallax-content");

  picArray.forEach((pic) => {
    const newpic = new Image();
    newpic.src = pic.url;
    newpic.setAttribute("class", pic.class);

    content.appendChild(newpic);
  });
}

/* Effect */

function parallaxEffect() {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    document.querySelector(".boat").style.left = 90 + value * -0.05 + "%";
    document.querySelector(".boat").style.top = 55 + value * 0.05 + "%";
    document.querySelector(".island").style.top = value * 0.05 + "%";
    document.querySelector(".sun").style.top = value * -0.01 + "%";
    document.querySelector(".cloud5").style.top = value * -0.03 + "%";
    document.querySelector(".cloud4").style.top = value * -0.04 + "%";
    document.querySelector(".cloud3").style.top = value * -0.02 + "%";
    document.querySelector(".cloud2").style.top = value * -0.01 + "%";
    document.querySelector(".cloud1").style.top = value * -0.05 + "%";
    document.querySelector(".parallax-text").style.top =
      35 + value * -0.04 + "%";
  });
}


/***/ }),

/***/ "./src/components/pre-loader/pre.loader.js":
/*!*************************************************!*\
  !*** ./src/components/pre-loader/pre.loader.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloader": () => (/* binding */ preloader)
/* harmony export */ });
function preloader() {
  const loader = document.getElementById("preloader");

  window.addEventListener("load", () => (loader.style.display = "none"));
}


/***/ }),

/***/ "./src/components/scroll/scroll.js":
/*!*****************************************!*\
  !*** ./src/components/scroll/scroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollHandler": () => (/* binding */ scrollHandler)
/* harmony export */ });
function scrollHandler() {
  const array = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < array.length; i++) {
      let e = array[i];
      let viewDist = e.getBoundingClientRect().top - window.innerHeight;

      if (viewDist < 0) {
        e.classList.add("active");
      }
    }
  });
}


/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _components_pre_loader_pre_loader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pre-loader/pre-loader.css */ "./src/components/pre-loader/pre-loader.css");
/* harmony import */ var _components_header_header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.css */ "./src/components/header/header.css");
/* harmony import */ var _components_header_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/nav.css */ "./src/components/header/nav.css");
/* harmony import */ var _components_header_menu_menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/menu/menu.css */ "./src/components/header/menu/menu.css");
/* harmony import */ var _components_parallax_parallax_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/parallax/parallax.css */ "./src/components/parallax/parallax.css");
/* harmony import */ var _components_main_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.css */ "./src/components/main/main.css");
/* harmony import */ var _components_main_about_about_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/about/about.css */ "./src/components/main/about/about.css");
/* harmony import */ var _components_main_languages_languages_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/languages/languages.css */ "./src/components/main/languages/languages.css");
/* harmony import */ var _components_main_projects_projects_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/projects/projects.css */ "./src/components/main/projects/projects.css");
/* harmony import */ var _components_footer_footer_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.css */ "./src/components/footer/footer.css");


/* preloader */


/* header */




/* parallax */


/* body */





/* footer */



/***/ }),

/***/ "./src/assets/Background.png":
/*!***********************************!*\
  !*** ./src/assets/Background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d9022e32be100f877fb.png";

/***/ }),

/***/ "./src/assets/boat.png":
/*!*****************************!*\
  !*** ./src/assets/boat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1059861993506486ab3.png";

/***/ }),

/***/ "./src/assets/book.gif":
/*!*****************************!*\
  !*** ./src/assets/book.gif ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b9823f24a53a5767193.gif";

/***/ }),

/***/ "./src/assets/chest.gif":
/*!******************************!*\
  !*** ./src/assets/chest.gif ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acea9b848e4c88a4f7c1.gif";

/***/ }),

/***/ "./src/assets/cloud 2.png":
/*!********************************!*\
  !*** ./src/assets/cloud 2.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bc7495bf1f3bd056a64.png";

/***/ }),

/***/ "./src/assets/cloud 3.png":
/*!********************************!*\
  !*** ./src/assets/cloud 3.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8dee5e0bf0406a301070.png";

/***/ }),

/***/ "./src/assets/cloud 4.png":
/*!********************************!*\
  !*** ./src/assets/cloud 4.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ea64e3ef4dcc6c31d000.png";

/***/ }),

/***/ "./src/assets/cloud 5.png":
/*!********************************!*\
  !*** ./src/assets/cloud 5.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d5a8c4437aa87735545.png";

/***/ }),

/***/ "./src/assets/cloud.png":
/*!******************************!*\
  !*** ./src/assets/cloud.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bddf580aecb109d54cda.png";

/***/ }),

/***/ "./src/assets/deer.png":
/*!*****************************!*\
  !*** ./src/assets/deer.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26f476dd659f05c5d979.png";

/***/ }),

/***/ "./src/assets/island.png":
/*!*******************************!*\
  !*** ./src/assets/island.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a29479637f16631416b1.png";

/***/ }),

/***/ "./src/assets/languages/css-c.png":
/*!****************************************!*\
  !*** ./src/assets/languages/css-c.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cea6378c37eb3b778015.png";

/***/ }),

/***/ "./src/assets/languages/css.png":
/*!**************************************!*\
  !*** ./src/assets/languages/css.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab33b527129e3353911d.png";

/***/ }),

/***/ "./src/assets/languages/html-c.png":
/*!*****************************************!*\
  !*** ./src/assets/languages/html-c.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fa37d0cfa64bfe03474.png";

/***/ }),

/***/ "./src/assets/languages/html.png":
/*!***************************************!*\
  !*** ./src/assets/languages/html.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d139b89fff03e977468a.png";

/***/ }),

/***/ "./src/assets/languages/js-c.png":
/*!***************************************!*\
  !*** ./src/assets/languages/js-c.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0183ed24cdce78691626.png";

/***/ }),

/***/ "./src/assets/languages/js.png":
/*!*************************************!*\
  !*** ./src/assets/languages/js.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55d0997d183af6b49507.png";

/***/ }),

/***/ "./src/assets/languages/react-c.png":
/*!******************************************!*\
  !*** ./src/assets/languages/react-c.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eece7e6214febdb0cb12.png";

/***/ }),

/***/ "./src/assets/languages/react.png":
/*!****************************************!*\
  !*** ./src/assets/languages/react.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c635bd3906b4f1b76bf1.png";

/***/ }),

/***/ "./src/assets/loader.gif":
/*!*******************************!*\
  !*** ./src/assets/loader.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ccb3ec26b0623e1ae5a.gif";

/***/ }),

/***/ "./src/assets/pirate.gif":
/*!*******************************!*\
  !*** ./src/assets/pirate.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a809e98078272dd3c0c.gif";

/***/ }),

/***/ "./src/assets/sun.png":
/*!****************************!*\
  !*** ./src/assets/sun.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d0f6010e0ae20f6fa9e.png";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _components_header_menu_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/menu/menu.js */ "./src/components/header/menu/menu.js");
/* harmony import */ var _components_main_about_about_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/about/about.js */ "./src/components/main/about/about.js");
/* harmony import */ var _components_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/parallax/parallax.js */ "./src/components/parallax/parallax.js");
/* harmony import */ var _components_pre_loader_pre_loader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pre-loader/pre.loader.js */ "./src/components/pre-loader/pre.loader.js");
/* harmony import */ var _components_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/scroll/scroll.js */ "./src/components/scroll/scroll.js");
/* harmony import */ var _components_main_languages_languages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/languages/languages.js */ "./src/components/main/languages/languages.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.js */ "./src/styles.js");
/* harmony import */ var _components_main_projects_projects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/projects/projects.js */ "./src/components/main/projects/projects.js");









/* preloader  */
(0,_components_pre_loader_pre_loader_js__WEBPACK_IMPORTED_MODULE_3__.preloader)();

/* Scroll */
(0,_components_scroll_scroll_js__WEBPACK_IMPORTED_MODULE_4__.scrollHandler)();

/* Header */
(0,_components_header_menu_menu_js__WEBPACK_IMPORTED_MODULE_0__.menuHandler)();

/*Parallax*/
(0,_components_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_2__.renderPics)();
(0,_components_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_2__.parallaxEffect)();

/* Main */
(0,_components_main_about_about_js__WEBPACK_IMPORTED_MODULE_1__.renderCharacter)();
(0,_components_main_languages_languages_js__WEBPACK_IMPORTED_MODULE_5__.renderLanguages)();
(0,_components_main_languages_languages_js__WEBPACK_IMPORTED_MODULE_5__.renderPc)();
(0,_components_main_projects_projects_js__WEBPACK_IMPORTED_MODULE_7__.renderChest)();

/* Footer */

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
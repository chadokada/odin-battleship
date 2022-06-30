/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300,100italic,100);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n  margin: 0;\n  padding: 0;\n  font-family: Roboto;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n   box-sizing: border-box;\n}\n\n.container{\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  grid-template-columns: 1fr 1fr;\n  height: 100vh;\n}\n\n.header{\n  grid-column: 1/3;\n  grid-row: 1/2;\n  height: 50px;\n}\n\n.player-container,\n.opponent-container{\n  display:flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n}\n\n.gameboard-padding{\n  width: 100%;\n}\n\ntable{\n  border-spacing: 0px;\n  border-collapse: collapse;\n  min-height: 11em;\n  min-width: 11em;\n}\n\ntd{\n  padding: 0;\n}\n\n.board-cell{\n  outline: 1px solid rgb(175, 175, 255);\n  height: 2em;\n  width: 2em;\n}\n\n.board-cell-content{\n  position: relative;\n  height: 2em;\n  width: 2em;\n}\n\n.hit{\n  /*\n  height: 2em;\n  width: 2em;\n  outline: 2px solid red;\n  box-sizing: border-box;\n  */\n  background-color: red;\n}\n\n.miss{\n  /*\n  height: 2em;\n  width: 2em;\n  height: 35px;\n  width: 35px;\n  border: 2px solid gray;\n  box-sizing: border-box;\n  */\n  background-color: gray;\n}\n\n.ship{\n  /*\n  height: 2em;\n  width: 2em;\n  height: 35px;\n  width: 35px;\n  */\n  background-color: rgb(200, 200, 255, 0.5);\n  border: 2px solid blue;\n  box-sizing: border-box;\n}\n\n.board-cell:hover{\n  background-color: rgb(225, 225, 255);\n}\n\n.square{\n  /*\n  height: 35px;\n  width: 35px;\n  */\n}\n\n.pink{\n  background-color: pink;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;EACnB,2BAA2B;EAC3B,8BAA8B;GAC7B,sBAAsB;AACzB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qCAAqC;EACrC,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;AACZ;;AAEA;EACE;;;;;GAKC;EACD,qBAAqB;AACvB;;AAEA;EACE;;;;;;;GAOC;EACD,sBAAsB;AACxB;;AAEA;EACE;;;;;GAKC;EACD,yCAAyC;EACzC,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE;;;GAGC;AACH;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["@import url(http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300,100italic,100);\n\nbody{\n  margin: 0;\n  padding: 0;\n  font-family: Roboto;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n   box-sizing: border-box;\n}\n\n.container{\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n  grid-template-columns: 1fr 1fr;\n  height: 100vh;\n}\n\n.header{\n  grid-column: 1/3;\n  grid-row: 1/2;\n  height: 50px;\n}\n\n.player-container,\n.opponent-container{\n  display:flex;\n  flex-flow: row wrap;\n  align-content: flex-start;\n}\n\n.gameboard-padding{\n  width: 100%;\n}\n\ntable{\n  border-spacing: 0px;\n  border-collapse: collapse;\n  min-height: 11em;\n  min-width: 11em;\n}\n\ntd{\n  padding: 0;\n}\n\n.board-cell{\n  outline: 1px solid rgb(175, 175, 255);\n  height: 2em;\n  width: 2em;\n}\n\n.board-cell-content{\n  position: relative;\n  height: 2em;\n  width: 2em;\n}\n\n.hit{\n  /*\n  height: 2em;\n  width: 2em;\n  outline: 2px solid red;\n  box-sizing: border-box;\n  */\n  background-color: red;\n}\n\n.miss{\n  /*\n  height: 2em;\n  width: 2em;\n  height: 35px;\n  width: 35px;\n  border: 2px solid gray;\n  box-sizing: border-box;\n  */\n  background-color: gray;\n}\n\n.ship{\n  /*\n  height: 2em;\n  width: 2em;\n  height: 35px;\n  width: 35px;\n  */\n  background-color: rgb(200, 200, 255, 0.5);\n  border: 2px solid blue;\n  box-sizing: border-box;\n}\n\n.board-cell:hover{\n  background-color: rgb(225, 225, 255);\n}\n\n.square{\n  /*\n  height: 35px;\n  width: 35px;\n  */\n}\n\n.pink{\n  background-color: pink;\n}\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announceWinner": () => (/* binding */ announceWinner),
/* harmony export */   "attackHandlers": () => (/* binding */ attackHandlers),
/* harmony export */   "removePlayerShip": () => (/* binding */ removePlayerShip),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "renderPlayerShip": () => (/* binding */ renderPlayerShip),
/* harmony export */   "shipClickHandlers": () => (/* binding */ shipClickHandlers),
/* harmony export */   "shipDragHandlers": () => (/* binding */ shipDragHandlers),
/* harmony export */   "shipDropHandlers": () => (/* binding */ shipDropHandlers),
/* harmony export */   "startButtonHandler": () => (/* binding */ startButtonHandler),
/* harmony export */   "stopAttackHandlers": () => (/* binding */ stopAttackHandlers),
/* harmony export */   "updateOpponentBoard": () => (/* binding */ updateOpponentBoard),
/* harmony export */   "updatePlayerBoard": () => (/* binding */ updatePlayerBoard)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */


//
// DOM methods to render gameboard and ships
//
function createHeader(tableRow, text) {
  const boardHeader = document.createElement('th');
  boardHeader.textContent = text;
  boardHeader.className = 'col-header';
  tableRow.appendChild(boardHeader);
}

function createBoardCell(tableRow, row, col, player) {
  const boardCell = document.createElement('td');
  boardCell.className = 'board-cell';

  const cellContent = document.createElement('div');
  cellContent.className = 'board-cell-content';
  cellContent.setAttribute('y', row - 1);
  cellContent.setAttribute('x', col - 1);
  cellContent.setAttribute('player', player);
  boardCell.appendChild(cellContent);
  tableRow.appendChild(boardCell);
}

function renderGameboard(player) {
  const gameBoard = document.querySelector(`#gameboard-${player}`);

  for (let row = 0; row < 11; row++) {
    const boardRow = document.createElement('tr');
    for (let col = 0; col < 11; col++) {
      if (row === 0 && col > 0) {
        createHeader(boardRow, col);
      }
      if (row === 0 && col === 0) {
        const boardCell = document.createElement('td');
        boardRow.appendChild(boardCell);
      }
      if (row > 0 && col === 0) {
        createHeader(boardRow, row);
      }
      if (row > 0 && col > 0) {
        createBoardCell(boardRow, row, col, player);
      }
    }
    gameBoard.appendChild(boardRow);
  }
}

function renderPlayerShip(id, ship, coord, orientation) {
  const shipLength = ship.length;
  const [x, y] = [coord[1], coord[0]];
  const cellContent = document.querySelector(
    `[y="${y}"][x="${x}"][player="player"]`
  );
  const shipSquare = document.createElement('div');
  shipSquare.className = 'ship';
  shipSquare.id = id;
  shipSquare.setAttribute('draggable', 'true');
  shipSquare.setAttribute('orientation', orientation);

  if (orientation === 'horizontal') {
    shipSquare.style.height = '2em';
    shipSquare.style.width = `${2 * shipLength}em`;
  }
  if (orientation === 'vertical') {
    shipSquare.style.height = `${2 * shipLength}em`;
    shipSquare.style.width = '2em';
  }
  cellContent.appendChild(shipSquare);
}

function removePlayerShip(coord) {
  const x = coord[1];
  const y = coord[0];
  const cellContent = document.querySelector(
    `[y="${y}"][x="${x}"][player="player"]`
  );
  cellContent.removeChild(cellContent.firstElementChild);
}

function updatePlayerBoard(playerBoard) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const currCoord = playerBoard[row][col];
      const currCell = document.querySelector(
        `[y="${row}"][x="${col}"][player="player"]`
      );
      if (currCoord === 'hit') {
        currCell.parentElement.className += ' hit';
      } else if (currCoord === 'miss') {
        currCell.parentElement.className += ' miss';
      }
    }
  }
}

function updateOpponentBoard(opponentBoard) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const currCoord = opponentBoard[row][col];
      const currCell = document.querySelector(
        `[y="${row}"][x="${col}"][player="opponent"]`
      );

      if (currCoord === 'hit') {
        currCell.parentElement.className += ' hit';
      } else if (currCoord === 'miss') {
        currCell.parentElement.className += ' miss';
      }
    }
  }
}

//
// DOM methods to handle user attacks
//
function publishAttack(event) {
  const y = event.target.getAttribute('y');
  const x = event.target.getAttribute('x');
  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('attack', [y, x]);
}

function attackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.addEventListener('click', publishAttack);
  }
}

//
// DOM methods to handle ship moving
//
function dragStart(e) {
  e.dataTransfer.setData('div', e.target.id);
}

function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function moveShip(e) {
  const shipID = e.dataTransfer.getData('div');

  const shipBox = document.getElementById(shipID);
  const shipCoord = [
    parseInt(shipBox.parentElement.getAttribute('y')),
    parseInt(shipBox.parentElement.getAttribute('x')),
  ];
  const orientation = shipBox.getAttribute('orientation');

  const moveCoord = [
    parseInt(e.target.getAttribute('y')),
    parseInt(e.target.getAttribute('x')),
  ];
  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(
    'move',
    {
      shipID,
      shipCoord,
      orientation,
      moveCoord,
    },
  );
}

function rotateShip(e) {
  const shipID = e.target.id;
  const shipCoord = [
    parseInt(e.target.parentElement.getAttribute('y')),
    parseInt(e.target.parentElement.getAttribute('x'))
  ];
  let orientation = e.target.getAttribute('orientation');

  if (orientation === 'horizontal') {
    orientation = 'vertical';
  } else {
    orientation = 'horizontal';
  }
  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(
    'rotate',
    {
      shipID,
      shipCoord,
      orientation,
    },
  );
}

//
// Game flow
//
function announceWinner(winner) {
  const header = document.querySelector('.header');
  header.textContent = `${winner} wins!`;
}

//
// Event Handlers
//

function shipDragHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const ships = playerBoard.querySelectorAll('.ship');

  for (const ship of ships) {
    ship.addEventListener('dragstart', dragStart);
  }
}

function shipDropHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const cells = playerBoard.querySelectorAll('.board-cell-content');

  for (const cell of cells) {
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', moveShip);
  }
}

function shipClickHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const ships = playerBoard.querySelectorAll('.ship');

  for (const ship of ships) {
    ship.addEventListener('click', rotateShip);
  }
}

function stopAttackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.removeEventListener('click', publishAttack);
  }
}

function startButtonHandler() {
  const startButton = document.querySelector('.start-game');
  startButton.addEventListener('click', () => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('startGame', 'off to the races');
  });
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./utils/utilities.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */


class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.board = (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.array2d)(this.boardSize, this.boardSize);
    this.ships = [];
  }

  #isPlacementValid(ship, coordinates, orientation) {
    const x = coordinates[1];
    const y = coordinates[0];
    let isValid = false;
    let blankSpaces = 0;
    if (orientation == 'vertical' && y + ship.length <= this.boardSize) {
      for (let i = y; i < ship.length + y; i++) {
        this.board[i][x] == '' ? blankSpaces += 1 : null;
      }
    } else if (orientation == 'horizontal' && x + ship.length <= this.boardSize) {
      for (let i = x; i < ship.length + x; i++) {
        this.board[y][i] == '' ? blankSpaces += 1 : null;
      }
    }
    if (blankSpaces == ship.length) {
      isValid = true;
    }

    return isValid;
  }

  #removeShip(ship) {
    for (let y = 0; y < this.boardSize; y++) {
      for (let x = 0; x < this.boardSize; x++) {
        this.board[y][x] === ship ? this.board[y][x] = '' : null;
      }
    }
  }

  placeShip(ship, coordinates, orientation) {
    this.#removeShip(ship)// if ship was previously placed
    const x = coordinates[1];
    const y = coordinates[0];
    const placementValid = this.#isPlacementValid(ship, coordinates, orientation);
    if (placementValid) {
      this.ships.push(ship);
      if (orientation === 'vertical') {
        for (let i = 0; i < ship.length; i++) {
          this.board[y + i][x] = ship;
        }
      }
      if (orientation === 'horizontal') {
        for (let i = 0; i < ship.length; i++) {
          this.board[y][x + i] = ship;
        }
      }
    } else {
      return placementValid;
    }
  }

  receiveAttack(coordinates) {
    const x = coordinates[1];
    const y = coordinates[0];
    if (this.board[y][x].constructor.name == 'Ship') {
      this.board[y][x].hit();
      this.board[y][x] = 'hit';
    } else if (this.board[y][x] == '') {
      this.board[y][x] = 'miss';
    } else if (this.board[y][x] == 'hit' || this.board[y][x] == 'miss') {
      return 'Attack Invalid';
    }
  }

  allShipsSunk() {
    let shipsSunk = 0;
    for (const ship of this.ships) {
      ship.sunk ? shipsSunk += 1 : null;
    }
    return shipsSunk == this.ships.length;
  }
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utilities */ "./utils/utilities.js");


class Player {
  constructor(board) {
    this.board = board;
    this.type = null;
    this.name = null;
  }

  setPlayerType(index) {
    const types = ['human', 'computer'];
    this.type = types[index];
  }

  setPlayerName(name) {
    this.name = name;
  }

  sendAttack(board, coordinates = null) {
    if (this.type === 'human') {
      board.receiveAttack(coordinates);
    }
    if (this.type === 'computer') {
      let attack = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.getRandInt)(10), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.getRandInt)(10)];

      while (board.receiveAttack(attack) === 'Attack Invalid') {
        attack = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.getRandInt)(10), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_0__.getRandInt)(10)];
      }

      board.receiveAttack(attack);
    }
  }
}


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubSub = {
  subscribers: {},
  publish(eventName, data) {
    if (!Array.isArray(this.subscribers[eventName])) {
      return;
    }
    this.subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  },
  subscribe(eventName, callback) {
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callback);
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    //this.position = [];
    this.damage = 0;
    this.sunk = false;
  }

  hit(position) {
    this.damage += 1;
    if (this.isSunk()) {
      this.sunk = true;
    }
    /*
    if (this.damage[position] === 0) {
      this.damage[position] = 1;
    }
    */
  }

  isSunk() {
    //const totalDamage = this.damage.reduce((sum, x) => sum + x, 0);
    /*
    if (this.damage === this.length) {
      this.sunk = true;
    }
    */
    return this.damage === this.length;
  }
}


/***/ }),

/***/ "./utils/utilities.js":
/*!****************************!*\
  !*** ./utils/utilities.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "array2d": () => (/* binding */ array2d),
/* harmony export */   "arrayEquals": () => (/* binding */ arrayEquals),
/* harmony export */   "getAttackedCoordinates": () => (/* binding */ getAttackedCoordinates),
/* harmony export */   "getRandInt": () => (/* binding */ getRandInt),
/* harmony export */   "getUnique": () => (/* binding */ getUnique)
/* harmony export */ });
/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

function array2d(width, length) {
  const arr = new Array(2);

  for (let y = 0; y < length; y++) {
    arr[y] = new Array(2);
    for (let x = 0; x < width; x++) {
      arr[y][x] = '';
    }
  }
  return arr;
}

function getRandInt(max) {
  return Math.floor(Math.random() * max);
}

function getAttackedCoordinates(board) {
  const coordinates = [];
  const gameBoard = board.board;

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const current = gameBoard[y][x];
      if (current === 'hit' || current === 'miss') {
        coordinates.push([y, x]);
      }
    }
  }

  return coordinates;
}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index]);
}

function getUnique(array1, array2) {
  let compare1 = null;
  let compare2 = null;
  const returnArray = [];

  if (array1.length >= array2) {
    compare1 = array1;
    compare2 = array2;
  } else {
    compare1 = array2;
    compare2 = array1;
  }

  for (const item1 of compare1) {
    let matches = 0;
    for (const item2 of compare2) {
      arrayEquals(item1, item2) ? matches += 1 : null;
    }
    matches === 0 ? returnArray.push(item1) : null;
  }

  return returnArray;
}


/*
const arr = array2d(10, 10);

arr[0][0] = 'O';
arr[1][0] = 'O';
arr[2][0] = 'O';
arr[3][0] = 'O';
arr[4][0] = 'O';

console.table(arr)
console.log(arr)
*/

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utilities */ "./utils/utilities.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */








_dom__WEBPACK_IMPORTED_MODULE_1__.renderGameboard('player');
_dom__WEBPACK_IMPORTED_MODULE_1__.renderGameboard('opponent');

const board1 = new _gameboard__WEBPACK_IMPORTED_MODULE_4__["default"]();
const player1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](board1);
player1.setPlayerType(0);
player1.setPlayerName('Player 1');

const board2 = new _gameboard__WEBPACK_IMPORTED_MODULE_4__["default"]();
const computer = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](board2);
computer.setPlayerType(1);
computer.setPlayerName('Computer');

const players = [player1, computer];


for (const player of players) {
  const carrier = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](5);
  const battleship = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](4);
  const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](3);
  const submarine = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](3);
  const patrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](2);

  const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
  const orientations = ['vertical', 'horizontal'];
  let shipNum = 1;

  for (const ship of ships) {
    let coord = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10)];
    let orientation = orientations[(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(2)];
    let placed = false;

    while (placed === false) {
      if (player.board.placeShip(ship, coord, orientation) !== false) {
        player.board.placeShip(ship, coord, orientation);
        if (player === player1) {
          const shipID = `ship_${shipNum}`;
          _dom__WEBPACK_IMPORTED_MODULE_1__.renderPlayerShip(shipID, ship, coord, orientation);
          shipNum += 1;
        }
        placed = true;
      } else {
        coord = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10)];
        orientation = orientations[(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(2)];
      }
    }
  }
}
//console.table(player1.board.board)

/*
const carrier = new Ship(5);
player1.board.placeShip(carrier, [1, 0], 'horizontal');
DOM.renderPlayerShip('ship_1', carrier, [1, 0], 'horizontal');
*/

// DOM.showPlayerShips(player1.board);
_dom__WEBPACK_IMPORTED_MODULE_1__.updatePlayerBoard(player1.board.board);

function endGame(winner) {
  _dom__WEBPACK_IMPORTED_MODULE_1__.stopAttackHandlers();
  _dom__WEBPACK_IMPORTED_MODULE_1__.announceWinner(winner);
}

function playerAttack(coordinates) {
  player1.sendAttack(computer.board, coordinates);
  _dom__WEBPACK_IMPORTED_MODULE_1__.updateOpponentBoard(computer.board.board);
  if (computer.board.allShipsSunk()) {
    endGame(player1.name);
  }

  computer.sendAttack(player1.board);
  _dom__WEBPACK_IMPORTED_MODULE_1__.updatePlayerBoard(player1.board.board);
  if (player1.board.allShipsSunk()) {
    endGame(computer.name);
  }
}

function moveShip(moveData) {
  const coord = moveData.moveCoord;
  const ship = player1.board.board[moveData.shipCoord[0]][moveData.shipCoord[1]];
  const { orientation, shipID } = moveData;

  if (player1.board.placeShip(ship, coord, orientation) !== false) {
    player1.board.placeShip(ship, coord, orientation);
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderPlayerShip(shipID, ship, coord, orientation);
    _dom__WEBPACK_IMPORTED_MODULE_1__.removePlayerShip(moveData.shipCoord);
    _dom__WEBPACK_IMPORTED_MODULE_1__.shipDragHandlers();
    _dom__WEBPACK_IMPORTED_MODULE_1__.shipClickHandlers();
  }
  
}

function rotateShip(rotateData) {
  const coord = rotateData.shipCoord;
  const ship = player1.board.board[rotateData.shipCoord[0]][rotateData.shipCoord[1]];
  const { orientation, shipID } = rotateData;

  if (player1.board.placeShip(ship, coord, orientation) !== false) {
    player1.board.placeShip(ship, coord, orientation);
    _dom__WEBPACK_IMPORTED_MODULE_1__.removePlayerShip(coord);
    _dom__WEBPACK_IMPORTED_MODULE_1__.renderPlayerShip(shipID, ship, coord, orientation);
    _dom__WEBPACK_IMPORTED_MODULE_1__.shipDragHandlers();
    _dom__WEBPACK_IMPORTED_MODULE_1__.shipClickHandlers();
  }
}

function startGame() {
  _pubsub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe('attack', playerAttack);
  _dom__WEBPACK_IMPORTED_MODULE_1__.attackHandlers();
}

_pubsub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe('move', moveShip);
_pubsub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe('rotate', rotateShip);
_pubsub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe('startGame', startGame);

_dom__WEBPACK_IMPORTED_MODULE_1__.startButtonHandler();
_dom__WEBPACK_IMPORTED_MODULE_1__.shipDragHandlers();
_dom__WEBPACK_IMPORTED_MODULE_1__.shipDropHandlers();
_dom__WEBPACK_IMPORTED_MODULE_1__.shipClickHandlers();

// pubSub.subscribe('endGame', endGame);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxnREFBa0I7QUFDcEI7O0FBRUEseURBQWdCO0FBQ2hCLHlEQUFnQjtBQUNoQix5REFBZ0I7O0FBRWhCLG9EQUFzQjtBQUN0QixrREFBb0I7QUFDcEIsa0RBQW9CO0FBQ3BCLG1EQUFxQjs7QUFFckIsd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMCw5MDBpdGFsaWMsMzAwaXRhbGljLDMwMCwxMDBpdGFsaWMsMTAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5nYW1lYm9hcmQtcGFkZGluZ3tcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50YWJsZXtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbWluLWhlaWdodDogMTFlbTtcXG4gIG1pbi13aWR0aDogMTFlbTtcXG59XFxuXFxudGR7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9hcmQtY2VsbHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDI1NSk7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5ib2FyZC1jZWxsLWNvbnRlbnR7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5oaXR7XFxuICAvKlxcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc3tcXG4gIC8qXFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zaGlwe1xcbiAgLypcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjU1LCAwLjUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyNTUpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgLypcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG59XFxuXFxuLnBpbmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDhCQUE4QjtHQUM3QixzQkFBc0I7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0U7Ozs7O0dBS0M7RUFDRCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTs7Ozs7OztHQU9DO0VBQ0Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7Ozs7O0dBS0M7RUFDRCx5Q0FBeUM7RUFDekMsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFOzs7R0FHQztBQUNIOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljLDMwMGl0YWxpYywzMDAsMTAwaXRhbGljLDEwMCk7XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5nYW1lYm9hcmQtcGFkZGluZ3tcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50YWJsZXtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbWluLWhlaWdodDogMTFlbTtcXG4gIG1pbi13aWR0aDogMTFlbTtcXG59XFxuXFxudGR7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9hcmQtY2VsbHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDI1NSk7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5ib2FyZC1jZWxsLWNvbnRlbnR7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5oaXR7XFxuICAvKlxcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc3tcXG4gIC8qXFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zaGlwe1xcbiAgLypcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjU1LCAwLjUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyNTUpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgLypcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG59XFxuXFxuLnBpbmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJzdWInO1xuXG4vL1xuLy8gRE9NIG1ldGhvZHMgdG8gcmVuZGVyIGdhbWVib2FyZCBhbmQgc2hpcHNcbi8vXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGFibGVSb3csIHRleHQpIHtcbiAgY29uc3QgYm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJvYXJkSGVhZGVyLmNsYXNzTmFtZSA9ICdjb2wtaGVhZGVyJztcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoYm9hcmRIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZENlbGwodGFibGVSb3csIHJvdywgY29sLCBwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgYm9hcmRDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsJztcblxuICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZWxsQ29udGVudC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1jb250ZW50JztcbiAgY2VsbENvbnRlbnQuc2V0QXR0cmlidXRlKCd5Jywgcm93IC0gMSk7XG4gIGNlbGxDb250ZW50LnNldEF0dHJpYnV0ZSgneCcsIGNvbCAtIDEpO1xuICBjZWxsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3BsYXllcicsIHBsYXllcik7XG4gIGJvYXJkQ2VsbC5hcHBlbmRDaGlsZChjZWxsQ29udGVudCk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNnYW1lYm9hcmQtJHtwbGF5ZXJ9YCk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTE7IHJvdysrKSB7XG4gICAgY29uc3QgYm9hcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDExOyBjb2wrKykge1xuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgY29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCByb3cpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVCb2FyZENlbGwoYm9hcmRSb3csIHJvdywgY29sLCBwbGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQbGF5ZXJTaGlwKGlkLCBzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pIHtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICBjb25zdCBbeCwgeV0gPSBbY29vcmRbMV0sIGNvb3JkWzBdXTtcbiAgY29uc3QgY2VsbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbeT1cIiR7eX1cIl1beD1cIiR7eH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICApO1xuICBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBTcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAnO1xuICBzaGlwU3F1YXJlLmlkID0gaWQ7XG4gIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICBzaGlwU3F1YXJlLnNldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nLCBvcmllbnRhdGlvbik7XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9ICcyZW0nO1xuICAgIHNoaXBTcXVhcmUuc3R5bGUud2lkdGggPSBgJHsyICogc2hpcExlbmd0aH1lbWA7XG4gIH1cbiAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgc2hpcFNxdWFyZS5zdHlsZS5oZWlnaHQgPSBgJHsyICogc2hpcExlbmd0aH1lbWA7XG4gICAgc2hpcFNxdWFyZS5zdHlsZS53aWR0aCA9ICcyZW0nO1xuICB9XG4gIGNlbGxDb250ZW50LmFwcGVuZENoaWxkKHNoaXBTcXVhcmUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGxheWVyU2hpcChjb29yZCkge1xuICBjb25zdCB4ID0gY29vcmRbMV07XG4gIGNvbnN0IHkgPSBjb29yZFswXTtcbiAgY29uc3QgY2VsbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbeT1cIiR7eX1cIl1beD1cIiR7eH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICApO1xuICBjZWxsQ29udGVudC5yZW1vdmVDaGlsZChjZWxsQ29udGVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZCkge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZCA9IHBsYXllckJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IGN1cnJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt5PVwiJHtyb3d9XCJdW3g9XCIke2NvbH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChjdXJyQ29vcmQgPT09ICdoaXQnKSB7XG4gICAgICAgIGN1cnJDZWxsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgaGl0JztcbiAgICAgIH0gZWxzZSBpZiAoY3VyckNvb3JkID09PSAnbWlzcycpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBtaXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9wcG9uZW50Qm9hcmQob3Bwb25lbnRCb2FyZCkge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZCA9IG9wcG9uZW50Qm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJvcHBvbmVudFwiXWBcbiAgICAgICk7XG5cbiAgICAgIGlmIChjdXJyQ29vcmQgPT09ICdoaXQnKSB7XG4gICAgICAgIGN1cnJDZWxsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgaGl0JztcbiAgICAgIH0gZWxzZSBpZiAoY3VyckNvb3JkID09PSAnbWlzcycpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBtaXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy9cbi8vIERPTSBtZXRob2RzIHRvIGhhbmRsZSB1c2VyIGF0dGFja3Ncbi8vXG5mdW5jdGlvbiBwdWJsaXNoQXR0YWNrKGV2ZW50KSB7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gIHB1YlN1Yi5wdWJsaXNoKCdhdHRhY2snLCBbeSwgeF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLW9wcG9uZW50Jyk7XG4gIGNvbnN0IGNlbGxzID0gb3Bwb25lbnRCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbiAgfVxufVxuXG4vL1xuLy8gRE9NIG1ldGhvZHMgdG8gaGFuZGxlIHNoaXAgbW92aW5nXG4vL1xuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnZGl2JywgZS50YXJnZXQuaWQpO1xufVxuXG5mdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBtb3ZlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBJRCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2RpdicpO1xuXG4gIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSUQpO1xuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoc2hpcEJveC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneScpKSxcbiAgICBwYXJzZUludChzaGlwQm94LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpLFxuICBdO1xuICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXBCb3guZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGNvbnN0IG1vdmVDb29yZCA9IFtcbiAgICBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpLFxuICBdO1xuICBwdWJTdWIucHVibGlzaChcbiAgICAnbW92ZScsXG4gICAge1xuICAgICAgc2hpcElELFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBtb3ZlQ29vcmQsXG4gICAgfSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBJRCA9IGUudGFyZ2V0LmlkO1xuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3gnKSlcbiAgXTtcbiAgbGV0IG9yaWVudGF0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2Uge1xuICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFxuICAgICdyb3RhdGUnLFxuICAgIHtcbiAgICAgIHNoaXBJRCxcbiAgICAgIHNoaXBDb29yZCxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgIH0sXG4gICk7XG59XG5cbi8vXG4vLyBHYW1lIGZsb3dcbi8vXG5leHBvcnQgZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIod2lubmVyKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3aW5zIWA7XG59XG5cbi8vXG4vLyBFdmVudCBIYW5kbGVyc1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBEcmFnSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3Qgc2hpcHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcERyb3BIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBjZWxscyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsLWNvbnRlbnQnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBtb3ZlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBDbGlja0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdHRhY2tIYW5kbGVycygpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcbiAgY29uc3QgY2VsbHMgPSBvcHBvbmVudEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsJyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHB1Ymxpc2hBdHRhY2spO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJ1dHRvbkhhbmRsZXIoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHViU3ViLnB1Ymxpc2goJ3N0YXJ0R2FtZScsICdvZmYgdG8gdGhlIHJhY2VzJyk7XG4gIH0pO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgYXJyYXkyZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IGFycmF5MmQodGhpcy5ib2FyZFNpemUsIHRoaXMuYm9hcmRTaXplKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICAjaXNQbGFjZW1lbnRWYWxpZChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gICAgbGV0IGJsYW5rU3BhY2VzID0gMDtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJyAmJiB5ICsgc2hpcC5sZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgc2hpcC5sZW5ndGggKyB5OyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVt4XSA9PSAnJyA/IGJsYW5rU3BhY2VzICs9IDEgOiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnICYmIHggKyBzaGlwLmxlbmd0aCA8PSB0aGlzLmJvYXJkU2l6ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCBzaGlwLmxlbmd0aCArIHg7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3ldW2ldID09ICcnID8gYmxhbmtTcGFjZXMgKz0gMSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibGFua1NwYWNlcyA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAjcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9PT0gc2hpcCA/IHRoaXMuYm9hcmRbeV1beF0gPSAnJyA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgIHRoaXMuI3JlbW92ZVNoaXAoc2hpcCkvLyBpZiBzaGlwIHdhcyBwcmV2aW91c2x5IHBsYWNlZFxuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgcGxhY2VtZW50VmFsaWQgPSB0aGlzLiNpc1BsYWNlbWVudFZhbGlkKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgaWYgKHBsYWNlbWVudFZhbGlkKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdLmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1NoaXAnKSB7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdLmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdoaXQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAnJykge1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdtaXNzJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT0gJ2hpdCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnbWlzcycpIHtcbiAgICAgIHJldHVybiAnQXR0YWNrIEludmFsaWQnO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc2hpcHNTdW5rID0gMDtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgc2hpcC5zdW5rID8gc2hpcHNTdW5rICs9IDEgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcHNTdW5rID09IHRoaXMuc2hpcHMubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kSW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLm5hbWUgPSBudWxsO1xuICB9XG5cbiAgc2V0UGxheWVyVHlwZShpbmRleCkge1xuICAgIGNvbnN0IHR5cGVzID0gWydodW1hbicsICdjb21wdXRlciddO1xuICAgIHRoaXMudHlwZSA9IHR5cGVzW2luZGV4XTtcbiAgfVxuXG4gIHNldFBsYXllck5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZW5kQXR0YWNrKGJvYXJkLCBjb29yZGluYXRlcyA9IG51bGwpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgbGV0IGF0dGFjayA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuXG4gICAgICB3aGlsZSAoYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spID09PSAnQXR0YWNrIEludmFsaWQnKSB7XG4gICAgICAgIGF0dGFjayA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgICAgfVxuXG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjayk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBwdWJTdWIgPSB7XG4gIHN1YnNjcmliZXJzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIC8vdGhpcy5wb3NpdGlvbiA9IFtdO1xuICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdChwb3NpdGlvbikge1xuICAgIHRoaXMuZGFtYWdlICs9IDE7XG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICAgIC8qXG4gICAgaWYgKHRoaXMuZGFtYWdlW3Bvc2l0aW9uXSA9PT0gMCkge1xuICAgICAgdGhpcy5kYW1hZ2VbcG9zaXRpb25dID0gMTtcbiAgICB9XG4gICAgKi9cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICAvL2NvbnN0IHRvdGFsRGFtYWdlID0gdGhpcy5kYW1hZ2UucmVkdWNlKChzdW0sIHgpID0+IHN1bSArIHgsIDApO1xuICAgIC8qXG4gICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyZCh3aWR0aCwgbGVuZ3RoKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheSgyKTtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSB7XG4gICAgYXJyW3ldID0gbmV3IEFycmF5KDIpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgYXJyW3ldW3hdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGFja2VkQ29vcmRpbmF0ZXMoYm9hcmQpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gYm9hcmQuYm9hcmQ7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZ2FtZUJvYXJkW3ldW3hdO1xuICAgICAgaWYgKGN1cnJlbnQgPT09ICdoaXQnIHx8IGN1cnJlbnQgPT09ICdtaXNzJykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt5LCB4XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSAmJlxuICAgICAgQXJyYXkuaXNBcnJheShiKSAmJlxuICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZShhcnJheTEsIGFycmF5Mikge1xuICBsZXQgY29tcGFyZTEgPSBudWxsO1xuICBsZXQgY29tcGFyZTIgPSBudWxsO1xuICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXG4gIGlmIChhcnJheTEubGVuZ3RoID49IGFycmF5Mikge1xuICAgIGNvbXBhcmUxID0gYXJyYXkxO1xuICAgIGNvbXBhcmUyID0gYXJyYXkyO1xuICB9IGVsc2Uge1xuICAgIGNvbXBhcmUxID0gYXJyYXkyO1xuICAgIGNvbXBhcmUyID0gYXJyYXkxO1xuICB9XG5cbiAgZm9yIChjb25zdCBpdGVtMSBvZiBjb21wYXJlMSkge1xuICAgIGxldCBtYXRjaGVzID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0yIG9mIGNvbXBhcmUyKSB7XG4gICAgICBhcnJheUVxdWFscyhpdGVtMSwgaXRlbTIpID8gbWF0Y2hlcyArPSAxIDogbnVsbDtcbiAgICB9XG4gICAgbWF0Y2hlcyA9PT0gMCA/IHJldHVybkFycmF5LnB1c2goaXRlbTEpIDogbnVsbDtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5BcnJheTtcbn1cblxuXG4vKlxuY29uc3QgYXJyID0gYXJyYXkyZCgxMCwgMTApO1xuXG5hcnJbMF1bMF0gPSAnTyc7XG5hcnJbMV1bMF0gPSAnTyc7XG5hcnJbMl1bMF0gPSAnTyc7XG5hcnJbM11bMF0gPSAnTyc7XG5hcnJbNF1bMF0gPSAnTyc7XG5cbmNvbnNvbGUudGFibGUoYXJyKVxuY29uc29sZS5sb2coYXJyKVxuKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGdldFJhbmRJbnQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YnN1Yic7XG5cbkRPTS5yZW5kZXJHYW1lYm9hcmQoJ3BsYXllcicpO1xuRE9NLnJlbmRlckdhbWVib2FyZCgnb3Bwb25lbnQnKTtcblxuY29uc3QgYm9hcmQxID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIoYm9hcmQxKTtcbnBsYXllcjEuc2V0UGxheWVyVHlwZSgwKTtcbnBsYXllcjEuc2V0UGxheWVyTmFtZSgnUGxheWVyIDEnKTtcblxuY29uc3QgYm9hcmQyID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKGJvYXJkMik7XG5jb21wdXRlci5zZXRQbGF5ZXJUeXBlKDEpO1xuY29tcHV0ZXIuc2V0UGxheWVyTmFtZSgnQ29tcHV0ZXInKTtcblxuY29uc3QgcGxheWVycyA9IFtwbGF5ZXIxLCBjb21wdXRlcl07XG5cblxuZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbiAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMik7XG5cbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXTtcbiAgbGV0IHNoaXBOdW0gPSAxO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIGxldCBjb29yZCA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tnZXRSYW5kSW50KDIpXTtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAocGxhY2VkID09PSBmYWxzZSkge1xuICAgICAgaWYgKHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgICBpZiAocGxheWVyID09PSBwbGF5ZXIxKSB7XG4gICAgICAgICAgY29uc3Qgc2hpcElEID0gYHNoaXBfJHtzaGlwTnVtfWA7XG4gICAgICAgICAgRE9NLnJlbmRlclBsYXllclNoaXAoc2hpcElELCBzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgIHNoaXBOdW0gKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmQgPSBbZ2V0UmFuZEludCgxMCksIGdldFJhbmRJbnQoMTApXTtcbiAgICAgICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbZ2V0UmFuZEludCgyKV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vL2NvbnNvbGUudGFibGUocGxheWVyMS5ib2FyZC5ib2FyZClcblxuLypcbmNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbnBsYXllcjEuYm9hcmQucGxhY2VTaGlwKGNhcnJpZXIsIFsxLCAwXSwgJ2hvcml6b250YWwnKTtcbkRPTS5yZW5kZXJQbGF5ZXJTaGlwKCdzaGlwXzEnLCBjYXJyaWVyLCBbMSwgMF0sICdob3Jpem9udGFsJyk7XG4qL1xuXG4vLyBET00uc2hvd1BsYXllclNoaXBzKHBsYXllcjEuYm9hcmQpO1xuRE9NLnVwZGF0ZVBsYXllckJvYXJkKHBsYXllcjEuYm9hcmQuYm9hcmQpO1xuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBET00uc3RvcEF0dGFja0hhbmRsZXJzKCk7XG4gIERPTS5hbm5vdW5jZVdpbm5lcih3aW5uZXIpO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXJBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgcGxheWVyMS5zZW5kQXR0YWNrKGNvbXB1dGVyLmJvYXJkLCBjb29yZGluYXRlcyk7XG4gIERPTS51cGRhdGVPcHBvbmVudEJvYXJkKGNvbXB1dGVyLmJvYXJkLmJvYXJkKTtcbiAgaWYgKGNvbXB1dGVyLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZShwbGF5ZXIxLm5hbWUpO1xuICB9XG5cbiAgY29tcHV0ZXIuc2VuZEF0dGFjayhwbGF5ZXIxLmJvYXJkKTtcbiAgRE9NLnVwZGF0ZVBsYXllckJvYXJkKHBsYXllcjEuYm9hcmQuYm9hcmQpO1xuICBpZiAocGxheWVyMS5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGVuZEdhbWUoY29tcHV0ZXIubmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZVNoaXAobW92ZURhdGEpIHtcbiAgY29uc3QgY29vcmQgPSBtb3ZlRGF0YS5tb3ZlQ29vcmQ7XG4gIGNvbnN0IHNoaXAgPSBwbGF5ZXIxLmJvYXJkLmJvYXJkW21vdmVEYXRhLnNoaXBDb29yZFswXV1bbW92ZURhdGEuc2hpcENvb3JkWzFdXTtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiwgc2hpcElEIH0gPSBtb3ZlRGF0YTtcblxuICBpZiAocGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSAhPT0gZmFsc2UpIHtcbiAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgIERPTS5yZW5kZXJQbGF5ZXJTaGlwKHNoaXBJRCwgc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKTtcbiAgICBET00ucmVtb3ZlUGxheWVyU2hpcChtb3ZlRGF0YS5zaGlwQ29vcmQpO1xuICAgIERPTS5zaGlwRHJhZ0hhbmRsZXJzKCk7XG4gICAgRE9NLnNoaXBDbGlja0hhbmRsZXJzKCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAocm90YXRlRGF0YSkge1xuICBjb25zdCBjb29yZCA9IHJvdGF0ZURhdGEuc2hpcENvb3JkO1xuICBjb25zdCBzaGlwID0gcGxheWVyMS5ib2FyZC5ib2FyZFtyb3RhdGVEYXRhLnNoaXBDb29yZFswXV1bcm90YXRlRGF0YS5zaGlwQ29vcmRbMV1dO1xuICBjb25zdCB7IG9yaWVudGF0aW9uLCBzaGlwSUQgfSA9IHJvdGF0ZURhdGE7XG5cbiAgaWYgKHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikgIT09IGZhbHNlKSB7XG4gICAgcGxheWVyMS5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKTtcbiAgICBET00ucmVtb3ZlUGxheWVyU2hpcChjb29yZCk7XG4gICAgRE9NLnJlbmRlclBsYXllclNoaXAoc2hpcElELCBzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgIERPTS5zaGlwRHJhZ0hhbmRsZXJzKCk7XG4gICAgRE9NLnNoaXBDbGlja0hhbmRsZXJzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBwdWJTdWIuc3Vic2NyaWJlKCdhdHRhY2snLCBwbGF5ZXJBdHRhY2spO1xuICBET00uYXR0YWNrSGFuZGxlcnMoKTtcbn1cblxucHViU3ViLnN1YnNjcmliZSgnbW92ZScsIG1vdmVTaGlwKTtcbnB1YlN1Yi5zdWJzY3JpYmUoJ3JvdGF0ZScsIHJvdGF0ZVNoaXApO1xucHViU3ViLnN1YnNjcmliZSgnc3RhcnRHYW1lJywgc3RhcnRHYW1lKTtcblxuRE9NLnN0YXJ0QnV0dG9uSGFuZGxlcigpO1xuRE9NLnNoaXBEcmFnSGFuZGxlcnMoKTtcbkRPTS5zaGlwRHJvcEhhbmRsZXJzKCk7XG5ET00uc2hpcENsaWNrSGFuZGxlcnMoKTtcblxuLy8gcHViU3ViLnN1YnNjcmliZSgnZW5kR2FtZScsIGVuZEdhbWUpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
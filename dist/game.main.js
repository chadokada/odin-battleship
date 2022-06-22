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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n  margin: 0;\n  padding: 0;\n  font-family: Roboto;\n}\n\n.container{\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr 1fr;\n  height: 100vh;\n}\n\n.header{\n  grid-column: 1/3;\n  grid-row: 1/2;\n  height: 50px;\n}\n\n.player-container,\n.opponent-container{\n  display:flex;\n  border: 1px solid;\n  flex-flow: row wrap;\n  align-content: flex-start;\n}\n\n/*\n.gameboard{\n  display: grid;\n  grid-template-rows: repeat(10, 35px);\n  grid-template-columns: repeat(10, 35px);\n}\n*/\n\n.gameboard-padding{\n  width: 100%;\n}\ntable{\n  border-spacing: 0px;\n  border-collapse: collapse;\n  min-height: 401px;\n  min-width: 401px;\n}\n\n.board-cell-blank{\n  border: 1px solid rgb(175, 175, 255);\n  height: 35px;\n  width: 35px;\n  box-sizing: border-box;\n}\n\n.board-cell-hit{\n  height: 35px;\n  width: 35px;\n  background-color: rgb(255, 200, 200);\n  border: 2px solid red;\n  box-sizing: border-box;\n}\n\n.board-cell-miss{\n  height: 35px;\n  width: 35px;\n  background-color: gray;\n  border: 2px solid gray;\n  box-sizing: border-box;\n}\n\n.board-cell-ship{\n  height: 35px;\n  width: 35px;\n  background-color: rgb(200, 200, 255);\n  border: 2px solid blue;\n  box-sizing: border-box;\n}\n\n.board-cell-blank:hover{\n  background-color: rgb(225, 225, 255);\n}\n\n.square{\n  height: 35px;\n  width: 35px;\n}\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,4BAA4B;EAC5B,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;;;;;;CAMC;;AAED;EACE,WAAW;AACb;AACA;EACE,mBAAmB;EACnB,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,WAAW;EACX,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,oCAAoC;EACpC,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":["@import url(http://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,900,900italic,300italic,300,100italic,100);\n\nbody{\n  margin: 0;\n  padding: 0;\n  font-family: Roboto;\n}\n\n.container{\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr 1fr;\n  height: 100vh;\n}\n\n.header{\n  grid-column: 1/3;\n  grid-row: 1/2;\n  height: 50px;\n}\n\n.player-container,\n.opponent-container{\n  display:flex;\n  border: 1px solid;\n  flex-flow: row wrap;\n  align-content: flex-start;\n}\n\n/*\n.gameboard{\n  display: grid;\n  grid-template-rows: repeat(10, 35px);\n  grid-template-columns: repeat(10, 35px);\n}\n*/\n\n.gameboard-padding{\n  width: 100%;\n}\ntable{\n  border-spacing: 0px;\n  border-collapse: collapse;\n  min-height: 401px;\n  min-width: 401px;\n}\n\n.board-cell-blank{\n  border: 1px solid rgb(175, 175, 255);\n  height: 35px;\n  width: 35px;\n  box-sizing: border-box;\n}\n\n.board-cell-hit{\n  height: 35px;\n  width: 35px;\n  background-color: rgb(255, 200, 200);\n  border: 2px solid red;\n  box-sizing: border-box;\n}\n\n.board-cell-miss{\n  height: 35px;\n  width: 35px;\n  background-color: gray;\n  border: 2px solid gray;\n  box-sizing: border-box;\n}\n\n.board-cell-ship{\n  height: 35px;\n  width: 35px;\n  background-color: rgb(200, 200, 255);\n  border: 2px solid blue;\n  box-sizing: border-box;\n}\n\n.board-cell-blank:hover{\n  background-color: rgb(225, 225, 255);\n}\n\n.square{\n  height: 35px;\n  width: 35px;\n}\n\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "opponentBoardListeners": () => (/* binding */ opponentBoardListeners),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "showPlayerShips": () => (/* binding */ showPlayerShips)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */

function createHeader(tableRow, text) {
  const boardHeader = document.createElement('th');
  boardHeader.textContent = text;
  boardHeader.className = 'col-header';
  tableRow.appendChild(boardHeader);
}

function createBoardCell(tableRow, row, col, player) {
  const boardCell = document.createElement('td');
  const square = document.createElement('div');
  boardCell.className = 'board-cell-blank';
  boardCell.setAttribute('y', row - 1);
  boardCell.setAttribute('x', col - 1);
  boardCell.setAttribute('player', player);
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

function showPlayerShips(playerObj) {
  const playerBoard = playerObj.board.board;
  // const gameBoard = document.querySelector('#gameboard-player');

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const currCoord = playerBoard[row][col];
      if (currCoord.constructor.name === 'Ship') {
        const currCell = document.querySelector(
          `[y="${row}"][x="${col}"][player="player"]`
        );
        currCell.className = 'board-cell-ship';
      }
    }
  }
}

function renderPlayerAttack(opponent) {
  const opponentBoard = opponent.board.board;

  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const currCoord = opponentBoard[row][col];
      const currCell = document.querySelector(
        `[y="${row}"][x="${col}"][player="opponent"]`
      );

      if (currCoord === 'hit') {
        currCell.className = 'board-cell-hit';
      } else if (currCoord === 'miss') {
        currCell.className = 'board-cell-miss';
      }
    }
  }
}

function playerAttack(opponent, coordinates) {
  opponent.board.receiveAttack(coordinates);
  renderPlayerAttack(opponent);
}

// rename this a better name
function opponentBoardListeners(opponent) {
  const opponentBoard = document.querySelector('#gameboard-opponent');

  const cells = opponentBoard.querySelectorAll('.board-cell-blank');
  for (const cell of cells) {
    const y = cell.getAttribute('y');
    const x = cell.getAttribute('x');
    cell.addEventListener('click', () => playerAttack(opponent, [y, x]));
  }
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

  placeShip(ship, coordinates, orientation) {
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
    //this.damage = Array(length).fill(0);
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

  for (const ship of ships) {
    let coord = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10)];
    let orientation = orientations[(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(2)];
    let placed = false;

    while (placed === false) {
      if (player.board.placeShip(ship, coord, orientation) !== false) {
        player.board.placeShip(ship, coord, orientation);
        placed = true;
      } else {
        coord = [(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10), (0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(10)];
        orientation = orientations[(0,_utils_utilities__WEBPACK_IMPORTED_MODULE_5__.getRandInt)(2)];
      }
    }
  }
}

_dom__WEBPACK_IMPORTED_MODULE_1__.showPlayerShips(player1);

let gameOver = false;

let currentPlayer = 0;

/*
while (gameOver === false) {
  if (currentPlayer === 0) {
    document.addEventListener('click', (event) => {
      currentPlayer = 1;
    })
  } else {
    console.log('Currently playing: Computer')
    currentPlayer = 0;
  }
}
*/

/*
document.addEventListener('click', (event) => {
  console.log(event.target.className)
})
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtBQUMzQyxtQ0FBbUMsNERBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaURBQW1COztBQUVuQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3V0aWxzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwLDkwMGl0YWxpYywzMDBpdGFsaWMsMzAwLDEwMGl0YWxpYywxMDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi5jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnBsYXllci1jb250YWluZXIsXFxuLm9wcG9uZW50LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qXFxuLmdhbWVib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxufVxcbiovXFxuXFxuLmdhbWVib2FyZC1wYWRkaW5ne1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbnRhYmxle1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBtaW4taGVpZ2h0OiA0MDFweDtcXG4gIG1pbi13aWR0aDogNDAxcHg7XFxufVxcblxcbi5ib2FyZC1jZWxsLWJsYW5re1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE3NSwgMTc1LCAyNTUpO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9hcmQtY2VsbC1oaXR7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjAwKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsLW1pc3N7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtc2hpcHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyNTUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsLWJsYW5rOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyNTUpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTs7Ozs7O0NBTUM7O0FBRUQ7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMCw5MDBpdGFsaWMsMzAwaXRhbGljLDMwMCwxMDBpdGFsaWMsMTAwKTtcXG5cXG5ib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxufVxcblxcbi5jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXJ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnBsYXllci1jb250YWluZXIsXFxuLm9wcG9uZW50LWNvbnRhaW5lcntcXG4gIGRpc3BsYXk6ZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi8qXFxuLmdhbWVib2FyZHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzVweCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzVweCk7XFxufVxcbiovXFxuXFxuLmdhbWVib2FyZC1wYWRkaW5ne1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbnRhYmxle1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBtaW4taGVpZ2h0OiA0MDFweDtcXG4gIG1pbi13aWR0aDogNDAxcHg7XFxufVxcblxcbi5ib2FyZC1jZWxsLWJsYW5re1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE3NSwgMTc1LCAyNTUpO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9hcmQtY2VsbC1oaXR7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwMCwgMjAwKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsLW1pc3N7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtc2hpcHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyNTUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsLWJsYW5rOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyNTUpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0YWJsZVJvdywgdGV4dCkge1xuICBjb25zdCBib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYm9hcmRIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbC1oZWFkZXInO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZEhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2VsbCh0YWJsZVJvdywgcm93LCBjb2wsIHBsYXllcikge1xuICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWJsYW5rJztcbiAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgneScsIHJvdyAtIDEpO1xuICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCd4JywgY29sIC0gMSk7XG4gIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ3BsYXllcicsIHBsYXllcik7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNnYW1lYm9hcmQtJHtwbGF5ZXJ9YCk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTE7IHJvdysrKSB7XG4gICAgY29uc3QgYm9hcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDExOyBjb2wrKykge1xuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgY29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCByb3cpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVCb2FyZENlbGwoYm9hcmRSb3csIHJvdywgY29sLCBwbGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UGxheWVyU2hpcHMocGxheWVyT2JqKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyT2JqLmJvYXJkLmJvYXJkO1xuICAvLyBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gcGxheWVyQm9hcmRbcm93XVtjb2xdO1xuICAgICAgaWYgKGN1cnJDb29yZC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU2hpcCcpIHtcbiAgICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgY3VyckNlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwtc2hpcCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckF0dGFjayhvcHBvbmVudCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gb3Bwb25lbnQuYm9hcmQuYm9hcmQ7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29vcmQgPSBvcHBvbmVudEJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IGN1cnJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt5PVwiJHtyb3d9XCJdW3g9XCIke2NvbH1cIl1bcGxheWVyPVwib3Bwb25lbnRcIl1gXG4gICAgICApO1xuXG4gICAgICBpZiAoY3VyckNvb3JkID09PSAnaGl0Jykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1oaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1taXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKG9wcG9uZW50LCBjb29yZGluYXRlcykge1xuICBvcHBvbmVudC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgcmVuZGVyUGxheWVyQXR0YWNrKG9wcG9uZW50KTtcbn1cblxuLy8gcmVuYW1lIHRoaXMgYSBiZXR0ZXIgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIG9wcG9uZW50Qm9hcmRMaXN0ZW5lcnMob3Bwb25lbnQpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcblxuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwtYmxhbmsnKTtcbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY29uc3QgeSA9IGNlbGwuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gICAgY29uc3QgeCA9IGNlbGwuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYXllckF0dGFjayhvcHBvbmVudCwgW3ksIHhdKSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IGFycmF5MmQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IDEwO1xuICAgIHRoaXMuYm9hcmQgPSBhcnJheTJkKHRoaXMuYm9hcmRTaXplLCB0aGlzLmJvYXJkU2l6ZSk7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG5cbiAgI2lzUGxhY2VtZW50VmFsaWQoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGxldCBibGFua1NwYWNlcyA9IDA7XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcgJiYgeSArIHNoaXAubGVuZ3RoIDw9IHRoaXMuYm9hcmRTaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0geTsgaSA8IHNoaXAubGVuZ3RoICsgeTsgaSsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1beF0gPT0gJycgPyBibGFua1NwYWNlcyArPSAxIDogbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJyAmJiB4ICsgc2hpcC5sZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgIGZvciAobGV0IGkgPSB4OyBpIDwgc2hpcC5sZW5ndGggKyB4OyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFt5XVtpXSA9PSAnJyA/IGJsYW5rU3BhY2VzICs9IDEgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYmxhbmtTcGFjZXMgPT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgcGxhY2VtZW50VmFsaWQgPSB0aGlzLiNpc1BsYWNlbWVudFZhbGlkKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgaWYgKHBsYWNlbWVudFZhbGlkKSB7XG4gICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdLmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1NoaXAnKSB7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdLmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdoaXQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAnJykge1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdtaXNzJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT0gJ2hpdCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnbWlzcycpIHtcbiAgICAgIHJldHVybiAnQXR0YWNrIEludmFsaWQnO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc2hpcHNTdW5rID0gMDtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgc2hpcC5zdW5rID8gc2hpcHNTdW5rICs9IDEgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcHNTdW5rID09IHRoaXMuc2hpcHMubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kSW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLm5hbWUgPSBudWxsO1xuICB9XG5cbiAgc2V0UGxheWVyVHlwZShpbmRleCkge1xuICAgIGNvbnN0IHR5cGVzID0gWydodW1hbicsICdjb21wdXRlciddO1xuICAgIHRoaXMudHlwZSA9IHR5cGVzW2luZGV4XTtcbiAgfVxuXG4gIHNldFBsYXllck5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZW5kQXR0YWNrKGJvYXJkLCBjb29yZGluYXRlcyA9IG51bGwpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgbGV0IGF0dGFjayA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuXG4gICAgICB3aGlsZSAoYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spID09PSAnQXR0YWNrIEludmFsaWQnKSB7XG4gICAgICAgIGF0dGFjayA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgICAgfVxuXG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjayk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgLy90aGlzLmRhbWFnZSA9IEFycmF5KGxlbmd0aCkuZmlsbCgwKTtcbiAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cblxuICBoaXQocG9zaXRpb24pIHtcbiAgICB0aGlzLmRhbWFnZSArPSAxO1xuICAgIGlmICh0aGlzLmlzU3VuaygpKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICAvKlxuICAgIGlmICh0aGlzLmRhbWFnZVtwb3NpdGlvbl0gPT09IDApIHtcbiAgICAgIHRoaXMuZGFtYWdlW3Bvc2l0aW9uXSA9IDE7XG4gICAgfVxuICAgICovXG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgLy9jb25zdCB0b3RhbERhbWFnZSA9IHRoaXMuZGFtYWdlLnJlZHVjZSgoc3VtLCB4KSA9PiBzdW0gKyB4LCAwKTtcbiAgICAvKlxuICAgIGlmICh0aGlzLmRhbWFnZSA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICAgICovXG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5MmQod2lkdGgsIGxlbmd0aCkge1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoMik7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkrKykge1xuICAgIGFyclt5XSA9IG5ldyBBcnJheSgyKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgIGFyclt5XVt4XSA9ICcnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZEludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRhY2tlZENvb3JkaW5hdGVzKGJvYXJkKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGJvYXJkLmJvYXJkO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgY29uc3QgY3VycmVudCA9IGdhbWVCb2FyZFt5XVt4XTtcbiAgICAgIGlmIChjdXJyZW50ID09PSAnaGl0JyB8fCBjdXJyZW50ID09PSAnbWlzcycpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeSwgeF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJlxuICAgICAgYS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBiW2luZGV4XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWUoYXJyYXkxLCBhcnJheTIpIHtcbiAgbGV0IGNvbXBhcmUxID0gbnVsbDtcbiAgbGV0IGNvbXBhcmUyID0gbnVsbDtcbiAgY29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblxuICBpZiAoYXJyYXkxLmxlbmd0aCA+PSBhcnJheTIpIHtcbiAgICBjb21wYXJlMSA9IGFycmF5MTtcbiAgICBjb21wYXJlMiA9IGFycmF5MjtcbiAgfSBlbHNlIHtcbiAgICBjb21wYXJlMSA9IGFycmF5MjtcbiAgICBjb21wYXJlMiA9IGFycmF5MTtcbiAgfVxuXG4gIGZvciAoY29uc3QgaXRlbTEgb2YgY29tcGFyZTEpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtMiBvZiBjb21wYXJlMikge1xuICAgICAgYXJyYXlFcXVhbHMoaXRlbTEsIGl0ZW0yKSA/IG1hdGNoZXMgKz0gMSA6IG51bGw7XG4gICAgfVxuICAgIG1hdGNoZXMgPT09IDAgPyByZXR1cm5BcnJheS5wdXNoKGl0ZW0xKSA6IG51bGw7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQXJyYXk7XG59XG5cblxuLypcbmNvbnN0IGFyciA9IGFycmF5MmQoMTAsIDEwKTtcblxuYXJyWzBdWzBdID0gJ08nO1xuYXJyWzFdWzBdID0gJ08nO1xuYXJyWzJdWzBdID0gJ08nO1xuYXJyWzNdWzBdID0gJ08nO1xuYXJyWzRdWzBdID0gJ08nO1xuXG5jb25zb2xlLnRhYmxlKGFycilcbmNvbnNvbGUubG9nKGFycilcbiovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9kb20nO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBnZXRSYW5kSW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuRE9NLnJlbmRlckdhbWVib2FyZCgncGxheWVyJyk7XG5ET00ucmVuZGVyR2FtZWJvYXJkKCdvcHBvbmVudCcpO1xuXG5jb25zdCBib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihib2FyZDEpO1xucGxheWVyMS5zZXRQbGF5ZXJUeXBlKDApO1xucGxheWVyMS5zZXRQbGF5ZXJOYW1lKCdQbGF5ZXIgMScpO1xuXG5jb25zdCBib2FyZDIgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoYm9hcmQyKTtcbmNvbXB1dGVyLnNldFBsYXllclR5cGUoMSk7XG5jb21wdXRlci5zZXRQbGF5ZXJOYW1lKCdDb21wdXRlcicpO1xuXG5jb25zdCBwbGF5ZXJzID0gW3BsYXllcjEsIGNvbXB1dGVyXTtcblxuZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0KTtcbiAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKDMpO1xuICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoMik7XG5cbiAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBsZXQgY29vcmQgPSBbZ2V0UmFuZEludCgxMCksIGdldFJhbmRJbnQoMTApXTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbZ2V0UmFuZEludCgyKV07XG4gICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKHBsYWNlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikgIT09IGZhbHNlKSB7XG4gICAgICAgIHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKTtcbiAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvb3JkID0gW2dldFJhbmRJbnQoMTApLCBnZXRSYW5kSW50KDEwKV07XG4gICAgICAgIG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW2dldFJhbmRJbnQoMildO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5ET00uc2hvd1BsYXllclNoaXBzKHBsYXllcjEpO1xuXG5sZXQgZ2FtZU92ZXIgPSBmYWxzZTtcblxubGV0IGN1cnJlbnRQbGF5ZXIgPSAwO1xuXG4vKlxud2hpbGUgKGdhbWVPdmVyID09PSBmYWxzZSkge1xuICBpZiAoY3VycmVudFBsYXllciA9PT0gMCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjdXJyZW50UGxheWVyID0gMTtcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKCdDdXJyZW50bHkgcGxheWluZzogQ29tcHV0ZXInKVxuICAgIGN1cnJlbnRQbGF5ZXIgPSAwO1xuICB9XG59XG4qL1xuXG4vKlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSlcbn0pXG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
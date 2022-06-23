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
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "updateOpponentBoard": () => (/* binding */ updateOpponentBoard),
/* harmony export */   "updatePlayerBoard": () => (/* binding */ updatePlayerBoard)
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

function updatePlayerBoard(playerBoard) {
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const currCoord = playerBoard[row][col];
      const currCell = document.querySelector(
        `[y="${row}"][x="${col}"][player="player"]`
      );
      if (currCoord.constructor.name === 'Ship') {
        currCell.className = 'board-cell-ship';
      } else if (currCoord === 'hit') {
        currCell.className = 'board-cell-hit';
      } else if (currCoord === 'miss') {
        currCell.className = 'board-cell-miss';
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
        currCell.className = 'board-cell-hit';
      } else if (currCoord === 'miss') {
        currCell.className = 'board-cell-miss';
      }
    }
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

_dom__WEBPACK_IMPORTED_MODULE_1__.updatePlayerBoard(player1.board.board);

function playerAttack(coordinates) {
  player1.sendAttack(computer.board, coordinates);
  _dom__WEBPACK_IMPORTED_MODULE_1__.updateOpponentBoard(computer.board.board);
  if (computer.board.allShipsSunk()) {
    alert('Player has won!');
  }
  computer.sendAttack(player1.board);
  _dom__WEBPACK_IMPORTED_MODULE_1__.updatePlayerBoard(player1.board.board);
  if (player1.board.allShipsSunk()) {
    alert('Computer has won!');
  }
}

function attackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');

  const cells = opponentBoard.querySelectorAll('.board-cell-blank');
  for (const cell of cells) {
    const y = cell.getAttribute('y');
    const x = cell.getAttribute('x');
    cell.addEventListener('click', () => playerAttack([y, x]));
  }
}

attackHandlers()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUxBQXlMO0FBQ3pMO0FBQ0EsK0NBQStDLGNBQWMsZUFBZSx3QkFBd0IsR0FBRyxlQUFlLGtCQUFrQixpQ0FBaUMsbUNBQW1DLGtCQUFrQixHQUFHLFlBQVkscUJBQXFCLGtCQUFrQixpQkFBaUIsR0FBRyw0Q0FBNEMsaUJBQWlCLHNCQUFzQix3QkFBd0IsOEJBQThCLEdBQUcsbUJBQW1CLGtCQUFrQix5Q0FBeUMsNENBQTRDLEdBQUcsMkJBQTJCLGdCQUFnQixHQUFHLFFBQVEsd0JBQXdCLDhCQUE4QixzQkFBc0IscUJBQXFCLEdBQUcsc0JBQXNCLHlDQUF5QyxpQkFBaUIsZ0JBQWdCLDJCQUEyQixHQUFHLG9CQUFvQixpQkFBaUIsZ0JBQWdCLHlDQUF5QywwQkFBMEIsMkJBQTJCLEdBQUcscUJBQXFCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLDJCQUEyQiwyQkFBMkIsR0FBRyxxQkFBcUIsaUJBQWlCLGdCQUFnQix5Q0FBeUMsMkJBQTJCLDJCQUEyQixHQUFHLDRCQUE0Qix5Q0FBeUMsR0FBRyxZQUFZLGlCQUFpQixnQkFBZ0IsR0FBRyxhQUFhLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsd0tBQXdLLFNBQVMsY0FBYyxlQUFlLHdCQUF3QixHQUFHLGVBQWUsa0JBQWtCLGlDQUFpQyxtQ0FBbUMsa0JBQWtCLEdBQUcsWUFBWSxxQkFBcUIsa0JBQWtCLGlCQUFpQixHQUFHLDRDQUE0QyxpQkFBaUIsc0JBQXNCLHdCQUF3Qiw4QkFBOEIsR0FBRyxtQkFBbUIsa0JBQWtCLHlDQUF5Qyw0Q0FBNEMsR0FBRywyQkFBMkIsZ0JBQWdCLEdBQUcsUUFBUSx3QkFBd0IsOEJBQThCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0IseUNBQXlDLGlCQUFpQixnQkFBZ0IsMkJBQTJCLEdBQUcsb0JBQW9CLGlCQUFpQixnQkFBZ0IseUNBQXlDLDBCQUEwQiwyQkFBMkIsR0FBRyxxQkFBcUIsaUJBQWlCLGdCQUFnQiwyQkFBMkIsMkJBQTJCLDJCQUEyQixHQUFHLHFCQUFxQixpQkFBaUIsZ0JBQWdCLHlDQUF5QywyQkFBMkIsMkJBQTJCLEdBQUcsNEJBQTRCLHlDQUF5QyxHQUFHLFlBQVksaUJBQWlCLGdCQUFnQixHQUFHLHlCQUF5QjtBQUNsbEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHlEQUF5RCxPQUFPOztBQUVoRSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IsVUFBVTtBQUM5QixzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsZUFBZSxJQUFJLFFBQVEsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9CQUFvQixVQUFVO0FBQzlCLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLElBQUksUUFBUSxJQUFJO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUM2Qzs7QUFFOUI7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQztBQUNBO0FBQ0EsTUFBTTtBQUNOLHNCQUFzQixxQkFBcUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNFZ0Q7O0FBRWpDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0REFBVSxNQUFNLDREQUFVOztBQUU5QztBQUNBLGtCQUFrQiw0REFBVSxNQUFNLDREQUFVO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQixvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUMvRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNxQjtBQUNRO0FBQ0M7QUFDSjtBQUNVO0FBQ1k7O0FBRWhELGlEQUFtQjtBQUNuQixpREFBbUI7O0FBRW5CLG1CQUFtQixrREFBUztBQUM1QixvQkFBb0IsK0NBQU07QUFDMUI7QUFDQTs7QUFFQSxtQkFBbUIsa0RBQVM7QUFDNUIscUJBQXFCLCtDQUFNO0FBQzNCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsNkNBQUk7QUFDMUIseUJBQXlCLDZDQUFJO0FBQzdCLHdCQUF3Qiw2Q0FBSTtBQUM1Qix3QkFBd0IsNkNBQUk7QUFDNUIseUJBQXlCLDZDQUFJOztBQUU3QjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDREQUFVLE1BQU0sNERBQVU7QUFDM0MsbUNBQW1DLDREQUFVO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLGlCQUFpQiw0REFBVSxNQUFNLDREQUFVO0FBQzNDLG1DQUFtQyw0REFBVTtBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxFQUFFLHFEQUF1QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vdXRpbHMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljLDMwMGl0YWxpYywzMDAsMTAwaXRhbGljLDEwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLypcXG4uZ2FtZWJvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuKi9cXG5cXG4uZ2FtZWJvYXJkLXBhZGRpbmd7XFxuICB3aWR0aDogMTAwJTtcXG59XFxudGFibGV7XFxuICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1pbi1oZWlnaHQ6IDQwMXB4O1xcbiAgbWluLXdpZHRoOiA0MDFweDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtYmxhbmt7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDI1NSk7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsLWhpdHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAwLCAyMDApO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtbWlzc3tcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9hcmQtY2VsbC1zaGlwe1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDI1NSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtYmxhbms6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDI1NSk7XFxufVxcblxcbi5zcXVhcmV7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBOzs7Ozs7Q0FNQzs7QUFFRDtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwLDkwMGl0YWxpYywzMDBpdGFsaWMsMzAwLDEwMGl0YWxpYywxMDApO1xcblxcbmJvZHl7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLypcXG4uZ2FtZWJvYXJke1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzNXB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuKi9cXG5cXG4uZ2FtZWJvYXJkLXBhZGRpbmd7XFxuICB3aWR0aDogMTAwJTtcXG59XFxudGFibGV7XFxuICBib3JkZXItc3BhY2luZzogMHB4O1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIG1pbi1oZWlnaHQ6IDQwMXB4O1xcbiAgbWluLXdpZHRoOiA0MDFweDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtYmxhbmt7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDI1NSk7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsLWhpdHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjAwLCAyMDApO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtbWlzc3tcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9hcmQtY2VsbC1zaGlwe1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDI1NSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGwtYmxhbms6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDI1NSk7XFxufVxcblxcbi5zcXVhcmV7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRhYmxlUm93LCB0ZXh0KSB7XG4gIGNvbnN0IGJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBib2FyZEhlYWRlci5jbGFzc05hbWUgPSAnY29sLWhlYWRlcic7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkSGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDZWxsKHRhYmxlUm93LCByb3csIGNvbCwgcGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGJvYXJkQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1ibGFuayc7XG4gIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ3knLCByb3cgLSAxKTtcbiAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgneCcsIGNvbCAtIDEpO1xuICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdwbGF5ZXInLCBwbGF5ZXIpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZ2FtZWJvYXJkLSR7cGxheWVyfWApO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDExOyByb3crKykge1xuICAgIGNvbnN0IGJvYXJkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMTsgY29sKyspIHtcbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoYm9hcmRSb3csIGNvbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA9PT0gMCkge1xuICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBib2FyZFJvdy5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgcm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY3JlYXRlQm9hcmRDZWxsKGJvYXJkUm93LCByb3csIGNvbCwgcGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGJvYXJkUm93KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpIHtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29vcmQgPSBwbGF5ZXJCb2FyZFtyb3ddW2NvbF07XG4gICAgICBjb25zdCBjdXJyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICAgICk7XG4gICAgICBpZiAoY3VyckNvb3JkLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTaGlwJykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1zaGlwJztcbiAgICAgIH0gZWxzZSBpZiAoY3VyckNvb3JkID09PSAnaGl0Jykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1oaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1taXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9wcG9uZW50Qm9hcmQob3Bwb25lbnRCb2FyZCkge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZCA9IG9wcG9uZW50Qm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJvcHBvbmVudFwiXWBcbiAgICAgICk7XG5cbiAgICAgIGlmIChjdXJyQ29vcmQgPT09ICdoaXQnKSB7XG4gICAgICAgIGN1cnJDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWhpdCc7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJDb29yZCA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGN1cnJDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLW1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgYXJyYXkyZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IGFycmF5MmQodGhpcy5ib2FyZFNpemUsIHRoaXMuYm9hcmRTaXplKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICAjaXNQbGFjZW1lbnRWYWxpZChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gICAgbGV0IGJsYW5rU3BhY2VzID0gMDtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJyAmJiB5ICsgc2hpcC5sZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgc2hpcC5sZW5ndGggKyB5OyBpKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVt4XSA9PSAnJyA/IGJsYW5rU3BhY2VzICs9IDEgOiBudWxsO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnICYmIHggKyBzaGlwLmxlbmd0aCA8PSB0aGlzLmJvYXJkU2l6ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCBzaGlwLmxlbmd0aCArIHg7IGkrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3ldW2ldID09ICcnID8gYmxhbmtTcGFjZXMgKz0gMSA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChibGFua1NwYWNlcyA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgICBjb25zdCBwbGFjZW1lbnRWYWxpZCA9IHRoaXMuI2lzUGxhY2VtZW50VmFsaWQoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcbiAgICBpZiAocGxhY2VtZW50VmFsaWQpIHtcbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGxhY2VtZW50VmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgaWYgKHRoaXMuYm9hcmRbeV1beF0uY29uc3RydWN0b3IubmFtZSA9PSAnU2hpcCcpIHtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ2hpdCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ldW3hdID09ICcnKSB7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ21pc3MnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAnaGl0JyB8fCB0aGlzLmJvYXJkW3ldW3hdID09ICdtaXNzJykge1xuICAgICAgcmV0dXJuICdBdHRhY2sgSW52YWxpZCc7XG4gICAgfVxuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBzaGlwc1N1bmsgPSAwO1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBzaGlwLnN1bmsgPyBzaGlwc1N1bmsgKz0gMSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzaGlwc1N1bmsgPT0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRJbnQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihib2FyZCkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgIHRoaXMubmFtZSA9IG51bGw7XG4gIH1cblxuICBzZXRQbGF5ZXJUeXBlKGluZGV4KSB7XG4gICAgY29uc3QgdHlwZXMgPSBbJ2h1bWFuJywgJ2NvbXB1dGVyJ107XG4gICAgdGhpcy50eXBlID0gdHlwZXNbaW5kZXhdO1xuICB9XG5cbiAgc2V0UGxheWVyTmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNlbmRBdHRhY2soYm9hcmQsIGNvb3JkaW5hdGVzID0gbnVsbCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBsZXQgYXR0YWNrID0gW2dldFJhbmRJbnQoMTApLCBnZXRSYW5kSW50KDEwKV07XG5cbiAgICAgIHdoaWxlIChib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjaykgPT09ICdBdHRhY2sgSW52YWxpZCcpIHtcbiAgICAgICAgYXR0YWNrID0gW2dldFJhbmRJbnQoMTApLCBnZXRSYW5kSW50KDEwKV07XG4gICAgICB9XG5cbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAvL3RoaXMuZGFtYWdlID0gQXJyYXkobGVuZ3RoKS5maWxsKDApO1xuICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdChwb3NpdGlvbikge1xuICAgIHRoaXMuZGFtYWdlICs9IDE7XG4gICAgaWYgKHRoaXMuaXNTdW5rKCkpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICAgIC8qXG4gICAgaWYgKHRoaXMuZGFtYWdlW3Bvc2l0aW9uXSA9PT0gMCkge1xuICAgICAgdGhpcy5kYW1hZ2VbcG9zaXRpb25dID0gMTtcbiAgICB9XG4gICAgKi9cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICAvL2NvbnN0IHRvdGFsRGFtYWdlID0gdGhpcy5kYW1hZ2UucmVkdWNlKChzdW0sIHgpID0+IHN1bSArIHgsIDApO1xuICAgIC8qXG4gICAgaWYgKHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyZCh3aWR0aCwgbGVuZ3RoKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheSgyKTtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSB7XG4gICAgYXJyW3ldID0gbmV3IEFycmF5KDIpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgYXJyW3ldW3hdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGFja2VkQ29vcmRpbmF0ZXMoYm9hcmQpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gYm9hcmQuYm9hcmQ7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZ2FtZUJvYXJkW3ldW3hdO1xuICAgICAgaWYgKGN1cnJlbnQgPT09ICdoaXQnIHx8IGN1cnJlbnQgPT09ICdtaXNzJykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt5LCB4XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSAmJlxuICAgICAgQXJyYXkuaXNBcnJheShiKSAmJlxuICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZShhcnJheTEsIGFycmF5Mikge1xuICBsZXQgY29tcGFyZTEgPSBudWxsO1xuICBsZXQgY29tcGFyZTIgPSBudWxsO1xuICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXG4gIGlmIChhcnJheTEubGVuZ3RoID49IGFycmF5Mikge1xuICAgIGNvbXBhcmUxID0gYXJyYXkxO1xuICAgIGNvbXBhcmUyID0gYXJyYXkyO1xuICB9IGVsc2Uge1xuICAgIGNvbXBhcmUxID0gYXJyYXkyO1xuICAgIGNvbXBhcmUyID0gYXJyYXkxO1xuICB9XG5cbiAgZm9yIChjb25zdCBpdGVtMSBvZiBjb21wYXJlMSkge1xuICAgIGxldCBtYXRjaGVzID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0yIG9mIGNvbXBhcmUyKSB7XG4gICAgICBhcnJheUVxdWFscyhpdGVtMSwgaXRlbTIpID8gbWF0Y2hlcyArPSAxIDogbnVsbDtcbiAgICB9XG4gICAgbWF0Y2hlcyA9PT0gMCA/IHJldHVybkFycmF5LnB1c2goaXRlbTEpIDogbnVsbDtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5BcnJheTtcbn1cblxuXG4vKlxuY29uc3QgYXJyID0gYXJyYXkyZCgxMCwgMTApO1xuXG5hcnJbMF1bMF0gPSAnTyc7XG5hcnJbMV1bMF0gPSAnTyc7XG5hcnJbMl1bMF0gPSAnTyc7XG5hcnJbM11bMF0gPSAnTyc7XG5hcnJbNF1bMF0gPSAnTyc7XG5cbmNvbnNvbGUudGFibGUoYXJyKVxuY29uc29sZS5sb2coYXJyKVxuKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGdldFJhbmRJbnQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG5ET00ucmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXInKTtcbkRPTS5yZW5kZXJHYW1lYm9hcmQoJ29wcG9uZW50Jyk7XG5cbmNvbnN0IGJvYXJkMSA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGJvYXJkMSk7XG5wbGF5ZXIxLnNldFBsYXllclR5cGUoMCk7XG5wbGF5ZXIxLnNldFBsYXllck5hbWUoJ1BsYXllciAxJyk7XG5cbmNvbnN0IGJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihib2FyZDIpO1xuY29tcHV0ZXIuc2V0UGxheWVyVHlwZSgxKTtcbmNvbXB1dGVyLnNldFBsYXllck5hbWUoJ0NvbXB1dGVyJyk7XG5cbmNvbnN0IHBsYXllcnMgPSBbcGxheWVyMSwgY29tcHV0ZXJdO1xuXG5mb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xuICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyKTtcblxuICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIGxldCBjb29yZCA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tnZXRSYW5kSW50KDIpXTtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAocGxhY2VkID09PSBmYWxzZSkge1xuICAgICAgaWYgKHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmQgPSBbZ2V0UmFuZEludCgxMCksIGdldFJhbmRJbnQoMTApXTtcbiAgICAgICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbZ2V0UmFuZEludCgyKV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkRPTS51cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIxLmJvYXJkLmJvYXJkKTtcblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gIHBsYXllcjEuc2VuZEF0dGFjayhjb21wdXRlci5ib2FyZCwgY29vcmRpbmF0ZXMpO1xuICBET00udXBkYXRlT3Bwb25lbnRCb2FyZChjb21wdXRlci5ib2FyZC5ib2FyZCk7XG4gIGlmIChjb21wdXRlci5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGFsZXJ0KCdQbGF5ZXIgaGFzIHdvbiEnKTtcbiAgfVxuICBjb21wdXRlci5zZW5kQXR0YWNrKHBsYXllcjEuYm9hcmQpO1xuICBET00udXBkYXRlUGxheWVyQm9hcmQocGxheWVyMS5ib2FyZC5ib2FyZCk7XG4gIGlmIChwbGF5ZXIxLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgYWxlcnQoJ0NvbXB1dGVyIGhhcyB3b24hJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXR0YWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLW9wcG9uZW50Jyk7XG5cbiAgY29uc3QgY2VsbHMgPSBvcHBvbmVudEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsLWJsYW5rJyk7XG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNvbnN0IHkgPSBjZWxsLmdldEF0dHJpYnV0ZSgneScpO1xuICAgIGNvbnN0IHggPSBjZWxsLmdldEF0dHJpYnV0ZSgneCcpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGF5ZXJBdHRhY2soW3ksIHhdKSk7XG4gIH1cbn1cblxuYXR0YWNrSGFuZGxlcnMoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
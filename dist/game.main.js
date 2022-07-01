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
/* harmony export */   "newGameHandler": () => (/* binding */ newGameHandler),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "shipClickHandlers": () => (/* binding */ shipClickHandlers),
/* harmony export */   "shipDragHandlers": () => (/* binding */ shipDragHandlers),
/* harmony export */   "shipDropHandlers": () => (/* binding */ shipDropHandlers),
/* harmony export */   "showPlayerShips": () => (/* binding */ showPlayerShips),
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
// Event-driven functions
//

function newGame() {
  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('newGame', 'Start new game!')
}

function publishAttack(event) {
  const y = event.target.getAttribute('y');
  const x = event.target.getAttribute('x');
  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('attack', [y, x]);
}

function dragStart(e) {
  e.dataTransfer.setData('div', e.target.getAttribute('ship-name'));
}

function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function moveShip(e) {
  const shipName = e.dataTransfer.getData('div');
  const shipBox = document.querySelector(`[ship-name="${shipName}"]`);

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
      shipName,
      shipCoord,
      orientation,
      moveCoord,
    },
  );
}

function rotateShip(e) {
  const shipName = e.target.getAttribute('ship-name');

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
      shipName,
      shipCoord,
      orientation,
    },
  );
}

function newGameHandler() {
  const newGameButton = document.querySelector('.new-game');
  newGameButton.addEventListener('click', () => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('newGame', 'Start new game!')
    console.log('newgame')
    //pubSub.publish('startGame', 'off to the races');
  });
}

function startButtonHandler() {
  const startButton = document.querySelector('.start-game');
  startButton.addEventListener('click', () => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('startGame', 'off to the races');
  });
}

function attackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.addEventListener('click', publishAttack);
  }
}

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

function clearPlayerBoard() {
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cellContent = document.querySelector(
        `[y="${y}"][x="${x}"][player="player"]`
      );
      if (cellContent.firstElementChild != null) {
        cellContent.removeChild(cellContent.firstElementChild);
      }
    }
  }
}

function showPlayerShips(board) {
  clearPlayerBoard();
  const { ships } = board;
  for (const ship of ships) {
    const { name } = ship;
    const coord = board.getCurrentCoord(ship);
    const orientation = board.getOrientation(ship);
    const shipLength = ship.length;
    const [x, y] = [coord[1], coord[0]];
    const cellContent = document.querySelector(
      `[y="${y}"][x="${x}"][player="player"]`
    );
    const shipSquare = document.createElement('div');
    shipSquare.className = 'ship';
    shipSquare.setAttribute('ship-name', name);
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

  shipDragHandlers();
  shipClickHandlers();
  shipDropHandlers();
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

/*

//
// Event-driven functions
//
function publishAttack(event) {
  const y = event.target.getAttribute('y');
  const x = event.target.getAttribute('x');
  pubSub.publish('attack', [y, x]);
}

export function attackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.addEventListener('click', publishAttack);
  }
}

function dragStart(e) {
  e.dataTransfer.setData('div', e.target.getAttribute('ship-name'));
}

function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function moveShip(e) {
  const shipName = e.dataTransfer.getData('div');
  const shipBox = document.querySelector(`[ship-name="${shipName}"]`);

  const shipCoord = [
    parseInt(shipBox.parentElement.getAttribute('y')),
    parseInt(shipBox.parentElement.getAttribute('x')),
  ];
  const orientation = shipBox.getAttribute('orientation');

  const moveCoord = [
    parseInt(e.target.getAttribute('y')),
    parseInt(e.target.getAttribute('x')),
  ];
  pubSub.publish(
    'move',
    {
      shipName,
      shipCoord,
      orientation,
      moveCoord,
    },
  );
}

function rotateShip(e) {
  const shipName = e.target.getAttribute('ship-name');

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
  pubSub.publish(
    'rotate',
    {
      shipName,
      shipCoord,
      orientation,
    },
  );
}

export function shipDragHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const ships = playerBoard.querySelectorAll('.ship');

  for (const ship of ships) {
    ship.addEventListener('dragstart', dragStart);
  }
}

export function shipDropHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const cells = playerBoard.querySelectorAll('.board-cell-content');

  for (const cell of cells) {
    cell.addEventListener('dragenter', dragEnter);
    cell.addEventListener('dragover', dragOver);
    cell.addEventListener('drop', moveShip);
  }
}

export function shipClickHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const ships = playerBoard.querySelectorAll('.ship');

  for (const ship of ships) {
    ship.addEventListener('click', rotateShip);
  }
}

export function stopAttackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.removeEventListener('click', publishAttack);
  }
}

export function startButtonHandler() {
  const startButton = document.querySelector('.start-game');
  startButton.addEventListener('click', () => {
    pubSub.publish('startGame', 'off to the races');
  });
}

*/

//
// Game flow
//
function announceWinner(winner) {
  const header = document.querySelector('.header');
  header.textContent = `${winner} wins!`;
}

/*
export function renderPlayerShip(id, ship, coord, orientation) {
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

export function removePlayerShip(coord) {
  const x = coord[1];
  const y = coord[0];
  const cellContent = document.querySelector(
    `[y="${y}"][x="${x}"][player="player"]`
  );
  cellContent.removeChild(cellContent.firstElementChild);
}
*/

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

  #countBlankSpaces(coord, numSpaces, orientation) {
    const x = coord[1];
    const y = coord[0];
    let blankSpaces = 0;

    for (let i = 0; i < numSpaces; i++) {
      if (orientation === 'vertical') {
        if (y + i < this.boardSize) {
          this.board[y + i][x] === '' ? blankSpaces += 1 : null;
        }
      }
      if (orientation === 'horizontal') {
        if (x + i < this.boardSize) {
          this.board[y][x + i] === '' ? blankSpaces += 1 : null;
        }
      }
    }
    return blankSpaces;
  }

  getCurrentCoord(ship) {
    let shipFound = false;
    let currCoord = null;
    while (shipFound === false) {
      for (let y = 0; y < this.boardSize; y++) {
        for (let x = 0; x < this.boardSize; x++) {
          if (this.board[y][x] === ship) {
            currCoord = [y, x];
            shipFound = true;
            break;
          }
        }
        if (shipFound === true) {
          break;
        }
      }
    }
    return currCoord;
  }

  getOrientation(ship) {
    const currCoord = this.getCurrentCoord(ship);
    const x = currCoord[1];
    const y = currCoord[0];
    let orientation = null;

    if (y + 1 < this.boardSize && this.board[y + 1][x] === ship) {
      orientation = 'vertical';
    } else if (x + 1 < this.boardSize && this.board[y][x + 1] === ship) {
      orientation = 'horizontal';
    }
    return orientation;
  }

  #isPlacementValid(ship, coord, orientation) {
    const x = coord[1];
    const y = coord[0];
    let isValid = false;
    let blankSpaces = 0;
    if (orientation == 'vertical' && y + ship.length <= this.boardSize) {
      blankSpaces = this.#countBlankSpaces(coord, ship.length, orientation);
    } else if (orientation == 'horizontal' && x + ship.length <= this.boardSize) {
      blankSpaces = this.#countBlankSpaces(coord, ship.length, orientation);
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
    const shipInd = this.ships.indexOf(ship);
    shipInd > -1 ? this.ships.splice(shipInd, 1) : null;
  }

  placeShip(ship, coordinates, orientation) {
    const x = coordinates[1];
    const y = coordinates[0];
    const placementValid = this.#isPlacementValid(ship, coordinates, orientation);
    if (placementValid) {
      this.#removeShip(ship); // if ship was previously placed
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

  rotateShip(ship) {
    const currCoord = this.getCurrentCoord(ship);
    const x = currCoord[1];
    const y = currCoord[0];
    let newDirr = null;

    if (this.board[y + 1][x] === ship) {
      newDirr = 'horizontal';
    } else if (this.board[y][x + 1] === ship) {
      newDirr = 'vertical';
    }

    const freeSpaces = this.#countBlankSpaces(currCoord, ship.length, newDirr);
    if (freeSpaces == ship.length - 1) {
      this.#removeShip(ship);
      this.placeShip(ship, currCoord, newDirr);
    } else {
      return false;
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
  constructor(length, name) {
    this.length = length;
    this.name = name;
    this.damage = 0;
    this.sunk = false;
  }

  hit(position) {
    this.damage += 1;
    if (this.isSunk()) {
      this.sunk = true;
    }
  }

  isSunk() {
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








/*
DOM.renderGameboard('player');
DOM.renderGameboard('opponent');

const board1 = new Gameboard();
const player1 = new Player(board1);
player1.setPlayerType(0);
player1.setPlayerName('Player 1');

const board2 = new Gameboard();
const computer = new Player(board2);
computer.setPlayerType(1);
computer.setPlayerName('Computer');

const players = [player1, computer];

for (const player of players) {
  const carrier = new Ship(5, 'carrier');
  const battleship = new Ship(4, 'battleship');
  const destroyer = new Ship(3, 'destoryer');
  const submarine = new Ship(3, 'submarine');
  const patrolBoat = new Ship(2, 'patrolBoat');
  const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
  const orientations = ['vertical', 'horizontal'];

  for (const ship of ships) {
    let coord = [getRandInt(10), getRandInt(10)];
    let orientation = orientations[getRandInt(2)];
    let placed = false;

    while (placed === false) {
      if (player.board.placeShip(ship, coord, orientation) !== false) {
        player.board.placeShip(ship, coord, orientation);
        placed = true;
      } else {
        coord = [getRandInt(10), getRandInt(10)];
        orientation = orientations[getRandInt(2)];
      }
    }
  }
}

DOM.showPlayerShips(player1.board)

function endGame(winner) {
  DOM.stopAttackHandlers();
  DOM.announceWinner(winner);
}

function playerAttack(coordinates) {
  player1.sendAttack(computer.board, coordinates);
  DOM.updateOpponentBoard(computer.board.board);
  if (computer.board.allShipsSunk()) {
    endGame(player1.name);
  }

  computer.sendAttack(player1.board);
  DOM.updatePlayerBoard(player1.board.board);
  if (player1.board.allShipsSunk()) {
    endGame(computer.name);
  }
}

function moveShip(moveData) {
  const coord = moveData.moveCoord;
  const ship = player1.board.board[moveData.shipCoord[0]][moveData.shipCoord[1]];
  const { orientation } = moveData;

  if (player1.board.placeShip(ship, coord, orientation) !== false) {
    player1.board.placeShip(ship, coord, orientation);
    DOM.showPlayerShips(player1.board);
  }
}

function rotateShip(rotateData) {
  const ship = player1.board.board[rotateData.shipCoord[0]][rotateData.shipCoord[1]];

  if (player1.board.rotateShip(ship) !== false) {
    DOM.showPlayerShips(player1.board);
  }
}

function startGame() {
  pubSub.subscribe('attack', playerAttack);
  DOM.attackHandlers();
}

pubSub.subscribe('move', moveShip);
pubSub.subscribe('rotate', rotateShip);
pubSub.subscribe('startGame', startGame);

DOM.startButtonHandler();
*/

//
//******************** 
//

function newGame() {
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
    const carrier = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](5, 'carrier');
    const battleship = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](4, 'battleship');
    const destroyer = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](3, 'destoryer');
    const submarine = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](3, 'submarine');
    const patrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_3__["default"](2, 'patrolBoat');
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

  _dom__WEBPACK_IMPORTED_MODULE_1__.showPlayerShips(player1.board)

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
    const { orientation } = moveData;

    if (player1.board.placeShip(ship, coord, orientation) !== false) {
      player1.board.placeShip(ship, coord, orientation);
      _dom__WEBPACK_IMPORTED_MODULE_1__.showPlayerShips(player1.board);
    }
  }

  function rotateShip(rotateData) {
    const ship = player1.board.board[rotateData.shipCoord[0]][rotateData.shipCoord[1]];

    if (player1.board.rotateShip(ship) !== false) {
      _dom__WEBPACK_IMPORTED_MODULE_1__.showPlayerShips(player1.board);
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
}

newGame();
_dom__WEBPACK_IMPORTED_MODULE_1__.newGameHandler();

_pubsub__WEBPACK_IMPORTED_MODULE_6__["default"].subscribe('newGame', newGame);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsa0RBQVM7QUFDOUIsdUJBQXVCLCtDQUFNO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUIsMkJBQTJCLDZDQUFJO0FBQy9CLDBCQUEwQiw2Q0FBSTtBQUM5QiwwQkFBMEIsNkNBQUk7QUFDOUIsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNERBQVUsTUFBTSw0REFBVTtBQUM3QyxxQ0FBcUMsNERBQVU7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUJBQW1CLDREQUFVLE1BQU0sNERBQVU7QUFDN0MscUNBQXFDLDREQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsaURBQW1COztBQUVyQjtBQUNBLElBQUksb0RBQXNCO0FBQzFCLElBQUksZ0RBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1EQUFxQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7O0FBRTFCO0FBQ0E7QUFDQSxNQUFNLGlEQUFtQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGlEQUFtQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEIsSUFBSSxnREFBa0I7QUFDdEI7O0FBRUEsRUFBRSx5REFBZ0I7QUFDbEIsRUFBRSx5REFBZ0I7QUFDbEIsRUFBRSx5REFBZ0I7O0FBRWxCLEVBQUUsb0RBQXNCO0FBQ3hCOztBQUVBO0FBQ0EsZ0RBQWtCOztBQUVsQix5REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMCw5MDBpdGFsaWMsMzAwaXRhbGljLDMwMCwxMDBpdGFsaWMsMTAwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5nYW1lYm9hcmQtcGFkZGluZ3tcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50YWJsZXtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbWluLWhlaWdodDogMTFlbTtcXG4gIG1pbi13aWR0aDogMTFlbTtcXG59XFxuXFxudGR7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9hcmQtY2VsbHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDI1NSk7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5ib2FyZC1jZWxsLWNvbnRlbnR7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5oaXR7XFxuICAvKlxcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc3tcXG4gIC8qXFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zaGlwe1xcbiAgLypcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjU1LCAwLjUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyNTUpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgLypcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG59XFxuXFxuLnBpbmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDhCQUE4QjtHQUM3QixzQkFBc0I7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0U7Ozs7O0dBS0M7RUFDRCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTs7Ozs7OztHQU9DO0VBQ0Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7Ozs7O0dBS0M7RUFDRCx5Q0FBeUM7RUFDekMsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFOzs7R0FHQztBQUNIOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKGh0dHA6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyw5MDAsOTAwaXRhbGljLDMwMGl0YWxpYywzMDAsMTAwaXRhbGljLDEwMCk7XFxuXFxuYm9keXtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlcntcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ucGxheWVyLWNvbnRhaW5lcixcXG4ub3Bwb25lbnQtY29udGFpbmVye1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5nYW1lYm9hcmQtcGFkZGluZ3tcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50YWJsZXtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgbWluLWhlaWdodDogMTFlbTtcXG4gIG1pbi13aWR0aDogMTFlbTtcXG59XFxuXFxudGR7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYm9hcmQtY2VsbHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMTc1LCAxNzUsIDI1NSk7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5ib2FyZC1jZWxsLWNvbnRlbnR7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5oaXR7XFxuICAvKlxcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJlZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc3tcXG4gIC8qXFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogMzVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zaGlwe1xcbiAgLypcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjU1LCAwLjUpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ib2FyZC1jZWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNSwgMjI1LCAyNTUpO1xcbn1cXG5cXG4uc3F1YXJle1xcbiAgLypcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgKi9cXG59XFxuXFxuLnBpbmt7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIHJhZGl4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJzdWInO1xuXG4vL1xuLy8gRXZlbnQtZHJpdmVuIGZ1bmN0aW9uc1xuLy9cblxuZnVuY3Rpb24gbmV3R2FtZSgpIHtcbiAgcHViU3ViLnB1Ymxpc2goJ25ld0dhbWUnLCAnU3RhcnQgbmV3IGdhbWUhJylcbn1cblxuZnVuY3Rpb24gcHVibGlzaEF0dGFjayhldmVudCkge1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpO1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpO1xuICBwdWJTdWIucHVibGlzaCgnYXR0YWNrJywgW3ksIHhdKTtcbn1cblxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgnZGl2JywgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdzaGlwLW5hbWUnKSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdFbnRlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwKGUpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCdkaXYnKTtcbiAgY29uc3Qgc2hpcEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtzaGlwLW5hbWU9XCIke3NoaXBOYW1lfVwiXWApO1xuXG4gIGNvbnN0IHNoaXBDb29yZCA9IFtcbiAgICBwYXJzZUludChzaGlwQm94LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd5JykpLFxuICAgIHBhcnNlSW50KHNoaXBCb3gucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3gnKSksXG4gIF07XG4gIGNvbnN0IG9yaWVudGF0aW9uID0gc2hpcEJveC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJyk7XG5cbiAgY29uc3QgbW92ZUNvb3JkID0gW1xuICAgIHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpKSxcbiAgICBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKSksXG4gIF07XG4gIHB1YlN1Yi5wdWJsaXNoKFxuICAgICdtb3ZlJyxcbiAgICB7XG4gICAgICBzaGlwTmFtZSxcbiAgICAgIHNoaXBDb29yZCxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgICAgbW92ZUNvb3JkLFxuICAgIH0sXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVNoaXAoZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc2hpcC1uYW1lJyk7XG5cbiAgY29uc3Qgc2hpcENvb3JkID0gW1xuICAgIHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd5JykpLFxuICAgIHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpXG4gIF07XG4gIGxldCBvcmllbnRhdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcblxuICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgfSBlbHNlIHtcbiAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgfVxuICBwdWJTdWIucHVibGlzaChcbiAgICAncm90YXRlJyxcbiAgICB7XG4gICAgICBzaGlwTmFtZSxcbiAgICAgIHNoaXBDb29yZCxcbiAgICAgIG9yaWVudGF0aW9uLFxuICAgIH0sXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdHYW1lSGFuZGxlcigpIHtcbiAgY29uc3QgbmV3R2FtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctZ2FtZScpO1xuICBuZXdHYW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHB1YlN1Yi5wdWJsaXNoKCduZXdHYW1lJywgJ1N0YXJ0IG5ldyBnYW1lIScpXG4gICAgY29uc29sZS5sb2coJ25ld2dhbWUnKVxuICAgIC8vcHViU3ViLnB1Ymxpc2goJ3N0YXJ0R2FtZScsICdvZmYgdG8gdGhlIHJhY2VzJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRCdXR0b25IYW5kbGVyKCkge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHB1YlN1Yi5wdWJsaXNoKCdzdGFydEdhbWUnLCAnb2ZmIHRvIHRoZSByYWNlcycpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFja0hhbmRsZXJzKCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1vcHBvbmVudCcpO1xuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHVibGlzaEF0dGFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBEcmFnSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3Qgc2hpcHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcERyb3BIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBjZWxscyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsLWNvbnRlbnQnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBtb3ZlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBDbGlja0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdHRhY2tIYW5kbGVycygpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcbiAgY29uc3QgY2VsbHMgPSBvcHBvbmVudEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsJyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHB1Ymxpc2hBdHRhY2spO1xuICB9XG59XG5cbi8vXG4vLyBET00gbWV0aG9kcyB0byByZW5kZXIgZ2FtZWJvYXJkIGFuZCBzaGlwc1xuLy9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0YWJsZVJvdywgdGV4dCkge1xuICBjb25zdCBib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYm9hcmRIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbC1oZWFkZXInO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZEhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2VsbCh0YWJsZVJvdywgcm93LCBjb2wsIHBsYXllcikge1xuICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBib2FyZENlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwnO1xuXG4gIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbGxDb250ZW50LmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWNvbnRlbnQnO1xuICBjZWxsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3knLCByb3cgLSAxKTtcbiAgY2VsbENvbnRlbnQuc2V0QXR0cmlidXRlKCd4JywgY29sIC0gMSk7XG4gIGNlbGxDb250ZW50LnNldEF0dHJpYnV0ZSgncGxheWVyJywgcGxheWVyKTtcbiAgYm9hcmRDZWxsLmFwcGVuZENoaWxkKGNlbGxDb250ZW50KTtcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dhbWVib2FyZC0ke3BsYXllcn1gKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMTsgcm93KyspIHtcbiAgICBjb25zdCBib2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTE7IGNvbCsrKSB7XG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCBjb2wpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgYm9hcmRSb3cuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwICYmIGNvbCA9PT0gMCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoYm9hcmRSb3csIHJvdyk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUJvYXJkQ2VsbChib2FyZFJvdywgcm93LCBjb2wsIHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChib2FyZFJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJQbGF5ZXJCb2FyZCgpIHtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7eX1cIl1beD1cIiR7eH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChjZWxsQ29udGVudC5maXJzdEVsZW1lbnRDaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNlbGxDb250ZW50LnJlbW92ZUNoaWxkKGNlbGxDb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQbGF5ZXJTaGlwcyhib2FyZCkge1xuICBjbGVhclBsYXllckJvYXJkKCk7XG4gIGNvbnN0IHsgc2hpcHMgfSA9IGJvYXJkO1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHNoaXA7XG4gICAgY29uc3QgY29vcmQgPSBib2FyZC5nZXRDdXJyZW50Q29vcmQoc2hpcCk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBib2FyZC5nZXRPcmllbnRhdGlvbihzaGlwKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgY29uc3QgW3gsIHldID0gW2Nvb3JkWzFdLCBjb29yZFswXV07XG4gICAgY29uc3QgY2VsbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICAgKTtcbiAgICBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcCc7XG4gICAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScsIG5hbWUpO1xuICAgIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uKTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9ICcyZW0nO1xuICAgICAgc2hpcFNxdWFyZS5zdHlsZS53aWR0aCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgICAgIHNoaXBTcXVhcmUuc3R5bGUud2lkdGggPSAnMmVtJztcbiAgICB9XG4gICAgY2VsbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcFNxdWFyZSk7XG4gIH1cblxuICBzaGlwRHJhZ0hhbmRsZXJzKCk7XG4gIHNoaXBDbGlja0hhbmRsZXJzKCk7XG4gIHNoaXBEcm9wSGFuZGxlcnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gcGxheWVyQm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICAgICApO1xuICAgICAgaWYgKGN1cnJDb29yZCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIG1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3Bwb25lbnRCb2FyZChvcHBvbmVudEJvYXJkKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gb3Bwb25lbnRCb2FyZFtyb3ddW2NvbF07XG4gICAgICBjb25zdCBjdXJyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cIm9wcG9uZW50XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKGN1cnJDb29yZCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIG1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKlxuXG4vL1xuLy8gRXZlbnQtZHJpdmVuIGZ1bmN0aW9uc1xuLy9cbmZ1bmN0aW9uIHB1Ymxpc2hBdHRhY2soZXZlbnQpIHtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKTtcbiAgcHViU3ViLnB1Ymxpc2goJ2F0dGFjaycsIFt5LCB4XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2tIYW5kbGVycygpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcbiAgY29uc3QgY2VsbHMgPSBvcHBvbmVudEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsJyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB1Ymxpc2hBdHRhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2RpdicsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc2hpcC1uYW1lJykpO1xufVxuXG5mdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBtb3ZlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBOYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnZGl2Jyk7XG4gIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbc2hpcC1uYW1lPVwiJHtzaGlwTmFtZX1cIl1gKTtcblxuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoc2hpcEJveC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneScpKSxcbiAgICBwYXJzZUludChzaGlwQm94LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpLFxuICBdO1xuICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXBCb3guZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGNvbnN0IG1vdmVDb29yZCA9IFtcbiAgICBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpLFxuICBdO1xuICBwdWJTdWIucHVibGlzaChcbiAgICAnbW92ZScsXG4gICAge1xuICAgICAgc2hpcE5hbWUsXG4gICAgICBzaGlwQ29vcmQsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICAgIG1vdmVDb29yZCxcbiAgICB9LFxuICApO1xufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwKGUpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScpO1xuXG4gIGNvbnN0IHNoaXBDb29yZCA9IFtcbiAgICBwYXJzZUludChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneScpKSxcbiAgICBwYXJzZUludChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneCcpKVxuICBdO1xuICBsZXQgb3JpZW50YXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJyk7XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH0gZWxzZSB7XG4gICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH1cbiAgcHViU3ViLnB1Ymxpc2goXG4gICAgJ3JvdGF0ZScsXG4gICAge1xuICAgICAgc2hpcE5hbWUsXG4gICAgICBzaGlwQ29vcmQsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICB9LFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcERyYWdIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBzaGlwcyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG5cbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwRHJvcEhhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IGNlbGxzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwtY29udGVudCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG1vdmVTaGlwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcENsaWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3Qgc2hpcHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEF0dGFja0hhbmRsZXJzKCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1vcHBvbmVudCcpO1xuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHVibGlzaEF0dGFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QnV0dG9uSGFuZGxlcigpIHtcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwdWJTdWIucHVibGlzaCgnc3RhcnRHYW1lJywgJ29mZiB0byB0aGUgcmFjZXMnKTtcbiAgfSk7XG59XG5cbiovXG5cbi8vXG4vLyBHYW1lIGZsb3dcbi8vXG5leHBvcnQgZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIod2lubmVyKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3aW5zIWA7XG59XG5cbi8qXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUGxheWVyU2hpcChpZCwgc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgY29uc3QgW3gsIHldID0gW2Nvb3JkWzFdLCBjb29yZFswXV07XG4gIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW3k9XCIke3l9XCJdW3g9XCIke3h9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgKTtcbiAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwU3F1YXJlLmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgc2hpcFNxdWFyZS5pZCA9IGlkO1xuICBzaGlwU3F1YXJlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJywgb3JpZW50YXRpb24pO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgc2hpcFNxdWFyZS5zdHlsZS5oZWlnaHQgPSAnMmVtJztcbiAgICBzaGlwU3F1YXJlLnN0eWxlLndpZHRoID0gYCR7MiAqIHNoaXBMZW5ndGh9ZW1gO1xuICB9XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIHNoaXBTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gYCR7MiAqIHNoaXBMZW5ndGh9ZW1gO1xuICAgIHNoaXBTcXVhcmUuc3R5bGUud2lkdGggPSAnMmVtJztcbiAgfVxuICBjZWxsQ29udGVudC5hcHBlbmRDaGlsZChzaGlwU3F1YXJlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBsYXllclNoaXAoY29vcmQpIHtcbiAgY29uc3QgeCA9IGNvb3JkWzFdO1xuICBjb25zdCB5ID0gY29vcmRbMF07XG4gIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW3k9XCIke3l9XCJdW3g9XCIke3h9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgKTtcbiAgY2VsbENvbnRlbnQucmVtb3ZlQ2hpbGQoY2VsbENvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xufVxuKi8iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBhcnJheTJkIH0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZFNpemUgPSAxMDtcbiAgICB0aGlzLmJvYXJkID0gYXJyYXkyZCh0aGlzLmJvYXJkU2l6ZSwgdGhpcy5ib2FyZFNpemUpO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gICNjb3VudEJsYW5rU3BhY2VzKGNvb3JkLCBudW1TcGFjZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZFswXTtcbiAgICBsZXQgYmxhbmtTcGFjZXMgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TcGFjZXM7IGkrKykge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGlmICh5ICsgaSA8IHRoaXMuYm9hcmRTaXplKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0gPT09ICcnID8gYmxhbmtTcGFjZXMgKz0gMSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGlmICh4ICsgaSA8IHRoaXMuYm9hcmRTaXplKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt5XVt4ICsgaV0gPT09ICcnID8gYmxhbmtTcGFjZXMgKz0gMSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJsYW5rU3BhY2VzO1xuICB9XG5cbiAgZ2V0Q3VycmVudENvb3JkKHNoaXApIHtcbiAgICBsZXQgc2hpcEZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGN1cnJDb29yZCA9IG51bGw7XG4gICAgd2hpbGUgKHNoaXBGb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZFNpemU7IHkrKykge1xuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgICBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PT0gc2hpcCkge1xuICAgICAgICAgICAgY3VyckNvb3JkID0gW3ksIHhdO1xuICAgICAgICAgICAgc2hpcEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hpcEZvdW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGN1cnJDb29yZDtcbiAgfVxuXG4gIGdldE9yaWVudGF0aW9uKHNoaXApIHtcbiAgICBjb25zdCBjdXJyQ29vcmQgPSB0aGlzLmdldEN1cnJlbnRDb29yZChzaGlwKTtcbiAgICBjb25zdCB4ID0gY3VyckNvb3JkWzFdO1xuICAgIGNvbnN0IHkgPSBjdXJyQ29vcmRbMF07XG4gICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcblxuICAgIGlmICh5ICsgMSA8IHRoaXMuYm9hcmRTaXplICYmIHRoaXMuYm9hcmRbeSArIDFdW3hdID09PSBzaGlwKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIGlmICh4ICsgMSA8IHRoaXMuYm9hcmRTaXplICYmIHRoaXMuYm9hcmRbeV1beCArIDFdID09PSBzaGlwKSB7XG4gICAgICBvcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgcmV0dXJuIG9yaWVudGF0aW9uO1xuICB9XG5cbiAgI2lzUGxhY2VtZW50VmFsaWQoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZFswXTtcbiAgICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICAgIGxldCBibGFua1NwYWNlcyA9IDA7XG4gICAgaWYgKG9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcgJiYgeSArIHNoaXAubGVuZ3RoIDw9IHRoaXMuYm9hcmRTaXplKSB7XG4gICAgICBibGFua1NwYWNlcyA9IHRoaXMuI2NvdW50QmxhbmtTcGFjZXMoY29vcmQsIHNoaXAubGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PSAnaG9yaXpvbnRhbCcgJiYgeCArIHNoaXAubGVuZ3RoIDw9IHRoaXMuYm9hcmRTaXplKSB7XG4gICAgICBibGFua1NwYWNlcyA9IHRoaXMuI2NvdW50QmxhbmtTcGFjZXMoY29vcmQsIHNoaXAubGVuZ3RoLCBvcmllbnRhdGlvbik7XG4gICAgfVxuICAgIGlmIChibGFua1NwYWNlcyA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgaXNWYWxpZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgI3JlbW92ZVNoaXAoc2hpcCkge1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZFNpemU7IHkrKykge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeV1beF0gPT09IHNoaXAgPyB0aGlzLmJvYXJkW3ldW3hdID0gJycgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzaGlwSW5kID0gdGhpcy5zaGlwcy5pbmRleE9mKHNoaXApO1xuICAgIHNoaXBJbmQgPiAtMSA/IHRoaXMuc2hpcHMuc3BsaWNlKHNoaXBJbmQsIDEpIDogbnVsbDtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHBsYWNlbWVudFZhbGlkID0gdGhpcy4jaXNQbGFjZW1lbnRWYWxpZChzaGlwLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgIGlmIChwbGFjZW1lbnRWYWxpZCkge1xuICAgICAgdGhpcy4jcmVtb3ZlU2hpcChzaGlwKTsgLy8gaWYgc2hpcCB3YXMgcHJldmlvdXNseSBwbGFjZWRcbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGxhY2VtZW50VmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgcm90YXRlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgY3VyckNvb3JkID0gdGhpcy5nZXRDdXJyZW50Q29vcmQoc2hpcCk7XG4gICAgY29uc3QgeCA9IGN1cnJDb29yZFsxXTtcbiAgICBjb25zdCB5ID0gY3VyckNvb3JkWzBdO1xuICAgIGxldCBuZXdEaXJyID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmJvYXJkW3kgKyAxXVt4XSA9PT0gc2hpcCkge1xuICAgICAgbmV3RGlyciA9ICdob3Jpem9udGFsJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beCArIDFdID09PSBzaGlwKSB7XG4gICAgICBuZXdEaXJyID0gJ3ZlcnRpY2FsJztcbiAgICB9XG5cbiAgICBjb25zdCBmcmVlU3BhY2VzID0gdGhpcy4jY291bnRCbGFua1NwYWNlcyhjdXJyQ29vcmQsIHNoaXAubGVuZ3RoLCBuZXdEaXJyKTtcbiAgICBpZiAoZnJlZVNwYWNlcyA9PSBzaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuI3JlbW92ZVNoaXAoc2hpcCk7XG4gICAgICB0aGlzLnBsYWNlU2hpcChzaGlwLCBjdXJyQ29vcmQsIG5ld0RpcnIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgaWYgKHRoaXMuYm9hcmRbeV1beF0uY29uc3RydWN0b3IubmFtZSA9PSAnU2hpcCcpIHtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0uaGl0KCk7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ2hpdCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ldW3hdID09ICcnKSB7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdID0gJ21pc3MnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAnaGl0JyB8fCB0aGlzLmJvYXJkW3ldW3hdID09ICdtaXNzJykge1xuICAgICAgcmV0dXJuICdBdHRhY2sgSW52YWxpZCc7XG4gICAgfVxuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBzaGlwc1N1bmsgPSAwO1xuICAgIGZvciAoY29uc3Qgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBzaGlwLnN1bmsgPyBzaGlwc1N1bmsgKz0gMSA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzaGlwc1N1bmsgPT0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFJhbmRJbnQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3Rvcihib2FyZCkge1xuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcbiAgICB0aGlzLnR5cGUgPSBudWxsO1xuICAgIHRoaXMubmFtZSA9IG51bGw7XG4gIH1cblxuICBzZXRQbGF5ZXJUeXBlKGluZGV4KSB7XG4gICAgY29uc3QgdHlwZXMgPSBbJ2h1bWFuJywgJ2NvbXB1dGVyJ107XG4gICAgdGhpcy50eXBlID0gdHlwZXNbaW5kZXhdO1xuICB9XG5cbiAgc2V0UGxheWVyTmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNlbmRBdHRhY2soYm9hcmQsIGNvb3JkaW5hdGVzID0gbnVsbCkge1xuICAgIGlmICh0aGlzLnR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy50eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICBsZXQgYXR0YWNrID0gW2dldFJhbmRJbnQoMTApLCBnZXRSYW5kSW50KDEwKV07XG5cbiAgICAgIHdoaWxlIChib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjaykgPT09ICdBdHRhY2sgSW52YWxpZCcpIHtcbiAgICAgICAgYXR0YWNrID0gW2dldFJhbmRJbnQoMTApLCBnZXRSYW5kSW50KDEwKV07XG4gICAgICB9XG5cbiAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IHB1YlN1YiA9IHtcbiAgc3Vic2NyaWJlcnM6IHt9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH0sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwdWJTdWI7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBuYW1lKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRhbWFnZSA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cblxuICBoaXQocG9zaXRpb24pIHtcbiAgICB0aGlzLmRhbWFnZSArPSAxO1xuICAgIGlmICh0aGlzLmlzU3VuaygpKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5kYW1hZ2UgPT09IHRoaXMubGVuZ3RoO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyZCh3aWR0aCwgbGVuZ3RoKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheSgyKTtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSB7XG4gICAgYXJyW3ldID0gbmV3IEFycmF5KDIpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgYXJyW3ldW3hdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGFja2VkQ29vcmRpbmF0ZXMoYm9hcmQpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gYm9hcmQuYm9hcmQ7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZ2FtZUJvYXJkW3ldW3hdO1xuICAgICAgaWYgKGN1cnJlbnQgPT09ICdoaXQnIHx8IGN1cnJlbnQgPT09ICdtaXNzJykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt5LCB4XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSAmJlxuICAgICAgQXJyYXkuaXNBcnJheShiKSAmJlxuICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZShhcnJheTEsIGFycmF5Mikge1xuICBsZXQgY29tcGFyZTEgPSBudWxsO1xuICBsZXQgY29tcGFyZTIgPSBudWxsO1xuICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXG4gIGlmIChhcnJheTEubGVuZ3RoID49IGFycmF5Mikge1xuICAgIGNvbXBhcmUxID0gYXJyYXkxO1xuICAgIGNvbXBhcmUyID0gYXJyYXkyO1xuICB9IGVsc2Uge1xuICAgIGNvbXBhcmUxID0gYXJyYXkyO1xuICAgIGNvbXBhcmUyID0gYXJyYXkxO1xuICB9XG5cbiAgZm9yIChjb25zdCBpdGVtMSBvZiBjb21wYXJlMSkge1xuICAgIGxldCBtYXRjaGVzID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0yIG9mIGNvbXBhcmUyKSB7XG4gICAgICBhcnJheUVxdWFscyhpdGVtMSwgaXRlbTIpID8gbWF0Y2hlcyArPSAxIDogbnVsbDtcbiAgICB9XG4gICAgbWF0Y2hlcyA9PT0gMCA/IHJldHVybkFycmF5LnB1c2goaXRlbTEpIDogbnVsbDtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5BcnJheTtcbn1cblxuXG4vKlxuY29uc3QgYXJyID0gYXJyYXkyZCgxMCwgMTApO1xuXG5hcnJbMF1bMF0gPSAnTyc7XG5hcnJbMV1bMF0gPSAnTyc7XG5hcnJbMl1bMF0gPSAnTyc7XG5hcnJbM11bMF0gPSAnTyc7XG5hcnJbNF1bMF0gPSAnTyc7XG5cbmNvbnNvbGUudGFibGUoYXJyKVxuY29uc29sZS5sb2coYXJyKVxuKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcbmltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCB7IGdldFJhbmRJbnQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YnN1Yic7XG5cbi8qXG5ET00ucmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXInKTtcbkRPTS5yZW5kZXJHYW1lYm9hcmQoJ29wcG9uZW50Jyk7XG5cbmNvbnN0IGJvYXJkMSA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGJvYXJkMSk7XG5wbGF5ZXIxLnNldFBsYXllclR5cGUoMCk7XG5wbGF5ZXIxLnNldFBsYXllck5hbWUoJ1BsYXllciAxJyk7XG5cbmNvbnN0IGJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihib2FyZDIpO1xuY29tcHV0ZXIuc2V0UGxheWVyVHlwZSgxKTtcbmNvbXB1dGVyLnNldFBsYXllck5hbWUoJ0NvbXB1dGVyJyk7XG5cbmNvbnN0IHBsYXllcnMgPSBbcGxheWVyMSwgY29tcHV0ZXJdO1xuXG5mb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1LCAnY2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoMywgJ2Rlc3RvcnllcicpO1xuICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAnc3VibWFyaW5lJyk7XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAncGF0cm9sQm9hdCcpO1xuICBjb25zdCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG4gIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIGxldCBjb29yZCA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tnZXRSYW5kSW50KDIpXTtcbiAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAocGxhY2VkID09PSBmYWxzZSkge1xuICAgICAgaWYgKHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmQgPSBbZ2V0UmFuZEludCgxMCksIGdldFJhbmRJbnQoMTApXTtcbiAgICAgICAgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbZ2V0UmFuZEludCgyKV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkRPTS5zaG93UGxheWVyU2hpcHMocGxheWVyMS5ib2FyZClcblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgRE9NLnN0b3BBdHRhY2tIYW5kbGVycygpO1xuICBET00uYW5ub3VuY2VXaW5uZXIod2lubmVyKTtcbn1cblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gIHBsYXllcjEuc2VuZEF0dGFjayhjb21wdXRlci5ib2FyZCwgY29vcmRpbmF0ZXMpO1xuICBET00udXBkYXRlT3Bwb25lbnRCb2FyZChjb21wdXRlci5ib2FyZC5ib2FyZCk7XG4gIGlmIChjb21wdXRlci5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGVuZEdhbWUocGxheWVyMS5uYW1lKTtcbiAgfVxuXG4gIGNvbXB1dGVyLnNlbmRBdHRhY2socGxheWVyMS5ib2FyZCk7XG4gIERPTS51cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXIxLmJvYXJkLmJvYXJkKTtcbiAgaWYgKHBsYXllcjEuYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBlbmRHYW1lKGNvbXB1dGVyLm5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1vdmVTaGlwKG1vdmVEYXRhKSB7XG4gIGNvbnN0IGNvb3JkID0gbW92ZURhdGEubW92ZUNvb3JkO1xuICBjb25zdCBzaGlwID0gcGxheWVyMS5ib2FyZC5ib2FyZFttb3ZlRGF0YS5zaGlwQ29vcmRbMF1dW21vdmVEYXRhLnNoaXBDb29yZFsxXV07XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IG1vdmVEYXRhO1xuXG4gIGlmIChwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pICE9PSBmYWxzZSkge1xuICAgIHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbik7XG4gICAgRE9NLnNob3dQbGF5ZXJTaGlwcyhwbGF5ZXIxLmJvYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwKHJvdGF0ZURhdGEpIHtcbiAgY29uc3Qgc2hpcCA9IHBsYXllcjEuYm9hcmQuYm9hcmRbcm90YXRlRGF0YS5zaGlwQ29vcmRbMF1dW3JvdGF0ZURhdGEuc2hpcENvb3JkWzFdXTtcblxuICBpZiAocGxheWVyMS5ib2FyZC5yb3RhdGVTaGlwKHNoaXApICE9PSBmYWxzZSkge1xuICAgIERPTS5zaG93UGxheWVyU2hpcHMocGxheWVyMS5ib2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICBwdWJTdWIuc3Vic2NyaWJlKCdhdHRhY2snLCBwbGF5ZXJBdHRhY2spO1xuICBET00uYXR0YWNrSGFuZGxlcnMoKTtcbn1cblxucHViU3ViLnN1YnNjcmliZSgnbW92ZScsIG1vdmVTaGlwKTtcbnB1YlN1Yi5zdWJzY3JpYmUoJ3JvdGF0ZScsIHJvdGF0ZVNoaXApO1xucHViU3ViLnN1YnNjcmliZSgnc3RhcnRHYW1lJywgc3RhcnRHYW1lKTtcblxuRE9NLnN0YXJ0QnV0dG9uSGFuZGxlcigpO1xuKi9cblxuLy9cbi8vKioqKioqKioqKioqKioqKioqKiogXG4vL1xuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBET00ucmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXInKTtcbiAgRE9NLnJlbmRlckdhbWVib2FyZCgnb3Bwb25lbnQnKTtcblxuICBjb25zdCBib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGJvYXJkMSk7XG4gIHBsYXllcjEuc2V0UGxheWVyVHlwZSgwKTtcbiAgcGxheWVyMS5zZXRQbGF5ZXJOYW1lKCdQbGF5ZXIgMScpO1xuXG4gIGNvbnN0IGJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKGJvYXJkMik7XG4gIGNvbXB1dGVyLnNldFBsYXllclR5cGUoMSk7XG4gIGNvbXB1dGVyLnNldFBsYXllck5hbWUoJ0NvbXB1dGVyJyk7XG5cbiAgY29uc3QgcGxheWVycyA9IFtwbGF5ZXIxLCBjb21wdXRlcl07XG5cbiAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcCg1LCAnY2FycmllcicpO1xuICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcCg0LCAnYmF0dGxlc2hpcCcpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKDMsICdkZXN0b3J5ZXInKTtcbiAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzLCAnc3VibWFyaW5lJyk7XG4gICAgY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKDIsICdwYXRyb2xCb2F0Jyk7XG4gICAgY29uc3Qgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgIGNvbnN0IG9yaWVudGF0aW9ucyA9IFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddO1xuXG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgICBsZXQgY29vcmQgPSBbZ2V0UmFuZEludCgxMCksIGdldFJhbmRJbnQoMTApXTtcbiAgICAgIGxldCBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tnZXRSYW5kSW50KDIpXTtcbiAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKHBsYWNlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHBsYXllci5ib2FyZC5wbGFjZVNoaXAoc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbik7XG4gICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb29yZCA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgICAgICAgIG9yaWVudGF0aW9uID0gb3JpZW50YXRpb25zW2dldFJhbmRJbnQoMildO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgRE9NLnNob3dQbGF5ZXJTaGlwcyhwbGF5ZXIxLmJvYXJkKVxuXG4gIGZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gICAgRE9NLnN0b3BBdHRhY2tIYW5kbGVycygpO1xuICAgIERPTS5hbm5vdW5jZVdpbm5lcih3aW5uZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgcGxheWVyMS5zZW5kQXR0YWNrKGNvbXB1dGVyLmJvYXJkLCBjb29yZGluYXRlcyk7XG4gICAgRE9NLnVwZGF0ZU9wcG9uZW50Qm9hcmQoY29tcHV0ZXIuYm9hcmQuYm9hcmQpO1xuICAgIGlmIChjb21wdXRlci5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgZW5kR2FtZShwbGF5ZXIxLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbXB1dGVyLnNlbmRBdHRhY2socGxheWVyMS5ib2FyZCk7XG4gICAgRE9NLnVwZGF0ZVBsYXllckJvYXJkKHBsYXllcjEuYm9hcmQuYm9hcmQpO1xuICAgIGlmIChwbGF5ZXIxLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKGNvbXB1dGVyLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVTaGlwKG1vdmVEYXRhKSB7XG4gICAgY29uc3QgY29vcmQgPSBtb3ZlRGF0YS5tb3ZlQ29vcmQ7XG4gICAgY29uc3Qgc2hpcCA9IHBsYXllcjEuYm9hcmQuYm9hcmRbbW92ZURhdGEuc2hpcENvb3JkWzBdXVttb3ZlRGF0YS5zaGlwQ29vcmRbMV1dO1xuICAgIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IG1vdmVEYXRhO1xuXG4gICAgaWYgKHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikgIT09IGZhbHNlKSB7XG4gICAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgRE9NLnNob3dQbGF5ZXJTaGlwcyhwbGF5ZXIxLmJvYXJkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGVTaGlwKHJvdGF0ZURhdGEpIHtcbiAgICBjb25zdCBzaGlwID0gcGxheWVyMS5ib2FyZC5ib2FyZFtyb3RhdGVEYXRhLnNoaXBDb29yZFswXV1bcm90YXRlRGF0YS5zaGlwQ29vcmRbMV1dO1xuXG4gICAgaWYgKHBsYXllcjEuYm9hcmQucm90YXRlU2hpcChzaGlwKSAhPT0gZmFsc2UpIHtcbiAgICAgIERPTS5zaG93UGxheWVyU2hpcHMocGxheWVyMS5ib2FyZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2F0dGFjaycsIHBsYXllckF0dGFjayk7XG4gICAgRE9NLmF0dGFja0hhbmRsZXJzKCk7XG4gIH1cblxuICBwdWJTdWIuc3Vic2NyaWJlKCdtb3ZlJywgbW92ZVNoaXApO1xuICBwdWJTdWIuc3Vic2NyaWJlKCdyb3RhdGUnLCByb3RhdGVTaGlwKTtcbiAgcHViU3ViLnN1YnNjcmliZSgnc3RhcnRHYW1lJywgc3RhcnRHYW1lKTtcblxuICBET00uc3RhcnRCdXR0b25IYW5kbGVyKCk7XG59XG5cbm5ld0dhbWUoKTtcbkRPTS5uZXdHYW1lSGFuZGxlcigpO1xuXG5wdWJTdWIuc3Vic2NyaWJlKCduZXdHYW1lJywgbmV3R2FtZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
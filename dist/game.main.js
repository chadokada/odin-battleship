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
/* harmony export */   "deleteShit": () => (/* binding */ deleteShit),
/* harmony export */   "newGameHandler": () => (/* binding */ newGameHandler),
/* harmony export */   "removeAllAttackHandlers": () => (/* binding */ removeAllAttackHandlers),
/* harmony export */   "removeAttackHandler": () => (/* binding */ removeAttackHandler),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "shipClickHandlers": () => (/* binding */ shipClickHandlers),
/* harmony export */   "shipDragHandlers": () => (/* binding */ shipDragHandlers),
/* harmony export */   "shipDropHandlers": () => (/* binding */ shipDropHandlers),
/* harmony export */   "showPlayerShips": () => (/* binding */ showPlayerShips),
/* harmony export */   "startButtonHandler": () => (/* binding */ startButtonHandler),
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

function removeAttackHandler(coordinates) {
  const x = coordinates[1];
  const y = coordinates[0];
  const attackCell = document.querySelector(
    `[y="${y}"][x="${x}"][player="opponent"]`
  ).parentElement;

  attackCell.removeEventListener('click', publishAttack);
}

function removeAllAttackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.removeEventListener('click', publishAttack);
  }

  console.log('All attack handlers removed.')
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

  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }

  removeAllAttackHandlers();

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

function deleteShit() {
  const gameboard = document.querySelector('#gameboard-player');

  while (gameboard.firstChild) {
    gameboard.removeChild(gameboard.firstChild)
  }

}

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








function newGame() {
  _dom__WEBPACK_IMPORTED_MODULE_1__.renderGameboard('player');
  _dom__WEBPACK_IMPORTED_MODULE_1__.renderGameboard('opponent');

  const board1 = new _gameboard__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const player1 = new _player__WEBPACK_IMPORTED_MODULE_2__["default"](board1);
  player1.setPlayerType(0);

  //const playerName = prompt('Gimme name')
  //player1.setPlayerName('Player 1');
  
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
    _dom__WEBPACK_IMPORTED_MODULE_1__.removeAllAttackHandlers();
    _dom__WEBPACK_IMPORTED_MODULE_1__.announceWinner(winner);
  }

  function playerAttack(coordinates) {
    player1.sendAttack(computer.board, coordinates);
    _dom__WEBPACK_IMPORTED_MODULE_1__.removeAttackHandler(coordinates);

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


/*

newGame(){
  generatePlayers();
  initializeGame(players);
}




*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsa0RBQVM7QUFDOUIsdUJBQXVCLCtDQUFNO0FBQzdCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0IsNkNBQUk7QUFDNUIsMkJBQTJCLDZDQUFJO0FBQy9CLDBCQUEwQiw2Q0FBSTtBQUM5QiwwQkFBMEIsNkNBQUk7QUFDOUIsMkJBQTJCLDZDQUFJO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsNERBQVUsTUFBTSw0REFBVTtBQUM3QyxxQ0FBcUMsNERBQVU7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsbUJBQW1CLDREQUFVLE1BQU0sNERBQVU7QUFDN0MscUNBQXFDLDREQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsaURBQW1COztBQUVyQjtBQUNBLElBQUkseURBQTJCO0FBQy9CLElBQUksZ0RBQWtCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUF1Qjs7QUFFM0IsSUFBSSxxREFBdUI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBcUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxjQUFjOztBQUUxQjtBQUNBO0FBQ0EsTUFBTSxpREFBbUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxpREFBbUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBLElBQUkseURBQWdCO0FBQ3BCLElBQUksZ0RBQWtCO0FBQ3RCOztBQUVBLEVBQUUseURBQWdCO0FBQ2xCLEVBQUUseURBQWdCO0FBQ2xCLEVBQUUseURBQWdCOztBQUVsQixFQUFFLG9EQUFzQjtBQUN4Qjs7QUFFQTtBQUNBLGdEQUFrQjs7QUFFbEIseURBQWdCOzs7QUFHaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3V0aWxzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGl0YWxpYyw1MDAsNTAwaXRhbGljLDcwMCw3MDBpdGFsaWMsOTAwLDkwMGl0YWxpYywzMDBpdGFsaWMsMzAwLDEwMGl0YWxpYywxMDApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wbGF5ZXItY29udGFpbmVyLFxcbi5vcHBvbmVudC1jb250YWluZXJ7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmdhbWVib2FyZC1wYWRkaW5ne1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRhYmxle1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBtaW4taGVpZ2h0OiAxMWVtO1xcbiAgbWluLXdpZHRoOiAxMWVtO1xcbn1cXG5cXG50ZHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5ib2FyZC1jZWxse1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigxNzUsIDE3NSwgMjU1KTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuXFxuLmJvYXJkLWNlbGwtY29udGVudHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuXFxuLmhpdHtcXG4gIC8qXFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNze1xcbiAgLypcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnNoaXB7XFxuICAvKlxcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDI1NSk7XFxufVxcblxcbi5zcXVhcmV7XFxuICAvKlxcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICAqL1xcbn1cXG5cXG4ucGlua3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsOEJBQThCO0dBQzdCLHNCQUFzQjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRTs7Ozs7R0FLQztFQUNELHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFOzs7Ozs7O0dBT0M7RUFDRCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTs7Ozs7R0FLQztFQUNELHlDQUF5QztFQUN6QyxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0U7OztHQUdDO0FBQ0g7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCw0MDBpdGFsaWMsNTAwLDUwMGl0YWxpYyw3MDAsNzAwaXRhbGljLDkwMCw5MDBpdGFsaWMsMzAwaXRhbGljLDMwMCwxMDBpdGFsaWMsMTAwKTtcXG5cXG5ib2R5e1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wbGF5ZXItY29udGFpbmVyLFxcbi5vcHBvbmVudC1jb250YWluZXJ7XFxuICBkaXNwbGF5OmZsZXg7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLmdhbWVib2FyZC1wYWRkaW5ne1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRhYmxle1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBtaW4taGVpZ2h0OiAxMWVtO1xcbiAgbWluLXdpZHRoOiAxMWVtO1xcbn1cXG5cXG50ZHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5ib2FyZC1jZWxse1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYigxNzUsIDE3NSwgMjU1KTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuXFxuLmJvYXJkLWNlbGwtY29udGVudHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG59XFxuXFxuLmhpdHtcXG4gIC8qXFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBvdXRsaW5lOiAycHggc29saWQgcmVkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNze1xcbiAgLypcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnNoaXB7XFxuICAvKlxcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtO1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkLWNlbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI1LCAyMjUsIDI1NSk7XFxufVxcblxcbi5zcXVhcmV7XFxuICAvKlxcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxuICAqL1xcbn1cXG5cXG4ucGlua3tcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YnN1Yic7XG5cbi8vXG4vLyBFdmVudC1kcml2ZW4gZnVuY3Rpb25zXG4vL1xuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBwdWJTdWIucHVibGlzaCgnbmV3R2FtZScsICdTdGFydCBuZXcgZ2FtZSEnKVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoQXR0YWNrKGV2ZW50KSB7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gIHB1YlN1Yi5wdWJsaXNoKCdhdHRhY2snLCBbeSwgeF0pO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdkaXYnLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScpKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gbW92ZVNoaXAoZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2RpdicpO1xuICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3NoaXAtbmFtZT1cIiR7c2hpcE5hbWV9XCJdYCk7XG5cbiAgY29uc3Qgc2hpcENvb3JkID0gW1xuICAgIHBhcnNlSW50KHNoaXBCb3gucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoc2hpcEJveC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneCcpKSxcbiAgXTtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwQm94LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcblxuICBjb25zdCBtb3ZlQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpLFxuICAgIHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSxcbiAgXTtcbiAgcHViU3ViLnB1Ymxpc2goXG4gICAgJ21vdmUnLFxuICAgIHtcbiAgICAgIHNoaXBOYW1lLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBtb3ZlQ29vcmQsXG4gICAgfSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdzaGlwLW5hbWUnKTtcblxuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3gnKSlcbiAgXTtcbiAgbGV0IG9yaWVudGF0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2Uge1xuICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFxuICAgICdyb3RhdGUnLFxuICAgIHtcbiAgICAgIHNoaXBOYW1lLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0dhbWVIYW5kbGVyKCkge1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lJyk7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHViU3ViLnB1Ymxpc2goJ25ld0dhbWUnLCAnU3RhcnQgbmV3IGdhbWUhJylcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJ1dHRvbkhhbmRsZXIoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHViU3ViLnB1Ymxpc2goJ3N0YXJ0R2FtZScsICdvZmYgdG8gdGhlIHJhY2VzJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLW9wcG9uZW50Jyk7XG4gIGNvbnN0IGNlbGxzID0gb3Bwb25lbnRCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0YWNrSGFuZGxlcihjb29yZGluYXRlcykge1xuICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgY29uc3QgYXR0YWNrQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJvcHBvbmVudFwiXWBcbiAgKS5wYXJlbnRFbGVtZW50O1xuXG4gIGF0dGFja0NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEF0dGFja0hhbmRsZXJzKCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1vcHBvbmVudCcpO1xuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHVibGlzaEF0dGFjayk7XG4gIH1cblxuICBjb25zb2xlLmxvZygnQWxsIGF0dGFjayBoYW5kbGVycyByZW1vdmVkLicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwRHJhZ0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBEcm9wSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3QgY2VsbHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbC1jb250ZW50Jyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgbW92ZVNoaXApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwQ2xpY2tIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBzaGlwcyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG5cbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApO1xuICB9XG59XG5cbi8vXG4vLyBET00gbWV0aG9kcyB0byByZW5kZXIgZ2FtZWJvYXJkIGFuZCBzaGlwc1xuLy9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0YWJsZVJvdywgdGV4dCkge1xuICBjb25zdCBib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYm9hcmRIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbC1oZWFkZXInO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZEhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2VsbCh0YWJsZVJvdywgcm93LCBjb2wsIHBsYXllcikge1xuICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBib2FyZENlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwnO1xuXG4gIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbGxDb250ZW50LmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWNvbnRlbnQnO1xuICBjZWxsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3knLCByb3cgLSAxKTtcbiAgY2VsbENvbnRlbnQuc2V0QXR0cmlidXRlKCd4JywgY29sIC0gMSk7XG4gIGNlbGxDb250ZW50LnNldEF0dHJpYnV0ZSgncGxheWVyJywgcGxheWVyKTtcbiAgYm9hcmRDZWxsLmFwcGVuZENoaWxkKGNlbGxDb250ZW50KTtcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dhbWVib2FyZC0ke3BsYXllcn1gKTtcblxuICB3aGlsZSAoZ2FtZUJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICBnYW1lQm9hcmQucmVtb3ZlQ2hpbGQoZ2FtZUJvYXJkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQXR0YWNrSGFuZGxlcnMoKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMTsgcm93KyspIHtcbiAgICBjb25zdCBib2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTE7IGNvbCsrKSB7XG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCBjb2wpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgYm9hcmRSb3cuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwICYmIGNvbCA9PT0gMCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoYm9hcmRSb3csIHJvdyk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUJvYXJkQ2VsbChib2FyZFJvdywgcm93LCBjb2wsIHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChib2FyZFJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJQbGF5ZXJCb2FyZCgpIHtcbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7eX1cIl1beD1cIiR7eH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChjZWxsQ29udGVudC5maXJzdEVsZW1lbnRDaGlsZCAhPSBudWxsKSB7XG4gICAgICAgIGNlbGxDb250ZW50LnJlbW92ZUNoaWxkKGNlbGxDb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQbGF5ZXJTaGlwcyhib2FyZCkge1xuICBjbGVhclBsYXllckJvYXJkKCk7XG4gIGNvbnN0IHsgc2hpcHMgfSA9IGJvYXJkO1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHNoaXA7XG4gICAgY29uc3QgY29vcmQgPSBib2FyZC5nZXRDdXJyZW50Q29vcmQoc2hpcCk7XG4gICAgY29uc3Qgb3JpZW50YXRpb24gPSBib2FyZC5nZXRPcmllbnRhdGlvbihzaGlwKTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gICAgY29uc3QgW3gsIHldID0gW2Nvb3JkWzFdLCBjb29yZFswXV07XG4gICAgY29uc3QgY2VsbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICAgKTtcbiAgICBjb25zdCBzaGlwU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcCc7XG4gICAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScsIG5hbWUpO1xuICAgIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAndHJ1ZScpO1xuICAgIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uKTtcblxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9ICcyZW0nO1xuICAgICAgc2hpcFNxdWFyZS5zdHlsZS53aWR0aCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgICAgIHNoaXBTcXVhcmUuc3R5bGUud2lkdGggPSAnMmVtJztcbiAgICB9XG4gICAgY2VsbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcFNxdWFyZSk7XG4gIH1cblxuICBzaGlwRHJhZ0hhbmRsZXJzKCk7XG4gIHNoaXBDbGlja0hhbmRsZXJzKCk7XG4gIHNoaXBEcm9wSGFuZGxlcnMoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gcGxheWVyQm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICAgICApO1xuICAgICAgaWYgKGN1cnJDb29yZCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIG1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3Bwb25lbnRCb2FyZChvcHBvbmVudEJvYXJkKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gb3Bwb25lbnRCb2FyZFtyb3ddW2NvbF07XG4gICAgICBjb25zdCBjdXJyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cIm9wcG9uZW50XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKGN1cnJDb29yZCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIG1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlU2hpdCgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcblxuICB3aGlsZSAoZ2FtZWJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICBnYW1lYm9hcmQucmVtb3ZlQ2hpbGQoZ2FtZWJvYXJkLmZpcnN0Q2hpbGQpXG4gIH1cblxufVxuXG4vL1xuLy8gR2FtZSBmbG93XG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGFubm91bmNlV2lubmVyKHdpbm5lcikge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd2lucyFgO1xufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYXllclNoaXAoaWQsIHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gIGNvbnN0IFt4LCB5XSA9IFtjb29yZFsxXSwgY29vcmRbMF1dO1xuICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICk7XG4gIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcCc7XG4gIHNoaXBTcXVhcmUuaWQgPSBpZDtcbiAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uKTtcblxuICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIHNoaXBTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gJzJlbSc7XG4gICAgc2hpcFNxdWFyZS5zdHlsZS53aWR0aCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgfVxuICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgICBzaGlwU3F1YXJlLnN0eWxlLndpZHRoID0gJzJlbSc7XG4gIH1cbiAgY2VsbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcFNxdWFyZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQbGF5ZXJTaGlwKGNvb3JkKSB7XG4gIGNvbnN0IHggPSBjb29yZFsxXTtcbiAgY29uc3QgeSA9IGNvb3JkWzBdO1xuICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICk7XG4gIGNlbGxDb250ZW50LnJlbW92ZUNoaWxkKGNlbGxDb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbn1cbiovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgYXJyYXkyZCB9IGZyb20gJy4uL3V0aWxzL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmRTaXplID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IGFycmF5MmQodGhpcy5ib2FyZFNpemUsIHRoaXMuYm9hcmRTaXplKTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICAjY291bnRCbGFua1NwYWNlcyhjb29yZCwgbnVtU3BhY2VzLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHggPSBjb29yZFsxXTtcbiAgICBjb25zdCB5ID0gY29vcmRbMF07XG4gICAgbGV0IGJsYW5rU3BhY2VzID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU3BhY2VzOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBpZiAoeSArIGkgPCB0aGlzLmJvYXJkU2l6ZSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID09PSAnJyA/IGJsYW5rU3BhY2VzICs9IDEgOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBpZiAoeCArIGkgPCB0aGlzLmJvYXJkU2l6ZSkge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeV1beCArIGldID09PSAnJyA/IGJsYW5rU3BhY2VzICs9IDEgOiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBibGFua1NwYWNlcztcbiAgfVxuXG4gIGdldEN1cnJlbnRDb29yZChzaGlwKSB7XG4gICAgbGV0IHNoaXBGb3VuZCA9IGZhbHNlO1xuICAgIGxldCBjdXJyQ29vcmQgPSBudWxsO1xuICAgIHdoaWxlIChzaGlwRm91bmQgPT09IGZhbHNlKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkU2l6ZTsgeCsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT09IHNoaXApIHtcbiAgICAgICAgICAgIGN1cnJDb29yZCA9IFt5LCB4XTtcbiAgICAgICAgICAgIHNoaXBGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoaXBGb3VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjdXJyQ29vcmQ7XG4gIH1cblxuICBnZXRPcmllbnRhdGlvbihzaGlwKSB7XG4gICAgY29uc3QgY3VyckNvb3JkID0gdGhpcy5nZXRDdXJyZW50Q29vcmQoc2hpcCk7XG4gICAgY29uc3QgeCA9IGN1cnJDb29yZFsxXTtcbiAgICBjb25zdCB5ID0gY3VyckNvb3JkWzBdO1xuICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG5cbiAgICBpZiAoeSArIDEgPCB0aGlzLmJvYXJkU2l6ZSAmJiB0aGlzLmJvYXJkW3kgKyAxXVt4XSA9PT0gc2hpcCkge1xuICAgICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIH0gZWxzZSBpZiAoeCArIDEgPCB0aGlzLmJvYXJkU2l6ZSAmJiB0aGlzLmJvYXJkW3ldW3ggKyAxXSA9PT0gc2hpcCkge1xuICAgICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcbiAgfVxuXG4gICNpc1BsYWNlbWVudFZhbGlkKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHggPSBjb29yZFsxXTtcbiAgICBjb25zdCB5ID0gY29vcmRbMF07XG4gICAgbGV0IGlzVmFsaWQgPSBmYWxzZTtcbiAgICBsZXQgYmxhbmtTcGFjZXMgPSAwO1xuICAgIGlmIChvcmllbnRhdGlvbiA9PSAndmVydGljYWwnICYmIHkgKyBzaGlwLmxlbmd0aCA8PSB0aGlzLmJvYXJkU2l6ZSkge1xuICAgICAgYmxhbmtTcGFjZXMgPSB0aGlzLiNjb3VudEJsYW5rU3BhY2VzKGNvb3JkLCBzaGlwLmxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnICYmIHggKyBzaGlwLmxlbmd0aCA8PSB0aGlzLmJvYXJkU2l6ZSkge1xuICAgICAgYmxhbmtTcGFjZXMgPSB0aGlzLiNjb3VudEJsYW5rU3BhY2VzKGNvb3JkLCBzaGlwLmxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgIH1cbiAgICBpZiAoYmxhbmtTcGFjZXMgPT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgIGlzVmFsaWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gICNyZW1vdmVTaGlwKHNoaXApIHtcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuYm9hcmRTaXplOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib2FyZFNpemU7IHgrKykge1xuICAgICAgICB0aGlzLmJvYXJkW3ldW3hdID09PSBzaGlwID8gdGhpcy5ib2FyZFt5XVt4XSA9ICcnIDogbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc2hpcEluZCA9IHRoaXMuc2hpcHMuaW5kZXhPZihzaGlwKTtcbiAgICBzaGlwSW5kID4gLTEgPyB0aGlzLnNoaXBzLnNwbGljZShzaGlwSW5kLCAxKSA6IG51bGw7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgICBjb25zdCBwbGFjZW1lbnRWYWxpZCA9IHRoaXMuI2lzUGxhY2VtZW50VmFsaWQoc2hpcCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKTtcbiAgICBpZiAocGxhY2VtZW50VmFsaWQpIHtcbiAgICAgIHRoaXMuI3JlbW92ZVNoaXAoc2hpcCk7IC8vIGlmIHNoaXAgd2FzIHByZXZpb3VzbHkgcGxhY2VkXG4gICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt5ICsgaV1beF0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBsYWNlbWVudFZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIHJvdGF0ZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IGN1cnJDb29yZCA9IHRoaXMuZ2V0Q3VycmVudENvb3JkKHNoaXApO1xuICAgIGNvbnN0IHggPSBjdXJyQ29vcmRbMV07XG4gICAgY29uc3QgeSA9IGN1cnJDb29yZFswXTtcbiAgICBsZXQgbmV3RGlyciA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5ib2FyZFt5ICsgMV1beF0gPT09IHNoaXApIHtcbiAgICAgIG5ld0RpcnIgPSAnaG9yaXpvbnRhbCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ldW3ggKyAxXSA9PT0gc2hpcCkge1xuICAgICAgbmV3RGlyciA9ICd2ZXJ0aWNhbCc7XG4gICAgfVxuXG4gICAgY29uc3QgZnJlZVNwYWNlcyA9IHRoaXMuI2NvdW50QmxhbmtTcGFjZXMoY3VyckNvb3JkLCBzaGlwLmxlbmd0aCwgbmV3RGlycik7XG4gICAgaWYgKGZyZWVTcGFjZXMgPT0gc2hpcC5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLiNyZW1vdmVTaGlwKHNoaXApO1xuICAgICAgdGhpcy5wbGFjZVNoaXAoc2hpcCwgY3VyckNvb3JkLCBuZXdEaXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdLmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1NoaXAnKSB7XG4gICAgICB0aGlzLmJvYXJkW3ldW3hdLmhpdCgpO1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdoaXQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4XSA9PSAnJykge1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9ICdtaXNzJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT0gJ2hpdCcgfHwgdGhpcy5ib2FyZFt5XVt4XSA9PSAnbWlzcycpIHtcbiAgICAgIHJldHVybiAnQXR0YWNrIEludmFsaWQnO1xuICAgIH1cbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBsZXQgc2hpcHNTdW5rID0gMDtcbiAgICBmb3IgKGNvbnN0IHNoaXAgb2YgdGhpcy5zaGlwcykge1xuICAgICAgc2hpcC5zdW5rID8gc2hpcHNTdW5rICs9IDEgOiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcHNTdW5rID09IHRoaXMuc2hpcHMubGVuZ3RoO1xuICB9XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kSW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoYm9hcmQpIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLm5hbWUgPSBudWxsO1xuICB9XG5cbiAgc2V0UGxheWVyVHlwZShpbmRleCkge1xuICAgIGNvbnN0IHR5cGVzID0gWydodW1hbicsICdjb21wdXRlciddO1xuICAgIHRoaXMudHlwZSA9IHR5cGVzW2luZGV4XTtcbiAgfVxuXG4gIHNldFBsYXllck5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZW5kQXR0YWNrKGJvYXJkLCBjb29yZGluYXRlcyA9IG51bGwpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgbGV0IGF0dGFjayA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuXG4gICAgICB3aGlsZSAoYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spID09PSAnQXR0YWNrIEludmFsaWQnKSB7XG4gICAgICAgIGF0dGFjayA9IFtnZXRSYW5kSW50KDEwKSwgZ2V0UmFuZEludCgxMCldO1xuICAgICAgfVxuXG4gICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFjayk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBwdWJTdWIgPSB7XG4gIHN1YnNjcmliZXJzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgbmFtZSkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KHBvc2l0aW9uKSB7XG4gICAgdGhpcy5kYW1hZ2UgKz0gMTtcbiAgICBpZiAodGhpcy5pc1N1bmsoKSkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFtYWdlID09PSB0aGlzLmxlbmd0aDtcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5MmQod2lkdGgsIGxlbmd0aCkge1xuICBjb25zdCBhcnIgPSBuZXcgQXJyYXkoMik7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkrKykge1xuICAgIGFyclt5XSA9IG5ldyBBcnJheSgyKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgIGFyclt5XVt4XSA9ICcnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZEludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBdHRhY2tlZENvb3JkaW5hdGVzKGJvYXJkKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW107XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGJvYXJkLmJvYXJkO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgY29uc3QgY3VycmVudCA9IGdhbWVCb2FyZFt5XVt4XTtcbiAgICAgIGlmIChjdXJyZW50ID09PSAnaGl0JyB8fCBjdXJyZW50ID09PSAnbWlzcycpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeSwgeF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZGluYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSkgJiZcbiAgICAgIEFycmF5LmlzQXJyYXkoYikgJiZcbiAgICAgIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJlxuICAgICAgYS5ldmVyeSgodmFsLCBpbmRleCkgPT4gdmFsID09PSBiW2luZGV4XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWUoYXJyYXkxLCBhcnJheTIpIHtcbiAgbGV0IGNvbXBhcmUxID0gbnVsbDtcbiAgbGV0IGNvbXBhcmUyID0gbnVsbDtcbiAgY29uc3QgcmV0dXJuQXJyYXkgPSBbXTtcblxuICBpZiAoYXJyYXkxLmxlbmd0aCA+PSBhcnJheTIpIHtcbiAgICBjb21wYXJlMSA9IGFycmF5MTtcbiAgICBjb21wYXJlMiA9IGFycmF5MjtcbiAgfSBlbHNlIHtcbiAgICBjb21wYXJlMSA9IGFycmF5MjtcbiAgICBjb21wYXJlMiA9IGFycmF5MTtcbiAgfVxuXG4gIGZvciAoY29uc3QgaXRlbTEgb2YgY29tcGFyZTEpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IDA7XG4gICAgZm9yIChjb25zdCBpdGVtMiBvZiBjb21wYXJlMikge1xuICAgICAgYXJyYXlFcXVhbHMoaXRlbTEsIGl0ZW0yKSA/IG1hdGNoZXMgKz0gMSA6IG51bGw7XG4gICAgfVxuICAgIG1hdGNoZXMgPT09IDAgPyByZXR1cm5BcnJheS5wdXNoKGl0ZW0xKSA6IG51bGw7XG4gIH1cblxuICByZXR1cm4gcmV0dXJuQXJyYXk7XG59XG5cblxuLypcbmNvbnN0IGFyciA9IGFycmF5MmQoMTAsIDEwKTtcblxuYXJyWzBdWzBdID0gJ08nO1xuYXJyWzFdWzBdID0gJ08nO1xuYXJyWzJdWzBdID0gJ08nO1xuYXJyWzNdWzBdID0gJ08nO1xuYXJyWzRdWzBdID0gJ08nO1xuXG5jb25zb2xlLnRhYmxlKGFycilcbmNvbnNvbGUubG9nKGFycilcbiovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9kb20nO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBnZXRSYW5kSW50IH0gZnJvbSAnLi4vdXRpbHMvdXRpbGl0aWVzJztcbmltcG9ydCBwdWJTdWIgZnJvbSAnLi9wdWJzdWInO1xuXG5mdW5jdGlvbiBuZXdHYW1lKCkge1xuICBET00ucmVuZGVyR2FtZWJvYXJkKCdwbGF5ZXInKTtcbiAgRE9NLnJlbmRlckdhbWVib2FyZCgnb3Bwb25lbnQnKTtcblxuICBjb25zdCBib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGJvYXJkMSk7XG4gIHBsYXllcjEuc2V0UGxheWVyVHlwZSgwKTtcblxuICAvL2NvbnN0IHBsYXllck5hbWUgPSBwcm9tcHQoJ0dpbW1lIG5hbWUnKVxuICAvL3BsYXllcjEuc2V0UGxheWVyTmFtZSgnUGxheWVyIDEnKTtcbiAgXG4gIHBsYXllcjEuc2V0UGxheWVyTmFtZSgnUGxheWVyIDEnKTtcblxuICBjb25zdCBib2FyZDIgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihib2FyZDIpO1xuICBjb21wdXRlci5zZXRQbGF5ZXJUeXBlKDEpO1xuICBjb21wdXRlci5zZXRQbGF5ZXJOYW1lKCdDb21wdXRlcicpO1xuXG4gIGNvbnN0IHBsYXllcnMgPSBbcGxheWVyMSwgY29tcHV0ZXJdO1xuXG4gIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoNSwgJ2NhcnJpZXInKTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCwgJ2JhdHRsZXNoaXAnKTtcbiAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcCgzLCAnZGVzdG9yeWVyJyk7XG4gICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoMywgJ3N1Ym1hcmluZScpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcCgyLCAncGF0cm9sQm9hdCcpO1xuICAgIGNvbnN0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0XTtcbiAgICBjb25zdCBvcmllbnRhdGlvbnMgPSBbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXTtcblxuICAgIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgICAgbGV0IGNvb3JkID0gW2dldFJhbmRJbnQoMTApLCBnZXRSYW5kSW50KDEwKV07XG4gICAgICBsZXQgb3JpZW50YXRpb24gPSBvcmllbnRhdGlvbnNbZ2V0UmFuZEludCgyKV07XG4gICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChwbGFjZWQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikgIT09IGZhbHNlKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29vcmQgPSBbZ2V0UmFuZEludCgxMCksIGdldFJhbmRJbnQoMTApXTtcbiAgICAgICAgICBvcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uc1tnZXRSYW5kSW50KDIpXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIERPTS5zaG93UGxheWVyU2hpcHMocGxheWVyMS5ib2FyZClcblxuICBmdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgIERPTS5yZW1vdmVBbGxBdHRhY2tIYW5kbGVycygpO1xuICAgIERPTS5hbm5vdW5jZVdpbm5lcih3aW5uZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgcGxheWVyMS5zZW5kQXR0YWNrKGNvbXB1dGVyLmJvYXJkLCBjb29yZGluYXRlcyk7XG4gICAgRE9NLnJlbW92ZUF0dGFja0hhbmRsZXIoY29vcmRpbmF0ZXMpO1xuXG4gICAgRE9NLnVwZGF0ZU9wcG9uZW50Qm9hcmQoY29tcHV0ZXIuYm9hcmQuYm9hcmQpO1xuICAgIGlmIChjb21wdXRlci5ib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgZW5kR2FtZShwbGF5ZXIxLm5hbWUpO1xuICAgIH1cblxuICAgIGNvbXB1dGVyLnNlbmRBdHRhY2socGxheWVyMS5ib2FyZCk7XG4gICAgRE9NLnVwZGF0ZVBsYXllckJvYXJkKHBsYXllcjEuYm9hcmQuYm9hcmQpO1xuICAgIGlmIChwbGF5ZXIxLmJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICBlbmRHYW1lKGNvbXB1dGVyLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVTaGlwKG1vdmVEYXRhKSB7XG4gICAgY29uc3QgY29vcmQgPSBtb3ZlRGF0YS5tb3ZlQ29vcmQ7XG4gICAgY29uc3Qgc2hpcCA9IHBsYXllcjEuYm9hcmQuYm9hcmRbbW92ZURhdGEuc2hpcENvb3JkWzBdXVttb3ZlRGF0YS5zaGlwQ29vcmRbMV1dO1xuICAgIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IG1vdmVEYXRhO1xuXG4gICAgaWYgKHBsYXllcjEuYm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikgIT09IGZhbHNlKSB7XG4gICAgICBwbGF5ZXIxLmJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pO1xuICAgICAgRE9NLnNob3dQbGF5ZXJTaGlwcyhwbGF5ZXIxLmJvYXJkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByb3RhdGVTaGlwKHJvdGF0ZURhdGEpIHtcbiAgICBjb25zdCBzaGlwID0gcGxheWVyMS5ib2FyZC5ib2FyZFtyb3RhdGVEYXRhLnNoaXBDb29yZFswXV1bcm90YXRlRGF0YS5zaGlwQ29vcmRbMV1dO1xuXG4gICAgaWYgKHBsYXllcjEuYm9hcmQucm90YXRlU2hpcChzaGlwKSAhPT0gZmFsc2UpIHtcbiAgICAgIERPTS5zaG93UGxheWVyU2hpcHMocGxheWVyMS5ib2FyZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIHB1YlN1Yi5zdWJzY3JpYmUoJ2F0dGFjaycsIHBsYXllckF0dGFjayk7XG4gICAgRE9NLmF0dGFja0hhbmRsZXJzKCk7XG4gIH1cblxuICBwdWJTdWIuc3Vic2NyaWJlKCdtb3ZlJywgbW92ZVNoaXApO1xuICBwdWJTdWIuc3Vic2NyaWJlKCdyb3RhdGUnLCByb3RhdGVTaGlwKTtcbiAgcHViU3ViLnN1YnNjcmliZSgnc3RhcnRHYW1lJywgc3RhcnRHYW1lKTtcblxuICBET00uc3RhcnRCdXR0b25IYW5kbGVyKCk7XG59XG5cbm5ld0dhbWUoKTtcbkRPTS5uZXdHYW1lSGFuZGxlcigpO1xuXG5wdWJTdWIuc3Vic2NyaWJlKCduZXdHYW1lJywgbmV3R2FtZSk7XG5cblxuLypcblxubmV3R2FtZSgpe1xuICBnZW5lcmF0ZVBsYXllcnMoKTtcbiAgaW5pdGlhbGl6ZUdhbWUocGxheWVycyk7XG59XG5cblxuXG5cbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
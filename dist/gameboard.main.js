/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUEsa0JBQWtCLFlBQVk7QUFDOUI7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUIsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDL0VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUM2Qzs7QUFFOUI7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCLHlEQUFPO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QyxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi91dGlscy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXkyZCh3aWR0aCwgbGVuZ3RoKSB7XG4gIGNvbnN0IGFyciA9IG5ldyBBcnJheSgyKTtcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSsrKSB7XG4gICAgYXJyW3ldID0gbmV3IEFycmF5KDIpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgYXJyW3ldW3hdID0gJyc7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGFja2VkQ29vcmRpbmF0ZXMoYm9hcmQpIHtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXTtcbiAgY29uc3QgZ2FtZUJvYXJkID0gYm9hcmQuYm9hcmQ7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCAxMDsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCAxMDsgeCsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gZ2FtZUJvYXJkW3ldW3hdO1xuICAgICAgaWYgKGN1cnJlbnQgPT09ICdoaXQnIHx8IGN1cnJlbnQgPT09ICdtaXNzJykge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt5LCB4XSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbHMoYSwgYikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhKSAmJlxuICAgICAgQXJyYXkuaXNBcnJheShiKSAmJlxuICAgICAgYS5sZW5ndGggPT09IGIubGVuZ3RoICYmXG4gICAgICBhLmV2ZXJ5KCh2YWwsIGluZGV4KSA9PiB2YWwgPT09IGJbaW5kZXhdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZShhcnJheTEsIGFycmF5Mikge1xuICBsZXQgY29tcGFyZTEgPSBudWxsO1xuICBsZXQgY29tcGFyZTIgPSBudWxsO1xuICBjb25zdCByZXR1cm5BcnJheSA9IFtdO1xuXG4gIGlmIChhcnJheTEubGVuZ3RoID49IGFycmF5Mikge1xuICAgIGNvbXBhcmUxID0gYXJyYXkxO1xuICAgIGNvbXBhcmUyID0gYXJyYXkyO1xuICB9IGVsc2Uge1xuICAgIGNvbXBhcmUxID0gYXJyYXkyO1xuICAgIGNvbXBhcmUyID0gYXJyYXkxO1xuICB9XG5cbiAgZm9yIChjb25zdCBpdGVtMSBvZiBjb21wYXJlMSkge1xuICAgIGxldCBtYXRjaGVzID0gMDtcbiAgICBmb3IgKGNvbnN0IGl0ZW0yIG9mIGNvbXBhcmUyKSB7XG4gICAgICBhcnJheUVxdWFscyhpdGVtMSwgaXRlbTIpID8gbWF0Y2hlcyArPSAxIDogbnVsbDtcbiAgICB9XG4gICAgbWF0Y2hlcyA9PT0gMCA/IHJldHVybkFycmF5LnB1c2goaXRlbTEpIDogbnVsbDtcbiAgfVxuXG4gIHJldHVybiByZXR1cm5BcnJheTtcbn1cblxuXG4vKlxuY29uc3QgYXJyID0gYXJyYXkyZCgxMCwgMTApO1xuXG5hcnJbMF1bMF0gPSAnTyc7XG5hcnJbMV1bMF0gPSAnTyc7XG5hcnJbMl1bMF0gPSAnTyc7XG5hcnJbM11bMF0gPSAnTyc7XG5hcnJbNF1bMF0gPSAnTyc7XG5cbmNvbnNvbGUudGFibGUoYXJyKVxuY29uc29sZS5sb2coYXJyKVxuKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IGFycmF5MmQgfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkU2l6ZSA9IDEwO1xuICAgIHRoaXMuYm9hcmQgPSBhcnJheTJkKHRoaXMuYm9hcmRTaXplLCB0aGlzLmJvYXJkU2l6ZSk7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG5cbiAgI2NvdW50QmxhbmtTcGFjZXMoY29vcmQsIG51bVNwYWNlcywgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCB4ID0gY29vcmRbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkWzBdO1xuICAgIGxldCBibGFua1NwYWNlcyA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVNwYWNlczsgaSsrKSB7XG4gICAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgaWYgKHkgKyBpIDwgdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3kgKyBpXVt4XSA9PT0gJycgPyBibGFua1NwYWNlcyArPSAxIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgaWYgKHggKyBpIDwgdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW3ldW3ggKyBpXSA9PT0gJycgPyBibGFua1NwYWNlcyArPSAxIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmxhbmtTcGFjZXM7XG4gIH1cblxuICBnZXRDdXJyZW50Q29vcmQoc2hpcCkge1xuICAgIGxldCBzaGlwRm91bmQgPSBmYWxzZTtcbiAgICBsZXQgY3VyckNvb3JkID0gbnVsbDtcbiAgICB3aGlsZSAoc2hpcEZvdW5kID09PSBmYWxzZSkge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib2FyZFNpemU7IHgrKykge1xuICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3ldW3hdID09PSBzaGlwKSB7XG4gICAgICAgICAgICBjdXJyQ29vcmQgPSBbeSwgeF07XG4gICAgICAgICAgICBzaGlwRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGlwRm91bmQgPT09IHRydWUpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3VyckNvb3JkO1xuICB9XG5cbiAgZ2V0T3JpZW50YXRpb24oc2hpcCkge1xuICAgIGNvbnN0IGN1cnJDb29yZCA9IHRoaXMuZ2V0Q3VycmVudENvb3JkKHNoaXApO1xuICAgIGNvbnN0IHggPSBjdXJyQ29vcmRbMV07XG4gICAgY29uc3QgeSA9IGN1cnJDb29yZFswXTtcbiAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuXG4gICAgaWYgKHkgKyAxIDwgdGhpcy5ib2FyZFNpemUgJiYgdGhpcy5ib2FyZFt5ICsgMV1beF0gPT09IHNoaXApIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICB9IGVsc2UgaWYgKHggKyAxIDwgdGhpcy5ib2FyZFNpemUgJiYgdGhpcy5ib2FyZFt5XVt4ICsgMV0gPT09IHNoaXApIHtcbiAgICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZW50YXRpb247XG4gIH1cblxuICAjaXNQbGFjZW1lbnRWYWxpZChzaGlwLCBjb29yZCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCB4ID0gY29vcmRbMV07XG4gICAgY29uc3QgeSA9IGNvb3JkWzBdO1xuICAgIGxldCBpc1ZhbGlkID0gZmFsc2U7XG4gICAgbGV0IGJsYW5rU3BhY2VzID0gMDtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJyAmJiB5ICsgc2hpcC5sZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgIGJsYW5rU3BhY2VzID0gdGhpcy4jY291bnRCbGFua1NwYWNlcyhjb29yZCwgc2hpcC5sZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJyAmJiB4ICsgc2hpcC5sZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpIHtcbiAgICAgIGJsYW5rU3BhY2VzID0gdGhpcy4jY291bnRCbGFua1NwYWNlcyhjb29yZCwgc2hpcC5sZW5ndGgsIG9yaWVudGF0aW9uKTtcbiAgICB9XG4gICAgaWYgKGJsYW5rU3BhY2VzID09IHNoaXAubGVuZ3RoKSB7XG4gICAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICAjcmVtb3ZlU2hpcChzaGlwKSB7XG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkU2l6ZTsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuYm9hcmRTaXplOyB4KyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFt5XVt4XSA9PT0gc2hpcCA/IHRoaXMuYm9hcmRbeV1beF0gPSAnJyA6IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHNoaXBJbmQgPSB0aGlzLnNoaXBzLmluZGV4T2Yoc2hpcCk7XG4gICAgc2hpcEluZCA+IC0xID8gdGhpcy5zaGlwcy5zcGxpY2Uoc2hpcEluZCwgMSkgOiBudWxsO1xuICB9XG5cbiAgcGxhY2VTaGlwKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1sxXTtcbiAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgY29uc3QgcGxhY2VtZW50VmFsaWQgPSB0aGlzLiNpc1BsYWNlbWVudFZhbGlkKHNoaXAsIGNvb3JkaW5hdGVzLCBvcmllbnRhdGlvbik7XG4gICAgaWYgKHBsYWNlbWVudFZhbGlkKSB7XG4gICAgICB0aGlzLiNyZW1vdmVTaGlwKHNoaXApOyAvLyBpZiBzaGlwIHdhcyBwcmV2aW91c2x5IHBsYWNlZFxuICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbeSArIGldW3hdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFt5XVt4ICsgaV0gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwbGFjZW1lbnRWYWxpZDtcbiAgICB9XG4gIH1cblxuICByb3RhdGVTaGlwKHNoaXApIHtcbiAgICBjb25zdCBjdXJyQ29vcmQgPSB0aGlzLmdldEN1cnJlbnRDb29yZChzaGlwKTtcbiAgICBjb25zdCB4ID0gY3VyckNvb3JkWzFdO1xuICAgIGNvbnN0IHkgPSBjdXJyQ29vcmRbMF07XG4gICAgbGV0IG5ld0RpcnIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuYm9hcmRbeSArIDFdW3hdID09PSBzaGlwKSB7XG4gICAgICBuZXdEaXJyID0gJ2hvcml6b250YWwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib2FyZFt5XVt4ICsgMV0gPT09IHNoaXApIHtcbiAgICAgIG5ld0RpcnIgPSAndmVydGljYWwnO1xuICAgIH1cblxuICAgIGNvbnN0IGZyZWVTcGFjZXMgPSB0aGlzLiNjb3VudEJsYW5rU3BhY2VzKGN1cnJDb29yZCwgc2hpcC5sZW5ndGgsIG5ld0RpcnIpO1xuICAgIGlmIChmcmVlU3BhY2VzID09IHNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy4jcmVtb3ZlU2hpcChzaGlwKTtcbiAgICAgIHRoaXMucGxhY2VTaGlwKHNoaXAsIGN1cnJDb29yZCwgbmV3RGlycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzFdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgICBpZiAodGhpcy5ib2FyZFt5XVt4XS5jb25zdHJ1Y3Rvci5uYW1lID09ICdTaGlwJykge1xuICAgICAgdGhpcy5ib2FyZFt5XVt4XS5oaXQoKTtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnaGl0JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYm9hcmRbeV1beF0gPT0gJycpIHtcbiAgICAgIHRoaXMuYm9hcmRbeV1beF0gPSAnbWlzcyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvYXJkW3ldW3hdID09ICdoaXQnIHx8IHRoaXMuYm9hcmRbeV1beF0gPT0gJ21pc3MnKSB7XG4gICAgICByZXR1cm4gJ0F0dGFjayBJbnZhbGlkJztcbiAgICB9XG4gIH1cblxuICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgbGV0IHNoaXBzU3VuayA9IDA7XG4gICAgZm9yIChjb25zdCBzaGlwIG9mIHRoaXMuc2hpcHMpIHtcbiAgICAgIHNoaXAuc3VuayA/IHNoaXBzU3VuayArPSAxIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBzU3VuayA9PSB0aGlzLnNoaXBzLmxlbmd0aDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
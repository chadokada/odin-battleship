/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announceWinner": () => (/* binding */ announceWinner),
/* harmony export */   "attackHandlers": () => (/* binding */ attackHandlers),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "renderPlayerShip": () => (/* binding */ renderPlayerShip),
/* harmony export */   "shipDragHandlers": () => (/* binding */ shipDragHandlers),
/* harmony export */   "shipDropHandlers": () => (/* binding */ shipDropHandlers),
/* harmony export */   "startButtonHandler": () => (/* binding */ startButtonHandler),
/* harmony export */   "stopAttackHandlers": () => (/* binding */ stopAttackHandlers),
/* harmony export */   "stopButtonHandler": () => (/* binding */ stopButtonHandler),
/* harmony export */   "updateOpponentBoard": () => (/* binding */ updateOpponentBoard),
/* harmony export */   "updatePlayerBoard": () => (/* binding */ updatePlayerBoard)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
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
// DOM methods to handle ship drag and drops
//

function dragStart(e) {
  e.dataTransfer.setData('div', e.target.id);
}

function shipDragHandlers() {
  const playerBoard = document.querySelector('#gameboard-player');
  const ships = playerBoard.querySelectorAll('.ship');

  for (const ship of ships) {
    ship.addEventListener('dragstart', dragStart);
  }
}


function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
}

function moveShip(e) {
  const coordinates = [
    e.target.getAttribute('y'),
    e.target.getAttribute('x'),
  ];

  const shipID = e.dataTransfer.getData('div');
  const shipBox = document.getElementById(shipID);
  const orientation = shipBox.getAttribute('orientation');

  _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish(
    'move',
    {
      coordinates,
      orientation,
    },
  );
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

//
// Game flow handlers
//

function stopAttackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.removeEventListener('click', publishAttack);
  }
}

function announceWinner(winner) {
  const header = document.querySelector('.header');
  header.textContent = `${winner} wins!`;
}

function startButtonHandler() {
  const startButton = document.querySelector('.start-game');
  startButton.addEventListener('click', () => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('startGame', 'off to the races');
  });
}

//
// Delete later *****************************
//
//remove
function stopButtonHandler() {
  const startButton = document.querySelector('.stop-game');
  startButton.addEventListener('click', () => {
    _pubsub__WEBPACK_IMPORTED_MODULE_0__["default"].publish('endGame', 'off to the races');
  });
}

/*
// deprecatedd
export function showPlayerShips(playerBoard) {
  const {ships} = playerBoard;

  for (const ship of ships) {
    const coordinates = ship.position;
    for (const coord of coordinates) {
      const x = coord[1];
      const y = coord[0];
      const cellContent = document.querySelector(
        `[y="${y}"][x="${x}"][player="player"]`
      );

      const shipSquare = document.createElement('div');
      shipSquare.className = 'ship';
      cellContent.appendChild(shipSquare)
    }
  }
}
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHB1YlN1YiA9IHtcbiAgc3Vic2NyaWJlcnM6IHt9LFxuICBwdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgfSk7XG4gIH0sXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkpIHtcbiAgICAgIHRoaXMuc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHB1YlN1YiBmcm9tICcuL3B1YnN1Yic7XG5cbi8vXG4vLyBET00gbWV0aG9kcyB0byByZW5kZXIgZ2FtZWJvYXJkIGFuZCBzaGlwc1xuLy9cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRhYmxlUm93LCB0ZXh0KSB7XG4gIGNvbnN0IGJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBib2FyZEhlYWRlci5jbGFzc05hbWUgPSAnY29sLWhlYWRlcic7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkSGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDZWxsKHRhYmxlUm93LCByb3csIGNvbCwgcGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGJvYXJkQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbCc7XG5cbiAgY29uc3QgY2VsbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VsbENvbnRlbnQuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwtY29udGVudCc7XG4gIGNlbGxDb250ZW50LnNldEF0dHJpYnV0ZSgneScsIHJvdyAtIDEpO1xuICBjZWxsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3gnLCBjb2wgLSAxKTtcbiAgY2VsbENvbnRlbnQuc2V0QXR0cmlidXRlKCdwbGF5ZXInLCBwbGF5ZXIpO1xuICBib2FyZENlbGwuYXBwZW5kQ2hpbGQoY2VsbENvbnRlbnQpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZ2FtZWJvYXJkLSR7cGxheWVyfWApO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDExOyByb3crKykge1xuICAgIGNvbnN0IGJvYXJkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMTsgY29sKyspIHtcbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoYm9hcmRSb3csIGNvbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA9PT0gMCkge1xuICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBib2FyZFJvdy5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgcm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY3JlYXRlQm9hcmRDZWxsKGJvYXJkUm93LCByb3csIGNvbCwgcGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGJvYXJkUm93KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUGxheWVyU2hpcChpZCwgc2hpcCwgY29vcmQsIG9yaWVudGF0aW9uKSB7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgY29uc3QgW3gsIHldID0gW2Nvb3JkWzFdLCBjb29yZFswXV07XG4gIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW3k9XCIke3l9XCJdW3g9XCIke3h9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgKTtcbiAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaGlwU3F1YXJlLmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgc2hpcFNxdWFyZS5pZCA9IGlkO1xuICBzaGlwU3F1YXJlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJywgb3JpZW50YXRpb24pO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgc2hpcFNxdWFyZS5zdHlsZS5oZWlnaHQgPSAnMmVtJztcbiAgICBzaGlwU3F1YXJlLnN0eWxlLndpZHRoID0gYCR7MiAqIHNoaXBMZW5ndGh9ZW1gO1xuICB9XG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIHNoaXBTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gYCR7MiAqIHNoaXBMZW5ndGh9ZW1gO1xuICAgIHNoaXBTcXVhcmUuc3R5bGUud2lkdGggPSAnMmVtJztcbiAgfVxuICBjZWxsQ29udGVudC5hcHBlbmRDaGlsZChzaGlwU3F1YXJlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKHBsYXllckJvYXJkKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gcGxheWVyQm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICAgICApO1xuICAgICAgaWYgKGN1cnJDb29yZCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIG1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlT3Bwb25lbnRCb2FyZChvcHBvbmVudEJvYXJkKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gb3Bwb25lbnRCb2FyZFtyb3ddW2NvbF07XG4gICAgICBjb25zdCBjdXJyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cIm9wcG9uZW50XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKGN1cnJDb29yZCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBoaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIG1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL1xuLy8gRE9NIG1ldGhvZHMgdG8gaGFuZGxlIHVzZXIgYXR0YWNrc1xuLy9cblxuZnVuY3Rpb24gcHVibGlzaEF0dGFjayhldmVudCkge1xuICBjb25zdCB5ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpO1xuICBjb25zdCB4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpO1xuICBwdWJTdWIucHVibGlzaCgnYXR0YWNrJywgW3ksIHhdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dGFja0hhbmRsZXJzKCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1vcHBvbmVudCcpO1xuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHVibGlzaEF0dGFjayk7XG4gIH1cbn1cblxuLy9cbi8vIERPTSBtZXRob2RzIHRvIGhhbmRsZSBzaGlwIGRyYWcgYW5kIGRyb3BzXG4vL1xuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdkaXYnLCBlLnRhcmdldC5pZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwRHJhZ0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBtb3ZlU2hpcChlKSB7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gW1xuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneScpLFxuICAgIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpLFxuICBdO1xuXG4gIGNvbnN0IHNoaXBJRCA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2RpdicpO1xuICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2hpcElEKTtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwQm94LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcblxuICBwdWJTdWIucHVibGlzaChcbiAgICAnbW92ZScsXG4gICAge1xuICAgICAgY29vcmRpbmF0ZXMsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICB9LFxuICApO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwRHJvcEhhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IGNlbGxzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwtY29udGVudCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ092ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIG1vdmVTaGlwKTtcbiAgfVxufVxuXG4vL1xuLy8gR2FtZSBmbG93IGhhbmRsZXJzXG4vL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEF0dGFja0hhbmRsZXJzKCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1vcHBvbmVudCcpO1xuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHVibGlzaEF0dGFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFubm91bmNlV2lubmVyKHdpbm5lcikge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd2lucyFgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRCdXR0b25IYW5kbGVyKCkge1xuICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1nYW1lJyk7XG4gIHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHB1YlN1Yi5wdWJsaXNoKCdzdGFydEdhbWUnLCAnb2ZmIHRvIHRoZSByYWNlcycpO1xuICB9KTtcbn1cblxuLy9cbi8vIERlbGV0ZSBsYXRlciAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy9cbi8vcmVtb3ZlXG5leHBvcnQgZnVuY3Rpb24gc3RvcEJ1dHRvbkhhbmRsZXIoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0b3AtZ2FtZScpO1xuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwdWJTdWIucHVibGlzaCgnZW5kR2FtZScsICdvZmYgdG8gdGhlIHJhY2VzJyk7XG4gIH0pO1xufVxuXG4vKlxuLy8gZGVwcmVjYXRlZGRcbmV4cG9ydCBmdW5jdGlvbiBzaG93UGxheWVyU2hpcHMocGxheWVyQm9hcmQpIHtcbiAgY29uc3Qge3NoaXBzfSA9IHBsYXllckJvYXJkO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gc2hpcC5wb3NpdGlvbjtcbiAgICBmb3IgKGNvbnN0IGNvb3JkIG9mIGNvb3JkaW5hdGVzKSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRbMV07XG4gICAgICBjb25zdCB5ID0gY29vcmRbMF07XG4gICAgICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7eX1cIl1beD1cIiR7eH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcCc7XG4gICAgICBjZWxsQ29udGVudC5hcHBlbmRDaGlsZChzaGlwU3F1YXJlKVxuICAgIH1cbiAgfVxufVxuKi8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
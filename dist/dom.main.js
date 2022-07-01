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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxFQUFFLFFBQVEsRUFBRTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxlQUFlO0FBQy9DO0FBQ0E7QUFDQSxpQ0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRSxRQUFRLEVBQUU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwdWJTdWIgPSB7XG4gIHN1YnNjcmliZXJzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgcHViU3ViIGZyb20gJy4vcHVic3ViJztcblxuLy9cbi8vIEV2ZW50LWRyaXZlbiBmdW5jdGlvbnNcbi8vXG5cbmZ1bmN0aW9uIG5ld0dhbWUoKSB7XG4gIHB1YlN1Yi5wdWJsaXNoKCduZXdHYW1lJywgJ1N0YXJ0IG5ldyBnYW1lIScpXG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hBdHRhY2soZXZlbnQpIHtcbiAgY29uc3QgeSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKTtcbiAgY29uc3QgeCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3gnKTtcbiAgcHViU3ViLnB1Ymxpc2goJ2F0dGFjaycsIFt5LCB4XSk7XG59XG5cbmZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ2RpdicsIGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnc2hpcC1uYW1lJykpO1xufVxuXG5mdW5jdGlvbiBkcmFnRW50ZXIoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIGRyYWdPdmVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBtb3ZlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBOYW1lID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgnZGl2Jyk7XG4gIGNvbnN0IHNoaXBCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbc2hpcC1uYW1lPVwiJHtzaGlwTmFtZX1cIl1gKTtcblxuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoc2hpcEJveC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneScpKSxcbiAgICBwYXJzZUludChzaGlwQm94LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4JykpLFxuICBdO1xuICBjb25zdCBvcmllbnRhdGlvbiA9IHNoaXBCb3guZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGNvbnN0IG1vdmVDb29yZCA9IFtcbiAgICBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd4JykpLFxuICBdO1xuICBwdWJTdWIucHVibGlzaChcbiAgICAnbW92ZScsXG4gICAge1xuICAgICAgc2hpcE5hbWUsXG4gICAgICBzaGlwQ29vcmQsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICAgIG1vdmVDb29yZCxcbiAgICB9LFxuICApO1xufVxuXG5mdW5jdGlvbiByb3RhdGVTaGlwKGUpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScpO1xuXG4gIGNvbnN0IHNoaXBDb29yZCA9IFtcbiAgICBwYXJzZUludChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneScpKSxcbiAgICBwYXJzZUludChlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneCcpKVxuICBdO1xuICBsZXQgb3JpZW50YXRpb24gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJyk7XG5cbiAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBvcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gIH0gZWxzZSB7XG4gICAgb3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gIH1cbiAgcHViU3ViLnB1Ymxpc2goXG4gICAgJ3JvdGF0ZScsXG4gICAge1xuICAgICAgc2hpcE5hbWUsXG4gICAgICBzaGlwQ29vcmQsXG4gICAgICBvcmllbnRhdGlvbixcbiAgICB9LFxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3R2FtZUhhbmRsZXIoKSB7XG4gIGNvbnN0IG5ld0dhbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWdhbWUnKTtcbiAgbmV3R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwdWJTdWIucHVibGlzaCgnbmV3R2FtZScsICdTdGFydCBuZXcgZ2FtZSEnKVxuICAgIGNvbnNvbGUubG9nKCduZXdnYW1lJylcbiAgICAvL3B1YlN1Yi5wdWJsaXNoKCdzdGFydEdhbWUnLCAnb2ZmIHRvIHRoZSByYWNlcycpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QnV0dG9uSGFuZGxlcigpIHtcbiAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZ2FtZScpO1xuICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwdWJTdWIucHVibGlzaCgnc3RhcnRHYW1lJywgJ29mZiB0byB0aGUgcmFjZXMnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2tIYW5kbGVycygpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcbiAgY29uc3QgY2VsbHMgPSBvcHBvbmVudEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsJyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHB1Ymxpc2hBdHRhY2spO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwRHJhZ0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWdTdGFydCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBEcm9wSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3QgY2VsbHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbC1jb250ZW50Jyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgbW92ZVNoaXApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwQ2xpY2tIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBzaGlwcyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwJyk7XG5cbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgc2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wQXR0YWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLW9wcG9uZW50Jyk7XG4gIGNvbnN0IGNlbGxzID0gb3Bwb25lbnRCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbiAgfVxufVxuXG4vL1xuLy8gRE9NIG1ldGhvZHMgdG8gcmVuZGVyIGdhbWVib2FyZCBhbmQgc2hpcHNcbi8vXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIodGFibGVSb3csIHRleHQpIHtcbiAgY29uc3QgYm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICBib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJvYXJkSGVhZGVyLmNsYXNzTmFtZSA9ICdjb2wtaGVhZGVyJztcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoYm9hcmRIZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZENlbGwodGFibGVSb3csIHJvdywgY29sLCBwbGF5ZXIpIHtcbiAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgYm9hcmRDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsJztcblxuICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZWxsQ29udGVudC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1jb250ZW50JztcbiAgY2VsbENvbnRlbnQuc2V0QXR0cmlidXRlKCd5Jywgcm93IC0gMSk7XG4gIGNlbGxDb250ZW50LnNldEF0dHJpYnV0ZSgneCcsIGNvbCAtIDEpO1xuICBjZWxsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3BsYXllcicsIHBsYXllcik7XG4gIGJvYXJkQ2VsbC5hcHBlbmRDaGlsZChjZWxsQ29udGVudCk7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNnYW1lYm9hcmQtJHtwbGF5ZXJ9YCk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTE7IHJvdysrKSB7XG4gICAgY29uc3QgYm9hcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDExOyBjb2wrKykge1xuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgY29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCByb3cpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVCb2FyZENlbGwoYm9hcmRSb3csIHJvdywgY29sLCBwbGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyUGxheWVyQm9hcmQoKSB7XG4gIGZvciAobGV0IHkgPSAwOyB5IDwgMTA7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgY29uc3QgY2VsbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3l9XCJdW3g9XCIke3h9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICAgICk7XG4gICAgICBpZiAoY2VsbENvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQgIT0gbnVsbCkge1xuICAgICAgICBjZWxsQ29udGVudC5yZW1vdmVDaGlsZChjZWxsQ29udGVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UGxheWVyU2hpcHMoYm9hcmQpIHtcbiAgY2xlYXJQbGF5ZXJCb2FyZCgpO1xuICBjb25zdCB7IHNoaXBzIH0gPSBib2FyZDtcbiAgZm9yIChjb25zdCBzaGlwIG9mIHNoaXBzKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBzaGlwO1xuICAgIGNvbnN0IGNvb3JkID0gYm9hcmQuZ2V0Q3VycmVudENvb3JkKHNoaXApO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uID0gYm9hcmQuZ2V0T3JpZW50YXRpb24oc2hpcCk7XG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAubGVuZ3RoO1xuICAgIGNvbnN0IFt4LCB5XSA9IFtjb29yZFsxXSwgY29vcmRbMF1dO1xuICAgIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGBbeT1cIiR7eX1cIl1beD1cIiR7eH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICAgICk7XG4gICAgY29uc3Qgc2hpcFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNoaXBTcXVhcmUuY2xhc3NOYW1lID0gJ3NoaXAnO1xuICAgIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdzaGlwLW5hbWUnLCBuYW1lKTtcbiAgICBzaGlwU3F1YXJlLnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICBzaGlwU3F1YXJlLnNldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nLCBvcmllbnRhdGlvbik7XG5cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgc2hpcFNxdWFyZS5zdHlsZS5oZWlnaHQgPSAnMmVtJztcbiAgICAgIHNoaXBTcXVhcmUuc3R5bGUud2lkdGggPSBgJHsyICogc2hpcExlbmd0aH1lbWA7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgc2hpcFNxdWFyZS5zdHlsZS5oZWlnaHQgPSBgJHsyICogc2hpcExlbmd0aH1lbWA7XG4gICAgICBzaGlwU3F1YXJlLnN0eWxlLndpZHRoID0gJzJlbSc7XG4gICAgfVxuICAgIGNlbGxDb250ZW50LmFwcGVuZENoaWxkKHNoaXBTcXVhcmUpO1xuICB9XG5cbiAgc2hpcERyYWdIYW5kbGVycygpO1xuICBzaGlwQ2xpY2tIYW5kbGVycygpO1xuICBzaGlwRHJvcEhhbmRsZXJzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZChwbGF5ZXJCb2FyZCkge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZCA9IHBsYXllckJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IGN1cnJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt5PVwiJHtyb3d9XCJdW3g9XCIke2NvbH1cIl1bcGxheWVyPVwicGxheWVyXCJdYFxuICAgICAgKTtcbiAgICAgIGlmIChjdXJyQ29vcmQgPT09ICdoaXQnKSB7XG4gICAgICAgIGN1cnJDZWxsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgaGl0JztcbiAgICAgIH0gZWxzZSBpZiAoY3VyckNvb3JkID09PSAnbWlzcycpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBtaXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9wcG9uZW50Qm9hcmQob3Bwb25lbnRCb2FyZCkge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZCA9IG9wcG9uZW50Qm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJvcHBvbmVudFwiXWBcbiAgICAgICk7XG5cbiAgICAgIGlmIChjdXJyQ29vcmQgPT09ICdoaXQnKSB7XG4gICAgICAgIGN1cnJDZWxsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgaGl0JztcbiAgICAgIH0gZWxzZSBpZiAoY3VyckNvb3JkID09PSAnbWlzcycpIHtcbiAgICAgICAgY3VyckNlbGwucGFyZW50RWxlbWVudC5jbGFzc05hbWUgKz0gJyBtaXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLypcblxuLy9cbi8vIEV2ZW50LWRyaXZlbiBmdW5jdGlvbnNcbi8vXG5mdW5jdGlvbiBwdWJsaXNoQXR0YWNrKGV2ZW50KSB7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gIHB1YlN1Yi5wdWJsaXNoKCdhdHRhY2snLCBbeSwgeF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLW9wcG9uZW50Jyk7XG4gIGNvbnN0IGNlbGxzID0gb3Bwb25lbnRCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdkaXYnLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScpKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gbW92ZVNoaXAoZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2RpdicpO1xuICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3NoaXAtbmFtZT1cIiR7c2hpcE5hbWV9XCJdYCk7XG5cbiAgY29uc3Qgc2hpcENvb3JkID0gW1xuICAgIHBhcnNlSW50KHNoaXBCb3gucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoc2hpcEJveC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneCcpKSxcbiAgXTtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwQm94LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcblxuICBjb25zdCBtb3ZlQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpLFxuICAgIHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSxcbiAgXTtcbiAgcHViU3ViLnB1Ymxpc2goXG4gICAgJ21vdmUnLFxuICAgIHtcbiAgICAgIHNoaXBOYW1lLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBtb3ZlQ29vcmQsXG4gICAgfSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdzaGlwLW5hbWUnKTtcblxuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3gnKSlcbiAgXTtcbiAgbGV0IG9yaWVudGF0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2Uge1xuICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFxuICAgICdyb3RhdGUnLFxuICAgIHtcbiAgICAgIHNoaXBOYW1lLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBEcmFnSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3Qgc2hpcHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcERyb3BIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBjZWxscyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsLWNvbnRlbnQnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBtb3ZlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBDbGlja0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBdHRhY2tIYW5kbGVycygpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcbiAgY29uc3QgY2VsbHMgPSBvcHBvbmVudEJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsJyk7XG5cbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHB1Ymxpc2hBdHRhY2spO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJ1dHRvbkhhbmRsZXIoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHViU3ViLnB1Ymxpc2goJ3N0YXJ0R2FtZScsICdvZmYgdG8gdGhlIHJhY2VzJyk7XG4gIH0pO1xufVxuXG4qL1xuXG4vL1xuLy8gR2FtZSBmbG93XG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGFubm91bmNlV2lubmVyKHdpbm5lcikge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd2lucyFgO1xufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclBsYXllclNoaXAoaWQsIHNoaXAsIGNvb3JkLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5sZW5ndGg7XG4gIGNvbnN0IFt4LCB5XSA9IFtjb29yZFsxXSwgY29vcmRbMF1dO1xuICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICk7XG4gIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hpcFNxdWFyZS5jbGFzc05hbWUgPSAnc2hpcCc7XG4gIHNoaXBTcXVhcmUuaWQgPSBpZDtcbiAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gIHNoaXBTcXVhcmUuc2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicsIG9yaWVudGF0aW9uKTtcblxuICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIHNoaXBTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gJzJlbSc7XG4gICAgc2hpcFNxdWFyZS5zdHlsZS53aWR0aCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgfVxuICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICBzaGlwU3F1YXJlLnN0eWxlLmhlaWdodCA9IGAkezIgKiBzaGlwTGVuZ3RofWVtYDtcbiAgICBzaGlwU3F1YXJlLnN0eWxlLndpZHRoID0gJzJlbSc7XG4gIH1cbiAgY2VsbENvbnRlbnQuYXBwZW5kQ2hpbGQoc2hpcFNxdWFyZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQbGF5ZXJTaGlwKGNvb3JkKSB7XG4gIGNvbnN0IHggPSBjb29yZFsxXTtcbiAgY29uc3QgeSA9IGNvb3JkWzBdO1xuICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICk7XG4gIGNlbGxDb250ZW50LnJlbW92ZUNoaWxkKGNlbGxDb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbn1cbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
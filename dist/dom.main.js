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
  unsubscribe(eventName) {
    const { length } = this.subscribers[eventName];
    if (this.subscribers[eventName].length > 1) {
      pubSub.subscribers[eventName].splice(1, length);
    }
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
/* harmony export */   "clearHeader": () => (/* binding */ clearHeader),
/* harmony export */   "newGameHandler": () => (/* binding */ newGameHandler),
/* harmony export */   "removeAllAttackHandlers": () => (/* binding */ removeAllAttackHandlers),
/* harmony export */   "removeAttackHandler": () => (/* binding */ removeAttackHandler),
/* harmony export */   "renderGameboard": () => (/* binding */ renderGameboard),
/* harmony export */   "shipClickHandlers": () => (/* binding */ shipClickHandlers),
/* harmony export */   "shipDragHandlers": () => (/* binding */ shipDragHandlers),
/* harmony export */   "shipDropHandlers": () => (/* binding */ shipDropHandlers),
/* harmony export */   "showPlayerShips": () => (/* binding */ showPlayerShips),
/* harmony export */   "startButtonHandler": () => (/* binding */ startButtonHandler),
/* harmony export */   "startOpponentBoard": () => (/* binding */ startOpponentBoard),
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

  if (player === 'opponent') {
    boardCell.className = 'board-cell-not-started';
  } else {
    boardCell.className = 'board-cell';
  }

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

function startOpponentBoard() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const opponentCells = opponentBoard.querySelectorAll('.board-cell-not-started');
  for (const cell of opponentCells) {
    cell.className = 'board-cell';
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

//
// Game flow
//
function announceWinner(winner) {
  const header = document.querySelector('.header');

  const announcementContainer = document.createElement('div');
  announcementContainer.className = 'announcement-container';

  const gameWinner = document.createElement('div');
  gameWinner.className = 'game-winner';
  gameWinner.textContent = `${winner} wins!`;

  const newLine = document.createElement('div');
  newLine.className = 'newline';

  const newGameBtn = document.createElement('button');
  newGameBtn.className = 'new-game';
  newGameBtn.textContent = 'New Game';

  [gameWinner, newLine, newGameBtn].forEach(
    div => announcementContainer.appendChild(div)
  );
  header.appendChild(announcementContainer);
  newGameHandler();
}

function clearHeader() {
  const header = document.querySelector('.header');

  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxRQUFRLEVBQUU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsZUFBZTtBQUNqRDtBQUNBO0FBQ0EsbUNBQW1DLGVBQWU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IsVUFBVTtBQUM5QixzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsZUFBZSxJQUFJLFFBQVEsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9CQUFvQixVQUFVO0FBQzlCLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLElBQUksUUFBUSxJQUFJO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixRQUFROztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwdWJTdWIgPSB7XG4gIHN1YnNjcmliZXJzOiB7fSxcbiAgcHVibGlzaChldmVudE5hbWUsIGRhdGEpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0pO1xuICB9LFxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0pKSB7XG4gICAgICB0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICB9LFxuICB1bnN1YnNjcmliZShldmVudE5hbWUpIHtcbiAgICBjb25zdCB7IGxlbmd0aCB9ID0gdGhpcy5zdWJzY3JpYmVyc1tldmVudE5hbWVdO1xuICAgIGlmICh0aGlzLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0ubGVuZ3RoID4gMSkge1xuICAgICAgcHViU3ViLnN1YnNjcmliZXJzW2V2ZW50TmFtZV0uc3BsaWNlKDEsIGxlbmd0aCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgcHViU3ViIGZyb20gJy4vcHVic3ViJztcblxuLy9cbi8vIEV2ZW50LWRyaXZlbiBmdW5jdGlvbnNcbi8vXG5mdW5jdGlvbiBwdWJsaXNoQXR0YWNrKGV2ZW50KSB7XG4gIGNvbnN0IHkgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gIGNvbnN0IHggPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gIHB1YlN1Yi5wdWJsaXNoKCdhdHRhY2snLCBbeSwgeF0pO1xufVxuXG5mdW5jdGlvbiBkcmFnU3RhcnQoZSkge1xuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCdkaXYnLCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3NoaXAtbmFtZScpKTtcbn1cblxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gbW92ZVNoaXAoZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoJ2RpdicpO1xuICBjb25zdCBzaGlwQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW3NoaXAtbmFtZT1cIiR7c2hpcE5hbWV9XCJdYCk7XG5cbiAgY29uc3Qgc2hpcENvb3JkID0gW1xuICAgIHBhcnNlSW50KHNoaXBCb3gucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoc2hpcEJveC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgneCcpKSxcbiAgXTtcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBzaGlwQm94LmdldEF0dHJpYnV0ZSgnb3JpZW50YXRpb24nKTtcblxuICBjb25zdCBtb3ZlQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd5JykpLFxuICAgIHBhcnNlSW50KGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgneCcpKSxcbiAgXTtcbiAgcHViU3ViLnB1Ymxpc2goXG4gICAgJ21vdmUnLFxuICAgIHtcbiAgICAgIHNoaXBOYW1lLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgICBtb3ZlQ29vcmQsXG4gICAgfSxcbiAgKTtcbn1cblxuZnVuY3Rpb24gcm90YXRlU2hpcChlKSB7XG4gIGNvbnN0IHNoaXBOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdzaGlwLW5hbWUnKTtcblxuICBjb25zdCBzaGlwQ29vcmQgPSBbXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3knKSksXG4gICAgcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3gnKSlcbiAgXTtcbiAgbGV0IG9yaWVudGF0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdvcmllbnRhdGlvbicpO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgb3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICB9IGVsc2Uge1xuICAgIG9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICB9XG4gIHB1YlN1Yi5wdWJsaXNoKFxuICAgICdyb3RhdGUnLFxuICAgIHtcbiAgICAgIHNoaXBOYW1lLFxuICAgICAgc2hpcENvb3JkLFxuICAgICAgb3JpZW50YXRpb24sXG4gICAgfSxcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld0dhbWVIYW5kbGVyKCkge1xuICBjb25zdCBuZXdHYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1nYW1lJyk7XG4gIG5ld0dhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHViU3ViLnB1Ymxpc2goJ25ld0dhbWUnLCAnU3RhcnQgbmV3IGdhbWUhJylcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEJ1dHRvbkhhbmRsZXIoKSB7XG4gIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWdhbWUnKTtcbiAgc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHViU3ViLnB1Ymxpc2goJ3N0YXJ0R2FtZScsICdvZmYgdG8gdGhlIHJhY2VzJyk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNrSGFuZGxlcnMoKSB7XG4gIGNvbnN0IG9wcG9uZW50Qm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLW9wcG9uZW50Jyk7XG4gIGNvbnN0IGNlbGxzID0gb3Bwb25lbnRCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQtY2VsbCcpO1xuXG4gIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQXR0YWNrSGFuZGxlcihjb29yZGluYXRlcykge1xuICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgY29uc3QgYXR0YWNrQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJvcHBvbmVudFwiXWBcbiAgKS5wYXJlbnRFbGVtZW50O1xuXG4gIGF0dGFja0NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwdWJsaXNoQXR0YWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbEF0dGFja0hhbmRsZXJzKCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1vcHBvbmVudCcpO1xuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHVibGlzaEF0dGFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBEcmFnSGFuZGxlcnMoKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC1wbGF5ZXInKTtcbiAgY29uc3Qgc2hpcHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ1N0YXJ0KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcERyb3BIYW5kbGVycygpIHtcbiAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuICBjb25zdCBjZWxscyA9IHBsYXllckJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZC1jZWxsLWNvbnRlbnQnKTtcblxuICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlcik7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBtb3ZlU2hpcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBDbGlja0hhbmRsZXJzKCkge1xuICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtcGxheWVyJyk7XG4gIGNvbnN0IHNoaXBzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXAnKTtcblxuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHMpIHtcbiAgICBzaGlwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gIH1cbn1cblxuLy9cbi8vIERPTSBtZXRob2RzIHRvIHJlbmRlciBnYW1lYm9hcmQgYW5kIHNoaXBzXG4vL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRhYmxlUm93LCB0ZXh0KSB7XG4gIGNvbnN0IGJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBib2FyZEhlYWRlci5jbGFzc05hbWUgPSAnY29sLWhlYWRlcic7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkSGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDZWxsKHRhYmxlUm93LCByb3csIGNvbCwgcGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGJvYXJkQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbCc7XG5cbiAgaWYgKHBsYXllciA9PT0gJ29wcG9uZW50Jykge1xuICAgIGJvYXJkQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1ub3Qtc3RhcnRlZCc7XG4gIH0gZWxzZSB7XG4gICAgYm9hcmRDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsJztcbiAgfVxuXG4gIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbGxDb250ZW50LmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWNvbnRlbnQnO1xuICBjZWxsQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3knLCByb3cgLSAxKTtcbiAgY2VsbENvbnRlbnQuc2V0QXR0cmlidXRlKCd4JywgY29sIC0gMSk7XG4gIGNlbGxDb250ZW50LnNldEF0dHJpYnV0ZSgncGxheWVyJywgcGxheWVyKTtcbiAgYm9hcmRDZWxsLmFwcGVuZENoaWxkKGNlbGxDb250ZW50KTtcbiAgdGFibGVSb3cuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdhbWVib2FyZChwbGF5ZXIpIHtcbiAgY29uc3QgZ2FtZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2dhbWVib2FyZC0ke3BsYXllcn1gKTtcblxuICB3aGlsZSAoZ2FtZUJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICBnYW1lQm9hcmQucmVtb3ZlQ2hpbGQoZ2FtZUJvYXJkLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgcmVtb3ZlQWxsQXR0YWNrSGFuZGxlcnMoKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMTsgcm93KyspIHtcbiAgICBjb25zdCBib2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTE7IGNvbCsrKSB7XG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCBjb2wpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY29uc3QgYm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgYm9hcmRSb3cuYXBwZW5kQ2hpbGQoYm9hcmRDZWxsKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwICYmIGNvbCA9PT0gMCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoYm9hcmRSb3csIHJvdyk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUJvYXJkQ2VsbChib2FyZFJvdywgcm93LCBjb2wsIHBsYXllcik7XG4gICAgICB9XG4gICAgfVxuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChib2FyZFJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T3Bwb25lbnRCb2FyZCgpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcbiAgY29uc3Qgb3Bwb25lbnRDZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwtbm90LXN0YXJ0ZWQnKTtcbiAgZm9yIChjb25zdCBjZWxsIG9mIG9wcG9uZW50Q2VsbHMpIHtcbiAgICBjZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBsYXllckJvYXJkKCkge1xuICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDEwOyB4KyspIHtcbiAgICAgIGNvbnN0IGNlbGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt5PVwiJHt5fVwiXVt4PVwiJHt4fVwiXVtwbGF5ZXI9XCJwbGF5ZXJcIl1gXG4gICAgICApO1xuICAgICAgaWYgKGNlbGxDb250ZW50LmZpcnN0RWxlbWVudENoaWxkICE9IG51bGwpIHtcbiAgICAgICAgY2VsbENvbnRlbnQucmVtb3ZlQ2hpbGQoY2VsbENvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BsYXllclNoaXBzKGJvYXJkKSB7XG4gIGNsZWFyUGxheWVyQm9hcmQoKTtcbiAgY29uc3QgeyBzaGlwcyB9ID0gYm9hcmQ7XG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwcykge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gc2hpcDtcbiAgICBjb25zdCBjb29yZCA9IGJvYXJkLmdldEN1cnJlbnRDb29yZChzaGlwKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbiA9IGJvYXJkLmdldE9yaWVudGF0aW9uKHNoaXApO1xuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLmxlbmd0aDtcbiAgICBjb25zdCBbeCwgeV0gPSBbY29vcmRbMV0sIGNvb3JkWzBdXTtcbiAgICBjb25zdCBjZWxsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW3k9XCIke3l9XCJdW3g9XCIke3h9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICApO1xuICAgIGNvbnN0IHNoaXBTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaGlwU3F1YXJlLmNsYXNzTmFtZSA9ICdzaGlwJztcbiAgICBzaGlwU3F1YXJlLnNldEF0dHJpYnV0ZSgnc2hpcC1uYW1lJywgbmFtZSk7XG4gICAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICd0cnVlJyk7XG4gICAgc2hpcFNxdWFyZS5zZXRBdHRyaWJ1dGUoJ29yaWVudGF0aW9uJywgb3JpZW50YXRpb24pO1xuXG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIHNoaXBTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gJzJlbSc7XG4gICAgICBzaGlwU3F1YXJlLnN0eWxlLndpZHRoID0gYCR7MiAqIHNoaXBMZW5ndGh9ZW1gO1xuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIHNoaXBTcXVhcmUuc3R5bGUuaGVpZ2h0ID0gYCR7MiAqIHNoaXBMZW5ndGh9ZW1gO1xuICAgICAgc2hpcFNxdWFyZS5zdHlsZS53aWR0aCA9ICcyZW0nO1xuICAgIH1cbiAgICBjZWxsQ29udGVudC5hcHBlbmRDaGlsZChzaGlwU3F1YXJlKTtcbiAgfVxuXG4gIHNoaXBEcmFnSGFuZGxlcnMoKTtcbiAgc2hpcENsaWNrSGFuZGxlcnMoKTtcbiAgc2hpcERyb3BIYW5kbGVycygpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpIHtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29vcmQgPSBwbGF5ZXJCb2FyZFtyb3ddW2NvbF07XG4gICAgICBjb25zdCBjdXJyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICAgICk7XG4gICAgICBpZiAoY3VyckNvb3JkID09PSAnaGl0Jykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGhpdCc7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJDb29yZCA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGN1cnJDZWxsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgbWlzcyc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPcHBvbmVudEJvYXJkKG9wcG9uZW50Qm9hcmQpIHtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29vcmQgPSBvcHBvbmVudEJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IGN1cnJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt5PVwiJHtyb3d9XCJdW3g9XCIke2NvbH1cIl1bcGxheWVyPVwib3Bwb25lbnRcIl1gXG4gICAgICApO1xuXG4gICAgICBpZiAoY3VyckNvb3JkID09PSAnaGl0Jykge1xuICAgICAgICBjdXJyQ2VsbC5wYXJlbnRFbGVtZW50LmNsYXNzTmFtZSArPSAnIGhpdCc7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJDb29yZCA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGN1cnJDZWxsLnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lICs9ICcgbWlzcyc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vXG4vLyBHYW1lIGZsb3dcbi8vXG5leHBvcnQgZnVuY3Rpb24gYW5ub3VuY2VXaW5uZXIod2lubmVyKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcblxuICBjb25zdCBhbm5vdW5jZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYW5ub3VuY2VtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdhbm5vdW5jZW1lbnQtY29udGFpbmVyJztcblxuICBjb25zdCBnYW1lV2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGdhbWVXaW5uZXIuY2xhc3NOYW1lID0gJ2dhbWUtd2lubmVyJztcbiAgZ2FtZVdpbm5lci50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd2lucyFgO1xuXG4gIGNvbnN0IG5ld0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3TGluZS5jbGFzc05hbWUgPSAnbmV3bGluZSc7XG5cbiAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBuZXdHYW1lQnRuLmNsYXNzTmFtZSA9ICduZXctZ2FtZSc7XG4gIG5ld0dhbWVCdG4udGV4dENvbnRlbnQgPSAnTmV3IEdhbWUnO1xuXG4gIFtnYW1lV2lubmVyLCBuZXdMaW5lLCBuZXdHYW1lQnRuXS5mb3JFYWNoKFxuICAgIGRpdiA9PiBhbm5vdW5jZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KVxuICApO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYW5ub3VuY2VtZW50Q29udGFpbmVyKTtcbiAgbmV3R2FtZUhhbmRsZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFySGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5cbiAgd2hpbGUgKGhlYWRlci5maXJzdENoaWxkKSB7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKGhlYWRlci5maXJzdENoaWxkKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
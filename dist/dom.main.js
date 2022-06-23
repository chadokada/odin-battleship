/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHlEQUF5RCxPQUFPOztBQUVoRSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxvQkFBb0IsVUFBVTtBQUM5QixzQkFBc0IsVUFBVTtBQUNoQztBQUNBO0FBQ0EsZUFBZSxJQUFJLFFBQVEsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9CQUFvQixVQUFVO0FBQzlCLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLElBQUksUUFBUSxJQUFJO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHRhYmxlUm93LCB0ZXh0KSB7XG4gIGNvbnN0IGJvYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICBib2FyZEhlYWRlci5jbGFzc05hbWUgPSAnY29sLWhlYWRlcic7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkSGVhZGVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRDZWxsKHRhYmxlUm93LCByb3csIGNvbCwgcGxheWVyKSB7XG4gIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGJvYXJkQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1ibGFuayc7XG4gIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ3knLCByb3cgLSAxKTtcbiAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgneCcsIGNvbCAtIDEpO1xuICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCdwbGF5ZXInLCBwbGF5ZXIpO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyR2FtZWJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZ2FtZWJvYXJkLSR7cGxheWVyfWApO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDExOyByb3crKykge1xuICAgIGNvbnN0IGJvYXJkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMTsgY29sKyspIHtcbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVIZWFkZXIoYm9hcmRSb3csIGNvbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID09PSAwICYmIGNvbCA9PT0gMCkge1xuICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBib2FyZFJvdy5hcHBlbmRDaGlsZChib2FyZENlbGwpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgcm93KTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPiAwICYmIGNvbCA+IDApIHtcbiAgICAgICAgY3JlYXRlQm9hcmRDZWxsKGJvYXJkUm93LCByb3csIGNvbCwgcGxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGJvYXJkUm93KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQocGxheWVyQm9hcmQpIHtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29vcmQgPSBwbGF5ZXJCb2FyZFtyb3ddW2NvbF07XG4gICAgICBjb25zdCBjdXJyQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICAgICk7XG4gICAgICBpZiAoY3VyckNvb3JkLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdTaGlwJykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1zaGlwJztcbiAgICAgIH0gZWxzZSBpZiAoY3VyckNvb3JkID09PSAnaGl0Jykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1oaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1taXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU9wcG9uZW50Qm9hcmQob3Bwb25lbnRCb2FyZCkge1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgIGNvbnN0IGN1cnJDb29yZCA9IG9wcG9uZW50Qm9hcmRbcm93XVtjb2xdO1xuICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBgW3k9XCIke3Jvd31cIl1beD1cIiR7Y29sfVwiXVtwbGF5ZXI9XCJvcHBvbmVudFwiXWBcbiAgICAgICk7XG5cbiAgICAgIGlmIChjdXJyQ29vcmQgPT09ICdoaXQnKSB7XG4gICAgICAgIGN1cnJDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWhpdCc7XG4gICAgICB9IGVsc2UgaWYgKGN1cnJDb29yZCA9PT0gJ21pc3MnKSB7XG4gICAgICAgIGN1cnJDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLW1pc3MnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
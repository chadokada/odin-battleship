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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AseURBQXlELE9BQU87O0FBRWhFLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0Esc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUEsb0JBQW9CLFVBQVU7QUFDOUIsc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksUUFBUSxJQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixVQUFVO0FBQzlCLHNCQUFzQixVQUFVO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLElBQUksUUFBUSxJQUFJO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcih0YWJsZVJvdywgdGV4dCkge1xuICBjb25zdCBib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gIGJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYm9hcmRIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbC1oZWFkZXInO1xuICB0YWJsZVJvdy5hcHBlbmRDaGlsZChib2FyZEhlYWRlcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkQ2VsbCh0YWJsZVJvdywgcm93LCBjb2wsIHBsYXllcikge1xuICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmRDZWxsLmNsYXNzTmFtZSA9ICdib2FyZC1jZWxsLWJsYW5rJztcbiAgYm9hcmRDZWxsLnNldEF0dHJpYnV0ZSgneScsIHJvdyAtIDEpO1xuICBib2FyZENlbGwuc2V0QXR0cmlidXRlKCd4JywgY29sIC0gMSk7XG4gIGJvYXJkQ2VsbC5zZXRBdHRyaWJ1dGUoJ3BsYXllcicsIHBsYXllcik7XG4gIHRhYmxlUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHYW1lYm9hcmQocGxheWVyKSB7XG4gIGNvbnN0IGdhbWVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNnYW1lYm9hcmQtJHtwbGF5ZXJ9YCk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTE7IHJvdysrKSB7XG4gICAgY29uc3QgYm9hcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDExOyBjb2wrKykge1xuICAgICAgaWYgKHJvdyA9PT0gMCAmJiBjb2wgPiAwKSB7XG4gICAgICAgIGNyZWF0ZUhlYWRlcihib2FyZFJvdywgY29sKTtcbiAgICAgIH1cbiAgICAgIGlmIChyb3cgPT09IDAgJiYgY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgICBpZiAocm93ID4gMCAmJiBjb2wgPT09IDApIHtcbiAgICAgICAgY3JlYXRlSGVhZGVyKGJvYXJkUm93LCByb3cpO1xuICAgICAgfVxuICAgICAgaWYgKHJvdyA+IDAgJiYgY29sID4gMCkge1xuICAgICAgICBjcmVhdGVCb2FyZENlbGwoYm9hcmRSb3csIHJvdywgY29sLCBwbGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQoYm9hcmRSb3cpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UGxheWVyU2hpcHMocGxheWVyT2JqKSB7XG4gIGNvbnN0IHBsYXllckJvYXJkID0gcGxheWVyT2JqLmJvYXJkLmJvYXJkO1xuICAvLyBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDEwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc3QgY3VyckNvb3JkID0gcGxheWVyQm9hcmRbcm93XVtjb2xdO1xuICAgICAgaWYgKGN1cnJDb29yZC5jb25zdHJ1Y3Rvci5uYW1lID09PSAnU2hpcCcpIHtcbiAgICAgICAgY29uc3QgY3VyckNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbeT1cIiR7cm93fVwiXVt4PVwiJHtjb2x9XCJdW3BsYXllcj1cInBsYXllclwiXWBcbiAgICAgICAgKTtcbiAgICAgICAgY3VyckNlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwtc2hpcCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBsYXllckF0dGFjayhvcHBvbmVudCkge1xuICBjb25zdCBvcHBvbmVudEJvYXJkID0gb3Bwb25lbnQuYm9hcmQuYm9hcmQ7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdXJyQ29vcmQgPSBvcHBvbmVudEJvYXJkW3Jvd11bY29sXTtcbiAgICAgIGNvbnN0IGN1cnJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFt5PVwiJHtyb3d9XCJdW3g9XCIke2NvbH1cIl1bcGxheWVyPVwib3Bwb25lbnRcIl1gXG4gICAgICApO1xuXG4gICAgICBpZiAoY3VyckNvb3JkID09PSAnaGl0Jykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1oaXQnO1xuICAgICAgfSBlbHNlIGlmIChjdXJyQ29vcmQgPT09ICdtaXNzJykge1xuICAgICAgICBjdXJyQ2VsbC5jbGFzc05hbWUgPSAnYm9hcmQtY2VsbC1taXNzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxheWVyQXR0YWNrKG9wcG9uZW50LCBjb29yZGluYXRlcykge1xuICBvcHBvbmVudC5ib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgcmVuZGVyUGxheWVyQXR0YWNrKG9wcG9uZW50KTtcbn1cblxuLy8gcmVuYW1lIHRoaXMgYSBiZXR0ZXIgbmFtZVxuZXhwb3J0IGZ1bmN0aW9uIG9wcG9uZW50Qm9hcmRMaXN0ZW5lcnMob3Bwb25lbnQpIHtcbiAgY29uc3Qgb3Bwb25lbnRCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lYm9hcmQtb3Bwb25lbnQnKTtcblxuICBjb25zdCBjZWxscyA9IG9wcG9uZW50Qm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkLWNlbGwtYmxhbmsnKTtcbiAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgY29uc3QgeSA9IGNlbGwuZ2V0QXR0cmlidXRlKCd5Jyk7XG4gICAgY29uc3QgeCA9IGNlbGwuZ2V0QXR0cmlidXRlKCd4Jyk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYXllckF0dGFjayhvcHBvbmVudCwgW3ksIHhdKSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
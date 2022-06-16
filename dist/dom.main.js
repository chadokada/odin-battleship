/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/* eslint-disable no-plusplus */
console.log('thisis dom')

const playerBoard = document.querySelector('#gameboard-player');

/*
for (let y = 1; y < 11; y++) {
  for (let x = 0; x < 10; x++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.textContent = `${x}, ${y}`
    playerBoard.appendChild(square);
  }
}
*/

for (let row = 0; row < 11; row++) {
  const boardRow = document.createElement('tr');
  for (let col = 0; col < 11; col++) {
    if (row === 0) {
      if (col === 0) {
        const boardCell = document.createElement('td');
        boardRow.appendChild(boardCell);
      }
      if (col > 0) {
        const boardHeader = document.createElement('th');
        boardHeader.textContent = col;
        boardHeader.className = 'col-header';
        boardRow.appendChild(boardHeader);
      }
    }
    if (row > 0) {
      if (col === 0) {
        const boardHeader = document.createElement('th');
        boardHeader.textContent = row;
        boardHeader.className = 'col-header';
        boardRow.appendChild(boardHeader);
      }
      if (col > 0) {
        const boardCell = document.createElement('td');
        boardCell.className = 'board-cell-blank';
        const square = document.createElement('div');
        square.className = 'square';
        square.setAttribute('y', row - 1);
        square.setAttribute('x', col - 1);
        boardCell.appendChild(square);
        boardRow.appendChild(boardCell);
      }
    }
  }
  playerBoard.appendChild(boardRow);
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEIsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBLDRCQUE0QixFQUFFLElBQUksRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsVUFBVTtBQUM1QjtBQUNBLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmNvbnNvbGUubG9nKCd0aGlzaXMgZG9tJylcblxuY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLXBsYXllcicpO1xuXG4vKlxuZm9yIChsZXQgeSA9IDE7IHkgPCAxMTsgeSsrKSB7XG4gIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNxdWFyZS5jbGFzc05hbWUgPSAnc3F1YXJlJztcbiAgICBzcXVhcmUudGV4dENvbnRlbnQgPSBgJHt4fSwgJHt5fWBcbiAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICB9XG59XG4qL1xuXG5mb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMTsgcm93KyspIHtcbiAgY29uc3QgYm9hcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMTsgY29sKyspIHtcbiAgICBpZiAocm93ID09PSAwKSB7XG4gICAgICBpZiAoY29sID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICBjb25zdCBib2FyZEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgIGJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gY29sO1xuICAgICAgICBib2FyZEhlYWRlci5jbGFzc05hbWUgPSAnY29sLWhlYWRlcic7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkSGVhZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvdyA+IDApIHtcbiAgICAgIGlmIChjb2wgPT09IDApIHtcbiAgICAgICAgY29uc3QgYm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICBib2FyZEhlYWRlci50ZXh0Q29udGVudCA9IHJvdztcbiAgICAgICAgYm9hcmRIZWFkZXIuY2xhc3NOYW1lID0gJ2NvbC1oZWFkZXInO1xuICAgICAgICBib2FyZFJvdy5hcHBlbmRDaGlsZChib2FyZEhlYWRlcik7XG4gICAgICB9XG4gICAgICBpZiAoY29sID4gMCkge1xuICAgICAgICBjb25zdCBib2FyZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBib2FyZENlbGwuY2xhc3NOYW1lID0gJ2JvYXJkLWNlbGwtYmxhbmsnO1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmNsYXNzTmFtZSA9ICdzcXVhcmUnO1xuICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKCd5Jywgcm93IC0gMSk7XG4gICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoJ3gnLCBjb2wgLSAxKTtcbiAgICAgICAgYm9hcmRDZWxsLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgIGJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkQ2VsbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKGJvYXJkUm93KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
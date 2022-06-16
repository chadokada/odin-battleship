/* eslint-disable no-plusplus */
console.log('thisis dom')

const playerBoard = document.querySelector('#gameboard-player');

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

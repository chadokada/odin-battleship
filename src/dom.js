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
  /*
  square.className = 'square';
  square.setAttribute('y', row - 1);
  square.setAttribute('x', col - 1);
  boardCell.appendChild(square);
  */
  tableRow.appendChild(boardCell);
}

export function renderGameboard(player) {
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

export function showPlayerShips(playerObj) {
  const playerBoard = playerObj.board.board;
  const gameBoard = document.querySelector('#gameboard-player');

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

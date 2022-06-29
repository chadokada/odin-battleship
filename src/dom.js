/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import pubSub from './pubsub';

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

export function updatePlayerBoard(playerBoard) {
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

export function updateOpponentBoard(opponentBoard) {
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
  pubSub.publish('attack', [y, x]);
}

export function attackHandlers() {
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

export function shipDragHandlers() {
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

  pubSub.publish(
    'move',
    {
      coordinates,
      orientation,
    },
  );
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

//
// Game flow handlers
//

export function stopAttackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.removeEventListener('click', publishAttack);
  }
}

export function announceWinner(winner) {
  const header = document.querySelector('.header');
  header.textContent = `${winner} wins!`;
}

export function startButtonHandler() {
  const startButton = document.querySelector('.start-game');
  startButton.addEventListener('click', () => {
    pubSub.publish('startGame', 'off to the races');
  });
}

//
// Delete later *****************************
//
//remove
export function stopButtonHandler() {
  const startButton = document.querySelector('.stop-game');
  startButton.addEventListener('click', () => {
    pubSub.publish('endGame', 'off to the races');
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
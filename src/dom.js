/* eslint-disable radix */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import pubSub from './pubsub';

//
// Event-driven functions
//
function publishAttack(event) {
  const y = event.target.getAttribute('y');
  const x = event.target.getAttribute('x');
  pubSub.publish('attack', [y, x]);
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

export function newGameHandler() {
  const newGameButton = document.querySelector('.new-game');
  newGameButton.addEventListener('click', () => {
    pubSub.publish('newGame', 'Start new game!')
  });
}

export function startButtonHandler() {
  const startButton = document.querySelector('.start-game');
  startButton.addEventListener('click', () => {
    pubSub.publish('startGame', 'off to the races');
  });
}

export function attackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.addEventListener('click', publishAttack);
  }
}

export function removeAttackHandler(coordinates) {
  const x = coordinates[1];
  const y = coordinates[0];
  const attackCell = document.querySelector(
    `[y="${y}"][x="${x}"][player="opponent"]`
  ).parentElement;

  attackCell.removeEventListener('click', publishAttack);
}

export function removeAllAttackHandlers() {
  const opponentBoard = document.querySelector('#gameboard-opponent');
  const cells = opponentBoard.querySelectorAll('.board-cell');

  for (const cell of cells) {
    cell.removeEventListener('click', publishAttack);
  }
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

export function renderGameboard(player) {
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

export function startOpponentBoard() {
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

export function showPlayerShips(board) {
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
// Game flow
//
export function announceWinner(winner) {
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

export function clearHeader() {
  const header = document.querySelector('.header');

  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
}

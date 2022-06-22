/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
import './style.css';
import * as DOM from './dom';
import Player from './player';
import Ship from './ship';
import Gameboard from './gameboard';
import { getRandInt } from '../utils/utilities';

DOM.renderGameboard('player');
DOM.renderGameboard('opponent');

const board1 = new Gameboard();
const player1 = new Player(board1);
player1.setPlayerType(0);
player1.setPlayerName('Player 1');

const board2 = new Gameboard();
const computer = new Player(board2);
computer.setPlayerType(1);
computer.setPlayerName('Computer');

const players = [player1, computer];

for (const player of players) {
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolBoat = new Ship(2);

  const ships = [carrier, battleship, destroyer, submarine, patrolBoat];
  const orientations = ['vertical', 'horizontal'];

  for (const ship of ships) {
    let coord = [getRandInt(10), getRandInt(10)];
    let orientation = orientations[getRandInt(2)];
    let placed = false;

    while (placed === false) {
      if (player.board.placeShip(ship, coord, orientation) !== false) {
        player.board.placeShip(ship, coord, orientation);
        placed = true;
      } else {
        coord = [getRandInt(10), getRandInt(10)];
        orientation = orientations[getRandInt(2)];
      }
    }
  }
}

DOM.showPlayerShips(player1);

let gameOver = false;

let currentPlayer = 0;

/*
while (gameOver === false) {
  if (currentPlayer === 0) {
    document.addEventListener('click', (event) => {
      currentPlayer = 1;
    })
  } else {
    console.log('Currently playing: Computer')
    currentPlayer = 0;
  }
}
*/

/*
document.addEventListener('click', (event) => {
  console.log(event.target.className)
})
*/
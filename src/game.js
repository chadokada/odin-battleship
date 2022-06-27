/* eslint-disable no-loop-func */
/* eslint-disable no-restricted-syntax */
import './style.css';
import * as DOM from './dom';
import Player from './player';
import Ship from './ship';
import Gameboard from './gameboard';
import { getRandInt } from '../utils/utilities';
import pubSub from './pubsub';

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

DOM.updatePlayerBoard(player1.board.board);

function endGame(winner) {
  // Delete all attack listeners
  // Declare winner
  DOM.stopAttackHandlers();
  DOM.announceWinner(winner);
}

function playerAttack(coordinates) {
  player1.sendAttack(computer.board, coordinates);
  DOM.updateOpponentBoard(computer.board.board);
  if (computer.board.allShipsSunk()) {
    endGame(player1.name);
    //alert('Player has won!'); // This will be replaced with a function to formally end game
  }

  computer.sendAttack(player1.board);
  DOM.updatePlayerBoard(player1.board.board);
  if (player1.board.allShipsSunk()) {
    endGame(computer.name);
    //alert('Computer has won!'); // This will be replaced with a function to formally end game
  }
}

function startGame() {
  pubSub.subscribe('attack', playerAttack);
  DOM.attackHandlers();
}

DOM.startButtonHandler();
DOM.stopButtonHandler();

pubSub.subscribe('startGame', startGame);
pubSub.subscribe('endGame', endGame);
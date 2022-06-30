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
  let shipNum = 1;

  for (const ship of ships) {
    let coord = [getRandInt(10), getRandInt(10)];
    let orientation = orientations[getRandInt(2)];
    let placed = false;

    while (placed === false) {
      if (player.board.placeShip(ship, coord, orientation) !== false) {
        player.board.placeShip(ship, coord, orientation);
        if (player === player1) {
          const shipID = `ship_${shipNum}`;
          DOM.renderPlayerShip(shipID, ship, coord, orientation);
          shipNum += 1;
        }
        placed = true;
      } else {
        coord = [getRandInt(10), getRandInt(10)];
        orientation = orientations[getRandInt(2)];
      }
    }
  }
}
//console.table(player1.board.board)

/*
const carrier = new Ship(5);
player1.board.placeShip(carrier, [1, 0], 'horizontal');
DOM.renderPlayerShip('ship_1', carrier, [1, 0], 'horizontal');
*/

// DOM.showPlayerShips(player1.board);
DOM.updatePlayerBoard(player1.board.board);

function endGame(winner) {
  DOM.stopAttackHandlers();
  DOM.announceWinner(winner);
}

function playerAttack(coordinates) {
  player1.sendAttack(computer.board, coordinates);
  DOM.updateOpponentBoard(computer.board.board);
  if (computer.board.allShipsSunk()) {
    endGame(player1.name);
  }

  computer.sendAttack(player1.board);
  DOM.updatePlayerBoard(player1.board.board);
  if (player1.board.allShipsSunk()) {
    endGame(computer.name);
  }
}

function moveShip(moveData) {
  const coord = moveData.moveCoord;
  const ship = player1.board.board[moveData.shipCoord[0]][moveData.shipCoord[1]];
  const { orientation, shipID } = moveData;

  if (player1.board.placeShip(ship, coord, orientation) !== false) {
    player1.board.placeShip(ship, coord, orientation);
    DOM.renderPlayerShip(shipID, ship, coord, orientation);
    DOM.removePlayerShip(moveData.shipCoord);
    DOM.shipDragHandlers();
    DOM.shipClickHandlers();
  }
  
}

function rotateShip(rotateData) {
  const coord = rotateData.shipCoord;
  const ship = player1.board.board[rotateData.shipCoord[0]][rotateData.shipCoord[1]];
  const { orientation, shipID } = rotateData;

  if (player1.board.placeShip(ship, coord, orientation) !== false) {
    player1.board.placeShip(ship, coord, orientation);
    DOM.removePlayerShip(coord);
    DOM.renderPlayerShip(shipID, ship, coord, orientation);
    DOM.shipDragHandlers();
    DOM.shipClickHandlers();
  }
}

function startGame() {
  pubSub.subscribe('attack', playerAttack);
  DOM.attackHandlers();
}

pubSub.subscribe('move', moveShip);
pubSub.subscribe('rotate', rotateShip);
pubSub.subscribe('startGame', startGame);

DOM.startButtonHandler();
DOM.shipDragHandlers();
DOM.shipDropHandlers();
DOM.shipClickHandlers();

// pubSub.subscribe('endGame', endGame);
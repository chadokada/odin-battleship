import './style.css';
import * as DOM from './dom';
import Player from './player';
import Ship from './ship';
import Gameboard from './gameboard';
import { getRandInt } from '../utils/utilities';

DOM.renderGameboard('player')
DOM.renderGameboard('opponent')

const board1 = new Gameboard();
const player1 = new Player(board1);
player1.setPlayerType(0);
player1.setPlayerName('Player 1');

const destroyer = new Ship(3);

player1.board.placeShip(destroyer, [0, 0], 'vertical');

DOM.showPlayerShips(player1);

//const shit = player1.board.board[0][1];

//console.log(player1.board.board[1][0].constructor.name)
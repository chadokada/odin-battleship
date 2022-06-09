/* eslint-disable no-plusplus */
import array2d from '../utils/utilities';

export default class Gameboard {
  constructor() {
    this.board = array2d(10, 10);
  }

  placeShip(ship, coordinate, orientation) {
    const x = coordinate[1];
    const y = coordinate[0];
    if (orientation === 'vertical') {
      for (let i = 0; i < ship.length; i++) {
        this.board[y + i][x] = ship;
      }
    }

    if (orientation === 'horizontal') {
      for (let i = 0; i < ship.length; i++) {
        this.board[y][x + i] = ship;
      }
    }
  }
}
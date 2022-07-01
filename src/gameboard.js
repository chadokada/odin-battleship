/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
import { array2d } from '../utils/utilities';

export default class Gameboard {
  constructor() {
    this.boardSize = 10;
    this.board = array2d(this.boardSize, this.boardSize);
    this.ships = [];
  }

  #isPlacementValid(ship, coordinates, orientation) {
    const x = coordinates[1];
    const y = coordinates[0];
    let isValid = false;
    let blankSpaces = 0;
    if (orientation == 'vertical' && y + ship.length <= this.boardSize) {
      for (let i = y; i < ship.length + y; i++) {
        this.board[i][x] == '' ? blankSpaces += 1 : null;
      }
    } else if (orientation == 'horizontal' && x + ship.length <= this.boardSize) {
      for (let i = x; i < ship.length + x; i++) {
        this.board[y][i] == '' ? blankSpaces += 1 : null;
      }
    }
    if (blankSpaces == ship.length) {
      isValid = true;
    }

    return isValid;
  }

  #removeShip(ship) {
    for (let y = 0; y < this.boardSize; y++) {
      for (let x = 0; x < this.boardSize; x++) {
        this.board[y][x] === ship ? this.board[y][x] = '' : null;
      }
    }
    const shipInd = this.ships.indexOf(ship);
    shipInd > -1 ? this.ships.splice(shipInd, 1) : null;
  }

  placeShip(ship, coordinates, orientation) {
    const x = coordinates[1];
    const y = coordinates[0];
    const placementValid = this.#isPlacementValid(ship, coordinates, orientation);
    if (placementValid) {
      this.#removeShip(ship)// if ship was previously placed
      this.ships.push(ship);
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
    } else {
      return placementValid;
    }
  }

  #getCurrentCoord(ship) {
    let shipFound = false;
    let currCoord = null;
    while (shipFound === false) {
      for (let y = 0; y < this.boardSize; y++) {
        for (let x = 0; x < this.boardSize; x++) {
          if (this.board[y][x] === ship) {
            currCoord = [y, x];
            shipFound = true;
            break;
          }
        }
        if (shipFound === true) {
          break;
        }
      }
    }
    return currCoord;
  }

  #countBlankSpaces(coord, numSpaces, orientation) {
    const x = coord[1];
    const y = coord[0];
    let blankSpaces = 0;

    for (let i = 0; i < numSpaces; i++) {
      if (orientation === 'vertical') {
        this.board[y + i][x] === '' ? blankSpaces += 1 : null;
      } else {
        this.board[y][x + i] === '' ? blankSpaces += 1 : null;
      }
    }
    return blankSpaces;
  }

  rotateShip(ship) {
    const currCoord = this.#getCurrentCoord(ship);
    const x = currCoord[1];
    const y = currCoord[0];
    let newDirr = null;

    if (this.board[y + 1][x] === ship) {
      newDirr = 'horizontal';
    } else if (this.board[y][x + 1] === ship) {
      newDirr = 'vertical';
    }

    const freeSpaces = this.#countBlankSpaces(currCoord, ship.length, newDirr);
    if (freeSpaces == ship.length - 1) {
      this.#removeShip(ship);
      this.placeShip(ship, currCoord, newDirr);
    }
  }

  receiveAttack(coordinates) {
    const x = coordinates[1];
    const y = coordinates[0];
    if (this.board[y][x].constructor.name == 'Ship') {
      this.board[y][x].hit();
      this.board[y][x] = 'hit';
    } else if (this.board[y][x] == '') {
      this.board[y][x] = 'miss';
    } else if (this.board[y][x] == 'hit' || this.board[y][x] == 'miss') {
      return 'Attack Invalid';
    }
  }

  allShipsSunk() {
    let shipsSunk = 0;
    for (const ship of this.ships) {
      ship.sunk ? shipsSunk += 1 : null;
    }
    return shipsSunk == this.ships.length;
  }
}

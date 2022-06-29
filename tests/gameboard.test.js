/* eslint-disable no-plusplus */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
import Ship from '../src/ship';
import Gameboard from '../src/gameboard';

test('Vertical ship placement works correctly', () => {
  const carrier = new Ship(5);
  const gameboard = new Gameboard();
  gameboard.placeShip(carrier, [0, 0], 'vertical');

  expect(gameboard.board).toStrictEqual(
    [
      [carrier, '', '', '', '', '', '', '', '', ''],
      [carrier, '', '', '', '', '', '', '', '', ''],
      [carrier, '', '', '', '', '', '', '', '', ''],
      [carrier, '', '', '', '', '', '', '', '', ''],
      [carrier, '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});
/*
test("Ship's position attribute updates correctly", () => {
  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const gameboard = new Gameboard();
  gameboard.placeShip(carrier, [0, 0], 'vertical');
  gameboard.placeShip(battleship, [2, 1], 'horizontal');

  expect(carrier.position).toStrictEqual([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]);
  expect(battleship.position).toStrictEqual([[2, 1], [2, 2], [2, 3], [2, 4]]);
});
*/

test('Horizontal ship placement works correctly', () => {
  const battleship = new Ship(4);
  const gameboard = new Gameboard();
  gameboard.placeShip(battleship, [2, 1], 'horizontal');
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', battleship, battleship, battleship, battleship, '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('Ship will not be placed vertically off the board', () => {
  const carrier = new Ship(5);
  const gameboard = new Gameboard();
  gameboard.placeShip(carrier, [6, 0], 'vertical');
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('Ship will not be placed horizontally off the board', () => {
  const carrier = new Ship(5);
  const gameboard = new Gameboard();
  gameboard.placeShip(carrier, [2, 6], 'horizontal');
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('Ship will not be placed vertically if a ship is in the way', () => {
  const patrolBoat = new Ship(2);
  const carrier = new Ship(5);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [8, 2], 'vertical');
  gameboard.placeShip(carrier, [6, 2], 'vertical');
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', patrolBoat, '', '', '', '', '', '', ''],
      ['', '', patrolBoat, '', '', '', '', '', '', ''],
    ],
  );
});

test('placeShip will return false if placement is invalid', () => {
  const patrolBoat = new Ship(2);
  const carrier = new Ship(5);
  const gameboard = new Gameboard();

  expect(gameboard.placeShip(carrier, [6, 2], 'vertical')).toStrictEqual(false);
});

test('Ship will not be placed horizontally if a ship is in the way', () => {
  const patrolBoat = new Ship(2);
  const carrier = new Ship(5);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [4, 8], 'horizontal');
  gameboard.placeShip(carrier, [4, 6], 'horizontal');
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', patrolBoat, patrolBoat],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('Ships wont intersect perpendicularly', () => {
  const patrolBoat = new Ship(2);
  const carrier = new Ship(5);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [4, 7], 'horizontal');
  gameboard.placeShip(carrier, [3, 7], 'vertical');
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', patrolBoat, patrolBoat, ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('receiveAttack correctly attacks ship', () => {
  const patrolBoat = new Ship(2);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [4, 7], 'horizontal');
  gameboard.receiveAttack([4, 8]);
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', patrolBoat, 'hit', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('receiveAttack will record a missed attack', () => {
  const patrolBoat = new Ship(2);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [4, 7], 'horizontal');
  gameboard.receiveAttack([1, 2]);
  expect(gameboard.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', 'miss', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', patrolBoat, patrolBoat, ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ],
  );
});

test('receiveAttack will not register a hit on an already-attacked coordinate', () => {
  const patrolBoat = new Ship(2);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [4, 7], 'horizontal');
  gameboard.receiveAttack([1, 2]);
  expect(gameboard.receiveAttack([1, 2])).toBe('Attack Invalid');
});

test('All ships sunk', () => {
  const patrolBoat = new Ship(2);
  const destroyer = new Ship(3);
  const gameboard = new Gameboard();
  gameboard.placeShip(patrolBoat, [4, 7], 'horizontal');
  gameboard.placeShip(destroyer, [1, 0], 'vertical');

  for (let y = 1; y < 4; y++) {
    gameboard.receiveAttack([y, 0]);
  }
  for (let x = 7; x < 9; x++) {
    gameboard.receiveAttack([4, x]);
  }
  expect(gameboard.allShipsSunk()).toBe(true);
});

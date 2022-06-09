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

test('Horizontal ship placement works correctly', () => {
  const battleship = new Ship(4);
  const gameboard = new Gameboard();
  gameboard.placeShip(battleship, [2, 1], 'horizontal');
  console.table(gameboard.board)
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






// Test invalid placements of ship


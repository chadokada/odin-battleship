/* eslint-disable no-undef */
import Ship from '../src/ship';

test('Hit method damages Ship the corrrect amount', () => {
  const carrier = new Ship(5);
  carrier.hit(0);
  carrier.hit(1);
  expect(carrier.damage).toStrictEqual([1, 1, 0, 0, 0]);
});

test('Ship sinks if sufficiently damaged', () => {
  const patrolBoat = new Ship(2);
  patrolBoat.hit(0);
  patrolBoat.hit(1);
  expect(patrolBoat.isSunk()).toBe(true);
});

test('Ship will not sink if not sufficiently damaged', () => {
  const battleship = new Ship(4);
  battleship.hit(1);
  battleship.hit(2);
  battleship.hit(3);
  expect(battleship.isSunk()).toBe(false);
});

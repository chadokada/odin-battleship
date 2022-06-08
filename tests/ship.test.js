/* eslint-disable no-undef */
import Ship from '../src/ship';

test('Hit method damages Ship the corrrect amount', () => {
  const carrier = new Ship(5);
  carrier.hit();
  carrier.hit();
  expect(carrier.damage).toBe(2);
});

test('Ship sinks if sufficiently damaged', () => {
  const patrolBoat = new Ship(2);
  patrolBoat.hit();
  patrolBoat.hit();
  expect(patrolBoat.isSunk()).toBe(true);
});

test('Ship will not sink if not sufficiently damaged', () => {
  const battleship = new Ship(4);
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(false);
});

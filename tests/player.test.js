/* eslint-disable no-undef */
import Player from '../src/player';
import Ship from '../src/ship';
import Gameboard from '../src/gameboard';

test('Human Player type set correctly', () => {
  const humanPlayer = new Player();
  humanPlayer.setPlayerType(0);
  expect(humanPlayer.type).toBe('human');
});

test('Computer Player type set correctly', () => {
  const computerPlayer = new Player();
  computerPlayer.setPlayerType(1);
  expect(computerPlayer.type).toBe('computer');
});

test('Player name sets correctly', () => {
  const player1 = new Player();
  player1.setPlayerName('Player 1');
  expect(player1.name).toBe('Player 1');
});


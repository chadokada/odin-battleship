/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import Player from '../src/player';
import Ship from '../src/ship';
import Gameboard from '../src/gameboard';
import { getAttackedCoordinates, getUnique } from '../utils/utilities';

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

test('Send Attack works on human player', () => {
  const player1 = new Player();
  player1.setPlayerName('Player 1');
  player1.setPlayerType(0);

  const gameboard2 = new Gameboard();
  const player2 = new Player(gameboard2);
  player2.setPlayerName('Player 2');
  player2.setPlayerType(0);
  player1.sendAttack(player2.board, [1, 2]);

  expect(player2.board.board).toStrictEqual(
    [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', 'miss', '', '', '', '', '', '', ''],
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

test('Send Attack works if attacking player is Computer', () => {
  const gameboard1 = new Gameboard();
  const player1 = new Player(gameboard1);
  player1.setPlayerName('Player 1');
  player1.setPlayerType(0);

  const attacks = [[1, 2], [3, 2]];
  for (const attack of attacks) {
    player1.board.receiveAttack(attack);
  }

  const computer = new Player();
  computer.setPlayerName('Computer');
  computer.setPlayerType(1);

  computer.sendAttack(player1.board);

  const allAttacks = getAttackedCoordinates(player1.board);
  const newAttack = getUnique(attacks, allAttacks)[0];

  const attackedY = newAttack[0];
  const attackedX = newAttack[1];

  expect(attackedX).toBeGreaterThanOrEqual(0);
  expect(attackedX).toBeLessThanOrEqual(9);
  expect(attackedY).toBeGreaterThanOrEqual(0);
  expect(attackedY).toBeLessThanOrEqual(9);
});


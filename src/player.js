import { getRandInt } from '../utils/utilities';

export default class Player {
  constructor(board) {
    this.board = board;
    this.type = null;
    this.name = null;
  }

  setPlayerType(index) {
    const types = ['human', 'computer'];
    this.type = types[index];
  }

  setPlayerName(name) {
    this.name = name;
  }

  sendAttack(board, coordinates = null) {
    if (this.type === 'human') {
      board.receiveAttack(coordinates);
    }
    if (this.type === 'computer') {
      let attack = [getRandInt(10), getRandInt(10)];

      while (board.receiveAttack(attack) === 'Attack Invalid') {
        attack = [getRandInt(10), getRandInt(10)];
      }

      board.receiveAttack(attack);
    }
  }
}

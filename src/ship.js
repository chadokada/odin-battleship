export default class Ship {
  constructor(length) {
    this.length = length;
    this.damage = 0;
    this.sunk = false;
  }

  hit() {
    this.damage += 1;
  }

  isSunk() {
    if (this.damage === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

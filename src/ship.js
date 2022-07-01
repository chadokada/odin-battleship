export default class Ship {
  constructor(length, name) {
    this.length = length;
    this.name = name;
    this.damage = 0;
    this.sunk = false;
  }

  hit(position) {
    this.damage += 1;
    if (this.isSunk()) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.damage === this.length;
  }
}

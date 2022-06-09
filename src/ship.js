export default class Ship {
  constructor(length) {
    this.length = length;
    this.damage = Array(length).fill(0);
    // this.damage = 0;
    this.sunk = false;
  }

  hit(position) {
    // this.damage += 1;
    if (this.damage[position] === 0) {
      this.damage[position] = 1;
    }
  }

  isSunk() {
    const totalDamage = this.damage.reduce((sum, x) => sum + x, 0);
    if (totalDamage === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }
}

const names = new Set();

class Robot {
  constructor() {
    this.name = this.constructor.nameGen();

  }

  static nameGen() {
    let alpSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numSet = '0123456789';
    let name = '';

    for (let i = 0; i < 5; i++) {
      if (i < 2) {
        name += alpSet[Math.ceil(Math.random() * (alpSet.length - 1))];
      } else {
        name += numSet[Math.ceil(Math.random() * (numSet.length - 1))];
      }
    }

    if (names.has(name)) name = this.nameGen();

    names.add(name);
    return name;
  }

  name() {
    return this.name;
  }

  reset() {
    this.name = this.constructor.nameGen();
  }

}

module.exports = Robot;

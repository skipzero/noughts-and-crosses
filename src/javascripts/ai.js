const Store = require('./store');

class Ai {
  constructor () {
    const trials = 1000;
    const store = new Store();

    this.board = store.getState();
  }
}

module.exports = Ai;

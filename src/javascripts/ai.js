const Store = require('./store');

const ai = () => {
  const trials = 1000;
  const store = new Store();

  const board = store.getState();
  console.log('BOARD', board);
}

ai();

module.exports = ai;

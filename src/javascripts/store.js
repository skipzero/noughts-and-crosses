class Store {
  constructor () {
    const square = Array(3).fill(0);
    const gameboard = Array(3).fill(square);
    this.gameboard = gameboard;
    this.message = '';
  }

  getState (id) {

    if (id === 'gameboard') {
      return this.gameboard;
    }
    if (id === 'message') {
      return this.message;
    }
  }


}



module.exports = Store;

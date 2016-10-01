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

  action (obj) {
    const {x, y, type, marker} = obj;
    this.gameboard = this.gameboard.map((row, yIndex) => {
      return row.map((square, xIndex) => {
        if(yIndex === y && xIndex === x) {
          return marker;
        }
        return square;
      })
    });
  }
}



module.exports = Store;

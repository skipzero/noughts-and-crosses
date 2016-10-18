class Store {
  constructor () {
    const square = Array(3).fill('');
    const gameboard = Array(3).fill(square);
    this.gameboard = gameboard;
    this.message = '';
    this.marker = 'x';
  }

  getMarker () {
    console.log('get marker', this.marker)
  }

  getState (id) {
    if (id === 'gameboard') {
      return this.gameboard;
    }
    if (id === 'message') {
      return this.message;
    }
    return id;
  }

  action (obj) {
    const {turn, x, y, marker} = obj;
    this.gameboard = this.gameboard.map((row, yIndex) => {
      return row.map((square, xIndex) => {
        if (yIndex === y && xIndex === x && square === '') {
          return marker;
        }
        return square;
      });
    });
    this.marker = this.marker === 'x' ? 'o' : 'x';
    this.message = 'Pick an unoccupied square, hoser.';
    if (this.callback) {
      this.callback();
    }
  }

  register (callback) {
    if (!callback) {
      throw new Error('onChange needs a callback');
    }
    this.callback = callback;
  }
}

module.exports = Store;

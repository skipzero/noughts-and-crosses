/*eslint no-console: ['error', { allow: ['log', 'info', 'error'] }] */
'use strict';
class Store {
  constructor (state) {
    const square = new Array(3).fill('');
    const gameboard = new Array(3).fill(square);
    this.gameboard = gameboard;

    if (state) {
      this.gameboard = state;
    }

    this.end = false;

    this.message = '';
    this.marker = 'o';
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
    const {x, y} = obj;
    this.gameboard = this.gameboard.map((row, yIndex) => {
      return row.map((square, xIndex) => {
        const targetSquare = (yIndex === y && xIndex === x);
        const isEmpty = square === '';

        if (targetSquare) {
          if (!isEmpty) {
            this.message = 'Pick an unoccupied square, hoser.';
            return square;
          }

          // put win check here...
          if (!this.end) {
            this.marker = this.marker === 'x' ? 'o' : 'x';
            this.isWinner(obj);
            return this.marker;
          }
          return null;
        }
        return square;
      });
    });

    if (this.callback) {
      this.callback();
    }
  }

  isWinner (obj) {
    const row = this.gameboard[obj.y];
    const col = obj.x;

    // row[obj.x] = this.marker;
// console.log(obj);
    let target = [];
    let checkCol = this.gameboard.reduce((acc, cur, index) => {
      return console.log(`column... ${cur} ${index}`);
    });

    let rowWin = row.reduce((thisVal, next, index) => {
      if (next === '') {
        return null;
      }

      console.log(thisVal, next, index);
    });

    if (rowWin === true) {
      console.log('Winner');
      this.end = true;
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

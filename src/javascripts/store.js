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
          this.marker = this.marker === 'x' ? 'o' : 'x';
          this.isWinner(obj);
          return this.marker;
        }
        return square;
      });
    });

    if (this.callback) {
      this.callback();
    }
  }

  isWinner (sq) {
    const row = this.gameboard[sq.y];
    // const winArray = [
    //   [0, 1, 2],
    //   [0, 3, 6],
    //   [0, 4, 8],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [2, 4, 6],
    //   [3, 4, 5],
    //   [6, 7, 8],
    // ];
    // debugger;
    console.log('Mrk', this.marker, row);

  }

  register (callback) {
    if (!callback) {
      throw new Error('onChange needs a callback');
    }
    this.callback = callback;
  }
}

module.exports = Store;

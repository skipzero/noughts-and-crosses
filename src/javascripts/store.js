/*eslint no-console: ['error', { allow: ['log', 'info', 'error'] }] */
'use strict';
class Store {
  constructor (state) {
    this.gameboard = [['','',''],
                     ['','',''],
                     ['','','']];

    if (state) {
      this.gameboard = state;
    }

    this.state = {
      end: false,
      message: '',
      marker: 'x',
    };
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

  setSquare (obj) {
    const {x, y} = obj;
    console.log(this);
    let square = this.gameboard[y][x];

    const isEmpty = square === '';

    if (isEmpty) {
      square = this.state.marker;
      this.gameboard[y][x] = square;
    }

    // this.gameboard = this.gameboard.map((row, rowIdx) => {
    //   if (rowIdx)
    //   return row.map((sq, sqIdx) => {
    //     console.log(sq, x, sqIdx)
    //     return sq;
    //   });
    // });
    // this.gameboard = this.gameboard.map((row, yIndex) => {
    //   return row.map((square, xIndex) => {
    //     const targetSquare = (yIndex === y && xIndex === x);
    //     const isEmpty = square === '';
    //
    //     if (targetSquare) {
    //       if (!isEmpty) {
    //         this.message = 'Pick an unoccupied square, hoser.';
    //         return square;
    //       }
    //
    //       // put win check here...
    //       if (!this.end) {
    //         this.marker = this.marker === 'x' ? 'o' : 'x';
    //         this.isWinner(obj);
    //         return this.marker;
    //       }
    //       return null;
    //     }
    //     return square;
    //   });
    // });

    if (this.callback) {
      this.callback();
    }
    console.log(this.gameboard);
  }

  register (callback) {
    if (!callback) {
      throw new Error('onChange needs a callback');
    }

    this.callback = callback;
  }
}

module.exports = Store;

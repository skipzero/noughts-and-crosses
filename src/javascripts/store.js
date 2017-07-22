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
    let marker = this.state.marker;
    console.log(this);
    let square = this.gameboard[y][x];

    const isEmpty = square === '';

    if (isEmpty) {
      square = this.state.marker;
      this.gameboard[y][x] = square;
    }

    this.state.marker = marker === 'x' ? 'o' : 'x';


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

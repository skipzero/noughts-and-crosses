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
      gameOver: false,
      message: '',
      marker: 'x',
    };
  }

  getState (id) {
    if (id === 'gameboard') {
      return this.gameboard;
    }

    if (id === 'message') {
      return this.state.message;
    }

    return id;
  }

  action (obj) {
    const {x, y} = obj;
    const gameEnded = this.state.gameOver;

    if (gameEnded) {
      return;
    }

    let marker = this.state.marker;
    let square = this.gameboard[y][x];

    const isEmpty = square === '';

    if (!isEmpty) {
      this.state.message = 'Pick an unoccupied square, hoser.';
      return;
    }

    square = this.state.marker;
    this.gameboard[y][x] = square;

    const gameOver = this.isWinner(this.gameboard);

    if (gameOver) {
      this.state.message = `Good Job ${(this.state.marker).toUpperCase()}'s. U win.`;
      this.state.gameOver = gameOver;
      // return;
    }

    this.state.gameOver = gameOver;

    this.state.marker = marker === 'x' ? 'o' : 'x';

    if (this.callback) {
      this.callback();
    }
  }

  isWinner (newBoard) {

    let boardCheck = newBoard.some((row) => {
      return this.rowCheck(row); // check our rows first as they're the easiest
    });

    console.log('newBoard');
    console.log(boardCheck);

    if (!boardCheck) {
      boardCheck = this.rowCheck(this.rotateBoard(newBoard)); // Rotate board to check the verticals
    }
    return boardCheck;
  }

  rowCheck (row) {
    const matchingRow = row.every((square) => {

      return square === this.state.marker;
    });

    return matchingRow;
  }

  crossCheck (crossBoard) {
    const diagonal = crossBoard.map((crossRow, index) => {
      return crossRow[index];
    });
    return diagonal;
  }

  rotateBoard (board) {

    const rotatedBoard = board[0].map((item, col) => {
      return board.map((row) => {
        return row[col];
      }).reverse();
    });

    return rotatedBoard;
  }

  register (callback) {
    if (!callback) {
      throw new Error('onChange needs a callback');
    }

    this.callback = callback;
  }
}

module.exports = Store;

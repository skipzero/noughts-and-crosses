/*eslint no-console: ['error', { allow: ['log', 'info', 'error'] }] */
class Store {
  constructor (state) {
    const square = new Array(3).fill('');
    const gameboard = new Array(3).fill(square);
    this.gameboard = gameboard;

    if (state) {
      this.gameboard = state;
    }

    this.winner = false;
    this.message = '';
    this.marker = 'x';
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

    if (this.winner) {
      console.log(`we have a winner. congrats ${this.marker}`);
      return;
    }

    this.gameboard = this.gameboard.map((row, yIndex) => {
      return row.map((square, xIndex) => {
        const targetSquare = (yIndex === y && xIndex === x);
        const isEmpty = square === '';

        if (targetSquare) {
          if (!isEmpty && !this.winner) {
            this.message = 'Pick an unoccupied square, hoser.';
            return square;
          }

          // put win check here...
          if (!this.end) {
            this.marker = this.marker === 'x' ? 'o' : 'x';
            return this.marker;
          }
          return null;
        }
        this.isWinner(obj);
        return square;
      });
    });

    if (this.callback) {
      this.callback();
    }
  }

  isWinner ({x, y}) {
    // console.log('is Winner::', x, y);
    const row = this.gameboard[y].map((curr, index) => {
      if (index === x) {
        curr = this.marker;
      }
      return curr;
    });

    // console.log('our row', row);
    const rowWin = row.filter((curr, index) => {
      if (row[index + 1] && curr === row[index + 1]) {
        return true;
      }
      return false;
    });

    // console.log(rowWin);
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

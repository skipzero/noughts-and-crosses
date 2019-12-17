/*eslint no-console: ['error', { allow: ['log', 'info', 'error'] }] */
class Store {
  constructor(state) {
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

  getState(id) {
    if (id === 'gameboard') {
      return this.gameboard;
    }
    if (id === 'message') {
      return this.message;
    }
    return id;
  }

  action(obj) {
    const { x, y } = obj;

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

  checkWin() {
    const gameBoard = this.gameBoard;
    let winner = false;
    const boardWidth = this.getDim();

    // Check rows.
    for (let rowInd = 0; rowInd < boardWidth; rowInd++) {
      let row = this.board[rowInd];
      if (gameBoard.allEqual(row) && row[0] > 0) {
        winner = row[0];
        return winner;
      }
    }

    // Check columns.
    for (let rowInd = 0; rowInd < boardWidth; rowInd++) {
      let col = [];
      for (let colInd = 0; colInd < boardWidth; colInd++) {
        col.push(this.getCell(colInd, rowInd));
      }
      if (gameBoard.allEqual(col) && col[0] > 0) {
        winner = col[0];
        return winner;
      }
    }

    // Check diagonals.
    let diags = { left: [], right: [] };
    for (let i = 0; i < boardWidth; i++) {
      diags.left.push(this.getCell(i, i));
      diags.right.push(this.getCell(boardWidth - i - 1, i));
    }

    for (let key in diags) {
      if (key) {
        let diag = diags[key];
        if (gameBoard.allEqual(diag) && diag[0] > 0) {
          winner = diag[0];
          return winner;
        }
      }
    }

    // Check tie.
    let tie = !this.board.reduce((a, b) => {
      return a.concat(b);
    }).some((cell) => {
      return cell === 0;
    });
    if (tie) {
      winner = 3;
      return winner;
    }

    return winner;
  }
}

module.exports = Store;

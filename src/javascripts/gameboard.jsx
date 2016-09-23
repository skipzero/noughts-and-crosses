import React from 'react';
import Square from './square.jsx';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.cleanState();
  }

  cleanState () {
    return {
      squares: Array(9).fill(''),
      turn: 'O',
      round: 1,
      message: '',
    };
  }

  render () {
    const gameboard = this.gameBoard();

    return (
      <div>
        {gameboard}
      </div>
    );
  }

  clickHandler (index, turn) {
    const squares = this.state.squares;
    const round = this.state.round;
console.log('SquareClick', squares[index])
    if (squares[index] === 'O' || squares[index] === 'X') {
      return;
    }

    squares[index] = turn;
    this.checkWin(index, turn);

    this.setState({
      squares,
      turn: turn === 'O' ? 'X' : 'O',
      round: round + 1,
    });
  }

  gameBoard () {
    return (
      <div id='gameBoard'> {
          this.state.squares.map((square, i) => {

            return (
              <Square
                key={i}
                index={i}
                status={square}
                turn={this.state.turn}
                handleClick={this.clickHandler.bind(this, i)}
              />
          );
          }, this)
        }
      </div>
    );
  }

  checkWin (index, turn) {
    const squares = this.state.squares;

    const winArray = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    let message = this.state.message;
    let round = this.state.round;

    for (let i = 0; i < winArray.length - 1; i++) {
      const currArr1 = winArray[i][0];
      const currArr2 = winArray[i][1];
      const currArr3 = winArray[i][2];

      if (round === 9) {
        // Tie game TODO: add verbage to declare tied...
        message = 'Game Over, man... Tie game... No winner...'
      }

      //  Check if any of our winning conditions are met...
      if (squares[currArr1] === squares[currArr2] && squares[currArr1] === squares[currArr3] && squares[currArr1] !== '') {
        //  TODO: add winner verbage over the console log
        message = `The ${move}'s win!! Good job. Play again!`
      }
      else {
        this.autoTurn(turn);
      }
    }
  }

  autoTurn (turn) {
    const compTurn = this.randNum();
    const squares = this.state.squares;

    if (squares[compTurn] !== '') {
      //
    }
  }

  randNum () {
    return Math.floor(Math.random() * 9);
  }
}

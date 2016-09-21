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

  clickHandler (index, move) {
    const squares = this.state.squares;
    const round = this.state.round;

    if (squares[index] === 'O' || squares[index] === 'X') {
      return;
    }

    squares[index] = move;
    this.checkWin(index, move);

    this.setState({
      squares,
      turn: move === 'O' ? 'X' : 'O',
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

  // checkWin (index, move) {
  //   const squares = this.state.squares
  //   const winArray = [
  //     [0, 1, 2],
  //     [0, 3, 6],
  //     [0, 4, 8],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [2, 4, 6],
  //     [3, 4, 5],
  //     [6, 7, 8]
  //   ]
  //
  //   turn = this.state.round
  //
  //   for (let i = 0; i < winArray.length; i++) {
  //     const currArr1 = winArray[i][0]
  //     const currArr2 = winArray[i][1]
  //     const currArr3 = winArray[i][2]
  //
  //     if (turn === 0) {
  //       // Tie game TODO: add verbage to declare tied...
  //     }
  //
  //     //  Check if any of our winning conditions are met...
  //     if (squares[currArr1] === squares[currArr2] && squares[currArr1] === squares[currArr3] && squares[currArr1] !== '') {
  //       //  TODO: add winner verbage over the console log
  //       console.log(`Winner!! The ${move}'s win. Good Job!`)
  //     } else {
  //       this.autoTurn(move)
  //     }
  //   }
  // }

  autoTurn (move) {
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

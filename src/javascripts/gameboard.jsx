import React from 'react';
import Square from './square.jsx';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = this.initState();
  }

  initState () {
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
        <div id='messages'>{this.state.message}</div>
        {gameboard}
        <div className='replay' onClick={this.clickHandler.bind(this)}></div>
      </div>
    );
  }

  clickHandler (index, turn) {
    const squares = this.state.squares;
    const round = this.state.round;

    if (squares[index] === undefined) {
      this.setState(this.initState);
    }

    if (squares[index] !== '') {
      return;
    }

    squares[index] = turn;

    this.setState({
      squares,
      turn: turn === 'O' ? 'X' : 'O',
      round: round + 1,
    });
    this.checkWin(index, turn);
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
                handleClick={this.clickHandler.bind(this)}
              />
            )
          }, this)
        }
      </div>
    );
  }

  checkWin (index, turn) {
    const squares = this.state.squares;
console.log('CheckWinnnn...', squares[index], turn, index)
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

      //  Check if any of our winning conditions are met...
      if (squares[currArr1] === squares[currArr2] && squares[currArr1] === squares[currArr3] && squares[currArr1] !== '') {

        message = `The ${turn}'s win!! Good job. Play again!`
      }
      else if (round === 9) {
        // Tie game TODO: add verbage to declare tied...
        console.log('Tie...')
        message = 'Game Over!\n Tie game... No winner...'
      }

      if (message !== '') {
        this.setState({
          message
        })
      }
    }
    setTimeout(this.compTurn.bind(this), 2000)
  }

  compTurn () {
    const compIndex = this.randNum();
    const round = this.state.round;
    const squares = this.state.squares;

    let turn = this.state.turn;

    if (squares[compIndex] !== '') {
      this.compTurn(turn);
    }

    squares[compIndex] = turn;

    this.setState({
      squares,
      turn: turn === 'O' ? 'X' : 'O',
      round: round + 1,
    });
  }

  randNum () {
    return Math.floor(Math.random() * 9);
  }
}

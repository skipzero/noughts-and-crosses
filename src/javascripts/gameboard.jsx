import React from 'react';
// import Square from './square.jsx';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
  }

  gameBoard () {
    const gameboard = this.props.store.getState('gameboard');

    return gameboard.map((row, index) => {
      return row.map((square, index) => {
        return (
          <div className='square'></div>
          )
      });
    });
          // gameboard.map((square, i) => {
          //   return (
          //     <Square
          //       key={i}
          //       index={i}
          //       status={square}
          //       turn={this.state.turn}
          //       handleClick={this.clickHandler.bind(this)}
          //     />
          //   )
          // }, this)
    //     }
    //   </div>
    // );
  }

  render () {
    const store = this.props.store;
    const gameboard = this.gameBoard();
    return (
      <div>
        <div id='messages'>{store.getState('message')}</div>
        {gameboard}
        <div className='replay' onClick={this.clickHandler.bind(this)}></div>
      </div>
    );
  }

  clickHandler (index, turn) {
    const squares = this.state.squares;
    const selected = this.state.selected;

    let round = this.state.round;

    if (squares[index] === undefined) {  //  test if it's our reset button
      this.setState(this.initState);
    }

    if (squares[index] !== '') {
      return;
    }

    squares[index] = turn;
    selected.push(index);
    turn = this.nextTurn(turn);
    round += 1;
    this.setState({
      squares,
      turn,
      round,
      selected,
    });
    this.checkWin(index, turn);
    const timer = setTimeout(this.compTurn.bind(this), 1000);

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
    let timer;

    for (let i = 0; i < winArray.length - 1; i++) {
      const currArr1 = winArray[i][0];
      const currArr2 = winArray[i][1];
      const currArr3 = winArray[i][2];

      //  Check if any of our winning conditions are met...
      if (squares[currArr1] === squares[currArr2] && squares[currArr1] === squares[currArr3] && squares[currArr1] !== '') {
        message = `The ${turn}'s win!! Good job. Play again!`;
        break;
      }
      else if (round === 9) {
        // Tie game TODO: add verbage to declare tied...
        console.info('Tie...')
        message = 'Game Over!\n Tie game... No winner...';
        break;
      }

      if (message !== '') {
        this.setState({
          message
        })
      }
    }
  }

  compTurn () {
    const squares = this.state.squares;
    const selected = this.state.selected;

    let round = this.state.round;
    let turn = this.state.turn;
    let index = this.randNum.call(this);

    squares[index] = turn;
    selected.push(index);


    this.checkWin(index, turn);
    turn = this.nextTurn(turn);
    round += 1;
    this.setState({
      squares,
      turn,
      round,
      selected,
    });
  }

  nextTurn (turn) {
    return turn = turn === 'O' ? 'X' : 'O';
  }

  randNum () {
    let newIndex = Math.floor(Math.random() * 9);
    const selected = this.state.selected;
    if (selected.length <= 9) {

      selected.forEach((cur) => {
        if (cur === newIndex) {
          this.randNum();
          return;
        }
      });
      return newIndex;
    } else {
      return;
    }
  }
}

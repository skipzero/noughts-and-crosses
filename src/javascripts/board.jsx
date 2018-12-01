import React, { Component } from 'react';

class Board extends Component {

  constructor(props) {
    super(props);
    props.store.register(this.updateState.bind(this));
  }

  updateState() {
    const newState = this.props.store.getState('gameboard');
    this.setState(newState);
  }

  render() {
    const store = this.props.store;
    const gameboard = this.gameboard();

    return (
      <div>
        <div id='messages'>{store.getState('message')}</div>
          <div id='gameBoard'>
            {gameboard}
          </div>
        <div className='replay' onClick={this.clickHandler}></div>
      </div>
    );
  }

  gameboard() {
    const gameboard = this.props.store.getState('gameboard');
    let i = 0;

    return gameboard.map((row, rowIndex) => {

      return row.map((square, sqIndex) => {
        i = i + 1;
        const handleClick = this.clickHandler.bind(this, sqIndex, rowIndex);

        return (
          <div className='square' key={i} onClick={handleClick}>{square}</div>
        )
      });
    });
  }

  clickHandler (x, y) {
    this.props.store.action({
      type: 'turn',
      x,
      y,
    });
  }
}

export default Board;

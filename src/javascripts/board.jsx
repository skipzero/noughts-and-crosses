/* eslint no-debugger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

class Board extends React.Component {
  constructor(props) {
    super(props);

    props.store.register(this.updateState.bind(this));
  }

  updateState() {
    const newState = this.props.store.getState('gameboard');
    this.setState(newState);
  }

  gameBoard() {
    const gameboard = this.props.store.getState('gameboard');

    return gameboard.map((row, rowIndex) => {
      let classes = 'square ';
      if (rowIndex === 0) {
        classes += 'top ';
      }
      if (rowIndex === 2) {
        classes += 'bottom ';
      }
      return row.map((square, sqIndex) => {
        if (sqIndex === 0) {
          classes += 'left ';
        }
        if (sqIndex === 2) {
          classes += 'right ';
        }
        const handleClick = this.clickHandler.bind(this, sqIndex, rowIndex);
        const keyIndex = rowIndex + sqIndex;
        console.log(keyIndex)
        return (
          <div className={classes} onClick={handleClick} key={keyIndex}>
            {square}
          </div >
        );
      });
    });
  }

  render() {
    const gameboard = this.gameBoard();
    return (
      <div>
        <div id='messages'>{this.props.store.getState('message')}</div>
        <div id='gameBoard'>
          {gameboard}
        </div>
        <div className='replay' onClick={this.restart}> REPLAY </div>
      </div>
    );
  }

  restart() {
    return;
  }

  clickHandler(x, y) {
    debugger;
    this.props.store.action({
      type: 'turn',
      x,
      y,
    });
  }
}

Board.propTypes = {
  store: PropTypes.object,
  getState: PropTypes.func,
  setSquare: PropTypes.func,
  register: PropTypes.func,
};

export default Board;

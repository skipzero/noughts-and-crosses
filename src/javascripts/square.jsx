import React from 'react';

export default class Square extends React.Component {

  playerTurn() {
    this.props.handleClick(this.props.index, this.props.turn);
  }

  render() {
    return (
      <div className='square' onClick={this.playerTurn.bind(this)}>{this.props.status}</div>
    );
  }
}

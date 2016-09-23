import React from 'react';

export default class Square extends React.Component {
  render () {
    
    return (
      <div className='square' onClick={this.props.handleClick}>{this.props.status}</div>
    );
  }
}

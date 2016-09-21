import React from 'react'

export default class Square extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='square' onClick={this.props.handleClick}>{this.props.status}</div>
    )
  }
}

Square.propTypes = {
  handleClick: React.PropTypes.object,
  status: React.PropTypes.string
}

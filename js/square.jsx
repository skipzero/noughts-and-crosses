'use strict';

import React from 'react';

let Square = React.createClass({

	displayName: 'Square'

	, playerTurn: function() {
		this.props.clicker(this.props.index, this.props.turn)
	}

	, render: function() {
		return <div className='square' onClick={this.playerTurn}>{this.props.status}</div>
	}
});

export default Square;
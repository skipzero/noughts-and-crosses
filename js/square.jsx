'use strict';

import React from 'react';

let Square = React.createClass({

	setInitialState: function() {
		return {value: 'O'}
	},

	handleClick: function(event) {
		console.log('FIRED!!', event)
		return this.setState( {value: 'X'});
	},

	render: function() {
		return <div className="square"  onClick={this.handleClick.bind(this, 'aNode')}>{this.props.value}</div>;
	}
})

export default Square;
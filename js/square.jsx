'use strict';

import React from 'react';

let Square = React.createClass({

	displayName: 'Square',

	handleClick: function(event) {

		let sqVal = this.props.value;
		console.log('fire!')
		console.log('Val', sqVal)
		if (this.props.value === 'X' || this.props.value === 'O'){

	console.log('if', this)

			return;
		}
		console.log('not if', this)
		sqVal = ' X ';
console.log(this.props.value)
		this.props.refresh;

	},

	render: function() {

		return <div className="square" onClick={this.handleClick}>{this.props.value}</div>;
	}
})

export default Square;
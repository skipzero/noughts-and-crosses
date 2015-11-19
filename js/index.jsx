'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let SquareButton = React.createClass({
	handleClick: function(event) {
console.log('fires....')
	},
	
	render: function() {

		return (
			<div>
				{this.squareNine()}
			</div>
		);
	},

	squareNine: function() {
		let squares = [];

		for(var i = 0; i < 9; i++) {
			squares.push(<Square key={i} value="O" onClick={this.handleClick}/>)
		}

		console.log('square', squares, 'THIS', this.props)
		return squares;
	}
});

ReactDOM.render(
	<SquareButton />, document.getElementById('container')
);
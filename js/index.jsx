'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let SquareButton = React.createClass({
	
	render: function() {
		console.log('render', this)
		return (
			<div>
				{this.squareNine()}
			</div>
		);
	},

	squareNine: function() {
		let squares = [];

		for(var i = 0; i < 9; i++) {
			squares.push(<Square key={i} value="O"/>)
		}
		return squares;
	}
});

ReactDOM.render(
	<SquareButton />, document.getElementById('container')
);
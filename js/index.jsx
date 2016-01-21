'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let Game = React.createClass({

	displayName: 'SquareBoard'

	, getInitialState: function() {
		console.log('setState...', this);
		// debugger;
		return { 
			value 	: '++' 
			, turn 	: 'O'
		}
	}
	
	, render: function() {
		let count = '0';
		console.log('count', count += 1, 'render', this)
		return (
			<div>
				{this.squareNine()}
			</div>
		);
	}

	, clickHandler: function(move) {
		this.setState({
			turn 	: 'X'
		})
console.log('Xs', this.state)
	}

	, squareNine: function() {

		let squares = [];
		for(var i = 0; i < 9; i++) {
			squares.push(<Square key={i} value={this.state.turn} clicker={ this.clickHandler }/>)
		}
		return squares;
	}
});

ReactDOM.render(
	<Game />, document.getElementById('container')
);
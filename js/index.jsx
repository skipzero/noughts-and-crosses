'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let Game = React.createClass({

	displayName: 'SquareBoard'

	, getInitialState: function() {

		return { 
			squares : ['','','','','','','','','']
			, turn 	: 'O'
		}
	}
	
	, render: function() {
		let gameboard = this.gameBoard();

		console.log('render', this);
		return (
			<div>
				{gameboard}
			</div>
		);
	}

	, clickHandler: function(index, move) {
console.log('Moves', move, this.state.squares[index])

		let squares = this.state.squares;
		squares[index] = move;
		this.setState({
			squares : squares
			, turn 	: move === 'O' ? 'X' : 'O'
		});
console.log('Xs', this.state)
	}

	, gameBoard: function() {

		return <div id='gameBoard'> {
			this.state.squares.map(function(square, i) {
console.log('Ind', i)
				return (
					<Square key={i} index={i} status={square} turn={this.state.turn} clicker={ this.clickHandler }/>
				);
		}, this)} </div>
	}
});

ReactDOM.render(
	<Game />, document.getElementById('container')
);
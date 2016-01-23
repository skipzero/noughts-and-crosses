'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let Game = React.createClass({

	displayName: 'SquareBoard'

	, getInitialState: function() {

		return { 
			squares : ['','','','','','','','','']
			, move 	: 'O'
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

		let squares = this.state.squares;
		
		if(squares[index] === 'O' || squares[index] === 'X') {
			return;
		}
		
		squares[index] = move;
		this.checkWin(index, move)
		this.setState({
			squares : squares
			, turn 	: move === 'O' ? 'X' : 'O'
		});
	}

	, gameBoard: function() {

		return <div id='gameBoard'> {
			this.state.squares.map(function(square, i) {
				return (
					<Square key={i} index={i} status={square} move={this.state.move} clicker={ this.clickHandler }/>
				);
		}, this)} </div>
	}

	, checkWin: function (index, move) {
		let squares = this.state.squares;
		
		let winningNumbs = [
			[0,1,2]
			, [0,3,6]
			, [0,4,8]
			, [1,4,6]
			, [2,5,8]
			, [2,4,6]
			, [3,4,5]
			, [6,7,8]
		];
		for (let i = 0; i < winningNumbs.length; i++) {

			if(winningNumbs[i][0] === move && winningNumbs[i][0] === move && winningNumbs[i][0] === move) {
				console.log('Bang!')
			}
		}
	}
});

ReactDOM.render(
	<Game />, document.getElementById('container')
);
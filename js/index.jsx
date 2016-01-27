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
			, round : 1
		}
	}
	
	, render: function() {
		let gameboard = this.gameBoard();

		return (
			<div>
				{gameboard}
			</div>
		);
	}

	, clickHandler: function(index, move) {
		let squares = this.state.squares
			, round = this.state.round;
		if(squares[index] === 'O' || squares[index] === 'X') {
			return;
		}

		squares[index] = move;
		this.checkWin(index, move)
console.log('Round', round)
		this.setState({
			squares : squares
			, turn 	: move === 'O' ? 'X' : 'O'
			, round : round + 1
		});
	}

	, gameBoard: function() {

		return <div id='gameBoard'> {
			this.state.squares.map(function(square, i) {
				return (
					<Square key={i} index={i} status={square} turn={this.state.turn} clicker={ this.clickHandler }/>
				);
		}, this)} </div>
	}

	, checkWin: function (index, move) {
		let squares = this.state.squares;

		let winArr = [
			[0,1,2]
			, [0,3,6]
			, [0,4,8]
			, [1,4,6]
			, [2,5,8]
			, [2,4,6]
			, [3,4,5]
			, [6,7,8]
		]
			, turn = this.state.round;
			
		for (let i = 0; i < winArr.length; i++) {
			let currArr1 	= winArr[i][0]
				, currArr2 	= winArr[i][1]
				, currArr3 	= winArr[i][2];

			if (this.state.round === 9) {
				console.log('Tie game... blah.');
				return;
			};

			if(squares[currArr1] === squares[currArr2] && squares[currArr1] === squares[currArr3] && squares[currArr1] != '') { //winning conditions...

				console.log('Winner!! the ' + move +'\'s win!')
			} else {
				this.autoTurn();
			}
		};
	}

	, autoTurn: function() {
		let compTurn = this.randNum();

		console.log('Comp', compTurn)

	}

	, randNum: function() {
		let min = 0
		,	max 	= 8;

		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});

ReactDOM.render(
	<Game />, document.getElementById('container')
);
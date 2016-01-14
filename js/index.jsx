'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

let SquaresBoard = React.createClass({

	displayName: 'SquareBoard',
	
	render: function() {
		console.log('render', this)

		return (
			<div>
				{this.squareNine()}
			</div>
		);
	}

	, squareNine: function() {
		let squares = []
			, sqVal = ' + ';

		for(var i = 0; i < 9; i++) {
			squares.push(<Square key={i} value={sqVal}/>)
		}
		return squares;
	}

	, refresh: function() {
		console.log('Refresh', this)
	}
});

ReactDOM.render(

	<SquaresBoard />, document.getElementById('container')
);
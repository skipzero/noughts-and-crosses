'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var SquareButton = React.createClass({
	getInitialState: function() {
		return {picked: false};
	},
	
	handleClick: function(event) {
		console.log('bang!')
	},
	
	render: function() {
		return (
			<div className="square" onClick={this.handleClick}></div>
		);
	}

});


ReactDOM.render(
	<SquareButton className="square" />, document.getElementById('container')
);
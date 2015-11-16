'use strict';

import React from 'react';

let Square = React.createClass({

	render: function() {
		return <div className="square" onClick={this.handleClick}>{this.props.value}</div>;
	}
})

export default Square;
'use strict';

import React from 'react';

let Square = React.createClass({

	render: function() {
		return <div className="square" >{this.props.value}</div>;
	}
})

export default Square;
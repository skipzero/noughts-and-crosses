'use strict';

import React from 'react';

let Square = React.createClass({

	displayName: 'Square'

	, render: function() {
		console.log('Render', this.props);
		return <div className={this.props.value === '' ? 'tile' : 'tile status-' + this.props.value + ' square'} onClick={this.props.clicker}>{this.props.value}</div>
	}
});

export default Square;
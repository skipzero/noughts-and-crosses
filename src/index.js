require('./stylesheets/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './javascripts/gameboard.jsx';

ReactDOM.render(<Game />, document.getElementById('game'));

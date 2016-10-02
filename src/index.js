require('./stylesheets/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './javascripts/board.jsx';
import Store from './javascripts/store.js';

window.store = new Store();

ReactDOM.render(<Game store={window.store} />, document.getElementById('game'));

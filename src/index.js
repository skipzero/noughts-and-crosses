'use strict';
require('./stylesheets/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Game from './javascripts/board.jsx';
import Store from './javascripts/store.js';

const store = new Store();
window.storeG = store;

ReactDOM.render(<Game store={store} />, document.getElementById('game'));

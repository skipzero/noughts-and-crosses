import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import Game from './javascripts/board.jsx';
import Store from './javascripts/store.js';

import registerServiceWorker from './registerServiceWorker';

const store = new Store();
window.storeG = store;

ReactDOM.render(<Game store={store} />, document.getElementById('game'));
registerServiceWorker();

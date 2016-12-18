'use strict';
const jscover = require('node-jscover');
require('./stylesheets/main.scss');

const React = require('react');
const ReactDom = require('react-dom');
const Game = require('./javascripts/board.jsx');
const Store = require('./javascripts/store.js');

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Game from './javascripts/board.jsx';
// import Store from './javascripts/store.js';

const store = new Store();
window.storeG = store;

ReactDOM.render(<Game store={store} />, document.getElementById('game'));

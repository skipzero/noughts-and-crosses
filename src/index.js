import React, { Component } from 'react';
import {render} from 'react-dom';

import './styles/index.css';

import Game from './javascripts/board.jsx';
import Store from './javascripts/store.js';
const store = new Store();
window.storeG = store;

render(<Game store={store} />, document.getElementById('game'));

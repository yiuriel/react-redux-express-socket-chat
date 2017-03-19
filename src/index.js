import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'

import Root from './containers/Root'
import initialState from './initial/state';

const store = createStore(reducer, initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux'

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'

import Root from './containers/Root'
import initialState from './initial/state';

import Storage from './helpers/LocalStorage';

const store = createStore(reducer, initialState);
const history = syncHistoryWithStore(browserHistory, store);

const user = Storage.getItem("user");
if (user === null) {
  browserHistory.push("/");
} else {
  store.dispatch(user);
  browserHistory.push("/chat");
}
 
ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);

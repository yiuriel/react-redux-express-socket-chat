import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import './index.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

import initialState from './initial/state';

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

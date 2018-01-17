import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './views/app';

const initialState = {};

const store = createStore(() => {});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

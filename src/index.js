import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './views/app';

const initialState = {
  theme: 'green',
  feed: {
    articles: [
      {
        description: 'test',
        slug: 'test',
        title: 'Test',
        tags: ['test'],
        createdAt: new Date(),
        updatedAt: new Date(),
        favorited: false,
        favoritesCount: 0,
        author: 'author',
        body: 'test post',
      },
    ],
  },
};

function theme(state = initialState.theme, action) {
  if (action.type !== 'TOGGLE_THEME') {
    return state;
  }

  return state === 'green' ? 'blue' : 'green';
}

function feed(state = initialState.feed) {
  return state;
}

const store = createStore(combineReducers({ theme, feed }));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

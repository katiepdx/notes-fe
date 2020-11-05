import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import store from './store.js'
import { Provider } from 'react-redux'

render(
  // everything in app has access to the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { reducer } from './store/reducer';
import * as serviceWorker from './serviceWorker';

import './index.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Router forceRefresh={false} keyLength={12}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('react-root')
);

if (module.hot) {
  module.hot.accept();
}

serviceWorker.register();

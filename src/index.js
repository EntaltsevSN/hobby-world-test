import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { rootReducers } from './redux/rootReducers'
import createSagaMiddleware from 'redux-saga'
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(
  rootReducers,
  applyMiddleware(saga)
);

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

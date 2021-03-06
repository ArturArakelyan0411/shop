import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';

import rootStore from "./store/configureStore";

import './index.css';

const {store, persistor} = rootStore;

ReactDOM.render(
  <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
);

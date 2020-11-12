import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Root from './Root';


ReactDOM.render(
  <HashRouter basename = {process.env.PUBLIC_URL}>
    <Provider store = { store }>
      <Root />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './scss/index.scss';

// Create redux store
const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <AppRouter />
  </Provider>
), document.getElementById('app'));
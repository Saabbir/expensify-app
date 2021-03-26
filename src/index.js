import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './scss/index.scss';

// Create redux store
const store = configureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(app, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }
});
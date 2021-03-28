import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './scss/index.scss';

// Create redux store
const store = configureStore();

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(app, document.getElementById('app'));
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();

      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });    
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
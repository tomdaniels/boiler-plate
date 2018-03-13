import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/app-router';
import configureStore from './store/configure-store';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/loading-page.js';

const store = configureStore();
const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
       store.dispatch(login(user.uid));
       renderApp();
       if (history.location.pathname === '/') {
           history.push('/dashboard');
       }
   } else {
       store.dispatch(logout());
       renderApp();
       history.push('/');
   }
});
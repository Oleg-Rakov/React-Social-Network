import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


ReactDOM.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <App store={store} />
    </Provider>
  </HashRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);


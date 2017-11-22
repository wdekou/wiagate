import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie'

import './App.scss';
import Routes from './routes/Index';
import configureStore, { history } from './configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;

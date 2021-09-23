import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './AppHeader';
import * as Articles from './articles';
import AppFooter from './AppFooter.js';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducer.js';

const store = createStore(reducer);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f3ef94',
    },
    secondary: {
      main: '#e6e6e6',
    },
  },
  typography: {
    fontFamily: [
      'sans-serif',
    ].join(','),
  },
});

ReactDOM.render(
  <div style={{minHeight: '100vh'}}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <Router>
            <AppHeader/>
            <Articles.Landing/>
            <AppFooter/>
          </Router>
        </React.StrictMode>
      </ThemeProvider>
    </Provider>
  </div>,
  document.getElementById('root'),
);

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
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <AppHeader/>
          <Switch>
            <Route path="/the-evolutionary-origins-of-truth">
              <Articles.TheEvolutionaryOriginsOfTruth/>
            </Route>
            <Route path="/the-true-motivation-of-business">
              <Articles.TheTrueMotivationOfBusiness/>
            </Route>
            <Route path="/speculation-on-paul-vanderklays-god-number-2">
              <Articles.SpeculationOnPaulVanderklaysGodNumber2/>
            </Route>
            <Route path="/scientific-theories-as-truth">
              <Articles.ScientificTheoriesAsTruth/>
            </Route>
            <Route path="/the-virus-of-progress">
              <Articles.TheVirusOfProgress/>
            </Route>
            <Route path="/most-trees-are-blue">
              <Articles.MostTreesAreBlue/>
            </Route>
            <Route path="/introductions">
              <Articles.Introductions/>
            </Route>
            <Route path="/">
              <Articles.Landing/>
            </Route>
          </Switch>
        </Router>
        <AppFooter/>
      </React.StrictMode>
    </ThemeProvider>
  </div>,
  document.getElementById('root'),
);

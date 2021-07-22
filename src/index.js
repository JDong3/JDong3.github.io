import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './AppHeader';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import * as Articles from './articles'
import AppFooter from './AppFooter.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import {Idea} from './colorful-text'

import xd2 from './assets/xd.jpg'

// ideas are red
// information is yellow
// chests are brown
// portals are green
// teleporters are purple


let theme = createMuiTheme({
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
})


ReactDOM.render(
    <div style={{backgroundImage: `url(${xd2})`, minHeight: '100vh'}}>

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
                        <Route path="/">
                            <Articles.Introductions/>
                        </Route>
                    </Switch>
                </Router>
                <AppFooter/>
            </React.StrictMode>
        </ThemeProvider>
  </div>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './index.css';
import AppHeader from './AppHeader.jsx';
import Landing from './articles/landing/Landing.jsx';
import AppFooter from './AppFooter.js';
import {
    HashRouter as Router,
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducer.js';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

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

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.StrictMode>
                <Router>
                    <AppHeader/>
                    <div style={{minHeight: '68vh'}}>
                        <Landing/>
                    </div>
                    <AppFooter/>
                </Router>
            </React.StrictMode>
        </ThemeProvider>
    </Provider>,
);

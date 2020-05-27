import React from 'react';
import ReactDOM from 'react-dom';
import App from './content/App';
import * as serviceWorker from './serviceWorker';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Layout from './layout/Layout';


const generateClassName = createGenerateClassName({
    productionPrefix: 'nano',
    seed: 'embedded'
});

document.body.style.margin = 0;
document.body.style.padding = 0;
document.body.style.color = '#fff';
document.body.style.backgroundColor = '#ed7d0e'


const theme = createMuiTheme({
    palette: {
        primary: {
            // light: '',
            main: '#ed7d0e',
            // dark: '#706f6f',
            // contrastText: ''
        },
        secondary: {
            // light: '#8f7666',
            main: '#3e2516',
            // dark: '',
            // contrastText: ''
        },
        error: {
            main: '#000'
        }
    },
    typography: {
        fontFamily: [
            'Source Sans Pro',
            "sans-serif"
        ],
        fontSize: 13,
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: '#ed7d0e',
                color: '#fff'
            },
            containedSecondary: {
                backgroundColor: '#fde0cc',
                color: '#3e2516',
                '&:hover': {
                    backgroundColor: '#fde0cc90'
                }
            },
            outlinedPrimary: {
                borderColor: '#ed7d0e',
                color: '#ed7d0e'
            },
            outlinedSecondary: {
                borderColor: '#fde0cc',
                color: '#fde0cc',
                '&:hover': {
                    borderColor: '#fde0cc90'
                }
            },
        }
    }
})
console.log(theme)

const app = (
    <StylesProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
            <Layout>
                <App />
            </Layout>
        </MuiThemeProvider>
    </StylesProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

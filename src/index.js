import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Customizing the default theme of material-ui
const theme = createMuiTheme({
	palette: {
		primary: {main: '#75c89f'},
		secondary: {main: '#83a8d4'},
		text: {
			primary: '#272727',
			secondary: '#a5a5a5',
			disabled: '#a5a5a5'
		}
	},
	typography: {
		useNextVariants: true,
		fontSize: 14,
		fontFamily: 'Montserrat, sans-serif',
		button: {
			fontSize: '1rem',
			fontWeight: 700
		}
	},
	shape: {
		borderRadius: 0
	}
});

const app = (
	<MuiThemeProvider theme={theme}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

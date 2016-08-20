import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './app/store/store';
import App from './app/app';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Api from './app/components/api/api';

import './stylesheets/main.scss';

injectTapEventPlugin();

Api.init();

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>, document.querySelector('#app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './app/store/store';

import App from './app/app';

import './stylesheets/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.querySelector('#app')
);

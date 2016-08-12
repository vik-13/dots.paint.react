import React from 'react';
import ReactDOM from 'react-dom';

import store from './app/store/store';

import App from './app/app';

import './stylesheets/main.scss';

ReactDOM.render(<App />, document.querySelector('#app'));

store.dispatch({
    type: 'ADD_LAYOUTS',
    payload: {
        name: 'test',
        anotherAttribute: 2
    }
});

store.dispatch({
    type: 'ADD_LAYOUTS',
    payload: {
        name: 'test 2',
        anotherAttribute: 4
    }
});

console.log(store.getState());
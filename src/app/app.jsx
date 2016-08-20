import React from 'react';
import { connect } from 'react-redux';

import { Router, hashHistory } from 'react-router'
import AppRoutes from './app.routes';

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory} routes={AppRoutes} />
        );
    }
}

export default connect(
    (state) => { return {layouts: state.layouts}; }
)(App);

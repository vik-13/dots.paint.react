import React from 'react';
import { connect } from 'react-redux';

import PaintArea from './components/paint-area/paint-area';
import Tools from './components/controls/tools/tools';
import Output from './components/controls/output/output';
import Layouts from './components/controls/layouts/layouts';

class App extends React.Component {
    render() {
        return (
            <div class="app">
                <PaintArea />
                <Tools />
                <Output />
                <Layouts layouts={this.props.layouts}/>
            </div>
        );
    }
}


export default connect(
    (state) => { return {layouts: state.layouts}; }
)(App);

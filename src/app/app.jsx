import React from 'react';

import PaintArea from './components/paint-area/paint-area';
import Tools from './components/controls/tools/tools';
import Output from './components/controls/output/output';
import Layouts from './components/controls/layouts/layouts';

export default class App extends React.Component {
    render() {
        return (
            <div class="app">
                <PaintArea />
                <Tools />
                <Output />
                <Layouts />
            </div>
        );
    }
}

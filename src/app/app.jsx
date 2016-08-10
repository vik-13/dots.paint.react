import React from 'react';

import PaintArea from './paint-area/paint-area';
import Tools from './controls/tools/tools';
import Output from './controls/output/output';
import Layouts from './controls/layouts/layouts';

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
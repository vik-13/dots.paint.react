import React from 'react';

import PaintArea from '../paint-area/paint-area';
import ToolsList from '../controls/tools-list/tools-list';
import Output from '../controls/output/output';
import LayoutsList from '../controls/layouts-list/layouts-list';



export default class Dashboard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="app">
                <PaintArea />
                <ToolsList />
                <Output />
                <LayoutsList layouts={this.props.layouts}/>
            </div>
        );
    }
}
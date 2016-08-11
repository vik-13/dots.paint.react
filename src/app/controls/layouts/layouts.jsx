import React from 'react';

import DrawLayouts from '../../draw/layouts';

export default class Layouts extends React.Component {
    constructor() {
        super();
        this.state = {
            layouts: DrawLayouts.getLayouts()
        };
    }

    render() {
        return (
            <div class="control layouts">
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <div class="layouts">
                        {this.state.layouts.map(layout => {
                            return <div class="layout">{layout.name}</div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
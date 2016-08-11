import React from 'react';

export default class Layouts extends React.Component {
    constructor() {
        super();
    }

// {this.state.layouts.map(layout => {
//     return <div class="layout">{layout.name}</div>
// })}

    render() {
        return (
            <div class="control layouts">
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <div class="layouts">

                    </div>
                </div>
            </div>
        );
    }
}
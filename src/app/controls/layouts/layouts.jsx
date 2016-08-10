import React from 'react';

export default class Layouts extends React.Component {
    render() {
        return (
            <div class="control layouts">
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <div class="layouts">
                        <div class="layout">Layout 1</div>
                        <div class="layout">Layout 2</div>
                        <div class="layout">Layout 3</div>
                    </div>
                </div>
            </div>
        );
    }
}
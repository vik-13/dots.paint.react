import React from 'react';

import Draw from '../draw/draw';

export default class PaintArea extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        Draw.init();
    }

    handleMouseDown(event) {
        Draw.handleMouseDown(event);
    }

    handleMouseMove(event) {
        Draw.handleMouseMove(event);
    }

    handleMouseUp(event) {
        Draw.handleMouseUp(event);
    }

    render() {
        return (
            <div class="paint-area">
                <canvas id="paint-area"
                        onMouseDown={this.handleMouseDown}
                        onMouseMove={this.handleMouseMove}
                        onMouseUp={this.handleMouseUp}/>
            </div>
        );
    }
}
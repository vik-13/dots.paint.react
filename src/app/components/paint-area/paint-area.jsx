import React from 'react';

import Draw from './draw/draw';

export default class PaintArea extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.draw = new Draw('paint-area');
    }

    handleMouseDown(event) {
        this.draw.handleMouseDown(event);
    }

    handleMouseMove(event) {
        this.draw.handleMouseMove(event);
    }

    handleMouseUp(event) {
        this.draw.handleMouseUp(event);
    }

    render() {
        return (
            <div class="paint-area">
                <canvas id="paint-area"
                        onMouseDown={this.handleMouseDown.bind(this)}
                        onMouseMove={this.handleMouseMove.bind(this)}
                        onMouseUp={this.handleMouseUp.bind(this)}/>
            </div>
        );
    }
}
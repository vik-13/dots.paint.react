import React from 'react';

import Draw from './draw/draw';

export default class PaintArea extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.draw = new Draw('paint-area');
    }

    render() {
        return (
            <div class="paint-area">
                <canvas id="paint-area" width="320" height="200"
                        onMouseDown={(event) => this.draw.handleMouseDown(event)}
                        onMouseMove={(event) => this.draw.handleMouseMove(event)}
                        onMouseUp={(event) => this.draw.handleMouseUp(event)}/>
            </div>
        );
    }
}
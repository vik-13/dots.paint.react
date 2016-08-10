import React from 'react';

export default class PaintArea extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div class="paint-area">
                <canvas id="paint-area" />
            </div>
        );
    }
}
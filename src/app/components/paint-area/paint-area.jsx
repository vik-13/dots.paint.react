import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Draw from './draw/draw';

class PaintArea extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.draw = new Draw('paint-area');
    }

    render() {
        return (
            <div class={this.props.painting === false ? 'paint-area locked' : 'paint-area'}>
                <canvas id="paint-area" width="320" height="200"
                        onMouseDown={(event) => this.draw.handleMouseDown(event)}
                        onMouseMove={(event) => this.draw.handleMouseMove(event)}
                        onMouseUp={(event) => this.draw.handleMouseUp(event)}/>
            </div>
        );
    }
}

export default connect(
    (state) => {return {layouts: state.layouts, painting: state.painting};},
    (dispatch) => bindActionCreators({}, dispatch)
)(PaintArea);
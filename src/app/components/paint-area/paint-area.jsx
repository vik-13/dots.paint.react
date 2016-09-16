import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';

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
                <Paper zDepth={1}>
                    <canvas id="paint-area"
                        width={this.props.painting ? this.props.paintings[this.props.painting].width : 100}
                        height={this.props.painting ? this.props.paintings[this.props.painting].height : 100}
                        onMouseDown={(event) => this.draw.handleMouseDown(event)}
                        onMouseMove={(event) => this.draw.handleMouseMove(event)}
                        onMouseUp={(event) => this.draw.handleMouseUp(event)}/>
                </Paper>
            </div>
        );
    }
}

export default connect(
    (state) => {return {layouts: state.layouts, painting: state.painting, paintings: state.paintings};},
    (dispatch) => bindActionCreators({}, dispatch)
)(PaintArea);
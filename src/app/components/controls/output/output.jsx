import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Output extends React.Component {
    render() {
        return (
            <div class="control output">
                <div class="control-header">
                    <span>Output</span>
                </div>
                <div class="control-body">
                    {this.props.layouts.map((layout, i) => {
                        if (!layout.visibility) {
                            return;
                        } else {
                            return (
                                <div class="layout-block" key={i}>
                                    <div class="layout-body">
                                        {layout.name} (endless: {layout.endless ? 'true' : 'false'}): [
                                        {layout.dots.map((dot) => {
                                            return '{x: ' + dot.x + ', y: ' + dot.y + '}';
                                        })}
                                        ]
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {return {layouts: state.layouts};},
    (dispatch) => bindActionCreators({}, dispatch)
)(Output);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Output extends React.Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    openDialog() {
        this.setState({open: true});
    }

    closeDialog() {
        this.setState({open: false});
    }

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => this.closeDialog()}
            />
        ];
        return (
            <div className="control output">
                <FlatButton label="Show Data" onClick={() => this.openDialog()}/>
                <Dialog
                    title="Output Data"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={() => this.closeDialog()}
                >
                    {this.props.layouts.map((layout, i) => {
                        if (!layout.visibility || !layout.dots) {
                            return '';
                        } else {
                            return (
                                <div className="layout-block" key={i}>
                                    <div className="layout-body">
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
                </Dialog>
            </div>
        );
    }
}

export default connect(
    (state) => {return {layouts: state.layouts};},
    (dispatch) => bindActionCreators({}, dispatch)
)(Output);
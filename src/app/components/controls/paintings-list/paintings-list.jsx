import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { addPainting, removePainting, selectPainting } from './paintings.actions';
import Painting from './painting';

class PaintingsList extends React.Component {
    state = {
        open: false,
        paintingName: ''
    };

    constructor() {
        super();
    }

    choosePainting(event, index) {
        event.preventDefault();
        this.props.selectPainting(index);
    }

    addPainting(event) {
        event.preventDefault();
        this.props.addPainting(new Painting(this.state.paintingName));
        this.closeDialog();
    }

    openDialog(event) {
        event.preventDefault();
        this.setState({open: true});
    }

    closeDialog() {
        this.setState({open: false});
    }

    changePaintingName(event) {
        this.setState({paintingName: event.target.value});
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={() => this.closeDialog()}
            />,
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={() => this.addPainting()}
            />,
        ];

        return (
            <div class="control paintings">
                <div class="control-header">
                    <span>Paintings</span>
                </div>
                <div class="control-body">
                    <ul class="paintings">
                        {this.props.paintings.map((painting, i) => {
                            return  <li class={this.props.file == i ? 'active' : ''} key={i}>
                                        <a href="#" onClick={(event) => this.choosePainting(event, i)}>{painting.name}</a>
                                    </li>
                        })}
                        <div class="add-layout"><a href="#" onClick={(event) => this.openDialog(event)}>add</a></div>
                    </ul>
                </div>
                <Dialog
                    title="Create a new painting"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        value={this.state.paintingName}
                        onChange={(event) => this.changePaintingName(event)}
                        hintText="Please enter some name..."
                        floatingLabelText="Painting name"
                    />
                </Dialog>
            </div>
        );
    }
}

export default connect(
    (state) => { return {paintings: state.paintings, painting: state.painting}; },
    (dispatch) => bindActionCreators({addPainting, removePainting, selectPainting}, dispatch)
)(PaintingsList);
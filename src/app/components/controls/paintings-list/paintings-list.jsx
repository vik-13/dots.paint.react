import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Api from '../../api/api';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { addPainting, removePainting, selectPainting } from './paintings.actions';
import { addLayouts, removeLayouts, addLayout, selectLayout } from '../layouts-list/layouts.actions';
import Painting from './painting';
import Layout from '../../paint-area/draw/layout';

class PaintingsList extends React.Component {
    state = {
        open: false,
        paintingName: ''
    };

    constructor() {
        super();
    }

    choosePainting(event, index) {
        Api.getLayouts(this.props.paintings[index].id).then((snapshot) => {
            let layouts = snapshot.val();
            if (layouts) {
                this.props.addLayouts(layouts);
                this.props.selectLayout(layouts.length - 1);
            }
            this.props.selectPainting(index);
        });
        event.preventDefault();
    }

    addPainting() {
        let painting = new Painting(this.state.paintingName);
        this.props.addPainting(painting);
        this.props.removeLayouts();
        this.props.selectLayout(0);
        this.props.addLayout(new Layout('Layout 1'));
        this.props.selectPainting(this.props.paintings.length);
        this.closeDialog();
    }

    openDialog(event) {
        this.setState({open: true});

        event.preventDefault();
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
                            return  <li class={this.props.painting == i ? 'active' : ''} key={i}>
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
    (state) => { return {paintings: state.paintings, painting: state.painting, layouts: state.layouts}; },
    (dispatch) => bindActionCreators({addPainting, removePainting, selectPainting, addLayouts, removeLayouts, addLayout, selectLayout}, dispatch)
)(PaintingsList);
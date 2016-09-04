import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import SubHeader from 'material-ui/Subheader';

import { addLayout, removeLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock } from './layouts.actions';
import Layout from '../../paint-area/draw/layout';

class LayoutsList extends React.Component {
    state = {
        open: false,
        name: '',
        width: 100,
        height: 100
    };

    constructor() {
        super();
    }

    chooseLayout(event, index) {
        this.props.selectLayout(index);
        event.preventDefault();
    }

    addLayout() {
        this.props.selectLayout(this.props.layouts.length);
        this.props.addLayout(new Layout(this.state.name));
        this.closeDialog();
    }

    removeLayout(event, id) {
        this.props.removeLayout(id);
        if (this.props.layouts.length >= 1) {
            this.props.selectLayout(0);
        }
        event.preventDefault();
    }

    openDialog(event) {
        this.setState({open: true});

        event.preventDefault();
    }

    closeDialog() {
        this.setState({open: false});
    }

    changeName(event) {
        this.setState({name: event.target.value});
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
                onTouchTap={() => this.addLayout()}
            />,
        ];
        return (
            <Paper className={this.props.painting === false ? 'control layouts locked' : 'control layouts'}>
                <div>
                    <SubHeader>Layouts</SubHeader>
                    {this.props.layouts.map((layout, i) => {
                        return(
                            <div className={this.props.layout == i ? 'layout active' : 'layout'} key={i}>
                                <a className="layout-name" href="#" onClick={(event) => this.chooseLayout(event, i)}>{layout.name}</a>
                                <div><Checkbox checked={layout.visibility} onCheck={() => this.props.toggleVisibility(layout.id)}/></div>
                                <a href="#" onClick={(event) => this.removeLayout(event, layout.id)}><CloseIcon /></a>
                            </div>
                        );
                    })}
                    <div class="layout add-layout">
                        <a href="#" onClick={(event) => this.openDialog(event)}>Add layout</a>
                    </div>
                </div>
                <Dialog
                    title="Create a new layout"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        value={this.state.name}
                        onChange={(event) => this.changeName(event)}
                        hintText="Please enter some name..."
                        floatingLabelText="Name"
                    /><br />
                </Dialog>
            </Paper>
        );
    }
}

export default connect(
    (state) => { return {layouts: state.layouts, layout: state.layout, painting: state.painting, paintings: state.paintings}; },
    (dispatch) => bindActionCreators({addLayout, removeLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock}, dispatch)
)(LayoutsList);
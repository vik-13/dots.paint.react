import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

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
        event.preventDefault();
        this.props.selectLayout(index);
    }

    addLayout() {
        this.props.selectLayout(this.props.layouts.length);
        this.props.addLayout(new Layout(this.state.name));
        this.closeDialog();
    }

    removeLayout(event, id) {
        event.preventDefault();
        this.props.removeLayout(id);
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
            <div class={this.props.painting === false ? 'control layouts locked' : 'control layouts'}>
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <ul class="layouts">
                        {this.props.layouts.map((layout, i) => {
                            return <li class={this.props.layout == i ? 'active' : ''} key={i}>
                                    <a href="#" onClick={(event) => this.chooseLayout(event, i)}>{layout.name}</a>
                                    <span><input type="checkbox" checked={layout.endless} onChange={this.props.toggleEndless.bind(this, layout.id)}/></span>
                                    <span><input type="checkbox" checked={layout.visibility} onChange={this.props.toggleVisibility.bind(this, layout.id)}/></span>
                                    <a href="#" onClick={(event) => this.removeLayout(event, layout.id)}>x</a>
                                </li>
                        })}
                        <div class="add-layout"><a href="#" onClick={(event) => this.openDialog(event)}>add</a></div>
                    </ul>
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
            </div>
        );
    }
}

export default connect(
    (state) => { return {layouts: state.layouts, layout: state.layout, painting: state.painting, paintings: state.paintings}; },
    (dispatch) => bindActionCreators({addLayout, removeLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock}, dispatch)
)(LayoutsList);
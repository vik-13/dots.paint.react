import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';

import Api from '../../api/api';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import SubHeader from 'material-ui/Subheader';
import ColorLens from 'material-ui/svg-icons/image/color-lens';


import { addPainting, removePainting, selectPainting } from './paintings.actions';
import { addLayouts, removeLayouts, addLayout, selectLayout } from '../layouts-list/layouts.actions';
import Painting from './painting';
import Layout from '../../paint-area/draw/layout';

class PaintingsList extends React.Component {
    state = {
        open: false,
        name: '',
        width: 100,
        height: 100
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
        this.props.toggle();
        event.preventDefault();
    }

    addPainting() {
        let painting = new Painting(this.state.name, this.state.width, this.state.height);
        this.props.addPainting(painting);
        this.props.removeLayouts();
        this.props.selectLayout(0);
        this.props.addLayout(new Layout('Layout 1'));
        this.props.selectPainting(this.props.paintings.length);
        this.closeDialog();
    }

    openDialog() {
        this.setState({open: true});
        this.props.toggle();
    }

    closeDialog() {
        this.setState({open: false});
    }

    changeName(event) {
        this.setState({name: event.target.value});
    }

    changeWidth(event) {
        this.setState({width: event.target.value});
    }

    changeHeight(event) {
        this.setState({height: event.target.value});
    }

    signOut() {
        Api.signOut();
        hashHistory.push('/');
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

        const drawerStyle = {
            top: '64px'
        };
        return (
            <div>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.props.open}
                    containerStyle={drawerStyle}
                    onRequestChange={(open) => this.props.toggle()}
                >
                    <List className="paintings">
                        <SubHeader>Paintings</SubHeader>
                        {this.props.paintings.map((painting, i) => {
                            return (
                                <ListItem primaryText={painting.name}
                                          className={this.props.painting == i ? 'active' : ''}
                                          key={i}
                                          leftIcon={<ColorLens />}
                                          onClick={(event) => this.choosePainting(event, i)} />
                            );
                        })}
                    </List>
                    <Divider />
                    <List>
                        <ListItem primaryText="Add a new painting"
                                  className="add-painting-button"
                                  onClick={() => this.openDialog()} />
                    </List>
                    <Divider />
                    <List>
                        <ListItem primaryText="Sign Out"
                                  className="sign-out"
                                  onClick={() => this.signOut()} />
                    </List>
                </Drawer>

                <Dialog
                    title="Create a new painting"
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
                    <TextField
                        type="number"
                        value={this.state.width}
                        onChange={(event) => this.changeWidth(event)}
                        hintText="Please enter width..."
                        floatingLabelText="Width"
                    /><br />
                    <TextField
                        type="number"
                        value={this.state.height}
                        onChange={(event) => this.changeHeight(event)}
                        hintText="Please enter height..."
                        floatingLabelText="Height"
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
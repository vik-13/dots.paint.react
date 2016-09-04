import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Api from '../api/api';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import PaintArea from '../paint-area/paint-area';
import ToolsList from '../controls/tools-list/tools-list';
import Output from '../controls/output/output';
import LayoutsList from '../controls/layouts-list/layouts-list';
import PaintingsList from '../controls/paintings-list/paintings-list';


class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    save = () => {
        Api.storePaintings(this.props.paintings);
        Api.storeLayouts(this.props.layouts, this.props.paintings[this.props.painting].id);
    };

    render() {
        const appBarStyle = {
            zIndex: 10000
        };
        return (
            <div class="app">
                <AppBar
                    title="Title"
                    style={appBarStyle}
                    iconElementRight={<FlatButton label="Save" onClick={this.save} />}
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <div class="app-content">
                    <PaintArea />
                    <ToolsList />
                    <PaintingsList open={this.state.open} toggle={this.handleToggle.bind(this)}/>
                    <LayoutsList layouts={this.props.layouts}/>
                    <Output />
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {return {layouts: state.layouts, paintings: state.paintings, painting: state.painting};},
    (dispatch) => bindActionCreators({}, dispatch)
)(Dashboard);
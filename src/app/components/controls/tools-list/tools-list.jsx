import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/Paper';
import LineIcon from 'material-ui/svg-icons/action/timeline';
import MoveIcon from 'material-ui/svg-icons/action/open-with';
import SplitIcon from 'material-ui/svg-icons/editor/vertical-align-center';
import RemoveIcon from 'material-ui/svg-icons/action/delete';
import {red500, grey500} from 'material-ui/styles/colors';

import switchTool from './tools-list.actions';

class ToolsList extends React.Component {

    switchTool(event, to) {
        event.preventDefault();
        this.props.switchTool(to);
    }

    render() {
        return (
            <Paper className={this.props.painting === false ? 'control tools locked' : 'control tools'}>
                <div className="tool" onClick={(event) => this.switchTool(event, 'line')}>
                    <LineIcon color={this.props.tool == 'line' ? red500 : grey500} />
                </div>
                <div className="tool" onClick={(event) => this.switchTool(event, 'split')}>
                    <SplitIcon color={this.props.tool == 'split' ? red500 : grey500} />
                </div>
                <div className="tool" onClick={(event) => this.switchTool(event, 'move')}>
                    <MoveIcon color={this.props.tool == 'move' ? red500 : grey500} />
                </div>
                <div className="tool" onClick={(event) => this.switchTool(event, 'remove')}>
                    <RemoveIcon color={this.props.tool == 'remove' ? red500 : grey500} />
                </div>
            </Paper>
        );
    }
}

export default connect(
    (state) => { return {tool: state.tool, painting: state.painting}; },
    (dispatch) => bindActionCreators({switchTool}, dispatch)
)(ToolsList);
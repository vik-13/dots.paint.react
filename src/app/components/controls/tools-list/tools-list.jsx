import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import switchTool from './tools-list.actions';

class ToolsList extends React.Component {

    switchTool(event, to) {
        event.preventDefault();
        this.props.switchTool(to);
    }

    render() {
        return (
            <div class="control tools">
                <div class="control-header">
                    <span>Tool</span>
                </div>
                <div class="control-body">
                    <ul>
                        <li class={this.props.tool == 'move' ? 'active' : ''}>
                            <a href="#" onClick={(event) => this.switchTool(event, 'move')}>move</a>
                        </li>
                        <li class={this.props.tool == 'line' ? 'active' : ''}>
                            <a href="#" onClick={(event) => this.switchTool(event, 'line')}>line</a>
                        </li>
                        <li class={this.props.tool == 'split' ? 'active' : ''}>
                            <a href="#" onClick={(event) => this.switchTool(event, 'split')}>split</a>
                        </li>
                        <li class={this.props.tool == 'remove' ? 'active' : ''}>
                            <a href="#" onClick={(event) => this.switchTool(event, 'remove')}>remove</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => { return {tool: state.tool}; },
    (dispatch) => bindActionCreators({switchTool}, dispatch)
)(ToolsList);
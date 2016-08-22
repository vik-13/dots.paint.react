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
                        <li>
                            <a href="#" onClick={(event) => this.switchTool(event, 'move')}>move</a>
                        </li>
                        <li>
                            <a href="#" onClick={(event) => this.switchTool(event, 'line')}>line</a>
                        </li>
                        <li>
                            <a href="#" onClick={(event) => this.switchTool(event, 'split')}>split</a>
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
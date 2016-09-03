import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FilesList extends React.component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="control files">
                <div class="control-header">
                    <span>Files</span>
                </div>
                <div class="control-body">
                    <ul class="files">
                        {this.props.files.map((layout, i) => {
                            return <li class={this.props.layout == i ? 'active' : ''} key={i}>
                                <a href="#" onClick={this.chooseLayout.bind(this, i)}>{layout.name}</a>
                                <span><input type="checkbox" defaultChecked={layout.endless} onClick={this.props.toggleEndless.bind(this, layout.id)}/></span>
                                <span><input type="checkbox" defaultChecked={layout.visibility} onClick={this.props.toggleVisibility.bind(this, layout.id)}/></span>
                            </li>
                        })}
                        <div class="add-layout"><a href="#" onClick={this.addLayout.bind(this)}>add</a></div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => { return {layouts: state.layouts, layout: state.layout}; },
    (dispatch) => bindActionCreators({}, dispatch)
)(FilesList);
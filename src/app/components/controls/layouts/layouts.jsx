import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLayout } from './layouts.actions';

class Layouts extends React.Component {
    constructor() {
        super();
    }

    chooseLayout(layout) {
        console.log(layout);
    }

    addLayout() {
        this.props.addLayout('bla-bla');
    }

    render() {
        return (
            <div class="control layouts">
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <div class="layouts">
                        {this.props.layouts.map((layout, i) => {
                            return <div class="layout" key={i}>
                                    <a href="#" onClick={this.chooseLayout.bind(this, layout)}>{layout.name}</a>
                                </div>
                        })}
                        <div class="add-layout"><a href="#" onClick={this.addLayout.bind(this)}>add</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => { return {layouts: state.layouts}; },
    (dispatch) => bindActionCreators({addLayout}, dispatch)
)(Layouts);
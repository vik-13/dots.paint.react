import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock } from './layouts.actions';
import Layout from '../../paint-area/draw/layout';

class LayoutsList extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        if (!this.props.layouts.length) {
            this.props.selectLayout(0);
            this.props.addLayout(new Layout('Layout 1'));
        }
    }

    chooseLayout(index) {
        this.props.selectLayout(index);
    }

    addLayout() {
        this.props.selectLayout(this.props.layouts.length);
        this.props.addLayout(new Layout('bla-bla'));
    }

    render() {
        return (
            <div class="control layouts">
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <ul class="layouts">
                        {this.props.layouts.map((layout, i) => {
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
    (dispatch) => bindActionCreators({addLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock}, dispatch)
)(LayoutsList);
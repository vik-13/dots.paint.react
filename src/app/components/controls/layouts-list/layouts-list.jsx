import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addLayout, removeLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock } from './layouts.actions';
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

    chooseLayout(event, index) {
        event.preventDefault();
        this.props.selectLayout(index);
    }

    addLayout(event) {
        event.preventDefault();
        this.props.selectLayout(this.props.layouts.length);
        this.props.addLayout(new Layout('bla-bla'));
    }

    removeLayout(event, id) {
        event.preventDefault();
        this.props.removeLayout(id);
    }

    render() {
        return (
            <div class={!this.props.file ? 'control layouts locked' : 'control layouts'}>
                <div class="control-header">
                    <span>Layouts</span>
                </div>
                <div class="control-body">
                    <ul class="layouts">
                        {this.props.layouts.map((layout, i) => {
                            return <li class={this.props.layout == i ? 'active' : ''} key={i}>
                                    <a href="#" onClick={(event) => this.chooseLayout(event, i)}>{layout.name}</a>
                                    <span><input type="checkbox" defaultChecked={layout.endless} onClick={this.props.toggleEndless.bind(this, layout.id)}/></span>
                                    <span><input type="checkbox" defaultChecked={layout.visibility} onClick={this.props.toggleVisibility.bind(this, layout.id)}/></span>
                                    <a href="#" onClick={(event) => this.removeLayout(event, layout.id)}>x</a>
                                </li>
                        })}
                        <div class="add-layout"><a href="#" onClick={(event) => this.addLayout(event)}>add</a></div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => { return {layouts: state.layouts, layout: state.layout, file: state.file}; },
    (dispatch) => bindActionCreators({addLayout, removeLayout, selectLayout, toggleEndless, toggleVisibility, toggleLock}, dispatch)
)(LayoutsList);
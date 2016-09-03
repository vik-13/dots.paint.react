import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PaintingsList extends React.component {
    constructor() {
        super();
    }

    choosePainting(event) {
        event.preventDefault();
    }

    addPainting(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div class="control painting">
                <div class="control-header">
                    <span>Paintings</span>
                </div>
                <div class="control-body">
                    <ul class="Paintings">
                        {this.props.paintings.map((painting, i) => {
                            return  <li class={this.props.file == i ? 'active' : ''} key={i}>
                                        <a href="#" onClick={(event) => this.choosePainting(event, i)}>{painting.name}</a>
                                    </li>
                        })}
                        <div class="add-layout"><a href="#" onClick={(event) => this.addPainting(event)}>add</a></div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => { return {paintings: state.paintings, painting: state.painting}; },
    (dispatch) => bindActionCreators({}, dispatch)
)(FilesList);
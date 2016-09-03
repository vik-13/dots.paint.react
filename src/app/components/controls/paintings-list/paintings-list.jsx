import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPainting, removePainting } from './paintings.actions';

class PaintingsList extends React.Component {
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
            <div class="control paintings">
                <div class="control-header">
                    <span>Paintings</span>
                </div>
                <div class="control-body">
                    <ul class="paintings">
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
    (dispatch) => bindActionCreators({addPainting, removePainting}, dispatch)
)(PaintingsList);
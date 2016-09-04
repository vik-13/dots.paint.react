import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Api from '../../api/api';

class Save extends React.Component {
    constructor() {
        super();
    }

    save() {
        Api.storePaintings(this.props.paintings);
        Api.storeLayouts(this.props.layouts, this.props.paintings[this.props.painting].id);
    }

    render() {
        return (
            <div class="control save">
                <a href="#" onClick={(event) => this.save(event)}>Save</a>
            </div>
        );
    }
}

export default connect(
    (state) => {return {layouts: state.layouts, paintings: state.paintings, painting: state.painting};},
    (dispatch) => bindActionCreators({}, dispatch)
)(Save);
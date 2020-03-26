import React, {Component} from 'react';

export default class EditButton extends Component {
    handlerEdit = () => {
        this.props.handlerEdit()
    }
    render() {
        return(
            <button type="button" className="btn btn-primary" onClick={this.handlerEdit}>
                <i className="fa fa-edit"></i>
            </button>
        )
    }
}
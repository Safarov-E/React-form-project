import React, {Component} from 'react';

export default class EditButton extends Component {
    render() {
        console.log(this.props.handleEdit)
        return(
            <button type="button" className="btn btn-primary">
                <i className="fa fa-edit"></i>
            </button>
        )
    }
}
import React, {Component} from 'react';
import classes from './delete-checkbox.module.css'

export default class DeleteCheckbox extends Component {
    render() {
        const {onDeleted} = this.props
        return(
            <input type="checkbox" className={classes.inputCheckbox} onClick={onDeleted}/>
        )
    }
}
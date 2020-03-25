import React, {Component} from 'react';
import classes from './add-worker.module.css'

export default class AddWorker extends Component {
    handlerClick = () => {
        this.props.handlerAdd()
    }
    render() {
        return(
            <button className={classes.btn_add} onClick={this.handlerClick}>Добавить сотрудника</button>
        )
    }
}
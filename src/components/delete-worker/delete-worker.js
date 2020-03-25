import React, {Component} from 'react';
import classes from './delete-worker.module.css'

export default class DeleteWorker extends Component {
    // wrapperClick = () => {
    //     this.props.handlerDelete()
    //     console.log(this.props.handlerDelete())
    // }
    render() {
        return(
            <button className={classes.btn_delete}>Удалить сотрудника</button>
        )
    }
}
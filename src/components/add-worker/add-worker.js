import React, {Component} from 'react';

export default class AddWorker extends Component {
    handlerClick = () => {
        this.props.handlerAdd()
    }
    render() {
        return(
            <button className="btn btn-success" onClick={this.handlerClick}>Добавить сотрудника</button>
        )
    }
}
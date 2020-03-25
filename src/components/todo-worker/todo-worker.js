import React, {Component} from 'react';
import classes from './todo-worker.module.css';
import DeleteCheckbox from '../delete-checkbox';

export default class TodoWorker extends Component {
    render() {
        const {todoWorker, onDeleted} = this.props;
        const elements = todoWorker.map((item) => {
            return (
                <li key={item.id} className={classes.todoWorker} >
                    <DeleteCheckbox onDeleted={() => onDeleted(item.id)}/>
                    <p><span>Фамилия:</span> {item.name}</p>
                    <p><span>Должность:</span> {item.position}</p>
                    <p><span>Дата рождения:</span> {item.date}</p>
                    <p><span>Пол:</span> {item.sex}</p>
                    <p><span>Уволен:</span> {item.status ? 'Да' : 'Нет'}</p>
                </li>
            )
        })
        return(
            <>
                <h2>Список сотрудников</h2>
                <ul>
                    {elements}
                </ul>
            </>
        )
    }
}
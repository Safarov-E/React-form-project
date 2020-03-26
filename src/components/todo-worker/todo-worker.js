import React, {Component} from 'react';
import classes from './todo-worker.module.css';
import WorkersList from '../workers-list';
import DeleteCheckbox from '../delete-checkbox';

export default class TodoWorker extends Component {
    state = {
        edit: false
    }
    render() {
        const {todoWorker, onDeleted, handleEdit} = this.props
        return(
            <>
                <h2>Список сотрудников</h2>
                <div>
                    {
                        todoWorker.map((item) => (
                                <div key={item.id} className={classes.todoWorker} >
                                    <DeleteCheckbox onDeleted={() => onDeleted(item.id)}/>
                                    <WorkersList
                                        name={item.name}
                                        id={item.id}
                                        position={item.position}
                                        date={item.date}
                                        sex={item.sex}
                                        handleEdit={handleEdit}
                                        handlerEdit={this.handlerEdit}
                                        status={item.status}
                                    />
                                </div>
                            ))
                        }
                </div>
            </>
        )
    }
}
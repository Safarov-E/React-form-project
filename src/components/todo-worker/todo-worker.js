import React, {Component} from 'react';
import classes from './todo-worker.module.css';
import WorkersList from '../workers-list';
import DeleteCheckbox from '../delete-checkbox';
import EditButton from '../edit';

export default class TodoWorker extends Component {
    state = {
        edit: false
    }
    handlerAdd = () => {
        this.setState(({edit}) => {
            return {
                edit: true
            }
        })
    }
    visible = (value) => {
        return this.setState({
            edit: value
        })
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
                                    <EditButton handlerEdit={this.handlerAdd}/>
                                    <WorkersList
                                        name={item.name}
                                        id={item.id}
                                        position={item.position}
                                        date={item.date}
                                        sex={item.sex}
                                        handleEdit={handleEdit}
                                        handlerEdit={this.handlerEdit}
                                        status={item.status}
                                        modal={this.visible}
                                        modal1={this.state.edit}
                                    />
                                </div>
                            ))
                        }
                </div>
            </>
        )
    }
}
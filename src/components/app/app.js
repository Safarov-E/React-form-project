import React, {Component} from 'react';
import classes from './app.module.css';

import Form from '../form';
import DeleteWorker from '../delete-worker';
import AddWorker from '../add-worker';
import TodoWorker from '../todo-worker';

export default class App extends Component {
    state = {
        todoWorker: [{   
            name: 'Дмитриев Александр Фёдорович', 
            position: 'Программист', 
            date: '1990-02-14', 
            sex: 'Мужской',
            status: false ? 'Да' : 'Нет',
            id: 1
        }],
        visible: false,
        del: false
    }
    handlerAdd = () => {
        this.setState(({visible}) => {
            return {
                visible: true
            }
        })
    }
    addWorker = (workers) => {
        this.setState(({todoWorker}) => {
            const newTodoWorker = [...todoWorker, workers]
            return {
                todoWorker: newTodoWorker
            }
        })
    }
    handlerDelete = (id) => {
        this.setState(({todoWorker}) => {
            const idx = todoWorker.findIndex((el) => el.id === id)
            const newArray = [
                ...todoWorker.slice(0, idx),
                ...todoWorker.slice(idx + 1)
            ]
            return {
                todoWorker: newArray
            }
        })
        this.setState({
            del: !this.state.del
        })
    }
    visible = (value) => {
        return this.setState({
            visible: value
        })
    }
    handleEdit = (id, name, position, date, sex, status) => {
        const newArray = this.state.todoWorker.map((todo) => {
            if(todo.id === id) {
                todo.name = name;
                todo.position = position;
                todo.date = date;
                todo.sex = sex;
                todo.status = status;
            }
            return todo;
        })
        this.setState({todoWorker: newArray})
    }
    render() {
        const {visible, todoWorker} = this.state;
        return(
            <>
                <div className={classes.btn_primary}>
                    <AddWorker handlerAdd={this.handlerAdd}/>
                    <DeleteWorker />
                </div>
                <Form modal={this.visible} modal1={visible} addWorker1={this.addWorker}/>
                <TodoWorker handleEdit={this.handleEdit} onDeleted={this.handlerDelete} todoWorker={todoWorker}/>

            </>
        )
    }
}
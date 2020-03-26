import React, {Component} from 'react';

export default class WorkersList extends Component {
    constructor(){
        super();
        this.state = {
            editing: true
        };
        this.textName = React.createRef();
        this.textPosition = React.createRef();
        this.textDate = React.createRef();
        this.textSex = React.createRef();
        this.textStatus = React.createRef();
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.textName.current.value)
        this.props.handleEdit(
            this.props.id, 
            this.textName.current.value,
            this.textPosition.current.value, 
            this.textDate.current.value, 
            this.textSex.current.value, 
            this.textStatus.current.value);
    }
    renderForm = () => {
        const {name, position, date, sex, status} = this.props;
        return (
            <form  onSubmit={this.handleSubmit} className="todo-list-item">
                <p><span>Фамилия:</span> <input type="text"
                        ref={this.textName}
                        className="todo-list-item-label form-control form-input" 
                        defaultValue={name} /></p>
                <p><span>Должность:</span>  <input type="text"
                        ref={this.textPosition}
                        className="todo-list-item-label form-control form-input" 
                        defaultValue={position} /></p>
                <p><span>Дата рождения:</span>  <input type="text"
                        ref={this.textDate}
                        className="todo-list-item-label form-control form-input" 
                        defaultValue={date} /></p>
                <p><span>Пол:</span>  <input type="text"
                        ref={this.textSex}
                        className="todo-list-item-label form-control form-input" 
                        defaultValue={sex} /></p>
                <p><span>Уволен:</span>  <input type="text"
                        ref={this.textStatus}
                        className="todo-list-item-label form-control form-input" 
                        defaultValue={status} /></p>
                <button type="submit"
                        className="btn btn-outline-primary btn-sm">
                    <i className="fa fa-floppy-o" /> Сохранить
                </button>
            </form>
        )
    }
    render() {
        const {name, position, date, sex, status} = this.props;
        return(
            <>
                <p><span>Фамилия:</span> {name}</p>
                <p><span>Должность:</span> {position}</p>
                <p><span>Дата рождения:</span> {date}</p>
                <p><span>Пол:</span> {sex}</p>
                <p><span>Уволен:</span> {status}</p>
            </>
        )
    }
}
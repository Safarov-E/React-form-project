import React, {Component} from 'react';
import classes from './form.module.css'

export default class Form extends Component {
    state = {
        name: '', 
        position: '', 
        date: '', 
        sex: '',
        status: false,
        display: 'none',
        isVisible: false
    }
    getId = () => {
        this._nextId = this._nextId || 2;
        return ++this._nextId;
    }
    handlerChangeInput = (event) => {
        this.setState({name: event.target.value})
    }
    handlerChangeSelect = (event) => {
        this.setState({position: event.target.value})
    }
    handlerChangeDate = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    handlerChangeInputRadio = (event) => {
        this.setState({
            sex: event.target.value
        })
    }
    handlerChangeInputСheckbox = (event) => {
        this.setState({
            status: event.target.checked
        })
    }
    addingAnEmployee = (event) => {
        event.preventDefault();
        const {name, position, date, sex, status} = this.state;

        if(name !== '' && position !== '') {
            const item = {
                name, 
                position, 
                date,
                sex,
                status,
                id: this.getId()
            }
            this.props.addWorker1(item)
        }
        this.setState({
            name: '',
            position: '',
            date: '',
            sex: false,
            status: false
        })
    }
    closeModal = () => {
        this.setState({display: 'none', isVisible: false})
    }
    // componentWillReceiveProps(nextProps){
    //     if (nextProps.isFavourited!== this.props.isFavourited) {
    //         this.setState({ isFavourited: nextProps.isFavorited})
    //     }
    // }
    render() {
        const {name, date, position, sex, status, display} = this.state;
        if(this.props.modal1){
            this.setState({display: 'block'})
            this.props.modal(this.state.isVisible)
        }
        return(
            <div className={classes.windowModal} style={{display: display}}>
                <div className={classes.container_form}>
                    <p className={classes.close} onClick={this.closeModal}>&#10006;</p>
                    <form className={classes.form_group} onSubmit={this.addingAnEmployee}>
                        <label htmlFor="fname">Ф.И.О</label>
                        <input className={classes.form_group_input} type="text" id="fname" value={name} placeholder="Ваше Ф.И.О" onChange={this.handlerChangeInput}/>
                        <label htmlFor="position">Должность</label>
                        <select id="position" value={position} onChange={this.handlerChangeSelect}>
                            <option value="Программист">Программист</option>
                            <option value="Менеджер">Менеджер</option>
                            <option value="Бухгалтер">Бухгалтер</option>
                            <option value="Тестировщик">Тестировщик</option>
                            <option value="Аналитик">Аналитик</option>
                        </select>
                        <label htmlFor="date">Дата рождения</label>
                        <input id="date" type="date" value={date} onChange={this.handlerChangeDate}></input>
                        <label htmlFor="sex">Пол</label>
                        <div className={classes.form_inputRadio}>
                            Мужской: <input id="sex" type="radio" checked={sex === 'Мужской'} name="sex" onChange={this.handlerChangeInputRadio} value="Мужской"/>
                            Женский: <input type="radio" checked={sex === 'Женский'} name="sex" onChange={this.handlerChangeInputRadio} value="Женский"/>
                        </div>
                        <label htmlFor="status">Статус</label>
                        <div className={classes.form_inputСheckbox}>
                            Уволен: <input id="status" type="checkbox" checked={status} onChange={this.handlerChangeInputСheckbox}/>
                        </div>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        )
    }
}
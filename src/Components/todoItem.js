import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    taskCompleted = () => {
        return {
            textDecoration : this.props.todo.completed ? 'line-through' :'none'
        }
    }
    buttonChecked = () => {
        return{
            backgroundColor : this.props.todo.completed ? '#ea4689' :'hsl(218, 28%, 13%)'
        }
    }
    
    render(){
        const { id, title } = this.props.todo;
        return (
            <div className="todocontainer">
                <div className="todobox">
                    <span className="checkbutton" style={this.buttonChecked()} onClick={this.props.markCompleted.bind(this, id)}></span>
                    <p style={this.taskCompleted()}>
                        { title }
                    </p>
                    <i className="fas fa-trash-alt" onClick={this.props.delTodo.bind(this, id)} ></i>
                </div>
            </div>
        )
    }
}

//proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
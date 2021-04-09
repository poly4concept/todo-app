import React, { Component } from 'react';
import TodoItem from "./todoItem";
import PropTypes from 'prop-types';
class Todo extends Component {
    render(){
        return this.props.todos.map((todo)=>(
           <TodoItem key={todo.id} todo={todo} markCompleted={this.props.markCompleted} delTodo={this.props.delTodo}/>
        ))
    }
}

//proptypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo;
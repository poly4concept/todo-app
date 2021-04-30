import React, { Component } from 'react';
import Form from "./Components/form";
import Todo from "./Components/todos";
import { nanoid } from "nanoid" ;
import './index.css';

class App extends Component {
    state = {
        todos: [
            {
                id: nanoid(),
                title: 'Take out trash',
                completed: false
            },
            {
                id: nanoid(),
                title: 'Listening to mufti',
                completed: false
            },
            {
                id: nanoid(),
                title: 'Coding',
                completed: true
            },
        ]
    }
    

//HeadingText
    
//Toggle Complete
    markCompleted = (id) => {
        this.setState({todos: this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        }) })
    }
//Delete Todo Items
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    }
//Add Todo Items
    Form = (title) => {
        const newTodo = {
            id: nanoid(),
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    }
    render(){
        return (
            <div className="todoapp">
                <Form Form={this.Form}/>
                <h3>Tasks - 3</h3>
                <Todo  todos={this.state.todos} markCompleted={this.markCompleted} delTodo={this.delTodo} />
            </div>
        )
    }
}
export default App;

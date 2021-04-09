import React, { Component } from 'react';


class Form extends Component {
    state = {
        title: ''
    }

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.clearRef = React.createRef()
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.Form(this.state.title)
        this.setState({ title: '' });
    }

    focus = () => {
        this.inputRef.current.focus()
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}> 
                <input
                    type="text"
                    name="title"
                    placeholder="Add a task"
                    className="addtask"
                    value={this.state.value}
                    onChange={this.onChange} 
                    ref={this.inputRef}
                >
                </input>
                <i className="fas fa-plus" onClick={this.focus}></i>
                <input type="submit" value="submit" className="submitBtn"></input>
            </form>
        )
    }
}
export default Form;
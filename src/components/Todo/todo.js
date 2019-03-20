import React, { Component } from 'react';


class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todoT,
        }
    }
    render() {
        return (
            <div>
            <h1>Sending data as objects</h1>
                <h4>This is {this.state.todo}</h4>
            </div>
        );
    }
}
export default Todo;
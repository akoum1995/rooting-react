import React, { Component } from 'react';


class TodoLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: props.match.params.todoId,
        }
        console.log(this.state);
    }
    render() {
        return (
            <div>
            <h1>Sending data in path or Url</h1>
                <h4>This is {this.state.todo}</h4>
            </div>
        );
    }
}
export default TodoLink;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: ['todo 1 ', 'todo 2 ', 'todo 3 ', 'todo 4 ', 'todo 5 ', 'todo 6 ', 'todo 7 ', 'todo 8 ']
        }
    }
    render() {
        return (
            <div>
                <h1>This is the List of Todos</h1>
                <table className="table">
                <tbody>
                    {this.state.todos.map( (todo,i) => {
                        return (
                            <tr key={i}>
                                  <td>{todo}</td>
                                  <td>Send as object : <Link  to={{ pathname: '/todo', chosenTodo: todo }} >Details one</Link></td>
                                  <td>Send in path or url : <Link  to={'/todoLink/' + todo}>Details two</Link></td>
                                </tr>)}
                          )}
                          </tbody>
                </table>
            </div>
        );
    }
}
export default Todos;

import React, { Component } from 'react';
import './App.css';
import { Switch, Route,Redirect } from "react-router-dom";
import Home from './components/Home/home';
import Todos from './components/Todos/todos';
import Navbar from './components/Navbar/navbar';
import TodoLink from './components/Todo/todoLink';
import Todo from './components/Todo/todo';





class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/todos" component={Todos} />
          <Route path="/todo" component={Todo} />
          <Route path="/todoLink/:todoId" component={TodoLink} />
          <Redirect from="/" to="/home" component={Home}/>
        </Switch>
      </div>
      </div>
    );
  }
}

export default App;

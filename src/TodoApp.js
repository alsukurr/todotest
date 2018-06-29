import React, { Component } from 'react'
import ShowTodos from './components/ShowTodos'
import AddTodo from './components/AddTodo'
import axios from "axios";
import styles from "./styles/main.css"


class TodoApp extends Component {
  state = {
    todo: '',
    todos: []
  }

  clearInput = () => {
    this.setState({ todo: '' })
  }

  refresh = () => {
    axios.get("/todos").then(res => {
      if (res.data.todos) {
        this.setState({ todos: res.data.todos });
      }
    });
  };

  addTodo = () => {
    axios.post(`/todos/${this.state.todo}`).then(this.refresh);
    this.clearInput();
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value
    })
  }

  componentDidMount() {
    this.refresh()
  }

  render() {
    return (
      <div>
        <AddTodo
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          todo={this.state.todo}
        />
        <ShowTodos todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp

import React, { Component } from "react";

import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  createTodo(newTask) {
    this.setState({
      todos: [...this.state.todos, newTask]
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  updateTodo(id, value) {
    const updateTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: value };
      }
      return todo;
    });
    this.setState({
      todos: updateTodo
    });
  }

  completeTodo(id) {
    const updateTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: true };
      }
      return todo;
    });
    this.setState({
      todos: updateTodo
    });
  }

  render() {
    const todo = this.state.todos.map(todo => (
      <Todo
        task={todo.task}
        key={todo.id}
        id={todo.id}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
        isComplete={todo.isComplete}
        completeTodo={this.completeTodo}
      />
    ));
    return (
      <div className='TodoList'>
        <h1>
          Todo List <span>A simple React Todo List App</span>
        </h1>
        <NewTodoForm createTodo={this.createTodo} />
        <ul>{todo}</ul>
      </div>
    );
  }
}

export default TodoList;

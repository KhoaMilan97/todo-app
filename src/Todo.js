import React, { Component } from "react";

import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    this.setState({
      isEditing: true
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  }

  handleComplete() {
    this.props.completeTodo(this.props.id);
  }

  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div className='Todo'>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='task'
              id='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Update</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className='Todo'>
          <li
            onClick={this.handleComplete}
            className={
              this.props.isComplete ? "Todo-task completed" : "Todo-task"
            }
          >
            {this.props.task}
          </li>
          <div>
            <button onClick={this.toggleForm}>EDIT</button>
            <button onClick={this.handleRemove}>X</button>
          </div>
        </div>
      );
    }
    return result;
  }
}

export default Todo;

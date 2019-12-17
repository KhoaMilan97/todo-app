import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), isComplete: false });
    this.setState({
      task: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='task'>New Todo</label>
          <input
            type='text'
            name='task'
            id='task'
            value={this.state.task}
            onChange={this.handleChange}
            placeholder='New Todo'
          />
          <button>Add Todo</button>
        </div>
      </form>
    );
  }
}

export default NewTodoForm;

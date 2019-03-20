import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  completedTask = (id, completed) => {
    this.props.completeTheTask(id);
  };
  render() {
    const { id, task, completed } = this.props.itemList;

    return (
      <ul>
        <li onClick={this.completedTask.bind(this, id, completed)}> {task} </li>
      </ul>
    );
  }
}

Todo.propTypes = {
  itemList: PropTypes.object.isRequired
};

export default Todo;

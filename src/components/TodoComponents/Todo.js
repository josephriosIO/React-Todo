import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

class Todo extends Component {
  completedTask = (id, completed) => {
    this.props.completeTheTask(id);
  };
  render() {
    const { id, task, completed } = this.props.itemList;

    return (
      <ul className="list-group">
        <li
          className={`list-group-item ${
            this.props.itemList.completed ? "completed" : null
          }`}
          onClick={this.completedTask.bind(this, id, completed)}
        >
          {" "}
          {task}{" "}
        </li>
      </ul>
    );
  }
}

Todo.propTypes = {
  itemList: PropTypes.object.isRequired
};

export default Todo;

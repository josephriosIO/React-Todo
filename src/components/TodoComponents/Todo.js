import React, { Component } from "react";

const Todo = props => {
  const { id, task, completed } = props.itemList;
  return (
    <ul>
      <li> {task} </li>
    </ul>
  );
};

export default Todo;

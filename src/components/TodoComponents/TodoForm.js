import React, { Component } from "react";

const TodoForm = props => {
  const { task, updateTodo, addToTodo } = props;
  return (
    <form>
      <input value={task} onChange={updateTodo.bind(this)} name="task" />
      <button onClick={addToTodo}> Add Todo </button>
    </form>
  );
};

export default TodoForm;

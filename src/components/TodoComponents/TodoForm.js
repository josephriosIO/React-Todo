import React from "react";

const TodoForm = props => {
  const { task, updateTodo, addToTodo, clearTasks, clear } = props;
  return (
    <form className="form-inline">
      <input
        className="form-control"
        placeholder="new task..."
        value={task}
        onChange={updateTodo.bind(this)}
        name="task"
      />
      <button className="btn btn-outline-success" onClick={addToTodo}>
        {" "}
        Add Todo{" "}
      </button>
      <button onClick={clearTasks} className="btn btn-danger">
        Remove Todos
      </button>
    </form>
  );
};

export default TodoForm;

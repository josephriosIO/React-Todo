import React, { Component } from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";

const items = [
  {
    id: 1,
    task: "throw away trash",
    completed: false
  },
  {
    id: 2,
    task: "clean room",
    completed: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();

    this.state = {
      todoList: items,
      task: ""
    };
  }

  updateTodo = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addToTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: this.state.task,
      completed: ""
    };

    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          {this.state.todoList.map(item => (
            <Todo itemList={item} />
          ))}
          <TodoForm
            task={this.state.task}
            updateTodo={this.updateTodo}
            addToTodo={this.addToTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

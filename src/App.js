import React, { Component } from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";

const items = [];

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
      completed: false
    };

    this.setState({
      todoList: [...this.state.todoList, newTodo],
      task: ""
    });
  };

  completeTheTask = id => {
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (id === item.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    });
  };

  clearTasks = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="nav justify-content-center">
          Welcome to your Todo App!
        </h2>
        <div>
          {this.state.todoList.map(item => (
            <Todo
              key={item.id}
              itemList={item}
              completeTheTask={this.completeTheTask.bind(
                this.state.todoList.id
              )}
            />
          ))}
          <TodoForm
            task={this.state.task}
            updateTodo={this.updateTodo}
            addToTodo={this.addToTodo}
            clearTasks={this.clearTasks}
          />
        </div>
      </div>
    );
  }
}

export default App;

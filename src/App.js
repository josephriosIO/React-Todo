import React, { Component } from "react";
import Todo from "./components/TodoComponents/Todo";

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
      todoList: items
    };
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          {this.state.todoList.map(item => (
            <Todo itemList={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

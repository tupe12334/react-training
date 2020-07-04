import React from "react";

import ToDoItem from "./ToDoItem";
import TaskList from "../TasksListFile";
import Sidebar from "./sideBar";
import Conditional from "./Conditional";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TaskList,
      isLoading: true,
    };
    this.checkBoxChange = this.checkBoxChange.bind(this);
  }
  checkBoxChange(id) {
    console.log("work", id);
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
          todo.ItemText = prevState.ItemText + "yes";
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    const items = [
      { name: "home", label: "test" },
      { name: "billing", label: "Billing" },
      { name: "settings", label: "Settings" },
    ];
    const TaskCom = this.state.todos.map((TaskObject) => (
      <ToDoItem
        key={TaskObject.id}
        id={TaskObject.id}
        ItemText={TaskObject.text}
        Done={TaskObject.checked}
        handleChange={this.checkBoxChange}
      />
    ));
    return (
      <div className="MainCon">
        {this.state.isLoading ? (
          <h1>loding</h1>
        ) : (
          <div>
            <div className="ToDoList">{TaskCom}</div>
            <div className="SideBar">
              <Sidebar items={items} />
            </div>
            <Conditional isLoading={this.state.isLoading} />
          </div>
        )}
      </div>
    );
  }
}

export default Main;

import React from "react";

import ToDoItem from "./ToDoItem";
import TaskList from "../TasksListFile";
import Sidebar from "./sideBar";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: TaskList,
    };
  }
  render() {
    const items = [
      { name: "home", label: "test" },
      { name: "billing", label: "Billing" },
      { name: "settings", label: "Settings" },
    ];
    let TaskCom = this.state.todos.map((TaskObject) => (
      
      <ToDoItem
        key={TaskObject.id}
        ItemText={TaskObject.text}
        Done={TaskObject.checked}
      />
    ));
    return (
      <div className="MainCon">


        <div className="ToDoList">{TaskCom}</div>
        <div className="SideBar">
          <Sidebar items={items} />
        </div>
      </div>
    );
  }
}

export default Main;

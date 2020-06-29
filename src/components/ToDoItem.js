import React from "react";
import Divider from "@material-ui/core/Divider";

import ListItemText from "@material-ui/core/ListItemText";


class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      anser: "hi",
      isLog: true,
    };
  }
  render() {

    let addedText;
    if (this.props.Done) {
      addedText = "yes";
    } else {
      addedText = "no";
    }
    return (
      <div className="ToDoItem">
        <input
          type="checkbox"
          id={this.props.ItemText}
          defaultChecked={this.props.Done}></input>
        <label htmlFor={this.props.ItemText}>
          {this.props.ItemText} {addedText}{" "}
        </label>
        <ListItemText primary={this.props.ItemText} />
        <Divider />
      </div>
    );
  }
}







export default ToDoItem;

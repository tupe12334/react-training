import React from "react";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

class ToDoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      yesNo: "no",
      ceck: "",
    };
  }
  render() {
    const checkBoxChange = () => {
      let addedText;
      let ceckTemp;
      this.setState((prevState) => {
        if (prevState.yesNo === "no") {
          addedText = "yes";
        } else {
          addedText = "no";
        }
        console.log(ceckTemp);
        return {
          yesNo: addedText,
          ceck: ceckTemp,
        };
      });
    };

    return (
      <div className="ToDoItem">
        <Paper
          elevation={3}
          style={{
            margin: 1,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <ListItem button>
            <ListItemText primary={this.state.ItemText} />
            <Checkbox
              id={this.props.id + this.props.ItemText}
              checked={this.props.checked}
              onChange={this.props.handleChange, checkBoxChange}
              icon={<CheckCircleOutlineIcon/>}
              checkedIcon={<CheckCircleIcon/>}
            />
            <label
              htmlFor={this.props.ItemText + this.props.id}
              onMouseOver={() => console.log("touch")}
            >
              {this.props.ItemText} {this.state.yesNo}
            </label>
          </ListItem>

          <Divider />
        </Paper>
      </div>
    );
  }
}

export default ToDoItem;

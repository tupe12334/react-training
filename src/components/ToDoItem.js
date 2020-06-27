import React from 'react';

function ToDoItem(props) {
    return (
        <div className="ToDoItem">
            <input type="checkbox" id={props.Task.ItemText} checked={props.Task.Done}></input>
            <label for={props.Task.ItemText}>{props.Task.ItemText} </label>
        </div>
    )
}
export default ToDoItem
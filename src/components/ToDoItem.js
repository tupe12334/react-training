import React from 'react';
class ToDoItem extends React.Component{
    render(){
        return (
            <div className="ToDoItem">
                <input type="checkbox" id={this.props.ItemText} defaultChecked={this.props.Done}></input>
                <label htmlFor={this.props.ItemText}>{this.props.ItemText} </label>
                <hr></hr>
            </div>
        )
    }
}
export default ToDoItem
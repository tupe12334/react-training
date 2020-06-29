import React from 'react';
class ToDoItem extends React.Component{
    constructor(){
        super()
        this.state = {
            anser:"hi",
            isLog:true
        }
    }
    render(){
        let addedText
        if (this.props.Done) {
            addedText="yes"
        }
        else{
            addedText="no"
        }
        return (
            <div className="ToDoItem">
                <input type="checkbox" id={this.props.ItemText} defaultChecked={this.props.Done}></input>
                <label htmlFor={this.props.ItemText}>{this.props.ItemText} {addedText} </label>
                <hr></hr>
            </div>
        )
    }
}
export default ToDoItem
import React from 'react';

import ToDoItem from './ToDoItem';
import TaskList from '../TasksListFile';



class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            todos:TaskList
        }
    }
    render() {
        let TaskCom = this.state.todos.map(TaskObject => <ToDoItem key={TaskObject.id} ItemText={TaskObject.text} Done={TaskObject.checked} />)
        return (
            <div className="MainCon">
                <div className="ToDoList">
                    {TaskCom}
                </div>
            </div>

        )
    }

}

export default Main

import React from 'react';

import ToDoItem from './ToDoItem';
import TaskList from '../TasksListFile';

function Main() {
    const now = new Date()
    const alertTime = () => alert(now.getHours() % 24)
    const TaskCom = TaskList.map(TaskObject => <ToDoItem key={TaskObject.id} ItemText={TaskObject.text} Done={TaskObject.checked} />)
    let FilterTheTasks=false
    const FilterTasks = TaskCom.filter(TaskFilde => {
        if (FilterTheTasks) {
            console.log(TaskFilde.props.key);
            
            if (TaskFilde.props.Done) {
                return TaskFilde
            }
            return null
        }
        return TaskCom
    })

    return (
        <div className="MainCon">
            <div className="ToDoList">
                {FilterTasks}
            </div>


            <div>
                <input type="text" id="nameInput" onChange={alertTime}></input>
                <label for="nameInput">enter your name</label>
            </div>
            <div>
                <p>now is {now.getHours() % 24}</p>
            </div>
        </div>

    )
}

export default Main

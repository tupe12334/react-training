import React from 'react';

import ToDoItem from './ToDoItem';

function Main() {
    const now = new Date()
    const alertTime = () => alert(now.getHours() % 24)
    return (
        <div className="MainCon">
            <div className="ToDoList">
                <ToDoItem Task={{ItemText:"first", Done:false}} />
                <ToDoItem Task={{ItemText:"second", Done:true}} />
                <ToDoItem Task={{ItemText:"therd", Done:true}}/>
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

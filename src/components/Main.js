import React from 'react';
import {change, UserName} from '../App';

function Main() {
    
    return (
        <div className="MainCon">
            <div>
                <input type="checkbox" id="first"></input>
                <label for="first">first</label>
            </div>
            <div>
                <input type="checkbox" id="second"></input>
                <label for="second">second</label>
            </div>
            <div>
                <input type="checkbox" id="therd"></input>
                <label for="therd">therd</label>
            </div>
            <div>
                <input type="text" id="nameInput" onChange={change()}></input>
                <label for="nameInput">enter your name</label>
            </div>
        </div>

    )
}

export default Main

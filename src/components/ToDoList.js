import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        // user enters their task and presses enter to add the task - maybe add an alert or sign that it was added?
        if (e.key == 'Enter') {
            setTasks([...tasks, e.target.value]) // spread operator avoids having an array inside an array
        }
    }; 
    
    return (
        <div>
            <input 
            onKeyDown={(e) => addTask(e)} // e is just an event and in this case happens to be an onKeyDown event
            placeholder="What's on today's agenda?">

            </input>
            <h1>
                {console.log(tasks)}
            </h1>
        </div>
    );
};

export default ToDoList;
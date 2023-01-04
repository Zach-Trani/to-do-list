import React, { useState } from 'react';
import Task from './Task/Task';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        // user enters their task and presses enter to add the task - maybe add an alert or sign that it was added?
        if (e.key == 'Enter' && e.target.value != '') {
            setTasks([...tasks, e.target.value]) // spread operator avoids having an array inside an array
            e.target.value = ''
        }
    };

    return (
        <div>
            <input
                onKeyDown={(e) => addTask(e)} // e is just an event and in this case happens to be an onKeyDown event
                placeholder="What's on today's agenda?">

            </input>
            <div>
                <button
                    onClick={() => setTasks([])}>
                    Clear Tasks
                </button>
            </div>
            <div>
                {tasks.map(task => {
                    return <Task task={task}/>
                })}
            </div>
            <div>
                Total:{tasks.length}
            </div>
        </div>
    );
};

export default ToDoList;
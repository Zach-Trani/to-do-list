import './Task.css'

const Task = ({task}) => {
    return (
        <div className='task-component'>
            <input type='checkbox'></input>
            <p>{task}</p>
            <button>Edit Task</button>

        </div>
    );
};

export default Task;
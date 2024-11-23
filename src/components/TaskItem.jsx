import React, { useState } from "react";
import deleteIcon from '../assets/images/delete.svg'

const TaskItem = ({task, deleteTask}) => {
    const [done, setDone] = useState(task.done);

    const handleCheckbox = () => {
        const newDone = !done;
        setDone(newDone);

        const updatedTask = {...task, done: newDone};
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = savedTasks.map(t =>
            t.id === task.id ? updatedTask : t
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    const handleDelete = () => {
        deleteTask(task.id);
    }

    return (
        <div className={`taskItem ${done ? 'done' : ''}`}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className="cbox">
                    <input id={task.id} type="checkbox" onChange={handleCheckbox} checked={done} className="cbox" />
                    <label className="cbx" htmlFor={task.id}>
                        <div className="flip">
                            <div className="front"></div>
                            <div className="back">
                                <svg className="checkmark" width="16" height="14" viewBox="0 0 16 14">
                                <path d="M2 8.5L6 12.5L14 1.5"></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                <div className="itemContent">
                    <h1 className={`itemTitle ${done ? 'done' : ''}`}>{task.title}</h1>
                    <p className={`itemBody ${done ? 'done' : ''}`}>{task.body}</p>
                </div>
            </div>
            <div className="delete" onClick={handleDelete}>
                <img src={deleteIcon} className="deleteIcon" />
            </div>
        </div>
    )
}

export default TaskItem;
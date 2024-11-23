import React from "react";
import { useState } from "react";
import plusIcon from '../assets/images/plus.svg'

const TaskForm = ({addNewTask}) => {
    const [task, setTask] = useState({title: '', body: '', done: false});
    const [isOpen, setIsOpen] = useState(false);

    const toggleForm = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTask(task);
        setTask({ title: "", body: "", done: false });
        setIsOpen(false);
      };

    return (
        <form className="taskForm">
            <div className="formHead" onClick={toggleForm}>
                <h2 className="newTask">New Task Form</h2>
                <img
                    src={plusIcon}
                    className={`plusIcon ${isOpen ? 'rotate' : ''}`} 
                />
            </div>
            <div className={`formBody ${isOpen ? 'show' : 'hide'}`}>
                <input 
                    type="text"
                    className="taskTitle" 
                    placeholder="Title" 
                    value={task.title} 
                    onChange={e => setTask({...task, title: e.target.value})} 
                />
                <textarea
                    className="taskBody"
                    placeholder="Description"
                    value={task.body}
                    onChange={e => setTask({ ...task, body: e.target.value })}
                    rows='4'
                />
                <div className="buttonWrapper">
                    <button onClick={handleSubmit} className="addButton">Add</button>
                </div>
            </div>
        </form>
    )
}

export default TaskForm;
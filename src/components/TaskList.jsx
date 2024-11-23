import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({tasks, setTasks}) => {
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(t => t.id !== taskId);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
    }

    if (!tasks.length) {
        return (<h1 className="noTasks">No Tasks</h1>)
    }

    return(
        <div className="taskList">
            {tasks.map((task) => (
                <TaskItem deleteTask={deleteTask} task={task} key={task.id} />
            ))}
        </div>
    )
}

export default TaskList;
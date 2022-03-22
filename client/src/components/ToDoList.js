import React from 'react'
import './ToDoList.css'

function ToDoList(props) {

    const deleteTask = async (taskId) => {
        try {
            const fetchOptions = {
                method: 'DELETE'
            }
            const response = await fetch(`/tasks/${taskId}`, fetchOptions)
            const jsonData = await response.json()
            props.updateData()
            alert(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const updateTaskStatus = async (taskId, taskStatus) => {
        try {
            const fetchOptions = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ taskStatus: taskStatus })
            }
            const response = await fetch(`/tasks/status/${taskId}`, fetchOptions)
            const jsonData = await response.json()
            props.updateData()
            alert(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    const taskListItems = props.tasks.map(task => (
        <li className='toDoCard' id={task.task_id} key={task.task_id}>
            <p className={task.is_completed ? 'toDoText taskComplete' : 'toDoText'}>{task.task_description}</p>
            <div className='toDoButtons'>
                <button
                    className='toDoDoneButton'
                    type='button'
                    onClick={() => updateTaskStatus(task.task_id, task.is_completed)}
                >
                    {task.is_completed ? 'UNDO' : 'DONE'}
                </button>
                <button
                    className={task.is_completed ? 'toDoEditButton buttonDisabled' : 'toDoEditButton'}
                    type='button'
                    disabled={task.is_completed}
                >
                    EDIT
                </button>
                <button
                    className='toDoDeleteButton'
                    type='button'
                    onClick={() => deleteTask(task.task_id)}
                >
                    DELETE
                </button>
            </div>
        </li>
    ))

    return (
        <React.Fragment>
            <h2 className='toDoListHeader'>3 Tasks Remaining</h2>
            <ul className='toDoList'>
                {taskListItems}
            </ul>
        </React.Fragment>
    )
}

export default ToDoList

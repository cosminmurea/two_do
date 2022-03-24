import React from 'react'

function ToDo(props) {
    return (
        <li className='toDoCard' id={props.task.task_id}>
            <p className={props.task.is_completed ? 'toDoText taskComplete' : 'toDoText'}>{props.task.task_description}</p>
            <div className='toDoButtons'>
                <button
                    className='toDoDoneButton'
                    type='button'
                    onClick={() => props.updateTaskStatus(props.task.task_id, props.task.is_completed)}
                >
                    {props.task.is_completed ? 'UNDO' : 'DONE'}
                </button>
                <button
                    className={props.task.is_completed ? 'toDoDetailsButton buttonDisabled' : 'toDoDetailsButton'}
                    type='button'
                    disabled={props.task.is_completed}
                    onClick={() => props.openModalCard(props.task.task_id)}
                >
                    DETAILS
                </button>
                <button
                    className={props.task.is_completed ? 'toDoEditButton buttonDisabled' : 'toDoEditButton'}
                    type='button'
                    disabled={props.task.is_completed}
                    onClick={() => props.openModalForm(props.task.task_id)}
                >
                    EDIT
                </button>
                <button
                    className='toDoDeleteButton'
                    type='button'
                    onClick={() => props.deleteTask(props.task.task_id)}
                >
                    DELETE
                </button>
            </div>
        </li>
    )
}

export default ToDo

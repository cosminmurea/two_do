import React, { useState } from 'react'
import Modal from './Modal'
import './ToDoList.css'

function ToDoList(props) {
    const [openModalId, setOpenModalId] = useState(null)
    const [description, setDescription] = useState('')

    const openModal = (modalId) => {
        setOpenModalId(modalId)
    }

    const closeModal = () => {
        setOpenModalId(null)
        setDescription('')
    }

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    const updateTask = async (taskId) => {
        try {
            const fetchOptions = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description })
            }
            const response = await fetch(`/tasks/${taskId}`, fetchOptions)
            const jsonData = await response.json()
            props.updateData()
            alert(jsonData)
            closeModal()
        } catch (error) {
            console.error(error.message)
        }
    }

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
    // Create a Modal directory with Modal.js and ModalForm.js and import ModalForm.js
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
                    onClick={() => openModal(task.task_id)}
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
            <Modal show={openModalId === task.task_id}>
                <label className='inputLabel' htmlFor='editDescription'>
                    Edit Task
                </label>
                <input
                    className='modalInput'
                    id='editDescription'
                    type='text'
                    name='description'
                    value={description}
                    autoComplete='off'
                    placeholder={task.task_description}
                    onChange={handleChange}
                />
                <button className='modalButton' onClick={() => updateTask(task.task_id)}>UPDATE</button>
                <button className='modalButton' onClick={closeModal}>CLOSE</button>
            </Modal>
        </li>
    ))

    return (
        <React.Fragment>
            <h2 className='toDoListHeader'>{props.tasks.length} Tasks Remaining</h2>
            <ul className='toDoList'>
                {taskListItems}
            </ul>
        </React.Fragment>
    )
}

export default ToDoList

import React, { useState } from 'react'
import ToDo from './ToDo'
import ModalForm from '../Modal/ModalForm'
import ModalCard from '../Modal/ModalCard'
import './ToDoList.css'

function ToDoList(props) {
    const [openModalFormId, setOpenModalFormId] = useState(null)
    const [openModalCardId, setOpenModalCardId] = useState(null)
    const [description, setDescription] = useState('')

    const openModalCard = (modalCardId) => {
        setOpenModalCardId(modalCardId)
    }

    const closeModalCard = () => {
        setOpenModalCardId(null)
    }

    const openModalForm = (modalFormId) => {
        setOpenModalFormId(modalFormId)
    }

    const closeModalForm = () => {
        setOpenModalFormId(null)
        setDescription('')
    }

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    const updateTask = async (taskId) => {

        if (description.trim().length === 0) {
            alert('All Fields are Required!!')
            return
        }

        try {
            const fetchOptions = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description.trim() })
            }
            const response = await fetch(`/tasks/${taskId}`, fetchOptions)
            const jsonData = await response.json()
            props.updateData()
            alert(jsonData)
            closeModalForm()
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

    const taskListItems = props.tasks.map(task => (
        <React.Fragment key={task.task_id}>
            <ToDo
                task={task}
                updateTaskStatus={updateTaskStatus}
                openModalForm={openModalForm}
                openModalCard={openModalCard}
                deleteTask={deleteTask}
            />
            <ModalCard
                openModalId={openModalCardId}
                task={task}
                closeModal={closeModalCard}
            />
            <ModalForm
                openModalId={openModalFormId}
                task={task}
                currentDescription={description}
                handleChange={handleChange}
                updateTask={updateTask}
                closeModal={closeModalForm}
            />
        </React.Fragment>
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

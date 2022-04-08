import React, { useState } from 'react'
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal'
import AnimateHeight from 'react-animate-height'
import ToDo from './ToDo'
import ModalForm from '../Modal/ModalForm'
import ModalCard from '../Modal/ModalCard'
import {
    FlexContainer,
    Label
} from '../Theme'

const ListContainer = styled.ul`
    ${FlexContainer}
    justify-content: flex-start;
    list-style-type: none;
    padding: 0;
`

const ListHeader = styled(Label)`
    border-bottom: 2px solid ${props => props.theme.colors.extraColor};
    padding-bottom: .5rem;
    margin-bottom: 2.5rem;
`

const ListItemSlide = styled(Slide)`
    width: 100%;
`

function ToDoList(props) {
    const [openModalFormId, setOpenModalFormId] = useState(null)
    const [openModalCardId, setOpenModalCardId] = useState(null)
    const [deleteCardId, setDeleteCardId] = useState(null)

    const openModalCard = (modalCardId) => {
        setOpenModalCardId(modalCardId)
        document.body.style.overflow = 'hidden'
    }

    const openModalForm = (modalFormId) => {
        setOpenModalFormId(modalFormId)
        document.body.style.overflow = 'hidden'
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
            console.log(jsonData)
            props.updateData()
        } catch (error) {
            console.error(error.message)
        }
    }

    const promiseTimeout = (seconds) => {
        return new Promise((resolve) => {
            setTimeout(resolve, seconds * 1000)
        })
    }

    const deleteTask = async (event, taskId) => {
        try {
            event.preventDefault()
            const target = event.target.parentNode.parentNode
            target.style.opacity = 0
            target.style.transform = 'scale(0)'

            setDeleteCardId(taskId)

            await promiseTimeout(0.3)

            const fetchOptions = {
                method: 'DELETE'
            }
            const response = await fetch(`/tasks/${taskId}`, fetchOptions)
            const jsonData = await response.json()
            console.log(jsonData)
            props.updateData()
        } catch (error) {
            console.error(error.message)
        }
    }

    const taskListItems = props.tasks.map((task, arrIndex, tasks) => (
        <React.Fragment key={task.task_id}>
            <ListItemSlide triggerOnce fraction={0.1} direction={arrIndex % 2 === 0 ? 'right' : 'left'}>
                <AnimateHeight duration={arrIndex === tasks.length - 1 ? 300 : 3000} height={deleteCardId === task.task_id ? 0 : 'auto'}>
                    <ToDo
                        task={task}
                        updateTaskStatus={updateTaskStatus}
                        openModalForm={openModalForm}
                        openModalCard={openModalCard}
                        deleteTask={deleteTask}
                    />
                </AnimateHeight>
            </ListItemSlide>
            <ModalCard
                openModalId={openModalCardId}
                setOpenModalId={setOpenModalCardId}
                task={task}
            />
            <ModalForm
                task={task}
                updateData={props.updateData}
                openModalId={openModalFormId}
                setOpenModalId={setOpenModalFormId}
            />
        </React.Fragment>
    )
    )

    return (
        <ListContainer>
            <ListHeader>
                {`${props.tasks.length} Tasks`}
            </ListHeader>
            {taskListItems}
        </ListContainer>
    )
}

export default ToDoList

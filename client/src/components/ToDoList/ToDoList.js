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
import {
    updateTaskStatus,
    deleteTaskById,
    promiseTimeout
} from '../../services/tasksServices'

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

    const toggleTaskStatus = async (taskId, taskStatus) => {
        try {
            const updatedTask = await updateTaskStatus(taskId, taskStatus)
            props.updateData()
            console.log(updatedTask)
        } catch (error) {
            console.error(error.message)
        }
    }

    const deleteTask = async (event, taskId) => {
        try {
            event.preventDefault()
            const target = event.target.parentNode.parentNode
            target.style.opacity = 0
            target.style.transform = 'scale(0)'
            setDeleteCardId(taskId)
            await promiseTimeout(0.3)
            const deletedTask = await deleteTaskById(taskId)
            props.updateData()
            console.log(deletedTask)
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
                        updateTaskStatus={toggleTaskStatus}
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

import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import {
    Label,
    Input,
    ModalButton
} from '../Theme'
import useInput from '../../hooks/useInput'
import { updateTaskDescription } from '../../services/tasksServices'

const ModalLabel = styled(Label)`
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
`

function ModalForm(props) {
    const taskDescription = useInput('')

    const handleSubmit = async (event, taskId) => {
        event.preventDefault()

        try {
            const updatedTask = await updateTaskDescription(taskId, taskDescription.value)
            if (updatedTask) {
                props.updateData()
                closeModal()
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const closeModal = () => {
        props.setOpenModalId(null)
        taskDescription.reset();
        document.body.style.overflow = 'unset'
    }

    return (
        <Modal
            show={props.openModalId === props.task.task_id}
        >
            <form
                onSubmit={(event) => handleSubmit(event, props.task.task_id)}
            >
                <ModalLabel
                    modal
                    htmlFor='editDescription'
                >
                    Edit Task
                </ModalLabel>
                <Input
                    modal
                    id='editDescription'
                    type='text'
                    name='description'
                    value={taskDescription.value}
                    autoComplete='off'
                    placeholder={props.task.task_description}
                    onChange={taskDescription.handleChange}
                />
                <ModalButton
                    modal
                    type='submit'
                >
                    Update
                </ModalButton>
                <ModalButton
                    modal
                    type='button'
                    onClick={closeModal}
                >
                    Close
                </ModalButton>
            </form>
        </Modal>
    )
}

export default ModalForm

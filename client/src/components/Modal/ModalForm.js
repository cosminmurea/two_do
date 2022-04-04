import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { Label, Input, ModalButton } from '../Theme'
import useInput from '../../hooks/useInput'

const ModalLabel = styled(Label)`
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
`

function ModalForm(props) {
    const taskDescription = useInput('')

    const updateTask = async (event, taskId) => {
        event.preventDefault()

        if (taskDescription.value.trim().length === 0) {
            alert('All Fields are Required!!')
            return
        }

        try {
            await putRequest(`/tasks/${taskId}`, taskDescription.value.trim())

            props.updateData()

            closeModal()
        } catch (error) {
            console.error(error.message)
        }
    }

    const putRequest = async (url, description) => {
        try {
            const putOptions = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description })
            }
            const response = await fetch(url, putOptions)
            const responseData = await response.json()
            return responseData
        } catch (error) {
            console.error(error.message)
            return undefined
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
                onSubmit={(event) => updateTask(event, props.task.task_id)}
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

import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { Label, Input, ModalButton } from '../Theme'

const ModalLabel = styled(Label)`
    font-size: 1.5rem;
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;
`

function ModalForm(props) {
    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <form
                onSubmit={(event) => props.updateTask(event, props.task.task_id)}
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
                    value={props.currentDescription}
                    autoComplete='off'
                    placeholder={props.task.task_description}
                    onChange={props.handleChange}
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
                    onClick={props.closeModal}
                >
                    Close
                </ModalButton>
            </form>
        </Modal>
    )
}

export default ModalForm

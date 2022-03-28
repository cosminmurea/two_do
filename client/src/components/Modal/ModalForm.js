import React from 'react'
import styled from 'styled-components'
import { Modal, ModalButton } from './Modal'

const ModalFormLabel = styled.label`
    display: inline-block;
    font-size: 1.5em;
    margin-bottom: 1.2em;
`

const ModalFormInput = styled.input`
    width: 100%;
    color: ${props => props.theme.colors.textSecondary};
    background: transparent;
    font-size: 1.5em;
    border: 2px solid ${props => props.theme.colors.borderColor};
    border-right: none;
    border-left: none;
    padding: .4em;
    margin-bottom: 1.2em;
`

function ModalForm(props) {
    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <ModalFormLabel htmlFor='editDescription'>
                Edit Task
            </ModalFormLabel>
            <ModalFormInput
                id='editDescription'
                type='text'
                name='description'
                value={props.currentDescription}
                autoComplete='off'
                placeholder={props.task.task_description}
                onChange={props.handleChange}
            />
            <ModalButton onClick={() => props.updateTask(props.task.task_id)}>Update</ModalButton>
            <ModalButton onClick={props.closeModal}>Close</ModalButton>
        </Modal>
    )
}

export default ModalForm

import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'
import { ModalButton } from '../Theme'

const ModalContent = styled.p`
    font-size: ${props => props.theme.fontSizes.content};
    text-align: ${props => props.secondary ? 'center' : 'justify'};
    box-shadow: ${props => props.secondary ? 'none' : `.2em .2em .2em ${props.theme.colors.shadowColor}`};
    border: ${props => props.secondary ? 'none' : `2px solid ${props.theme.colors.borderColor}`};
    border-left: none;
    border-right: none;
    padding: ${props => props.secondary ? '0 .8rem' : '.8rem'};
    margin-top: ${props => props.secondary ? '0' : '3.5rem'};
    margin-bottom: ${props => props.secondary ? '1.5rem' : '2.5rem'};
    .statusSpan {
        color: ${props => props.theme.colors.textPrimary};
    }
`

function ModalCard(props) {
    let createdAt = props.task.created_at.replace('T', ' ').replaceAll('-', '/')
    createdAt = createdAt.substring(0, createdAt.length - 5)

    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <ModalContent>
                {props.task.task_description}
            </ModalContent>
            <ModalContent secondary>
                Task Id: {props.task.task_id}
            </ModalContent>
            <ModalContent secondary>
                Task Status: <span className='statusSpan'>{props.task.is_completed ? 'Complete' : 'Incomplete'}</span>
            </ModalContent>
            <ModalContent secondary>
                Created At: {createdAt}
            </ModalContent>
            <ModalButton
                modal
                onClick={props.closeModal}
            >
                Close
            </ModalButton>
        </Modal>
    )
}

export default ModalCard

import React from 'react'
import styled from 'styled-components'
import { Modal, ModalButton } from './Modal'

const ModalCardContent = styled.p`
    font-size: ${props => props.secondary ? '1.4em' : '1.5em'};
    text-align: ${props => props.secondary ? 'center' : 'justify'};
    border: ${props => props.secondary ? 'none' : `2px solid ${props.theme.colors.borderColor}`};
    border-left: none;
    border-right: none;
    padding: .5em;
    margin: ${props => props.secondary ? '.3em 0' : '1em 0'};
    .statusSpan {
        color: ${props => props.theme.colors.textPrimary};
    }
`

function ModalCard(props) {
    let createdAt = props.task.created_at.replace('T', ' ').replace('-', '/').replace('-', '/')
    createdAt = createdAt.substring(0, createdAt.length - 5)

    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <ModalCardContent>
                {props.task.task_description}
            </ModalCardContent>
            <ModalCardContent secondary>
                Task Id: {props.task.task_id}
            </ModalCardContent>
            <ModalCardContent secondary>
                Task Status: <span className='statusSpan'>{props.task.is_completed ? 'Complete' : 'Incomplete'}</span>
            </ModalCardContent>
            <ModalCardContent secondary>
                Created At: {createdAt}
            </ModalCardContent>
            <ModalButton onClick={props.closeModal}>Close</ModalButton>
        </Modal>
    )
}

export default ModalCard

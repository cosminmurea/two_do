import React from 'react'
import styled from 'styled-components'
import Modal from './Modal'

const ModalCardContent = styled.p`
    font-size: 1.3em;
    text-align: ${props => props.secondary ? 'center' : 'justify'};
    border: ${props => props.secondary ? 'none' : `2px solid ${props.theme.colors.borderColor}`};
    border-left: none;
    border-right: none;
    padding: .7em;
    margin: ${props => props.secondary ? '.3em 0' : '1em 0'};
`

function ModalCard(props) {
    let createdAt = props.task.created_at.replace('T', ' ')
    createdAt = createdAt.substring(0, createdAt.length - 5)

    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <ModalCardContent>{props.task.task_description}</ModalCardContent>
            <ModalCardContent secondary>Task Id: {props.task.task_id}</ModalCardContent>
            <ModalCardContent secondary>Task Status: <span>{props.task.is_completed ? 'Complete' : 'Incomplete'}</span></ModalCardContent>
            <ModalCardContent secondary>Created At: {createdAt}</ModalCardContent>
            <button className='modalButton' onClick={props.closeModal}>CLOSE</button>
        </Modal>
    )
}

export default ModalCard

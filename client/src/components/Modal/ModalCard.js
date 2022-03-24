import React from 'react'
import Modal from './Modal'

function ModalCard(props) {
    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <h4 className='modalCardHeader'>{props.task.task_description}</h4>
            <h5 className='modalCardSubHeader'>Task Id: {props.task.task_id}</h5>
            <h5 className='modalCardSubHeader'>Task Status: {props.task.is_completed ? 'Complete' : 'Incomplete'}</h5>
            <h5 className='modalCardSubHeader'>Created At 22.02.2002</h5>
            <button className='modalButton' onClick={props.closeModal}>CLOSE</button>
        </Modal>
    )
}

export default ModalCard

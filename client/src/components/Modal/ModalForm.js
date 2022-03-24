import React from 'react'
import Modal from './Modal'

function ModalForm(props) {
    return (
        <Modal show={props.openModalId === props.task.task_id}>
            <label className='inputLabel' htmlFor='editDescription'>
                Edit Task
            </label>
            <input
                className='modalFormInput'
                id='editDescription'
                type='text'
                name='description'
                value={props.currentDescription}
                autoComplete='off'
                placeholder={props.task.task_description}
                onChange={props.handleChange}
            />
            <button className='modalButton' onClick={() => props.updateTask(props.task.task_id)}>UPDATE</button>
            <button className='modalButton' onClick={props.closeModal}>CLOSE</button>
        </Modal>
    )
}

export default ModalForm

import React from 'react'
import './Modal.css'

function Modal(props) {
    if (!props.show) {
        return null
    }

    return (
        <div className='modalContainer'>
            <div className='modalCard'>
                {props.children}
            </div>
        </div>
    )
}

export default Modal

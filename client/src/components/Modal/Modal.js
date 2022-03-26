import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
        <div className={props.show ? 'modalContainer modalVisible' : 'modalContainer modalHidden'}>
            <div className='modalCard'>
                {props.children}
            </div>
        </div>
    )
}

export default Modal

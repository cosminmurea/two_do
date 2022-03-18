import React from 'react'
import './ToDo.css'

function ToDo(props) {
    return (
        <li className='toDoCard' id={props.id}>
            <p className='toDoText'>{props.name}</p>
            <div className='toDoButtons'>
                <button className='toDoDoneButton' type='button'>DONE</button>
                <button className='toDoEditButton' type='button'>EDIT</button>
                <button className='toDoDeleteButton' type='button'>DELETE</button>
            </div>
        </li>
    )
}

export default ToDo

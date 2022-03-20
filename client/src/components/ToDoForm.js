import React, { useState } from 'react'
import './ToDoForm.css'

function ToDoForm(props) {
    const [description, setDescription] = useState('')

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const fetchOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ description: description })
        }
        fetch('http://localhost:5000/tasks', fetchOptions)
            .then(response => response.json())
            .then(props.updateData)
            .then(setDescription(''))
            .catch(error => console.error(error))
    }

    return (
        <form className='toDoForm' onSubmit={handleSubmit}>
            <span className='separatorSpan'></span>
            <label className='inputLabel' htmlFor='addToDoInput'>
                What needs to be done?
            </label>
            <input
                className='formInput'
                id='toDoDescription'
                type='text'
                name='description'
                value={description}
                autoComplete='off'
                placeholder='Add a new Task'
                onChange={handleChange}
            />
            <button className='submitButton' type='submit'>
                ADD
            </button>
            <span className='separatorSpan'></span>
        </form>
    )
}

export default ToDoForm

import React, { useState } from 'react'
import './ToDoForm.css'

function ToDoForm(props) {
    const [description, setDescription] = useState('')

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description })
            }
            const response = await fetch('/tasks', fetchOptions)
            const jsonData = await response.json()
            console.log(jsonData.task_id)
            props.updateData()
            setDescription('')
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <form className='toDoForm' onSubmit={handleSubmit}>
            <span className='separatorSpan'></span>
            <label className='inputLabel' htmlFor='toDoDescription'>
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

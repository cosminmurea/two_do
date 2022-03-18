import React from 'react'
import './ToDoForm.css'

function ToDoForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='toDoForm' onSubmit={handleSubmit}>
            <span className='separatorSpan'></span>
            <label className='inputLabel' htmlFor='addToDoInput'>
                What needs to be done?
            </label>
            <input
                className='formInput'
                id='addToDoInput'
                type='text'
                name='text'
                autoComplete='off'
                placeholder='Add a new Task'
            />
            <button className='submitButton' type='submit'>
                ADD
            </button>
            <span className='separatorSpan'></span>
        </form>
    )
}

export default ToDoForm

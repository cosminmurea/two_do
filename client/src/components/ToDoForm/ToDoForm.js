import React, { useState } from 'react'
import styled from 'styled-components'
import {
    Label,
    Input,
    Button
} from '../Theme'

const Form = styled.form`
    width: 100%;
    & > Button {
        transition: .3s ease-in-out;
    }
`

function ToDoForm(props) {
    const [description, setDescription] = useState('')

    const handleChange = (event) => {
        setDescription(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (description.trim().length === 0) {
            alert('All Fields are Required!!')
            return
        }

        try {
            const fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description.trim() })
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
        <Form
            onSubmit={handleSubmit}
        >
            <Label
                htmlFor='toDoDescription'
            >
                What needs to be done?
            </Label>
            <Input
                id='toDoDescription'
                type='text'
                name='description'
                value={description}
                autoComplete='off'
                placeholder='Add a new Task'
                onChange={handleChange}
            />
            <Button
                type='submit'
            >
                Add
            </Button>
        </Form>
    )
}

export default ToDoForm

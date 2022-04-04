import React from 'react'
import styled from 'styled-components'
import {
    Label,
    Input,
    Button
} from '../Theme'
import useInput from '../../hooks/useInput'

const Form = styled.form`
    width: 100%;
    & > Button {
        transition: .3s ease-in-out;
    }
`

function ToDoForm(props) {
    const taskDescription = useInput('')

    const createTask = async (event) => {
        event.preventDefault()

        if (taskDescription.value.trim().length === 0) {
            alert('All Fields are Required!!')
            return
        }

        try {
            await postRequest(`/tasks`, taskDescription.value.trim())

            props.updateData()

            taskDescription.reset()
        } catch (error) {
            console.error(error.message)
        }
    }

    const postRequest = async (url, description) => {
        try {
            const postOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description })
            }
            const response = await fetch(url, postOptions)
            const responseData = await response.json()
            return responseData
        } catch (error) {
            console.error(error.message)
            return undefined
        }
    }

    return (
        <Form
            onSubmit={createTask}
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
                value={taskDescription.value}
                autoComplete='off'
                placeholder='Add a new Task'
                onChange={taskDescription.handleChange}
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

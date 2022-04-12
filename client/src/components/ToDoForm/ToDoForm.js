import React from 'react'
import styled from 'styled-components'
import {
    Label,
    Input,
    Button
} from '../Theme'
import useInput from '../../hooks/useInput'
import { createNewTask } from '../../services/tasksServices'

const Form = styled.form`
    width: 100%;
    & > Button {
        transition: .3s ease-in-out;
    }
`

function ToDoForm(props) {
    const taskDescription = useInput('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const createTask = await createNewTask(taskDescription.value)
            createTask && props.updateData()
            taskDescription.reset()
        } catch (error) {
            console.error(error)
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

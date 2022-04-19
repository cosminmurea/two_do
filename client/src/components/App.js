import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoList from './ToDoList/ToDoList'
import {
    Header,
    Label
} from '../components/Theme'

import { getTasks } from '../services/tasksServices'

const MainHeader = styled(Header)`
    color: ${props => props.theme.colors.textPrimary};
    margin-top: 5rem;
    margin-bottom: .5rem;
`

const SubHeader = styled(Label)`
    margin-bottom: 2.5rem;
`

const SeparatorSpan = styled.span`
    display: block;
    height: 2px;
    width: 100%;
    max-width: 800px;
    background-color: ${props => props.theme.colors.textPrimary};
    box-shadow: .2em .2em .2em ${props => props.theme.colors.shadowColor};
    margin-bottom: 2.5rem;
`

function App() {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const newTasks = await getTasks()
        setTasks(newTasks)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <React.Fragment>
            <MainHeader>twoDo</MainHeader>
            <SubHeader>Stay Organized!</SubHeader>
            <SeparatorSpan></SeparatorSpan>
            <ToDoForm updateData={fetchTasks} />
            <SeparatorSpan></SeparatorSpan>
            <ToDoList
                tasks={tasks}
                updateData={fetchTasks}
            />
        </React.Fragment>
    )
}

export default App

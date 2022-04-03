import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ToDoForm from './ToDoForm/ToDoForm'
import ToDoList from './ToDoList/ToDoList'
import Footer from './Footer'
import {
    Theme,
    FlexContainer,
    Header,
    Label
} from './Theme'

const AppContainer = styled.div`
    ${FlexContainer}
    max-width: 800px;
`

const MainHeader = styled(Header)`
    color: ${props => props.theme.colors.textPrimary};
    margin-top: 2.5rem;
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

    const getTasks = async () => {
        try {
            const response = await fetch('/tasks')
            const jsonData = await response.json()
            setTasks(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <Theme>
            <AppContainer>
                <MainHeader>twoDo</MainHeader>
                <SubHeader>Stay Organized!</SubHeader>
                <SeparatorSpan></SeparatorSpan>
                <ToDoForm updateData={getTasks} />
                <SeparatorSpan></SeparatorSpan>
                <ToDoList tasks={tasks} updateData={getTasks} />
            </AppContainer>
            <Footer />
        </Theme>
    )
}

export default App

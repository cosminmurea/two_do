import React, { useEffect, useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import './App.css'

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
        <div className='contentContainer'>
            <h1 className='mainHeader'>twoDo</h1>
            <h2 className='subHeader'>Stay Organized!</h2>
            <ToDoForm updateData={getTasks} />
            <ToDoList tasks={tasks} updateData={getTasks} />
        </div>
    )
}

export default App

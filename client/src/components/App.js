import React, { useEffect, useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import './App.css'

function App() {
    const [tasks, setTasks] = useState([])

    const fetchString = () => {
        fetch('http://localhost:5000/tasks')
            .then((response) => response.json())
            .then((response) => {
                setTasks(response)
            })
    }

    useEffect(() => {
        fetchString()
    }, [])

    return (
        <div className='contentContainer'>
            <h1 className='mainHeader'>twoDo</h1>
            <h2 className='subHeader'>Stay Organized!</h2>
            <ToDoForm updateData={fetchString} />
            <ToDoList tasks={tasks} />
        </div>
    )
}

export default App

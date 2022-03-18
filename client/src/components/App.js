import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import './App.css'

function App() {
    const data = [
        {
            id: 'toDo-0',
            name: 'This is the first task in the list'
        },
        {
            id: 'toDo-1',
            name: 'This is the second task in the list'
        },
        {
            id: 'toDo-2',
            name: 'This is the third task in the list'
        }
    ]

    return (
        <div className='contentContainer'>
            <h1 className='mainHeader'>twoDo</h1>
            <h2 className='subHeader'>Stay Organized!</h2>
            <ToDoForm />
            <ToDoList tasks={data} />
        </div>
    )
}

export default App

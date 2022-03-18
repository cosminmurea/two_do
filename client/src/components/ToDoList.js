import React from 'react'
import ToDo from './ToDo'
import './ToDoList.css'

function ToDoList(props) {
    const taskListItems = props.tasks.map(task => (
        <ToDo key={task.id} id={task.id} name={task.name} />
    ))

    return (
        <React.Fragment>
            <h2 className='toDoListHeader'>3 Tasks Remaining</h2>
            <ul className='toDoList'>
                {taskListItems}
            </ul>
        </React.Fragment>
    )
}

export default ToDoList

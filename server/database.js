const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
})

const getTasks = async (request, response) => {
    try {
        const selectQuery = 'SELECT * FROM tasks ORDER BY task_id ASC;'
        const allTasks = await pool.query(selectQuery)
        response.json(allTasks.rows)
    } catch (error) {
        console.error(error.message)
    }
}

const createTask = async (request, response) => {
    try {
        const insertQuery = 'INSERT INTO tasks (task_description) VALUES ($1) RETURNING task_id;'
        const taskDescription = request.body.description
        const insertParams = [taskDescription]
        const newTask = await pool.query(insertQuery, insertParams)
        response.json(newTask.rows[0])
    } catch (error) {
        console.error(error.message)
    }
}

const getTaskById = async (request, response) => {
    try {
        const selectQuery = 'SELECT * FROM tasks WHERE task_id = $1;'
        const taskId = request.params.id
        const selectParams = [taskId]
        const singleTask = await pool.query(selectQuery, selectParams)
        response.json(singleTask.rows[0])
    } catch (error) {
        console.error(error.message)
    }
}

const updateTaskById = async (request, response) => {
    try {
        const updateQuery = 'UPDATE tasks SET task_description = $1 WHERE task_id = $2;'
        const taskId = request.params.id
        const taskDescription = request.body.description
        const updateParams = [taskDescription, taskId]
        const updateTask = await pool.query(updateQuery, updateParams)
        response.json('Task Description Updated!')
    } catch (error) {
        console.error(error.message)
    }
}

const updateTaskStatusById = async (request, response) => {
    try {
        const updateStatusQuery = 'UPDATE tasks SET is_completed = $1 WHERE task_id = $2;'
        const taskId = request.params.id
        const taskStatus = request.body.taskStatus
        const updateStatusParams = [taskStatus, taskId]
        const updateTaskStatus = await pool.query(updateStatusQuery, updateStatusParams)
        response.json(`Task Marked as ${taskStatus ? 'Complete' : 'Incomplete'}!`)
    } catch (error) {
        console.error(error.message)
    }
}

const deleteTaskById = async (request, response) => {
    try {
        const deleteQuery = 'DELETE FROM tasks WHERE task_id = $1;'
        const taskId = request.params.id
        const deleteParams = [taskId]
        const deleteTask = await pool.query(deleteQuery, deleteParams)
        response.json('Task Deleted!')
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTaskById,
    updateTaskStatusById,
    deleteTaskById
}

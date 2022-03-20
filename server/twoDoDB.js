const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'two_do',
    password: 'ohNoYouCanSeeMyPassword',
    port: 5432
})

const getTasks = (request, response) => {
    const selectQuery = 'SELECT * FROM tasks;'
    pool.query(selectQuery, (error, result) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.json(result.rows)
    })
}

const createTask = (request, response) => {
    const insertQuery = 'INSERT INTO tasks (task_description) VALUES ($1) RETURNING task_id;'
    const toDoDescription = request.body.description
    const insertParams = [toDoDescription]
    pool.query(insertQuery, insertParams, (error, result) => {
        if (error) {
            console.log(error)
            throw error
        }
        response.json(result.rows[0])
    })
}

module.exports = {
    getTasks,
    createTask
}

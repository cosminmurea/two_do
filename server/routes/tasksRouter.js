const router = require('express').Router()
const queries = require('../database')

router.get('/tasks', queries.getTasks)

router.post('/tasks', queries.createTask)

router.get('/tasks/:id', queries.getTaskById)

router.put('/tasks/:id', queries.updateTaskById)

router.delete('/tasks/:id', queries.deleteTaskById)

module.exports = router

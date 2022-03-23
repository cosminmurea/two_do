const router = require('express').Router()
const queries = require('../database')

// Test endpoints using jest + supertest

router.get('/tasks', queries.getTasks)

router.post('/tasks', queries.createTask)

router.get('/tasks/:id', queries.getTaskById)

router.put('/tasks/:id', queries.updateTaskById)

router.put('/tasks/status/:id', queries.updateTaskStatusById)

router.delete('/tasks/:id', queries.deleteTaskById)

module.exports = router

const express = require('express')
const cors = require('cors')
const db = require('./twoDoDB')

const app = express()

const port = 5000

app.use(cors())

app.use(express.json())

app.get('/tasks', db.getTasks)

app.post('/tasks', db.createTask)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

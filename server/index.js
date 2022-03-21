const express = require('express')
const cors = require('cors')
const tasksRouter = require('./routes/tasksRouter')

const app = express()

const port = process.env.SERVER_PORT || 5000

app.use(cors())

app.use(express.json())

app.use(tasksRouter)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

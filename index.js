const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

let tasks = []

app.use(cors())
app.use(express.json())

app.get('/tasks', (req, res) => {
     res.json(tasks)
})

app.post('/tasks', (req, res) => {
     const newTask = req.body.task
     tasks.push(newTask)
     res.status(201).send('Tarea Agregada')
})

app.delete('/tasks', (req, res) => {
     tasks = []
     res.status(204).send('Se han eliminado las tareas')
})

app.listen(PORT, () => {
     console.log(`Servidor creado en el puerto ${PORT}`)
})

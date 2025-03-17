const Task = require('../models/task')

class TaskController {
    static post(req, res) {
        const {id, title, status, projectId, userId} = req.body

        const task = new Task(id, title, status, projectId, userId)
        task.save()

        res.status(201).json(task)
    }

    static get(req, res) {
        const task = Task.fetchAll()

        res.json(task)
    }

    static put(req, res) {
        const { id } = req.params
        const { title, status, projectId, userId} = req.body
        const task = Task.find(project => project.id === parseInt(id))
    
        if (!task) {
            return res.status(404).json({ error: 'Tarefa não encontrado' })
        }
    
        task.title = title
        task.status = status
        task.projectId = projectId
        task.userId = userId
        res.status(200).json(task)
    }

    static delete(req, res) {
        const { id } = req.params
        const index = Task.findIndex(task => task.id === parseInt(id))
    
        if (index < 0) {
            return res.status(404).json({ error: 'Tarefa não encontrado' })
        }
    
        Task.splice(index, 1)
        res.status(204).send()
    }
}

module.exports = TaskController
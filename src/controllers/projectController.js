const Project = require('../models/project')

class ProjectController {
    static post(req, res) {
        const {id, name, description} = req.body

        const project = new Project(id, name, description)
        project.save()

        res.status(201).json(project)
    }

    static get(req, res) {
        const project = Project.fetchAll()

        res.json(project)
    }

    static put(req, res) {
        const { id } = req.params
        const { name, description} = req.body
        const project = Project.find(project => project.id === parseInt(id))
    
        if (!project) {
            return res.status(404).json({ error: 'Projeto não encontrado' })
        }
    
        project.name = name
        project.description = description
        res.status(200).json(project)
    }

    static delete(req, res) {
        const { id } = req.params
        const index = Project.findIndex(project => project.id === parseInt(id))
    
        if (index < 0) {
            return res.status(404).json({ error: 'Projeto não encontrado' })
        }
    
        Project.splice(index, 1)
        res.status(204).send()
    }
}

module.exports = ProjectController
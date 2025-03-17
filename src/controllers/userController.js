const User = require('../models/user')

class UserController {
    static post(req, res) {
        const {id, name, email, password} = req.body

        const user = new User(id, name, email, password)
        user.save()

        res.status(201).json(user)
    }

    static get(req, res) {
        const users = User.fetchAll()

        res.json(users)
    }

    static put(req, res) {
        const { id } = req.params
        const { name, email, password } = req.body
        const user = User.find(user => user.id === parseInt(id))
    
        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }
    
        user.name = name
        user.email = email
        user.password = password
        res.status(200).json(user)
    }

    static delete(req, res) {
        const { id } = req.params
        const index = User.findIndex(user => user.id === parseInt(id))
    
        if (index < 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' })
        }
    
        User.splice(index, 1)
        res.status(204).send()
    }
}

module.exports = UserController
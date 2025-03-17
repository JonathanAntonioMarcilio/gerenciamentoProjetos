const project = []

class Project {
    constructor (id, name, description) {
        this.id = id
        this.name = name
        this.description = description 
    }

    save() {
        project.push(this)
    }

    static fetchAll(){
        return project
    }
}

module.exports = Project
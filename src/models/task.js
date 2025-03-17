const task = []

class Task {
    constructor (id, title, status, projectId, userId) {
        this.id = id
        this.title = title 
        this.status = status 
        this.projectId = projectId 
        this.userId = userId 
    }

    save() {
        task.push(this)
    }

    static fetchAll(){
        return task
    }
}

module.exports = Task
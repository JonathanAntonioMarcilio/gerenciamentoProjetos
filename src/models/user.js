const user = []

class User {
    constructor (id, name, email, password) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    save() {
        user.push(this)
    }

    static fetchAll(){
        return user
    }
}

module.exports = User
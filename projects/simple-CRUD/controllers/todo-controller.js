const TodoModel = require("../models/todo-model")

const TodoController = {
    create: async (todoName) => {
        const todo = {
            name: todoName
        }

        TodoModel.create(todo)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    },

    done: async (id) => {
        TodoModel.findByIdAndUpdate(id, {done: true})
        .then((response) => console.log("done: true"))
        .catch(err => console.log(err))
    },

    pending: async (id) => {
        TodoModel.findByIdAndUpdate(id, {done: false})
        .then((response) => console.log("done: false"))
        .catch(err => console.log(err))
    },

    delete: async(id) => {
        TodoModel.findByIdAndDelete(id)
        .then(response => console.log(`deletado: ${response._id}`))
        .catch(err => console.log(err))
    },

    list: async(type) => {
        let filter

        switch(type) {
            case "all":
                filter = {}
                break
            
            case "done":
                filter = {done: true}
                break

            case "pending":
                filter = {done: false}
                break
        }

        TodoModel.find(filter)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
}

module.exports = TodoController
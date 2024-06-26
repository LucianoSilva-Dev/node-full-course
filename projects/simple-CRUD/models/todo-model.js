const mongoose = require("mongoose")

const { Schema } = mongoose

const ToDoSchema = new Schema({
    name: {type: String, required: true},
    done: {type: Boolean, default: false}
})

const Todo = mongoose.model("ToDo", ToDoSchema)

module.exports = Todo
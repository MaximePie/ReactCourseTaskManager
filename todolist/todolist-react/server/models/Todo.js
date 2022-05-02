const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formeTodo = {task : {type: String}};

let todoSchema = new Schema(formeTodo,
    {
        collection : 'todo'
    }
)

module.exports = mongoose.model('Todo', todoSchema);

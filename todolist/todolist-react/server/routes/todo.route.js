const express = require ('express');
const router = express.Router();
const Todo = require ('../models/Todo.js');

router.route('/').get(async (req,res) => {
    //console.log('Coucou les copains')
    const todos = await Todo.find({})

    res.json({todos})
})

router.route('/').post(async (req,res) => {
    const newTodo = req.fields // = {task: "Ma nouvelle tâche"}
    
    const createdTask = await Todo.create(newTodo)

    res.json({createdTask})
})



// Les exports de ce fichier sont égaux à router.
// Exporter permet de l'importer ailleurs avec require.
module.exports = router;
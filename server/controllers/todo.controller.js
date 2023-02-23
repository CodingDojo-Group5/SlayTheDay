const Todo = require('../models/todo.model');
const User = require('../models/user.model')

module.exports = {
    createTodo: (req,res) => {
        Todo.create(req.body)
        console.log(req.user.id)
        .then(todo => {
            res.json(todo)
            return User.findOneAndAupdate({_id: req.user.id}, {$push: {todos: todo._id}}, {new: true})
        })
        .catch(err => res.json(err))
    },

    getOneTodo: (req, res) => {
        Todo.find({_id: req.params.id})
            .then(todo => res.json(todo))
            .catch(err => res.json(err))
    },

    updateTodo: (req, res) =>{
        Todo.findOneAndAupdate({_id: req.params.id}, req.body, {new:true})
            .then(todo => res.json(todo))
            .catch(err => res.json(err))
    },

    deleteTodo: (req, res) => {
        Todo.deleteOne({_id: req.params.id})
            .then(deletedTodo => res.json(deletedTodo))
            .catch((err) => console.log(err));
    }
}
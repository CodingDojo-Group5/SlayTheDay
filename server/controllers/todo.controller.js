const Todo = require('../models/todo.model');
const User = require('../models/user.model')

module.exports = {
    createTodo: (req, res) => {
        Todo.create(req.body)
            .then(todo => {
                res.json(todo)
                return User.findOneAndUpdate({ _id: req.user.id }, { $push: { todos: todo._id } }, { new: true })
            })
            .catch(err => res.json(err))
    },

    getOneTodo: (req, res) => {
        console.log('getone')
        console.log("paramsid", req.params.id)
        Todo.find({ _id: req.params.id })
            .then(todo => res.status(200).json(todo))
            .catch(err => res.status(500).json(err))
    },

    updateTodo: (req, res) => {
        Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(todo => res.json(todo))
            .catch(err => res.json(err))
    },

    deleteTodo: async (req, res) => {
        await User.findOneAndUpdate({ _id: req.user.id }, { $pull: { todos: req.params.id } })
        await Todo.deleteOne({ _id: req.params.id })
            .then(deletedTodo => res.json(deletedTodo))
            .catch((err) => console.log(err));
    }
}
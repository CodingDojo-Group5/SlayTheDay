const { mongoose, Schema } = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please specify your task"],
        minlength: [1, "Please specify your task"]
    },

    dueDate: {
        type: String,
    },

    todoStatus: {
        type: String,
        enum: {
            values: ['not-started', 'in-progress', 'completed'],
            message: "Status is Required"
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("Todo", TodoSchema)
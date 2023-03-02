const { mongoose, Schema } = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please enter the task you want to accomplish"]
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
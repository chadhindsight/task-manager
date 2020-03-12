const mongoose = require('mongoose')

// Model for tasks!
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = Task
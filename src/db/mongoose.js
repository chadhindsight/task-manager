const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})


// const me = new User({
//     name: 'Devin',
//     email: '345@me.DEEZ.com'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

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
const smack = new Task({
    description: "Time for your favorite activity"
})

smack.save().then(() => {
    console.log(smack)
}).catch((error) => {
    console.log('Error!', error)
})
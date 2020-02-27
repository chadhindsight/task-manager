const mongoose = require('mongoose')
// Allows mongoose to connect to db
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        validate(value) {
            if(value < 0) {
                throw new Error("Age must be a positive number")
            }
        }
    }
})

const me = new User({
    name: 'Devin'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: Boolean
// })
// const smack = new Task({
//     description: "Time for your favorite activity",
//     completed: true
// })
// smack.save().then(() => {
//     console.log(smack)
// }).catch((error) => {
//     console.log('Error!', error)
// })
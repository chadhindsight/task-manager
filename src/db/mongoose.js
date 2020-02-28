const mongoose = require('mongoose')
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        age: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Age must be a positive number")
            }
        }
    },
    // validator for email
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
               throw new Error('Email is not valid!') 
            }
        }
    },
    password: {
        type:String,
        required: true,
        minLength: 7,
        validate(value){
            if (value.toLowerCase().includes('password')) {
                throw new Error('password cannot contain phrase password!')
            }
        },
        trim: true
    }
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
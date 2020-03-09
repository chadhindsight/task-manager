const mongoose = require('mongoose')
const validator = require('validator');

const userSchema = new mongoose.Schema({
     
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            age: 0,
            validate(value) {
                if (value < 0) {
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
                if (!validator.isEmail(value)) {
                    throw new Error('Email is not valid!')
                }
            }
        },
        password: {
            type: String,
            required: true,
            minLength: 7,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error('password cannot contain the word password!')
                }
            },
            trim: true
        }
    })
userSchema.pre('save', async function(next) {
    const user = this;
    
    console.log('Just before saving!')
    
    //next() signals that the middle operation is done and moves on to the next
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User;
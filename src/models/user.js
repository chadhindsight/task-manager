const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcrypt');

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
            unique: true,
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
userSchema.methods.generateAuthToken = async function() {
    
}   

userSchema.statics.findByCredentials = async(email, password)=> {
    const user = await User.findOne({email})

    if(!user){
        throw new Error('Unable to log in')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error('Cannot log in')
    }
    return user
}    
// Hash the plain text password
userSchema.pre('save', async function(next) {
    const user = this;
    
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    //next() signals that the middle operation is done and moves on to the next
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User;
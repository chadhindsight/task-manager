const express = require('express');
require('./db/mongoose');
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000;
// Parse JSON for express
app.use(express.json())

app.post('/users', (req, res)=>{
    const user = new User(req.body)

    user.save().then(()=>{
        res.status(201)
        res.send(user)
    }).catch(e =>{
        // Always set status before send call
        res.status(400)
        res.send(e)
    })
})

app.get('/users',(req,res) =>{
    User.find({}).then(users =>{
        res.send(users)
    }).catch(e=>{

    })
})

// CREATE NEW TASK
app.post('/tasks', (req,res) =>{
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201)

        res.send(task)
    }).catch(e => {
        res.status(400)
        res.send(e)
    })
})

app.listen(port, () =>{
    console.log(`sesrver is up on ${port}`);
})
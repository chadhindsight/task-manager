const express = require('express');
require('./db/mongoose');
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000;
// Parse JSON for express
app.use(express.json())

app.post('/users', async (req, res)=>{
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
})

app.get('/users', async (req,res) =>{
    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)

    } catch(e) {
        res.status(500).send()
    }
})
// CREATE NEW TASK
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

// FETCH ALL TASKS
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})
    try {
        res.send(tasks)
    } catch(e) {
        res.status(400).send(e)
    }
    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

app.get('/tasks/:id', async (req, res) => {
    const taskId = req.params.id
    try {
        if (!task) {
            return res.status(404).send()
        }
        const task = Task.findById(taskId)
    }

    catch(e) {
        res.status(500).send()
    }
})
// update task by id!
app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']

    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({error: 'Update invalid'})
    }
})

app.listen(port, () =>{
    console.log(`sesrver is up on ${port}`);
})
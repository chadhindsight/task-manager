const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images'
})
app.post('/upload', upload.single, (req,res) =>{
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {

    const user = await User.findById('5e6abd00964e6913838c5701')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()
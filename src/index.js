const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const jwt = require('jsonwebtoken');

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
// using bcrypt
const bcrypt = require('bcrypt')

const myFunction = async () => {
   const token = jwt.sign({_id: 'wwww'}, 'nicollegotit!');
   console.log(token)

    const data = jwt.verify(token, 'nicollegotit!', {expiresIn: '7 days'});
    console.log(data)
}
myFunction()
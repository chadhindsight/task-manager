const express = require('express');

const app = express()
const port = process.env.PORT || 3000;
// Parse JSON for express
app.use(express.json())
app.post('/users', (req, res)=>{
    console.log(req.body)
    res.send('Testing')
})

app.listen(port, () =>{
    console.log(`sesrver is up on ${port}`);
})
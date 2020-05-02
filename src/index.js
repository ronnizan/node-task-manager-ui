// const app = require('./app')
const express = require('express');
require('./db/mongoose');
const cookieParser = require('cookie-parser')
const port = process.env.PORT;
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();


app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(userRouter)
app.use(taskRouter)
app.listen(port, () => {
    console.log('server up in: ' + port)
})






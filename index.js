const todoList = require('./routers/todoList')

const express = require('express')
const connectDB = require('./mongoDB/connect')
const app = express()
const cors = require("cors");

require('dotenv').config()

app.use(cors());

app.use(express.json())

app.use('/todo', todoList)

const port = process.env.PORT || 3001

const start = async function () {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, function (){
        console.log(`App running port: ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()
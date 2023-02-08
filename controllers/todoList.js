const TodoList = require("../models/todoList")


const getTodoList = async (req, res) => {
    try{
        // Query
        const todolists = await TodoList.find({})
        res.status(200).json({todolists})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const trueList = async (req, res) => {
    try{
        // Query
        const list = await TodoList.find({}).where("isChecked").equals(true)
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const falseList = async (req, res) => {
    try{
        // Query
        const list = await TodoList.find({}).where("isChecked").equals(false)
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const newTodoItem = async (req, res) => {
    try{
        // Query
        const list = await TodoList.create(req.body)
        res.status(201).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const deleteTodoItem = async function (req,res){
    try{
        const {id: todoItemID} = req.params
        const list = await TodoList.findOneAndDelete({_id: todoItemID})
        if(!list){
            return res.status(404).json({msg: `no Task with id ${todoItemID}`})
        }
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const deleteTodoList = async (req, res) => {
    try{
        const list = await TodoList.deleteMany({})
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const updateTodoItem = async function (req,res){
    try{
        const {id: todoItemID} = req.params
        const list = await TodoList.findOneAndUpdate({_id: todoItemID}, req.body,{
            new: true,
            runValidators: true
        }) 
        if(!list){
            return res.status(404).json({msg: `no task with id ${todoItemID}`})
        }
        res.status(200).json({list})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

module.exports = { getTodoList, newTodoItem, deleteTodoItem, deleteTodoList, updateTodoItem, trueList, falseList }
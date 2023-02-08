const { getTodoList, newTodoItem, deleteTodoItem, deleteTodoList, updateTodoItem, falseList, trueList } = require('../controllers/todoList')

const express = require('express')
const router = express.Router()


router.route('/list/').get(getTodoList).post(newTodoItem).delete(deleteTodoList)
router.route('/list/true').get(trueList)
router.route('/list/false').get(falseList)
router.route('/list/:id').delete(deleteTodoItem).put(updateTodoItem).patch(updateTodoItem)

module.exports =  router;
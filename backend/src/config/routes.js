const express = require('express')
const Todo = require('../api/todo')

module.exports = function (server) {
  const router = express.Router()
  server.use('/api', router)

  router.get('/todos', async (req, res)=> {
    res.send(await Todo.find())
  })

  router.post('/todo', async (req, res)=> {
    const { id, description, done } = req.body;

    if (id) {
      const todo = new Todo({ id, description, done })
      const response = await todo.updateOne(todo)
      res.send(response)
    } else {
      const todo = new Todo({ description, done })
      const response = await todo.save()
      res.send(response)
    } 
  })

  router.get('/todo/:id', async (req, res)=> {
    const { id } = req.params
    res.send(await Todo.findById(id))
  })

  router.delete('/todo/:id', async (req, res)=> {
    const { id } = req.params
    res.send(await Todo.deleteOne({_id: id}))
  })

}
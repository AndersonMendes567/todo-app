const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
})

module.exports = Todo
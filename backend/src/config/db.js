const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', async () => {
  console.log('Conexão bem-sucedida com o MongoDB.');

  /* 
  const Todo = mongoose.model('Todo', {
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
  })
  console.log(Todo.find());
  
  const todo = new Todo({
    description: 'Teste 2',
    done: false,  

  })

  console.log('método de salvar: ', todo.save);
  console.log(await todo.save()); */

});

const port = 3003
const bodyParser = require('body-parser')
const express = require('express')
const server = express();

server.use(bodyParser.urlencoded({extended: true}))

server.use(bodyParser.json())

server.get('/', (req, res)=> {
  res.send('ok')
})

server.listen(port, ()=> {
  console.log(`Servidor rodando na porta ${port}`)
})

module.exports = server
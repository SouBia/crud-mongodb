const express = require('express')
require('./config/database')

const port = 3031
const app = express()

const controller = require('./src/controller/produtos')

app.use(express.json())

app.get('/produtos', controller.getProdutos)
app.get('/produtos/:id', controller.getProdutos)
app.post('/produtos', controller.postProdutos)
app.put('/produtos/:id', controller.putProdutos)
app.delete('/produtos/:id', controller.deleteProdutos)

app.listen(port, (erro) => {
    if (erro) console.error(erro)
    return console.log(`Server runing on port ${port}`)
})
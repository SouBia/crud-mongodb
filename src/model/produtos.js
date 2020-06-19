const mongoose = require('mongoose')

let produtosSchema = new mongoose.Schema({
    nome:{type: String, required: true},
    preco: {type: Number, required: true}
})


module.exports = mongoose.model('Produtos', produtosSchema)

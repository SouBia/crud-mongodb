const Produtos = require('../model/produtos')

const getProdutos = async (id) => {
    if(!id) {
        return await Produtos.find()
    }

    let produto = await Produtos.findById(id)
    return produto ? produto:null
}

const postProdutos = async (obj) => {
    const produto = new Produtos(obj)
    return await produto.save()
}

const putProdutos = async (id, body)=> {
    let produtoParaAlterar = await Produtos.findByIdAndUpdate(id,body)
    return produtoParaAlterar
}

const deleteProdutos = async (id)=> {
    let produtoParaDeletar = await Produtos.findByIdAndDelete(id)
    return  produtoParaDeletar
}

module.exports = { getProdutos, postProdutos, putProdutos, deleteProdutos }
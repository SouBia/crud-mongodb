const service = require('../service/produtos')

const getProdutos = async (req,res) =>{
    const resultado = await service.getProdutos(req.params.id)
    res.send(resultado)
}

const postProdutos = async (req,res) =>{
    const resultado = await service.postProdutos(req.body)
    res.send(resultado)
}

const putProdutos = async (req,res) =>{
    const resultado = await service.putProdutos(req.params.id, req.body)
    res.send(resultado)
}

const deleteProdutos = async (req,res) =>{
    const resultado = await service.deleteProdutos(req.params.id)
    res.send(resultado)
}

module.exports = { getProdutos, postProdutos, putProdutos, deleteProdutos }

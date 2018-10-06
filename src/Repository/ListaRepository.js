const Produto = require("./../Models/ListaModel")

exports.getProdutos = () => Produto.find()

exports.getProdutosPeloId = (id) => Produto.find({id: id})

exports.setProduto = (produto) => Produto.create(produto)

exports.updateProduto = (id, data) => {
    const dados = {
        id: id,
        nome: data.nome,
        tipo: data.tipo,
        preco: data.preco,
        marca: data.marca
    }

    return Produto.updateOne({id: id}, data)
}

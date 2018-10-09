const Produto = require("./../Models/ListaModel")

exports.insereDados = (dados) => {
    let idIgual = true, id

    Produto.find()
        .then(produtos => {
            while (idIgual) {
                id = Math.round(Math.random() * produtos.length)
                idIgual = produtos.some(produto => produto.id === id)
            }
            dados.id = id
            Produto.create(dados)
        })
}

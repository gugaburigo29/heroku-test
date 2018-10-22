const Produto = require("../Models/lista.model")
const Usuario = require("../Models/usuario.model")

exports.insereDados = (dados) => {
    let idIgual = true, id

    Produto.find()
        .then(produtos => {
            while (idIgual) {
                id = Math.round(Math.random() * produtos.length)
                idIgual = produtos.some(produto => produto.id === id)
            }
            dados.id = id
            Usuario.findOne({_id: dados.idUser})
                .then((res) => {
                    dados.criadoPor = res
                    Produto.create(dados)
                })

        })
}

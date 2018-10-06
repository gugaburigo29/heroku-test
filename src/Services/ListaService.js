const ListaRepository = require('./../Repository/ListaRepository')

exports.getProdutoPeloId = (id) => ListaRepository.lista.filter(res => res.id == id)

exports.insereDados = (dados) => {
    let idIgual = true, id

    ListaRepository.getProdutos()
        .then(produtos => {
            while (idIgual) {
                id = Math.round(Math.random() * produtos.length)
                idIgual = produtos.some(produto => produto.id === id)
            }
            dados.id = id
            ListaRepository.setProduto(dados)
        })
}

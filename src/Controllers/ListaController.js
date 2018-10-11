const ListaService = require("./../Services/ListaService")
const Produtos = require("./../Models/ListaModel")

exports.getTodosProdutos = (req, res, next) => {
    Produtos.find()
        .then((produtos) => {
            res.status(200)
                .send(produtos)
        })
        .catch(err => {
            res.status(500)
                .send(err)
        })
}

exports.insereNaLista = (req, res, next) => {
    res.send(ListaService.insereDados(req.body))
}

exports.getProdutoPeloId = (req, res, next) => {
    Produtos.find({id: req.params.id})
        .then(produto => {
            res.send(
                verificaSePodeRetornarLissta(produto)
            )
        })
        .catch(err => {
            res.status(500)
                .send(err)
        })
}

exports.atualizaProduto = (req, res, next) => {
    Produtos.updateOne({id: req.params.id}, req.body)
        .then(produto => {
            res.send(produto).status(200)
        })
        .catch(err => {
            res.status(500)
                .send(err)
        })
}

exports.removeProdutoPeloId = (req, res, next) => {
    Produtos.find({id: req.params.id})
        .remove()
        .then(produto => {
            res.send(
               produto
            )
        })
        .catch(err => {
            res.status(500)
                .send(err)
        })
}
function verificaSePodeRetornarLissta(ListaDeProdutos) {
    return ListaDeProdutos.length > 0 ?
        ListaDeProdutos :
        {
            res: "Nenhum produto encontrado",
            erro: 404
        }
}

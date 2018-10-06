const ListaRepository = require("./../Repository/ListaRepository")
const ListaService = require("./../Services/ListaService")

exports.getTodosProdutos = (req, res, next) => {
    ListaRepository.getProdutos()
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
    ListaRepository.getProdutosPeloId(req.params.id)
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
    ListaRepository.updateProduto(req.params.id, req.body)
        .then(produto => {
            res.send(produto).status(200)
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

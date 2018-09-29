const ListaRepository = require("./../Repository/ListaRepository")
const ListaService = require("./../Services/ListaService")

exports.lista = (req, res, next) => {
    res.status(200)
    res.send(ListaRepository.lista)
}

exports.insereNaLista = (req, res, next) => {
    const json = req.body
    res.status(200)

    ListaService.insereDados(req.body)
}

exports.getProdutoPeloId = (req, res, next) => {
    res.status(200)
    res.send(
        verificaSePodeRetornarLissta(ListaService.getProdutoPeloId(req.params.id))
    )
}

exports.atualizaProduto = (req, res, next) => {

}

function verificaSePodeRetornarLissta(ListaDeProdutos) {
    return ListaDeProdutos.length > 0 ?
        ListaDeProdutos :
        {
            res: "Nenhum produto encontrado",
            erro: 404
        }
}

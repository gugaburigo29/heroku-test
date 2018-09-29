const ListaRepository = require('./../Repository/ListaRepository')

exports.getProdutoPeloId = (id) => ListaRepository.lista.filter(res => res.id == id)

exports.insereDados = (dados) => {
    let idIgual = true, id

    while (idIgual) {
        id = Math.round(Math.random() * 1000)
        idIgual = ListaRepository.lista.some(res => res.id == id)
        if (!idIgual){
            dados.id = id
            ListaRepository.lista.push(dados)
        }
    }
}

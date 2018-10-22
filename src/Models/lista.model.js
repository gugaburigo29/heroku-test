const mongoose = require("mongoose")

const listaSchema = new mongoose.Schema({
    id: {type: Number},
    nome: {type: String},
    imagem: {type: String},
    tipo: {type: String},
    criadoPor: {type: Object},
    preco: {type: Number},
    marca: {type: String}
})

module.exports = mongoose.model('Produtos', listaSchema)

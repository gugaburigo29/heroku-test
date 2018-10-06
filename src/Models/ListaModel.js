const mongoose = require("mongoose")

const listaSchema = new mongoose.Schema({
    id: {type: Number},
    nome: {type: String},
    tipo: {type: String},
    preco: {type: Number},
    marca: {type: String}
})

module.exports = mongoose.model('Produtos', listaSchema)

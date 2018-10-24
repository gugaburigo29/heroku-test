const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    nome: {type: String},
    senha: {type: String},
    level: {type: String}
})

module.exports = mongoose.model('Usuario', usuarioSchema)

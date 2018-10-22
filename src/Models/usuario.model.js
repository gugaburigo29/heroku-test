const mongoose = require("mongoose")

const usuarioSchema = new mongoose.Schema({
    nome: {type: String},
})

module.exports = mongoose.model('Usuario', usuarioSchema)

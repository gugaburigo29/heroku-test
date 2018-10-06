const express = require('express')
const router = express.Router()

const ListaController = require('./../Controllers/ListaController')

router.get('/', ListaController.getTodosProdutos)
router.post('/', ListaController.insereNaLista)
router.get('/:id', ListaController.getProdutoPeloId)
router.put('/:id', ListaController.atualizaProduto)

module.exports = router

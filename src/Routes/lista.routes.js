const express = require('express')
const router = express.Router()

const ListaController = require('../Controllers/lista.controller')

router.get('/', ListaController.getTodosProdutos)
router.post('/', ListaController.insereNaLista)
router.get('/:id', ListaController.getProdutoPeloId)
router.put('/:id', ListaController.atualizaProduto)
router.delete('/:id', ListaController.removeProdutoPeloId)

module.exports = router

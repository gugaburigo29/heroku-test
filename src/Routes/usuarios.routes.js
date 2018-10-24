const express = require('express');
const router = express.Router();
const UsuariosController = require("../Controllers/usuarios.controller");

router.get('/', UsuariosController.pegaTodosUsuarios);
router.get('/:id', UsuariosController.pegaUsuarioPeloID);
router.post('/', UsuariosController.verificaLogin);
router.post('/criar-usuario', UsuariosController.criaUsuario);

module.exports = router;



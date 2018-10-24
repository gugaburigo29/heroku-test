const express = require('express');
const router = express.Router();
const UsuariosController = require("../Controllers/usuarios.controller");

router.get('/', UsuariosController.getUsuarios);
router.get('/:id', UsuariosController.getUsuario);
router.post('/', UsuariosController.setLogin);

module.exports = router;



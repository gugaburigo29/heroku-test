const Usuarios = require('../Models/usuario.model');

exports.getUsuarios = function (req, res, next) {
    Usuarios.find()
        .then(function (usuarios) {
            let usuariosFiltrados = [];
            usuarios.forEach(function (usuario) {
                const {nome, level = "Não definido", _id} = usuario;
                usuariosFiltrados.push({nome, level, _id})
            });
            res.send(usuariosFiltrados)
        })
};

exports.getUsuario = function (req, res, next) {
    const {id} = req.params
    Usuarios.find({_id: id})
        .then(function (usuario) {
            if (usuario) {
                res.send(usuario).status(200)
            } else {
                res.send({
                    status: 404,
                    message: "Usuario nao encontrado"
                }).status(404)
            }
        })
        .catch(function (err) {
            res.send(err)
        })
};

exports.setLogin = function (req, res, next) {
    const {nome, senha} = req.body;
    Usuarios.findOne({nome})
        .then(verificaUsuario)
        .catch(err => res.send(err));

    function verificaUsuario(usuario) {
        if (usuario) {
            if (usuario.senha === senha) {
                res.send({
                    status: 200,
                    message: 'Conectado'
                }).status(200)
            } else {
                res.send({
                    status: 404,
                    message: 'Senha incorreta'
                }).status(404)
            }
        } else {
            res.send({
                status: 404,
                message: 'Usuario não encontrado'
            }).status(404)
        }
    }
};

exports.criarUsuario = function (req, res, next) {
    const {nome, senha, level} = req.body;

    Usuarios.findOne({nome})
        .then(function (usuario) {
            if (!usuario) {
                criaUsuario(nome, senha, level);
            } else {
                res.send({
                    message: "Usuario já cadastrado"
                })
            }
        })

    function criaUsuario(...dados) {
        Usuarios.create({nome, senha, level})
            .then(function (usuario) {
               res.send({
                   status: 200,
                   message: "Usuario criado"
               }).status(200)
            })
            .catch(function (err) {
                res.send({
                    status: 500,
                    message: "Erro interno"
                }).status(404)
            });
    }
}

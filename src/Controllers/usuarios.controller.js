const Usuarios = require('../Models/usuario.model');

exports.pegaTodosUsuarios = function (req, res, next) {
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

exports.pegaUsuarioPeloID = function (req, res, next) {
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

exports.verificaLogin = function (req, res, next) {
    const {nome, senha} = req.body;
    if (nome && senha) {
        Usuarios.findOne({nome})
            .then(verificaUsuario)
            .catch(err => res.send(err));
    } else {
        res.status(500)
            .send({
                status: 500,
                message: "Senha ou nome nao informado"
            })
    }

    function verificaUsuario(usuario) {
        if (usuario) {
            if (usuario.senha === senha) {
                res.status(200)
                    .send({
                        status: 200,
                        message: 'Conectado',
                        usuario
                    })
            } else {
                res.status(404)
                    .send({
                        status: 404,
                        message: 'Senha incorreta'
                    })
            }
        } else {
            res.status(404)
                .send({
                    status: 404,
                    message: 'Usuario não encontrado'
                })
        }
    }
};

exports.criaUsuario = function (req, res, next) {
    const {nome, senha, level} = req.body;

    if (nome && senha) {
        Usuarios.findOne({nome})
            .then(function (usuario) {
                if (!usuario) {
                    criaUsuario();
                } else {
                    res.status(400)
                        .send({
                            message: "Usuario já cadastrado",
                            status: 400
                        })
                }
            })
    } else {
        res.status(400)
            .send({
                message: "Nome ou senha não informado",
                status: 400
            })
    }

    function criaUsuario() {
        Usuarios.create({nome, senha, level})
            .then(function (usuario) {
                res.status(200)
                    .send({
                        status: 200,
                        message: "Usuario criado",
                        res: usuario
                    })
            })
            .catch(function (err) {
                res.status(500)
                    .send({
                        status: 500,
                        message: "Erro interno",
                        err
                    })
            });
    }
}

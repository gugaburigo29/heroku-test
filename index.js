const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const listaRoutes = require('./src/Routes/lista.routes');
const usuariosRoutes = require('./src/Routes/usuarios.routes');
const port = process.env.PORT || 8080;

// Conexao com o DB
require('./src/Config/database');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true,
}));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/lista', listaRoutes);
app.use('/usuarios', usuariosRoutes);

app.listen(port, function () {
    console.log(`Servidor rodando na porta http://localhost:8080`)
});

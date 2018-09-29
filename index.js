const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const routesApi = require('./src/Routes/routesApi')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true,
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/lista', routesApi)

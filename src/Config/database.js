const mongoose = require('mongoose')
const db = mongoose.connection;
mongoose.Promise = global.Promise

const options = {useNewUrlParser: true, user: 'admin', pass: 'gugaxx29'}
db.on('error', console.error);
db.once('open', function () {
    console.log('Conectado ao MongoDB.')
});

module.exports = mongoose.connect("mongodb://@ds125073.mlab.com:25073/produtos", options)

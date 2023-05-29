const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Register = Schema({
    dpi: Number,
    idPresidente: Number,
    idAlcalde: Number,
    idDiputado: Number
});
module.exports = mongoose.model('Register', Register);
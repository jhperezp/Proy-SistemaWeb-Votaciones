const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = Schema({
    email: String,
    password: String,
    admin: Boolean,
    NOMBRE_COMPLETO: String,
    DPI: Number,
    MUNICIPIO: String,
    NO_ENPADRO: Number

});
module.exports = mongoose.model('User', User);
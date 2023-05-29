const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Enable = Schema({
    enable: Boolean,
    id: Number
});
module.exports = mongoose.model('Enable', Enable);
const Register = require('../models/register.model');

function saveRegister(req, res) {
    let { dpi, idPresidente, idAlcalde, idDiputado } = req.body
    const newRegister = new Register({
        dpi,
        idPresidente,
        idAlcalde,
        idDiputado
    });
    newRegister.save()
        .then(() => { return res.status(200).send({ Register: newRegister }) })
        .catch((error) => { return res.status(500).send({ code: 500, mensaje: 'Error en la peticion ', error: error }) });
}

function getRegisterAll(req, res) {

    Register.find()
        .then((registros) => { return res.status(200).send({ code: 200, count: registros.length, data: registros }) })
        .catch((error) => { return res.status(500).send({ code: 500, mensaje: "Error en la peticion", error: error }) })
}
function getRegisterByUser(req, res) {
    const { dpi } = req.body
    Register.findOne({ dpi: dpi })
        .then((registro) => { return res.status(200).send({ code: 200, data: registro }) })
        .catch((error) => { return res.status(500).send({ code: 500, mensaje: "Error en la peticion", error: error }) })
}
module.exports = {
    saveRegister,
    getRegisterAll,
    getRegisterByUser
}
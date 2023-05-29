const Enable = require('../models/enable.model');

function saveRegister(req, res) {
    const newRegister = new Enable({
        id: 1,
        value: true
    });
    newRegister.save()
        .then(() => { return res.status(200).send({ Register: newRegister }) })
        .catch((error) => { return res.status(500).send({ code: 500, mensaje: 'Error en la peticion ', error: error }) });
}

async function updateEnable(req, res) {
    try {
        const { id, value } = req.body;

        const enable = await Enable.findOne({ id: id });
        if (!enable) {
            return res.status(404).send({ code: 404, mensaje: 'Enable no encontrado' });
        }

        enable.enable = value;
        enable.id = 1;

        const updatedEnable = await enable.save();

        return res.status(200).send({ data: updatedEnable });
    } catch (error) {
        console.error('Error en la peticion:', error);
        return res.status(500).send({ code: 500, mensaje: 'Error en la peticion', error: error });
    }
}


function getEnable(req, res) {

    Enable.findOne()
        .then((registros) => { return res.status(200).send({ code: 200, data: registros }) })
        .catch((error) => { return res.status(500).send({ code: 500, mensaje: "Error en la peticion", error: error }) })
}
module.exports = {
    saveRegister,
    updateEnable,
    getEnable
}
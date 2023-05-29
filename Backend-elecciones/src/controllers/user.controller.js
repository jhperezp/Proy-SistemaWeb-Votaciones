const User = require('../models/user.model');
const bcrypt = require('bcrypt')


async function saveUser(req, res) {
    const { email, password, NOMBRE_COMPLETO, DPI, MUNICIPIO, NO_ENPADRO } = req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newRegister = new User({
        email: email,
        password: hashedPassword,
        admin: true,
        NOMBRE_COMPLETO: NOMBRE_COMPLETO,
        DPI,
        MUNICIPIO,
        NO_ENPADRO
    });
    newRegister.save()
        .then(() => { return res.status(200).send({ Register: newRegister }) })
        .catch((error) => { return res.status(500).send({ code: 500, mensaje: 'Error en la peticion ', error: error }) });
}
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).send({ code: 404, mensaje: 'Usuario no encontrado' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).send({ code: 401, mensaje: 'Contraseña incorrecta' });
        delete user.password
        return res.status(200).send({
            code: 200,
            mensaje: 'Usuario encontrado',
            user: user
        });
    } catch (error) {
        return res.status(500).send({ code: 500, mensaje: 'Error en la petición', error: error });
    }
}

module.exports = {
    saveUser,
    login
}
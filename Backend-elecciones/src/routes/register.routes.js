const express = require('express');
const registerController = require('../controllers/register.controller');
const enableController = require('../controllers/enable.controller')

const api = express.Router();

api.post('/saveRegister', registerController.saveRegister);
api.get('/getRegisterAll', registerController.getRegisterAll);
api.post('/getRegisterByUser', registerController.getRegisterByUser);
api.post('/enable', enableController.saveRegister)
api.post('/enableUpdate', enableController.updateEnable)
api.get('/getEnable', enableController.getEnable)

module.exports = api;
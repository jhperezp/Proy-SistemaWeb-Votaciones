const express = require('express');
const userController = require('../controllers/user.controller')

const api = express.Router();

api.post('/saveUser', userController.saveUser);
api.post('/login', userController.login)
module.exports = api;
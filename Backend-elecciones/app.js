const express = require('express');
const cors = require('cors');
var app = express();
const RegisterRoutes = require('./src/routes/register.routes');
const userRoutes = require('./src/routes/user.routes');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.use('/api', RegisterRoutes, userRoutes);


module.exports = app;
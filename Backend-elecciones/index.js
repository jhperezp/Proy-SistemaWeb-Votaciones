const mongoose = require('mongoose');
const app = require('./app');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb+srv://user:YTOw6v6axPXNLABN@elecciones.jakzcb4.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    mongoose.connect('mongodb+srv://jperezp24:eeTdP82wCRqp263Y@cluster0.rozop5i.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, function () {
        console.log("Esta corriendo en el puerto " + PORT)
    })

}).catch(error => console.log(error));
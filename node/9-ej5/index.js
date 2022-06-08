//llamamos al modulo express

const express = require('express');

const app = express();

app.set('views', './vistas');
app.set('view engine', 'pug');

//configuracion de ruta por defecto 
app.get('/', function(req, res) {
    res.render('index');
});
app.listen('3000', function() {
    console.log("Aplicación iniciada en el puerto 3000");
})
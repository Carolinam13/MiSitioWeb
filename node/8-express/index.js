const express = require('express');

const server = express();
server.use(express.json());

server.listen('3000', ()=> {
        console.log('server on port 3000');
})

server.get('/', function(req, res){
    res.send('<h1> Este es mi primer hola mundo usando server!!</h1>');
    res.end();
});

server.get('/mision', function(req, res) {
    res.send("<h1>Misión</h1><p>Nuestra misión es mejorar día a día nuestro futuro</p>")
});

server.get('/vision', function(req, res) {
    res.send("<h1>Visión</h1><p>Nuestra visión</p>")
});

server.post('/SobreNosotros', function(req, res){
    res.send("<h1>Sobre nosotros. Conozcanos!!.:)</h1>")
});

server.put('/contactanos', function(req, res){
    res.send("<h1>Contactanos y informate mas acerca de nosotros!!:)</h1>")
});

server.delete('/cerrarsesion', function(req, res){
    res.send("<h1>Gracias por usar nuestros servicios!!:)</h1>")
});

//JSON

server.get('/json1', function(req, res) {
    res.json({
        name: "Carolina",
        lastName: "Muñoz"
    });
});
const http = require('http');

http.createServer(function (req, res){
res.write("<h1>Este es mi primer servidor en node.js</h1>");
}).listen(3000); 
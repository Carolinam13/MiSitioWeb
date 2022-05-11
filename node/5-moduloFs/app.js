const fs = require("fs");

fs.readFile('\prueba.txt', 'utf-8', (err, data) => {
if (err) {
    console.log("Error: ", err);
}
    else {
        console.log(data);
    }
});

let insertarTexto = "Holis. vengo desde Node.js V2";
fs.writeFile('\prueba.txt', insertarTexto, (err) => {
if (err) {
    console.log("Error: ", err);    
}
else console.log("Operación finalizada con exito");
});
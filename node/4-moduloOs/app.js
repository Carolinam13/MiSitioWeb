const os = require("os");

console.log("Identificación del equipo");
console.log("Procesador: ", os.cpus());
console.log("Arquitectura: ", os.platform(), os.arch());
console.log("Memoria disponible ", os.freemem());
console.log(os.uptime());
console.log(os.version());
console.log(os.networkInterfaces());
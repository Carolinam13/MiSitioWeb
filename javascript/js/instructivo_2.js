"Use strict"

/* Definir un sistema que me permita identificar si el usuario ingresó más de 50 caracteres y 
mostrar un mensaje indicándole que excedió el número de caracteres permitidos. */

var mensajeUsuario = "Mi nimbre es carolina carolina mi nombre es  carolina carolinao carolina carolina !";
var longitudMnsajeUsuario = mensajeUsuario.length;

if (longitudMnsajeUsuario >50) {
    console.log("El mensaje excede la longitud de caracteres permitidos");
}
else if (longitudMnsajeUsuario <50) {
    console.log("El mensaje fue enviado con exito");
}
else {
   console.log("Ha surgido un error!");
}
/* Definir un sistema que me permita buscar entre los elementos de un arreglo si hay una 
coincidencia en la busqueda. Si encuentra la coincidencia mostrar el mensaje indicando que la 
coincidencia fue encontrada. Ej: La palabra a buscar podría ser un nombre. Si el nombre se 
encuentra dentro del arreglo, deberá imprimir un mensaje indicando que el nombre fue 
encontrado. */

var profesores = ["Carolina", "Liliana", "Mauricio", "Alexander"];
console.log("El nombre del profesor fue encontrado: " + profesores[0]);


/* Teniendo en cuenta el arreglo de aprendices, definir un sistema que me permita listar todos los 
Aprendices y cada aprendiz tendrá su respectivo número. */

var usuario1 = new Array();
usuario1[0] = "Carolina Munyoz";
usuario1[1] = "Liliana Anacona";
usuario1[2] = "Sebastian Lopez";
usuario1[3] = "Daniel Bravo";
usuario1[4] = "Felipe Moreno"
usuario1[5] = "Camilo Rojas";
usuario1[6] = "Alexander Castanyo";

console.log("1 " + usuario1[0]);
console.log("2 " + usuario1[1]);
console.log("3 " + usuario1[2]);
console.log("4 " + usuario1[3]);
console.log("5 " + usuario1[4]);
console.log("6 " + usuario1[5]);
console.log("7 " + usuario1[6]);

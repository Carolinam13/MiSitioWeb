"use strict"

/* 1er forma de declarar un array */

var usuario1 = new Array();
usuario1[0] = 1;
usuario1[1] = 1004269123;
usuario1[2] = "Carolina";
usuario1[3] = "Samboni";
usuario1[4] = "2021-11-25"
usuario1[5] = "Cartagena";
usuario1[6] = "Latam";

/* Segunda forma de crear un arreglo */

var usuario2 = new Array(2, "1004269123", "Alexander", "Muñoz", "2002-10-13", "San Andres", "Avianca");

/* Tercer forma */
var usuario3 = [3, "1004269134", "Maria", "Medina", "2005-10-23", "Cartagena", "American Airlines"]

console.log("Nombre usuario 1: " + usuario1[2]);
console.log("Nombre usuario 2: " + usuario2[2]);
console.log("Nombre usuario 3: " + usuario3[2]);

/* Sistema que me permita contar los caracteres de una frase.
 si el usuario supero el tope(20), informarle a traves de un mensaje
 */

 var mensajeUsuario = "No me gusto!";
 var longitudMnsajeUsuario = mensajeUsuario.length;

 if (longitudMnsajeUsuario >20) {
     console.log("El mensaje excede la longitud de caracteres permitidos");
 }
 else if (longitudMnsajeUsuario <20) {
     console.log("El mensaje fue enviado con exito");
 }
else {
    console.log("Ha surgido un error!");
}

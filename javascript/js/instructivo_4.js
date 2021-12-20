"Use strict"
/* Desarrollar un sistema que me muestre la hora actual en formato A.M. – P.M. Si son menos de 
las 10, agregar un 0 a la izquierda. */

var horaActual = new Date();
/* console.log(horaActual) */

var horas = horaActual. getHours();
var minutos = horaActual.getMinutes();
var segundos = horaActual.getSeconds();

var jornada = horas >=12 ? 'PM' : 'AM';

horas = ('0' + horas).slice(-2);
minutos = ('0' + minutos).slice(-2);
segundos = ('0' + segundos).slice(-2);

console.log(`${horas %12} ${jornada} : ${minutos} : ${segundos}`);




/* Definir un sistema que les permita saber cuántos días faltan para su próximo cumpleaños. */
var newYear = new Date("October 13, 2022");
var fechaHoy = new Date();

var msToday = fechaHoy.getTime();
var msNewYear = newYear.getTime();

var msDiff = msNewYear - msToday;

var diasDiff = msDiff / (1000 * 60 * 60 * 24);
console.log

diasDiff = Math.floor(diasDiff);
console.log("Dias que faltan para mi cumpleaños:" + diasDiff);

/* Definir un sistema que cargue la fecha y si ese día el usuario cumple años arrojar un mensaje de 
felicitaciones. */
var currentYear = new Date("December 21, 2021");
var fechaHoy = new Date();

var msToday = fechaHoy.getTime();
var msNewYear = currentYear.getTime();

var msDiff = msNewYear - msToday;

var diasDiff = msDiff / (1000 * 60 * 60 * 24);

diasDiff = Math.floor(diasDiff);
console.log("Dias que faltan para mi cumpleaños:" + diasDiff);

if (diasDiff === 0);
console.log("Feliz Cumpleaños");

/* Definir un sistema que le permita saber cuántos años va a cumplir según la fecha ingresada. */

var fechaNacimiento = new Date('10/13/2002');
var ahora = new Date();
var agnios = ahora.getFullYear() - fechaNacimiento.getFullYear();

console.log(agnios);
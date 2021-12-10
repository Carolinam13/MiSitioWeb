"Use strict"

var fechaActual = new Date();
console.log(fechaActual);

/* Metodos para descomponer la fecha */

var AnyoActual = fechaActual.getFullYear();
console.log("Año Actual: " + AnyoActual);

var mesActual = fechaActual.getMonth();
console.log("Mes Actual: " + (mesActual + 1));

var diaActual =fechaActual.getDate();
console.log("Dia Actual: " + diaActual);

var diaSemana = fechaActual.getDay();
console.log("Dia Semana: " + (diaSemana + 1));

var horaActual = fechaActual.getHours();
console.log("Hora Actual: " + horaActual);

var minutoActual = fechaActual.getMinutes();
console.log("Minutos Actuales: " + minutoActual);

var segundosActual = fechaActual.getSeconds();
console.log("Segundos: " + segundosActual);

var msActual = fechaActual.getMilliseconds();
console.log("Milisegunods: " + msActual);

var ms1970 = fechaActual.getTime();
console.log("MS desde 1970: " + ms1970);

var diasSemana = ["Domigo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var diasSemanaStr = diasSemana[diaSemana];

var mesAnyo

/* console.log("Hoy es" + 10 del mes 12 del año 2021. Son las 16:51); */

var diaActual = fechaActual.getDate();
var mesActual = fechaActual.getMonth();
var AnyoActual = fechaActual.getFullYear();
var horaActual = fechaActual.getHours();
console.log("Hoy es " + (" ") + diaActual + (" ") + ("del mes") + (" ") + (mesActual + 1) + (" ") + ("del año") + (" ") + AnyoActual + (" ") + ("Son las")  + (" ") + horaActual  + "" + minutoActual);

/* Especificar una fecha para determinar la diferencia */
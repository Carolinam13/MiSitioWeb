"use strict"

/* Crear  variables para (usuario y contraseña) y las van a comparar con el usuario y la contraseña que viene de la base de datos
Si el usuario tiene acceso el sistema arrojara un mensaje de bienvenida. De lo contrario le informara al usuario que no tiene acceso  */

var usuario = "carolina"
var clave = "12345"
var usuarioBd = "carolina"
var claveBd = "1346"

if (usuario === usuarioBd && clave === claveBd)
{
    console.log("Bienvenida")
} else  {
    console.log ("Usuario y/o clave incorrecta")
}



/* Segundo ejercicio */

var edadUsuario= 11;
var destinoUsuario = "Cartagena";
var aerolineaUsuario = "Latam";
var destinoDescuento = "Cartagena";
var aerolineaDescuento = "Latam";
var costoTiquete = 250000;
var descuento = .10;
var costoFinal = 0;
var descuentoUsuario = "";


if (edadUsuario < 10 || edadUsuario >= 70) { 
costoTiquete = costoTiquete - (costoTiquete * descuento);
descuentoUsuario = "por Edad";
    if (destinoUsuario === destinoDescuento) {
    costoTiquete = costoTiquete - (costoTiquete * descuento);
    descuentoUsuario = descuentoUsuario + ", por Destino";
    }
        if (aerolineaUsuario === aerolineaDescuento) {
        costoTiquete = costoTiquete - (costoTiquete * descuento);
        descuentoUsuario += "Y por aerolínea"
        }
}

if (descuentoUsuario != "") {
    console.log ( "Usted recibio descuentos por : " + descuentoUsuario);
    console.log ( "El valor final del tiquete con descunetos es: $" + costoTiquete);
}
    else {
        console.log ("El valor final del tiquete es: $" + costoTiquete);
        console.log ( "Lo sentimos, no aplica para ningún descuento");
    }


/* If
    Si el if se cumple, dentro va otro if  
        Si el if se cumple, dentro va otro if  */


        //Tercer ejercicio 

var edadUser = 100;

if (edadUser >= 18 ) {
    console.log ("Tiene la edad suficiente para realizar la votación");
}
  else {
      console.log ("No cuenta con la edad necesaria para poder realizar la votación")
  }
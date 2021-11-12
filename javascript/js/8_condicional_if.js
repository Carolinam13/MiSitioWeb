"use strict"

/* Crear  variables para (usuario y contraseña) y las van a comparar con el usuario y la contraseña que viene de la base de datos
Si el usuario tiene acceso el sistema arrojara un mensaje de bienvenida. De lo contrario le informara al usuario que no tiene acceso  */

var usuario = "carolina"
var clave = "12345"
var usuarioBd = "carolina"
var claveBd = "1346"


if (usuario === usuarioBd && clave === claveBd);
{
    console.log("Bienvenida");
}
else {
    console.log ("Usuario y/o clave incorrecta");
}

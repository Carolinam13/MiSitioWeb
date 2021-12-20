"Use strict"

/* /* Definir un sistema que me permita identificar el producto mas costoso y el menos costoso de 
una serie de 4 elementos./*  */

var producto1 = 40000;
var producto2 = 80000;
var producto3 = 50000;
var producto4 = 30000;

if (producto4 === 30000)
{
    console.log("Producto menos costoso")
}
else (producto2 === 60000)
{
    console.log("Producto más costoso")
}


/*Definir a través de un usuario y contraseña si el usuario tiene acceso al sistema y mostrar un 
mensaje de bienvenido o de acceso negado según sea el caso. */
var usuario = "Carolina"
var pass = "123456"
var usuarioV = "Carolinam"
var passV = "1345"
if (usuario === usuarioV && pass === passV)
{
    console.log("Bienvenido");
}
else 
{
    console.log("Acceso Denegado, por favor ingrese sus datos nuevamente.")
}

/*Definir un sistema con una serie de descuentos por compras:
Mayores a $100.000….3%.
Mayores a $200.000….5%
Mayores a $300.000….8%
El sistema al final deberá mostrar 3 mensajes:
• El valor total sin descuento.
• El descuento total
• El valor total con descuento.
 */ 

var producto1 = 40000;
var producto2 = 60000;
var producto3 = 50000;
  
var descuento1 = .03;
var descuento2 = .05;
var descuento3 = .08;
var costoTotal = producto1 + producto2 + producto3;
var descuento = " ";

console.log("Valor total sin descuento" + " " + costoTotal);

console.log("Descuento Total" + " " + costoTotal * descuento1);

console.log("Valor total con descuento" + " " + (costoTotal - (costoTotal * descuento1)));

if (costoTotal > 100000) { 
    costoTotal = costoTotal - (costoTotal * descuento1);
    descuento1="mayor a 100000";

    if (costoTotal>200000){
    costoTotal = costoTotal -(costoTotal * descuento2);
    descuento2= ",mayor a 200000";
    }
        if(costoTotal>300000){
            costoTotal = costoTotal -(costoTotal * descuento3);
            descuento3 ="mayor a 300000";
        }
}


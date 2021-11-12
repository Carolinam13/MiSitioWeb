"Use strict"
/* 
Suma.................+
Resta................-
Multiplicación.......*
División............./
Residuo..............%
 */

/* Crear 3 Productos */
/* A los 3 productos les van a descontar el 5% */
/* Existencia de cada producto y hallar el costo del inventario */

/* Crear 3 productos. Dichos productos seran inicializados con un valor. A cada producto le van a descontar el 5% y cada producto tiene una existencia. Al final determinar cual es el valor total del inventario teniendo en cuenta el descuento*/


/* Declarando e inicializando las variables */
var arrobaArroz = 26000;
var panela = 5000;
var arrobaFrijol = 24000;
var cantarrobaArroz = 3;
var cantpanela = 10;
var cantarrobaFrijol = 7;
var descuentoProductos = .05

/* Obteniendo el valor con descuento */
var arrobaArrozConDesc = arrobaArroz - (arrobaArroz * descuentoProductos);
console.log(arrobaArrozConDesc) 
var panelaConDesc = panela - (panela * descuentoProductos);
console.log(panelaConDesc);
var arrobaFrijolConDesc = arrobaFrijol - (arrobaFrijol * descuentoProductos);
console.log(arrobaFrijolConDesc);

/* Obteniendo el valor individual total */
var costoTotalarrobaArroz  = cantarrobaArroz * arrobaArroz;
var costoTotalpanela       = cantpanela * panela;
var costoTotalarrobaFrijol = cantarrobaFrijol * arrobaFrijol;

/* Obteniendo el valor total de todos los productos */
var costoTotal = arrobaArroz + panela + arrobaFrijol;

console.log("El costo total del inventario es de : $" + costoTotal)



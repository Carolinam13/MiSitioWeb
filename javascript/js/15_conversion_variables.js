"Use strict"

/* Conversión implicita */

var numero1 = 4;
var numero2 =  "12";
console.log("Resultado de la suma: " + (numero1 + numero2));
console.log("Resultado de la resta: " + (numero1 - numero2));
console.log("Resultado de la multiplicación: " + (numero1 * numero2));
console.log("Resultado de la división: " + (numero2 / numero1));

/* Conversión explicita */

var numero3 = "6";
var numero4 = "12";
var numero3Int = parseInt(numero3);
var numero4Int = parseInt(numero4);
console.log("Resultado de la suma /Conversión explicita: " + (numero3Int + numero4Int));

/* Conversion explicita a string */

var numero5 = 12;
var numero6 = 10;
var numero5Str = numero5.toString();
var numero6Str = numero6.toString();
console.log("Resultado de la suma: " + (numero5Str + numero6Str));
console.log("Resultado de la resta: " + (numero5Str - numero6Str));

/* Generando números aleatorios */

var numero1 =Math.random();
var numero1Random = (numero1 * 10000);
var numero1Redondeado = Math.floor(numero1Random);
console.log(numero1Redondeado);

/* Como podriamos con un condicional evitar que se muestren menos digitos */
/* Condicional de tipo if */
if (numero1Redondeado > 1000) {
    console.log(numero1Redondeado);
}
if (numero1Redondeado > 100 && numero1Redondeado <999) {
    console.log("0" + numero1Redondeado.toString());
}
if (numero1Redondeado >10 && numero1Redondeado <99) {
    console.log("00" + numero1Redondeado.toString());
}
if (numero1Redondeado >1 && numero1Redondeado <9) {
    console.log("000" + numero1Redondeado.toString());
}
if (numero1Redondeado >10 && numero1Redondeado <99) {
    console.log("0000");
}
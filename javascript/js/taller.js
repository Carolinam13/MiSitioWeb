"Use strict"
var ciudad1 ="Pitalito"
/* pasando todo a mayuscula */
ciudad1 =ciudad1.toUpperCase();
console.log(ciudad1);

var ciudad1 = "Pitalito"
/* pasando todo a minuscula */
ciudad1 = ciudad1.toLowerCase();
console.log(ciudad1);

"Use strict"
var ciudad1 = "Pitalito"
/* primera en mayuscula */
ciudad1 = ciudad1[0].toUpperCase() + ciudad1.slice(1);
console.log(ciudad1)

var anyo2 ="2019";
/* extrayendo partes*/
var auxconsecutivo = anyo2.slice(2,4);

/* contando caracteres*/
var tematica = "programacion orientada a objetos"
console.log("longitud: " + tematica.length);

/* hallando dobles espacios*/
var nombres= "Liliana Anacona";
for (i = 0;  i < nombres.length; i++){
    if (nombres.slice(i, (i +2)) === " "){
        console.log("la cadena tiene espacios dobles"); 
        break; 

        }
    }  

    /* remplazando texto*/
    var hobby = "programar en java";
    var newlang = "python";
    for (i = 0; i < hobby.length; i++) {
        if (hobby.slice(i, i + 4) === "Java") {
            hobby = hobby.slice(0, i);
        }
    }
    console.log(hobby + newlang);

    /* remplazando texto con indexof*/
    var hobby2 = "programar en javascript a tope";
    var firstChar = hobby2.indexOf("Javascript")
        if (firstChar !== -1) { 
            console.log(firstChar);
            hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
            console.log(hobby2);
        }

         /* extraer primer caracter */
  var primerNombre = "liliana";
  var primerCaracter = primerNombre.charAt(0);
  console.log(primerCaracter)

  /* extraer ultimo caracter */
  var primerNombre = "liliana";
  var primerCaracter = primerNombre.charAt(primerNombre.length - 1);
  console.log(primerCaracter)

  /* buscando caracteres especiales */
  var frase = "Hola Mundo!"
  for (var i = 0; i < frase.length; i ++) {
      if (frase.charAt(i) === "!") {
          console.log("la cadena tiene signos de admiracion.");
      }
  }

 /* reemplazar texto con el metodo replace*/ 
 var ciudad = "valle de pitalito"
 ciudad = ciudad.replace("pitalito", "laboyanos");
 console.log(ciudad);
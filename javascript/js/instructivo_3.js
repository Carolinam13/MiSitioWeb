"Use strict"

/* 1. pasando todo a mayuscula */
var ciudad1 ="SaLaDoBlAnCo"
ciudad1 = ciudad1.toUpperCase();
console.log(ciudad1);

/* 2. pasando todo a minúscula */
ciudad1 = ciudad1.toLowerCase();
console.log(ciudad1);

/*3.  Primer letra mayuscula */
ciudad1 = ciudad1[0].toUpperCase() + ciudad1.slice(1);
console.log(ciudad1)

/* 4. extrayendo partes de la cadena de texto*/
var anyo2 = "2019";
var auxConsecutivo = anyo2.slice(1,3);

/* 5. contando caracteres*/
var tematica = "programacion orientada a objetos"
console.log("longitud: " + tematica.length);

/* 6. hallando dobles espacios*/
var nombres= "Carolina  Muñoz";
for (i = 0;  i < nombres.length; i++){
    if (nombres.slice(i, (i +2)) === "  "){
        console.log("La cadena tiene espacios dobles"); 
        break; 
        }
    }  

/* 7. reemplazando texto*/
var hobby = "programar en Java";
var newlang = "python";
for (i = 0; i < hobby.length; i++) {
    if (hobby.slice(i, i + 4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
    console.log(hobby + newlang);

 /* 8. Reemplazando texto con indexof*/
 var hobby2 = "Programar en Javascript a tope";
 var firstChar = hobby2.indexOf("Javascript")
     if (firstChar !== -1) { 
         console.log(firstChar);
         hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
         console.log(hobby2);
     }

/* 9. extraer primer caracter */
  var primerNombre = "Carolina";
  var primerCaracter = primerNombre.charAt(0);
  console.log(primerCaracter);

  /* 10.  extraer ultimo caracter */
  var primerNombre = "Carolina";
  var primerCaracter = primerNombre.charAt(primerNombre.length - 1);
  console.log(primerCaracter);

  /* 11. buscando caracteres especiales */
  var frase = "Hola a Todos!"
  for (var i = 0; i < frase.length; i ++) {
      if (frase.charAt(i) === "!") {
          console.log("La cadena tiene signos de admiración.");
      }
  }

 /* 12. reemplazar texto con el metodo replace*/ 
 var ciudad = "Valle Pequeño"
 ciudad = ciudad.replace("Pequeño", "Grande");
 console.log(ciudad);
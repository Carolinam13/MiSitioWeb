"use strict"

let inicio = 0
let cantidad = "";
let cantidadProducto
let totalProductos = 2450999;
let cantidadYaProducto

function aumentarUnidades() {


    if(inicio <=9){
        cantidad = document.getElementById("cantidad").value = ++inicio;
        // document.getElementById("total").innerHTML = cantidad;

        cantidadProducto = document.getElementById("igual");
        cantidadProducto.innerHTML = inicio;

        cantidadYaProducto = document.getElementById("multiplicar");
        cantidadYaProducto.innerHTML = inicio * totalProductos ;

     

    }
}
function disminuirUnidades() {
    if(inicio >=1){
        cantidad = document.getElementById("cantidad").value = --inicio;
        // document.getElementById("total").innerHTML = cantidad

        cantidadProducto = document.getElementById("igual");
        cantidadProducto.innerHTML = inicio;

        cantidadYaProducto = document.getElementById  ("multiplicar");
        cantidadYaProducto.innerHTML = inicio * totalProductos ;
      
    }
}
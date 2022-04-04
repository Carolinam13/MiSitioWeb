"use strict"
class Vuelos {
    constructor (origen, destino, precio) {
        this.origen = origen ;
        this.destino = destino;
        this.precio = precio;
    }
}

let vuelo = [{
    "origen": "Bogota",
    "destino": "San Andres",
    "precio": 500000,
},
{
    "origen": "Bogota",
    "destino": "Cundinamarca",
    "precio": 480000,
}];

function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio,);
}
}

function cargarVuelos(origen,destino, precio){
  let contentVuelo = document.createElement("div");
  let contentPrincipal = document.getElementById("main_content");
  contentPrincipal.appendChild(contentVuelo);
  contentVuelo.setAttribute("class", "style-contentVuelo");

  let contentOrigen = document.createElement("div");
  contentVuelo.appendChild(contentOrigen);

  let origenVuelo = document.createElement("label");
  contentVuelo.appendChild(origenVuelo);
  let textOrigen = document.createTextNode(origen);
  origenVuelo.appendChild(textOrigen);
  origenVuelo.setAttribute("class", "styleOrigen");

  let destinoVuelo = document.createElement("label");
  contentVuelo.appendChild(destinoVuelo);
  let textDestino = document.createTextNode(destino);
  destinoVuelo.appendChild(textDestino);
  destinoVuelo.setAttribute("class", "styleDestino");

  let precioVuelo = document.createElement("label");
  contentVuelo.appendChild(precioVuelo);
  let textPrecio = document.createTextNode(precio);
  precioVuelo.appendChild(textPrecio);
  precioVuelo.setAttribute("class", "stylePrecio");

  let directVuelo = document.createElement("label");
  contentVuelo.appendChild(directVuelo);
  let textDirect = document.createTextNode("Directo");
  directVuelo.appendChild(textDirect);
  directVuelo.setAttribute("class", "styleDirecto");
}
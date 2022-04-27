"use strict"

let horaSalida = new Date(2022, 6, 5, 6, 10, 0);
let horaLlegada = new Date(2022, 6, 5, 11, 10, 0);

let horaSalida2 = new Date(2022, 6, 22, 8, 55, 0);
let horaLlegada2 = new Date(2022, 6, 22, 14, 55, 0);

class Vuelos {
    constructor (origen, destino, precio, direct, horaSalida, horaLlegada) {
        this.origen = origen ;
        this.destino = destino;
        this.precio = precio;
        this.direct = direct;
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
    }
}

let vuelo = [{
    "origen": "Bogota",
    "destino": "Medellín",
    "precio": 500000,
    "horaSalida": horaSalida.getHours() + ":" + horaSalida.getMinutes(),
    "horaLlegada": horaLlegada.getHours() + ":" + horaLlegada.getMinutes(),
},
{
    "origen": "Bogota",
    "destino": "Cartagena",
    "precio": 480000,
    "horaSalida": horaSalida2.getHours() + ":" + horaSalida2.getMinutes(),
    "horaLlegada": horaLlegada2.getHours() + ":" + horaLlegada2.getMinutes(),
}];

function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio, vuelo[i].horaSalida, vuelo[i].horaLlegada);
}
}

function cargarVuelos(origen,destino, precio, horaSalida, horaLlegada){
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

  let horaSalidaVuelo = document.createElement("label");
  contentVuelo.appendChild(horaSalidaVuelo);
  let textHoraSalida = document.createTextNode(horaSalida);
  horaSalidaVuelo.appendChild(textHoraSalida);
  horaSalidaVuelo.setAttribute("class", "styleHoraSalida");

  let horaLlegadaVuelo = document.createElement("label");
  contentVuelo.appendChild(horaLlegadaVuelo);
  let textHoraLlegada = document.createTextNode(horaLlegada);
  horaLlegadaVuelo.appendChild(textHoraLlegada);
  horaLlegadaVuelo.setAttribute("class", "styleHoraLlegada");

}
let botonForm = document.getElementById("botonForm");
let div4 = document.getElementById("div4");


let botonCerrar1 = document.getElementById("botonCerrar1");

botonForm.addEventListener("click", mostrarForm);

botonCerrar1.addEventListener("click", ocultarForm);

function mostrarForm() {
    div4.classList.add("transform5");
    div4.classList.remove ("transform4");
    botonCerrar1.classList.add("botonCerrarVisible");
    botonCerrar1.classList.remove("botonCerrar");
}
function ocultarForm(){
    div4.classList.remove("transform5");
    div4.classList.add("transform4");
    botonCerrar1.classList.remove("botonCerrarVisible");
    botonCerrar1.classList.add("botonCerrar1");

}
 

"use strict"

let botonOpen = document.getElementById("chat-box-disable");
let botonCerrar = document.getElementById("botonCerrar");
let botonOpenHeader = document.getElementById("header-movil-open");
let botonCerrarHeader = document.getElementById("boton-cerrar-header");
let Header = document.getElementById("header");

botonOpen.addEventListener("click", dezplegarCaja);
botonCerrar.addEventListener("click", cerrarCaja);

function dezplegarCaja(){

    botonOpen.classList.add("chat-box-disable-in");
    botonOpen.classList.remove("chat-box-disable-out");
    document.getElementById("chat-box").classList.add("chat-box-in");
    document.getElementById("chat-box").classList.remove("chat-box-out");

}

function cerrarCaja(){
    
    botonOpen.classList.remove("chat-box-disable-in");
    botonOpen.classList.add("chat-box-disable-out");
    document.getElementById("chat-box").classList.remove("chat-box-in");
    document.getElementById("chat-box").classList.add("chat-box-out");
};

botonOpenHeader.addEventListener("click", dezplegarCajaHeader);
botonCerrarHeader.addEventListener("click", cerrarCajaHeader);

function dezplegarCajaHeader(){

    document.getElementById("header-movil").classList.add("contenedor-barra-busqueda-movil");

    document.getElementById("header-movil").classList.remove("contenedor-barra-busqueda-movil-out");

    document.getElementById("header").style.display="none";
}

function cerrarCajaHeader(){
    document.getElementById("header-movil").classList.remove("contenedor-barra-busqueda-movil");

    document.getElementById("header-movil").classList.add("contenedor-barra-busqueda-movil-out");

    document.getElementById("header").style.display="flex";
}
"Use strict"
let botonForm = document.getElementById("botonForm");
let div1 = document.getElementById("div1");

let botonCerrar = document.getElementById("botonCerrar");

botonForm.addEventListener("click", mostrarForm);

botonCerrar.addEventListener("click", ocultarForm);

function mostrarForm() {
    div1.classList.add("transform2");
    div1.classList.remove("transform1");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");

    let div2 = document.createElement("div")
    let contenedor = document.getElementById("div2");
    contenedor.appendChild(div2);
    contenedor.setAttribute("class", "div2");
    let desc = document.createElement("label");
    div2.appendChild(desc);
    let text = document.createTextNode("Hola, soy Carolina, tu asistente virtual.");
    desc.appendChild(text);
    desc.setAttribute("class", "styleDescrip");
}
function ocultarForm(){
    div1.classList.remove("transform2");
    div1.classList.add("transform1");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar");
}
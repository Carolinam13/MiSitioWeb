"Use strict"

class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.Marca = marca ;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Porsche ", "911 GT3 ", "$150.000.000", "img/porschemercado.png");

let fordMustang = new Automovil ("Ford Mustang ", "Clásico ", "$98.800.000", "img/ford mustangmercado.png");

let chevrolet = new Automovil ("Chevrolet ", "Trailblazer ", "$178.000.000", "img/Chevroletmercado.png");

function mostrarAuto() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenVehiculo");
    
    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")





    contentPrincipal = document.getElementById("mainContent");
    contentAuto  = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenVehiculo");

    imagenAuto = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", fordMustang.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    textMarca = document.createTextNode(fordMustang.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(fordMustang.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    textAuto = document.createTextNode(fordMustang.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")



 


  
    contentPrincipal = document.getElementById("mainContent");
    contentAuto  = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenVehiculo");

    imagenAuto = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", chevrolet.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    textMarca = document.createTextNode(chevrolet.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(chevrolet.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    textAuto = document.createTextNode(chevrolet.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

//Autos economicos

let economico = new Automovil ("Chevrolet ", "Beat LS ", "$38.700.000", "img/chevroletbaratomercado.jpg");

let economico2 = new Automovil ("Susuki ", "Celerio ", "$37.990.000", "img/celeriomercado.jpg");

let economico3 = new Automovil ("Kia ", "Picanto Emotion 1.0L ", "$36.990.000", "img/kiamercado.jpg");

function mostrarEconomico() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenVehiculo");
    
    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", economico.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    let textMarca = document.createTextNode(economico.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(economico.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    let textAuto = document.createTextNode(economico.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")



    contentPrincipal = document.getElementById("mainContent");
    contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenVehiculo");
    
    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", economico2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    textMarca = document.createTextNode(economico2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(economico2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    textAuto = document.createTextNode(economico2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")



    contentPrincipal = document.getElementById("mainContent");
    contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenVehiculo");
    
    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", economico3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescrip = document.createElement("div");
    contentAuto.appendChild(contentDescrip);
    contentDescrip.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescrip.appendChild(marcaAuto);
    textMarca = document.createTextNode(economico3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescrip.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(economico3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescrip.appendChild(precioAuto);
    textAuto = document.createTextNode(economico3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}


window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Autos nuevos" ) {
            mostrarAuto(auto, fordMustang, chevrolet);
        }

        else if (busqueda == "Autos económicos" ) {
            mostrarEconomico(economico, economico2, economico3);
        }
            
        else {
              alert("Al parecer, no hay coincidencias para su busqueda."); 
    }
}
})


function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}
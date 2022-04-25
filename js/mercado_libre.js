class Automovil {
    constructor (marca, modelo, precio, imagen) {
        this.marca = marca ;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
    }
}
let auto = new Automovil ("BMW", "TM235i xDrive", "$ 150000000", "img/bmw.png");

function validarBmw () {
    alert(auto.marca + "" + auto.modelo + ""  + "" + auto.precio + "" + auto.imagen + "El automovil que necesitas");
    
    mostrarBmw();
}
function mostrarBmw() {
    let contentPrincipal = document.getElementById("carros");
    let contentAuto      = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentAuto.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
}


let fordMustang = new Automovil ("Ford Mustang", "Clásico", "$ 98.800.000", "img/ford mustang.png.jpg");

function validarMustang () {
    alert (fordMustang.Marca + " " + fordMustang.Modelo + " " + fordMustang.Precio + "" + fordMustang.Imagen + " El auto perfecto para salir de aventura y presumirlo con tus amigos")

    mostrarMustang ();
}

function mostrarMustang () {
    let contenedorPrinfordMustang = document.getElementById("main_content");
    let contentfordMustang        = document.createElement("div");
    contenedorPrinfordMustang.appendChild(contentfordMustang);

    let marcafordMustang = document.createElement("label");
    contentfordMustang.appendChild(marcafordMustang);
    let textfordMustangMarca = document.createTextNode(fordMustang.Marca);
    marcafordMustang.appendChild(textfordMustangMarca);

    let modelofordMustang = document.createElement("label");
    contentfordMustang.appendChild(modelofordMustang);
    let textModelfordMustang = document.createTextNode(fordMustang.Modelo);
    modelofordMustang.appendChild(textModelfordMustang);

    let preciofordMustang = document.createElement("label");
    contentfordMustang.appendChild(preciofordMustang);
    let textPreciofordMustang = document.createTextNode(fordMustang.Precio);
    preciofordMustang.appendChild(textPreciofordMustang);

    let imgfordMustang = document.createElement("img");
    contentfordMustang.appendChild(imgfordMustang);
    imgfordMustang.setAttribute("src", fordMustang.Imagen)
}


 let chevrolet = new Automovil ("Chevrolet", "Trailblazer", "$ 178000000", "img/chevrolet.png");
 function validarChevrolet() {
     alert (chevrolet.Marca + " " + chevrolet.Modelo + " " + chevrolet.Precio + "" + chevrolet.Imagen + "El auto perfecto para un recorrido a larga distancia")

     mostrarChevrolet();
 }

function mostrarChevrolet () {
    let contenedorPrincChevrolet = document.getElementById("main_content");
    let contnedorChevrolet = document.createElement("div");
    contenedorPrincChevrolet.appendChild(contnedorChevrolet);

    let marcaChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(marcaChevrolet);
    let textMarcaChevrolet = document.createTextNode(chevrolet.Marca);
    marcaChevrolet.appendChild(textMarcaChevrolet);

    let modeloChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(modeloChevrolet);
    let textModeloChevrolet = document.createTextNode(chevrolet.Modelo);
    marcaChevrolet.appendChild(textModeloChevrolet);

    let precioChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(precioChevrolet);
    let textPrecioChevrolet = document.createTextNode(chevrolet.Precio);
    precioChevrolet.appendChild(textPrecioChevrolet);

    let imgChevrolet = document.createElement("img");
    contnedorChevrolet.appendChild(imgChevrolet);
    imgChevrolet.setAttribute("src", chevrolet.Imagen)
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automoviles" ) {
            mostrarBmw(auto);
            mostrarMustang(fordMustang);
            mostrarChevrolet(chevrolet);
        }
        else if (busqueda == "BMW" ) {
            mostrarVehiculo(auto);}
        

        if (busqueda == "Ford Mustang") {
            mostrarMustang(fordMustang);}

        else if (busqueda == "Chevrolet Trailblazer") {
            mostrarChevrolet(chevrolet);
        }
            
        else {
              this.true;
        } 
        return this. false.alert("No se han encontrado resultados, por favor intente buscar otro articulo."); 
    }
})


function limpiarVentana () {
    document.getElementById("carros").innerHTML = "" ;
}
let nodoTabla = undefined;

function crearEncabezado() {
    nodoTabla = document.createElement("table");
    let contenedor = document.getElementById ("table.js");
    contenedor.appendChild(nodoTabla);

    let nodoFilaEncabezado = document.createElement("tr");
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoEncabezado1 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado1);
    let codigoHeading1 = document.createTextNode("Código del producto");
    nodoEncabezado1.appendChild(codigoHeading1)

    let nodoEncabezado2 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado2);
    let descripHeading1 = document.createTextNode("Descripción");
    nodoEncabezado2.appendChild(descripHeading1)

    let nodoEncabezado3 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado3);
    let valorHeading1 = document.createTextNode("Valor unitario");
    nodoEncabezado3.appendChild(valorHeading1)

    let nodoEncabezado4 = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoEncabezado4);
    let cantidadHeading1 = document.createTextNode("Unidades en stock");
    nodoEncabezado4.appendChild(cantidadHeading1)

    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id" , "table-stock");
    
}
function validarTabla() {
    if (!document.getElementById("table-stock")) {
        crearEncabezado();
        
    }
    else {
        alert("Elemento añadido a la tabla correctamente")
    }

}
function cargarProducto() {
    if (validarFormulario()){

    validarTabla();

    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    let inputValor = document.getElementById("valor").value;
    let inputValorNodo = document.createTextNode(inputValor);

    let inputUnidad = document.getElementById("unidadesStock").value;
    let inputUnidadNodo = document.createTextNode(inputUnidad);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo, inputValorNodo,inputUnidadNodo);

  }
}
function cargarInfoTabla(codigo, descripcion,valor, unidad) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto)

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(descripcion);

    let nodoValTD = document.createElement("td");
    nodoProducto.appendChild(nodoValTD);
    nodoValTD.appendChild(valor);

    let nodoUnidadTD = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadTD);
    nodoUnidadTD.appendChild(unidad);
}

function validarFormulario(){
    let inputCodigo = document.getElementById("codigo").value.trim();
    if(inputCodigo ==""){
    alert("Por favor ingrese el código del producto");

    return false; 
}

  return true; 
  
}
let inicio = 0;
let cantidad = "";

function aumentar(){
    if( inicio <= 9) {
        cantidad = document.getElementById('cantidadproduc').value = ++inicio;
        document.getElementById("total").innerHTML = cantidad;
    }
}

function disminuir() {
    if(inicio >= 1) {
        cantidad = document.getElementById('cantidadproduc').value = --inicio;
        document.getElementById("total").innerHTML = cantidad;
    }
}

function calcularTotal() {
    let valorUnidad = document.getElementById("valorUnitario").innerHTML;
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra = valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
}
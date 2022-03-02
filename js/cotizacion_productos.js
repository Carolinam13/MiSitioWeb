let inicio = 0;
let cantidad = "";

function aumentar(){
    if( inicio <= 9) {
        /* cantidad = document.getElementById('cantidadProductos').value = ++inicio; */
        let unidades = document.getElementById('cantidadProductos').innerHTML;
        unidades++;
        document.getElementById('cantidadProductos').innerHTML = unidades;
        document.getElementById("total").innerHTML = cantidad;
    }
    calcularSubTotal();
}

function disminuir() {
    if(inicio >= 1) {
        /* cantidad = document.getElementById('cantidadProductos').value = --inicio; */
        document.getElementById("total").innerHTML = cantidad;
    }
    calcularSubTotal();
}

function calcularSubTotal() {
    let numeroUnidades = document.getElementById("cantidadProductos").innerHTML;

    let valorUnidad = document.getElementById("valorUnitario").innerHTML;

    let vlrSubTotal = Number(numeroUnidades) * Number(valorUnidad);
alert(vlrSubTotal);
  /*   document.getElementById("").innerHTML = valorCompra; */
}
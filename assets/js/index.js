let precio = 800000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let cantidad = 0;
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");

function actualizarTotal(){
    const total = precio * cantidad;
    totalSpan.innerHTML = total.toLocaleString("es-ES");
}

function incrementar() {
    cantidad++;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
}

function disminuir() {
    if (cantidad > 0) {
        cantidad--;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal();
    }
}
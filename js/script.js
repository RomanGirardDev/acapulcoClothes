let codigosProductos = new Array(10, 11, 12);
let productosArray = new Array('remera', 'jean', 'campera');
let preciosArray = new Array(4000, 5000, 6000);
let carrito = new Array();

let agregarOtroProducto = true
while (agregarOtroProducto) {
    let codigoProducto = parseInt(prompt("Ingrese código de producto: "))
    let cantidad = parseInt(prompt("Ingrese cantidad: "))
    let precioProducto = preciosArray[codigosProductos.indexOf(codigoProducto)] * cantidad
    let descripcionProducto = productosArray[codigosProductos.indexOf(codigoProducto)]
    if (!(codigosProductos.includes(codigoProducto))) {
        alert("El producto suministrado no existe. Favor revisar la tabla nuevamente.")
        codigoProducto = prompt("Ingrese código de producto: ")
    }

    alert("El precio de sus artículos es: $" + precioProducto)

    let confirmaParaCarrito = confirm("¿Deseas confirmar para enviar al carrito el producto " + descripcionProducto + " ?")
    if (confirmaParaCarrito) {
        carrito.push(precioProducto)
        alert("El producto " + descripcionProducto + " fue añadido al carrito con éxito.");
        agregarOtroProducto = confirm("¿Quiere elegir otro producto para agregar al carrito?")
    } else {
        agregarOtroProducto = confirm("¿Quiere elegir otro producto para agregar al carrito?")
    }
}
let precioCompra = carrito[0]
for (let i = 1; i < carrito.length; i++) {
    precioCompra = precioCompra + carrito[i]
}

let confirmaCarritoTotal = confirm("¿Deseas confirmar compra total?");
if (confirmaCarritoTotal) {
    alert("El precio total de su carrito es: $" + precioCompra)
} else {
    alert("Carrito cancelado.");
}
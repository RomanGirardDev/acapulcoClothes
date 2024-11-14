const menProducts = [
    {
        id : 1,
        color : "grey",
        price : 25000.00,
        img : '../images/pantalonHombre.jpeg',
        description : 'Pantalón'
    },
    {
        id : 2,
        color : "white",
        price : 15000.00,
        img : '../images/remeraBlanca.jpeg',
        description : 'Remera blanca'
    },
    {
        id : 3,
        color : "beige",
        price : 20000.00,
        img : '../images/buzoBeige.jpeg',
        description : 'Buzo beige',
    }
]

const womenProducts = [
    {
        id : 4,
        color : "scratched",
        price : 20000.00,
        img : '../images/poleraMujer.jpeg',
        description : 'Polera'
    },
    {
        id : 5,
        color : "beige",
        price : 25000.00,
        img : '../images/patalonSastrero.jpeg',
        description : 'Pantalón sastrero'
    },
    {
        id : 6,
        color : "yellow",
        price : 30000.00,
        img : '../images/camperaPufer.jpeg',
        description : 'Pufer',
    }
]

let shoppingCart = []

class shoppingProducts {
    constructor(id, description, price, quantity, img){
        this.id = id;
        this.description = description;
        this.price = price;
        this.quantity = parseInt(quantity);
        this.img = img;
    }
}

const productHandler = document.querySelector('#productForm')

const showProducts = (data) => {
    data.forEach(product => {
        const productSection = document.createElement('section');
        productSection.setAttribute('id', 'section-product');
        productSection.innerHTML = `
            <img class="productForm section img" src="${product?.img}" alt="${product?.description}"></img>
            <div class="productForm">
                <h5 class = "productForm section p">${product?.description}</h5>
                <h5 class = "productForm section p">Precio: ${product?.price}</h5>
                <button id="${product.id}" class="btn-shoppingCart">AGREGAR AL CARRITO</button>
            </div>    
            `;
           productHandler.appendChild(productSection); 
        })
        const btnComprar = document.querySelectorAll('.btn-shoppingCart');
        btnComprar.forEach(el => {
            el.addEventListener('click', (e)=>{
                shopingCartPush(e.target.id)
            });
        })
}

showProducts(menProducts)

function shopingCartPush(id) {
    console.log(shoppingCart)
    const productExist = shoppingCart.some(prod => prod.id == parseInt(id))
    if (productExist) {
        shoppingCart.map(prod => {
            prod.quantity++;
            return prod;
        })
    } else {
        let product = menProducts.find(prod => prod.id === parseInt(id))
        shoppingCart.push(new shoppingProducts(product.id, product.description, product.price, 1, product.img))              
    } 
    showShoppingCart(shoppingCart) 
    totalCalculated(shoppingCart)
}

const shoppingHandler = document.querySelector('#shoppingCart') 

const showShoppingCart = (shoppingCartData) => {
    shoppingCartData.forEach(prod => {
        const shoppingSection = document.createElement('section');
        shoppingSection.setAttribute('id', 'section-shopping');
        shoppingSection.innerHTML = `
            <section class="productForm">
                <h5 class="productForm section p">CARRITO DE COMPRAS:</h5>
                <img class="shoppingImg" src="${prod?.img}" alt="${prod?.description}"></img>
                <h5 class="productForm section p">${prod?.description}</h5>
                <h5 class="productForm section p">Cantidad: ${prod?.quantity}</h5>
                <h5 class="productForm section p">Precio: ${prod?.price*prod?.quantity}</h5>
                <button id="${prod.id}" class="btn-shoppingCartDelete">ELIMINAR</button>
            </section>
            `;
           shoppingHandler.appendChild(shoppingSection); 
        })
        const btnDelete = document.querySelectorAll('.btn-shoppingCartDelete');
        btnDelete.forEach(el => {
            el.addEventListener('click', (e)=>{
                shopingCartDelete(e.target.id)
            });
        })
}

function shopingCartDelete(id) {
    console.log(shoppingCart)
    shoppingCart = shoppingCart.filter(prod => prod.id!==parseInt(id));  
    showShoppingCart(shoppingCart) 
    totalCalculated(shoppingCart)
}

function totalCalculated(shoppingCart) {
    let total = 0.00
    shoppingCart.forEach(product => {
        total += product.price
    })
    return total
}


/*let codigosProductos = new Array(10, 11, 12);
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
}*/
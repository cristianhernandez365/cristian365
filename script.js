const productos = [
    { nombre: "MANCERA COLLECTION", precio: 1350, imagen: "perfume1.jpg" },
    { nombre: "VERSACE DYLAN BLUE POUR HOMME", precio: 80, imagen: "perfume2.jpg" },
    { nombre: "MANCERA RED TOBACCO", precio: 230, imagen: "perfume3.jpg" },
    { nombre: "LAYTON PARFUMS DE MARLY", precio: 270, imagen: "perfume4.jpg" },
    { nombre: "DIOR SUAVAGE ELIXIR", precio: 220, imagen: "perfume5.jpg" },
    { nombre: "STROGER WITH YOU IMTENSELY", precio: 140, imagen: "perfume6.jpg" },
    { nombre: "XERJOFF ALEXANDRIA ll", precio: 310, imagen: "perfume7.jpg" },
    { nombre: "LOUIS VUITTON IMAGINATION", precio: 320, imagen: "perfume8.jpg" },
    { nombre: "BACCARAT ROUGE 540", precio: 400, imagen: "perfume9.jpg" },
    { nombre: "SANTAL 33", precio: 360, imagen: "perfume10.jpg" },
    { nombre: "TOM FORD OMBRE LEATHER", precio: 350, imagen: "perfume11.jpg" },
    { nombre: "JEAN PAUL GAULTIER LE MALE ELIXIR", precio: 160, imagen: "perfume12.jpg" },
    { nombre: "BLEU DE CHANEL PARFUM", precio: 210, imagen: "perfume13.jpg" },
    { nombre: "CREED AVENTUS", precio: 370, imagen: "perfume14.jpg" },
    { nombre: "XERJOFF NAXOS", precio: 300, imagen: "perfume15.jpg" },
    { nombre: "DIOR SUAVAGE PARFUM", precio: 150, imagen: "perfume16.jpg" },
    { nombre: "DIOR HOMME INTENSE", precio: 130, imagen: "perfume17.jpg" },
    { nombre: "LOUIS VUITTON PACIFIC CHILL", precio: 275, imagen: "perfume18.jpg" },
    { nombre: "LOUIS VUITTON METEORE", precio: 290, imagen: "perfume19.jpg" },
    { nombre: "JEAN PAUL GAULTIER LE BEAU PARADISE GARDEN", precio: 160, imagen: "perfume20.jpg" },
    { nombre: "VALENTINO VOMO BORN IN ROMA INTENSE", precio: 130, imagen: "perfume21.jpg" },
    { nombre: "ACQUA DI GIO PROFONDO", precio: 115, imagen: "perfume22.jpg" },
    { nombre: "INVICTUS VICTORY ELIXIR", precio: 130, imagen: "perfume23.jpg" },
    { nombre: "JEAN PAUL LE BEAU LE PARFUM", precio: 160, imagen: "perfume24.jpg" },
];

const productContainer = document.querySelector('.product-container');
const cart = [];

function mostrarProductos() {
    productos.forEach((producto, index) => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" width="100%">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
        `;
        productContainer.appendChild(div);
    });
}

function agregarAlCarrito(index) {
    cart.push(productos[index]);
    actualizarCarrito();
}

function actualizarCarrito() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = cart.map(item => `<p>${item.nombre} - $${item.precio}</p>`).join('');
}

window.onload = mostrarProductos;

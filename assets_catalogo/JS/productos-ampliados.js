const container = document.querySelector('.product-container');

productos.forEach(producto => {
    container.innerHTML += `
    
        <div class="product-card">
        <div class="product-image">
        <img src="${producto.imagen}" alt="Nombre del Producto">

        </div>
        <div class="product-info">
        <h2 class="product-title">${producto.categoria.nombre}</h2>
        <p class="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, sed cupiditate? Similique labore dolore vitae ducimus modi, repudiandae unde delectus molestiae. Error dignissimos, veniam libero a perspiciatis voluptatem voluptatibus quod!</p>
        <p class="product-price">$99.99</p>
        <p class="product-price">En 3, 6, 12 cuotas</p>

        <button class="add-to-cart-button">Agregar al Carrito</button>
        </div>
    </div>
    
    `
});
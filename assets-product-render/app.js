const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && menu.classList.contains('active')) {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

const button = document.querySelector('.back-to-catalog');

button.addEventListener('click', function(e) {
  // Prevenir el comportamiento predeterminado del botón
  e.preventDefault();

  // Agregar la clase 'active' para activar la animación
  button.classList.add('active');

  // Quitar la clase 'active' después de 500ms para que la animación termine
  setTimeout(function() {
    button.classList.remove('active');
  }, 500);

  // Redirigir al catálogo después de que la animación termine
  setTimeout(function() {
    window.location.href = 'catalogo.html';
  }, 500);
})



const productoExtraidoLS = localStorage.getItem('info-product');
const parseado = JSON.parse(productoExtraidoLS)



const container = document.querySelector('.products')
const renderCard = (parseado) =>{
  container.innerHTML = `
    <h2 class="products-title">${parseado.categoria.nombre}</h2>
    <div class="products-container">

      <div class="product-card">
        <img src="${parseado.imagen}" alt="Imagen del producto 1">
        <h3 class="product-card-title">${parseado.info.tipo}</h3>
        <hr>
        <p class="product-card-description">Material: ${parseado.info.Material}</p>
        <hr>
        <p class="product-card-description">Peso: ${parseado.info.Peso}</p>
        <hr>
        <p class="product-card-description">Medida: ${parseado.info.Medida}</p>
        <hr>
        <p class="product-card-description">Cantidad: ${parseado.info.Cantidad}</p>
        <hr>
        <p class="product-card-description">Venta: ${parseado.info.Precio}</p>
        <hr>
        <p class="product-card-price">$${parseado.precio}</p>
        <button class="add-to-cart">Agregar al carrito</button>
        
    </div>
  
  
  `
  localStorage.setItem('info-product',[])
}

renderCard(parseado)


const containerCalculadora = document.querySelector('.text-and-input');



const calcular = ()=>{
  let input  = document.getElementById('input').value;
  let cantidad = Number(parseado.unidades)


  let resultado = (cantidad * input) ;
  let cajas = input % cantidad
  containerCalculadora.innerHTML += `
    <p>Necesitas: ${resultado.toFixed(2)} unidades para cubrir ${input} m2</p>
    <p>Necesitas: ${Math.ceil(cajas)} cajas</p>
    <p>Total estimado:$${parseado.precio * Math.ceil(input)}</p>
  `
  cantidad = 0;
  resultado = 0;
  input = 0;
}
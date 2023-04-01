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
        <a class="ir-catalogo" href="https://wa.me/message/AWYBARMX2MK7G1">Ver mas imagenes en WhatsApp</a>
        <hr>
        <p class="product-card-price">$${parseado.precio}</p>
        <div class="btn-container">
                
                
        
        <div class="carrito-mobile-container">
             <a class=" boton-menu boton-carrito carrito-nav " href="./carrito.html"><i class="fa-solid fa-cart-shopping"></i> <span id="numerito-mobile" class="numerito class="boton-categoria"">0</span></a>
          </div> 
        
      </div>
        
    </div>
  
  
  `
 

}

renderCard(parseado)


const containerCalculadora = document.querySelector('.text-and-input');

const retry = ()=>{
  const btnRetry = document.querySelector(".btn-retry")
  containerCalculadora.innerHTML = `
  <p>Ingresá los metros cuadrados que necesitas cubrir</p>
  <label for="input"></label>
  <input min="0" id="input" type="number" placeholder="Ej: 10">
  <button onclick="calcular()" class="btn-calcular">Calcular</button>
  <button onclick="retry()" class="btn-calcular btn-retry"><i class="fa-solid fa-arrows-rotate"></i></button>
  
  `
}

const calcular = ()=>{
  let input  = document.getElementById('input').value;
  let cantidad = Number(parseado.unidades)
 
  let resultado = (cantidad * input) ;
  containerCalculadora.innerHTML += `
    <p><span>Necesitas:</span> ${resultado.toFixed(1)} unidades para cubrir ${input} m²</p>

    <p><span>Total estimado:</span>$${parseado.precio * Math.ceil(input)}</p>
  `
  cantidad = 0;
  resultado = 0;
  input = 0;
}

const cargarNumerito= ()=>{
    let numerito = document.querySelector('#numerito-mobile');
    let LS = localStorage.getItem('productos-en-carrito');
    let parse = JSON.parse(LS);

   

    parse.forEach(element => {
    if(element.id === parseado.id){
      numerito.innerText = element.cantidad
    }

    
});


}
cargarNumerito()

function calculateSquareMeters() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const result = width * height;
  document.getElementById("result").innerHTML = `Metros Cuadrados: ${result} m²`;
}



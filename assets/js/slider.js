const sliderWrapper = document.querySelector('.slider-wrapper');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Mostrar la primera diapositiva
slides[slideIndex].style.display = 'flex';


// Función para avanzar a la siguiente diapositiva
function next() {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex + 1) % totalSlides;
  slides[slideIndex].style.display = 'flex';
}

// Función para retroceder a la diapositiva anterior
function prev() {
  slides[slideIndex].style.display = 'none';
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  slides[slideIndex].style.display = 'flex';
}

// Evento para avanzar a la siguiente diapositiva
nextSlide.addEventListener('click', () => {
  next();
});

// Evento para retroceder a la diapositiva anterior
prevSlide.addEventListener('click', () => {
  prev();
});

// Avanzar a la siguiente diapositiva cada 5 segundos
setInterval(() => {
    next();

  

}, 5000);




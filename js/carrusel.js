let slideIndex = 0;
let slides = []; // Se inicializará al cargar la página
let carruselInterval; // Para almacenar el ID del intervalo del carrusel

document.addEventListener('DOMContentLoaded', function() {
    const carruselContainer = document.querySelector('.carrusel');
    if (!carruselContainer) {
        console.error("Contenedor del carrusel no encontrado. Asegúrate de que el div con la clase 'carrusel' exista.");
        return;
    }

    slides = carruselContainer.querySelectorAll('img');

    console.log("Script de carrusel cargado.");
    console.log("Número de diapositivas (imágenes) encontradas:", slides.length);

    // Si no hay imágenes, no hay nada que mostrar.
    if (slides.length === 0) {
        console.warn("No hay imágenes dentro del contenedor .carrusel. Verifica las etiquetas <img>.");
        return;
    }

    // Asegurarse de que solo la primera imagen sea visible al cargar
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');

    // Inicializa el carrusel automático
    startCarousel();

    // Event listeners para los botones de navegación
    const prevButton = document.querySelector('.carrusel-boton.prev');
    const nextButton = document.querySelector('.carrusel-boton.next');

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            moveSlide(-1);
            resetCarouselInterval(); // Reiniciar el intervalo al interactuar manualmente
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            moveSlide(1);
            resetCarouselInterval(); // Reiniciar el intervalo al interactuar manualmente
        });
    }

    // Opcional: Pausar carrusel al pasar el ratón y reanudar al quitarlo
    carruselContainer.addEventListener('mouseenter', function() {
        clearInterval(carruselInterval);
        console.log("Carrusel pausado.");
    });

    carruselContainer.addEventListener('mouseleave', function() {
        startCarousel();
        console.log("Carrusel reanudado.");
    });
});


function showSlides() {
    // Primero, ocultar todas las diapositivas
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active'); // Quita la clase 'active' para ocultarlas (opacidad: 0)
    }

    // Asegurarse de que slideIndex esté dentro de los límites
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    // Mostrar la diapositiva actual
    slides[slideIndex].classList.add('active'); // Agrega la clase 'active' para mostrarla (opacidad: 1)
    console.log("Diapositiva", slideIndex, "mostrada.");
}


function moveSlide(n) {
    console.log("¡Botón clickeado! Valor de n:", n);
    slideIndex += n;
    showSlides();
}

function startCarousel() {
    // Limpiar cualquier intervalo existente para evitar duplicados
    clearInterval(carruselInterval);
    // Configurar el intervalo para el movimiento automático (cada 3 segundos)
    carruselInterval = setInterval(function() {
        slideIndex++;
        showSlides();
    }, 3000); // Cambia cada 3 segundos (3000 milisegundos)
    console.log("Carrusel automático iniciado.");
}

function resetCarouselInterval() {
    clearInterval(carruselInterval); // Detiene el intervalo actual
    startCarousel(); // Inicia un nuevo intervalo
}
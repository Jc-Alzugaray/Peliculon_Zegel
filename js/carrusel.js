        let slideIndex = 0; 
        const slides = document.querySelector('.carousel-slide').children; 

        console.log("Script de carrusel cargado.");
        console.log("Número de diapositivas encontradas:", slides.length);

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].tagName === 'IMG') {
                console.log(`Diapositiva ${i} src: ${slides[i].src}`);
            }
        }

        function showSlides() {
            if (slides.length === 0) {
                console.warn("No hay imágenes en el carrusel. Verifica las etiquetas <img>.");
                return;
            }
            if (slideIndex >= slides.length) {
                slideIndex = 0; 
            }
            if (slideIndex < 0) {
                slideIndex = slides.length - 1; 
            }
            
            console.log("showSlides() llamado. slideIndex actual:", slideIndex);

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            slides[slideIndex].style.display = "block";
            console.log("Diapositiva", slideIndex, "mostrada.");
        }

        function moveSlide(n) {
            console.log("¡Botón clickeado! Valor de n:", n); 
            slideIndex += n; 
            showSlides(); 
        }

        window.onload = function() {
            console.log("window.onload disparado.");
            showSlides();
        };
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de particles.js para la portada
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    // Menú hamburguesa para móviles
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Año actual en el footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Scroll suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                if (navLinks && navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Animaciones al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }
        });
    };

    // Configurar elementos animados
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        if (element.classList.contains('slide-in-left')) {
            element.style.transform = 'translateX(-50px)';
        } else if (element.classList.contains('slide-in-right')) {
            element.style.transform = 'translateX(50px)';
        }
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Efecto hover para imágenes de actividades
    const zoomImages = document.querySelectorAll('.zoom-effect');
    zoomImages.forEach(image => {
        image.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.05)';
        });
        
        image.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });

    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
});
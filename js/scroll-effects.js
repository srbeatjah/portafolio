// Efectos de aparición al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const scrollElements = document.querySelectorAll('[data-scroll]');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };
    
    const elementOutofView = (el) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop > (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    
    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
        element.setAttribute('data-scroll', 'in');
    };
    
    const hideScrollElement = (element) => {
        element.setAttribute('data-scroll', 'out');
    };
    
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else if (elementOutofView(el)) {
                hideScrollElement(el);
            }
        });
    };
    
    // Inicializar
    scrollElements.forEach((el) => {
        el.setAttribute('data-scroll', 'out');
    });
    
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Ejecutar una vez al cargar
    handleScrollAnimation();
});
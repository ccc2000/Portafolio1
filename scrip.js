// Scroll suave para enlaces del menú
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animación al hacer scroll
const secciones = document.querySelectorAll('section');

const mostrarSeccion = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
};

const observer = new IntersectionObserver(mostrarSeccion, { threshold: 0.2 });
secciones.forEach(seccion => observer.observe(seccion));

// Formulario
const form = document.getElementById('form-contacto');
form.addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Pronto te responderé.');
    form.reset();
});

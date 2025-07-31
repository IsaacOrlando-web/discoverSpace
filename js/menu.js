document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('myButton');
    const nav = document.getElementById('main-nav');
    const body = document.body;

    // Inicializar el botón con el ícono de hamburguesa
    hamburger.innerHTML = '&#9776;';

    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // Toggle menu state
        nav.classList.toggle('open');
        body.classList.toggle('menu-open');
        
        // Toggle hamburger icon
        if (nav.classList.contains('open')) {
            hamburger.innerHTML = 'X';
            document.body.style.overflow = 'hidden';
        } else {
            hamburger.innerHTML = '&#9776;';
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on links
    document.querySelectorAll('#main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 829) {
                nav.classList.remove('open');
                body.classList.remove('menu-open');
                hamburger.innerHTML = '&#9776;';
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 829 && 
            !nav.contains(e.target) && 
            e.target !== hamburger &&
            nav.classList.contains('open')) {
            nav.classList.remove('open');
            body.classList.remove('menu-open');
            hamburger.innerHTML = '&#9776;';
            document.body.style.overflow = '';
        }
    });

    // Reset on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 829) {
            nav.classList.remove('open');
            body.classList.remove('menu-open');
            hamburger.innerHTML = '&#9776;';
            document.body.style.overflow = '';
        }
    });
});
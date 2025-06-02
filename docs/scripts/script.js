// Animação para a Navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle do menu hambúrguer
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('show');
        });
    }
});

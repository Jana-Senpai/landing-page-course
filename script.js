const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const home = document.getElementById('home');
const course = document.getElementById('course');
const footer = document.getElementById('footer');
const wave = document.querySelector('#wave-footer path');
const navbar = document.getElementById("navbar");
const navbarDarkMode = document.getElementById("navbar");
const iconDarkMode = document.getElementById('icon-dark-mode');

// Library Scroll Reveal
ScrollReveal({
    distance: "200px",
    duration: 1500,
    delay: 100,
    reset: true
});

ScrollReveal().reveal(".fromLeft", {origin:"left"});
ScrollReveal().reveal(".fromRight", {origin:"right"});
ScrollReveal().reveal(".fromBottom", {origin:"bottom"});
ScrollReveal().reveal(".fromTop", {origin:"top"});

// Navbar scroll effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove('scroll')
    }
});

// DarkMode toggle
darkModeToggle.addEventListener('click', () => {
    // icon toggle dark mode
    iconDarkMode.classList.toggle('bi-brightness-high-fill');
    iconDarkMode.classList.toggle('bi-moon-fill')

    // background color icon dark mode
    darkModeToggle.classList.toggle('btn-secondary');
    darkModeToggle.classList.toggle('btn-light');

    // body dark mode
    body.classList.toggle('dark-mode');
    body.classList.toggle('bg-body-secondary');

    // navbar
    navbar.classList.toggle('dark-mode')

    // home section dark mode
    home.classList.toggle('dark-mode');

    // course section dark mode
    course.classList.toggle('dark-mode');

    // footer dark mode
    footer.classList.toggle('dark-mode');

    // wave footer dark mode
    wave.classList.toggle('dark-mode');
});
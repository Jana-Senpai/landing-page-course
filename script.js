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
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = "rgba(33, 37, 41, 0.9)";
        navbar.style.borderBottom = "1px solid #fff";
    } else {
        navbar.style.backgroundColor = "rgba(33, 37, 41, 1)";
        navbar.style.borderBottom = "none";
    }
});
// Selector CSS del botón hamburguesa
var menuToggle = document.querySelector(".menu-toggle");
// Selector CSS del menu (nav-menu)
var navMenu = document.querySelector(".nav-menu");
// Interceptar el evento click del botón hamburguesa
menuToggle.onclick = () => {
    navMenu.classList.toggle("show");
}
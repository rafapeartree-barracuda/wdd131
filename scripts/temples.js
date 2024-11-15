document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("year").textContent = year;
    document.getElementById("lastModified").textContent = lastModified;

    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});

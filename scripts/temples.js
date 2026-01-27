const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");
const headerH1 = document.querySelector("h2");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    headerH1.classList.toggle("hidden");
    menuBtn.classList.toggle("open-btn");
    menuBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
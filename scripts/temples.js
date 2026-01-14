const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
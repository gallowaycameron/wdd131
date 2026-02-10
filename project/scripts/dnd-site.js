const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
    header.classList.add("menu-open");
});

closeBtn.addEventListener("click", () => {
    header.classList.remove("menu-open");
});
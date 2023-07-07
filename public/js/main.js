const menu = document.querySelector(".header__menu");
const hamburger = document.querySelector(".header__burger-menu-icon");
const closeIcon = document.querySelector(".header__burger-close-icon");
const closeButton = document.querySelector(".header__burger-close-icon img");

function toggleMenu() {
  menu.classList.toggle("open");
  hamburger.style.display = menu.classList.contains("open") ? "none" : "block";
  closeIcon.style.display = menu.classList.contains("open") ? "block" : "none";
}

hamburger.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

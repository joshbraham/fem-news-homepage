const navMenu = document.querySelector("nav");
const navOverlay = document.querySelector(".nav-overlay");

const openMenuBtn = document.querySelector(".btn-open-menu");
const closeMenuBtn = document.querySelector(".btn-close-menu");

openMenuBtn.addEventListener("click", () => {
  navOverlay.style.zIndex = 1;
  navMenu.style.translate = "0";
  navOverlay.style.opacity = 1;
});

closeMenuBtn.addEventListener("click", () => {
  navOverlay.style.opacity = 0;
  navMenu.style.translate = "100%";
  navOverlay.style.zIndex = -1;
});

// DEBUG
const screenWidth = document.querySelector(".screen-width");
function setWidthDisplay() {
  screenWidth.textContent = window.outerWidth;
}
window.addEventListener("resize", setWidthDisplay);

setWidthDisplay();

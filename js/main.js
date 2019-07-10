// burger-menu
const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let menuShown = false;
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!menuShown) {
    menuShown = true;

    menuButton.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));
  } else {
    menuShown = false;

    menuButton.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));
  }
}

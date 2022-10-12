// Burger-menu

const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header-wrap");

if (iconMenu) {
  iconMenu.addEventListener("click",() => {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

menuBody.addEventListener("click", () => {
  if (iconMenu.classList.contains("_active")) {
    document.body.classList.remove("_lock");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
  }
});

// Donate-line





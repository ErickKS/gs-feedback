// NAV
const nav = document.getElementById("nav");
const menu = document.getElementById("navigation");
const btnMobile = document.getElementById("btnMobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  nav.classList.toggle("active");
  menu.classList.toggle("active");

  document.documentElement.onclick = () => {
    if (window.screen.width <= 770) {
      menu.classList.remove("active");
      nav.classList.remove("active");
    }
  };
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
});

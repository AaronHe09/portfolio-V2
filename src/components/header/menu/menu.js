const menu = document.querySelector(".menu");
const ul = document.querySelector(".nav-ul");
const anchors = document.querySelectorAll(".nav-a");

export function menuHandler() {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
    ul.classList.toggle("active-menu");
  });

  anchors.forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("active-menu");
      ul.classList.remove("active-menu");
    });
  });
}

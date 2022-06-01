import city from "/src/assets/city.gif";

export function renderFooterImg() {
  const cont = document.querySelector(".footer-img");
  const img = new Image();

  img.src = city;
  cont.appendChild(img);
}

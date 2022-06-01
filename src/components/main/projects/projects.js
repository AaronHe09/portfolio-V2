import chest from "/src/assets/chest.gif";

export function renderChest() {
  const cont = document.querySelector(".chest");
  const newImage = new Image();

  newImage.src = chest;
  cont.appendChild(newImage);
}

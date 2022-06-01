import pirate from "/src/assets/pirate.gif";

export function renderCharacter() {
  const container = document.querySelector(".player-content");

  const newImage = new Image();
  newImage.src = pirate;

  container.appendChild(newImage);
}

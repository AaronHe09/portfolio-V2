import player from "/src/assets/player.gif";

export function renderCharacter() {
  const container = document.querySelector(".player-content");

  const newImage = new Image();
  newImage.src = player;

  container.appendChild(newImage);
}

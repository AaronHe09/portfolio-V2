export function navBtnHandler() {
  const button = document.querySelector(".about-me-btn");
  const modal = document.querySelector(".modal-bg");

  button.addEventListener("click", () => modal.classList.add("bg-active"));
}

export function removeModal(e) {
  const modal = document.querySelector(".modal-bg");
  modal.addEventListener("click", () => {
    modal.classList.remove("bg-active");
  });
}

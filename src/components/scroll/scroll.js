export function scrollHandler() {
  const array = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    for (let i = 0; i < array.length; i++) {
      let e = array[i];
      let viewDist = e.getBoundingClientRect().top - window.innerHeight;

      if (viewDist < 0) {
        e.classList.add("active");
      }
    }
  });
}

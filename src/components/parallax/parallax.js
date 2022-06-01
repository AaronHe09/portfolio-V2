import stars from "/src/assets/1.png";
import cloud from "/src/assets/2.png";
import moon from "/src/assets/3.png";
import cloud2 from "/src/assets/4.png";
import cloud3 from "/src/assets/5.png";
import cloud4 from "/src/assets/6.png";

const picArray = [
  { url: stars, class: "stars" },
  { url: cloud, class: "cloud" },
  { url: moon, class: "moon" },
  { url: cloud2, class: "cloud2" },
  { url: cloud3, class: "cloud3" },
  { url: cloud4, class: "cloud4" },
];

/* Render */

export function renderPics() {
  const content = document.querySelector(".parallax-content");

  picArray.forEach((pic) => {
    const newpic = new Image();
    newpic.src = pic.url;
    newpic.setAttribute("class", pic.class);

    content.appendChild(newpic);
  });
}

/* Effect */

export function parallaxEffect() {
  window.addEventListener("scroll", () => {
    let value = window.scrollY;

    document.querySelector(".parallax-text").style.top =
      35 + value * -0.2 + "%";
    document.querySelector(".stars").style.top = value * -0.1 + "%";
    document.querySelector(".cloud").style.top = value * 0.2 + "%";
    document.querySelector(".moon").style.top = value * 0.4 + "%";
    document.querySelector(".cloud2").style.right = value * 0.15 + "%";
    document.querySelector(".cloud3").style.left = value * 0.15 + "%";
  });
}

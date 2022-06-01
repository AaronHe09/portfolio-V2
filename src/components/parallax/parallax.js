import sun from "/src/assets/sun.png";
import cloud1 from "/src/assets/cloud.png";
import cloud2 from "/src/assets/cloud 2.png";
import cloud3 from "/src/assets/cloud 3.png";
import cloud4 from "/src/assets/cloud 4.png";
import cloud5 from "/src/assets/cloud 5.png";
import island from "/src/assets/island.png";
import boat from "/src/assets/boat.png";
import background from "/src/assets/Background.png";
import deer from "/src/assets/deer.png";

const picArray = [
  { url: sun, class: "sun" },
  { url: cloud1, class: "cloud1" },
  { url: cloud2, class: "cloud2" },
  { url: cloud3, class: "cloud3" },
  { url: cloud4, class: "cloud4" },
  { url: cloud5, class: "cloud5" },
  { url: island, class: "island" },
  { url: boat, class: "boat" },
  { url: background, class: "background" },
  { url: deer, class: "deer" },
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

    document.querySelector(".boat").style.left = value * -0.05 + "%";
    document.querySelector(".boat").style.top = value * 0.05 + "%";
    document.querySelector(".island").style.top = value * 0.05 + "%";
    document.querySelector(".sun").style.top = value * -0.01 + "%";
    document.querySelector(".cloud5").style.top = value * -0.03 + "%";
    document.querySelector(".cloud4").style.top = value * -0.04 + "%";
    document.querySelector(".cloud3").style.top = value * -0.02 + "%";
    document.querySelector(".cloud2").style.top = value * -0.01 + "%";
    document.querySelector(".cloud1").style.top = value * -0.05 + "%";
    document.querySelector(".parallax-text").style.top =
      35 + value * -0.04 + "%";
  });
}

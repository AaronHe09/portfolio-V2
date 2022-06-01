import { menuHandler } from "./components/header/menu/menu.js";
import { renderCharacter } from "./components/main/about/about.js";
import { parallaxEffect, renderPics } from "./components/parallax/parallax.js";
import { preloader } from "./components/pre-loader/pre.loader.js";
import { scrollHandler } from "./components/scroll/scroll.js";
import {
  renderLanguages,
  renderPc,
} from "./components/main/languages/languages.js";
import "./styles.js";

/* preloader  */
preloader();

/* Scroll */
scrollHandler();

/* Header */
menuHandler();

/*Parallax*/
renderPics();
parallaxEffect();

/* Main */
renderCharacter();
renderLanguages();
renderPc();

import { menuHandler } from "./components/header/menu/menu.js";
import { renderCharacter } from "./components/main/about/about.js";
import { parallaxEffect, renderPics } from "./components/parallax/parallax.js";
import { preloader } from "./components/pre-loader/pre.loader.js";
import "./styles.js";

/* preloader  */
preloader();

/* Header */
menuHandler();

/*Parallax*/
renderPics();
parallaxEffect();

/* Main */
renderCharacter();

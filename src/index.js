import { menuHandler } from "./components/header/menu/menu.js";
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

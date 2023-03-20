import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import { header } from "./functions/header.js";
import { home } from "./pages/home.js";
import { footer } from "./functions/footer.js";

header();
home();
footer();

const homeDiv = document.querySelector("#homeDiv");
const menuDiv = document.querySelector("#menuDiv");
const contactDiv = document.querySelector("#contactDiv");

homeDiv.addEventListener("click", changePage);
menuDiv.addEventListener("click", changePage);
contactDiv.addEventListener("click", changePage);

function changePage(event) {
  console.log("nice try lol");
}

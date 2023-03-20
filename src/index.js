import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import { header } from "./functions/header.js";
import { home } from "./pages/home.js";
import { footer } from "./functions/footer.js";

let currentPage = "Home";

window.onload = () => {
  header();
  home();
  footer();

  const homeDiv = document.querySelector("#homeDiv");
  const menuDiv = document.querySelector("#menuDiv");
  const contactDiv = document.querySelector("#contactDiv");

  homeDiv.addEventListener("click", changePage);
  menuDiv.addEventListener("click", changePage);
  contactDiv.addEventListener("click", changePage);
};

const changePage = (event) => {
  const switchTo = event.target.innerText;
  if (switchTo == currentPage) return console.log("Already on this page");

  if (switchTo == "Home") {
    removePage();
    home();
  } else if (switchTo == "Menu") {
    removePage();
  } else {
    removePage();
  }
  currentPage = switchTo;
};

const removePage = () => {
  const content = document.querySelector("#content");
  content.innerHTML = "";
};
import { createContainer } from "../functions/container";
import { getMainContainer } from "../functions/getMainContainer";

export const menu = () => {
  createContainer();
  header();
  // menuList();
};

const header = () => {
  const menuHeader = document.createElement("div");
  menuHeader.classList.add("divHeader");
  menuHeader.classList.add("rounded");

  const menuHeaderText = document.createElement("h1");
  menuHeaderText.innerText = "Menu";
  menuHeader.append(menuHeaderText);

  getMainContainer().append(menuHeader);
};

import { getMainContainer } from "./getMainContainer";

export const createHeader = (name) => {
  const header = document.createElement("div");
  header.classList.add("divHeader");

  const headerText = document.createElement("h1");
  headerText.innerText = `${name}`;
  header.append(headerText);

  getMainContainer().append(header);
};

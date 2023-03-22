import { createContainer } from "../functions/container";
import { createHeader } from "../functions/createHeader";
import { getMainContainer } from "../functions/getMainContainer";

export const contact = () => {
  createContainer();
  createHeader("Contact Us");
  info();
};

const info = () => {
  const container = document.createElement("div");
  container.classList.add("divContact");

  const textA = document.createElement("p");
  textA.innerText =
    "If you have any questions or comments, please don't hesitate to contact us at: ";
  container.append(textA);

  const textB = document.createElement("p");
  textB.innerText = "info@misiasspaghetti.com or (123) 456-7890";
  container.append(textB);

  const textC = document.createElement("p");
  textC.innerText = "We look forward to serving you soon!";
  container.append(textC);

  getMainContainer().append(container);
};

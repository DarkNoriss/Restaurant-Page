export const header = () => {
  const mainHeader = document.querySelector("#header");

  const navBox = document.createElement("nav");

  const homeDiv = document.createElement("div");
  homeDiv.classList.add("rounded");
  homeDiv.id = "homeDiv";
  const homeText = document.createElement("p");
  homeText.innerText = "Home";
  homeDiv.append(homeText);
  navBox.append(homeDiv);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("rounded");
  menuDiv.id = "menuDiv";
  const menuText = document.createElement("p");
  menuText.innerText = "Menu";
  menuDiv.append(menuText);
  navBox.append(menuDiv);

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("rounded");
  contactDiv.id = "contactDiv";
  const contactText = document.createElement("p");
  contactText.innerText = "Contact";
  contactDiv.append(contactText);
  navBox.append(contactDiv);

  mainHeader.append(navBox);
};

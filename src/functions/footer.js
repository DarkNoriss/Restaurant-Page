export const footer = () => {
  const mainFooter = document.querySelector("#footer");

  const footerLink = document.createElement("a");
  footerLink.href = "https://github.com/DarkNoriss";
  footerLink.target = "__blank";
  footerLink.classList.add("nodecoration");
  footerLink.classList.add("fa");
  footerLink.classList.add("fa-github");
  footerLink.innerText = "DarkNoriss";

  mainFooter.append(footerLink);
};

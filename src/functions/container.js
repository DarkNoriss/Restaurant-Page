export const createContainer = () => {
  const mainContent = document.querySelector("#content");
  const container = document.createElement("div");
  container.classList.add("mainContainer");
  container.classList.add("rounded");
  mainContent.append(container);
};

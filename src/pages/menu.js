import { createContainer } from "../functions/container";
import { getMainContainer } from "../functions/getMainContainer";

export const menu = () => {
  createContainer();
  header();
  list();
};

const header = () => {
  const menuHeader = document.createElement("div");
  menuHeader.classList.add("divHeader");
  menuHeader.classList.add("background");

  const menuHeaderText = document.createElement("h1");
  menuHeaderText.innerText = "Menu";
  menuHeader.append(menuHeaderText);

  getMainContainer().append(menuHeader);
};

const list = () => {
  itemStarter();
  itemMain();
  itemDessert();
  itemBeverage();
};

const itemStarter = () => {
  const category = "Starters";
  const itemOne = {
    name: "Garlic bread",
    description:
      "Toasted bread brushed with garlic-infused olive oil and butter, topped with parsley and salt",
  };
  const itemTwo = {
    name: "Caprese Salad",
    description:
      "Fresh mozzarella, tomatoes, and basil drizzled with olive oil and balsamic vinegar",
  };
  const itemThree = {
    name: "Minestrone Soup",
    description: "A hearty vegetable soup with pasta and beans",
  };

  createItem(category, itemOne, itemTwo, itemThree);
};

const itemMain = () => {
  const category = "Main course";
  const itemOne = {
    name: "Spaghetti Bolognese",
    description:
      "A classic Italian pasta dish with spaghetti noodles and a rich tomato-based sauce, featuring ground beef, onions, garlic, carrots, celery, and a blend of herbs and spices",
  };
  const itemTwo = {
    name: "Lasagna",
    description:
      "Layers of pasta sheets with a rich meat or vegetable sauce, mozzarella cheese, and béchamel sauce",
  };
  const itemThree = {
    name: "Chicken Parmesan",
    description:
      "Breaded chicken breast topped with tomato sauce and melted mozzarella cheese, served with spaghetti",
  };

  createItem(category, itemOne, itemTwo, itemThree);
};
const itemDessert = () => {
  const category = "Dessert";
  const itemOne = {
    name: "Tiramisu",
    description:
      "A traditional Italian dessert made with layers of ladyfingers, espresso, and mascarpone cheese",
  };
  const itemTwo = {
    name: "Gelato",
    description:
      "Italian ice cream available in a variety of flavors such as chocolate, vanilla, strawberry, and pistachio",
  };
  const itemThree = {
    name: "Cannoli",
    description:
      "Fried pastry tubes filled with sweetened ricotta cheese and chocolate chips",
  };

  createItem(category, itemOne, itemTwo, itemThree);
};
const itemBeverage = () => {
  const category = "Beverage";
  const itemOne = {
    name: "Coca-Cola",
    description:
      "A refreshing carbonated soft drink that pairs well with savory dishes.",
  };
  const itemTwo = {
    name: "Red Wine",
    description:
      "A classic pairing with Italian food, choose a bold red wine such as Chianti or Barolo to complement the rich flavors of the bolognese sauce.",
  };
  const itemThree = {
    name: "Limoncello",
    description:
      "A sweet and tangy lemon-flavored liqueur, served as a digestif",
  };

  createItem(category, itemOne, itemTwo, itemThree);
};

const createItem = (category, ...item) => {
  const menuCont = document.createElement("div");
  menuCont.classList.add("menuCont");
  menuCont.classList.add("background");

  const menuCateg = document.createElement("div");
  menuCateg.classList.add("divTitle");
  const menuCategText = document.createElement("h2");
  menuCategText.innerText = `${category}`;
  menuCateg.append(menuCategText);
  menuCont.append(menuCateg);

  item.forEach((element) => {
    const menuItem = document.createElement("div");
    const menuItemTxt = document.createElement("p");
    menuItemTxt.classList.add("itemText");
    menuItemTxt.innerText = `${element.name}`;
    menuItem.append(menuItemTxt);

    const menuItemDesc = document.createElement("p");
    menuItemDesc.classList.add("desc");
    menuItemDesc.innerText = `${element.description}`;
    menuItem.append(menuItemDesc);

    menuCont.append(menuItem);
  });

  getMainContainer().append(menuCont);
};

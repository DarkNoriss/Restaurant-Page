import { createContainer } from "../functions/container";
import { createHeader } from "../functions/createHeader";
import { getMainContainer } from "../functions/getMainContainer";

export const home = () => {
  createContainer();
  createHeader("Misia's spaghetti");
  info();
  hours();
  location();
};

const info = () => {
  const homeInfo = document.createElement("div");
  homeInfo.classList.add("divInfo");

  const homeInfoText = document.createElement("p");
  homeInfoText.innerText =
    "Welcome to our Spaghetti Bolognese Shop, where we serve delicious and authentic Italian cuisine. Our specialty is the classic Spaghetti Bolognese, made with fresh and high-quality ingredients.";
  homeInfo.append(homeInfoText);

  getMainContainer().append(homeInfo);
};

const hours = () => {
  const homeHours = document.createElement("div");
  homeHours.classList.add("divHours");

  const homeHoursHeader = document.createElement("h2");
  homeHoursHeader.classList.add("hours-header");
  homeHoursHeader.innerText = "We are open";
  homeHours.append(homeHoursHeader);

  const homeHoursDay = document.createElement("div");
  homeHoursDay.classList.add("hours-days");

  const homeHoursSunday = document.createElement("p");
  homeHoursSunday.innerText = "Sunday: 8am - 8pm";
  homeHoursDay.append(homeHoursSunday);

  const homeHoursMonday = document.createElement("p");
  homeHoursMonday.innerText = "Monday: 6am - 6pm";
  homeHoursDay.append(homeHoursMonday);

  const homeHoursThuesday = document.createElement("p");
  homeHoursThuesday.innerText = "Tuesday: 6am - 6pm";
  homeHoursDay.append(homeHoursThuesday);

  const homeHoursWednesday = document.createElement("p");
  homeHoursWednesday.innerText = "Wednesday: 6am - 6pm";
  homeHoursDay.append(homeHoursWednesday);

  const homeHoursThursday = document.createElement("p");
  homeHoursThursday.innerText = "Thursday: 6am - 10pm";
  homeHoursDay.append(homeHoursThursday);

  const homeHoursFriday = document.createElement("p");
  homeHoursFriday.innerText = "Friday: 6am - 10pm";
  homeHoursDay.append(homeHoursFriday);

  const homeHoursSaturday = document.createElement("p");
  homeHoursSaturday.innerText = "Saturday: 8am - 10pm";
  homeHoursDay.append(homeHoursSaturday);

  homeHours.append(homeHoursDay);
  getMainContainer().append(homeHours);
};

const location = () => {
  // Our shop is located in the heart of the city, at 123 Main Street.
  const homeLocation = document.createElement("div");
  homeLocation.classList.add("divLocation");

  const homeLocationHeader = document.createElement("h2");
  homeLocationHeader.innerText = "Our shop is located at";
  homeLocation.append(homeLocationHeader);

  const homeLocationText = document.createElement("p");
  homeLocationText.innerText = "123 Main Street, Poznan";
  homeLocation.append(homeLocationText);

  getMainContainer().append(homeLocation);
};

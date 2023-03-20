import { createContainer } from "../functions/container";

export const home = () => {
  createContainer();
  header();
  info();
  hours();
  // location();
};

const header = () => {
  const homeHeader = document.createElement("div");
  homeHeader.classList.add("divHeader");
  homeHeader.classList.add("rounded");

  const homeHeaderText = document.createElement("h1");
  homeHeaderText.innerText = "Misia's spaghetti bolognese";
  homeHeader.append(homeHeaderText);

  getMainContainer().append(homeHeader);
};

const info = () => {
  const homeInfo = document.createElement("div");
  homeInfo.classList.add("divInfo");
  homeInfo.classList.add("rounded");

  const homeInfoText = document.createElement("p");
  homeInfoText.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id magna sed velit viverra placerat non sed purus. Sed tempor pulvinar eros, ut placerat orci porta quis. Nulla eleifend nisl ut leo egestas, vitae vehicula nisl pulvinar. Maecenas sit amet porttitor libero. Suspendisse viverra efficitur dignissim. Cras sed consequat quam. Cras eleifend scelerisque sapien vitae aliquam. Donec id mi nibh. Curabitur lectus augue, imperdiet vitae sapien in, aliquet porttitor erat. In lacinia, orci vel elementum sodales, mi augue gravida magna, ut mattis ex mauris id risus. Etiam sagittis leo quis metus molestie vulputate. Aenean venenatis commodo lacus, sed semper tortor maximus vitae. Sed pellentesque venenatis lobortis. Praesent leo erat, pulvinar sed elit quis, hendrerit vulputate diam. Curabitur venenatis mi at mauris aliquam congue.";
  homeInfo.append(homeInfoText);

  getMainContainer().append(homeInfo);
};

const hours = () => {
  const homeHours = document.createElement("div");
  homeHours.classList.add("divHours");
  homeHours.classList.add("rounded");

  const homeHoursHeader = document.createElement("h2");
  homeHoursHeader.classList.add("hours-header");
  homeHoursHeader.innerText = "Hours";
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

const locatiion = () => {};

const getMainContainer = () => document.querySelector(".mainContainer");

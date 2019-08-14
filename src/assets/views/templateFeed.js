import { observer } from "./../js/auth.js";

export const templateFeed = () => {
  observer();
  console.log("FUNCIONA LA REDIRECCIÓN");
  const containerFeed = document.createElement("div");
  containerFeed.classname = "containerFeed";
  const contentFeed = `probando feed`;
  containerFeed.innerHTML = contentFeed;
  return containerFeed;
};

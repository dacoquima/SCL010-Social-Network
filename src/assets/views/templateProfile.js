import { templateMenu } from "./templateMenu.js";

export const templateProfile = () => {
  const containerProfile = document.createElement("div");
  containerProfile.className = "containerProfile";
  const contentProfile = `prueba`;

  containerProfile.innerHTML = contentProfile;
  containerProfile.append(templateMenu());

  return containerProfile;
};

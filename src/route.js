import { templateLogin } from "./assets/views/templateLogin.js";
import { templateCreate } from "./assets/views/templateCreate.js";
import { templateFeed } from "./assets/views/templateFeed.js";
import { templateResetPassword } from "./assets/views/templateResetPassword.js";
import { templateSuccessCreate } from "./assets/views/templateSuccessCreate.js";
import { templateHome } from "./assets/views/templateHome.js";
import { templatePost } from "./assets/views/templatePost.js";


const changeRouter = hash => {
  if (hash === "#/home") {
    return showTemplate(hash);
  }
  if (hash === "#/login") {
    return showTemplate(hash);
  }
  if (hash === "#/signUp") {
    return showTemplate(hash);
  }
  if (hash === "#/feed") {
    return showTemplate(hash);
  }

  if (hash === "#/resetPassword") {
    return showTemplate(hash);
  }
  if (hash === "#/successCreate") {
    return showTemplate(hash);
  }
  if (hash === "#/post") {
    return showTemplate(hash);
  }
};

const showTemplate = hash => {
  const router = hash.substring(2);
  const containerRoot = document.getElementById("root");
  containerRoot.innerHTML = "";
  switch (router) {
    case "home":
      containerRoot.appendChild(templateHome());
      break;
    case "login":
      containerRoot.appendChild(templateLogin());
      break;
    case "signUp":
      containerRoot.appendChild(templateCreate());
      break;
    case "feed":
      containerRoot.appendChild(templateFeed());
      break;
    case "resetPassword":
      containerRoot.appendChild(templateResetPassword());
      break;
    case "successCreate":
      containerRoot.appendChild(templateSuccessCreate());
    case "post":
      containerRoot.appendChild(templatePost());

      break;
    default:
      containerRoot.innerHTML = `<p>Error 404</p>`;
  }
};

export const initRouter = () => {
  window.addEventListener("load", changeRouter(window.location.hash));

  if ("onhashchange" in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};

import { observer } from "./../js/auth.js";
import { readPost } from "../js/post.js";

//caro esta creando template del feed
export const templateFeed = () => {
  observer();
  readPost();
  console.log("FUNCIONA LA REDIRECCIÓN");
  //console.log(observer());
  //firebase.auth().currentUser.uid===doc.data().uid {
  const containerFeed = document.createElement("div");
  containerFeed.className = "containerFeed";
  const contentFeed = `<header class="secondHeader">
<a id="feedIcon" class="iconInputBack" onclick="window.history.back()"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>`;
  //readPost();
  containerFeed.innerHTML = contentFeed;

  // const btnTest = containerCreate.querySelector("#feed");
  // btnTest .addEventListener("click", () => {
  // });
  // }

  return containerFeed;
};

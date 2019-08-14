import { observer } from "./../js/auth.js";

export const templateFeed = () => {
  observer();
  console.log("FUNCIONA LA REDIRECCIÓN");
    //console.log(observer());
const containerCreate = document.createElement("div");
containerCreate.className = "containerCreate";
const contentCreate = `<header class="secondHeader">
<img src="./assets/img/back.svg" class="iconInputBack" alt="boton para volver"/>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>
<main id = "templateWall" class="mainLoginCreate">
<div class = "perfil">
        <img src="./assets/img/user.svg" class="imgAvatar" alt="avatar user"/><h2></h2><p></p>
        </div>
        <h2>Tema</h2>
  <textarea name="postTxtWall" class="txtAreaStyle" cols="40" rows="10" placeholder="¿Tienes algún dato?"></textarea>
  <button id='wall' class="actionButtonRegular">Publicar</button>
    </main>`
    //readPost(); 
    containerCreate.innerHTML = contentCreate;
    const btnTest = containerCreate.querySelector("#wall");
    btnTest .addEventListener("click", () => {
    });
return containerCreate;
};

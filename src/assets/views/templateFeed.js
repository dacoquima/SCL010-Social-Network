import {
  observer
} from "./../js/auth.js";
import {
  readPost
} from "../js/post.js";


//caro esta creando template del feed
export const templateFeed = () => {
  observer();
  readPost();
  console.log("FUNCIONA LA REDIRECCIÓN");
<<<<<<< HEAD
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
  <button id='feed' class="actionButtonRegular">teste</button>
    </main>`
    //readPost(); 
    containerCreate.innerHTML = contentCreate;
    const btnTest = containerCreate.querySelector("#feed");
    btnTest .addEventListener("click", () => {
    });
return containerCreate;

};


  // //Dani esta probando el feed
  // const containerFeed = document.createElement("div");
  // containerFeed.classname = "containerFeed";
  // const contentFeed = `probando feed`;
  // containerFeed.innerHTML = contentFeed;
  // return containerFeed;
=======
  //console.log(observer());
  //firebase.auth().currentUser.uid===doc.data().uid { 
  const containerFeed = document.createElement("div");
  containerFeed.className = "containerFeed";
  const contentFeed = `<header class="secondHeader">
<a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
<img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
</header>`
  //readPost(); 
  containerFeed.innerHTML = contentFeed;

  // const btnTest = containerCreate.querySelector("#feed");
  // btnTest .addEventListener("click", () => {
  // });
  // }

  return containerFeed;
};
>>>>>>> e637e9ff1cca15f434b93445249555758eab346b

//importar funcion que crea post
import {
  createPost
} from "../js/post.js";

// import { saveUserToDatabaseAfterLogin } from "./../js/auth.js";
const containerFeedPost = document.getElementById("root2");
export const templatePost = () => {
  containerFeedPost.innerHTML = "";
  let actualUser = firebase.auth().currentUser;
  console.log(actualUser);

  const containerPost = document.createElement("div");
  containerPost.className = "containerPost";

  const contentPost = `
    <header class="secondHeader">
      <a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
      <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
    </header>
    <main id = "templatePost" class="mainLoginCreate">
      <div>
        <h1 class="secondarytextPost">Nueva publicación</h1>
      </div>
      <div class = "perfil">
        <img src="${actualUser.photoURL}" class="imgAvatar" alt="avatar user"/>
        <h2>${actualUser.displayName}</h2>
        </div>
        <form class="formPost"> 
        <span class="iconInput1"> 
       <img src="./assets/img/categoryIcon.svg" alt="icono categoria">
       <select name="slctCategory" id= "slctCategory" class="slct-box">
       <option value="Categoria">Categorias</option> 
       <option value="Alojamiento" class="Alojamiento">Alojamiento</option>
       <option value="Arriendo" class="Arriendo">Arriendo</option>
       <option value="Cultura" class="Cultura">Cultura</option>
       <option value="Gastronomia" class="Gastronomia">Gastronomia</option>
       <option value="Trabajo" class="Trabajo">Trabajo</option>
       <option value="Tramites" class="Tramites">Tramites de visa</option>
       </select>
        </span>
          <textarea name="postTxt" class="txtAreaStyle" cols="40" rows="3" placeholder="¿Tienes algún dato?"></textarea>
          </form> 
            <button id='post' class="actionButtonRegular">Publicar</button>
            </main>`;
  console.log("Llega aquí");
  containerPost.innerHTML = contentPost;

  const btnPost = containerPost.querySelector("#post");
  btnPost.addEventListener("click", () => {
    createPost();
  });
  return containerPost;
};
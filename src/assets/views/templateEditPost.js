//importar funcion que crea post
import {
    editPost
} from "../js/post.js";
import {
    observer
} from "./../js/auth.js";
// import { saveUserToDatabaseAfterLogin } from "./../js/auth.js";
const containerFeedPost = document.getElementById("root2");
export const templateEditPost = () => {
    containerFeedPost.innerHTML = "";
    console.log("Puede postar");
    // let user = saveUserToDatabaseAfterLogin();
    observer();
    const containerPost = document.createElement("div");
    containerPost.className = "containerPost";
    const contentPost = `<header class="secondHeader">
        <a id="feedIcon" class="iconInputBack" href="#/feed"><img src="./assets/img/back.svg"  alt="boton para volver"/></a>
        <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
        </header>
        <main id = "templatePostEdit" class="mainLoginCreate">
        <div><h1 class="secondarytextPost">Nueva publicación</h1></div>
        <div class = "perfil">
        <img src="./assets/img/user.svg" class="imgAvatar" alt="avatar user"/><h2>Ana María González</h2>
        </div>
        <form class="formPost"> 
        <span class="iconInput1"> 
       <img src="./assets/img/categoryIcon.svg" alt="icono categoria">
       <select name="slctCategory" id= "slctCategoryEdit" class="slct-box">
       <option value="Categoria">Categorias</option> 
       <option value="Alojamiento">Alojamiento</option>
       <option value="Arriendo">Arriendo</option>
       <option value="Cultura">Cultura</option>
       <option value="Gastronomia">Gastronomia</option>
       <option value="Trabajo">Trabajo</option>
       <option value="Tramites de visa">Tramites de visa</option>
       </select>
        </span>
          <textarea name="postTxtEdit" class="txtAreaStyle" cols="40" rows="3" placeholder="¿Tienes algún dato?"></textarea>
          </form> 
            <button id='postEdit' class="actionButtonRegular">Editar</button>
            </main>`

    containerPost.innerHTML = contentPost;

    const btnPost = containerPost.querySelector("#postEdit");
    btnPost.addEventListener("click", () => {
        editPost();
    });
    return containerPost;
};
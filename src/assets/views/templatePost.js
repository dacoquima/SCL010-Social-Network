//importar funcion que crea post
import { createPost } from "../js/createPost.js";
import { observer } from "./../js/auth.js";
// import { saveUserToDatabaseAfterLogin } from "./../js/auth.js";

export const templatePost = () => {
    console.log("Puede postar");
    // let user = saveUserToDatabaseAfterLogin();
    observer();
    console.log(observer());
        const containerCreate = document.createElement("div");
        containerCreate.className = "containerCreate";
        const contentCreate = `<header class="secondHeader">
        <img src="./assets/img/back.svg" class="iconInputBack" alt="boton para volver"/>
        <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
        </header>
        <main id = "templatePost" class="mainLoginCreate">
        <div><h1 class="secondarytextPost">Nueva publicación</h1></div>
        <div class = "perfil">
        <img src="./assets/img/user.svg" class="imgAvatar" alt="avatar user"/><h2>Ana María González</h2>
        </div>
        <form class="formPost"> 
        <span class="iconInput1"> 
       <img src="./assets/img/categoryIcon.svg" alt="icono categoria">
       <select name="slctCategory" id= "slctCategory" class="slct-box">
       <option value="Categoria">Categorias</option> 
       <option value="Alojamiento">Alojamiento</option>
       <option value="Arriendo">Arriendo</option>
       <option value="Cultura">Cultura</option>
       <option value="Gastronomia">Gastronomia</option>
       <option value="Trabajo">Trabajo</option>
       <option value="Tramites de visa">Tramites de visa</option>
       </select>
        </span>
          <textarea name="postTxt" class="txtAreaStyle" cols="40" rows="10" placeholder="¿Tienes algún dato?"></textarea>
          </form> 
            <button id='post' class="actionButtonRegular">Publicar</button>
            </main>` 
      
        containerCreate.innerHTML = contentCreate;
    
        const btnPost = containerCreate.querySelector("#post");
        btnPost.addEventListener("click", () => { 
          createPost();
        });
        return containerCreate;
      };
    

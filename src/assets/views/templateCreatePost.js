// // funcion para crear post
// export const createPost = () => {
// //guardamos firestore en variable
// let db = firebase.firestore();
// //guardamos fecha
// let date = Date.now();
// //usamos esta funcion para obtener uid de uauario corriente

// firebase.auth().onAuthStateChanged(user => {
//   //obtenemos desde collecion users datos de usuario corriente con uid
//   //db.collection('users').doc(user.uid).get().then(doc => {
//   //db.collection("posts").add({
//     db.collection("posts").doc(user.uid).set({
//     // uid: user.uid,
//     // author: user.email,
//     // authorName: doc.data().name,
//     // date: date,
//     category: postcategory,
//     message: postMesage,
//     hashtag: postHashtags,
//     location: postLocation,
//     // like: 1,
//     // liked: 30
//   })
//   .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//     console.error("Error adding document: ", error);
//   })
//   //})
// })
// };

//importar funcion que crea post
import { authPost } from "./../js/authPost.js";

export const templateCreatePost = () => {
    console.log("Puede postar");
        const containerCreate = document.createElement("div");
        containerCreate.className = "containerCreate";
        const contentCreate = `<header>
        <img src="" class="imgFirstHeader" alt="iconografia razas del mundo / logo"/>
        </header>
        <div id = "templatePost" class="mainLoginCreate">
        <div>
        <span>
        <img src="./assets/img/user.svg" class="imgAvatar" alt="avatar user"/><h4 class="secondaryText">Ana María González</h4>
        </span>
        </div>
        <form> 
        <span class="iconInput1"> 
       <img src="./assets/img/categoryIcon.png" alt="icono categoria">
       <select name="slctCategory" id= "slctCategory" class="slct-box">
       <option value="Theme">Categorias</option> 
       <option value="Arriendo">Arriendo</option>
       <option value="Cultura">Cultura</option>
       <option value="Eventos">Eventos</option>
       <option value="Trabajo">Trabajo</option>
       <option value="Tramites de visa">Tramites de visa</option>
       </select>
        </span>
        </br>
          <textarea name="postTxt" class="txtAreaStyle" cols="40" rows="10" placeholder="¿Tienes algún dato?"></textarea>
          <span class="iconInput1">
          <img src="./assets/img/hashtag.svg" alt="avatar user"/>
          <input type="text" name="Hashtag" placeholder='Hashtags' class="inputFormulary">
          </span>
          <span class="iconInput1">
          <img src="./assets/img/location.svg" alt="avatar user"/>
          <input type="text" name="location" placeholder='Ubicación' class="inputFormulary">
          </span>
          </form> 
           </br>
            <button id='post' class="actionButtonRegular">Publicar</button>
            </div>` 
      
        containerCreate.innerHTML = contentCreate;
    
        const btnPost = containerCreate.querySelector("#post");
        btnPost.addEventListener("click", () => {
          // let postCategory = document.querySelector("select[name=slctCategory]").value;
          // let postMesage = document.querySelector("textarea[name=postTxt]").value;
          // let postHashtags = document.querySelector("input[name=Hashtag]").value;
          // let postLocation = document.querySelector("input[name=location]").value;  
          authPost();
          // console.log("category:", postCategory, "Mesage:", postMesage, "Hashtag:", postHashtags, "Location:", postLocation);
          
        });
        return containerCreate;
      };

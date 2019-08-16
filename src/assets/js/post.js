import { observer } from './auth.js'


const containerFeedPost = document.getElementById("root2");
//import { templateFeed } from "./assets/views/templateFeed.js";

//guardamos firestore en variable
let db = firebase.firestore();

// funcion para crear posts
export const createPost = () => {
  observer();
  console.log("createPost A");
  //guardamos fecha
  let date = new Date();
  console.log("createPost B");
  //user = observer();
  //console.log("USER:", user);
  //guardamos os valores elijidos por el usuario
  let postCategory = document.querySelector("select[name=slctCategory]").value;
  let postMesage = document.querySelector("textarea[name=postTxt]").value;
  console.log("category:", postCategory, "Mesage:", postMesage);
//usamos esta funcion para obtener uid de usuario corriente
  firebase.auth().onAuthStateChanged(user => {
    console.log(user);
    //obtenemos desde collecion users datos de usuario corriente con uid
    //db.collection('users').doc(user.uid).get().then(doc => {
      //agrega un ID automatico
      //console.log(doc._document.proto.fields);
    db.collection('posts').add({
      //db.collection("users").doc(user.uid).set({
      uid: user.uid,
      //email: user.email,
      //authorName: doc.data().user,
      authorName: user.displayName,
      photo: user.photoURL,
      date: date,
      category: postCategory,
      message: postMesage
      // like: 1,
  
    })
    .then(function(doc) {
      console.log("Document written with ID: ", doc.id);
      window.location.hash='#/feed';
      readPost();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    })
   })
  //})
  };


export const readPost = () => {
    
  db.collection("posts").onSnapshot((querySnapshot) => {
    containerFeedPost.innerHTML =  "";
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().message}`);
        //templateFeed(doc);
        // const containerFeed = document.createElement("div");
        // containerFeed.className = "containerFeed";
        //let postDate = new Date();
        containerFeedPost.innerHTML += 
        `<main id = "templateWall" class="mainLoginCreate">
          <div class = "perfil">
            <img src=${doc.data().photo} class="imgAvatarPost" alt="avatar user"/>
            <h2>${doc.data().authorName}</h2>
          </div>
          <p>${doc.id}</p>
          <h2>${doc.data().category}</h2>
          <textarea name="postTxtWallFinal" class="txtAreaStylePost" cols="40" rows="2">${doc.data().message}</textarea>
          <button id='deletePost${doc.id}'>Borrar</button>
          <button id='editPost${doc.id}'>Editar</button>
        </main>`
        
    });
    querySnapshot.forEach((doc) => {
      events(doc);
    })
    });
          
          
    return containerFeedPost;
    };
    
export const events = (doc) =>{
  const btnDeletePost = document.getElementById('deletePost'+doc.id);
  btnDeletePost.addEventListener("click", () => {
    deletePost(doc.id);
  })

}


// BORRAR POSTS
export const deletePost = (id) => {
  if(confirm("¿Seguro que quieres borrar tu publicación?")){
db.collection("posts").doc(id).delete().then(function() {
  containerFeedPost.innerHTML = "";
  readPost();
  console.log("Document successfully deleted!");
}).catch(function(error) {
  console.error("Error removing document: ", error);
})
}
};
//   // LEER POSTS
//   //const containerCreate = document.createElement("div");
//   export const readPost = () => {
//     const containerFeed = document.getElementById("container");
//   db.collection("posts").onSnapshot((querySnapshot) => {
//     // containerFeed.innerHTML =  "";
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data().message}`);
//         //templateFeed(doc);
//         // const containerFeed = document.createElement("div");
//         // containerFeed.className = "containerFeed";
//         let postDate = new Date();
//         containerFeed.innerHTML += 
//         `<main id = "templateWall" class="mainLoginCreate">
// <div class = "perfil">
//         <img src="./assets/img/user.svg" class="imgAvatarPost" alt="avatar user"/><h2>${doc.data().authorName}</h2>
//         </div>
//         <h6>${postDate}<h6>
//         <p>${doc.id}</p>
//         <h2>${doc.data().category}</h2>
//   <textarea name="postTxtWallFinal" class="txtAreaStylePost" cols="40" rows="2">${doc.data().message}</textarea>
//   <button id='deletePost'>Borrar</button>
//   <button id='editPost'>Editar</button>
//     </main>`
//     const btnDeletePost = document.getElementById("deletePost");
//     btnDeletePost.addEventListener("click", () => {
//       deletePost(doc.id);
//         })
//     return containerFeed;
//     })
// })
// };

// // BORRAR POSTS
// export const deletePost = (id) => {
//   if(confirm("¿Seguro que quieres borrar tu publicación?")){
// db.collection("posts").doc(id).delete().then(function() {
//   console.log("Document successfully deleted!");
// }).catch(function(error) {
//   console.error("Error removing document: ", error);
// })
// }
// };


// {/* <h6>${postDate}<h6> */}
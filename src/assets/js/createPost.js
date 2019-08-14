import { observer } from './auth.js'
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
//usamos esta funcion para obtener uid de uauario corriente
          firebase.auth().onAuthStateChanged(user => {
    //obtenemos desde collecion users datos de usuario corriente con uid
    db.collection('users').doc(user.uid).get().then(doc => {
      //agrega un ID automatico
      //console.log(doc._document.proto.fields);
    db.collection("posts").add({
      //db.collection("users").doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      //authorName: doc.data().user,
      authorName: user.displayName,
      photo: user.photoURL,
      date: date,
      category: postCategory,
      message: postMesage
      // like: 1,
      // liked: 30
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      alert("post guardado con exito")
      //window.location.hash='#/feed';
      readPost();
      console.log(readPost());
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    })
   })
  })
  };

  // funcion para leer posts
  //const containerCreate = document.createElement("div");
  export const readPost = () => {
    const containerFeed = document.getElementById("container");
  db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().message}`);
        //templateFeed(doc);
        // const containerFeed = document.createElement("div");
        // containerFeed.className = "containerFeed";
        let postDate = new Date();
        containerFeed.innerHTML += 
        `<main id = "templateWall" class="mainLoginCreate">
<div class = "perfil">
        <img src="./assets/img/user.svg" class="imgAvatarPost" alt="avatar user"/><h2>${doc.data().authorName}</h2>
        </div>
        <h6>${postDate}<h6>
        <h2>${doc.data().category}</h2>
  <textarea name="postTxtWallFinal" class="txtAreaStylePost" cols="40" rows="2">${doc.data().message}</textarea>
    </main>`;
    //return containerFeed;
    })
})
};

// {/* <header class="secondHeader">
// <img src="./assets/img/back.svg" class="iconInputBack" alt="boton para volver"/>
// <img src="./assets/img/second-header.png" class="imgSecondHeader" alt="logo migra.me"/>
// </header> */}

  // const splitHashtag = (postHashtags) => {
    
  //   let splitHashtagArray = postHashtags.split("#" || " ");
  //   let hashtagSearch = {
  //     firstHash: splitHashtagArray[0],
  //     secondhash: splitHashtagArray[1],
  //   };
  //   return hashtagSearch;
  // };
  // //vay guardar usuario en la base de datos despues de logarse
  // const saveUserToDatabaseAfterLogin = (user, userName) => {
  //   //Convertir las informaciones de google en um objecto
  //   db.collection("users").doc(user.uid).set({
  //     email:user.email,
  //     firstName:userName.firstName,
  //   })
  //   console.log("uid:", user.uid, "email:", user.email, "firstName:", userName.firstName, "lastName:", userName.lastName);
  // };
  


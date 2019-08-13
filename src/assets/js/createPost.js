import { observer } from './auth.js'

// funcion para crear posts
export const createPost = () => {
  //observer();
  console.log("createPost A");
  //guardamos firestore en variable
  let db = firebase.firestore();
  //guardamos fecha
  let date = new Date();

  console.log("createPost B");

  //user = observer();
  //console.log("USER:", user);
  
  //guardamos os valores elijidos por el usuario
  let postCategory = document.querySelector("select[name=slctCategory]").value;
          let postMesage = document.querySelector("textarea[name=postTxt]").value;
          let postHashtags = document.querySelector("input[name=Hashtag]").value;
          let postLocation = document.querySelector("input[name=location]").value;
          console.log("category:", postCategory, "Mesage:", postMesage, "Hashtag:", postHashtags, "Location:", postLocation);
//usamos esta funcion para obtener uid de uauario corriente
          firebase.auth().onAuthStateChanged(user => {
    //obtenemos desde collecion users datos de usuario corriente con uid
    db.collection('users').doc(user.uid).get().then(doc => {

      //agrega un ID automatico
    db.collection("posts").add({
      //db.collection("users").doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      //authorName: doc.data().user,
      date: date,
      category: postCategory,
      message: postMesage,
      hashtag: postHashtags,
      location: postLocation,
      // like: 1,
      // liked: 30
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      alert("post guardado con exito");
    window.location.hash='#/login';
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    })
   })
  })
  };
    
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
  
  
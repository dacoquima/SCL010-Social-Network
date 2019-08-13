import { connect } from "./database.js";
import { createAccountInDb } from "./../js/database.js";
//variable de los datos como global
let db = firebase.firestore();
//fuccion para autenticar google
export const loginGoogle = () => {
  console.log("Google Ok");
  connect();
  //codigo retirado del firestore
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    
    .then(res => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // var token = res.credential.accessToken;
    // The signed-in user info
     //constante copiada desde firebase auth login con google
    const user = res.user;
      console.log("RES:", res);
      let userName = splitGoogleDisplayName(user.displayName);
      console.log("Hola", user.displayName);
    // let db = firebase.firestore();
    // aqui queremos obtener documentos desde firestore de collecion users que tirnrn como numero uid de usuario corriente
    db.collection('users').doc(user.uid).get().then(function(doc){
     // si documento existe entramos en el muro
     if (doc.exists) {
      alert("Has iniciado sesión con exito");
      window.location.hash = '#/feed';
     }else{
       //si no existe lo vamos a crear con uid de usuario
      saveUserToDatabaseAfterLogin(user, userName);
      //  db.collection("users").doc(user.uid).set({
      //   email:user.email,
      //   firstName:userName.firstName,
      //   lastName:userName.lastName,
      //   photo:user.photoURL,
      //   uid: user.uid
    //})
    alert("Has iniciado sesión con exito");
    window.location.hash='#/feed';
  }
});
})
    .catch(err => {
      console.log("El error es", err);
    });
};
//para dividir el nombre que está en Google para guardar en la DB
const splitGoogleDisplayName = displayName => {
  let splitDisplayNameArray = displayName.split(" ");
  let userName = {
    firstName: splitDisplayNameArray[0],
    lastName: splitDisplayNameArray[1]
  };
  return userName;
};
//vay guardar usuario en la base de datos despues de logarse
const saveUserToDatabaseAfterLogin = (user, userName) => {
  //Convertir las informaciones de google en um objecto
  db.collection("users").doc(user.uid).set({
    email:user.email,
    firstName:userName.firstName,
    lastName:userName.lastName,
    photo:user.photoURL,
    uid: user.uid
  })
  console.log("uid:", user.uid, "email:", user.email, "firstName:", userName.firstName, "lastName:", userName.lastName);
};

export const loginFacebook = () => {
  console.log("Fb Ok");

  var provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      const user = res.user;
      console.log("RES:", res);
      let userName = splitGoogleDisplayName(user.displayName);
      console.log("Hola", user.displayName);
    // aqui queremos obtener documentos desde firestore de collecion users que tirnrn como numero uid de usuario corriente
    db.collection('users').doc(user.uid).get().then(function(doc){
     // si documento existe entramos en el muro
     if (doc.exists) {
      alert("Has iniciado sesión con exito");
      window.location.hash = '#/feed';
     }else{
       //si no existe lo vamos a crear con uid de usuario
      saveUserToDatabaseAfterLogin2(user, userName);
      //  db.collection("users").doc(user.uid).set({
      //   email:user.email,
      //   firstName:userName.firstName,
      //   lastName:userName.lastName,
      //   photo:user.photoURL,
      //   uid: user.uid
    //})
    alert("Has iniciado sesión con exito");
    window.location.hash='#/feed';
  }
});
})

    .catch(err => {
      console.log("El error es", err);
    });
};

const createAccountEmail = (userdata, secret) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(userdata.email, secret.password1)
    .then(res => {
      const user = res.user;
      userdata.uid = user.uid;
      createAccountInDb(userdata);
      verifyEmail();
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

//para dividir el nombre que está en Google para guardar en la DB
const splitFacebookDisplayName = displayName => {
  let splitDisplayNameArray = displayName.split(" ");
  let userName = {
    firstName: splitDisplayNameArray[0],
    lastName: splitDisplayNameArray[1]
  };
  return userName;
};
//vay guardar usuario en la base de datos despues de logarse
const saveUserToDatabaseAfterLogin2 = (user, userName) => {
  //Convertir las informaciones de google en um objecto
  db.collection("users").doc(user.uid).set({
    email:user.email,
    firstName:userName.firstName,
    lastName:userName.lastName,
    photo:user.photoURL,
    uid: user.uid
  })
  console.log("uid:", user.uid, "email:", user.email, "firstName:", userName.firstName, "lastName:", userName.lastName);
};

export const createAccount = () => {
  let { secret, userdata } = getData();

  if (
    secret.password1 &&
    secret.password2 &&
    userdata.email &&
    userdata.fullName &&
    secret.password1 === secret.password2
  ) {
    createAccountEmail(userdata, secret);
  } else {
    alert("Contraseñas no coinciden");
  }
};

export const loginWithEmail = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => (location.href = "#/feed"))
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("existe usuario activo");
      show();
      var displayName = user.displayName;
      var email = user.email;
      console.log(email);
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      console.log("no hay usuario activo");
    }
  });
};

const getData = () => {
  let userdata = {};
  let secret = {};
  userdata.fullName = document.querySelector("input[name=fullName]").value;
  userdata.email = document.querySelector("input[name=email]").value;
  // userdata.creationData = new Date();Se usará para guardar la fecha de las publicaciones
  userdata.friends = [];
  secret.password1 = document.querySelector("input[name=password1]").value;
  secret.password2 = document.querySelector("input[name=password2]").value;
  return { secret, userdata };
};

function show() {
  let container = document.getElementById("showSome");
  container.innerHTML = "solo ve usuario activo";
}

const verifyEmail = () => {
  var user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(function() {
      // Email sent.
    })
    .catch(function(error) {
      // An error happened.
    });
};

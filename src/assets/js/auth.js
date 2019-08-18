import { connect } from "./database.js";
import { createAccountInDb } from "./../js/database.js";
import { templateSuccessCreate } from "../views/templateSuccessCreate.js";

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
      let userName = user.displayName;
      console.log("Hola", user.displayName);
      // let db = firebase.firestore();
      // aqui queremos obtener documentos desde firestore de collecion users que tirnrn como numero uid de usuario corriente
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc) {
          // si documento existe entramos en el muro
          if (doc.exists) {
            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          } else {
            //si no existe lo vamos a crear con uid de usuario
            saveUserToDatabaseAfterLogin(user, userName);
            window.location.hash = "#/feed";
          }
        });
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

//vay guardar usuario en la base de datos despues de logarse
export const saveUserToDatabaseAfterLogin = (user, userName) => {
  let date = new Date();
  //Convertir las informaciones de google en um objecto
  db.collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: userName,
      photo: user.photoURL,
      uid: user.uid,
      contacts: []
    });
  console.log("uid:", user.uid, "email:", user.email);
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
      let userName = user.displayName;
      console.log("Hola", user.displayName);
      // aqui queremos obtener documentos desde firestore de collecion users que tirnrn como numero uid de usuario corriente
      db.collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc) {
          // si documento existe entramos en el muro
          if (doc.exists) {
            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          } else {
            //si no existe lo vamos a crear con uid de usuario
            saveUserToDatabaseAfterLogin2(user, userName);

            alert("Has iniciado sesión con exito");
            window.location.hash = "#/feed";
          }
        });
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

//vay guardar usuario en la base de datos despues de logarse
const saveUserToDatabaseAfterLogin2 = (user, userName) => {
  //Convertir las informaciones de google en um objecto
  db.collection("users")
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: userName,
      photo: user.photoURL,
      uid: user.uid,
      contacts: []
    });
  console.log("uid:", user.uid, "email:", user.email);
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
      firebase.auth().currentUser.updateProfile({
        displayName: userdata.displayName
      });
      templateSuccessCreate();
    })
    .catch(err => {
      console.log("El error es", err);
    });
};

export const createAccount = () => {
  let { secret, userdata } = getData();
  if (
    secret.password1 &&
    secret.password2 &&
    userdata.email &&
    userdata.displayName &&
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
      // show();
      var displayName = user.displayName;
      var email = user.email;
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
    return;
  });
};

const getData = () => {
  let userdata = {};
  let secret = {};
  userdata.displayName = document.querySelector("input[name=fullName]").value;
  userdata.email = document.querySelector("input[name=email]").value;
  userdata.contacts = [];
  secret.password1 = document.querySelector("input[name=password1]").value;
  secret.password2 = document.querySelector("input[name=password2]").value;
  return {
    secret,
    userdata
  };
};

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

export const rememberPassword = () => {
  var auth = firebase.auth();
  var emailAddress = document.querySelector("input[name=email]").value;

  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function() {
      console.log("Correo de reestablecimiento de contraseña enviado");
      location.href = "#/login";
    })
    .catch(function(error) {
      // An error happened.
    });
};

export const signOutAccount = () => {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      location.href = "#/login";
    })
    .catch(function(error) {
      // An error happened.
    });
};
